var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "epochCommittee";
var schema = {
  BlockTime: Date,
  Committee: [String],
};

// set indexing
class DBAccessAPI extends BaseAPI {
  constructor(endpoint) {
    super(schema, ModelName, endpoint);
    // this.schema.index({ Timeslot: -1, ChainID: -1 });
    // this.model.ensureIndexes();
  }
}

exports = module.exports = DBAccessAPI;
