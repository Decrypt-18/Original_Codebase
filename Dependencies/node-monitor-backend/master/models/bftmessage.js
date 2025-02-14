var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "bftmessage";
var schema = {
    BlockHeight: Number,
    Epoch: Number,
    BlockHash: String,
    ProcessVoteMsg: {
        finish: Boolean,
        lastProcess: Date,
    },
};

// set indexing
class DBAccessAPI extends BaseAPI {
    constructor(endpoint) {
        super(schema, ModelName, endpoint);
        this.schema.index({ Timeslot: 1 });
        this.schema.index({ BlockHash: 1, receiveTime: 1 });
        this.schema.index({ Epoch: 1, MiningPubkey: 1 });
        this.schema.index({ Epoch: 1, Type: 1, MiningPubkey: 1, Chain: 1 });
        this.schema.index({ Epoch: 1, Type: 1, Chain: 1 });
        this.schema.index({ Type: 1, BlockHash: 1 });
        this.schema.index({ Type: 1, ProcessVoteMsg: 1, Timestamp: 1 });
        this.schema.index({ Timestamp: 1, Type: 1, "ProcessVoteMsg.finish": 1, "ProcessVoteMsg.lastProcess": 1 });
        this.model.ensureIndexes();
    }
}

exports = module.exports = DBAccessAPI;
// new DBAccessAPI(connection);
