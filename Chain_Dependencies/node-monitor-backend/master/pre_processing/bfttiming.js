const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const BFTMessage = require("../models/bftmessage");
const BFTTiming = require("../models/bfttiming");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const TS = process.env.TIME_SLOT;
const BFTMessageDB = new BFTMessage(DBEndpoint);
const BFTTimingDB = new BFTTiming(DBEndpoint);

async function sleep(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);
    });
}

async function GroupTS() {
    const BATCH_SIZE = 50;
    //find latest processed timeslot
    let latestTimeslot = await BFTTimingDB.model.find().sort({ Timeslot: -1 }).limit(1).lean();

    let latestTS = 0;
    if (latestTimeslot.length != 0) {
        latestTS = latestTimeslot[0].Timeslot;
    }

    //group unprocessed timeslot
    let aggregateTS = await BFTMessageDB.model.aggregate([
        {
            $match: {
                Type: "propose",
                Timeslot: { $gte: latestTS -1},
            },
        },
        {
            $limit: BATCH_SIZE * 100,
        },
        {
            $sort: {
                "_id.Timeslot": 1,
            },
        },
        {
            $group: {
                _id: {
                    Timeslot: "$Timeslot",
                    ChainID: "$ChainID",
                    BlockHash: "$BlockHash",
                    BlockHeight: "$BlockHeight",
                    ProduceTime: "$Timestamp",
                },
            },
        },
        {
            $sort: {
                "_id.Timeslot": 1,
            },
        },
        {
            $limit: BATCH_SIZE,
        },
    ]);

    console.log("Run GroupTS", aggregateTS[0]?._id.Timeslot, aggregateTS.length);

    //write group TS to database
    for (let i in aggregateTS) {
        await BFTTimingDB.updateUpsert(aggregateTS[i]._id, aggregateTS[i]._id);
    }

    if (aggregateTS.length == BATCH_SIZE) {
        GroupTS();
    } else {
        setTimeout(GroupTS, 5000);
    }
}
GroupTS();
ProcessBFTTiming();

async function ProcessBFTTiming() {
    const BATCH_SIZE = 100;
    //Get unprocessing BFT Timing
    let tsRecords = await BFTTimingDB.model
        .find({
            $or: [{ Status: { $exists: false } }, { Status: 0 }],
        })
        .sort({ Timeslot: 1 })
        .limit(BATCH_SIZE)
        .lean();
    let finishProcess = 0;
    //Update BFT Timing Info
    for (let item of tsRecords) {
        let result = await BFTMessageDB.list({ BlockHash: item.BlockHash }, null, 100, { receiveTime: 1 });

        item.Status = 0;

        if (item.Status != 1 && new Date() - 2 * 60 * 1000 > item.ProduceTime) {
            item.Status = 1;
            finishProcess++;
        }

        for (let i = 0; i < result.length; i++) {
            let x = result[i];
            if (x.Type == "propose") {
                item.Proposer = x.CommitteePubkey;
                item.Epoch = x.Epoch;
                item.ReceiveProposeBlockTime = x.receiveTime - x.Timestamp 
                item.ChainID = x.ChainID;
                break;
            }
        }
        let voteCnt = {};
        let allVoteCnt = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i].Type == "vote") {
                let tmp = result[i].receiveTime - item.ProduceTime;
                if (tmp > (item.ReceiveLastVoteTime || 0)) {
                    item.ReceiveLastVoteTime = tmp;
                }
                allVoteCnt++;
                voteCnt[result[i].MiningPubkey] || (voteCnt[result[i].MiningPubkey] = 0);
                voteCnt[result[i].MiningPubkey]++;
                
                if (item.ChainID != -1 && Object.keys(voteCnt).length == Math.floor((48 / 3) * 2) + 1) {
                    item.ReceiveMajorityVoteTime = result[i].receiveTime - item.ProduceTime;
                }
                if (item.ChainID == -1 && Object.keys(voteCnt).length == Math.floor((7 / 3) * 2) + 1) {
                    item.ReceiveMajorityVoteTime = result[i].receiveTime - item.ProduceTime;
                }
            }
        }

        item.TotalVote = Object.keys(voteCnt).length;
        item.TotalUniqueVote = allVoteCnt;
        item.ReceiveMajorityVoteTime = item.ReceiveMajorityVoteTime || 0;
        await BFTTimingDB.update({ _id: item._id }, item);
    }

    try {
        console.log("Run ProcessBFTTiming", tsRecords[0].Timeslot, tsRecords.length, finishProcess);
    } catch (err) {
        console.log(tsRecords);
    }

    if (finishProcess == 0) {
        setTimeout(ProcessBFTTiming, 5000);
    } else {
        ProcessBFTTiming();
    }
}
