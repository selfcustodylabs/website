---
sidebar_position: 2
title: "Multisig Hardware Setup"
description: "Prepare your hardware wallets for multisig. Learn how to initialize signing devices from different manufacturers for maximum security."
keywords: ["bitcoin", "multisig", "hardware wallet", "trezor", "jade", "keystone", "setup"]
tags: ["multisig", "hardware wallet", "security", "bitcoin"]
slug: /learn/wallets/multisig/hardware-setup
date: "2026-01-13"
---

# Hardware setup for multisig

Before building a multisig wallet, each of its hardware wallets is set up on its own, as if it were a single-signature wallet: three devices, ideally from three manufacturers, each with current firmware, its own PIN and its own seed made with dice. For each one you record the master fingerprint, back the seed up on metal, store that backup somewhere different from the other two, and test it. Only then do the devices go into [the Sparrow setup](/docs/learn/wallets/multisig/sparrow-setup/).

## Step 1: Choose three devices from different makers

Step 1 picks the devices. Mixing manufacturers means one vendor's firmware flaw, like the [2026 Coldcard entropy bug](/docs/learn/wallets/coldcard-entropy-incident/), reaches only one key, which a 2-of-3 wallet survives.

| Combination | Key 1 | Key 2 | Key 3 |
|---|---|---|---|
| Most isolated | Jade Plus (QR) | Keystone 3 Pro (QR) | Trezor Safe 5 or 7 (USB) |
| Easiest to use | Trezor Safe 5 (USB) | BitBox02 Nova (USB) | Blockstream Jade (USB or QR) |
| Lowest cost | Blockstream Jade (USB or QR) | Trezor Safe 3 (USB) | [SeedSigner](/docs/seedsigner/), built yourself (QR) |

As of October 2026 three devices cost about $200 to $750 depending on the combination; the [comparison](/docs/reference/hardware-wallet-comparison/) has current prices. A Coldcard you already own can still serve as one key, after you [check whether its seed needs replacing](/docs/learn/wallets/coldcard-entropy-incident/#am-i-affected) and make a new one with dice on fixed firmware; we just do not recommend buying one new.

## Step 2: Check each device and update its firmware

Step 2 makes sure each device is genuine and current before any seed exists on it. Buy from the manufacturer or a reseller it lists, check the packaging for tampering, run the maker's authenticity check, update to the latest firmware, and read the vendor's security advisories. A seed generated on flawed firmware stays weak after the firmware is updated, so update first.

## Step 3: Create a separate seed on each device, with dice

Step 3 gives every device its own key. Each device gets a fresh seed that has never existed anywhere else: never reuse a seed from another wallet, never put the same seed on two devices. Use each device's dice-roll option (99 rolls for 24 words), or import a seed you [made yourself with dice](/docs/learn/keys/random/). Independent entropy for each key is what keeps one vendor's silent failure from mattering. Choose 24 words, and give each device its own PIN of at least 6 to 8 digits, with no obvious patterns and none reused between devices.

## Step 4: Record each device

Step 4 writes down what you will need to identify each key later. For every device, record:

| Field | Example |
|---|---|
| Label | Device 1 |
| Make and model | Jade Plus |
| Master fingerprint (8 characters) | `7c8a9b2d` |
| Firmware version | As shown on the device |
| Seed length | 24 words |
| Where the device is kept | Home safe |
| Where its seed backup is kept | Bank safe deposit box |

The master fingerprint identifies the key without revealing it; Sparrow shows it when the device connects, and it appears in the wallet descriptor. Store these records separately from the seed phrases, and label each device (1, 2, 3).

## Step 5: Back up each seed on metal, in separate places

Step 5 makes each seed survive fire, water and time. Paper burns, gets wet, fades and gets thrown away by mistake, so stamp or engrave each seed onto a metal backup (Blockplate, Cryptosteel, Seedplate and Billfodl are common makes), read it back against the paper, and destroy the paper.

Then spread the backups out so that no single place holds two keys, and no seed is stored with its own device:

| | Device | Seed backup |
|---|---|---|
| Key 1 | Home safe | Bank safe deposit box |
| Key 2 | Home, somewhere separate from key 1 | A trusted family member's home |
| Key 3 | A different city: a second property, an office or a trusted person | A third location, such as a second deposit box |

With this layout a burglary at home reaches devices but no seed; a lost deposit box costs one seed, and the other two keys still spend.

## Step 6: Test each seed backup

Step 6 proves each backup restores its device before the multisig depends on it. For each device in turn: reset it, restore it from its metal backup, and check the master fingerprint matches your record. The [backup verification guide](/docs/wallet-setup/backup-verification/) covers the method.

Before going on to [Sparrow](/docs/learn/wallets/multisig/sparrow-setup/), check that all three devices have unique seeds backed up on metal in different places, recorded fingerprints, unique PINs, current firmware and labels.

## How do you set up each device?

The menus differ by maker. These notes cover what matters for multisig; follow the maker's own guide for the rest.

### Trezor

Connect by USB and create the wallet in Trezor Suite or Sparrow, choosing 24 words and the dice option where offered. Trezor PINs can be up to 50 digits. For multisig, Sparrow reads the key directly from the device over USB; no export file is needed.

### BitBox02

Connect by USB and create the wallet in the BitBoxApp, then set the device password. For multisig, Sparrow reads the key directly over USB and shows the fingerprint.

### Jade and Jade Plus

Create the wallet on the device, using its dice option, and choose QR mode for air-gapped use. For multisig, export the key to Sparrow by scanning the QR code the Jade displays.

### Keystone

Create the wallet on the device with a password and 24 words. For multisig, export the extended public key from the device's multisig menu as a QR code or to a microSD card.

### Coldcard (existing owners)

Update first (Mk4 and Mk5 to 5.6.0 or later, Q to 1.5.0Q or later). Power the device from a battery pack or USB power adapter rather than a computer, set the prefix and main PIN, and create new seed words with the dice option (99 rolls), 24 words. For multisig, insert a microSD card and export the key from `Advanced/Tools`, `Export Wallet`, `Generic JSON`.
