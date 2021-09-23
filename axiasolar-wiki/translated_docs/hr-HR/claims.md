---
id: claims
title: AXIASolar Claims
sidebar_label: Claims
---

If you made a SOLAR purchase in one of the pre-launch sales, then you will need to claim your SOLAR tokens. For those who made a pre-genesis claim by sending a claim transaction to the Claims Contract on Ethereum, you will still need to send a free _attest_ transaction that will agree to the terms and conditions of your allocation. If you did not make a pre-genesis claim, then you will claim and attest in a single transaction.

This guide will walk you through the steps for either making a claim or attesting to the statement.

If you are making a claim on AXIASolar for the first time, please read on below in the [making a claim](#making-a-claim) section. If you've already claimed during the pre-genesis claims period, please proceed to the [attesting to a statement](#attesting-to-a-statement) section instead.

> To learn more on How to claim your SOLAR post genesis, check out our walkthrough [video](https://www.youtube.com/watch?v=rjhWfKXJTCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22) and our video on [Claiming SOLAR with an Ethereum address generated using an old mnemonic phrase](https://www.youtube.com/watch?v=AlwrM27x3As&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=16)

## Making a Claim

If you did not make a claim in the pre-genesis claims period, then you are able to claim your SOLAR tokens after genesis. There is no time limit for making your claim so feel free to do this whenever you are most comfortable.

> Note: When you make a claim, you will also attest to the agreement that corresponds to your SOLAR allocation. The two actions "claim" and "attest" are done in a single transaction, but for the most part this is simplified from the perspective of the user.

### What You Will Need

- The Ethereum account that holds the SOLAR indicator tokens
- The MyCrypto wallet
- A AXIASolar account

You should already have your Ethereum account that holds the SOLAR indicator tokens from AXIASolar's prior sales. You will need to have access to this account in order to make a signature.

[MyCrypto][] is a versatile wallet that supports a variety of storage methods for your Ethereum account. Go to their downloads page and ensure that you download the latest version for your operating system. This is important because the latest version will always have the latest security patches.

> **NOTICE**: It is much more secure to download and use the MyCrypto app locally. You can always find the most up-to-date releases of the desktop app on their [releases page][mycrypto].

You will need a AXIASolar account to claim your SOLAR. Please follow the instructions on the \[account generation\]\[\] page for generating a new AXIASolar account.

#### Claiming your SOLAR with MyCrypto

The AXIASolar-JS [Claims app][] helps you sign a message from MyCrypto. MyCrypto is a good choice in case you have stored the key to the Ethereum account holding your SOLAR indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics, and Parity signer.

Once you've downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for maximum security), you can start by navigating to the Claims app on AXIASolar-JS Apps. Select the account you would like to claim the SOLAR into and click the blue "Continue" button to proceed. Your screen should look something like this:

![claim-1](assets/new-claims/claim-1.jpg)

Now you will need to provide the Ethereum address that is associated with the SOLAR indicator tokens that you will claim. Enter the Ethereum address into the box and click "Continue".

![claim-2](assets/new-claims/claim-2.jpg)

Next your screen should look the image below.

![claim-2-1](assets/new-claims/claim-2-1.jpg)

The hex-encoded string that follows the sentence: "Pay SOLAR to the AXIASolar account:" is the hex-encoded public key of your AXIASolar account, minus the `0x` prefix.

The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab.

![claim-3](assets/new-claims/claim-3.png)

This will prompt you to select a method for unlocking your wallet.

![claim-4](assets/new-claims/claim-4.png)

After unlocking your wallet, paste the message from AXIASolar-JS into the "Message" box.

![claim-5](assets/new-claims/claim-5.png)

When you click "Sign Message" you will get a JSON output like the one below:

![claim-6](assets/new-claims/claim-6.png)

Copy and paste the JSON output of the signed message from MyCrypto into the input box on the AXIASolar-JS UI and click "Confirm Claim."

![claim-7](assets/new-claims/claim-7.jpg) ![claim-8](assets/new-claims/claim-8.jpg)

A green box will appear telling you the amount to claim with a "Claim" button to make the claim. Click on the "Claim" button and click "Submit (no signature)" to complete the claim.

![claim-9](assets/new-claims/claim-9.jpg)

If this claim succeeded, then you will see a success message and your SOLAR will be in the account that you claimed to.

#### Verifying your Claim

After you make an on-chain claim for SOLAR, your balance should be updated on the AXIASolar UI immediately.

Having trouble? Get support in the SOLAR [Claims Support]() channel.

![claim-10](assets/new-claims/claim-10.jpg)

Congratulations, you have now completed the process for claiming and signing for your SOLAR.

### Third Party Claims Processes

**We do not recommend using third-party apps or processes to perform your claim or acquire SOLAR.**

Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot recommend using any third party apps to do so. Manually specifying your transaction data, as specified in our claims process, is the only way to be certain you will receive your allocation.

## Attesting to a Statement

If you've already made a pre-genesis claim, you still have to agree to a statement using your AXIASolar account.

## Using AXIASolar-JS Apps

### What you will need

- Your AXIASolar account unlocked on AXIASolar-JS Apps UI.

You will be sending a free transaction from your AXIASolar account on the AXIASolar-JS Apps UI. Once you make this transaction you will have the tokens available in your account.

### Go to AXIASolar-JS Apps

Proceed to [axiasolar-js Apps][claims app]. You will need to grant Apps access to your account in some way. One way would be to go to the Accounts page and "create" a new account, replacing the generated seed or mnemonic with the one belonging to your account. The other way is by using the AXIASolar-JS extension and entering your seed or mnemonic there, which is generally safer than entering it directly to the Apps page.

### Make the Attestation

After entering your account, you should see a red counter appear on the "Claim Tokens" tab on the left navigation drawer.

![claim-attest-1](assets/new-claims/new-attest-1.jpg)

Click on the "Claim Tokens" tab and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

![claim-attest-2](assets/new-claims/new-attest-2.png)

The notification will display one or more AXIASolar addresses that you have loaded in AXIASolar-JS that you need to sign. Select a AXIASolar account with a claim using the drop down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIASolar-JS and that it has already claimed during the preclaim period. As always, feel free to reach out for help in the [Claims Support]() channel.

Click "Continue" and you will see a green box appear on the right.

![claim-attest-3](assets/new-claims/new-attest-3.jpg)

![claim-attest-4](assets/new-claims/new-attest-4.jpg)

Click on "I Agree" and then "Sign and Submit" to make your free attest transaction. When the transaction is included in the block, you will see a green success box appear in the upper right corner and the SOLAR will be in your account.

![claim-attest-5](assets/new-claims/new-attest-5.jpg)

## Using Parity Signer

### What you will need

- Parity Signer
- Your AXIASolar account linked to AXIASolar-JS Apps UI

Before claiming, you should import your AXIASolar address on Parity Signer to the AXIASolar-JS Apps. All operations will use Parity Signer to sign the transaction, but will broadcast it via the AXIASolar-JS Apps remote node. If you do not have a AXIASolar address, please follow the instructions on the Parity Signer section in the [account generation][] page for generating a new AXIASolar account.

### Go to AXIASolar-JS Apps

Proceed to [AXIASolar-JS Apps][claims app]. You will need to import your address on Parity Signer to the Accounts page first.

### Make the Attestation

![ps-claim-1](assets/new-claims/ps-claim-1.jpg)

Click "Add via Qr" on the right side.

![ps-claim-2](assets/new-claims/ps-claim-2.png)

Open Parity Signer and choose "AXIASolar" network.

![ps-1](assets/new-claims/ps-01.jpg)

Select the address that you have claimed SOLAR to during pre-genesis.

![ps-2](assets/new-claims/ps-02.jpg)

![ps-3](assets/new-claims/ps-03.jpg)

Your address will be displayed in QR code format. You can move the QR code to the camera so that the AXIASolar-JS Apps can decode it.

![ps-claim-3](assets/new-claims/ps-claim-3.png)

Once decoded successfully, input the name for your address and click "Create".

You will notice that the digit beside the "Claim Tokens" menu increased by 1. It means the number of addresses on the Accounts page that need to do attestations.

Go to the [Claim Tokens](https://axiasolar.js.org/apps/#/claims) page and and you will see a large notification at the top of the page that tells you that you need to sign an attestation.

Select the AXIASolar account that you just have imported with a claim using the drop-down selection. If you don't see a notification or don't see the selector, please double check that the account has been loaded into AXIASolar-JS and that it has already claimed during the pre-genesis period. As always, feel free to reach out for help in the [Claims Support]() channel.

![ps-claim-5](assets/new-claims/ps-claim-5.png)

Then click "Continue" and you will see a green box appear on the right.

![ps-claim-6](assets/new-claims/ps-claim-6.png)

Click on "I Agree" and then "Sign via Qr".

![ps-claim-7](assets/new-claims/ps-claim-7.png)

Now you need to sign the transaction using the Parity Signer with your AXIASolar address.

![ps-claim-8](assets/new-claims/ps-claim-8.png)

First, you need to press the "QR Scanner" on the Parity Signer to scan the QR code that's shown on the authorize transaction window to generate the raw transaction. Next, you may be required to input the PIN on the Parity Signer to generate the signed transaction as a QR code. Then move the QR code to the camera on the AXIASolar-JS Apps to continue.

![ps-3r](assets/new-claims/ps-3r.jpg)

When the transaction is included in the block, you will see a green success box appear in the upper right corner and the SOLAR will be in your account.
https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:axiacoin.org?via=axiacoin.org&via=matrix.org&via=matrix.parity.io

[mycrypto]: https://download.mycrypto.com/
[mycrypto]: https://download.mycrypto.com/
[account generation]: learn-account-generation
[claims app]: https://axiasolar.js.org/apps/#/claims
[claims app]: https://axiasolar.js.org/apps/#/claims
[claims app]: https://axiasolar.js.org/apps/#/claims
