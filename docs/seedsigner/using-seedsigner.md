---
sidebar_position: 3
title: "Using SeedSigner: Seeds, SeedQR, and Signing"
description: "Generate a seed with dice on your SeedSigner, back it up as a SeedQR, and sign transactions with Sparrow over an air-gapped QR workflow."
keywords: ["seedsigner usage", "seedqr", "dice seed", "sparrow wallet", "psbt signing", "air-gapped signing"]
tags: ["seedsigner", "seedqr", "sparrow", "guide"]
date: "2026-08-21"
---

# Using SeedSigner

Using a SeedSigner comes down to four steps and an option: generate a seed from your own dice rolls, back it up as words and as a SeedQR, connect Sparrow on your computer as a watch-only wallet, and sign transactions by passing QR codes between Sparrow and the device; it can also be one key of a multisig. The device stores nothing, so every session starts by loading your seed.

:::danger The device stores nothing; you store everything
SeedSigner is stateless. Every seed you use exists only while the device is powered, which means your physical backup is the only durable copy of your keys. Treat the backup steps below as the main event, not an afterthought.
:::

## Step 1: Generate a seed with dice

From the home screen, choose **Tools → New seed → Dice rolls**, then roll a physical die 99 times (for 24 words) or 50 times (for 12), entering each roll. Two habits make this trustworthy:

1. **Use a casino-grade die or several ordinary dice mixed**, rolled with a cup. The point is entropy nobody else influenced; see [our randomness guide](/docs/learn/keys/random/) for why this matters more than any device feature after 2026.
2. **Verify the derivation.** Write down the rolls, then re-derive the seed from the same rolls on a second device or offline tool and confirm the words match. This single check proves no device in the chain invented its own "randomness". The comparison page's [entropy table](/docs/reference/hardware-wallet-comparison/#entropy-who-lets-you-verify) shows how rare that verifiability is.

Add a [passphrase](/docs/learn/keys/passphrase/) if the funds warrant it; SeedSigner supports entering one at load time, and it is never part of the stored backup.

## Step 2: Back it up as words and a SeedQR

Record the seed words on paper first, then transfer to steel for anything long-term. Then let SeedSigner render the seed as a **SeedQR**: a compact QR encoding of the seed words you can etch or punch into metal.

The payoff comes at every future session: instead of typing 24 words on a joystick, you point the camera at your SeedQR and the seed loads in seconds. The cost is that anyone who photographs that QR has your seed.

**SeedQR handling rules:**

- Scan and display it only in a private room, away from windows, webcams, and phones.
- Store it with the same physical security as the written words; it *is* the words.
- If the wallet has a passphrase, the SeedQR alone stays insufficient to spend, which is a good reason to use one.

Before depositing anything, run the [backup verification drill](/docs/wallet-setup/backup-verification/): wipe (power-cycle) the device, restore purely from your backup, and confirm the wallet derives the same addresses.

## Step 3: Connect Sparrow as a watch-only wallet

Sparrow Wallet on your desktop tracks balances and builds transactions; SeedSigner only signs. To pair them:

1. On SeedSigner: load your seed, then **Export xpub** and choose the script type (native segwit for a first wallet).
2. In Sparrow: **File → New Wallet**, keystore type **Airgapped Hardware Wallet → SeedSigner**, and scan the animated QR from the device's screen with your webcam (or import the xpub file if you prefer).
3. Sparrow now knows your [xpub](/docs/learn/keys/xpub/), so it can watch funds and generate receive addresses, but it holds no key material.

Verify a receive address on both screens before first use: display the address QR in Sparrow, scan it with SeedSigner's **Address Explorer**, and confirm the device agrees the address belongs to your seed.

## Step 4: Sign a transaction

The signing loop is the same every time:

1. **Build** the transaction in Sparrow and click through to the QR display; Sparrow shows the unsigned transaction (PSBT) as an animated QR.
2. **Scan** it with SeedSigner's camera (seed loaded).
3. **Review on the device screen**: amount, destination address, fee, and change. The device screen is the truth; if it disagrees with Sparrow, trust the device and investigate.
4. **Approve**, and SeedSigner displays the signed PSBT as an animated QR.
5. **Scan back** into Sparrow with your webcam and broadcast.

Nothing but QR codes crossed the gap in either direction. When you power off, the device forgets the seed and the whole session.

## How does SeedSigner work in a multisig?

SeedSigner shines as one key in a [multisig quorum](/docs/learn/wallets/multisig/): it contributes a key with no vendor, no supply chain, and no stored state, which is exactly the diversity multisig is for. Register the multisig descriptor on the device (SeedSigner can persist it to the microSD as a non-secret convenience, or verify it each session) so the device can confirm change addresses really belong to your quorum. The [multisig hardware setup guide](/docs/learn/wallets/multisig/hardware-setup/) walks through the full configuration.

SeedSigner also signs plain text messages (**Tools → Sign message**, via QR), useful for proving address ownership without moving funds.

