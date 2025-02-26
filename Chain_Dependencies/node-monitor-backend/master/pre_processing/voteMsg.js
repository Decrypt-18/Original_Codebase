const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const BFTMessage = require("../models/bftmessage");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const BFTMessageDB = new BFTMessage(DBEndpoint);

async function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);
    });
}

async function ProcessVoteMsg() {
    let cnt = 0;
    while (true) {
        let query = {
            Type: "vote",
            $or: [
                { ProcessVoteMsg: { $exists: false } },
                {
                    ProcessVoteMsg: {
                        finish: false,
                        lastProgress: { $lt: new Date() - 5 * 60 * 1000 },
                    },
                },
            ],
        };

        let findRes = await BFTMessageDB.model.find(query).sort({ Timestamp: 1 }).limit(1);
        if (findRes.length == 0) {
            await sleep(1);
            continue;
        }
        let { BlockHash } = findRes[0];
        console.log(BlockHash, cnt++);

        let proposeMsg = await BFTMessageDB.model
            .findOne({
                Type: "propose",
                BlockHash: BlockHash,
            })
            .lean();

        let { BlockHeight, Epoch } = proposeMsg || {};

        let finishProcess = true;
        if (!Epoch) {
            finishProcess = false;
        }
        query = {
            Type: "vote",
            BlockHash: BlockHash,
        };
        let update = {
            $set: {
                Epoch,
                BlockHeight,
                ProcessVoteMsg: {
                    finish: finishProcess,
                    lastProgress: new Date(),
                },
            },
        };

        // console.log(query, update);
        let updateRes = await BFTMessageDB.model.updateMany(query, update);
        // console.log(updateRes)
    }
}

ProcessVoteMsg();
