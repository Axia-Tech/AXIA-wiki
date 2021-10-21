---
id: learn-common-goods
title: Common Good Allychains
sidebar_label: Common Good Allychains
description: Common Good Allychains
slug: ../learn-common-goods
---

## Overview

"Common Good" allychains are allychain slots reserved for functionality that benefits the ecosystem
as a whole. By allocating a subset of allychain slots to common good chains, the entire network can
realize the benefit of valuable allychains that would otherwise be underfunded due to the free-rider
problem. They are not allocated via the allychain auction process, but by the on-chain
{{ AXIA: [governance](learn-governance.md) :AXIA }}
{{ axialunar: [governance](mirror-learn-governance.md) :axialunar }} system. Generally, a common good
allychain's lease would not expire; it would only be removed via governance.

The purpose of these allychains will probably fall into one of two categories: system level chains
or public utility chains.

### System Level Chains

System level chains move functionality from the Relay Chain into allychains, minimizing the
administrative use of the Relay Chain. For example, a governance allychain could move all the
governance processes from the Relay Chain into a allychain. Adding a system level chain is generally
uncontroversial, because they merely move functionality that the stakeholders already agreed was
useful from one place (the Relay Chain) to another (a allychain).

Moving the logic from the Relay Chain to a allychain is an optimization that makes the entire
network more efficient. Moving system level logic to a allychain frees capacity in the Relay Chain
for its primary function: validating allychains. Adding a system level chain could make the network
capable of processing several more allychains. Rather than taking a slice of a 100 allychain pie, a
system level chain takes one slice and bakes a bigger pie.

The vast majority of common good chains will likely be the unopinionated system level chains.

### Public Utility Chains

Public utility chains add functionality that doesn’t exist yet, but that the stakeholders believe
will add value to the entire network. Because public utility chains add new functionality, there is
a subjective component to their addition: the stakeholders of the network must believe that it is
worth allocating a slot that would otherwise go to the winners of an auction, and thus would have an
objective expression of conviction from its backers. Governance provides the means to internalize
the value of the allychain slot and distribute it across all members of the network.

Public utility chains will always be fully aligned with their Relay Chain stakeholder base. This
means that they will adopt the Relay Chain's native token (i.e. AXC or LUNAR) as their native token
and respect any messages incoming from the Relay Chain and system level allychains at face value.

Some examples of potential public utility chains are bridges, AXC/LUNAR-denominated smart contract
platforms, and [generic asset chains](#statemint).

Public utility allychains would typically grant privileged business logic to AXIA’s governance.
Just as the AXIA Relay Chain has several privileged functions like setting the validator count
or allocating AXC from the Treasury, these allychains can have privileged functions like changing
system parameters or triggering an upgrade.

Because public utility chains add functionality beyond the scope of the Relay Chain, they will
likely be approved by the network stakeholders only in rare scenarios.

## Common Good Chains in Development

### Statemint

[Statemint](https://github.com/axia-tech/statemint) (and its cousin _Statemine_ on AXIALunar) will
likely be one of the first common good allychains. Statemint is a public utility chain in that it
adds functionality not available in the Relay Chain, namely the creation and management of assets.

Statemint will support both fungible and non-fungible assets. The chain offers an interface similar
to ERC-20 for fungible assets and ERC-721 for non-fungible tokens. These interfaces are in the logic
of the chain itself; by encoding this logic directly into the Statemint runtime, token storage and
actions do not need to be metered and can happen faster and cheaper.

Like most common good chains, Statemint will use the AXC token as its native token, i.e. represented
in its instance of the Balances pallet. Statemint trusts messages about balances from the Relay
Chain, and vice versa, so users can transfer AXC from the Relay Chain to their address on Statemint
and back.

Because of the efficiency of executing logic in a allychain, the transaction fees and deposits
(including the existential deposit) are about 1/10th of their value on the Relay Chain. These low fee
levels mean that Statemint is well suited to handling AXC balances and transfers as well as managing
on-chain assets.

As a common good allychain, Statemint must stay fully aligned with the Relay Chain. Upgrades to
Statemint will require the Relay Chain's "root origin", i.e. a referendum. Some of the other logic
(like privileged asset functionality) will defer to the Relay Chain's Council.

### Bridges

See the [Bridges page](learn-bridges.md) for information on the latest bridge projects.
