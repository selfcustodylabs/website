---
sidebar_position: 2
title: "Bitcoin Seed Phrases Explained (BIP39)"
description: "Understand how BIP39 seed phrases work: converting private keys to memorable words. Learn the 2048-word list and how seeds protect your Bitcoin."
keywords: ["seed phrase", "BIP39", "mnemonic", "recovery phrase", "24 words", "bitcoin backup"]
tags: ["seed", "BIP39", "private keys", "backup"]
date: "2025-04-02"
---
# Seed phrases

A seed phrase is a list of 12 or 24 ordinary words that encodes every private key in your Bitcoin wallet, and it is the only thing you need to restore that wallet on any device, from any manufacturer, years later. The words come from a fixed list of 2048 defined by the BIP39 standard; they encode 128 or 256 bits of randomness plus a short checksum, and the wallet turns them into its master key. Whoever has the words controls the bitcoin, and whoever loses them (along with the device) loses it.

## What does a seed phrase look like?

A seed phrase (also called a recovery phrase or mnemonic) looks like this:

```text
reward symptom rude hamster wide weekend camera reward
pride roof weather keep ritual ocean rib wing
board potato whisper weasel chunk rival obvious clean
```

Each word stands for a number from 0 to 2047, its position in the [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt). This example is the one built step by step in the [dice guide](/docs/learn/keys/random/); never use a seed phrase you have seen published anywhere.

:::warning The seed phrase is the bitcoin
Anyone who sees these words can take everything. Never photograph them, type them into a computer or phone (anything but your hardware wallet), or store them digitally.
:::

## Why use words instead of numbers?

The randomness behind a 24-word seed is 256 bits, plus 8 bits of checksum:

```text
101110001011101110010010111100111011010001011111101010111111001...
(264 bits in all)
```

Nobody can copy that reliably by hand, and even as 24 numbers between 0 and 2047 it is easy to get a digit wrong. Words are easier to write and read back accurately, and the BIP39 list was chosen to make mistakes visible: every word is identified by its first four letters, and words that look or sound alike were left out, so "reword" written for "reward" stands out.

## How is a seed phrase made, and how does it restore a wallet?

To create one, the wallet:

1. Generates random bits: 128 for 12 words, 256 for 24. This is the step you cannot watch, and when a Coldcard firmware bug quietly weakened it, [attackers brute-forced $116 million of seeds in 2026](/docs/learn/wallets/coldcard-entropy-incident/). Generating the bits yourself [with dice](/docs/learn/keys/random/) removes that trust.
2. Appends a checksum: the first 4 bits (12 words) or 8 bits (24 words) of the SHA-256 hash of those random bits.
3. Splits the result into 11-bit chunks, 12 or 24 of them.
4. Looks up each chunk, a number from 0 to 2047, in the word list.

To restore, a wallet turns each word back into its number, checks the checksum, and then runs the phrase (with any [passphrase](/docs/learn/keys/passphrase/)) through PBKDF2 to produce the 512-bit seed that every key in the wallet is derived from. That is why word order matters: the same words in a different order encode a different number, which usually fails the checksum and otherwise opens a different, empty wallet.

![Lines 1470 to 1482 of the BIP39 English word list on GitHub, from "response" to "rice", with "reward" on line 1478](/img/basics/words.webp)

## What does this mean in practice?

- **The seed phrase is the bitcoin.** The hardware wallet, the app and the computer can all be replaced. If your house burns down but your seed phrase is stored elsewhere, you have lost nothing.
- **It is not a password.** There is no "forgot my seed phrase" link and no company that can recover it. Complete control comes with complete responsibility.
- **It works across wallets.** Because BIP39 is a standard, the same seed phrase restores in almost any Bitcoin wallet (Trezor, BitBox, Jade, Sparrow and many others), so you are not locked into one vendor. A few products do not use BIP39 seed phrases, notably Electrum's own seed format and Bitkey, which shows no seed phrase at all.

## What does the checksum catch?

The last word is not fully random: part of it is the checksum, computed from the rest of the phrase. When you restore, a wallet that finds the checksum wrong tells you the phrase is invalid instead of opening an empty wallet. It catches most mistakes but not all: a wrong word still passes the 8-bit checksum of a 24-word phrase about 1 time in 256, and the 4-bit checksum of a 12-word phrase about 1 time in 16. That is why a backup is [tested by restoring it](/docs/wallet-setup/backup-verification/), not just by checking it is accepted.

## How do bits become words, exactly?

This section shows the conversion for the example above. It is not needed to use bitcoin safely.

The 256 random bits plus 8 checksum bits make 264 bits, split into 24 chunks of 11:

```text
10111000101 11011100100 10111100111 01101000101 ...
```

Each 11-bit chunk is a number from 0 to 2047:

```text
1477, 1764, 1511, 837, 2005, 1992, 261, 1477, ...
```

and each number is a position in the word list, counting from 0:

| Number | Word |
|---------|------|
| 1477 | reward |
| 1764 | symptom |
| 1511 | rude |
| 837 | hamster |

The word list on GitHub numbers its lines from 1, so position 1477 is on line 1478. Because the list is alphabetical, words near "abandon" stand for small numbers and words near "zoo" for large ones. The [dice guide](/docs/learn/keys/random/) does the whole conversion by hand, from rolls to the 24th word.
