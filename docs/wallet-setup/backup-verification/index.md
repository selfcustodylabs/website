---
sidebar_position: 3
title: "How to Test Your Bitcoin Seed Backup (Before You Need It)"
description: "Learn how to properly verify your Bitcoin seed backup works before trusting it with significant funds. Step-by-step guide to testing your recovery process."
keywords: ["bitcoin", "seed backup", "verification", "recovery test", "self custody", "hardware wallet"]
tags: ["backup", "verification", "seed", "security", "self custody", "wallet setup"]
slug: /wallet-setup/backup-verification
guide:
  time: "30-60 minutes"
  level: "Beginner"
  cost: "Free"
  needs: "A seed phrase backup to test"
---

# Backup verification guide

To know your seed phrase backup works, restore a wallet from it and check that it produces the same addresses as your real wallet. Write down the wallet's first receive address, enter the seed phrase (and passphrase, if you use one) from your written backup into a wiped or second device, and compare the first addresses character by character. If they match, the backup restores your wallet; if not, find the error while the original device still works. Do it before you deposit anything significant, again after making a metal copy, and every year or so after that.

<GuideFacts />

## Why isn't the device's word check enough?

Most hardware wallets quiz you on a few words at the end of setup, and that is where most people stop. The quiz catches a missing word. It does not catch a misspelled word it never asked about, handwriting you will misread in five years, words in the wrong order, a passphrase you have forgotten, or a metal plate stamped from a copy with a mistake in it. Each of these surfaces only when the device has failed and the backup is all that is left, which is too late to fix.

## Which test should you use?

| Test | When it suits | What it proves |
|---|---|---|
| Wipe and restore the same device | The wallet is new and empty | The backup restores the wallet on this device |
| Restore on a second device | The wallet already holds funds, or you want independent confirmation | The backup restores the wallet on different hardware or software |
| The device's own backup check (for example Trezor's Check backup) | Any time, without wiping anything | The words match the seed stored on the device |
| An offline BIP39 tool on an air-gapped computer | You are technical and want to see the derivation yourself | The words derive the addresses you expect |

The first two are the full test, because they recover the wallet from the backup alone. The device's own check is a good periodic test: it compares what you type with the seed it holds, without wiping anything.

## Step 1: Record what the wallet should look like

Step 1 notes the values the restored wallet must reproduce. In your wallet software (Sparrow, for example), write down the wallet's first receive address and, ideally, its account xpub, the [extended public key](/docs/learn/keys/xpub/) that covers every address in the account. Note also the derivation path and script type the wallet uses, usually `m/84'/0'/0'` and native segwit (addresses starting `bc1q`), and whether you use a passphrase.

## Step 2: Restore the wallet from the backup

Step 2 rebuilds the wallet using only what is written on the backup.

If the wallet is new and empty, wipe the device using its factory reset (Trezor Suite calls it Wipe device; check your device's manual for the exact menu), then choose to recover a wallet and enter the words from the backup.

If the wallet holds funds, do not wipe it. Restore on a second device instead: a second hardware wallet, of the same or another brand, or a wallet app on an air-gapped computer used for this test only. Never type the seed phrase into a computer or phone that is or has been online.

In both cases, enter the words exactly as they are written on the backup, not as you remember them, and add the passphrase if you use one.

## Step 3: Compare the addresses

Step 3 is the actual test. Connect the restored wallet to wallet software set to the same derivation path and script type, and compare its first receive address with the one you recorded in step 1, character by character; if you recorded the xpub, compare that too, which covers every address at once.

<div class="doc-diagram">

![Backup verification: restore the written seed on a second device and compare first addresses; identical addresses prove the paper backup restores the wallet, any difference means stop and find the error before funding](/img/diagrams/wallet-setup/backup-check.svg)

</div>

If they match, the backup restores your wallet. If they do not, stop and work through [what to do if verification fails](#what-if-verification-fails) before putting any more money in.

## Step 4: Check the passphrase wallet separately

Step 4 matters only if you use a passphrase. A passphrase turns the same seed phrase into a completely different wallet, so it has to be tested as part of the backup:

1. Restore with the seed phrase only, with no passphrase, and note the first address. This is the wallet the words alone open.
2. Add your passphrase and note the first address again. This should be your real wallet.
3. Check the second address matches your real wallet.

<div class="doc-diagram">

![A passphrase splits one seed into two wallets: the 24 words alone derive the decoy wallet at one address, and the words plus your passphrase derive your real wallet at a different address; the passphrase is part of the backup](/img/diagrams/wallet-setup/passphrase-wallets.svg)

</div>

The usual passphrase mistakes are capital letters (`Bitcoin` is not `bitcoin`), a stray space at the end, look-alike characters such as zero and the letter O, and forgetting that you set one at all. The [passphrase guide](/docs/learn/keys/passphrase/#what-exactly-counts-as-a-different-passphrase) lists what counts as a different passphrase.

## Step 5: Clean up the test

Step 5 removes the extra copy of your keys. If you restored on a second device, wipe it with its factory reset, or delete the test wallet and its files from the air-gapped computer. Put the backup back where it lives.

## How do you use an offline BIP39 tool safely?

Ian Coleman's BIP39 tool is a single HTML page that shows the keys and addresses a seed phrase derives, which makes the derivation visible. It is only safe offline:

:::warning Only on a computer that will never go online
Typing your real seed phrase into any page on an internet-connected computer exposes it. Use this tool only on an air-gapped computer, from a copy downloaded and checked beforehand.
:::

1. Download the standalone HTML file from the releases page of [github.com/iancoleman/bip39](https://github.com/iancoleman/bip39) on an online computer.
2. Move it to the air-gapped computer on a USB stick.
3. Open it in a browser there, with no network connection.
4. Enter the seed phrase (and passphrase), choose the same derivation path as your wallet, and compare the first few addresses with your wallet's.

## How often should you verify the backup?

<div class="fixed-width-table">

| When | What to do |
|-----------|-------------------|
| Setting up a new wallet | A full test before the first significant deposit |
| After making a metal backup | Test the metal copy itself, not the paper it was copied from |
| Every 6 to 12 months | Check the backup is still readable, or run the device's own backup check |
| Before major life changes | A full test |
| After any change to the backup | A full test |

</div>

Run a full test straight away if the backup has been exposed to water, fire or heat, if paper is yellowing or ink fading, if you cannot read your handwriting clearly, if stamped metal is unclear or corroded, or if someone may have seen it.

## What if verification fails?

First, do not panic: your original wallet still works. The error is in the backup, and you have found it while you can still fix it.

If the addresses do not match, check in this order:

1. The words: all present, spelled correctly, in the right order, from the English BIP39 list.
2. The passphrase: exactly right, including capitals and spaces, or absent if you do not use one.
3. The derivation path and script type, which differ between address types:

| Addresses start with | Script type | Derivation path |
|---|---|---|
| `bc1q` | Native segwit (BIP84) | `m/84'/0'/0'` |
| `3` | Nested segwit (BIP49) | `m/49'/0'/0'` |
| `1` | Legacy (BIP44) | `m/44'/0'/0'` |
| `bc1p` | Taproot (BIP86) | `m/86'/0'/0'` |

If the backup itself is wrong, make a new one while the wallet is still accessible. Some devices can show the seed phrase again on their own screen (check the manual; many, including Trezor, cannot). If yours cannot, or if you think the faulty backup may have been seen by someone, create a new wallet with a new seed, back it up and test it, and move the funds to it.

## Backup verification checklist

- The seed phrase is legible, and all 12 or 24 words are present, spelled correctly and in order.
- A wallet restored from the backup alone shows the same first receive address (and xpub) as the original.
- The passphrase wallet has been tested, if you use one.
- The metal copy has been tested, not only the paper.
- Any test device has been wiped.
- The backup is back in its secure place.
