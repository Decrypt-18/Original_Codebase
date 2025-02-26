---
layout: default
title: listunspentoutputcoins
nav_order: 4
parent: Wallet
has_children: false
---

### listunspentoutputcoins
---

### Parameters

- **number** - this must be 0
- **number** - this must be 999999
- **list[object]**:
    - **PrivateKey: string** - private key of receiver

### Example

Request body:
```javascript
{
    "jsonrpc": "1.0",
    "method": "listunspentoutputcoins",
    "params": [
        0,
        999999,
        [
            {
                "PrivateKey": "113DaAsrA6DzG1oSmYfmTb2MfxUvLr5AGyfKJA41JwcVAJPT58JCu5vqiG444tLnSEatsReKv41KjWEbuJ9qqLHNEWcRcYDt8EtXcrLZ1LvY"
            }
        ]
    ],
    "id": 1
}
```
Response body:
```javasript
{
    "Id": 1,
    "Result": {
        "Outputs": {
            "113DaAsrA6DzG1oSmYfmTb2MfxUvLr5AGyfKJA41JwcVAJPT58JCu5vqiG444tLnSEatsReKv41KjWEbuJ9qqLHNEWcRcYDt8EtXcrLZ1LvY": [
                {
                    "PublicKey": "1WVpQ3iNrkbtSnaFhTzoVDLhLtqJdt7TmaAfq9otMZqmMrJHm5",
                    "CoinCommitment": "17zH6B5YECq9YaKW84m1fL5EAEyoZpkVUiBn6fQm2eVP6UjxKZ",
                    "SNDerivator": "123SdHGiPEBJ5acupKkA8btbwMdjTyVmHEaq4U3QwiFbak9MKXL",
                    "SerialNumber": "1Lsx7EA4m7VkUur2VK4aBJWnEAYgcKKgZCK5LBw81ENMTCYB6S",
                    "Randomness": "14Y9MEmsB726dvrLKQQiafApSLT9Y6QtiLBX9BphEXD3xfsrqv",
                    "Value": "5000000000",
                    "Info": "13PMpZ4",
                    "CoinDetailsEncrypted": "13KRJyNa5JfYWBnF778ye3U8W9NKNTwxbf7Z773Xt699BydAtHwvZ3gga9XiYx15H38EepgSexq1dAdEMGSyLG17NKL5JkjbKufuwGWKUkEaCPpBQLtfj7s4SBzH3tr2mEFQhEbFdKrvgx9EuZvjNuxdbkA9Z8Rvr4zbDYh"
                }
            ]
        }
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "listunspentoutputcoins",
    "Jsonrpc": "1.0"
}
```
Response Description:

**Object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - result info:
    - **Outputs - object:**
        - **string**: private key:  object
            - PublicKey
            - Value
- **Error: object** - error info:
    - **Code: number** - error code
    - **Message: string** - error message
    **StackTrace: string** - error stack trace
