---
layout: default
title: createandsendtxwithptokencontributionv2
nav_order: 11
parent: pDEX
has_children: false
---

### createandsendtxwithptokencontributionv2

Provide liquidity to pDEX (pToken side)
### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info in PRV; this should be null
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not on PRV part (if > 0 then privacy else no privacy), this must be less than 1
- **object** - pToken info:
    - **TokenID**: **string** - pToken ID
    - **Privacy**: **bool** - must be true
    - **TokenTxType**: **number** - transaction type (0: init, 1: transfer, 2: cross shard), this must be 1
    - **TokenAmount**: **string** - token amount
    - **TokenReceivers**: **map** - receive info
        - **key**: **string** - receiver's address, this must be burning address
        - **value**: **string** - provide amount
    - **TokenFee**: **string** - token fee
    - **PDEContributionPairID**: **string** - unique contribution pair id
    - **ContributorAddressStr**: **string** - liquidity provider's payment address 
    - **ContributedAmount**: **string** - adding liquidity amount
    - **TokenIDStr**: **string** - pToken ID
- **string** - memo, arbitrary message
- **number** - privacy or not on pToken part (if > 0 then privacy else no privacy), this must be less then 1

### Example
Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendtxwithptokencontributionv2",
    "params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
        null,
        100,
        -1,
        {
            "Privacy": true,
            "TokenID": "0ffecc3d8784dd23f6a46072fd5bbc4f10f9e97ad47af59bfe4a134762b9e184",
            "TokenTxType": 1,
            "TokenName": "",
            "TokenSymbol": "",
            "TokenAmount": "80000000000",
            "TokenReceivers": {
                "15pABFiJVeh9D5uiQEhQX4SVibGGbdAVipQxBdxkmDqAJaoG1EdFKHBrNfs": "80000000000"
            },
            "TokenFee": "0",
            "PDEContributionPairID": "haha3",
            "ContributorAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci",
            "ContributedAmount": "80000000000",
            "TokenIDStr": "0ffecc3d8784dd23f6a46072fd5bbc4f10f9e97ad47af59bfe4a134762b9e184"
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
		    "TxID": "4cc39821e89ca7e5015eecf37f4383ce503b53fbf0947d8aaee4cd11a934bfeb",
		    "ShardID": 0,
		    ...
    },
    "Error": null,
    "Params": [
		    ...
    ],
    "Method": "createandsendtxwithptokencontributionv2",
    "Jsonrpc": ""
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
    - **TxID**: **string** - transaction ID
    - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
