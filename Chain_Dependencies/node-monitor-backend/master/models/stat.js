var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BaseAPI = require("./base");

// set schema
const ModelName = "stat";
var schema = {
    ChainID: Number,
    NumInst: Number,
    NumTx: Number,
    NumCrossTx: Number,
    NumShardState: Number,
    TimeSlot: Number
};

// set indexing
class DBAccessAPI extends BaseAPI {
    constructor(endpoint) {
        super(schema, ModelName, endpoint);
        this.schema.index({ TimeSlot: 1 });
        this.schema.index({ ChainID: 1, BlockHeight: 1 });
        this.schema.index({ ChainID: -1, TimeSlot: -1 });
        this.model.ensureIndexes();
    }
}

exports = module.exports = DBAccessAPI;
// new DBAccessAPI(connection);
