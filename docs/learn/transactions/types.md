---
sidebar_position: 8
title: "Bitcoin Transaction Types Explained"
description: "Bitcoin transaction types explained: pre-signed, fully signed, and partially signed (PSBT). When each type is used and how they differ."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "types"]
tags: ["bitcoin", "transactions"]
---

# Transaction types

A bitcoin transaction goes through up to three states: unsigned (built, but not yet authorised), partially signed (some but not all of the needed signatures added, as in multisig), and fully signed (ready to broadcast). The standard file format for the first two is the PSBT. A pre-signed transaction is a fully signed one kept to broadcast later, for example as part of an inheritance plan.

## What is an unsigned transaction?

An unsigned transaction is one that has been built (inputs, outputs and fee chosen) but not signed. It is usually made on an internet-connected computer by a watch-only wallet, ideally connected to your own node; since that wallet has no private keys, building the transaction there puts nothing at risk. The unsigned transaction, in PSBT format, is then carried to the device that holds the keys, such as an [air-gapped computer](/docs/learn/wallets/air-gapped-wallets/) or a hardware wallet.

## What is a partially signed transaction?

A partially signed transaction has some of its required signatures but not all, the normal state of a [multisig](/docs/learn/wallets/multisig/) spend in progress:

1. A watch-only wallet builds the transaction and exports it as a PSBT.
2. The first signing device adds its signature.
3. The PSBT goes to the next device, which adds another, until the required number is reached.
4. The complete transaction returns to the online computer for broadcast.

The PSBT format (BIP174) carries the transaction and everything each signer needs through all of these steps; a PSBT with no signatures yet is still a PSBT.

## What is a fully signed transaction?

A fully signed transaction has every signature it needs and is valid to broadcast. After an offline device signs, the transaction comes back to the online computer, which broadcasts it; the offline device has no connection to do so itself.

## What is a pre-signed transaction?

A pre-signed transaction is a fully signed transaction saved to broadcast later, without needing the keys again. It stays valid until any of its inputs is spent by another transaction. Pre-signed transactions combined with a timelock, which makes a transaction invalid before a set date or block height, are one way to build inheritance and recovery plans; [inheritance planning](/docs/advanced/inheritance-planning/) covers the options.
