---
layout: default
title: createandsendtxwithptokencrosspooltradereq
nav_order: 9
parent: pDEX
has_children: false
---

## createandsendtxwithptokencrosspooltradereq
### Trade pToken for PRV or other pToken
---

### Parameters
- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info in PRV; this should be null
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not on PRV part (if > 0 then privacy else no privacy), this must be less than 1
- **object** - pToken info:
    - TokenID**: **string** - pToken ID
    - Privacy**: **bool** - must be true
    - **TokenTxType**: **number** - transaction type (0: init, 1: transfer, 2: cross shard), this must be 1
    - **TokenAmount**: **string** - token amount
    - **TokenReceivers**: **map** - receive info
        - **key**: **string** - receiver's address, this must be burning address
        - **value**: **string** - trade amount
    - **TokenFee**: **string** - token fee
    - **TokenIDToBuysStr**: **string** - pToken's or PRV's ID to buy
    - **TokenIDToSellStr**: **string** - pToken's ID
    - **SellAmount**: **string** - sell amount in pToken
    - **MinAcceptabelAmount**: **string** - min acceptable amount
    - **TradingFee**: **string** - trading fee in PRV
    - **TraderAddressStr**: **string** - trader's payment address
- **string** - memo, arbitrary message
- **number** - privacy or not on pToken part (if > 0 then privacy else no privacy), this must be less then 1

### Example

Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendtxwithptokencrosspooltradereq",
    "params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
        {
            "15pABFiJVeh9D5uiQEhQX4SVibGGbdAVipQxBdxkmDqAJaoG1EdFKHBrNfs": "8"
        },
        10,
        -1,
        {
            "Privacy": true,
            "TokenID": "0000000000000000000000000000000000000000000000000000000000000005",
            "TokenTxType": 1,
            "TokenName": "",
            "TokenSymbol": "",
            "TokenAmount": "0",
            "TokenReceivers": {
                "15pABFiJVeh9D5uiQEhQX4SVibGGbdAVipQxBdxkmDqAJaoG1EdFKHBrNfs": "6000000"
            },
            "TokenFee": "0",
            "TokenIDToBuyStr": "0000000000000000000000000000000000000000000000000000000000000004",
            "TokenIDToSellStr": "0000000000000000000000000000000000000000000000000000000000000005",
            "SellAmount": "6000000",
            "MinAcceptableAmount": "50",
            "TradingFee": "8",
            "TraderAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci"
        },
        "",
        0
    ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "ShardID": 0,
        "TxID": "53870c0d262ae747a192d1212f3c47f080fa9d5232bbd56ba98d27837aafe691",
        ...
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendtxwithptokencrosspooltradereq",
    "Jsonrpc": "1.0"
}
```
Response Description:

object - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
    - **TxID**: **string** - transaction ID
    - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
