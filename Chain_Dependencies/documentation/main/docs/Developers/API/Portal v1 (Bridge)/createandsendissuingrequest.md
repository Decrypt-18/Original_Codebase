---
layout: default
title: createandsendissuingrequest
nav_order: 5
parent: Portal
has_children: false
---

### createandsendissuingrequest

Issue trusted bridge token

Parameters

Example

Request body:
 
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendissuingrequest",
    "params": [
        {privatekey of issuer},
        null,
        100,
        -1,
        {
            "ReceiveAddress": "{payment address}",
            "DepositedAmount": {deposit amount},
            "TokenID": "{token id}",
            "TokenName": "{token name}"
        }
    ]
}
```

Response body:

```javascript
{
    "Id": 1,
    "Result": {
        "Base58CheckData": "",
        "TxID": "1f7024c07b19e63d531745bad18bb74d82f882c1a90f6146900a16cbccea7520",
        "ShardID": 0
    },
    "Error": null,
    "Params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3Gqqxxxxx",
        null,
        100,
        -1,
        {
            "DepositedAmount": 20000,
            "ReceiveAddress": "12S6R8HfTyL74bggg47LX88RSvBPaMPBMEMoo6yx9WQ4EgLiYERXXcE2Mv2HrCsFuKhBsTfrYMeH82Bus5MHQGt3xHwoxXxxxxxx",
            "TokenID": "0000000000000000000000000000000000000000000000000000000000000100",
            "TokenName": "pToken"
        }
    ],
    "Method": "createandsendissuingrequest",
    "Jsonrpc": "1.0"
}
```

Response Description:

