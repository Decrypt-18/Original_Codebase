---
id: bsc-bridge
title: Binance Smart Chain bridge
sidebar_label: Binance Smart Chain bridge
---

Binance Smart Chain (BSC for short) supports bridges to 35 other blockchains, which means that if Incognito has a bridge to BSC, it would have a bridge to those 35 blockchain networks as well. Additionally, people have been bridging their crypto assets to BSC enormously according to [BSC’s token tracker](https://bscscan.com/tokens) in order to experience Defi dApps in a faster and cheaper way as compared to its counterpart (a.k.a Ethereum) so imagine if Incognito offers a method to bring anonymity possibility to 1% of BSC’s users who actually care about privacy, it would be a huge leap of the project in new user acquisition as well as processing volume.

### How will the Incognito - BSC bridge solve problems for users?

The current Incognito users benefit from the bridge on cheap and stable shielding / unshielding fees. For example, At the time of writing:

* A direct shielding from Ethereum to Incognito costs ~$1.66 (gas used by shielding transaction: 41,000, gas price: 15 gwei, eth price: $2,700). The cost is even more expensive for unshielding that would be ~$10.2 (gas used by shielding transaction: 253,000, gas price: 15 gwei, eth price: $2,700).

* A shielding from BSC to Incognito will only cost ~$0.15 (gas used by shielding transaction: 77,000, gas price: 5 gwei, BNB price: $400), similarly for the unshielding which will cost ~$0.3 (gas used by shielding transaction: 145,000, gas price: 5 gwei, BNB price: $400). Of course, the shielding & unshielding costs will have to include network fees in BNB to convert ETH into wrapped ETH and wrapped ETH back to ETH through Binance’s bridge.

For the new users, the expensive fees would also be a big barrier to onboarding. These users likely want to try out with a small shielding / unshielding to learn how the system works prior to having more confidence with larger ones. So giving those a try through the BSC bridge will help overcome the dilemma.

Also, for BSC’s Defi dApps users who actually care about privacy, the Incognito - BSC bridge is introducing pBSC, an extension of BSC that has a similar approach to the [pEthereum](https://we.incognito.org/t/pethereum-specifications/1688) but with much cheaper fees. This enables privacy-protecting BSC transactions and privacy-protecting decentralized applications like Pancake Swap or Pancake Bunny.

### Typical flow

The following illustrates the flow of coins that happens over public chains, Binance Smart Chain, and Incognito chain.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/7/76445c734e31631b219fbe314526fa5a3bc9772c.png)

As illustrated in the typical flow above, to be able to shield coins from public networks like Bitcoin, Ethereum, etc, you need to:

**Step 1**: convert public coins to wrapped coins on Binance Smart chain first. This could be done through the [Binance bridge](https://www.binance.org/en/bridge). Please have a look at [Binance bridge user guide](https://docs.binance.org/smart-chain/guides/bridge-v2.html#user-guide) in case you aren’t familiar with it.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/9/99fecd16f73dd220d6e6a9e5259d3efb641406bd.png)

**Step 2**: Once having the wrapped coins in your personal wallets (e.g. MetaMask or Trust Wallet), you will be able to shield the wrapped coins to private coins as you used to do with [ETH/ERC20 tokens decentralized shielding](https://we.incognito.org/t/app-v4-3-11-eth-erc20-tokens-decentralized-shielding/12447).

**Step 3**: You can transfer the shielded wrapped coins privately or swap anonymously over the Incognito network.

**Step 4**: The unshielding experience for the shielded wrapped coins from Incognito to Binance Smart Chain would be similar to what you’ve done with ETH/ERC20 tokens before.

**Step 5**: To convert wrapped coins from BSC back to public coins on a public network, you can use [Binance bridge](https://www.binance.org/en/bridge) again.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/a/a27475f7ba5dfd76178737b19ee623ce30776e8c.png)

### Technical designs

Because BSC is EVM-compatible, it launched with support for the rich universe of Ethereum tools and DApps. In theory, this makes it easy for us to port Incognito - Ethereum bridge to Incognito - BSC bridge. It’s just a matter of tweaking a couple of settings and the technical designs for the proposal would be the same as [here](https://we.incognito.org/t/incognito-mode-for-ethereum/53) (the bridge) and [here](https://we.incognito.org/t/pethereum-specifications/1688) (the pEthereum).

The code will be completely open source for both protocol and wallet app.
