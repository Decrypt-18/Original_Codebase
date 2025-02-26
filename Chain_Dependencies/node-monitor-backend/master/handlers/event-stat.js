const Redis = require("../utils/redis");
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const CommitteeEvent = require("../models/committeeEvent");
const CommitteeEventDB = new CommitteeEvent(DBEndpoint);

const CommitteePkInfo = require("../models/committeePkInfo");
const CommitteePkInfoDB = new CommitteePkInfo(DBEndpoint);

exports = module.exports = async function (req, res) {
    let onDate = req.query.date|| new Date()
    let stat = await getStatOn(onDate)
    res.json(stat)
    return
};

async function getStatOn(date ) {
    let currentDay = new Date((new Date(date)).toDateString())
    let nextDay = new Date((new Date((currentDay - 0) + 1000*60*60*24)).toDateString())
    let stake = (await CommitteeEventDB.model.find({Event:"stake", BlkTimestamp:{$gt: currentDay, $lt: nextDay}}).lean()).length
    let returnstaking = (await CommitteeEventDB.model.find({Event:"returnstaking", BlkTimestamp:{$gt: currentDay, $lt: nextDay}}).lean()).length
    let slash = (await CommitteePkInfoDB.model.find({slashed:true, Time:{$gt: currentDay, $lt: nextDay}}).lean()).length
    return {stake, returnstaking,slash}
}