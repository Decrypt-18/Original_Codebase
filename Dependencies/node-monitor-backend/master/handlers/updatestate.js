const { getSyncState, getMiningPk, isOnline, isLatestVersion } = require("./utils");
const IncognitoClient = require("../utils/IncognitoRPC");
var AllValidator = {};
var ChainInfo = {};
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const NODE_HOST = process.env.NODE_HOST;
const NODE_PORT = process.env.NODE_PORT;

const TIME_SLOT = process.env.TIME_SLOT;
const Redis = require("../utils/redis");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const REDISEndpoint = process.env.REDIS;
const REDIS_DB = process.env.REDIS_DB;
var redisClient = new Redis(REDISEndpoint, REDIS_DB);

const CommitteePkInfo = require("../models/committeePkInfo");
const CommitteeEventInfo = require("../models/committeeEvent");
const { default: axios } = require("axios");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);
const CommitteeEventInfoDB = new CommitteeEventInfo(DBEndpoint);

async function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);
    });
}

const Node = {
    host: NODE_HOST,
    port: NODE_PORT
};

async function checkCrossShard(){
    // let client = new IncognitoClient("localhost", 10349);
    // // let beaconState = await client.GetBeaconViewByHash('3151758ddfa0025a48cf3d9c2a7eee9c116e49e5549d3aa66773cc54899299dd');
    // let beaconState = await client.GetBeaconBestState();
    // console.log(beaconState.BestBlock)
    console.log("checkCrossShard")
    let client = new IncognitoClient(Node.host, Node.port);
    let beaconState = await client.GetBeaconBestState();
    // console.log("getbeststate")
    // console.log(JSON.stringify(beaconState,null,4))
    let lastCross = beaconState.LastCrossShardState
    for (let sid = 0; sid < 8; sid++){
        let shardState = await client.GetShardBestState(sid);
        let shardCrossInfo = shardState.BestCrossShard
        for (let fromSid =0; fromSid < 8; fromSid++){
            if (fromSid == sid) continue;
            if (shardCrossInfo[fromSid] < lastCross[fromSid][sid]){
                console.log(`from shard ${fromSid} to shard ${sid}`,shardCrossInfo[fromSid], lastCross[fromSid][sid])
            }
        }
    }
    console.log("finish")
}
// checkCrossShard()

async function getStatInfo(mpk){
    let resData = [];
    for (let pk of mpk) {
        if (!pk) continue;
        let data = (await redisClient.get(pk)) || "{}";
        let filterData = {};
        data = JSON.parse(data);
        let state = getMiningPkState(pk) || {};
        data.role = state.role || "";
        data.chainID = state.role ? (state.chainID ? state.chainID.toString() : "") : "";
        data.autostake = state.autostake;
        data.nextEventMsg = ""
        if (data.role == "WAITING") {
            let nextEpochs = Math.floor(state.index / 32) + 1
            data.nextEventMsg = `${nextEpochs} epoch to be SYNCING`
        }

        if (data.role == "SYNCING") {
            let res = await CommitteeEventInfoDB.model.find({ Event: "stake", MiningPubkey: pk }, { _id: 0, BlkTimestamp: -1 }).sort({ BlkTimestamp: -1 }).limit(1).lean()
            if (res && res.length == 1) {
                let lastEvent = res[0]
                if (new Date() - new Date(lastEvent["BlkTimestamp"]) < 4.5 * 24 * 60 * 60 * 1000) {
                    let offset = 4.5 * 24 * 60 * 60 * 1000 - (new Date() - new Date(lastEvent["BlkTimestamp"]))
                    // console.log(offset /  4 * 60 * 60 * 1000)
                    let epoch = Math.ceil(offset / (4 * 60 * 60 * 1000))
                    data.nextEventMsg = `wait ${epoch} epoch`
                } else {
                    data.nextEventMsg = `wait FinishSync Signal`
                }
            }
        }

        if (data.role == "PENDING") {
            let nextEpochs = Math.floor(state.index / 4) + 1    
            data.nextEventMsg = `${nextEpochs} epoch to be COMMITTEE`
        }

        if (data.role == "COMMITTEE") {
            let nextEpochs = Math.floor((state.index - 22) / 4) + 1
            data.nextEventMsg = `${nextEpochs} epoch to be PENDING`
            if (data.autostake == false && nextEpochs >= 0) {
                data.nextEventMsg = `${nextEpochs} epoch to UNSTAKE`
            }
        }

        let online = isOnline(data.seen);
        let syncState = online && getSyncState(data.sync, data.chainID, getCurrentState());
        let cinfo = await CommitteePkInfoDB.model.find({ MiningPubkey: pk }, { _id: 0, slashed:1, Epoch: 1, Reward: 1, Time: 1, TotalVote: 1, TotalPropose: 1, totalVoteConfirm: 1, totalEpochCountBlock: 1}).sort({ Epoch: -1 }).limit(2).lean();
        let alert = false;
        let lastVoteStat  = ""

        let isSlashed = false
        if (cinfo.length > 0) {
            x = cinfo[0]
            isSlashed = (!data.role && x.slashed) || false
            lastVoteStat= Math.ceil((100 * x.totalVoteConfirm) / x.totalEpochCountBlock) 
        }
        let voteStat = cinfo.map((x) => {
            if (x.totalEpochCountBlock > 0) {
                if (Math.floor((100 * x.totalVoteConfirm) / x.totalEpochCountBlock) <= 50) {
                    alert = true;
                }
                return Math.floor((100 * x.totalVoteConfirm) / x.totalEpochCountBlock) + ` (epoch:${x.Epoch})`;
            }

            if (x.TotalPropose > 0) {
                if (Math.floor((100 * x.TotalVote) / x.TotalPropose) <= 50) {
                    alert = true;
                }
                return Math.floor((100 * x.TotalVote) / x.TotalPropose) + ` (epoch:${x.Epoch})`;
            }
            return "";
        });

        filterData = {
            Status: data.seen ? (online ? "ONLINE" : "OFFLINE") : alert ? "OFFLINE" : "UNKNOWN",
            Role: data.role,
            NextEventMsg: data.nextEventMsg,
            CommitteeChain: data.chainID,
            SyncState: syncState || "",
            LastVoteStat: lastVoteStat,
            VoteStat: voteStat,
            MiningPubkey: pk,
            AutoStake: data.autostake,
            Alert: alert,
            Version: data.commit,
            IsOldVersion: !(isLatestVersion(data.commit)),
            IsSlashed: isSlashed
        };
        // console.log(data.commit, isLatestVersion(data.commit),!(isLatestVersion(data.commit)))
        resData.push(filterData);
    }
    return resData
}

async function updateCommittee() {
    try {
        const tmpCommittee = {};
        console.log(Node.host, Node.port)
        let client = new IncognitoClient(Node.host, Node.port);
        let beaconState = await client.GetBeaconBestState();
        // let networkInfo = await client.GetNetworkInfo()
        let fixMpks = []
        //beacon
        for (let [index,c] of beaconState.BeaconCommittee.entries()) {
            let mpk = await getMiningPk(c);
            tmpCommittee[mpk] = { role: "COMMITTEE", cpk:c,  chainID: -1, autostake: beaconState.AutoStaking[c],index };
            fixMpks.push(mpk)
        }

        //shard
        
        for (let sid in beaconState.ShardCommittee) {
            for (let [index,c] of beaconState.ShardCommittee[sid].entries()) {
                let mpk = await getMiningPk(c);
                // if (mpk == "1SuewgTk6vY32JdKKF8GCmMQiQx2PVkJRTugbH2eTLcS3cbroVczx6JTMbtqsm6FSZPMVXoKU93E2wnZbFKZ4DVMt7711exSTZtfXpws3yWc8gN1ZaYmDyhCtzTqCpsvx5rNzttafpsXQAoQAKLb7AWicY7szEJ3z4fQZ9j3JjeZCtWXKaN9R"){
                //     console.log(sid, index)
                // }
                tmpCommittee[mpk] = { role: "COMMITTEE", cpk:c, chainID: sid, autostake: beaconState.AutoStaking[c] ,index};
                if (beaconState.ShardCommittee[sid].indexOf(c) < 22) {
                    fixMpks.push(mpk)
                }
            }
        }
        // console. /'(JSON.stringify(fixMpks,null,4))
        for (let [index,c] of beaconState.CandidateShardWaitingForCurrentRandom.entries()) {
            let mpk = await getMiningPk(c);
            tmpCommittee[mpk] = { role: "WAITING",  cpk:c, autostake: beaconState.AutoStaking[c],index };
        }

        for (let [index,c] of beaconState.CandidateShardWaitingForNextRandom.entries()) {
            let mpk = await getMiningPk(c);
            tmpCommittee[mpk] = { role: "WAITING",  cpk:c, autostake: beaconState.AutoStaking[c],index };
        }
        
        for (let sid in beaconState.SyncingValidator) {
            for (let [index,c] of beaconState.SyncingValidator[sid].entries()) {
                let mpk = await getMiningPk(c);
                tmpCommittee[mpk] = { role: "SYNCING",  cpk:c, chainID: sid, autostake: beaconState.AutoStaking[c] ,index};
            }
        }

        for (let sid in beaconState.ShardPendingValidator) {
            for (let [index,c] of beaconState.ShardPendingValidator[sid].entries()) {
                let mpk = await getMiningPk(c);
                tmpCommittee[mpk] = { role: "PENDING",  cpk:c, chainID: sid, autostake: beaconState.AutoStaking[c] ,index};
            }
        }


        AllValidator = tmpCommittee;
        console.log("Updated committee list", Object.keys(AllValidator).length, beaconState.BeaconHeight);
    } catch (err) {
        console.log(err);
    } 
}

async function updateTotalNodes(){
    let offline = 0
    let stalling = 0
    let syncing = 0
    let oldVersion = 0
    let warningVote = 0
    let alertVote = 0
    let allMPK = Object.keys(AllValidator)
    for (let i = 0; i < allMPK.length ; i++){
        x = allMPK[i]
        let statInfo = (await getStatInfo([x]))[0]
        statInfo.Status == "OFFLINE"  && offline++
        statInfo.Status != "OFFLINE" && statInfo.SyncState != "" && (statInfo.SyncState != "LATEST" && statInfo.SyncState != "SHARD SYNCING" && statInfo.SyncState != "BEACON SYNCING" ) && stalling++
       (statInfo.SyncState == "SHARD SYNCING" || statInfo.SyncState== "BEACON SYNCING" ) && syncing++
       statInfo.IsOldVersion && oldVersion++
       statInfo.CommitteeChain != -1 && statInfo.LastVoteStat !== "" && statInfo.LastVoteStat < 50 && warningVote++
       statInfo.Role == "COMMITTEE" && statInfo.CommitteeChain != -1 && statInfo.LastVoteStat < 50 && alertVote++
    }
    totalNode = allMPK.length
    var querystring = require("querystring")
    let query = querystring.stringify({totalNode, offline, stalling, syncing, oldVersion, warningVote, alertVote});
    console.log(query)
    try {
        await axios.get("https://script.google.com/macros/s/AKfycbyJ6WPhq_r4YB6uSJrDdSQfSj_GeKaQccIw_n_Aw32qoPbLrAjxfZJbEES59MX8-ckd/exec?"+query)
    } catch(err){
        console.log(err)
    }
    

    
}

async function updateBlockChainInfo() {
    try {
        let client = new IncognitoClient(Node.host, Node.port);
        let chainInfo = await client.GetBlockChainInfo();
        ChainInfo = chainInfo.BestBlocks;
    } catch (err) {
        console.log(err);
    } 
}
!async function(){
    await updateCommittee()
    await updateBlockChainInfo()
    updateTotalNodes()
}()

setInterval(updateCommittee,TIME_SLOT * 1000);
setInterval(updateBlockChainInfo,TIME_SLOT * 1000);
setInterval(updateTotalNodes, 60 * 60 * 1000);


function getMiningPkState(mpk) {
    return AllValidator[mpk] || {};
}

function getCurrentState() {
    return JSON.parse(JSON.stringify(ChainInfo));
}

function getAllValidator() {
    return JSON.parse(JSON.stringify(AllValidator));
}

exports = module.exports = { getMiningPkState, getCurrentState, getAllValidator,updateStat: getStatInfo };
