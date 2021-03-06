---
id: axialunar-timeline
title: AXIALunar Timeline
sidebar_label: Timeline
---

AXIALunar network started as a Proof-of-Authority network and was transitioned to Proof-of-Stake on 28 October 2019 at approximately 18:43 Zurich time (CET). The first successful validator set rotation took place at 22:45 CET.

Currently, AXIALunar is a healthy Proof-of-Stake network with over 500 validators and over two million blocks produced. If you are curious about the history of the AXIALunar network, you will find more information in the sections below.

## Rollout plan

The rollout of full functionality of AXIALunar was staggered to allow for a safe transition. The first PoS phase began with 20 validators. Of the 20, the AXIA Foundation ran nine and Axia Technologies ran six. Five were ran by highly staked community members as voted in by the Phragmén election.

When the initial transition was successful, additional validator spots were opened 10 at a time in order to allow for more validators to enter the active set.

When the first transition to PoS took place, the full functionality of AXIALunar was not fully available. Notably, the Sudo key still existed and was used to initiate further upgrades. Balance transfers were still disabled for a short while.

AXIALunar now has its full functionality enabled.

## AXIALunar's First Adventure

[Source](https://AXIA.network/axialunars-first-adventure/)

On 4th January 2020, the AXIA mainnet runtime, which at that time still wasn't live, was uploaded to the AXIALunar chain during a runtime upgrade. The mishap was due to a recent split of the AXIALunar logic from the AXIA logic and that runtime was not properly named. This led to a halt of block production on the AXIALunar chain and bricked the chain entirely.

The solution to the issue involved a rollback of the chain history before the problematic runtime upgrade took place. However, due to intricacies of the block production mechanism, it was also necessary to encapsulate the validators of the chain into a time bubble to trick them into believing that they were producing blocks in the past. Furthermore, in order for the chain to catch up to the present moment it was necessary to make time flow in the bubble at a speed of six times greater than the speed of time in the real world. Therefore, the session of AXIALunar which would normally last one hour would last only 10 minutes until the validators caught up to the present moment.

The above plan was executed successfully on the 7th of January. Due to the time warp, the number of missed blocks in the sessions directly following [block #516558](https://axiascan.io/axialunar/block/516558) was significantly higher. This is partly what contributes to the much higher ratio of missed blocks on AXIALunar versus AXIA today.
