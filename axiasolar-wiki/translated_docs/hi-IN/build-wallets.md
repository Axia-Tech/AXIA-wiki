---
id: build-wallets
title: AXIASolar Wallets
sidebar_label: AXIASolar Wallets
---

## AXIASolar Wallets

The integration of a [wallet](https://wiki.axiasolar.network/docs/en/glossary#wallet) with AXIASolar allows for simple and easy access to private keys and signing transactions. Below are some wallets that support AXIASolar along with their development statuses.

Note that inclusion does not necessarily imply endorsement of that wallet. AXIASolar support can provide assistance with issues related to AXIASolar-JS, the AXIASolar{.js} extension, or Parity Signer. For other wallet software, you should contact the developers of that wallet.

## Encryption Enhancement

Some recently generated `JSON` account files cannot be imported (restored) into older wallet software. This is due to an enhanced encryption method, which is also noticeable in a slight delay when encrypting/decrypting your wallet. If you are unable to load a `JSON` file, please ensure that you are using the latest version of the wallet software. If you are still unable to load it, ensure that the wallet software is using the latest version of the [AXIASolar API](https://axiasolar.js.org/api/).

### Supported Wallets

| Wallet Name                                                         | Development State | Team Name | Description       | Custody       | Supports |
| ------------------------------------------------------------------- | ----------------- | --------- | ----------------- | ------------- | -------- |
| [Parity Signer](https://www.parity.io/signer/) (see warning below)  | Live              | Parity    | iOS and Android   | Non-custodial | Staking  |
| [AXIASolar-js Desktop](https://github.com/axiasolar-js/apps/releases) | Live              | Parity    | Win, Mac, Linux   | Non-custodial | Staking  |
| [AXIASolar-js extension](https://github.com/axiasolar-js/extension)   | Live              | Parity    | Browser extension | Non-custodial | Staking  |
| [AXIASolar-js apps](https://axiasolar.js.org/apps/#/accounts)         | Live              | Parity    | Browser           | Non-Custodial | Staking  |

> Warning: Parity Signer currently does not allow you to see the transaction you are signing. This means that you are at risk if connected to a compromised version of AXIASolar-JS. A fix is being worked on; please see [this GitHub issue](https://github.com/paritytech/parity-signer/issues/724) for more details.

> Note: the wallets page is currently being reviewed. Currently only Parity-developed wallets are listed.
