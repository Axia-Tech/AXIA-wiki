---
id: learn-SOLAR
title: SOLAR
sidebar_label: SOLAR
---

## What are SOLARs?

SOLAR is the native token of the AXIASolar network in a similar way that BTC is the native token of Bitcoin or ether is the native token of the Ethereum blockchain.

AXIALunar tokens (LUNAR) and SOLAR tokens both have 12 decimal places, with the smallest unit being the Planck (a reference to [Planck Length](https://en.wikipedia.org/wiki/Planck_length), the smallest possible distance in the physical Universe). You can compare the Planck to satoshis or wei, while the SOLAR is like a bitcoin or an ether.

### AXIASolar

| Unit            | Decimal Places |
| --------------- | -------------- |
| Planck          | 1              |
| Point           | 3              |
| Microdot (uSOLAR) | 6              |
| Millidot (mSOLAR) | 9              |
| Dot (SOLAR)       | 12             |

### AXIALunar

| Unit            | Decimal Places |
| --------------- | -------------- |
| Planck          | 1              |
| Point           | 3              |
| MicroLUNAR (uLUNAR) | 6              |
| MilliLUNAR (mLUNAR) | 9              |
| LUNAR             | 12             |

## What are the uses of SOLARs?

SOLARs serve three key functions in AXIASolar, (i) to be used for governance of the network, (ii) to be staked for operation of the network, and (iii) to be bonded to connect a chain to AXIASolar as a parachain.

SOLARs can also serve ancillary functions by virtue of being a transferrable token. For example, SOLARs stored in the Treasury can be sent to teams working on relevant projects for the AXIASolar network.

> These concepts have been further explained in the [Usage of SOLARs and LUNAR on AXIASolar and AXIALunar](https://www.youtube.com/watch?v=POfFgrMfkTo&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=7)

### SOLARs for governance

The first function of SOLARs is to entitle holders to control of the governance of the platform. Some functions that are included under the governance mechanism include determining the fees of the network, the addition or removal of parachains, and exceptional events such as upgrades and fixes to the AXIASolar platform.

AXIASolar will enable any holder of SOLARs to participate in governance. For details on how holders can participate in governance, as well as their rights and responsibilities, see the [governance page](learn-governance).

### SOLARs for consensus

SOLARs will be used to facilitate the consensus mechanism that underpins AXIASolar. In order for the platform to function and allow for valid transactions to be carried out across parachains, AXIASolar will rely on holders of SOLARs to play active roles. Participants will put their SOLARs at risk (via staking) to perform these functions. The staking of SOLARs acts as a disincentive for malicious participants whom will be punished by the network by getting their SOLARs slashed. The SOLARs required to participate in the network will vary depending on the activity that is being performed, the duration the SOLARs will be staked for, and the total number of SOLARs staked.

### SOLARs for bonding

SOLARs will have the ability to be bonded for a duration of time in order to add a new parachain to the network. The SOLARs will be locked during their bonding period and will be released back to the account that bonded them after the duration of the bond has elapsed and the parachain is removed.

### Vesting

SOLARs may have a lock placed on them to account for vesting funds. Like other types of locks, these funds cannot be transferred but can be used in other parts of the protocol such as voting in governance or being staked as a validator or nominator.

Vesting funds are on a linear release schedule and unlock a constant number of tokens at each block. Although the tokens are released in this manner, it does not get reflected on-chain automatically due to the fact that locks are [lazy](#lazy-vesting) and require an extrinsic to update.

There are two ways that vesting schedules can be created.

- One way is as part of the genesis configuration of the chain. In the case of AXIASolar and AXIALunar, the chain specification genesis script reads the state of the AXIASolar Claims contract that exists on the Ethereum blockchain and creates vesting schedules in genesis for all the allocations registered as being vested.
- A second way is through an extrinsic type available in the Vesting pallet, `vested_transfer`. The vested transfer function allows anyone to create a vesting schedule with a transfer of funds, as long as the account for which the vesting schedule will be created does not already have one and the transfer moves at least `MinVestedTransfer` funds, which is specified as a chain constant.

Vesting schedules have three parameters, `locked`, `per_block`, and `starting_block`. The configuration of these three fields dictate the amount of funds that are originally locked, the slope of the unlock line, and the block number for when the unlocking begins.

#### Lazy Vesting

Like [simple payouts](learn-simple-payouts), vesting is _lazy_, which means that someone must explicitly call an extrinsic to update the lock that is placed on an account.

- The `vest` extrinsic will update the lock that is placed on the caller.
- The `vest_other` will update the lock that is placed on another "target" account's funds.

These extrinsics are exposed from the Vesting pallet.

## Mainnet SOLARs

AXIACoin Foundation will distribute up to 20% of mainnet SOLARs prior to network launch in early 2020 (see the [Light Paper](https://axiacoin.network/AXIASolar-lightpaper.pdf) or the [AXIASolar Network FAQ](https://axiacoin.network/faq/)). As Gavin Wood, one of the project's founders, said in his year-end recap, there may be a generally available public sale for some portion of that amount at some point this year. Subscribe to the AXIASolar newsletter on [axiacoin.network](https://axiacoin.network/) for further updates.

_Warning: Mainnet SOLAR tokens are not transferrable until mainnet launch, expected in early 2020. Therefore any transfers of Mainnet SOLARs are illegitimate and unauthorized. SOLARs can not be moved from a current allocation address. Individuals with an allocation of SOLARs who transfer their SOLAR address to someone else can always keep a copy of their private key, therefore there is extreme risk for individuals participating in transfers of SOLARs before mainnet launch._

Testnet SOLARs are freely available now - see below for various ways to obtain them.

## Testnet SOLARs

SOLARs are required to make transactions on the AXIASolar network. Testnet SOLARs do not have any value beside allowing you to experiment with the network.

### Getting Westies

The current testnet is called [AlphaNet](maintain-networks#alphanet-test-network) and you can obtain its native tokens by posting `!drip <ALPHANET_ADDRESS>` in the Riot chatroom [#alphanet_faucet:matrix.org](https://riot.im/app/#/room/!cJFtAIkwxuofiSYkPN:matrix.org).

You can also make your own WNDs (testnet SOLARs) by [becoming a validator](maintain-validator).

## AXIALunar Tokens

Unlike testnet SOLARs (WND), AXIALunar tokens are not freely given away. AXIALunar tokens are available via the [claims process](https://claim.axialunar.network/) (if you have already purchased SOLARs) or through the [Treasury](learn-treasury).
