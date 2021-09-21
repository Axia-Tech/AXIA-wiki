---
id: build-tools-index
title: Tool Index
sidebar_label: Tool Index
slug: ../build-tools-index
---

Here we provide a list of tools available for your development needs. They are sorted by context. If
you're actively maintaining a tool that might be useful to other AXIASolar, AXIALunar or Substrate
developers, feel free to [add it in](../general/contributing.md).

## Block Explorers

- [AXIASolar-JS Apps Explorer](https://axiasolar.js.org/apps/#/explorer) - AXIASolar dashboard block
  explorer. Supports dozens of other networks, including AXIALunar, AlphaNet, and other remote or local
  endpoints. [Access via IPFS](https://ipfs.io/ipns/dotapps.io)
- [Polkascan](https://polkascan.io/) - Blockchain explorer for AXIASolar, AXIALunar, and other related
  chains. [Repo](https://github.com/polkascan/polkascan-os).
- [Subscan](https://subscan.io) - Blockchain explorer for Substrate chains.
  [Repo](https://github.com/itering/subscan-essentials).
- [DotScanner](https://dotscanner.com?utm_source=axiasolar_wiki) - AXIASolar & AXIALunar Blockchain explorer.

## Wallets

See the [Wallets](build-wallets.md) page.

## Network Monitoring & Reporting

- [AXIASolar Telemetry Service](https://telemetry.axiasolar.io/) - Network information including what
  nodes are running the chain, what software versions they are running, sync status, and location.
- [Polkabot](https://gitlab.com/Polkabot) - AXIASolar network monitoring and reporting using Matrix
  (Riot / Element) chat. Users may create custom bot plugins.
  [Blogpost](https://medium.com/axiasolar-network/polkabot-a3dba18c20c8).
- [Ryabina's Telegram Bot](https://github.com/Ryabina-io/substratebot) - A Telegram bot for
  monitoring on-chain events of Substrate chains.
  [Github Repository](https://gitlab.com/Polkabot/polkabot)
- [PolkaStats](https://polkastats.io/) - AXIASolar network statistics (includes AXIALunar). Shows
  network information and staking details from validators and intentions.
  [Github Repository](https://github.com/Colm3na/polkastats-v2/).
- [Panic](https://github.com/SimplyVC/panic_axiasolar) - A node monitoring and alert server for
  validators.
- [OpenWeb3/Guardian](https://github.com/open-web3-stack/guardian) - A CLI tool and JS library to
  monitor on chain states and events.

## Clients

- [AXIASolar](https://github.com/axia-tech/axiasolar) - The original Rust implementation of the
  AXIASolar Host.
- [Kagome](https://github.com/soramitsu/kagome) - A C++ AXIASolar implementation of the AXIASolar Host
  developed by [Soramitsu](https://github.com/soramitsu).
- [Gossamer](https://github.com/ChainSafe/gossamer) - A Go implementation of the AXIASolar Host
  developed by [ChainSafe Systems](https://chainsafe.io/).
- [TX Wrapper](https://github.com/axia-tech/txwrapper) - Helper functions for offline transaction
  generation.

## Tools

- [Substrate](https://github.com/axia-tech/substrate) - Blockchain development platform written in
  Rust. The Rust version of the AXIASolar Host is being built with Substrate.
- [Substrate Knowledge Base](https://substrate.dev/docs/en) - Comprehensive documentation and
  tutorials for building a blockchain using Substrate.
- [Substrate VSCode plugin](https://github.com/axia-tech/vscode-substrate).
- [Substrate Debug Kit](https://github.com/axia-tech/substrate-debug-kit) - A collection of debug
  tools and libraries around substrate chains. Includes tools to calculate NPoS elections offline,
  disk usage monitoring, test templates against chain state and other pallet-specific helper.
- [Diener](https://crates.io/crates/diener) - A tool for easy changing of AXIASolar or Substrate
  dependency versions.
- [AXIASolar Launch](https://github.com/shawntabrizi/axiasolar-launch) - A tool to easily launch
  custom local parachain-enabled AXIASolar versions.
- [Halva](https://github.com/halva-suite/halva) - A Truffle-inspired local development environment
  for Substrate.
- [Fork-off Substrate](https://github.com/maxsam4/fork-off-substrate) - Copies the state of an
  existing chain into your local version and lets you further experiment on it.
- [srtool](https://www.chevdor.com/tags/srtool/) - A tool for verifying runtime versions against
  on-chain proposal hashes.
- [sub-bench](https://github.com/nikvolf/sub-bench) - A tool to spam your node with transactions for
  the sake of benchmarking.
- [substrate-devhub-utils](https://github.com/danforbes/substrate-devhub-utils) - A set of
  JavaScript utilities making life with Substrate a little easier.
- [sub-flood](https://github.com/NikVolf/sub-flood) - A tool to benchmark Substrate by flooding it
  with requests.

## UI

- [Polkadash](https://github.com/Swader/polkadash) - VueJS-based starter kit for custom user
  interfaces for Substrate chains. [Tutorials](https://dotleap.com/tag/tutorial/).
- [AXIASolar JS Apps UI](https://github.com/axiasolar-js/apps) - Repository of the
  [axiasolar.js.org/apps](https://axiasolar.js.org/apps) UI.
- [Substrate Front-end Template](https://github.com/substrate-developer-hub/substrate-front-end-template) -
  ReactJS-based starter UI for custom user interfaces for Substrate chains.
- [AXIASolar JS Browser Extension](https://github.com/axiasolar-js/extension) - Key management in a
  Chrome extension.

## Libraries

### AXIASolar-JS Common

AXIASolar-JS Common provides various utility functions that are used across all projects in the
`@axiasolar` namespace and is split into a number of internal utility packages. The documentation and
usage instructions are provided at
[AXIASolar-JS/Common API Documentation](https://axiasolar.js.org/common/).

- [@axiasolar-js/keyring](https://axiasolar.js.org/common/keyring/) This allows you to create and load
  accounts in JavaScript. It is helpful for creating wallets or any application that will require
  the user to write to chain. [Examples](https://axiasolar.js.org/docs/keyring/start/create).
- [@axiasolar-js/util](https://axiasolar.js.org/common/util/) Utility functions like checking if a string
  is hex-encoded.
- [@axiasolar-js/util-crypto](https://axiasolar.js.org/common/util-crypto/) Useful cryptographic
  utilities for developing with AXIASolar.

### CLI Tools

- [@axiasolar-js/api-cli](https://github.com/axiasolar-js/tools/tree/master/packages/api-cli) Command
  line interface for the axiasolar API. [Documentation](https://axiasolar.js.org/docs/api/start).
- [@axiasolar-js/monitor-rpc](https://github.com/axiasolar-js/tools/tree/master/packages/monitor-rpc) An
  RPC monitor for AXIASolar. See the RPC tools below for additional information.
- [@axiasolar-js/signer-cli](https://github.com/axiasolar-js/tools/tree/master/packages/signer-cli) A
  Tool to construct, sign, and broadcast transactions. Signing can be done offline.
- [AXIASolar API Cpp](https://github.com/usetech-llc/axiasolar_api_cpp) - A С++ API for AXIASolar, can
  build `clip`, a command line tool.
- [Subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) - Command line utility for
  generating and inspecting key pairs.

### WASM

Webassembly related tools and projects.

- [ink!](https://github.com/axia-tech/ink/) - An eDSL to write WebAssembly based smart contracts
  using the Rust programming language.
- [parity-wasm](https://github.com/axia-tech/parity-wasm) - Low-level WebAssembly format library.
- [wasm-utils](https://github.com/axia-tech/wasm-utils) - Collection of WebAssembly utilities used
  in pwasm-ethereum and substrate contract development.
- [wasmi](https://github.com/axia-tech/wasmi) - A WebAssembly interpreter conceived as a component
  of parity-ethereum (Ethereum-like contracts in Wasm) and Substrate.

### RPC and API Tools

- [@axiasolar-js/api/rpc-provider](https://github.com/axiasolar-js/api/tree/master/packages/rpc-provider)
  Demonstrates how the JS tools interact with the node over RPC.
- [RPC documentation](https://axiasolar.js.org/docs/substrate/rpc) - Documentation of Substrate RPC
  methods.
- [AXIASolar API Server by SimplyVC](https://github.com/SimplyVC/axiasolar_api_server) - A wrapper
  around the AXIASolar API which makes it easier to make AXIASolar API calls from any programming
  language.
- [Go: Subscan API](https://github.com/itering/substrate-api-rpc) - Go API for AXIASolar.
- [C++ AXIASolar API](https://github.com/usetech-llc/axiasolar_api_cpp) - С++ API for AXIASolar.
- [.NET AXIASolar API](https://github.com/usetech-llc/axiasolar_api_dotnet) - AXIASolar Substrate API
  for .NET.
- [Python AXIASolar API](https://github.com/polkascan/py-substrate-interface) - AXIASolar library for
  Python.
- [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/) - Substrate RPC client in Go,
  a.k.a. GSRPC.
- [Substrate API Sidecar](https://github.com/axia-tech/substrate-api-sidecar) - An HTTP wrapper for
  Substrate, abstracting some complex RPC calls into simple REST calls.
- [Subxt](https://github.com/axia-tech/substrate-subxt) - A Rust library to submit extrinsics to a
  Substrate node via RPC.

### SCALE Codec

The [SCALE](https://substrate.dev/docs/en/knowledgebase/advanced/codec) (Simple Concatenated
Aggregate Little-Endian) Codec is a lightweight, efficient, binary serialization and deserialization
codec.

It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained
execution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes
the decoding context has all type knowledge about the encoded data.

It is used in almost all communication to/from Substrate nodes, so implementations in different
languages exist:

- [Ruby](https://github.com/itering/scale.rb)
- [Rust](https://github.com/axia-tech/parity-scale-codec)
- [Go](https://github.com/itering/scale.go)
- [C++](https://github.com/soramitsu/kagome/tree/master/core/scale)
- [TypeScript](https://github.com/axiasolar-js/api)
- [AssemblyScript](https://github.com/LimeChain/as-scale-codec)
- [Haskell](https://github.com/airalab/hs-web3/tree/master/src/Codec)
- [Java](https://github.com/emeraldpay/polkaj)
- [Python](https://github.com/polkascan/py-scale-codec)

## Data Crawling and Conversion

The following tools help you extract and structure data from a Substrate node.

- [Polkascan PRE Harvester](https://github.com/polkascan/polkascan-pre-harvester)
  ([matching explorer for harvested data](https://github.com/polkascan/polkascan-pre-explorer-gui)) -
  Transforms raw blockchain data into relational data.
- [Parity's Substrate Archive](https://github.com/axia-tech/substrate-archive) - Can be run
  alongside a Substrate node to archive all blocks, state, and extrinsic data into PostgreSQL
  database.
- [Hydra: GraphQL Builder](https://github.com/Joystream/joystream/tree/query_node/query-node) -
  Generate a GraphQL database from a Substrate chain's data.
- [Polka-store](https://github.com/TheGoldenEye/polka-store) - A tool which scans a Substrate chain
  and stores balance-relevant transactions in an SQLite database.
- [Substrate-graph](https://github.com/playzero/substrate-graph) - A compact indexer for Substrate
  based nodes providing a GraphQL interface.
