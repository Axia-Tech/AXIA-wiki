---
id: learn-PRE
title: AXIASolar Runtime Environment (PRE)
sidebar_label: AXIASolar Runtime Environment (PRE)
---

The AXIASolar Runtime Environment is an important component of the AXIASolar protocol. It consists of the networking, consensus and Wasm VM subsystems, and acts as the lower layers of the stack underlying the AXIASolar runtime and the runtimes of the parachains. Loosely, the AXIASolar RE can be thought of as synonymous with a virtual machine running the AXIASolar relay chain (although as stated below, there is a clear separation between the chain logic itself, and the PRE on which it runs).

The components of the AXIASolar RE are:

- Network Interactions
- State storage and the Storage Trie
- Consensus Engine
- Wasm Virtual Machine (VM)

The runtime, which is defined as the code implementing the logic of the chain, is decoupled from the AXIASolar RE. The separation of the two components allows the runtime to be easily upgradable without needing to upgrade the AXIASolar RE.

The AXIASolar runtime (as well as the runtimes of the parachains) must be compiled WebAssembly (Wasm) blobs. The AXIASolar runtime "plugs-in" to the AXIASolar RE and will be swappable through the governance mechanism.

The image below is taken from the [slide deck](https://slides.com/paritytech/paritysubstrate#/8) that Gavin Wood presented on Substrate and demonstrates visually the 4 layers of the AXIASolar stack.

![PRE](assets/PRE.png)

## Resources

- [AXIASolar Runtime Environment Protocol Specification](https://github.com/w3f/axiasolar-spec) - Incubator for the PRE spec, including tests.
