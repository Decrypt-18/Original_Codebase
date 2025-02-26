---
layout: default
title: createandsendtxwithprvcontributionv2
nav_order: 12
parent: pDEX
has_children: false
---

### createandsendtxwithprvcontributionv2
### Provide liquidity to pDEX (PRV side)
---

### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info:
    - **key**: **string** - receiver's address, this must be burning address
    - **value**: **string** - provide amount
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not (if > 0 then privacy else no privacy), this must be less than 1
- **object** - metadata info:
    - **PDEContributionPairID**: **string** - unique contribution pair id
    - **ContributorAddressStr**: **string** - liquidity provider's payment address 
    - **ContributedAmount**: **string** - adding liquidity amount
    - **TokenIDStr**: **string** - PRV's token ID

### Example

Request body:
```javascript
{
    "id": 1,
    "method": "createandsendtxwithprvcontributionv2",
    "params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
        {
            "15pABFiJVeh9D5uiQEhQX4SVibGGbdAVipQxBdxkmDqAJaoG1EdFKHBrNfs": "3000000000000000"
        },
        5,
        -1,
        {
            "PDEContributionPairID": "haha3",
            "ContributorAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci",
            "ContributedAmount": "3000000000000000",
            "TokenIDStr": "0000000000000000000000000000000000000000000000000000000000000004"
        }
    ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "ShardID": 0,
        "TxID": "629c9792badcf5f94dc222fd97dd244904a9df9b33d14c9d0ae7736b1de732e0",
        ...
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendtxwithprvcontributionv2",
    "Jsonrpc": "1.0"
}
```
Response Description:

object - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
    - **TxID**: **string** - transaction id
    - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
