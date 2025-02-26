exports = module.exports = {
    dataSeries,
    summary,
};

const BFTTiming = require("../models/bfttiming");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const BFTTimingDB = new BFTTiming(DBEndpoint);

async function dataSeries(req, res) {
    let chainID = req.query["cid"] || -1;
    let info = await BFTTimingDB.list({ ChainID: chainID, BlockHeight: { $gt: 2 } }, 0, 200, { Timeslot: 1 });
    let ts = info.map((x) => x.Timeslot);
    let produceTime = info.map((x) => x.ProduceTime);
    let receivePropose = info.map((x) => x.ReceiveProposeBlockTime);
    let receiveMajorityVote = info.map((x) => x.ReceiveMajorityVoteTime);
    let receiveLastVote = info.map((x) => x.ReceiveLastVoteTime);
    res.json({
        x: ts,
        produce: produceTime,
        propose: receivePropose,
        majorityvote: receiveMajorityVote,
        lastvote: receiveLastVote,
    });
}

async function summary(req, res) {
    let chainID = req.query["chainID"] || 0;

    let info = await BFTTimingDB.list({ ChainID: chainID, BlockHeight: { $gt: 2 } }, 0, 200, { Timeslot: 1 });

    let produceTime = info
        .filter((x) => {
            if (x.ProduceTime) {
                return true;
            } else {
                return false;
            }
        })
        .map((x) => x.ProduceTime);

    console.log(produceTime);

    let receivePropose = info
        .filter((x) => {
            if (x.ReceiveProposeBlockTime) {
                return true;
            } else {
                return false;
            }
        })
        .map((x) => x.ReceiveProposeBlockTime);

    let receiveMajorityVote = info
        .filter((x) => {
            if (x.ReceiveMajorityVoteTime) {
                return true;
            } else {
                return false;
            }
        })
        .map((x) => x.ReceiveMajorityVoteTime);

    let receiveLastVote = info
        .filter((x) => {
            if (x.ReceiveLastVoteTime) {
                return true;
            } else {
                return false;
            }
        })
        .map((x) => x.ReceiveLastVoteTime);

    res.json({
        chainID: chainID,
        metrics: [
            {
                metric: "produce",
                median: median(produceTime),
                min: Math.min(...produceTime),
                max: Math.max(...produceTime),
            },
            {
                metric: "propose",
                median: median(receivePropose),
                min: Math.min(...receivePropose),
                max: Math.max(...receivePropose),
            },
            {
                metric: "majorityvote",
                median: median(receiveMajorityVote),
                min: Math.min(...receiveMajorityVote),
                max: Math.max(...receiveMajorityVote),
            },
            {
                metric: "lastvote",
                median: median(receiveLastVote),
                min: Math.min(...receiveLastVote),
                max: Math.max(...receiveLastVote),
            },
        ],
    });
}

function median(arr) {
    const len = arr.length;
    const arrSort = arr.sort(function (a, b) {
        return a - b > 0 ? true : false;
    });
    const mid = Math.ceil(len / 2);

    const median = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    return median;
}

async function fetchGrafanaBFTTimingMetrics(query) {
    let chainID = req.query["chainID"] || 0;
    let info = await BFTTimingDB.list({ ChainID: chainID, BlockHeight: { $gt: 2 } }, 0, 1000, { Timeslot: 1 });

    let ts = info.map((x) => x.Timeslot);
    let produceTime = info.map((x) => x.ProduceTime);
    let receivePropose = info.map((x) => x.ReceiveProposeBlockTime);
    let receiveMajorityVote = info.map((x) => x.ReceiveMajorityVoteTime);
    let receiveLastVote = info.map((x) => x.ReceiveLastVoteTime);
}
