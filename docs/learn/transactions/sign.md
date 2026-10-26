---
sidebar_position: 5
title: "How Bitcoin Transaction Signing Works"
description: "How Bitcoin transaction signing works: what signing means, online vs offline signing flows, and single-sig versus multisig signing."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "signing"]
tags: ["bitcoin", "transactions", "signing"]
date: "2025-05-01"
---

# Signing transactions

Signing a bitcoin transaction means using the private key for each input to produce a digital signature, which proves to every node that the holder of that key authorised this exact spend; change anything in the transaction and the signature no longer matches. Signing can happen on the same online device that builds the transaction, or on an offline device that receives the unsigned transaction as a PSBT file or QR code, which keeps the private key away from the internet entirely.

## What does a signature prove?

A signature shows that whoever made it holds the private key matching the input's public key, without revealing the key. Anyone can check it; nobody without the key can produce it. That is the whole of bitcoin's permission system: no account, password or identity, only a valid signature. Anyone who gets the private key can therefore sign, and spend.

## What is the difference between online and offline signing?

| | Online signing | Offline signing |
|---|---|---|
| Where the key is | On the internet-connected device that builds the transaction | On a separate device that never connects |
| How the transaction moves | It does not; build and sign happen in one place | As a PSBT, by USB, QR code or SD card |
| Risk | Malware on the device can reach the key | Malware on the online device cannot reach the key |
| Suits | Small spending wallets | Savings, cold storage, multisig |

In offline signing, a watch-only wallet on the online computer (which has no private keys) builds the transaction, the offline device signs it, and the signed transaction comes back for broadcast. A hardware wallet connected by USB is in between: the transaction travels over the cable, but the key never leaves the device.

## How does multisig signing differ?

A single-signature wallet needs one signature per input. A multisig wallet needs several: in a 2-of-3 wallet, two of the three keys must sign before the transaction is valid. Multisig is common in business wallets, collaborative custody and personal setups for larger amounts, and it relies on PSBTs to carry the transaction from one signer to the next.

## What is a PSBT?

A **PSBT** (partially signed bitcoin transaction, defined in BIP174) is a standard file format for a transaction that is not yet fully signed, along with the information each signer needs to check and sign it. It lets a transaction be built on one device and signed on others, one signature at a time, until it is complete. PSBTs are what make air-gapped signing and multisig work across devices from different makers.

## What does air-gapped signing look like?

1. Build the transaction on an online, watch-only wallet.
2. Export it as a PSBT.
3. Carry it to the offline device by QR code or SD card (or USB, with care).
4. Check and sign it on the offline device.
5. Carry the signed transaction back to the online device.
6. Broadcast it.

<div class="doc-diagram">

![Air-gapped signing: an online watch-only wallet builds the transaction and exports a PSBT, the file crosses the gap by USB, QR or SD card, an offline device holding the private key signs it, and the signed PSBT returns for broadcast; the key never crosses](/img/diagrams/transactions/airgap-signing.svg)

</div>

The private key stays on the offline device throughout.
