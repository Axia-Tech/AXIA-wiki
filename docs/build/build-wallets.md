---
id: build-wallets
title: AXIACoin Wallets
sidebar_label: AXIACoin Wallets
slug: ../build-wallets
---

## AXIACoin Wallets

The integration of a [wallet](../general/glossary.md#wallet) with AXIACoin allows for simple and easy access to
private keys and signing transactions. Below are some wallets that support AXIACoin along with their
development statuses.

### Supported Wallets

| Wallet Name                                                         | Development State | Team Name | Description       | Custody       | Supports |
| ------------------------------------------------------------------- | ----------------- | --------- | ----------------- | ------------- | -------- |
| [AXIA Signer](https://www.axia.io/signer/) (see warning below)  | Live              | AXIA    | iOS and Android   | Non-custodial | Staking  |
| [AXIACoin-js Desktop](https://github.com/axiasolar-js/apps/releases) | Live              | AXIA    | Win, Mac, Linux   | Non-custodial | Staking  |
| [AXIACoin-js extension](https://github.com/axiasolar-js/extension)   | Live              | AXIA    | Browser extension | Non-custodial | Staking  |
| [AXIACoin-js apps](https://axiasolar.js.org/apps/#/accounts)         | Live              | AXIA    | Browser           | Non-Custodial | Staking  |

[AXIACoin support](https://support.axiacoin.network/) can provide assistance with issues related to
AXIACoin-JS, the AXIACoin{.js} extension, or AXIA Signer. For other wallet software, you should
contact the developers of that wallet.

> Warning: AXIA Signer currently does not allow you to see the transaction you are signing. This
> means that you are at risk if connected to a compromised version of AXIACoin-JS. A fix is being
> worked on; please see [this GitHub issue](https://github.com/axia-tech/axia-signer/issues/724)
> for more details.

### Treasury Funded Wallets

These are wallets which have been supported by either the AXIACoin or AXIALunar Treasury via Treasury Proposal. Links in the Proposals section go to the AXIAssembly post where the Treasury Proposal was discussed.

| Wallet Name                                   | Proposals                                                                                                                                                                                           | Development State | Team Name      | Description  | Custody       | Supports |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------- | ------------ | ------------- | -------- |
| [Fearless Wallet](https://fearlesswallet.io/) | [1](https://axialunar.axiassembly.io/treasury/23), [2](https://axialunar.axiassembly.io/treasury/34), [3](https://axialunar.axiassembly.io/treasury/74), [4](https://axialunar.axiassembly.io/treasury/102) | Live              | SORAMITSU      | iOS, Android | Non-custodial | Staking  |
| [Klever](https://klever.io/)                  | [1](https://axialunar.axiassembly.io/treasury/91)                                                                                                                                                     | Live              | Klever         | iOS, Android | Non-custodial | Staking  |
| [AXIAwallet](https://axiawallet.io/)        | [1](https://axialunar.axiassembly.io/treasury/32), [2](https://axialunar.axiassembly.io/treasury/41)                                                                                                    | Live              | AXIAwallet    | iOS, Android | Non-custodial | Staking  |
| [Stylo](https://stylo-app.com/)               | [1](https://axiasolar.axiassembly.io/treasury/39)                                                                                                                                                   | Live              | Thibaut Sardan | Android      | Non-custodial | Staking  |

> NOTE: these third-party wallets have been funded by the community through either the AXIACoin or AXIALunar [Treasury](learn-treasury). **Web 3.0 Technologies Foundation does not endorse these wallets, and you should use your own due diligence in researching them.** The official AXIACoin Support cannot provide support for issues with these wallets or other non-AXIA developed wallets.

## Encryption Enhancement

Some newly generated `JSON` account files cannot be imported (restored) into older wallet software.
This is due to an enhanced encryption method, which is also noticeable in a slight delay when
encrypting/decrypting your wallet. If you are unable to load a `JSON` file, please ensure that you
are using the latest version of the wallet software. If you are still unable to load it, ensure that
the wallet software is using the latest version of the [AXIACoin API](https://axiasolar.js.org/api/).
