const { string } = require("joi");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "committeePkInfo";
var schema = {
    CommitteePk: String,
    Epoch: Number,
    TotalVote: Number,
    TotalPropose: Number,
    Reward: Number,
};

// set indexing
class DBAccessAPI extends BaseAPI {
    constructor(endpoint) {
        super(schema, ModelName, endpoint);
        this.schema.index({ CommitteePk: -1, Epoch: -1 });
        this.schema.index({ Epoch: -1, MiningPubkey: -1 });
        this.schema.index({ MiningPubkey: -1, TotalPropose: -1, TotalVote: -1 });
        this.schema.index({ MiningPubkey: -1 });
        this.schema.index({ Epoch: -1 });
        this.schema.index({ slashed: -1, Time: -1 });
        this.model.ensureIndexes();
    }
}

exports = module.exports = DBAccessAPI;
