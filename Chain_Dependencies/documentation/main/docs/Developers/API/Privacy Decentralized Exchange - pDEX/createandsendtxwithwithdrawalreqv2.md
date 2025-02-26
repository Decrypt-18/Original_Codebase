---
layout: default
title: createandsendtxwithwithdrawalreqv2
nav_order: 8
parent: pDEX
has_children: false
---

## createandsendtxwithwithdrawalreqv2 
### Remove liquidity from pDEX
___

### Parameters
- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info:
    - **key**: **string** - receiver's address, this must be burning address
    - **value**: **string** - trade amount
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not (if > 0 then privacy else no privacy), this must be less than 1
- **object** - metadata info:
    - **WithdrawerAddrssStr**: **string** - withdrawer's payment address 
    - **WithdrawalToken1IDStr**: **string** - pToken1's ID on withdrawing pair 
    - **WithdrawalToken2IDStr**: **string** - pToken2's ID on withdrawing pair 
    - **WithdrawalShareAmt**: **string** - withdrawing share amount

### Example
 Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendtxwithwithdrawalreqv2",
    "params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
        null,
        100,
        -1,
        {
            "WithdrawerAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci",
            "WithdrawalToken1IDStr": "0000000000000000000000000000000000000000000000000000000000000004",
            "WithdrawalToken2IDStr": "0000000000000000000000000000000000000000000000000000000000000005",
            "WithdrawalShareAmt": "450000"
        }
    ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "TxID": "a0cb61cc441293f649673907064ab4499787bab00fea827abe6cca41e04c5f1d",
        "ShardID": 0
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendtxwithwithdrawalreqv2",
    "Jsonrpc": "1.0"
}
```
### Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
    - **TxID**: **string** - transaction id
    - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
