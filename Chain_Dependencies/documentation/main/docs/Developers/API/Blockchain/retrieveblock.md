---
layout: default
title: retrieveblock
nav_order: 7
parent: Blockchain
has_children: false
---

### retrieveblock
---
### Parameters
---
### Example

Request body:
```javascript
{
    "jsonrpc": "1.0",
    "method": "retrieveblock",
    "params": [
        "{block hash}",
        "{deep level}"
    ],
    "id": 3
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Hash": "71a717263156ca5a60f5f45ce71b259f5c65f4102cd543c8a0f38c6de4491242",
        "ShardID": 1,
        "Height": 1421243,
        "Confirmations": 27,
        "Version": 1,
        "TxRoot": "0000000000000000000000000000000000000000000000000000000000000000",
        "Time": 1611569447,
        "PreviousBlockHash": "74d4df532715aefaf9e41997bc4f62c8e332dd03399dcf350d66aa20a88e9715",
        "NextBlockHash": "f3b34672f561437ac0128466723355cb92f3ccaee9409bc14cf675d4621614e7",
        "TxHashes": [],
        "Txs": null,
        "BlockProducer": "",
        "ValidationData": "{\"ProducerBLSSig\":\"NggFQRjTtxSjT89qufRWLJRhjgZqNDnh6jq0hIy6XCxQ+1pW/nbZ4OfZMN+qBSwtXLh1kHsij84zwpqtIuvRcQE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"DreCj+M48hxZXSrHWvJdnh3Y7qBexX2pXhP9VZHPv94=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
        "ConsensusType": "",
        "Data": "",
        "BeaconHeight": 1441050,
        "BeaconBlockHash": "e8e34f41b0583a7e424968138853c6319f52343aeb5324850125309e411fb000",
        "Round": 1,
        "Epoch": 14411,
        "Reward": 0,
        "RewardBeacon": 0,
        "Fee": 0,
        "Size": 0,
        "Instruction": [],
        "CrossShardBitMap": []
    },
    "Error": null,
    "Params": [
        "71a717263156ca5a60f5f45ce71b259f5c65f4102cd543c8a0f38c6de4491242",
        "1"
    ],
    "Method": "retrieveblock",
    "Jsonrpc": "1.0"
}
```
Response Description:

