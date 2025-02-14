---
id: intro-privacy-v2
title: Introduction to Privacy V2
sidebar_label: Introduction to Privacy V2
---



With Privacy V2, everything that happens in Incognito, from sending, receiving, to trading will be private. This improvement is of the utmost importance. 
Privacy V2 is designed to afford the user the maximum amount of privacy possible. We summarize the improvement details in the following table.

Property | Privacy V1 | Privacy V2 | Note
-|-|-|-
**Hide amount** | YES | YES | Pedersen commitments and Bulletproofs
**Hide sender** | YES | YES | One-of-many proofs (v1) vs MLSAG (v2)
**Hide receiver** | NO | YES | One-time addresses
|**Hide asset type**|NO|YES|Confidential asset|
|**Full-node dependency**|High|Low|New key pairs|
| **Retrieve output coins** | Easy | Hard | PublicKey (v1) vs OTAKey (v2)
|**Transaction fee**|PRV + token|PRV|Tx V2 only supports PRV fees|
|**pDEX's temp accounts**|YES|NO||


Since this is one of the biggest upgrades of Incognito, we feel that there should be a series of posts explaining what changes have been made in Privacy V2, how it will enhance the privacy of your funds. 

Beginning with this post, we will examine Incognito keys. A user establishes his/her ownership of an account through a collection of keys. The user can generate these keys via a single master private key following the below diagram.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/7/7bf9eebe2529815fc226d53e78a5bf04a357dc9e.png)

To enhance user experience and user-friendliness, these keys are grouped into a set of base58-encoded keys called **KeySet**.

## KeySet
We will go through each of the components of a key-set to understand their use-cases.
* **PrivateKey**. This is the most crucial key. Your funds are accessible via the PrivateKey. This key must not be shared with anyone. Keep it safe in multiple offline locations. In the event of device loss/crash/damage, the PrivateKey is the only way to regain access to your funds.

* **PublicKey**. On the blockchain, this key is used to identify a user. It can be shared with anyone and can be used to prove the ownership of nodes, UTXOs, or shares on the pDEX, as well as to verify signatures signed by the PrivateKey.

* **PaymentAddress**. PaymentAddress is analogous to a bank account number. When someone needs to send you PRV or tokens (both of which are already on the Incognito blockchain), all they need is your PaymentAddress. A PaymentAddress consists of the following components.
  * **PublicKey**. It is used as a way to designate UTXOs to the receiver.
  * **PublicViewKey**. It is used to encrypt the transferred amount.
  * **PublicOTAKey**. It is used to create [one-time addresses](https://we.incognito.org/t/one-time-address-improve-on-privacy-and-pdex-performance/6680), and conceal (encrypt) the assets transacted ([confidential assets](https://we.incognito.org/t/ongoing-confidential-asset/5607)). The protocols for generating OTAs, concealing assets given the PublicOTAKey have been described in great detail in the whitepaper. This key is used in Privacy V2 only. Due to the introduction of PublicOTAKey, the new payment address is longer than the old one. A user must use his PrivateKey to generate the new PaymentAddress. For example, the PaymentAddress
```
12RwyDnJnTkWu2cudCarpZYAnj6nrpLAvhRSmivM1ApZrJzJzvWwUbZ6ej1mapomNUm9hnCu9YAj4CNQo4J9sTBo3s9CryNPviAS5bG
```
in Privacy V1 will look like this in Privacy V2
```
12sm13KFdMSX6Ufi4SfExuZVno5B4DPEFRk4EA8XX9rZ5hE2oDCiPrtwtgZVdMNwCh4HVBFC5jTwC2cYHgGMjmWemfcrov683sqHuXY7c2LEhviUZTeWVQmXfrR11n3g7LA6N974N9CXaAfEeaXu.
``` 

* **ReadonlyKey**. This key is only used by the receiver to decrypt the amount of each TXO belonging to the user. So, when we publish our ReadonlyKey that means we are publishing our income.
  * **PublicKey**. It is the public key of the user.
  * **PrivateViewKey**. It is used to decrypt the amounts encrypted by the above-mentioned PublicViewKey.

* **OTAKey**. This key is used to check if an output coin belongs to the user or not (in Privacy V2 only). Its components are
  * **PublicKey**. It is the public key of the user.
  * **PrivateOTAKey**. It is used to check if an output coin belongs to the user or not. If yes, it also helps reveal the real asset of the output coin.

## Output Coins

As privacy is Incognito's main focus, two crucial properties that each transaction in the network must satisfy include

* **Untraceability**. For each incoming transaction, all possible senders are equiprobable.

* **Unlinkability**. For any two outgoing transactions, an observer cannot tell if they were sent to the same person.

Privacy V1 satisfies the *untraceability* property, where the sender of a transaction is part of a group of decoys. However, the payment address is still used directly in each transaction to receive assets. Therefore, recipients of a transaction can be detected. 

In Privacy V2, we introduce stealth addresses in the form of [one-time addresses (OTA)](https://we.incognito.org/t/one-time-address-improve-on-privacy-and-pdex-performance/6680), which help hide the identities of the recipients of a transaction (more details on OTAs and other primitives used in Privacy V2 can be found [here](https://we.incognito.org/t/sending-cryptocurrencies-confidentially-ring-signature-homomorphic-commitment-and-zero-knowledge-range-proofs/170)). These stealth addresses can be thought of as one-time deposit boxes. Only the recipient can open the box to see what is inside and spend it. As a consequence, different output coins in Privacy V2 will have different public keys, even though they belong to the same user.

For example, suppose Alice’s **PublicKey** is
```
1tvrddNSqWvPxpg98SL6sm6NMyv3UzgVBDBLwdZX4b2keZhiwc
``` 
The following are her output coins V1.
```
{
     "Version": "1",
     "Index": "",
     "PublicKey": "1tvrddNSqWvPxpg98SL6sm6NMyv3UzgVBDBLwdZX4b2keZhiwc",
     "Commitment": "1oWjmeVKWVFDqC3yzkiJpCaxGxzq8xEo4mqzWX5KU2yux2hAie",
     "SNDerivator": "1c38X7oAYAN3TXnCA78VKXiwE3JkB7q3zTBtaXwftUTpEmSGfY",
     "KeyImage": "",
     "Randomness": "",
     "Value": "0",
     "Info": "",
     "CoinDetailsEncrypted": "1JZyc6EJeYd6JNyNiakh6pLaBrbqobdfy2ayP6Q34ukU2b6wCAcDcqqWaPjsMFtL4sVLuVgJtHGc5JP7GWLW64oSS1H58KhY2t8w2x1VG1X12amkLDpqUrMFZSQphYHTE8MsLtFQdVK7QpuoDx4jNvCHfwyW5Z6Hduyyi",
},
{
     "Version": "1",
     "Index": "",
     "PublicKey": "1tvrddNSqWvPxpg98SL6sm6NMyv3UzgVBDBLwdZX4b2keZhiwc",
     "Commitment": "1mHPA9yHWc34FA2SA38NNQhGsnUxdMyT3G3UV7ZvWrMrLHrX5C",
     "SNDerivator": "1zgr6hwqzx8QJFGYxZxijvPKySAA9ioGRyKtjEpDLnQRPM92jy",
     "KeyImage": "",
     "Randomness": "",
     "Value": "0",
     "Info": "",
     "CoinDetailsEncrypted": "15SHTR6kpHgABs1qfWVmioDfmWWRFEyaXPZAPvUbwD97Jcb3U7kS9v8DpuTfrtPC3sEjoRmxM1A77WCw7eRxQ5HL1jTSymRQ5u2xizY4a4fJLSf9nCxd66Y8EEJ6RobmJ8xhQBUbjd4H7h771xbpLm2vHKBgVZWMzJKz",
},
{
     "Version": "1",
     "Index": "",
     "PublicKey": "1tvrddNSqWvPxpg98SL6sm6NMyv3UzgVBDBLwdZX4b2keZhiwc",
     "Commitment": "12u79b7LSzMCwVZHWrjcqshu6qBq6rj8EpeHXeH4J9AFGZxwWog",
     "SNDerivator": "16YrBjW28qosaSuVPqhVwDXBAFFbz41TuaZC4t8kSkHdRNwb2X",
     "KeyImage": "",
     "Randomness": "",
     "Value": "0",
     "Info": "",
     "CoinDetailsEncrypted": "15xSwSacgNctKSJ4TvcodDczmN3w5tyfDpKSH9E5yN5tZptvoV5w7zE2ooyxg4dYjnFshAioB1bT84PmrLL1Hdt5WQhHgHFkPUJRaQsAfP6Btgoz4skmE97gHw5gTBwR6yqfvLNGqgje4uEHjZbXCqYFiGdTG5DHFm7wuj",
},
```
As we can see, all output coins have the public key
```
1tvrddNSqWvPxpg98SL6sm6NMyv3UzgVBDBLwdZX4b2keZhiwc
```
which is the public key of Alice. Therefore, by looking only at the public key of these output coins, an observer can easily know that they belong to Alice (assuming that he knows the **PaymentAddress** of Alice). This will change in Privacy V2 where Alice’s output coins look like this.
```
{
     "Version": "2",
     "Index": "13XZcrZp",
     "PublicKey": "14Z1Qvvy6aaNg9uNDxCTozycCUniJJGLoeLMbhWujDtv5nfa9Y",
     "Commitment": "12rrgFXnpC4rwhNBeCcnqidwCebmiDxx85oHy3LCo5KjTobjCo2",
     "SNDerivator": "",
     "KeyImage": "",
     "Randomness": "12UkxgwppGyiAxXKJDo17Wwf1UpGJjKAQcHsrDYRaz5nCH7SBpC",
     "Value": "0"                                                          
     "Info": "",
     "SharedRandom": "",
     "SharedConcealRandom": "",
     "TxRandom": "12ehb8XqpmfJVqcteDycMNWB3Vx4uf5b1AqhjxkrBcXSNqDM5s8cySKbpuYvnLbFN967mZCbTujFgwc2p6cGLC4uw3pvsi5g3BnV",
     "CoinDetailsEncrypted": "128i6QZMvf9hVbxKuXtvCCf7eWj3vzmeXPgaFPkNDChWPFf32tm",
     "AssetTag": ""
},
{
     "Version": "2",
     "Index": "124H8Bns",
     "PublicKey": "12sbVshVt8G2orwAmGDbwR9wuxaFp3AX2T1m4xi5z1yDnPKz4Pt",
     "Commitment": "1Hx7wj3Jr5uCkdehGq3oy3ebDWa5KtpthXhXAyYmNjxSTVhTE4",
     "SNDerivator": "",
     "KeyImage": "",
     "Randomness": "1zZdCYtZbS5bGJ2ySxe6KTMZ2hDWrZEVbJ4TxFrHRWdbaD4SfZ",
     "Value": "0",
     "Info": "",
     "SharedRandom": "",
     "SharedConcealRandom": "",
     "TxRandom": "12fq2BWGCj8Bg7DQ4gRMaJukgCWzrFB63Ab3Kr1KcEW1Y1mX3GZ7BJbrFb2XgF1caL7uhXdJuMjBvrSrxJMWFcKLtwJ2uzbnd94y",
     "CoinDetailsEncrypted": "12CxVSTEodwGLRBLFjAzv4n6jeJAJSKVDhUa8edP5R6JC1TVWEe",
     "AssetTag": ""
},
{
     "Version": "2",
     "Index": "1GZg3oy",
     "PublicKey": "12gGMiZ5Kyt3R8N6W6vqhSR5xpz5h8yuxJBFSZ4p2dgW7VMdjDh",
     "Commitment": "12id7g7KDu4jphDf72aEUAfAuWcqDk8J54dvvMMHTh6CWK9kdAW",
     "SNDerivator": "",
     "KeyImage": "",
     "Randomness": "12s6TwTSWGZvNq2gMKz2sjTAhvY424R97SbAVaX7VFwB13vNpzG",
     "Value": "0",
     "Info": "",
     "SharedRandom": "",
     "SharedConcealRandom": "",
     "TxRandom": "13vKmoy4oTp5YoJT3Jis2EjUWeMXj1m4v6MELLLuGnUWApyWSGbVqr8LLWqKBvPWoRrtLtJZm3UeSjPB1o6WoYMKqHkfUwcHghPh",
     "CoinDetailsEncrypted": "1wYS7iqo5Lt7jGw87u6gew2VRAMCzjL7Hk6vSr5dYqZ6CmoemD",
     "AssetTag": ""
},
```
Now, the public keys of Alice’s output coins are different and do not follow any pattern. Hence, no observer can retrieve her output coins. Thus, *unlinkability* is satisfied.

However, the benefits of increased privacy are not without costs. The use of OTAs results in retrieving output coins becoming more difficult. In Privacy V1, a user's output coins all have the same public key, which is the user's public key. In this way, a full-node's database can effortlessly aggregate these output coins. When a user requests all of his or her output coins, the full-node only needs to look for those that have the same public key. With Privacy V2, this no longer holds true. Different public keys will now be assigned to each of a user's output coins. As a result, the full-node is unable to determine if two output coins belong to the same or separate users. And thus, it will not be able to respond to a user's request for his/her output coins.

In the next post, we will give a solution to this problem.
