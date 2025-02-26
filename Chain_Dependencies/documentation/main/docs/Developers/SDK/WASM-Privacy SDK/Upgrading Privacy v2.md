---
layout: default
title: Upgrading Privacy v2
nav_order: 6
parent: WASM Overview
has_children: false
---

## Upgrading to Privacy v2

### Converting your PRV coins

The big change in Privacy protocol means coin owners will need to convert their current coins to version 2. Our `App` will handle this automatically.

You can also create a converting transaction using `privacy.wasm`. Use the function `createConvertTx`.

```javascript
createConvertTx(txParams, lockTime=0, cb)
```

it takes the same parameters as `createTransaction` except that inputs must be version 1 `PRV` coins.

In version 1, any output coins with the same receiver are **linkable**; this is mitigated by the new **One Time Address** feature in version 2.

Example:

```javascript
{
    "SenderSK": "ThHKrr8n8sJ1fRjRpU7WK4ihCcNDPgBpCSB+Yl1OGg0=",
    "PaymentInfo": [],
    "InputCoins": [{
        "Version": "1",
        "Info": "",
        "Index": "",
        "PublicKey": "12vM99DZPnpNZnwKXCJwuK1jA1B7ts99uuAwkpgAqEf22sYhVTZ",
        "Commitment": "12jhaduMcTiQZmcpXvPcm2pFExEL6GiNiT7goDsj7wyLtY1XA7B",
        "KeyImage": "12j3ZfQon9xsFCh9soFXgC8wz2iMXzg1Vrfe6YjRcJDc5LHgMFt",
        "SharedRandom": "",
        "SharedConcealRandom": "",
        "TxRandom": "",
        "Randomness": "123mE3d7WvvbytxRmr8x5N5ck9fv3DcW8h8o9svBhGyeRpqEqPy",
        "Value": "40000000000000",
        "CoinDetailsEncrypted": "",
        "SNDerivator": "1ib54Ya9f8DTKH9ewhhmC3znF8q7TY4musFCYNzsuhipEevp57",
        "AssetTag": ""
    }],
    "Fee": 100,
    "CoinCache": null
}
```

Resulting TX:

```javascript
{
    "Version": 2,
    "Type": "cv",
    "LockTime": 1609823038,
    "Fee": 100,
    "Info": "",
    "SigPubKey": "/NPaKTA3pYTjYxdWpSvOlsp+hAzbwc6Q8x0qynd2+ao=",
    "Sig": "ipwV35kEEKyfvx+mUid8ibv6YL8XZPwSlDyOUvuBHwnbHCzbNkA5O51WpMFDZGE2Qv2Iss0tr4bg+ad4xSyjBA==",
    "Proof": "/wGtIPzT2ikwN6WE42MXVqUrzpbK...",
    "PubKeyLastByteSender": 170,
    "Metadata": null
}
```

### Converting your pToken coins

Your parameters need to specify what token you want (TokenID) and which coins to convert (TokenInputs - in version 1)

Some PRV for fee is needed for this transaction. And the PRV must be version 2. So convert your PRV before converting tokens.

Example parameters:

```javascript
{
    "SenderSK": "ThHKrr8n8sJ1fRjRpU7WK4ihCcNDPgBpCSB+Yl1OGg0=",
    "PaymentInfo": [],
    "InputCoins": [{
        "Version": "2",
        "Info": "",
        "Index": "1Qpf76F",
        "PublicKey": "128kPvNRT6NsowdNTymKJ9BZTWrKBkeUUurRwzfVH9m7Ni88VRj",
        "Commitment": "1mgvscU21mMmLS5sFksrwtN8XBCTbavQovQLR7xgjBbTEgvNDD",
        "KeyImage": "12hoKoBCiTvX6TdkN2ZDJ7pvVjq38bsfuPmfY3GkhoXpknmrnDB",
        "SharedRandom": "",
        "SharedConcealRandom": "",
        "TxRandom": "12EpJ2nwTwfcCtTjwpQWd8NFrrovmqhTpjKbSYh3Kzdb3pMywifbH7zYkMVXBAvgmHew8i7j2CRJJuzoKeQett19Dot3266FuYvS",
        "Randomness": "1yCuaCdaoPKonhhefo1RzauTCGhEyhpB2k54TjMqszNexQJ5T1",
        "Value": "38249999999460",
        "CoinDetailsEncrypted": "12jh5v2gPMSVoNJPVnrsi4vAyiDGnUkgMYHKM3v8cvZum8U9WWY",
        "SNDerivator": "",
        "AssetTag": ""
    }],
    "Fee": 100,
    "HasPrivacy": false,
    "TokenID": null,
    "Metadata": null,
    "Info": "",
    "CoinCache": {
        "Indexes": [4, 3],
        "Commitments": [
            "12iVg2mTehTpMxvkMChkzVUhUswmJKmVDxiJZVyt7VRY6hXtjJS",
            "1mgvscU21mMmLS5sFksrwtN8XBCTbavQovQLR7xgjBbTEgvNDD"
        ],
        "PublicKeys": [
            "1kvBKj1yxpy8aazcNEcGHtChxEppFscytoXEiybva3HEtZXjNp",
            "128kPvNRT6NsowdNTymKJ9BZTWrKBkeUUurRwzfVH9m7Ni88VRj"
        ],
        "AssetTags": []
    },
    "TokenParams": {
        "PaymentInfo": [],
        "InputCoins": [{
            "Version": "1",
            "Info": "",
            "Index": "",
            "PublicKey": "12vM99DZPnpNZnwKXCJwuK1jA1B7ts99uuAwkpgAqEf22sYhVTZ",
            "Commitment": "1e3Kg51cGLeroMdun5hbFLo6SY6QxXpqPiWbmSqkWh22L25vz8",
            "KeyImage": "12WB74JEZ3Gfv1mu2AeZd7aK6XiV7rDfZY5GVzrES8zkLRSdaSV",
            "SharedRandom": "",
            "SharedConcealRandom": "",
            "TxRandom": "",
            "Randomness": "12BbmwHNRY5ivsZ7EgjpuTamhiBbgS8Ub8vM3Wq6fKUTn48u9hb",
            "Value": "50000",
            "CoinDetailsEncrypted": "",
            "SNDerivator": "1WA1PQWXAwZ9Szfm5a8rNoAdTZDvryjyL6kntceVherTWhHeLe",
            "AssetTag": ""
        }],
        "TokenID": "699a3006d1865ebdc437053b33df6a62c6c7c2f554f2fd0adf99a60f5117f945",
        "CoinCache": null
    }
}
```

Resulting TX:

```javascript
{
    "Tx": {
        "Version": 2,
        "Type": "tcv",
        "LockTime": 1609823151,
        "Fee": 100,
        "Info": "",
        "SigPubKey": "CAEBAwEDAQQBBAECAQQBAgEC",
        "Sig": "AiB+aIJRfqEKiNtiAqYz...",
        "Proof": "AgAAAuIBpeId2...",
        "PubKeyLastByteSender": 170,
        "Metadata": null
    },
    "TxTokenPrivacyData": {
        "PropertyID": "699a3006d1865ebdc437053b33df6a62c6c7c2f554f2fd0adf99a60f5117f945",
        "PropertyName": "",
        "PropertySymbol": "",
        "SigPubKey": "/NPaKTA3pYTjYxdWpSvOlsp+hAzbwc6Q8x0qynd2+ao=",
        "Sig": "obkcXKS1hE7nL7c7uG9CbJ9WJgtvvGAEl6DpL74iYAmTV+mMvDcBcp7lMyorOGfAkPbROqynr+E1TelVtTcLBg==",
        "Proof": "/wGpIPzT2ikwN6WE4...",
        "Type": 1,
        "Mintable": false
    }
}
```

A converted output coin does not have its amount hidden; but once it is spent, later output coins from it **do** hide their amounts.
