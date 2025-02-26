---
layout: default
title: retrieveblockbyheight
nav_order: 3
parent: Blockchain
has_children: false
---

### retrieveblockbyheight
---
### Parameters
---
### Example

Request body:
```javascript
{
   "jsonrpc": "1.0",
   "id": 1,
   "method": "retrieveblockbyheight",
   "params": [
      {block height},
      { shard id},
      "{deep level}"
   ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": [
        {
            "Hash": "5736f2f81c750c0c191ca09ff0e39a2f1c9c9164faa68ab809d12dc44de54c1c",
            "ShardID": 7,
            "Height": 513014,
            "Confirmations": 928690,
            "Version": 1,
            "TxRoot": "0000000000000000000000000000000000000000000000000000000000000000",
            "Time": 1602255330,
            "PreviousBlockHash": "06ee4826ad16ee1bec52f191a0016b644dccd964f9409d95b86a494bad9c24ae",
            "NextBlockHash": "69e5e4d79853aa3b976608c7cc0955788e18811db6793b3c1c62a5391b3fe69f",
            "TxHashes": [],
            "Txs": null,
            "BlockProducer": "",
            "ValidationData": "{\"ProducerBLSSig\":\"uc+lwi1Z2p9U4Wc8Vk2uvgq4X/ilWwvInSs58OtOqi09wk90qADU68eJCfJjBgJIxliZoANim6JZ6ghGoYtB4wE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,2,3,4,5],\"AggSig\":\"GR0ZqormnqkUcUUVRTpc+8KT9AAV3ct9xlpXfWg46dM=\",\"BridgeSig\":[\"\",\"\",\"\",\"\",\"\"]}",
            "ConsensusType": "",
            "Data": "",
            "BeaconHeight": 512722,
            "BeaconBlockHash": "be35bceeeefb74518ac207b25db7a99fe3aafbe26242442452e779d8a3f8c0f2",
            "Round": 1,
            "Epoch": 5128,
            "Reward": 0,
            "RewardBeacon": 0,
            "Fee": 0,
            "Size": 0,
            "Instruction": [],
            "CrossShardBitMap": []
        }
    ],
    "Error": null,
    "Params": [
        513014,
        7,
        "1"
    ],
    "Method": "retrieveblockbyheight",
    "Jsonrpc": "1.0"
}
```
Response Description:
