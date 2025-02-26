---
layout: default
title: createandsendburningrequest
nav_order: 2
parent: Portal
has_children: false
---

### createandsendburningrequest

BRD - withdraw decentralized bridged tokens (eth, erc20) to eth address

Parameters

Example

 Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendburningrequest",
    "params": [
        "{private key}",
        null,
        -1,
        -1,
        {
            "TokenID": "{token ID}",
            "TokenTxType": 1,
            "TokenName": "",
            "TokenSymbol": "",
            "TokenAmount": 0,
            "TokenReceivers": {
                "{burning address}": {burned amount}
            },
            "RemoteAddress": "{remote address}",
            "Privacy": true,
            "TokenFee": 0
        },
        "",
        0
    ]
}
Response body:

{
    "Id": 1,
    "Result": {
        "Base58CheckData": "",
        "ShardID": 0,
        "TxID": "5cd0c31827e3dab0f32dab3dd4d9a6009f19085fdb87c81f6c92ffa74330a316",
        "TokenID": "ffd8d42dc40a8d166ea4848baf8b5f6e9fe0e9c30d60062eb7d44a8df9e00854",
        "TokenName": "",
        "TokenAmount": 0
    },
    "Error": null,
    "Params": [
        "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3xxxxxxx",
        null,
        -1,
        -1,
        {
            "Privacy": true,
            "RemoteAddress": "7c7e371d1e25771f2242833c1a354dce846f3ec8",
            "TokenAmount": 2000,
            "TokenFee": 0,
            "TokenID": "ffd8d42dc40a8d166ea4848baf8b5f6e9fe0e9c30d60062eb7d44a8df9e00854",
            "TokenName": "",
            "TokenReceivers": {
                "12RxahVABnAVCGP3LGwCn8jkQxgw7z1x14wztHzn455TTVpi1wBq9YGwkRMQg3J4e657AbAnCvYCJSdA9czBUNuCKwGSRQt55Xwz8WA": 400,
                "12S4YzSA6hC12zuMF8L2rC7Tks1TtcfDUSWjcPeKeyT1ApV1KXqQnmtpCNEYbta88GrjhPiS6yFfuyfViDW5cmooqsZ5tvC8SRJZdCF": 555
            },
            "TokenSymbol": "",
            "TokenTxType": 1
        },
        "",
        0
    ],
    "Method": "createandsendburningfordeposittoscrequest",
    "Jsonrpc": "1.0"
}
```

Response Description:
