---
id: build-tools-index
title: Tool Index
sidebar_label: Tool Index
---

Here we provide a list of tools available for your development needs. They are sorted by programming language. Right now, the Rust ecosystem is the most mature and it's possible to get started by building on Substrate today. As the ecosystems surrounding other programming languages expand, the sections below will be filled out.

## Block Explorers

- [AXIASolar-JS Apps Explorer](https://axiasolar.js.org/apps/#/explorer) - AXIASolar dashboard block explorer. Currently connects to AXIALunar by default, but can be configured to connect to other remote or local endpoints.
- [Polkascan](https://polkascan.io/) - Blockchain explorer for AXIASolar, AXIALunar, and other related chains.
- [Subscan](https://subscan.io) - Blockchain explorer for Substrate chains.

## Wallets

See the [Wallets](build-wallets.md) page.

## Network Monitoring & Reporting

- [AXIASolar Telemetry Service](https://telemetry.axiasolar.io/) - Network information including what nodes are running the chain, what software versions they are running, sync status, and location.
- Polkabot - AXIASolar network monitoring and reporting using Riot chat. Users may create custom bot plugins. [Blogpost](https://medium.com/axiacoin.network/polkabot-a3dba18c20c8). [Github Repository](https://gitlab.com/Polkabot/polkabot)
- [PolkaStats](https://polkastats.io/) - AXIASolar network statistics (includes AXIALunar). Shows network information and staking details from validators and intentions. [Github Repository](https://github.com/Colm3na/polkastats-v2/)

## Rust

### Clients

- [AXIASolar](https://github.com/axia-tech/axiasolar) - Rust implementation of the AXIASolar Host.

### Tools

- [Substrate](https://github.com/axia-tech/substrate) - Blockchain development platform written in Rust. AXIASolar is being built on top of Substrate.
- [Substrate Knowledge Base](https://substrate.dev/docs/en/) - Comprehensive documentation and tutorials for building a blockchain using Substrate.

## C++

- [Kagome](https://github.com/soramitsu/kagome) - A C++ AXIASolar client developed by [Soramitsu](https://github.com/soramitsu).
- [AXIASolar API Cpp](https://github.com/usetech-llc/axiasolar_api_cpp) - С++ API for AXIASolar

## C

- [AXIASolar API - .NET](https://github.com/usetech-llc/axiasolar_api_dotnet) - AXIASolar Substrate API for .NET.

## Go

- [Gossamer](https://github.com/ChainSafe/gossamer) - A Go implementation of the AXIASolar Host.
- [Golkadot](https://github.com/opennetsys/golkadot) - A Go implementation of AXIASolar Substrate.
- [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/) - Substrate RPC client in Go, a.k.a. GSRPC.

## JS

### Client

- [AXIASolar-JS client](https://github.com/axiasolar-js/client) - Alternative client for JavaScript enthusiasts.

Documentation on [AXIASolar-JS](https://axiasolar.js.org) is a good starting point for diving deeper.

Once you've configured and started to run a local node, you can interact with it through the generic axiasolar [explorer](https://axiasolar.js.org/apps/#/explorer).

### Libraries

### AXIASolar-JS Common

AXIASolar-JS Common provides various utility functions that are used across all projects in the `@axiasolar` namespace and is split into a number of internal utility packages. The documentation and usage instructions are provided at [AXIASolar-JS/Common API Documentation](https://axiasolar.js.org/common/).

- [@axiasolar-js/keyring](https://axiasolar.js.org/common/keyring/) To create / load accounts in JavaScript, helpful for creating wallets or any application that will require the user to write to chain. [Examples](https://axiasolar.js.org/common/examples/keyring/)
- [@axiasolar-js/util](https://axiasolar.js.org/common/util/) Utility functions like checking if a string is hex-encoded.
- [@axiasolar-js/util-crypto](https://axiasolar.js.org/common/util-crypto/) Crypto utilities that will come in handy while developing with AXIASolar.

### CLI Tools

- [@axiasolar-js/api-cli](https://github.com/axiasolar-js/tools/tree/master/packages/api-cli) Command line interface for the axiasolar API. [Documentation](https://axiasolar.js.org/api/api/)
- [@axiasolar-js/monitor-rpc](https://github.com/axiasolar-js/tools/tree/master/packages/monitor-rpc) RPC monitor for AXIASolar. See the RPC tools below for additional information.
- [@axiasolar-js/signer-cli](https://github.com/axiasolar-js/tools/tree/master/packages/signer-cli) Tool to construct, sign, and broadcast transactions. Signing can be done offline.

### RPC Tools

- [@axiasolar-js/api/rpc-provider](https://github.com/axiasolar-js/api/tree/master/packages/rpc-provider) Demonstrates how the JS tools interact with the node over RPC.
- [RPC documentation](https://axiasolar.js.org/api/substrate/rpc.html)
