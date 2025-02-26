exports = module.exports = {
  forkEvent,
};
const BFTTiming = require("../models/bfttiming");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const BFTTimingDB = new BFTTiming(DBEndpoint);

async function forkEvent(req, res) {
  let chainID = req.query["chainID"] || 0;
  let forkStat = await BFTTimingDB.model.aggregate([
    {
      $group: {
        _id: { ChainID: "$ChainID", BlockHeight: "$BlockHeight" },
        BlockHash: {
          $push: {
            BlockHash: "$BlockHash",
            TotalVote: "$TotalVote",
            TotalUniqueVote: "$TotalUniqueVote",
          },
        },
      },
    },
    {
      $project: {
        TotalUniqueVote: "$TotalUniqueVote",
        TotalVote: "$TotalVote",
        BlockHash: "$BlockHash",
        Size: { $size: "$BlockHash" },
      },
    },
    {
      $match: {
        Size: { $gte: 2 },
      },
    },
    {
      $sort: {
        "_id.BlockHeight": -1,
      },
    },
  ]);

  let result = {
    chainID: chainID,
    ForkBlock: [],
  };

  for (let stat of forkStat) {
    result.ForkBlock.push({
      BlockHeight: stat._id.BlockHeight,
      ForkInfo: stat.BlockHash,
    });
  }
  res.json(result);
}
