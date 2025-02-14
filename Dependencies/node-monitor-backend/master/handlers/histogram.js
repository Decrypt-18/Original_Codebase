const Redis = require("../utils/redis");
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const CommitteePkInfo = require("../models/committeePkInfo");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);

exports = module.exports = function (req, res) {
    res.json({
        data: histogram(req.epoch),
        bin: SIZE,
        unit: "%",
    });
};

const SIZE = 10;
async function histogram(epoch = 3260) {
    let allCommitteeInfo = await CommitteePkInfoDB.model.find({ Epoch: epoch }).lean();
    let h = allCommitteeInfo.map((x) => x.VotePercentage);
    histogramExec(h, SIZE);
    return x;
}

function histogramExec(data, size) {
    return data.reduce(function (acc, cur) {
        var k = Math.floor(cur / size);
        if (!(k in acc)) acc[k] = 0; // creates a bin if neccessary
        acc[k]++; // increments the bin
        return acc;
    }, new Array(size).fill(0));
}
