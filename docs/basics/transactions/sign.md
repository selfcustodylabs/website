---
sidebar_position: 5
title: "Signing"
description: "Practical guide: Signing. Covers What Is Signing?, Online vs. Offline Signing, Single-Sig vs. Multisig Signing."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "signing"]
tags: ["bitcoin", "transactions", "signing"]
---
# Signing Transactions

Before a Bitcoin transaction can be broadcast to the network, it must first be signed using a private key. This signature acts as proof that you control the coins you’re trying to spend.


## What Is Signing?

Think of signing as placing a digital signature on your transaction. It tells the Bitcoin network, “Yes, I’m authorized to move these funds.” To do this, you need your **private key**, a secret piece of data that should never be shared. If anyone else gets access to your private key, they can steal your Bitcoin.


## Online vs. Offline Signing

In **online signing**, the wallet that builds and signs the transaction is connected to the internet. This method is convenient and fast but carries more risk, if your device is compromised, your private key could be exposed.

**Offline signing**, often referred to as air-gapped signing, offers stronger security. The transaction is first built on a watch-only wallet connected to the internet (which has no access to your private keys). It’s then transferred to a completely offline device for signing. This air-gapped computer holds your private key and never touches the internet, making it highly resistant to remote attacks. Once the transaction is signed, it’s transferred back online to be broadcast.

This approach is popular in cold storage and high-security setups.


## Single-Sig vs. Multisig Signing

With **single-signature** (single-sig) wallets, only one private key is required to sign a transaction. This setup is common for personal use and simpler wallets.

In contrast, **multi-signature** (multisig) wallets require multiple keys to sign. For example, a “2-of-3” configuration means two out of three keys must sign the transaction before it’s valid. This method is often used in business wallets, collaborative custody, or more secure personal setups.

Multisig is frequently combined with **PSBTs** and air-gapped workflows for added flexibility and safety.


## What Is PSBT? (Partially Signed Bitcoin Transaction)

A Partially Signed Bitcoin Transaction (PSBT) is a special file format designed to safely move transactions between devices that sign in stages.

It’s particularly useful when:

- You want to build a transaction on an online device.
- Then sign it gradually using one or more offline devices.
- Each signer adds their signature until the transaction is complete.

PSBTs are a key tool for multisig arrangements and air-gapped environments, where no single device handles every step of the process.


## Air-Gapped Signing Workflow (Example)

Here’s how a typical air-gapped signing setup works:

1. Build the transaction on an online, watch-only wallet.
2. Export it as a PSBT file.
3. Transfer the file to an offline (air-gapped) computer using USB, QR code, or SD card.
4. Sign the transaction with the private key on the offline device.
5. Move the signed transaction back to the online device.
6. Broadcast it to the Bitcoin network.

This layered approach keeps your private key isolated from internet exposure while allowing secure transaction signing.