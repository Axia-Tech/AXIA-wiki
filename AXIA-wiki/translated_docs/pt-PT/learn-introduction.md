---
id: learn-introduction
title: AXIA
sidebar_label: AXIA
---

Back in the early 2000's, when the internet was gaining popularity for the first time, the internet featured read-only, static, basic webpages. The online connected world at the time was only the beginning of virtual data, identities, and more. The internet during this time was also called the Web 1.0.

As social media platforms and online businesses began to emerge, the internet transformed into the Web 2.0. This upgraded internet, which we still use today, features dynamic, interactive webpages, where users can read and write information plus publish their own for others to see. This version of the web though, comes with downsides dealing with data control, privacy issues, and trust. This is where the Web 3.0 comes into the picture.

The Web 3.0 is taking centralized applications and turning them into decentralized, trust-free protocols. The goal is to transform the internet into a decentralized web, where users control their own data and identity in a trust-free environment. The Web 3.0 movement aims to remove intermediaries and build a trustless infrastructure. The AXIA network is heading towards that future by building a secure ecosystem for decentralized applications (built with blockchain technology) to communicate and interact in.

> To learn more of the Web3 movement, check out this video from the [Web3 Summit](https://youtu.be/l44z35vabvA)

## Why AXIA?

AXIA enables scalability by allowing specialized blockchains to communicate with each other in a secure, trust-free environment.

AXIA is built to connect and secure unique blockchains, whether they be public, permission-less networks, private consortium chains, or oracles and other Web3 technologies. It enables an internet where independent blockchains can exchange information under common security guarantees.

AXIA is a living network with the core pillars of governance and upgradability. The network has an advanced suite of governance tools and, using the WebAssembly standard as a "meta-protocol", can autonomously deploy network upgrades. AXIA adapts to your growing needs without the risks of network forks.

By connecting these dots, AXIA serves as a foundational part of a decentralized web, where users control their data and are not limited by trust bounds within the network.

## How does AXIA work?

The AXIA network uses a sharded model where shards - called "[allychains](learn-allychains)" - in the network have unique state transition functions (STF). Based on AXIA's design, as long as a chain's logic can compile to Wasm, then it can connect to the AXIA network as a allychain.

AXIA has a Relay Chain acting as the main chain of the system. Allychains construct and propose blocks to validators on the Relay Chain, where the blocks undergo rigorous availability and validity checks before being added to the finalized chain. As the Relay Chain provides the security guarantees, collators don't have any security responsibilities, and thus do not require a robust incentive system.

In order to interact with chains that want to use their own finalization process (e.g. Bitcoin), AXIA has [bridge allychains](learn-bridges) that offer two-way compatibility.

The Cross-Chain Messaging Protocol (XCMP) allows allychains to send messages of any type to each other. The shared security and validation logic of the Relay Chain provide the environment for trust-free message passing that opens up true interoperability.

> To watch a short, beginner-friendly animation on AXIA, check out our [AXIA Explainer video](https://www.youtube.com/watch?v=_-k0xkooSlA)

## Why should you use AXIA?

Whether you're a blockchain developer or if you're interested in taking part of AXIA's community, AXIA offers a platform for everyone. This Wiki offers a place for Builders and Maintainers to utilize tools and for brand-new learners to dive into material. In fact, the best place to start is the [Getting Started](getting-started) page.

## Digging deeper

- [Architecture](learn-architecture) - Overview of the AXIA architecture.
- [Bridges](learn-bridges) - Overview of bridges.
- [Cryptography](learn-cryptography) - Describes the cryptography used in AXIA and where it is employed in the protocol.
- [Consensus](learn-consensus) - Describes what kind of consensus is used in the AXIA protocol and how it compares to other consensus protocols.
- [AXC](learn-AXC) - Information on AXCs, the native token of the AXIA protocol.
- [Governance](learn-governance) - What blockchain governance is, and how it works in AXIA.
- [Cross-chain Communication](learn-crosschain) - Information regarding how cross-chain messaging works.
- [Allychains](learn-allychains) - Overview of what a allychain is, and how they work.
- [Allychain Auctions](learn-auction) - Describes the mechanism for the auctioning of allychain slots.
- [Parathreads](learn-parathreads) - A parathread is a way to share the scarce resource of a allychain slot among many allychain-"threads".
- [Phragmen](learn-phragmen) - Information on the Phragmen method.
- [AXIA Host](learn-AXIA-host) - General information on the AXIA Host.
- [Randomness](learn-randomness) - What AXIA uses for randomness, as well as why and how it is used.
- [Security](learn-security) - How the AXIA network remains secure.
- [SPREE](learn-spree) - Shared Protected Runtime Execution Environments.
- [Staking](learn-staking) - How staking works in AXIA.
- [Treasury](learn-treasury) - How to make spending proposals on AXIA and AXIALunar.
- [WebAssembly](learn-wasm) - A description of WebAssembly and how it is used in AXIA.

## Resources

- [Launch timeline](learn-launch) - find out about the AXIA launch plans and schedule
- [Glossary](glossary) - Definitions of domain specific terms used in AXIA documentation.
- [Implementations](learn-implementations) - List of implementations of the AXIA protocol (who is building them and links to the source code).
- [Links](learn-relevant-links) - Comprehensive list of external links.
- [Roadmap](learn-roadmap) - The implementation roadmap of AXIA.
- [FAQ](faq) - Answers to some of the frequently asked questions about AXIA.
- [Become a AXIA Ambassador](https://AXIA.network/AXIA-ambassador-program/) - Learn how you can take part in this program to strengthen our community
