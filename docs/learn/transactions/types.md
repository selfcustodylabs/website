---
sidebar_position: 8
title: "Bitcoin Transaction Types Explained"
description: "Practical guide: Types. Covers Pre-Signed, Fully Signed, Partially Signed PSBT."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "types"]
tags: ["bitcoin", "transactions"]
---
# Transaction Types

There are three main stages of a Bitcoin transaction:

## Pre-Signed

This is the first step, where a transaction is created but not yet signed. It’s typically made on an internet-connected computer using a watch-only wallet, ideally connected to your own Bitcoin node. Since this wallet doesn’t have access to your private keys, it can safely build the transaction without risking your Bitcoin.

Once the unsigned transaction is ready, you transfer it to an offline (air-gapped) computer for signing. This offline computer securely holds your private keys and is never connected to the internet, keeping them safe from hackers.

You can learn more in the Air-Gapped Computer [section](/docs/advanced/air-gapped-computer).


## Fully Signed

Once your offline (air-gapped) computer signs the transaction using your private keys, it becomes a fully signed transaction.

You then transfer it back to your online computer and load it into your wallet to broadcast it to the Bitcoin network.

Since the air-gapped machine is offline, it can’t broadcast the transaction itself, it just signs it securely.

You can also create and save fully signed transactions ahead of time, so they’re ready to be broadcast later when you're online.


## Partially Signed (PSBT)

Partially Signed Bitcoin Transactions (PSBTs) are mostly used in multi-signature wallets, where more than one signature is required to approve a transaction.

Here’s how it works:

- You first create the transaction on your online watch-only wallet, just like with a regular unsigned transaction
- Then, you transfer it to the first offline (air-gapped) device, which adds the first signature ,  this makes it a PSBT.
- After that, you pass the PSBT to the next offline device, and so on, until the required number of signatures has been added. Once all the necessary signatures are included, the PSBT becomes a fully signed transaction.
- Finally, you move it back to your online computer and broadcast it to the Bitcoin network.

---

## You've Completed the Transactions Section

You now understand how Bitcoin moves: from UTXOs to transaction creation, signing, broadcasting, fees, and different transaction types. Next, explore why privacy matters on a transparent blockchain.

<NextSteps 
  title="What's Next?"
  items={[
    { 
      label: "Continue", 
      title: "Why Privacy Matters", 
      href: "/docs/learn/privacy/why-privacy-matters/", 
      description: "Understand what's exposed on Bitcoin's public blockchain" 
    },
    { 
      label: "Practical", 
      title: "UTXO Management Guide", 
      href: "/docs/privacy/utxo-management/", 
      description: "Learn to manage your coins for privacy and lower fees" 
    },
    { 
      label: "Advanced", 
      title: "Multisig Setup", 
      href: "/docs/advanced/multisig/", 
      description: "PSBTs are essential for multisig—ready to set one up?" 
    }
  ]}
/>