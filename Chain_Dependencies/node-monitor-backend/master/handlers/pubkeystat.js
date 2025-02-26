const { getMiningPkState, getCurrentState,updateStat } = require("./updatestate");
const { getSyncState, getMiningPk, isOnline, isLatestVersion } = require("./utils");
exports = module.exports = {
    committee,
    stat,
    sync,
    reward,
};

const Redis = require("../utils/redis");
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const REDISEndpoint = process.env.REDIS;
const REDIS_DB = process.env.REDIS_DB;
var redisClient = new Redis(REDISEndpoint, REDIS_DB);

const CommitteePkInfo = require("../models/committeePkInfo");
const { time } = require("console");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);

async function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);
    });
}

async function reward(req, res) {
    let mpk = req.body.mpk
    dataResult = await getReward(req.query.mpk,req.query.from,req.query.to)
    res.send(dataResult)
}

async function getReward(mpk,from,to ) {
    mpk = mpk.split(",");
    let fromDate = new Date(from || 0)
    let toDate =  new Date(to || new Date())
    let rewardResult = await CommitteePkInfoDB.model.aggregate([
        {
            $match: {
               MiningPubkey:  {"$in": mpk},
                Time: { $gte: fromDate, $lte: toDate}
           }
        },
        {
            $group: {
                _id: "$MiningPubkey",
                totalReward: {
                    $sum: "$Reward"
                },
                totalEpoch: {
                    $sum: 1
                },
            }
        }
    ])
    return { fromDate: fromDate.toISOString(), toDate: toDate.toISOString(), data: rewardResult}
}

async function stat(req, res) {
    let cpk = (req.body.cpk || "").split(",");
    let mpk = (req.body.mpk || "").split(",");

    cpk.length == 1 && cpk[0] == "" && (cpk = []);
    mpk.length == 1 && mpk[0] == "" && (mpk = []);
    if (cpk.length + mpk.length > 50) {
        return res.json({ error: "Exceed number of requested publickey" });
    }

    let cpkmap = {};
    for (let pk of cpk) {
        if (!pk) continue;
        let mpk_tmp = await getMiningPk(pk);
        if (mpk_tmp) {
            cpkmap[mpk_tmp] = pk;
        }
        mpk.push(mpk_tmp);
    }

    let resData = await updateStat(mpk)
    res.header("Access-Control-Allow-Origin", "*");
    res.json(resData);
}

async function committee(req, res) {
    let mpk = req.body.mpk;
    let cpk = req.body.cpk;
    if (cpk) { 
        mpk = await getMiningPk(cpk);
    } 

    if (!mpk) {
        return res.json({});
    }

    let resData = await CommitteePkInfoDB.model.find({ MiningPubkey: mpk }, { _id: 0, Epoch: 1, ChainID: 1, Reward: 1, Time: 1, TotalVote: 1, TotalPropose: 1, totalVoteConfirm: 1, totalEpochCountBlock: 1, slashed: 1}).sort({ Epoch: -1 }).limit(10).lean();
    resData.map(x => {
        if (x.totalEpochCountBlock) {
            x.TotalPropose = x.totalEpochCountBlock
            x.TotalVote = x.totalVoteConfirm
        }
        x.IsSlashed = x.slashed
        if (x.IsSlashed) {
            x.Reward = 0
        }
        delete(x.slashed)
    })
    
    res.header("Access-Control-Allow-Origin", "*");
    res.json(resData);
}

async function sync(req, res) {
    let mpk = req.body.mpk;
    let cpk = req.body.cpk;
    if (cpk) {
        mpk = await getMiningPk(cpk);
    }

    if (!mpk) {
        return res.json({});
    }

    res.header("Access-Control-Allow-Origin", "*");
    let resData = {};
    let data = (await redisClient.get(mpk)) || "{}";
    resData = JSON.parse(data).sync;
    res.json(resData || {});
}
