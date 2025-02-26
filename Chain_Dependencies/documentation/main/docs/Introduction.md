---
id: intro
sidebar_position: 1
sidebar_label: Introduction
---

# Introduction: A Platform of Decentralized Privacy Coins

Today, anyone can send BTC, ETH, and thousands of other cryptocurrencies to another party without going through a financial institution [[Nakamoto, 2008](http://www.bitcoin.org/bitcoin.pdf); [Buterin et al., 2014](https://github.com/ethereum/wiki/wiki/white-paper)]. For those who value privacy, these cryptocurrencies come with a big tradeoff. Transactions are recorded on public ledgers, displaying amounts involved, inscribing virtual identities of their senders and receivers. Given the choice, we strongly believe that very few people will willingly disclose their crypto financials to the entire world.

> The inherent lack of privacy to cryptonetworks today is a real and present threat to the entire crypto space. 

Existing solutions like Monero, Zcash, and Grin introduced their own version of cryptocurrencies that focus on privacy, based on CryptoNote [[Van Saberhagen, 2013](https://cryptonote.org/whitepaper.pdf)], Zerocash [[Sasson et al., 2014](http://zerocash-project.org/media/pdf/zerocash-oakland2014.pdf)], and Mimblewimble [[Jedusor, 2016](https://scalingbitcoin.org/papers/mimblewimble.txt)] respectively.

> Incognito takes a different approach, based on the premise that people don’t want a new cryptocurrency with privacy. What they really want is privacy for their existing cryptocurrencies: incognito mode for any cryptocurrency.

Incognito is designed so users don’t have to choose between their favorite cryptocurrencies and privacy coins. They can have both. They can hold any cryptocurrency and still be able to use it confidentially whenever they want. Privacy needs to be ubiquitous, inclusive, and accessible.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/2X/4/40dacac84bd790186813154dc201b77984cfa391_2_552x552.jpeg) 

*Figure 1. Incognito as a privacy hub. It is interoperable with other cryptonetworks via [shielding and unshielding processes ](https://incognito.org/t/shielding-cryptocurrencies-turning-any-cryptocurrency-into-a-privacy-coin/83), which allow cryptocurrencies like BTC and ETH to go incognito and back.*

First, we proposed a solution to [shield any cryptocurrency](https://incognito.org/t/shielding-cryptocurrencies-turning-any-cryptocurrency-into-a-privacy-coin/83) such as BTC, ETH, and USDT. In effect, any cryptocurrency can now be a privacy coin. Both shielding and unshielding processes are carried out via a decentralized group of [trustless custodians](https://incognito.org/t/trustless-custodians-a-decentralized-approach-to-cryptocurrency-custodianship/84). Once shielded, transactions are confidential and untraceable. To provide [privacy](https://incognito.org/t/sending-cryptocurrencies-confidentially-ring-signature-homomorphic-commitment-and-zero-knowledge-range-proofs/170), we employed the *linkable ring signature scheme*, *homomorphic commitment scheme*, and *zero-knowledge range proofs*.

Second, we presented a solution to scale out a privacy-focused cryptonetwork by implementing [sharding](https://incognito.org/t/scaling-blockchain-privacy-with-sharding/169) on privacy transactions and a new [consensus](https://incognito.org/t/consensus-a-combination-of-pos-pbft-and-bls/114) based on *proof-of-stake*, *pBFT*, and *BLS*. Transaction throughput scales out linearly with the number of shards.

> Currently, with 8 shards active, Incognito can handle 100 TPS. And with a full deployment of 64 shards,  Incognito can handle [800 TPS](https://incognito.org/t/incognito-performance/270) – a significantly higher number than that of other privacy blockchains, which usually can only handle less than 10 TPS.

Incognito launched its [mainnet](https://mainnet.incognito.org/) in November 2019 as a privacy-protecting, high-performance cryptonetwork to deliver incognito mode for other cryptonetworks like Bitcoin and Ethereum. As of February 2020, it has 8 shards powered by over 1,000 validators and has confidentially processed over $1.4M worth of crypto in 74 different currencies such as BTC, ETH, and USDT.
