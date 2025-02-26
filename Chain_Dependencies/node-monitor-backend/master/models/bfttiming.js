var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "bfttiming";
var schema = {
  Epoch: Number,
  Timeslot: Number,
  Proposer: String,
  ProduceTime: Number,
  ReceiveMajorityVoteTime: Number,
  ReceiveLastVoteTime: Number,
  ReceiveProposeBlockTime: Number,
  ChainID: Number,
  BlockHeight: Number,
  BlockHash: String,
  TotalVote: Number,
  TotalUniqueVote: Number,
  Status: Number,
};

// set indexing
class DBAccessAPI extends BaseAPI {
  constructor(endpoint) {
    super(schema, ModelName, endpoint);
    this.schema.index({ Timeslot: -1, ChainID: -1 });
    this.schema.index({ Status: 1, Timeslot: 1 });
    this.schema.index({ Timeslot: -1, ChainID: -1, BlockHeight: -1 });
    this.schema.index({ BlockHeight: 1 });
    this.model.ensureIndexes();
  }
}

exports = module.exports = DBAccessAPI;
