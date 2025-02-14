const { getAllValidator, getCurrentState } = require("./updatestate");
const { getSyncState, getMiningPk, isOnline, IsBeaconSync } = require("./utils");

require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const DBEndpoint = process.env.MONGO_DATABASE_URL;

const CommitteePkInfo = require("../models/committeePkInfo");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);
var RedListAll = [];

const REDISEndpoint = process.env.REDIS;
const REDIS_DB = process.env.REDIS_DB;
const Redis = require("../utils/redis");
var redisClient = new Redis(REDISEndpoint, REDIS_DB);

async function updateRedlist() {
    let allVal = getAllValidator();
    let tmpRedListAll = [];
    if (Object.keys(allVal).length > 0) {
        for (let val of Object.keys(allVal)) {
            let lastCommitteeData = await CommitteePkInfoDB.model.find({ MiningPubkey: val }).sort({ Epoch: -1 }).limit(1).lean();
            if (lastCommitteeData.length != 0 && (!lastCommitteeData[0].VotePercentage || lastCommitteeData[0].VotePercentage < 50) ) {
                tmpRedListAll.push(val);
            }
        }
        RedListAll = tmpRedListAll;
        console.log("update red list ...", RedListAll.length);
        setTimeout(updateRedlist, 10 * 60 * 1000);
    } else {
        setTimeout(updateRedlist, 10 * 1000);
    }
}

updateRedlist();

// var versionMap = {}
// async function checkVersionUpdate() {
//     let allVal = getAllValidator();
//     console.log("xxxxx",allVal.length)
//     if (Object.keys(allVal).length > 0) {
//         for (let val of Object.keys(allVal)) {
//             let data = (await redisClient.get(val)) || "{}";
//             if (!versionMap[data.commit] && versionMap[data.commit] != "NA") {
//                 versionMap[data.commit]  ={}
//             } 
//         }
//         //now, we have all commitID in the network -> check network id
//         console.log(versionMap)
//         // await updateCommitStatus(versionMap)
//         setTimeout(checkVersionUpdate, 60 * 60 * 1000);
//     } else {
//         setTimeout(checkVersionUpdate, 10 * 1000);
//     }
// }
// checkVersionUpdate()

const LIMIT = 20;
exports = module.exports = {
    redlist: function (req, res) {
        try {
            let list = RedListAll;
            let page = isNaN(req.query.page) ? 1 : req.query.page || 1;
            let x = list.slice((page - 1) * LIMIT, page * LIMIT);
            res.json({
                data: x,
                page: page,
                total: list.length,
            });
        } catch (err) {
            console.log(err);
            res.status(500);
            res.end();
        }
    },
};
