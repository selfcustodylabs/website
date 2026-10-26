---
sidebar_position: 3
title: "Before You Deposit: Critical Checklist"
description: "Essential verification steps before sending Bitcoin to any new wallet. This checklist can save you from catastrophic, irreversible mistakes."
keywords: ["bitcoin checklist", "before deposit", "verify wallet", "self custody safety", "bitcoin security"]
tags: ["checklist", "security", "self custody", "safety"]
slug: /wallet-setup/before-you-deposit
date: "2026-01-15"
---

# Before you deposit: the checklist

Before sending a significant amount of bitcoin to a new wallet, check six things: the seed phrase was made safely and is written down correctly; a recovery from the written backup alone has been tested; the passphrase, if you use one, is backed up and tested; receive addresses are checked on the hardware wallet's own screen; the device and software came from their makers and are up to date; and a small test amount has gone in and come back out. A payment into a wallet cannot be undone, so a mistake found after the deposit is found too late. If any item below is not true yet, wait.

The same checks are a [printable checklist](/worksheets/before-you-deposit/) to tick off at your desk.

## What can go wrong if you skip a check?

| Skipped check | What can happen |
|---|---|
| The seed phrase was copied wrongly | The backup restores a different, empty wallet, and the funds are lost when the device fails |
| The device or software was tampered with | The funds are stolen |
| The backup was never tested | You believe you have a backup when you do not |
| The address was not checked on the device | Malware sends the deposit to an attacker's address |

## Is the seed phrase safe and correct?

- You know how the seed was made: from your own dice rolls, or by the device on current firmware. If it came from a [Coldcard on 2021 to 2026 firmware](/docs/learn/wallets/coldcard-entropy-incident/), move to a new seed before depositing anything.
- It is written down physically, on paper or metal.
- Every word is spelled as in the [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt), and the words are numbered and in order.
- It has never been photographed, typed into a computer or phone, stored in a notes app, cloud service or password manager, spoken aloud, sent in a message or shown to anyone.

## Has the backup been tested?

:::danger Do not skip the recovery test
An untested backup fails silently: you find out it is wrong only when the device has failed and the backup is all you have. Restore the wallet from the written backup alone before depositing.
:::

- You have restored the wallet from your written backup, by wiping the device or on a second device, using nothing but what is written down.
- The restored wallet's first receive address matches the original's.

The [backup verification guide](/docs/wallet-setup/backup-verification/) walks through it.

## If you use a passphrase, is it backed up and tested?

- You understand that a passphrase creates a completely different wallet, and that forgetting it loses the bitcoin.
- It is backed up separately from the seed phrase.
- You have restored with the seed phrase and passphrase together, and seen that the passphrase wallet shows different addresses from the seed-only wallet.

## Have you checked the receive address on the device?

- You generated a receive address in your wallet software and displayed the same address on the hardware wallet.
- The two match, checked character by character (at least the first and last eight characters).

This matters because malware can change the address shown on a computer, but not the one the hardware wallet shows on its own screen.

## Are the device and software genuine and up to date?

- The hardware wallet was bought from its manufacturer, not a marketplace such as Amazon or eBay.
- The packaging showed no signs of tampering, and the maker's authenticity check passed, where the device has one.
- The firmware is the latest version, checked against the manufacturer's website.
- The PIN is not guessable: not a birthday, sequence or repeated digit.
- Wallet software came from its official site ([Sparrow](https://sparrowwallet.com), [Electrum](https://electrum.org), or the manufacturer's own app), and you checked the download's signature if you know how.
- The computer is your own, up to date and free of software you do not recognise.

## Has a test transaction worked both ways?

- A small amount, enough to check and not enough to hurt, has arrived in the wallet.
- You have sent a transaction out of the wallet successfully.
- You understand how fees are set and how to choose one; see [transaction fees](/docs/learn/transactions/fees/).

## Are you ready for the responsibility?

- You can explain in your own words what a seed phrase is, and that the seed phrase, not the device, is what holds the bitcoin.
- You know that nobody can help if the seed phrase is lost, and that anyone who sees it can take everything.
- You know where the backup will be stored, and have thought about fire, flood and theft.
- You have thought about what happens to the bitcoin if you die; see [inheritance planning](/docs/advanced/inheritance-planning/).
- You are not rushing. At least a day between setup and a significant deposit is a good rule, and a rising price is not a reason to hurry.

## When should you not deposit?

Do not deposit if you are not certain the seed phrase is written correctly, if you have not tested recovery, if the hardware wallet came from an unofficial source, if anyone has seen your seed phrase, if you are using a computer you do not trust, or if you feel rushed or something about the setup seems wrong. Delaying costs nothing; a mistake can cost everything.

## What should you do after depositing?

1. Wait for the transaction to confirm: one confirmation for small amounts, six for large ones.
2. Keep a private record of it.
3. Do not publish your receive addresses, screenshots of your balance or the fact that you own bitcoin. Reused addresses leak your history, and known holders become targets.

## What if something goes wrong?

### What if you sent bitcoin to the wrong address?

Bitcoin transactions cannot be reversed. If the address belongs to nobody you know, the funds are almost certainly gone, which is why every address is checked on the device first.

### What if you cannot remember your passphrase?

Without the exact passphrase, the seed phrase opens a different, empty wallet, and there is no recovery mechanism. This is why the passphrase is tested before depositing.

### What if you lost your seed phrase?

If the device still works, create a new wallet with a new seed, back it up and test it, then move the funds to it. If the device is lost or broken too, the funds cannot be recovered.

### What if someone saw your seed phrase?

Assume it is compromised. Create a new wallet with a new seed straight away, move all the funds to it, and never use the old seed again.
