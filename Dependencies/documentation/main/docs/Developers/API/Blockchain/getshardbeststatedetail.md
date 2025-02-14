---
layout: default
title: getshardbeststatedetail
nav_order: 4
parent: Blockchain
has_children: false
---

### getshardbeststatedetail
---
### Parameters
---
### Example

Request body:
```
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "getshardbeststatedetail",
    "params": ["shard_id"]
}
```
Response body:
```
{
    "Id": 1,
    "Result": {
        "BestBlockHash": "59881f1c584d6fd3781a87bbea6ba5380ca600d0451aa57631cd826ba0b60315",
        "BestBeaconHash": "163da2593208608974714806b5ace838dc90cf9a9c86eb9b73f295dd26541957",
        "BeaconHeight": 1441134,
        "ShardID": 1,
        "Epoch": 14412,
        "ShardHeight": 1421327,
        "MaxShardCommitteeSize": 32,
        "MinShardCommitteeSize": 4,
        "ShardProposerIdx": 0,
        "ShardCommittee": [
            {
                "IncPubKey": "1PD653LB5QrJTwgEH7CJvWgV8Ybj6oZpM9SpjJjhNrPSArPrwq",
                "MiningPubKey": {
                    "bls": "1HYwzziZ5fZehMx22YMVu9T4PF5GDaYEWR78KGDd5xcGGqanLJxSmEWW8VM7t7ufxwn4dCRGYbrHMPjo7tAN4iUNsbF58rpwVxHqFVFLVbhL21MhzYqLMGfYv8TCkJLrRCQk62qEAJRRZs6e1wV9eQoti1Q5rwY7dMCDtxn2352nK6YZYDTR7",
                    "dsa": "16YCXqTgGAqP8QWnP3usPFbaVYy9VdoJKYq6N7cRYmYgQFdiegz"
                }
            },
            {
                "IncPubKey": "12mo8C8ELPufpQZbiB9aKaemRLZbXp4BejQ7Ahmv8xVw7W4tvqw",
                "MiningPubKey": {
                    "bls": "1XLpkP2iVUMyrqwnRpsZ4egCoF8FrwtRHW2jSore4oCdJLnq8QkYB5bUmDrr1bdzU3NHxtFgEkgtvKAc8m4rXvZ1xHrk7iQQ7RZw7g9mA8p66ssiEXevimpiiSC1ofcLQ7ma3Ld1Q3kVJKg5pKxKoMfctyoN2jL8v8sah8HmmbMtdjd4Y2dPh",
                    "dsa": "162cVdx9iN7a7ckLY9MqcjcEEcLf1o9eSf6G8XCXUzpfGaK87DR"
                }
            },
            {
                "IncPubKey": "1QaCJBinG7rWCFACrwzexzB3L2cHj9qRLjPEmY9XGUwnJJS8R2",
                "MiningPubKey": {
                    "bls": "1SkCNZoaM2mMqynjB3hjhgX6weiLrQgshF4jKybnLjKA8qMSkeYfAo4ZFR8sjQ9vTRu6ztmqKGY2kj7JCQfrRm86KFmc9BGzhwQr37jizNqgn9eF1BoJNz6t74GgqT8oCsKWauJfkqvT38utEjUooaWkagQ1EUMGATmaDfDwTx4nhhDNS34mG",
                    "dsa": "16LqHr6ZwsfZEEkeEtQMhMNhjULD11k7Y34KsoFUkwj9E2KE7Uf"
                }
            },
            {
                "IncPubKey": "1224qPnfZFMuDpVNi4cnwpcoFXrcSBumyrEfPNp12WqzhQeXn7n",
                "MiningPubKey": {
                    "bls": "13svmYReejr4ZWG3ssymUcnCkbyLTBfx92onMn9BrdKXivjTPzdJapJFZwWhJSFfaY1DaCiXLd9aj98MPjgEMMjn4EDU2B84Ja2UFRzXRo57fweGRL27BrCCJjQsdab2GooLnozGZGU1F82uwowkeoj2ro4nf2pKHhT9gkAjTemdCWMutSHQv",
                    "dsa": "14y6VW1WoWmHbJKhtrtGpidvCQEu2bRi9H4r9BCLiWfPngkXcSs"
                }
            }
        ],
        "ShardPendingValidator": [],
        "BestCrossShard": {
            "0": 1432638,
            "2": 1387991,
            "3": 1397144,
            "4": 1321877,
            "5": 1399472,
            "6": 1418271,
            "7": 1430493
        },
        "StakingTx": {},
        "NumTxns": 0,
        "TotalTxns": 24265,
        "TotalTxnsExcludeSalary": 24200,
        "ActiveShards": 8,
        "MetricBlockHeight": 0
    },
    "Error": null,
    "Params": [
        1
    ],
    "Method": "getshardbeststatedetail",
    "Jsonrpc": "1.0"
}
```
Response Description:
