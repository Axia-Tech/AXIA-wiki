---
id: build-wallets
title: AXIASolar Wallets
sidebar_label: AXIASolar Wallets
slug: ../build-wallets
---

## AXIASolar Wallets

The integration of a [wallet](../general/glossary.md#wallet) with AXIASolar allows for simple and easy access to
private keys and signing transactions. Below are some wallets that support AXIASolar along with their
development statuses.

### Supported Wallets

| Wallet Name                                                         | Development State | Team Name | Description       | Custody       | Supports |
| ------------------------------------------------------------------- | ----------------- | --------- | ----------------- | ------------- | -------- |
| [Parity Signer](https://www.parity.io/signer/) (see warning below)  | Live              | Parity    | iOS and Android   | Non-custodial | Staking  |
| [AXIASolar-js Desktop](https://github.com/axiasolar-js/apps/releases) | Live              | Parity    | Win, Mac, Linux   | Non-custodial | Staking  |
| [AXIASolar-js extension](https://github.com/axiasolar-js/extension)   | Live              | Parity    | Browser extension | Non-custodial | Staking  |
| [AXIASolar-js apps](https://axiasolar.js.org/apps/#/accounts)         | Live              | Parity    | Browser           | Non-Custodial | Staking  |

[AXIASolar support](https://support.axiacoin.network/) can provide assistance with issues related to
AXIASolar-JS, the AXIASolar{.js} extension, or Parity Signer. For other wallet software, you should
contact the developers of that wallet.

> Warning: Parity Signer currently does not allow you to see the transaction you are signing. This
> means that you are at risk if connected to a compromised version of AXIASolar-JS. A fix is being
> worked on; please see [this GitHub issue](https://github.com/axia-tech/parity-signer/issues/724)
> for more details.

### Treasury Funded Wallets

These are wallets which have been supported by either the AXIASolar or AXIALunar Treasury via Treasury Proposal. Links in the Proposals section go to the Polkassembly post where the Treasury Proposal was discussed.

| Wallet Name                                   | Proposals                                                                                                                                                                                           | Development State | Team Name      | Description  | Custody       | Supports |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------- | ------------ | ------------- | -------- |
| [Fearless Wallet](https://fearlesswallet.io/) | [1](https://axialunar.polkassembly.io/treasury/23), [2](https://axialunar.polkassembly.io/treasury/34), [3](https://axialunar.polkassembly.io/treasury/74), [4](https://axialunar.polkassembly.io/treasury/102) | Live              | SORAMITSU      | iOS, Android | Non-custodial | Staking  |
| [Klever](https://klever.io/)                  | [1](https://axialunar.polkassembly.io/treasury/91)                                                                                                                                                     | Live              | Klever         | iOS, Android | Non-custodial | Staking  |
| [Polkawallet](https://polkawallet.io/)        | [1](https://axialunar.polkassembly.io/treasury/32), [2](https://axialunar.polkassembly.io/treasury/41)                                                                                                    | Live              | Polkawallet    | iOS, Android | Non-custodial | Staking  |
| [Stylo](https://stylo-app.com/)               | [1](https://axiasolar.polkassembly.io/treasury/39)                                                                                                                                                   | Live              | Thibaut Sardan | Android      | Non-custodial | Staking  |

> NOTE: these third-party wallets have been funded by the community through either the AXIASolar or AXIALunar [Treasury](learn-treasury). **Web 3.0 Technologies Foundation does not endorse these wallets, and you should use your own due diligence in researching them.** The official AXIASolar Support cannot provide support for issues with these wallets or other non-Parity developed wallets.

## Encryption Enhancement

Some newly generated `JSON` account files cannot be imported (restored) into older wallet software.
This is due to an enhanced encryption method, which is also noticeable in a slight delay when
encrypting/decrypting your wallet. If you are unable to load a `JSON` file, please ensure that you
are using the latest version of the wallet software. If you are still unable to load it, ensure that
the wallet software is using the latest version of the [AXIASolar API](https://axiasolar.js.org/api/).
