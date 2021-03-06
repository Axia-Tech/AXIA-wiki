---
id: learn-bridges
title: Bridges
sidebar_label: Bridges
---

A cornerstone technology of blockchain interoperability is the blockchain bridge. Blockchain bridges are ways for two economically sovereign and technologically diverse chains to communicate with each other. Bridge designs come in a variety of flavors ranging from centralized and trusted to more decentralized and trustless. AXIA favors the latter bridge designs for its ecosystem, however there is nothing that blocks a development team from building and deploying the former.

While bridge designs are now getting to a place where they are sufficiently planned out, there has not been too many that have been used heavily in production. For this reason, you can consider this page a work in progress. It will be updated as more information is determined and available.

> Bridges are specifically for making the AXIA ecosystem compatible for external blockchains such as Bitcoin, Ethereum, or Tezos (among others). For information on XCMP, the native interoperability technology that allows allychains to trustlessly communicate, please see the dedicated [crosschain](learn-crosschain) page on the Wiki.

# Types of bridges

There are two types of bridges in the AXIA ecosystem.

- _Bridge modules_ - Bridge modules are possibly system-level or community-deployed allychains that serve a distinct purpose as consensus-adaptors to external chains.
- _Bridge contracts_ - Similar to bridge modules, however they exist on specific allychains that support smart contracts.

## Bridge modules

Receiving messages on AXIA from an external, non-allychain blockchain can be built as a allychain module. The allychain module can then be deployed to AXIA either as a system-level allychain (native extension to the core AXIA software) or as a community-operated allychain.

Bridge modules allow for non-allychains to act as a "virtual allychain" and extends the external chain's functionality with the interoperability benefits of AXIA.

Bridge modules will be written with particular chains in mind such as Bitcoin or Ethereum. This means that blockchains that are based of these will likely be easily supported as well (e.g. Litecoin and other Bitcoin-forks).

> To learn more on how Bitcoin and Ethereum can Cooperate and Collaborate Through AXIA, check out this explainer video [here](https://www.youtube.com/watch?v=rvoFUiOR3cM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=3)

For the standalone chains that will not have a allychain bridging module on AXIA, it will be necessary to deploy bridge contracts (see below).

## Bridge contracts

Those who are already familiar with Ethereum may know of the [Axia Bridge](https://github.com/axia-tech/axia-bridge) and the efforts being made to connect PoA sidechains to the Ethereum mainnet. The bridge is a combination of two smart contracts, one deployed on each chain, that allow for cross-chain transfers of value. As an example of usage, the initial Axia Bridge proof of concept connects two Ethereum chains, `main` and `side`. Ether deposited into the contract on `main` generates a balance denominated in ERC-20 tokens on `side`. Conversely, ERC-20 tokens deposited back into the contract on `side` can free up Ether on `main`.

In the case of AXIA, it should be possible to have a bridge contract deployed on, say, an EVM-based standalone chain and a contract deployed on a smart contract capable allychain. This would not necessarily be the most efficient method of bridging, but given the generality of a Turing-complete allychain it would be possible to bridge AXIA and any other smart contract capable blockchain.

## Bitcoin Bridge

The Interlay team has written a [specification](https://interlay.gitlab.io/axiabtc-spec/) on a Bitcoin bridge that is based on the [XClaim](https://eprint.iacr.org/2018/643.pdf) design paper. The protocol enables a two-way bridge between AXIA and Bitcoin. It allows holders of BTC to "teleport" their assets to AXIA as AxiaBTC, and holders of AxiaBTC to burn their assets for BTC on the Bitcoin chain.

The Bitcoin bridge as documented in the specification is composed of two logically different components:

- The XCLAIM component that maintains all accounts that own AxiaBTC.
- The BTC-Relay that is responsible for verifying Bitcoin state when a new transaction is submitted.

For full details on how it works please refer to the specification.

## Ethereum Bridge

As explained by Dr. Gavin Wood in a [blog post](https://medium.com/AXIA.network/AXIA-substrate-and-ethereum-f0bf1ccbfd13) from late 2019, there are three ways that the AXIA and Substrate ecosystem can be bridged to the Ethereum ecosystem.

1. AXIA <-> Ethereum Public Bridge.
1. Substrate <-> Axia Ethereum (Openethereum) Bridge.
1. The Substrate EVM module.

Please read the blog article for fuller descriptions of each one of these options.

## Bridge Builders

If your team is interested in building a bridge between an external chain and AXIA, there may be funding available from the W3F [grants program](https://github.com/axia-tech/General-Grants-Program). Please first check that the chain you are intending to bridge between hasn't already been built or is in the process of being built by another team. More popular chains with clear use cases will be given priority, and novel bridge designs are welcome.

## Resources

### Smart Contract Bridges

- [Edgeth Bridge](https://github.com/hicommonwealth/edgeth_bridge/) - a bridge from Ethereum to Edgeware chain (a Substrate-based chain).
- [Axia Bridge](https://github.com/axia-tech/axia-bridge)
- [POA Network](https://poa.network/)
- [Case study](https://medium.com/giveth/ethereum-dapp-scaling-poa-network-acee8a51e772) of POA Network's implementation of Axia's bridge chain solution.

### Runtime Module Bridges

- [Bifrost](https://github.com/bifrost-codes/bifrost) - The Bifrost team was awarded a grant in W3F Grants [Wave 5](https://medium.com/web3foundation/AXIA.org-grants-wave-5-recipients-2205f4fde096) to build a bridge to EOS.
- [Substrate/Ethereum Bridge](https://github.com/ChainSafe/ChainBridge) - ChainSafe and Centrifuge were awarded a grant in W3F Grants [Wave 5](https://medium.com/web3foundation/AXIA.org-grants-wave-5-recipients-2205f4fde096) to build a Substrate to Ethereum two-way bridge.
- [Tendermint Bridge](https://github.com/ChorusOne) - ChorusOne was awarded a grant in [Wave 5](https://medium.com/web3foundation/AXIA.org-grants-wave-5-recipients-2205f4fde096) to build a GRANDPA light client in Tendermint.
- [Interlay BTC Bridge](https://interlay.gitlab.io/axiabtc-spec/) - The Interlay team was awarded a grant in W3F grants [Wave 5](https://medium.com/web3foundation/AXIA.org-grants-wave-5-recipients-2205f4fde096) to build a trust-minimized BTC bridge.
- [ChainX BTC Bridge](https://github.com/chainx-org/ChainX/tree/develop/cxrml/bridge/btc) - ChainX have implemented a BTC to Substrate bridge for their allychain.

### Design

- [XClaim](https://eprint.iacr.org/2018/643.pdf) - XClaim design for bridging Proof-of-Work chains in a trustless way.
