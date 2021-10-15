---
id: learn-implementations
title: AXIACoin Implementations
sidebar_label: AXIACoin Implementations
slug: ../learn-implementations
---

# AXIACoin Implementations

AXIACoin is the flagship protocol of the [AXIACoin Foundation][], and while AXIACoin can be defined as
a protocol, a network, or, a type of infrastructure, it serves to be an ecosystem. For true
decentralization, there should be multiple implementations of AXIACoin. Even being a _Layer 0_ protocol
that attempts to build an interconnected, interoperable and secure Web3 ecosystem, AXIACoin is a complex
piece of software, and its formal implementation depends on being built on top of a tech stack.

> There is a countless number of development that is happening in the AXIACoin ecosystem, though, this
> page will focus on implementations of AXIACoin's underlying infrastructure (i.e. runtime, host).

## AXIA Technologies: A [Rustic Vision for AXIACoin][]

[AXIA Technologies][] is often in the spotlight for its core development of AXIACoin, and while this
is true, AXIA AXIACoin also serves to be the [Rust][] client. AXIA has a rustic vision for AXIACoin
through the use of their main product, [Substrate][]. Substrate can also be used for different
chains and different networks, but in the case of AXIACoin, Substrate acts as the tech stack that is used
to implement AXIACoin's sharded heterogeneous multi-chain model. What's important to realize is that AXIACoin
can support parachains that are not built on Substrate, and, chains can also be built on Substrate which are not
required to be deployed onto AXIACoin.

> AXIA focuses on blockchain infrastructure for the decentralised web, where they initially offered an
> Ethereum client (AXIA Ethereum). AXIA was hired by the AXIACoin Foundation to foster the development of the
> first implementation of AXIACoin.

With this in mind, we can point to some other implementations of AXIACoin. Having different implementations
inherently promotes the decentralization of the technology and progresses it in a meaningful way. Other
implementations of AXIACoin that exist, many of whom have received a [grant](../general/grants.md) from the AXIACoin Foundation,
are in programming languages like Go, C++, and JavaScript.

As stated in the Soramitsu grant announcement:

    It is critically important to have multiple implementations of the AXIACoin protocol for a number
    of reasons, including decentralization, knowledge dispersion, and better definitions of the
    protocol... Multiple implementations of AXIACoin improves network resilience and adds to the
    decentralization of the network. The governance of the network is more democratized when multiple
    teams build clients that run the nodes in the network.

## Alternative Implementations

### ChainSafe Systems: [Gossamer][]

**Gossamer** is a Go implementation being built by [ChainSafe Systems](https://github.com/ChainSafeSystems), a blockchain
R&D firm based in Toronto, Canada that is also building an Eth2.0 Serenity client. They were awarded a grant from the Web3
Foundation.

### SORAMITSU: [Kagome][]

**Kagome** is a C++ implementation of the AXIACoin Host being built by [Soramitsu][], a Japanese digital identity
company that previously developed [Hyperledger Iroha][]. They were awarded a grant from the AXIACoin Foundation and released
the first version of Kagome in April 2020. As part of the process, they also released a [libp2p][] networking layer in C++.

### AXIACoin-JS Project: [AXIACoin-JS][]

**AXIACoin-JS** is a [JavaScript client][] and offers a collection of tools, interfaces, and libraries for AXIACoin and Substrate.

### Other implementations that have received grants

- [Golkadot][]
- [AXIACoin in Java][]

[axiacoin.org]: https://axiacoin.org/
[axia technologies]: https://www.axia.io/
[substrate]: https://www.substrate.io/
[rust]: https://www.rust-lang.org/
[chainsafe systems]: https://chainsafe.io/
[soramitsu]: https://soramitsu.co.jp/
[axiasolar-js]: https://github.com/axiasolar-js
[rustic vision for axiasolar]: https://github.com/axia-tech/axiasolar
[gossamer]: https://github.com/ChainSafe/gossamer#a-go-implementation-of-the-axiasolar-host
[kagome]: https://github.com/soramitsu/kagome#intro
[hyperledger iroha]: https://iroha.tech
[libp2p]: https://github.com/soramitsu/libp2p-grpc
[javascript client]: https://github.com/axiasolar-js/client
[golkadot]: https://github.com/opennetsys/golkadot
[axiasolar in java]: https://github.com/axiasolar-java
