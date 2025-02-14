const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const EpochCommittee = require("../models/epochCommittee");
const exec = require("child_process").exec;
const BFTMessage = require("../models/bftmessage");
const CommitteePkInfo = require("../models/committeePkInfo");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);

const TS = process.env.TIME_SLOT;
const EpochCommitteeDB = new EpochCommittee(DBEndpoint);
const BFTMessageDB = new BFTMessage(DBEndpoint);

async function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);
    });
}

!(async function () {
    fromEpoch = 1;

    let last = await CommitteePkInfoDB.model.find().limit(1).sort({ Epoch: -1 });
    let lastEpoch = last.length == 1 ? last[0].Epoch : fromEpoch;

    while (true) {
        let epochComm = await EpochCommitteeDB.model.find({ Epoch: lastEpoch }).lean();

        console.log("process epoch", lastEpoch);

        for (let chainData of epochComm) {
            let cid = 0;
            for (let committeePk of chainData.Committee) {
                cid++;
                let { totalVote, totalPropose } = await updateVoteCount(lastEpoch, committeePk, chainData.ChainID);
                let update = {
                    ChainID: chainData.ChainID,
                    TotalVote: totalVote,
                    TotalPropose: totalPropose,
                    Reward: chainData.RewardAmount,
                    MiningPubkey: await getMiningPk(committeePk),
                    Time: new Date(chainData.BlockTime),
                };
                if (totalPropose > 0) {
                    update["VotePercentage"] = Math.floor(100 * (totalVote / totalPropose));
                }

                await CommitteePkInfoDB.model.findOneAndUpdate({ CommitteePk: committeePk, Epoch: lastEpoch }, update, { upsert: true });
                console.log("update committee chain", chainData.ChainID, "index", cid, committeePk.substr(committeePk.length - 10, committeePk.length - 1), totalVote, totalPropose);

                let updateLastStat = {
                    LastCommitteeStat: update,
                };
            }
        }

        if (epochComm.length < 8) {
            lastEpoch -= 2;
            await sleep(60);
        } else {
            lastEpoch++;
        }
    }
})();

async function updateVoteCount(epoch, committee, chainID) {
    let miningPk = await getMiningPk(committee);
    console.log(epoch, miningPk, chainID);
    let totalVote = await BFTMessageDB.model.count({ Epoch: epoch, Type: "vote", MiningPubkey: miningPk, Chain: "shard-" + chainID });
    let totalPropose = await BFTMessageDB.model.count({ Epoch: epoch, Type: "propose", Chain: "shard-" + chainID });
    return { totalVote, totalPropose };
}

let miningPkCache = {};
async function getMiningPk(committeePk) {
    if (miningPkCache[committeePk]) return miningPkCache[committeePk];
    return await new Promise((resolve) => {
        exec(require("path").join(__dirname, "../golang_utils/cpk2mpk ") + committeePk, (stderr, stdout) => {
            miningPkCache[committeePk] = stdout.trim();
            resolve(stdout.trim());
        });
    });
}
