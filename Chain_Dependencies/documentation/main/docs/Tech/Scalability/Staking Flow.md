---
id: staking-flow
sidebar_label: Staking Flow
title: Staking Flow
---


## Preliminary

* **New stake**: node submits staking transaction and it is committed.
* **Sync pool**: validator sync blocks of assigned shard.
* **Pend pool**: validator sync completely and ready for verifying new blocks.
* **Committee**: validator votes or proposes new blocks.

## Life cycle

**![|624x169](https://lh3.googleusercontent.com/k5ljCMo34nMVQL4NCwV6hw-WHGMLqVg-A2HyNJ8AJC2JY-E5hL2PiFb6-EHIr3-nAc_Ys1iEWlN22Fu9eWPYXDZYB0Ihh0dudQyxRf21ByTNnch4jSqn8wQLAHRKs3hyQu3m5_ID=s0)**

**1. New Stake phase**: When a staking transaction is committed, the submitted node will be in New Stake state. This new validator will be randomly assigned to a shard. In order to balance validators among shards, the shard with a smaller number of validators would have a higher probability of receiving new staking nodes.

**2. Sync phase**: right after the new validator gets the assigned shard, it starts to download the shard’s blocks. It sends the notification to the chain when finishing downloading the shard’s blocks. Then it’s moved to the Pending pool. The Pending pool is a first come first serve queue, the new validator will be appended to the end of the queue.

**3. Pending phase**: the validator keeps sync data and waits for the committee role.

**4. Committee**: each validator will be selected as proposer in round robin fashion, the proposer takes responsibility to propose a new block, other committee members will vote for it. At the end of the epoch, if the validator finishes the committee role, it will be appended to the end of the Pending pool queue. Or if the validator may be slashed, it’s forced to unstake, the staking PRV will be returned to the node, however, the node won’t get any reward in the last epoch.

**5. Unstake**: the validator could submit an unstake transaction at any time, however if the validator is assigned to a shard already, it has to wait until it finishes its committee role.

## Analysis

* Validators don’t have to sync data from all shards, this would save a lot of disk storage.

* Can an attacker direct all of its nodes to a single share? It’s not that easy, because the random assign algorithm is to balance all shards’ validators.
* If the attacker has ⅓ validators in a shard, it could suspend the shard by not voting in an epoch. However it’s not able to create double spending or airdrop transactions.
* Currently, the foundation keeps the fixed proposer list in each shard, the validators are open to the community. The consensus of each block is the agreement of the foundation and community. A single side would not be successful to create any single block.

