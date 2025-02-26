---
layout: default
title: Creating pToken Transaction
nav_order: 5
parent: WASM Overview
has_children: false
---

## Creating a pToken Transaction

### The *TokenParams* attribute


Recall that `TokenParams` is an optional field in `txParams` when calling `createTransaction`. When `TokenParams==null`, a PRV transaction will be created. If you want to transfer a pToken, just pass in an object with the following format:

- `PaymentInfo`: array of token receivers
- `InputCoins`: the (token) coins that will be spent
- `TokenID`: fixed identifier for the token being spent
- `CoinCache`: an array of random (encrypted) token coins in the Incognito network, used to hide sender identity

Remember to still include a PRV input since the TX fee needs to be in PRV

Example:

```javascript
{
    "SenderSK": "ThHKrr8n8sJ1fRjRpU7WK4ihCcNDPgBpCSB+Yl1OGg0=",
    "PaymentInfo": [],
    "InputCoins": [{
        "Version": "2",
        "Info": "",
        "Index": "1vnApCg",
        "PublicKey": "12VpWUvJ7DCrU1BDCy6w8qLuMFeV8iMDpUDVDrzpgkLAoUhroDp",
        "Commitment": "1pwvwufBRZME3YfaesJch97VBmT8zwyUgDvXHGUAeRCF2icR5o",
        "KeyImage": "124Z7u1Y4fA4qktQPFToDNM2mAEsCpRUAcNzjsnXiAVG4bJknhB",
        "SharedRandom": "",
        "SharedConcealRandom": "",
        "TxRandom": "13arbQFVuqY7CA57rzVGSECphoaqi1dCvS3r5TBuDv4rr4Uexyu2frqKphhaQpUFeL6zop2wShyhoEf4wMy3Wkx5NpY5i4WMEyo2",
        "Randomness": "12ZCiAzdK5ppmpPBQujy7KHioKa7rMhEy6D4CFpJQGjiqp36CKF",
        "Value": "38249999993610",
        "CoinDetailsEncrypted": "15eNawVo61YYRLcKmmuKJrSVt2WijxWPR84RubghQuafoWfibL",
        "SNDerivator": "",
        "AssetTag": ""
    }],
    "Fee": 20,
    "Metadata": null,
    "Info": "",
    "CoinCache": {
        "Indexes": [4, 8],
        "Commitments": [
            "12iVg2mTehTpMxvkMChkzVUhUswmJKmVDxiJZVyt7VRY6hXtjJS",
            "1pwvwufBRZME3YfaesJch97VBmT8zwyUgDvXHGUAeRCF2icR5o"
        ],
        "PublicKeys": [
            "1kvBKj1yxpy8aazcNEcGHtChxEppFscytoXEiybva3HEtZXjNp",
            "12VpWUvJ7DCrU1BDCy6w8qLuMFeV8iMDpUDVDrzpgkLAoUhroDp"
        ],
        "AssetTags": []
    },
    "TokenParams": {
        "PaymentInfo": [{
            "PaymentAddress": "12si2KgWLGuhXACeqHGquGpyQy7JZiA5qRTCWW7YTYrEzZBuZC2eGBfckc2NRXkQXiw7XwK2WVfKxC8AcwKGCsyRVr9SR8bN9vTcnk2PPbymztCWadgr9JMP1UY6oSk9XZb56EAKunejzNnmo9Ln",
            "Amount": "100",
            "Message": ""
        }],
        "InputCoins": [{
            "Version": "2",
            "Info": "",
            "Index": "",
            "PublicKey": "1oVKp6i7baNBkoVWi1xbqUQmjpMTd536FPt9UJ3NL81GSWAhmU",
            "Commitment": "12k9Bm6HnmZz4Q6oyeH6KuFshEckdQJo7uyeVDWeSYEwaVya28H",
            "KeyImage": "1YEP2H44Qw5ZCAk3WvmEnEqUZCrSjaNUKHG8SmMqCbBwNSXhn1",
            "SharedRandom": "12uUHdYx6YMp3TrFoibGcz9hJrtKxr1Xs1sC5M7Bw6paJiWtnUU",
            "SharedConcealRandom": "",
            "TxRandom": "14maNtXPGFgCvHFweEWaiML6eY5Fb6bVu4fF71MRFyTWfsZ8qtZ46zxQRFUohqgFkVorHUCMXbgMJMVNg7ufxKuBBuucJcpcPAhE",
            "Randomness": "1cbzwMu9CrKNRjRZKyJpJzzFHA4KHQUe9TwyAMfoAaRgLYg9LF",
            "Value": "50000",
            "CoinDetailsEncrypted": "1cZx5qAY9hxDNE7c4xzZD511TZC1YUj7JCwchZwQYxumjZ9n5P",
            "SNDerivator": "",
            "AssetTag": "12Yut8DnBXWQNVsnG9sE3tJPvCZufQ4AKBXBvyckdWEjyfXYLfj"
        }],
        "TokenID": "699a3006d1865ebdc437053b33df6a62c6c7c2f554f2fd0adf99a60f5117f945",
        "CoinCache": {
            "Indexes": [0, 1],
            "Commitments": [
                "12k9Bm6HnmZz4Q6oyeH6KuFshEckdQJo7uyeVDWeSYEwaVya28H",
                "14SvXFXYhyZueCnBL5EFYpA4J8QiuZBYAj4JSdvXS7cCsaXnZq"
            ],
            "PublicKeys": [
                "1oVKp6i7baNBkoVWi1xbqUQmjpMTd536FPt9UJ3NL81GSWAhmU",
                "12cDNcYxkJD4aVBSSqp5ukf4H6ZUuQjn9gmKSepNo7mGbUgHA9z"
            ],
            "AssetTags": [
                "12Yut8DnBXWQNVsnG9sE3tJPvCZufQ4AKBXBvyckdWEjyfXYLfj",
                "12tPdPNVJKQfXgEye7ndwqxxifjRV7tYaQq93T8M8Bx3BpH4iHw"
            ]
        }
    }
}
```

Resulting TX:

```javascript
{
    "Tx": {
        "Version": 2,
        "Type": "tp",
        "LockTime": 1609823256,
        "Fee": 10,
        "Info": "",
        "SigPubKey": "CAEBBAEFAQMBBgEGAQYBCAEI",
        "Sig": "AiBIeH8RyJa...",
        "Proof": "AgAAAuIBY2cS...",
        "PubKeyLastByteSender": 170,
        "Metadata": null
    },
    "TxTokenPrivacyData": {
        "PropertyID": "0000000000000000000000000000000000000000000000000000000000000005",
        "PropertyName": "",
        "PropertySymbol": "",
        "SigPubKey": "CAEBAQABAQEBAQEBAQAA",
        "Sig": "AiCKGcpDJI6j...",
        "Proof": "AgAAA0ICrdrbV...",
        "Type": 1,
        "Mintable": false
    }
}
```

### Creating a Custom Token

The Incognito network allows creation of custom tokens, as long as their name & symbol do not conflict with existing ones. Simply set

```javascript
{
    //...
    "TokenID" : "",
    "TokenName" : "<your-desired-name>",
    "TokenSymbol" : "<your-desired-symbol>",
    "PaymentInfo" : "<receiver-and-amount-to-create>",
    //...
}
```

inside your `TokenParams`

Example:

```javascript
"TokenParams": {
    "TokenID": "",
    "TokenName": "Rose",
    "TokenSymbol": "RSE",
    "Amount": 10000,
    "PaymentInfo": [{
        "PaymentAddress": "12sxXUjkMJZHz6diDB6yYnSjyYcDYiT5QygUYFsUbGUqK8PH8uhxf4LePiAE8UYoDcNkHAdJJtT1J6T8hcvpZoWLHAp8g6h1BQEfp4h5LQgEPuhMpnVMquvr1xXZZueLhTNCXc8fkVXseeVAGCt8",
        "Amount": "10000"
    }],
    "InputCoins": [],
    "CoinCache": {}
}
```

Resulting TX:

```javascript
{
  "Tx": {
    "Version": 2,
    "Type": "tp",
    "LockTime": 1609823172,
    "Fee": 50,
    "Info": "",
    "SigPubKey": "CAEBAwEFAAEDAQMBBQEEAQQ=",
    "Sig": "AiCMCNb1mBPec...",
    "Proof": "AgAAAuIB4QzMG8R...",
    "PubKeyLastByteSender": 170,
    "Metadata": null
  },
  "TxTokenPrivacyData": {
    "PropertyID": "f6c2aca5a808f439690a81e3190a36e8e4f5bdb518ede086c9ee0c1ff52eb681",
    "PropertyName": "Rose",
    "PropertySymbol": "RSE",
    "Proof": "AgAAAUIAAQAAA...",
    "Type": 0,
    "Mintable": false
  }
}
```
