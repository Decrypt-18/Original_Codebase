const exec = require("child_process").exec;
const Redis = require("../utils/redis");
const axios = require('axios')
const IncognitoClient = require("../utils/IncognitoRPC");
const REDISEndpoint = process.env.REDIS;
var redisClient = new Redis(REDISEndpoint, 2);

let miningPkCache = {};
async function getMiningPk(committeePk) {
    if (miningPkCache[committeePk]) return miningPkCache[committeePk];
    let mpk = await redisClient.get(committeePk);
    if (!mpk) {
        return await new Promise((resolve) => {
            exec(require("path").join(__dirname, "../golang_utils/cpk2mpk ") + committeePk, (stderr, stdout) => {
                miningPkCache[committeePk] = stdout.trim();
                redisClient.set(committeePk, stdout.trim());
                resolve(stdout.trim());
            });
        });
    } else {
        miningPkCache[committeePk] = mpk;
        return mpk;
    }
}

exports = module.exports = {
    getMiningPk,
    getSyncState,
    isOnline,
    IsBeaconSync,
    isLatestVersion
};

function isOnline(seenTime) {
    if (new Date() - new Date(seenTime || 0) > 100 * 1000) {
        return false;
    }
    return true;
}

function IsBeaconSync(nodeHeight, chainHeight, lastInsert) {
    if (nodeHeight + 5 < chainHeight) {
        if (new Date() - new Date(lastInsert) > 2 * 60 * 1000) {
            return "STALL";
        }
        return "SYNCING";
    }
    return "LATEST";
}

function getSyncState(nodeState, chainID, currentBlockChainState) {
    if (!nodeState.Beacon.IsSync) {
        return "NODE STALL";
    }

    if (!nodeState.Beacon) {
        return "Unknown";
    }
    if (nodeState.Beacon.BlockHeight + 5 < currentBlockChainState["-1"].Height) {
        if (!nodeState.Beacon.LastInsert || new Date() - new Date(nodeState.Beacon.LastInsert) > 2 * 60 * 1000) {
            return "BEACON STALL";
        }
        return "BEACON SYNCING";
    }

    if (chainID != "" && chainID > -1) {
        if (!nodeState.Shard || !nodeState.Shard[chainID]) {
            return "Unknown";
        }
        if (nodeState.Shard[chainID].BlockHeight + 5 < currentBlockChainState[chainID].Height) {
            if (!nodeState.Shard[chainID].LastInsert || (new Date() - new Date(nodeState.Shard[chainID].LastInsert) > 2 * 60 * 1000)) {
                return "SHARD STALL";
            }
            return "SHARD SYNCING";
        }
    }

    return "LATEST";
}

var latestReleaseCommit = "b83c74d4d"
async function updateLatestRelease(){
    const NODE_HOST = process.env.NODE_HOST;
    let client = new IncognitoClient(NODE_HOST);
    let networkinfo = await client.GetNetworkInfo();
    latestReleaseCommit = networkinfo.Commit
    console.log("latestReleaseCommit", latestReleaseCommit)
}
updateLatestRelease()
setInterval(updateLatestRelease, 10*60*1000)

function isLatestVersion(versionCommit) {
    // console.log(versionCommit, latestReleaseCommit)
    //no version commit (manuually run)
    if (!versionCommit){
        return true
    }

    if (!latestReleaseCommit) {
        return true
    }

    if (latestReleaseCommit.indexOf(versionCommit) == 0) {
        return true
    }
    return false
}


