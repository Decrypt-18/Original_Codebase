---
id: scaling-blockchain
sidebar_label: Scaling Blockchain Privacy with Dynamic Sharding
title: Scaling Blockchain Privacy with Dynamic Sharding
---


Low-throughput is one of the biggest obstacles facing the mass adoption of cryptocurrencies. Throughput is measured by the number of transactions per second (TPS) confirmed on a cryptonetwork. For example, Bitcoin can only process 7-10 TPS [Croman et al., 2016; Li et al., 2018], while Visa can process 24,000 TPS [Visa, 2018].

Privacy transactions are even slower because of extra proof generation and verification steps. Transaction sizes are large because of the extra privacy data. For example, Zcash, a fork of Bitcoin with privacy features, can only process 6 TPS with a block size of 2 MB, a target block interval of 150 seconds, and an average transaction size of 2000 bytes. This is a big drawback.

We implement sharding on privacy transactions to increase throughput for Incognito [Kokoris-Kogias et al., 2018; Zamani et al., 2018; Zilliqa, 2017]. Incognito throughput scales out linearly with the number of shards. The more shards we add, the more transactions it can handle.

Incognito is designed as a network of blockchains. It has a single beacon chain (the “coordinator”) and N shard chains (the “workers”), which produce blocks in parallel. All shards work in parallel and are synchronized by beacon block time, which is divided into equal epochs.

![](https://we.incognito.org/uploads/default/original/1X/45b6122ba6a1272f12f9e9663c076e999234a75d.jpeg) 

*Figure 1. Sharding on privacy transactions. Incognito throughput scales out linearly with the number of shards.*

## Shard Chains

Shards are organized by the last byte of sender addresses. Each shard has its own committee, randomly assigned by the beacon chain. A shard committee validates and confirms transactions belonging to it.

Every time a shard block is created, the beacon committee will verify and insert the valid block header into the beacon chain. If the block is not valid, the beacon will send the proof to all other shards, to vote to slash the misbehaving shard committee.

![](https://we.incognito.org/uploads/default/original/1X/ba76e19c187dc623376c526849c20baf7785ec75.jpeg) 

*Figure 2. Shard Chains*

## Beacon Chain

The responsibility of the beacon chain is to verify shard blocks and coordinate shard chains. It is the global state of the entire network.

* Beacon chain verifies the validity of shard blocks.
* Beacon chain confirms cross-shard information. Each shard block header includes cross-shard information, indicating which shard this block has cross-shard to. In addition to the height of each shard chain, this information is also included in the block body.
* Beacon chain manages the candidate and validator list. Whenever a user stakes PRV to become a validator, this action will be recorded in the block header.
* Beacon chain shuffles committees. When a new random number is generated, it is recorded in the beacon block header.
* The beacon block stores the Merkle root of the candidate list and the validator list, of both the beacon chain and shard chains.

## Cross shard transaction

For cross-shard transactions, the sender shard creates a receipt containing all transactions to the receiver shard, then sends this receipt to the receiver shard. A brief of cross-shard transactions is also sent to the beacon chain. The UTXOs in the sender shard are locked to make sure they cannot be double-spent. The receiver shard checks the validity of the receipt and waits for confirmation of cross-shard info from the beacon chain, before approving the corresponding UTXOs as spendable.

![|611x243](https://lh4.googleusercontent.com/YjRFVQITvpmkhIpW_4KfRFccTaqS9Iig6qI-j8qT8vVS5xph_CWNHW4KSbgEBJ--C5epfcTN5Os7twEl32x2cBpSprYi4LBP_6K2GtaXHuS3ar3vY_KGBGLLi86hK4fuBVgUDFYq)

*Figure 3. Cross shard transaction.*

## Dynamic Committee Size

At the beginning of an epoch:

* Substitute list is 100-400% of the current committee size

Committee size remains unchanged, 10% of committee members are replaced at each epoch, in round-robin fashion.

* Substitute list is > 400% of the current committee size

Increase committee size by 15% of the current committee size (after subtracting the slashed members in the previous epoch).

* Substitute list is < 100% of the current committee size

Reduce committee size by 10%
## Dynamic sharding

Incognito chain is initially implemented with 8 shards. The number of shards could dynamically increase, up to 256 shards. Let X be the last byte of the sender's public keys. The shard with id = X % number_of_shards will handle this transaction.

Every shard has a maximum (M) of committee members. When the substitute list of all shards is greater than 5M, the chain will double the number of shards. In this case, each shard will be split into two 2 new shards, as per the scheme in Figure 4:

Figure 4. Increasing shards![|653x241](https://lh6.googleusercontent.com/yyS-wtwAHTuP_bYdgW6sxZr-q2ENwo-mhRzprz5QJDzKteZfq679SPfGxWxHSxqdaYLBHupBQFWaZWfWVKb_9CMZ312wKMXfTiYOYribTrHBTwlinpIDMo8lVv199xaKFOdALSeJ)

Example:

In the case of 8 shards, public keys with lastbyte = 0, 8, 16, 24, 32, 40… 240, 248 belong to shard 0. I.e shard_id = lastbyte % number_of_shards.

If doubled to 16 shards, shard 0 will be split into shard 0 and shard 8, which are called sibling shards. The public keys with lastbyte = 0, 16, 32,... 240 are in shard 0, and public keys with lastbyte = 8, 24, 40,... 248 are in shard 8.

The current committee and substitute nodes in shard 0 will be split equally into shards 0 and shard 8. This way, all committee members already have a full database to confirm any new transactions belonging to them.

If the committee size is smaller than the minimum committee size threshold, two sibling shards will be merged into one shard.

# Analysis

When a shard is compromised, it might produce airdrop or double spent transactions. The beacon committee detects this and gives the proofs to other shards. If ⅔ of shards agree with the proofs, the compromised committee will be penalized. Therefore, an attacker needs to conquer at least ⅔ of shards in order to conquer the chain.

Let H be the number of honorable validators in a shard

B be the number of byzantine validators in a shard

Let n be the size of the committee

Let X be the number of byzantine validators in a committee

Then the probability of k byzantine validators in the committee of a shard, where 0<= k <= B, is
![|290x88](https://lh5.googleusercontent.com/SLsDsh8AMrFr59WJavGDzT4ZsXmqaP56MUNc3kcV1DVeD0qDwjruShK0PL44UNvjYJnzPeRgeYST-3C7kIFNeK476S8fdhM4X2IH4WjlYp68Gwmq3Vtgyh0oMmHhGA-QO2HaohM5)
and, the probability of >=k byzantine validators in the committee of a shard is
![|406x77](https://lh5.googleusercontent.com/kiIbimWEtACp1TtZGJZWe7kFygp4kj_CYJrh1qX5_Batd2M6xp-clkDwP1MjCYcLhZMQB-vhFOsb1q0rmD_TMcqwWPZX8Yz3pEcWTInQk7P5y6ZrxUcM6M_zmZXvXiQdOoNPHNIX)
Let S be the number of shards. As an attacker needs to conquer at least ⅔ of shards in order to conquer the chain, probability is
![|217x54](https://lh4.googleusercontent.com/cZBqeWkGZaOYX1PBk-DOaGSxlDZJD1phQM-kN-Rc5wx_a-NqnHyamupL2ZzNpZ8d_M7zwSXV6YT1R1XBbhdiMyKjhatHi1T6qq2Phvfy2xg3WwG_ADurmZ2Isy_G-Yg0RDBSBC3J)

For example, let’s look at a scenario where there are 8 shards, a committee size of 50, and 200 nodes in the substitute list. Table 1 summarizes the probability of conquering the chain, given the percentage of nodes owned by the attacker.

|Percentage of byzantine validators|    20%|   25%|   30%|    35%|   40%|
| --- | --- | --- | --- | --- | --- |
|**Probability of conquering the chain (8 shards)**|2.04E-107| 2.4439E-76|9.6104E-56|9.583E-41|2.4814E-29|
|**Probability of conquering the chain (16 shards**)|4.163E-214|5.973E-152|9.236E-11|9.1834E-81|6.1575E-58|

*Table 1. Probability of the attacker conquering the chain.*

The probability of conquering the chain is extremely low, even if an individual owns 40% of validators.

## Implementation

The implementation is mainly in the *Blockchain* component in the Incognito architecture.  

![](https://we.incognito.org/uploads/default/original/1X/c71f04a76c6b78038a9e54b55fe9d670fbfd28d7.png) 

*Figure 5. The layered Incognito architecture.*

The code is open-source on Github with links to specific packages provided below.

* **Shards**. Shards are subchains. A subchain is a Proof-of-Stake blockchain with its own committee of N nodes. A shard's job is to produce new blocks via the Multiview Practical Byzantine Fault Tolerance (pBFT) consensus algorithm. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
* **Beacon** . Beacon is also a subchain. A beacon's job is to coordinate the shards and maintain the global state of the network. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
* **Synker**. Synker makes sure the node is up to date among its peers and also broadcasts the node status to its peers. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
* **Mempool** . Mempool (memory pool) is a collection of transactions and blocks that have been verified but are not yet confirmed. Its code is in the [mempool](https://github.com/incognitochain/incognito-chain/tree/master/mempool) package.
* **Wallet**. Software that holds all your Incognito keys. Use it to send and receive your Incognito tokens. Its code is in the [wallet](https://github.com/incognitochain/incognito-chain/tree/master/wallet) package.
* **Database** . Incognito uses LevelDB to store block data. Its code is in the [database](https://github.com/incognitochain/incognito-chain/tree/master/database) package.
