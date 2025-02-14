---
layout: default
title: createandsendtxwithprvcrosspooltradereq
nav_order: 10
parent: pDEX
has_children: false
---

### createandsendtxwithprvcrosspooltradereq
### Trade PRV for pToken on pDEX
---

### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info:
    - **key**: **string** - receiver's address, this must be burning address
    - **value**: **string** - trade amount
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not (if > 0 then privacy else no privacy), this must be less than 1
- **object** - metadata info:
    - **TokenIDToBuysStr**: **string** - pToken ID to buy
    - **TokenIDToSellStr**: **string** - PRV's ID
    - **SellAmount**: **string** - sell amount in PRV
    - **MinAcceptabelAmount**: **string** - min acceptable amount
    - **TradingFee**: **string** - trading fee
    - **TraderAddressStr**: **string** - trader's payment address

### Example
Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendtxwithprvcrosspooltradereq",
    "params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
        {
            "15pABFiJVeh9D5uiQEhQX4SVibGGbdAVipQxBdxkmDqAJaoG1EdFKHBrNfs": "2000000000"
        },
        100,
        -1,
        {
            "TokenIDToBuyStr": "0000000000000000000000000000000000000000000000000000000000000005",
            "TokenIDToSellStr": "0000000000000000000000000000000000000000000000000000000000000004",
            "SellAmount": "2000000000",
            "MinAcceptableAmount": "1980000000",
            "TradingFee": "0",
            "TraderAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci"
        }
    ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "TxID": "aef8153229b0c7e7a51b73c854d2f3b67757dd12983b520d3c367be4173a9fca",
        "ShardID": 0,
        ...
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendtxwithprvcrosspooltradereq",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info
    - **TxID**: **string** - transaction id
    - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
