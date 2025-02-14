---
id: combination-etc
sidebar_label: Consensus - A Combination of iPoS, Multiview-pBFT, and BLS
title: Consensus - A Combination of iPoS, Multiview-pBFT, and BLS
---


Both beacon chain and shard chains use the same consensus mechanism to produce new blocks.

## Incognito Proof-of-Stake (iPoS)

Incognito implements the more energy-efficient Proof-of-Stake [King and Nadal, 2012] in lieu of Proof-of-Work [Dwork and Naor, 1992; Juels, 1999].

In the first generation of POS, each staking node (validator) has one vote. The more validators, the more secure the chain. However, PoS is not a scalable consensus; communication overhead increases linearly with committee size. Research demonstrates that POS is only able to achieve a reasonable level of security when there are 600 validators or more in the committee [Luu et al. 2016]. A committee with 600 nodes faces real challenges in syncing statuses and exchanging messages in order to create a new block.

To overcome scaling-related communication problems, Delegate Proof of Stake (DPOS) was first proposed by Bitshares (https://bitshares.org/). This could be considered to be the second generation of POS. In DPOS, only a small group of validators are selected into the committee, where they have the right to propose and verify new blocks. This solves the communication problem of the POS approach, but it sacrifices properties of decentralization and trustlessness, specifically:

* Staking nodes have to trust delegated nodes.
* The smaller the committee size, the easier it can be compromised.
* Only delegated nodes work (i.e propose & verify blocks), the staking node does nothing.

Incognito proposes iPOS which allows for both scale and trustlessness. Anyone can be a validator candidate by staking PRV. The beacon chain randomly assigns validators to each shard. At a moment, only a small group of validators in a shard is selected into the committee. The committee of each shard is responsible for proposing and verifying blocks. The committee rotates, so every validator has to put in an equal amount of work. As for decentralization, each shard block signed by the shard committee will be verified by the beacon committee. If any incorrect transaction such as airdrop or double spending is detected, the beacon will inform all other shards using the proof. All honest shards will vote to slash the byzantine shard’s committee.

## Multiview Practical Byzantine Fault Tolerance (M_PBFT)

Incognito proposes and implements a variant of pBFT [Castro et al., 1999] at the consensus layer. We further improve its efficiency by employing the BLS-based aggregate multi-signature scheme AMSP [Boneh et al., 2018].

Tendermint, a popular implementation of pBFT, requires participants to have the same view for every block minted. Nodes must sync their status at every block, which causes communication overhead. Incognito proposes multiview pBFT, whereby a node makes decisions based on its best view and does not require the syncing status of other nodes in the committee. Find more details on multiview pBFT [here](https://we.incognito.org/t/multiview-a-new-approach-for-pbft-implementation/920).

## Validator Life Cycle

* Common pool: new staking node, waiting to be assigned to a particular shard
* Sync pool: sync the assigned shard’s data
* Substitute pool: node finished sync its data, queueing in the substitute list of its shard
* Committee pool: validate and vote blocks
  * 4 states: new (in common pool), candidate (in sync pool), substitute (in substitute pool), committee (in committee).

![image](https://user-images.githubusercontent.com/37530661/168771843-1b9b1739-52e9-413f-b3ed-beef6c9e83e2.png)
*Figure 1. Life cycle*

## BLS-based Aggregate Multi-Signatures from Pairing

As the number of validators grows, the total size of all validator signatures also grows and impacts the block size. To solve this problem, we implement the BLS-based aggregate multi-signature scheme AMSP [Boneh et al., 2018].

When the block proposer proposes a new block, all the validators in the current committee verify the block and broadcast their signatures. All of these signatures are then aggregated into a single aggregate signature. Regardless of the number of validators, the size of the aggregate signature is only 32 bytes.

## Implementation

The implementation is mainly in the *Consensus* component in the Incognito architecture.

![](https://we.incognito.org/uploads/default/original/1X/c71f04a76c6b78038a9e54b55fe9d670fbfd28d7.png) 

*Figure 5. The layered Incognito architecture.*

The code is open-source on Github with links to specific packages provided below.

* **Multiview-pBFT** . For the consensus algorithm, Incognito implements the Multiview-pBFT (Practical Byzantine Fault Tolerance). Its code is in the [blsbft](https://github.com/incognitochain/incognito-chain/tree/master/consensus/blsbft) package.
* **BLS**. For multi-signature aggregation, Incognito implements BLS Multi-Signatures. Its code is in the [blsmultisig](https://github.com/incognitochain/incognito-chain/tree/master/consensus/signatureschemes/blsmultisig) package.
* **RNG**. For random number generator, Incognito currently uses Bitcoin block hash. We'll explore other RNG solutions in the future. Its code is in the [btc](https://github.com/incognitochain/incognito-chain/tree/master/blockchain/btc) package.

We have proposed a new approach to scale privacy on cryptonetworks by applying sharding on privacy transactions to increase throughput for Incognito. Incognito throughput scales out linearly with the number of shards. The more shards we add, the more transactions it can handle.
