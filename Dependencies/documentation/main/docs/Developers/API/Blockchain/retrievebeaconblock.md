---
layout: default
title: retrievebeaconblock
nav_order: 8
parent: Blockchain
has_children: false
---

### retrievebeaconblock
---
### Parameters
---
### Example

Request body:
```javascript
{
    "jsonrpc": "1.0",
    "method": "retrievebeaconblock",
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
    "Id": 3,
    "Result": {
        "Hash": "18ffda41c5178e885ad42da5b95c4ce86c25638a800df5e7a8f3f32fed05c939",
        "Height": 1441053,
        "BlockProducer": "121VhftSAygpEJZ6i9jGkEKLMQTKTiiHzeUfeuhpQCcLZtys8FazpWwytpHebkAwgCxvqgUUF13fcSMtp5dgV1YkbRMj3z42TW2EebzAaiGg2DkGPodcXDm4nu1GAbvAkfHEyfQ8nX3RNpQxHzpBCg5mvtr6CTQbjVRFnhUg78D6oBkkeHFkNDUT383FVkDmttu6VxSKq7WARLGuuF44BR5WDKRM58MJ9uK7kQ6WsX1ZSiiFakyANp7epjhzdP4oGyKtEvtVmwqs1XiCMDHMWNqAdLgsE1LRMsxkRykMCmpxuVaq9iAWCsR6iDEdWmZ3PZEzEVBQ57doj8eqbbZuwdukPhE1Mqmk4EmptZWP3kpxUCq5S4cSe9B5JVnVsrnb8hhHKDz3Md1qS8ZaT1gEyYDWAVPKLKiMpRsLmhF2kFmVnHJK",
        "ValidationData": "{\"ProducerBLSSig\":\"PK9cpB7pJxzLIirORlZCn6ZNSdbYxoJYBdAO54sZjrNpBFjzg9VDWqzQTGqtdVCVNl0hOSdpvjuN9R9+gKE87QE=\",\"ProducerBriSig\":null,\"ValidatiorsIdx\":[0,1,2,3],\"AggSig\":\"GY7rS7yAFfQyPcYgl+NICQZ2YzB2kIymvBaXOfH4kjc=\",\"BridgeSig\":[\"\",\"\",\"\",\"\"]}",
        "ConsensusType": "bls",
        "Version": 1,
        "Epoch": 14411,
        "Round": 1,
        "Time": 1611569457,
        "PreviousBlockHash": "07ac76db2128b81e0df5d108e06384783c02cc0b4a5d776ed398b51a75e21f22",
        "NextBlockHash": "587b8c807632879286fd213a254b9560b942d414e7f24d3451ca75e79a78a871",
        "Instructions": [
            [
                "133",
                "-1",
                "portalRewardInst",
                "{\"BeaconHeight\":1441053,\"Rewards\":{}}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":0,\"TxsFee\":{},\"ShardBlockHeight\":1439998}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":1,\"TxsFee\":{},\"ShardBlockHeight\":1421242}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":2,\"TxsFee\":{},\"ShardBlockHeight\":1440250}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":3,\"TxsFee\":{},\"ShardBlockHeight\":1441572}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":4,\"TxsFee\":{},\"ShardBlockHeight\":1441257}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":5,\"TxsFee\":{},\"ShardBlockHeight\":1442972}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":6,\"TxsFee\":{},\"ShardBlockHeight\":1441453}"
            ],
            [
                "37",
                "-2",
                "{\"ShardID\":7,\"TxsFee\":{},\"ShardBlockHeight\":1441592}"
            ]
        ],
        "Size": 3754,
        "ShardStates": {
            "0": [
                {
                    "Height": 1439998,
                    "Hash": "f6204b6a0bd926693d9e6e85f35e12b2617aa48c00bc22ddba6f5f12471188ca",
                    "CrossShard": ""
                }
            ],
            "1": [
                {
                    "Height": 1421242,
                    "Hash": "74d4df532715aefaf9e41997bc4f62c8e332dd03399dcf350d66aa20a88e9715",
                    "CrossShard": ""
                }
            ],
            "2": [
                {
                    "Height": 1440250,
                    "Hash": "c02bd87eeccc0cdffc0812743ea20e13d5e508a5dea3c6491bf0ac3776b02f7e",
                    "CrossShard": ""
                }
            ],
            "3": [
                {
                    "Height": 1441572,
                    "Hash": "4170f5d51c4e4559aefeca7f365c715626cc5e451476c8cf861c902b68385de1",
                    "CrossShard": ""
                }
            ],
            "4": [
                {
                    "Height": 1441257,
                    "Hash": "3a2c3ec2f94035112077c46b934d64730a7c45db0196eca1e4c65a687d2e51c3",
                    "CrossShard": ""
                }
            ],
            "5": [
                {
                    "Height": 1442972,
                    "Hash": "363864f75a9dc4478878ef73b5da13095a62df471ab9f6ed0f522969fb3e6e65",
                    "CrossShard": ""
                }
            ],
            "6": [
                {
                    "Height": 1441453,
                    "Hash": "8434608800288aaf2482d762446474bdc5731a2581dc00d32c3eed30e9191dc0",
                    "CrossShard": ""
                }
            ],
            "7": [
                {
                    "Height": 1441592,
                    "Hash": "1b273c159f24799252bdc972f9cb5e394f61ca457326a9b1ffcf2491b1a36e0a",
                    "CrossShard": ""
                }
            ]
        }
    },
    "Error": null,
    "Params": [
        "18ffda41c5178e885ad42da5b95c4ce86c25638a800df5e7a8f3f32fed05c939",
        "2"
    ],
    "Method": "retrievebeaconblock",
    "Jsonrpc": "1.0"
}
```
Response Description:

