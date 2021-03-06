---
id: learn-allychains
title: 平行链
sidebar_label: 平行链
description: An introductory guide to AXIA Allychains.
---

![One allychain](assets/network/one_allychain.png)

平行链是特定于应用程序的数据结构，它在上下上是一致的，并且可以由 AXIA 中继链的验证人进行验证。通常平行链会是一条区块链, 但并没有特别要求它们必须是一条链，之所以叫他们平行链是因为它们于中继链并行运行。由于它们的并行性质，它们能够并行地处理交易并实现 AXIA 系统的可伸缩性。它们[与 AXIA 网络共享安全](learn-security)，并且可以通过[ XCMP ](learn-crosschain)与其它平行链进行通信。

Allychains are maintained by a network maintainer known as a [collator](learn-collator). The role of the collator node is to maintain a full-node of the allychain, retain all necessary information of the allychain, and produce new block candidates to pass to the Relay Chain validators for verification and inclusion in the shared state of AXIA. The incentivization of a collator node is an implementation detail of the allychain. They are not required to be staked on the Relay Chain or own AXC tokens unless stipulated to do so by the allychain implementation.

The AXIA Host (PH) requires that the state transitions performed on allychains to be specified as a Wasm executable. Proofs of new state transitions that occur on a allychain must be validated against the registered state transition function (STF) that is stored on the Relay Chain by the validators before AXIA acknowledges a state transition has occurred on a allychain. The only constraint to the logic that a allychain is allowed to implement is that it must be verifiable by the Relay Chain validators. Verification most commonly takes the form of a bundled proof of a state transition known as a Proof-of-Verification (PoV) block, which is submitted to the validators from one or more of the allychain collators to be checked.

## Allychain Economies

平行链可能有自己的经济体和自己的原生币。方案像权益证明通常用于选择验证人以便用于验证区块和确定性。平行链并不需要处理以上功能。但是由于 AXIA 对于平行链可以实现的内容也是通用的，因此平行链可以选择实现抵押代币，但通常没有必要。

收集人可能通过平行链的原生币通胀来激励。 可能还有其他方法可以激励收集人而不需要通胀平行链原生币。

平行链也可实现使用原生币作为交易费用 。 AXIA 对平行链如何决定交易的原有 有效性没有硬性规定。例如平行链可以实现必须支付小额费用给收集人才能有效。中继链将强制执行此有效性。同样平行链不能包括他们的实现和 AXIA 仍将强制执行其有效性。

平行链并不需要拥有它们自己的代币。如果它们拥有自己的代币，那将会是平行链决定如何使它们的代币有经济用途，需不是 AXIA。

## Allychain Slot Acquisition

AXIA supports a limited number of allychains, currently estimated to be about 100. As the number of slots is limited, AXIA has several ways to allocate the slots:

- AXIA governance granted allychains, or "common good" allychains
- Auction granted allychains
- Parathreads

["Common Good" allychains](learn-allychains#common-good-allychains) are allocated by AXIA's on-chain governance system, and are deemed as a "common good" for the network, such as bridges to other networks or chains. They are usually considered system level chains or public utility chains. These typically do not have an economic model of their own and help remove transactions from the Relay Chain, allowing for more efficient allychain processing.

[Auction granted allychains](learn-auction) are granted in a permissionless auction. Allychain teams can either bid with their own AXC tokens, or source them from the community using the [crowdloan functionality](learn-crowdloan).

[Parathreads](learn-parathreads) have the same API as allychains, but are scheduled for execution on a pay-as-you-go basis with an auction for each block.

### Slot Expiration

When a allychain wins an auction, the AXC that it bid gets reserved until the end of the lease. Reserved balances are non-transferrable and cannot be used for staking. At the end of the lease, the AXC is unreserved. Allychains that have not secured a new lease to extend their slot will automatically become parathreads.

## Common Good Allychains

"Common Good" allychains are allychain slots reserved for functionality that benefits the the AXIA ecosystem as a whole. By allocating a subset of allychain slots to common good chains, the entire network can realize the benefit of valuable allychains that would otherwise be underfunded due to the free-rider problem. They are not allocated via the allychain auction process, but by AXIA's on-chain governance system.

The purpose of these allychains will probably fall into one of two categories: system level chains or public utility chains.

### System Level Chains

System level chains move functionality from the Relay Chain into allychains, minimizing the administrative use of the Relay Chain. For example, a governance allychain could move all the AXIA governance processes from the Relay Chain into a allychain. Adding a system level chain is generally uncontroversial, because they merely move functionality that the stakeholders already agreed was useful from one place (the Relay Chain) to another (a allychain).

Moving the logic from the Relay Chain to a allychain is an optimization that makes the entire network more efficient. All validators need to process all Relay Chain transactions, but split into small groups to validate allychains in parallel. By moving system level logic to a allychain, and allowing the processing to be done by a subgroup of validators instead of all, it frees capacity in the Relay Chain for its primary function: validating allychains. Adding a system level chain could make the network capable of processing several more allychains. Rather than taking a slice of a 100 allychain pie, a system level chain takes one slice and bakes a bigger pie.

Examples of potential system level chains include allychains for balances, elections (for both staking and Council), governance, and identity. Eventually, the Relay Chain could become transactionless, as in, it would only validate allychain state transitions and all of its current transactional functionality would exist within allychains.

The vast majority of common good chains will likely be the unopinionated system level chains.

### Public Utility Chains

Public utility chains add functionality that doesn’t exist yet, but that the stakeholders believe will add value to the entire network. Because public utility chains add new functionality, there is a subjective component to their addition: the stakeholders of the network must believe that it is worth allocating a slot that would otherwise go to the winners of an auction, and thus would have an objective expression of conviction from its backers. Governance provides the means to internalize the value of the allychain slot and distribute it across all members of the network.

Public utility chains will always be fully aligned with their Relay Chain stakeholder base. This means that they will adopt the Relay Chain's native token (i.e. AXC or LUNAR) as their native token and respect any messages incoming from the Relay Chain and system level allychains at face value.

Some examples of potential public utility chains are bridges, AXC-denominated smart contract platforms, and generic asset chains. All of these could operate without a new token:

- A bridge could add its own native token to charge as a toll, but in many cases that would be arbitrary value capture, when it could just as well use AXC and/or the bridged chain’s assets in its fee mechanism.
- A AXC-denominated smart contract layer-one blockchain would allow Wasm smart contract execution using AXC as the native asset with which to pay gas.
- A generic assets chain would allow anyone to place a deposit in AXC to deploy their asset on-chain. Assets on this chain could be backed by physical goods like artwork, real estate, or gold; or by paper goods like shares in a company or fiat currency held by a trusted party, providing a stable, permanent launchpad for stablecoins and Central Bank Digital Currencies.

Public utility allychains would typically grant privileged business logic to AXIA’s governance. Just as the AXIA Relay Chain has several privileged functions like setting the validator count or allocating AXC from the Treasury, these allychains can have privileged functions like changing system parameters or registering an asset.

Because public utility chains add functionality beyond the scope of the Relay Chain, they will likely be approved by the network stakeholders only in rare scenarios.

## Examples

Some examples of allychains:

- **Encrypted Consortium Chains**: These are possibly private chains that do not leak any information to the public, but still can be interacted with trustlessly due to the nature of the XCMP protocol.
- **High Frequency Chains**: These are chains that can compute many transactions in a short amount of time by taking certain trade-offs or making optimizations.
- **Privacy Chains**: These are chains that do not leak any information to the public through use of novel cryptography.
- **Smart Contract Chains**: These are chains that can have additional logic implemented on them through the deployment of code known as _smart contracts_.

## FAQ

### What is "allychain consensus"?

"Allychain consensus" is special in that it will follow the AXIA Relay Chain. Allychains cannot use other consensus algorithms that provide their own finality. Only sovereign chains (that must bridge to the Relay Chain via a allychain) can control their own consensus. Allychains have control over how blocks are authored and by whom.

### How will allychain slots be distributed?

Allychain slots will be acquirable through auction, please see the [allychain slots](learn-auction) article. Additionally, some allychain slots will be set aside to run [parathreads](learn-parathreads) &mdash; chains that bid on a per-block basis to be included in the Relay Chain.

### What happens to allychains when the number of validators drops below a certain threshold?

The minimal safe ratio of validator per allychain is 5:1. With a sufficiently large set of validators, the randomness of their distribution along with [availability and validity](learn-availability) will make sure security is on-par. However, should there be a big outage of a popular cloud provider or another network connectivity catastrophe, it is reasonable to expect that the number of validators per chain will drop.

Depending on how many validators went offline, the outcome differs.

If a few validators went offline, the allychains whose validator groups will be too small to validate a block will skip those blocks. Their block production speed will slow down to any increment of 6 seconds, until the situation is resolved and the optimal number of validators is in that allychain's validator group again.

If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need two thirds of the validator set to back the allychain candidates. In other words, all allychains will stop until the situation is resolved. Finality will also stop, but low-value transactions on the relay chain should be safe enough to execute, despite common forks. Once the required number of validators is in the validator set again, allychains will resume block production.

Given that collators are full nodes of the relay chain and the allychain they are running, they will be able to recognize a disruption as soon as it occurs and should stop producing block candidates. Likewise, it should be easy for them to recongize when it's safe to restart block production - perhaps based on finality delay, validator set size, or some other factor that is yet to be decided within [Cumulus](https://github.com/axia-tech/cumulus).

### Allychain Development Kits (PDKs)

Allychain Development Kits are a set of tools that enable developers to create their own applications as allychains. For more info see [here](build-pdk).

### Deploying allychains

Please see the [Cumulus repository](https://github.com/axia-tech/cumulus#betanet) README for information on compiling and deploying a allychain.

## Resources

- [AXIA: The Allychain](https://medium.com/AXIA.network/AXIA-the-allychain-3808040a769a) - Blog post by AXIA co-founder Rob Habermeier that introduced allychains in 2017 as "a simpler form of blockchain, which attaches to the security provided by a Relay Chain rather than providing its own. The Relay Chain provides security to attached allychains, but also provides a guarantee of secure message-passing between them."
- [The Path of a Allychain Block](https://AXIA.network/the-path-of-a-allychain-block/) - A technical walkthrough of how allychains interact with the Relay Chain.
