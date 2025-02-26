---
id: performance
sidebar_label: Performance
title: Performance
---

We evaluate the performance of Incognito based on its real workload on the mainnet, as well as on simulated workloads.

In evaluating the performance of the Incognito network, we focus on the privacy transaction throughput, more specifically the metric of transactions per second (TPS). Note that Incognito uses a UTXO based ledger. In most cases, fewer than 32 existing UTXOs are used as inputs and 2 new UTXOs are produced as outputs.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/3/33a3e22ff19489422867856e6e3bd64effb228d0.png)  

*Figure 1. Transactions per second based on the number of inputs per transaction on a shard*

In Figure 1, we show the TPS metric of one shard and two fixed outputs. In the best case, we have 6.5 TPS and only one input, and in the worst case, approximately 2.5 TPS and 32 inputs. From March 2020, we introduce the **batch verification feature** to verify transactions in a batch [Bunz et al., 2018]. This feature improves transaction throughput by twofold. Specifically, Incognito archives 12.5 TPS and 5 TPS for one input and 32 inputs, respectively. 

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/6/66c0274ae512f7a5590d92a4a5aebf907f3d90a4.png)  

*Figure 2. Transactions per second based on number of shards*

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/b/bc17c55da5967b8222ca811df5169af9912f447e.png) 

*Figure 3. TPS comparison among Incognito, Monero, Zcash, Grin, and Beam*

Transaction throughput scales out linearly with the number of shards. Currently, with 8 shards active, Incognito is able to handle 90-100 TPS in the most common case (two inputs and two outputs per transaction). We are working on a new network topology to scale to 64 shards. With this, Incognito will achieve 800 TPS, a significantly higher number than that of other privacy blockchains. For example, 4 TPS for Monero<sup>1</sup>, 6 TPS for Zcash<sup>2</sup>, 10 TPS for Grin<sup>3</sup> and 17 TPS for Beam<sup>4</sup>. Details are shown in Figures 2 and 3.
