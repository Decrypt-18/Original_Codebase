---
layout: default
title: createandsendcontractingrequest
nav_order: 3
parent: Portal
has_children: false
---

### createandsendcontractingrequest

BRD - withdraw centralized bridged tokens

Parameters

Example

 Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendcontractingrequest",
    "params": [
        "{private key}",
        {
            "{burning address}": 0
        },
        100,
        -1,
        {
            "TokenID": "{token id}",
            "TokenTxType": 1,
            "TokenName": "",
            "TokenSymbol": "",
            "TokenAmount": 0,
            "TokenReceivers": {
            	"{burning address}": {burn amount}
            },
            "Privacy": true,
            "TokenFee": 0
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
        "Base58CheckData": "",
        "ShardID": 0,
        "TxID": "18b40bfc751bf1e87e067873047063091b6ed897ff54e83f1691f814d9b9e917",
        "TokenID": "0000000000000000000000000000000000000000000000000000000000000100",
        "TokenName": "",
        "TokenAmount": 0
    },
    "Error": null,
    "Params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3Gqqxxxxxx",
        null,
        -1,
        -1,
        {
            "Privacy": true,
            "TokenAmount": 100,
            "TokenFee": 0,
            "TokenID": "0000000000000000000000000000000000000000000000000000000000000100",
            "TokenName": "",
            "TokenReceivers": {
                "12RxahVABnAVCGP3LGwCn8jkQxgw7z1x14wztHzn455TTVpi1wBq9YGwkRMQg3J4e657AbAnCvYCJSdA9czBUNuCKwGSRQt55Xwz8WA": 100
            },
            "TokenSymbol": "",
            "TokenTxType": 1
        },
        "",
        0
    ],
    "Method": "createandsendcontractingrequest",
    "Jsonrpc": "1.0"
}
```

Response Description:
