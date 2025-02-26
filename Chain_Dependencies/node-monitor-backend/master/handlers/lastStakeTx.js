require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const Redis = require("../utils/redis");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const CommitteeEventInfo = require("../models/committeeEvent");
const CommitteeEventInfoDB = new CommitteeEventInfo(DBEndpoint);

async function lastStakeTx(req,res){
    let bls = req.query.bls
    console.log(bls)
    let result = await CommitteeEventInfoDB.model.find({MiningPubkey:bls, Event:"stake"},{Tx:1}).sort({"BlkTimestamp":-1}).limit(1).lean()
    if (result.length == 1)  {
        res.send(result[0]["Tx"])
    }
    else {
        res.end("")
    }
}


exports = module.exports = lastStakeTx