---
id: learn-consensus
title: AXIA Consensus
sidebar_label: Transaction Fees
description: An explanation of the consensus model used in AXIA
slug: ../learn-consensus
---
Some resources in a blockchain network are not unlimited, such as storage space and computational power. Network fees are a means to prevent improper consumption of these resources by the network users, and also stop malicious behavior such as spamming. The AXIA Network uses a weight driven fee model which vastly differs from other networks, such as the gas metering model that Ethereum utilizes. The fee is charged for every on-chain transaction and once the fee is deducted, the network considers the transaction fully processed. At that time the network fee will be burned, permanently removing these AXIA Coins from existence.

### The transaction fee model of the AXIA Network follows these objectives:

* AXIA Network fees will stay low and stable 
* All network fees are to be burned to create greater scarcity to provide consistent value for all network participants
* Block production delays are to be avoided and the CoreChain must always ensure efficient block production
* The CoreChain shall grow at a predictable rate
* Blocks must support having space for reporting of malicious events on-chain
* The AXIA Network as a system must be able to handle sudden demand peaks
* The AXIA Network will provide the capability to accurately estimate the fee for transactions


