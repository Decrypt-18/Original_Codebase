var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "committeeEvent";
var schema = {};

// set indexing
class DBAccessAPI extends BaseAPI {
  constructor(endpoint) {
    super(schema, ModelName, endpoint);
    this.schema.index({ Event: -1, BlkTimestamp: -1 });
    this.model.ensureIndexes();
  }
}

exports = module.exports = DBAccessAPI;
