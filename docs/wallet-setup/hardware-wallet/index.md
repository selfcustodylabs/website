---
sidebar_position: 2
title: "Hardware Wallet Setup: Step-by-Step Bitcoin Security Guide"
description: "Step-by-step guide to setting up your first hardware wallet. Learn how to initialize, secure, and use a hardware wallet for Bitcoin self-custody."
keywords: ["hardware wallet", "bitcoin", "self custody", "coldcard", "trezor", "ledger", "keystone", "setup guide"]
tags: ["hardware wallet", "self custody", "bitcoin", "security", "wallet setup"]
slug: /wallet-setup/hardware-wallet
guide:
  time: "1-2 hours"
  level: "Beginner to intermediate"
  cost: "$80-250 (hardware wallet)"
---

# Hardware wallet setup guide

Setting up a hardware wallet takes one to two hours: buy the device from its maker, check it is genuine, update the firmware, set a PIN, create the seed phrase (ideally with your own dice rolls), write it down, test the backup, then connect the device to wallet software such as Sparrow and confirm a receive address on the device's own screen. Done this way, your private keys are created on the device and never leave it, so malware on your computer cannot reach them or change a payment without the device showing you.

<GuideFacts />

## What is a hardware wallet?

A hardware wallet is a small dedicated device that creates and stores your bitcoin private keys and signs transactions with them, without the keys ever leaving it. It does four things a phone or computer wallet cannot:

- It generates the seed phrase inside the device, offline.
- It keeps the keys in isolated storage that the computer cannot read.
- It signs transactions internally; the computer only ever sees the signed result.
- It shows the address and amount on its own screen, which malware on the computer cannot redraw.

<div class="doc-diagram">

![Sending from a hardware wallet: the software creates the transaction, the device screen shows the real recipient and the 1,500 sat fee, you press confirm on the device and it signs, then the software broadcasts; malware can redraw a monitor but not the device screen](/img/diagrams/wallet-setup/hw-signing.svg)

</div>

## Which hardware wallet should you buy?

For a first device, we recommend the BitBox02 Nova (Bitcoin-only edition) or the Trezor Safe 5: both are easy to use and support dice entropy. For security you can verify more of yourself, the Jade Plus or Passport Prime, which sign over QR codes without a cable. If you want to build your own, a [SeedSigner](/docs/seedsigner/) (our favourite, though not for beginners; see the [build guide](/docs/seedsigner/build-guide/)) or a Krux, which keep no seed in memory, so every bit of entropy is yours. The [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) has current prices and the reasoning for each.

Two familiar names are missing. Coldcard was our security pick for years, until the [2026 entropy incident](/docs/learn/wallets/coldcard-entropy-incident/): a firmware flaw present since 2021 made device-generated seeds guessable, and about $116 million was stolen. The flaw is fixed and dice-generated seeds were never affected, but a warning about that exact code was dismissed in 2025, so we do not recommend new purchases until trust is rebuilt; if you own one, [check whether you are affected](/docs/learn/wallets/coldcard-entropy-incident/#am-i-affected). Ledger devices run closed-source secure-element firmware that nobody outside Ledger can audit, which after 2026 is more trust than we are willing to recommend.

## What do you need before you start?

<div class="fixed-width-table">

| Item | Why |
|------|---------|
| The hardware wallet, bought from its maker | Devices from marketplaces and resellers can be tampered with |
| A computer or phone | Runs the wallet software |
| The USB cable (or a microSD card, for air-gapped devices) | Connects the device; most come with one |
| A metal backup plate, or paper for now | Holds the seed phrase; metal survives fire and water |
| A pen, not a pencil | Pencil smudges and fades |
| Six dice, ideally casino dice | For your own entropy in step 3 |
| An hour in a private room | No cameras, no visitors, no rush |

</div>

## Step 1: Verify the device is genuine

Step 1 checks the device was not opened or swapped before it reached you. Before powering it on, look for signs that the packaging was opened or resealed and that any tamper seals are intact. Then, once it is on, run the maker's authenticity check; Trezor Suite and the BitBoxApp, for example, check the device's attestation during first setup. If anything fails or looks wrong, stop and contact the maker; do not set the device up.

## Step 2: Update the firmware and set a PIN

Step 2 prepares the device. Power it on and follow its prompts:

1. Choose language and region.
2. Update to the latest firmware, and read the vendor's security advisories page. The 2026 Coldcard incident hit seeds generated on old, flawed firmware.
3. Set a PIN. Avoid 1234, 0000, repeated digits and birthdays; pick a random PIN you can remember, or write it down separately from the seed phrase.
4. Choose to create a new wallet.

## Step 3: Create the seed phrase with your own entropy

Step 3 decides how much you are trusting the manufacturer. A device that generates the seed by itself is trusted completely to produce good randomness, and in 2026 [that trust failed in public](/docs/learn/wallets/coldcard-entropy-incident/) at nine-figure scale.

The recommended way is the device's dice-roll option during setup: 99 rolls of a six-sided die cover a 24-word seed even if the device's own generator is broken. Going further, you can [generate the seed entirely yourself](/docs/learn/keys/random/) and import it, which makes every step checkable. A seed the device makes on its own is acceptable only for starter amounts, and then with a [passphrase](/docs/learn/keys/passphrase/) added, so the funds do not rest on the device's randomness alone.

The device shows the 12 or 24 words one at a time. Write each one in order, numbered and spelled exactly. Never photograph the words or type them into anything but the hardware wallet itself.

:::warning A firmware update cannot fix a weak seed
A seed made by flawed firmware stays weak after the firmware is updated, which is why affected Coldcard owners had to move their funds to new wallets. Make the seed on current firmware, with your own entropy, and that migration never arises.
:::

## Step 4: Check the backup

Step 4 confirms what you wrote down. Most devices quiz you on a few words from the seed phrase before finishing setup. That check catches a missed word, but not a misspelled word the device never asked about, and it does not prove the backup restores your wallet. Do the full test in the [backup verification guide](/docs/wallet-setup/backup-verification/) before you deposit more than a small amount.

## Step 5: Set up wallet software

Step 5 installs the software that shows your balance, builds transactions and keeps track of addresses; the hardware wallet only signs.

<div class="fixed-width-table">

| Software | Platform | Works with |
|----------|----------|-----------|
| [Sparrow Wallet](https://sparrowwallet.com/) | Desktop | Any hardware wallet |
| Nunchuk | Desktop and mobile | Any hardware wallet, including multisig |
| Trezor Suite | Desktop and web | Trezor devices |
| BitBoxApp | Desktop and mobile | BitBox02 |
| BlueWallet | Mobile | Air-gapped devices and watch-only wallets |

</div>

We recommend Sparrow for most people: it works with every major hardware wallet, connects to your own node when you have one, and gives you coin control.

## Step 6: Connect and verify a receive address

Step 6 proves the software and the device agree on the wallet.

1. Connect the hardware wallet and open the wallet software.
2. Add the hardware wallet as a new wallet or keystore.
3. Show a receive address in the software, then display it on the device.
4. Check that the two match, character by character.

Malware can show a fake address on a computer screen, so the device's screen is the one to believe, every time you receive and every time you send.

## How do you send and receive the first time?

To receive:

1. Click Receive in the wallet software to show a new address.
2. Display the same address on the hardware wallet and check it matches.
3. Give the address to the sender, and send a small amount first.
4. Wait for at least one confirmation.

To send:

1. Create the transaction in the software, with the recipient's address and the amount.
2. Check the recipient, the amount and the fee on the hardware wallet's screen.
3. Approve it on the device.
4. Let the software broadcast the signed transaction.

## What mistakes should you avoid?

| Mistake | Why it matters |
|---|---|
| Storing the seed phrase digitally: a photo, notes app, cloud drive, password manager or email | Anything stored on a connected device can be copied by malware or a breached account |
| A weak PIN | A stolen device with a guessable PIN is a stolen wallet |
| Not testing the backup | A wrong word is discovered only when the device fails, which is too late |
| Trusting the computer screen | Malware can replace an address on the computer; it cannot on the device |
| Buying from marketplaces | Tampered and pre-seeded devices have been sold on eBay and Amazon |

## Should you add a passphrase?

A passphrase, sometimes called the "25th word", is an extra secret that turns your seed phrase into a different wallet, so that someone who finds the words alone finds nothing. It also adds a way to lose everything: forgetting it, or getting one character wrong, opens an empty wallet, and it must be backed up separately from the seed phrase. Add one once you are comfortable with the device; the [passphrase guide](/docs/learn/keys/passphrase/) covers when it is worth it and how to make a strong one.

## What should you do after setup?

1. [Verify the backup](/docs/wallet-setup/backup-verification/) by restoring from it.
2. Receive a small amount first, and send it once, before moving the rest.
3. Connect the wallet to [your own node](/docs/bitcoin-node/) for privacy.
4. Learn [UTXO management](/docs/learn/privacy/utxo-management/).
5. Consider [multisig](/docs/learn/wallets/multisig/) once the holdings are significant.
