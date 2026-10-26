---
sidebar_label: "BitBox02 Nova"
sidebar_position: 2
title: "How to Set Up a BitBox02 Nova With a Dice Seed"
description: "Set up a BitBox02 Nova on 24 words chosen with dice: pairing, the genuine check, restoring the words on the device, passphrase and Sparrow, from BitBox's docs."
keywords: ["bitbox02 nova setup", "bitbox02 diceware", "bitbox restore recovery words", "bitbox passphrase", "bitbox sparrow", "bitboxapp"]
tags: ["hardware wallet", "setup", "seed", "security"]
date: "2026-10-26"
guide:
  time: "1-2 hours, plus the dice"
  cost: "About €175 (device)"
  level: "Beginner"
  needs: "A BitBox02 Nova, five dice and a coin, the BitBoxApp, and optionally Sparrow"
  reviewed: "2026-10-26"
---

# BitBox02 Nova setup with a dice seed

To set up a BitBox02 Nova on randomness you control, choose the 24 words with dice first, then pair the Nova with the BitBoxApp, let the app check the device is genuine, and pick **Restore from recovery words** instead of creating a wallet, entering each word on the Nova itself. As of October 2026 the Nova does not take dice rolls on the device, but BitBox documents its own dice procedure, written for the BitBox02, in which you pick 23 words from a printed table and the device offers the valid last words. Then set the device password, test the backup, add a passphrase if you want one, and connect Sparrow or keep using the BitBoxApp, checking every address on the Nova's screen.

<GuideFacts />

Every step below follows BitBox's own guides as of October 2026, linked at the end. We have reviewed them against BitBox's documentation; we have not yet done this setup on a Nova ourselves.

## What do you need before you start?

| Item | Why |
|---|---|
| A BitBox02 Nova, bought from bitbox.swiss or an authorised reseller | A device from a marketplace may have been tampered with |
| The [BitBoxApp](https://bitbox.swiss/download/) on a computer, Android phone, iPhone or iPad | Installs the firmware, checks the device and runs setup |
| Five dice (or one die rolled five times) and a coin, or six dice for the [dice guide](/docs/learn/keys/random/) | Your own entropy for the 24 words |
| BitBox's [diceware instructions](https://bitbox.swiss/bitbox02/BitBox_Diceware_HowTo.pdf) and [lookup table](https://bitbox.swiss/bitbox02/BitBox_Diceware_LookupTable.pdf), printed | Only for BitBox's own dice procedure |
| [Sparrow Wallet](https://sparrowwallet.com/), optionally | The wallet software we recommend for daily use |
| An hour in a private room | No cameras, no visitors |

## Why restore a seed instead of letting the Nova create one?

A BitBox02 Nova that creates a wallet itself generates the seed from its own randomness, and BitBox's default setup saves that seed to a microSD card, which BitBox's Nova guide notes is unencrypted by default. A seed whose words you chose with dice does not depend on the device's random number generator, the failure behind the [Coldcard entropy incident](/docs/learn/wallets/coldcard-entropy-incident/), and 24 words on paper or metal do not depend on a memory card staying readable.

## Step 1: Choose the words with dice

Step 1 creates the seed before the Nova is involved, in one of two ways that both give 24 BIP39 words.

BitBox's diceware procedure uses five dice and a coin for each word. Reroll any die showing 5 or 6 until all five show 1 to 4, keeping the dice in their positions, then flip the coin. In BitBox's printed lookup table the first die picks the page, the first four dice pick the row, and the fifth die with the coin picks the column. Write words 1 to 23 and leave word 24 blank: the device supplies it in step 4. BitBox's page describes this for the BitBox02 and, as of October 2026, does not name the Nova; it uses the same **Restore from recovery words** option the Nova's setup offers.

The other way is our [dice guide](/docs/learn/keys/random/): 99 rolls of a six-sided die make all 24 words, and an offline computer calculates the last one, so the device does not choose any part of the seed.

Either way, record rolls only on paper, and never type the words into a computer, phone or website.

## Step 2: Install the BitBoxApp and pair the Nova

Step 2 connects the device. Install the BitBoxApp from [bitbox.swiss/download](https://bitbox.swiss/download/); on an iPhone or iPad, install it from the App Store and check the publisher is Shift Crypto AG, since similarly named apps from other publishers are not BitBox's. Then:

1. Connect the Nova by USB-C to a computer or Android phone. An iPhone or iPad has no USB data connection for it, so there the Nova pairs over Bluetooth: tap the Bluetooth ID the Nova shows, and check that the code iOS displays matches the one on the Nova.
2. Choose the screen orientation on the Nova.
3. Compare the pairing code in the app with the one on the Nova, and confirm on the device.
4. On a new device, tap **Install firmware** and wait without closing the app or unplugging the Nova.

## Step 3: Check the Nova is genuine

Step 3 confirms the device came from BitBox. The BitBoxApp checks this automatically every time the device connects: it sends a random challenge that the device must sign with a key created in its secure chip and certified by BitBox at the factory. If the check fails, the app shows a large red warning that the device is not authentic; stop there and contact BitBox. The sealed bag and seal pattern on the packaging are a rough first check only, because packaging can be copied.

## Step 4: Restore the dice words on the device

Step 4 loads your seed onto the Nova. In the **Set up your wallet** screen:

1. Select **Restore from recovery words**, even though the wallet is new.
2. Name the device, click **Continue**, and confirm the name on the Nova.
3. Check and confirm the date on the device.
4. Choose 24 words.
5. Enter each word letter by letter on the Nova, in order. With BitBox's diceware procedure, enter words 1 to 23; the device then offers eight valid last words. Flip a coin three times (heads-heads-heads for the first, tails-tails-tails for the eighth), select that word, and write it on your paper as word 24.
6. Set the device password on the Nova and enter it again to confirm.

The BitBoxApp then synchronises, and the wallet is ready. The words go into the Nova only, never into the BitBoxApp.

## Step 5: Test the backup

Step 5 proves the paper restores the wallet. Restoring from your own words already shows that they load, but not that the paper you will keep is correct: a word copied wrong after setup would surface only on the day you need it. Test the written copy as the [backup verification guide](/docs/wallet-setup/backup-verification/) describes before you deposit more than a small amount.

## Step 6: Add a passphrase if you want one

Step 6 is optional. A [passphrase](/docs/learn/keys/passphrase/) turns the same words into a separate hidden wallet. In the BitBoxApp, open **Settings**, **Manage device**, and under **Expert settings** select **Passphrase**, then **Enable passphrase**, and confirm on the Nova. From then on, after the device password the Nova asks for the passphrase, which you enter on the device and check character by character on its display before confirming. BitBox accepts up to 149 characters: letters, digits, spaces and standard ASCII symbols, all of which count. A typo opens a different, empty wallet without any error, and BitBox cannot recover a lost passphrase, so note the wallet's root fingerprint and send a small test amount first.

## Step 7: Connect Sparrow and check a receive address

Step 7 is optional: the BitBoxApp is BitBox's own wallet software and covers daily use. To use [Sparrow](https://sparrowwallet.com/), which connects to [your own node](/docs/bitcoin-node/), follow BitBox's Sparrow guide:

1. Update the Nova's firmware in the BitBoxApp, then close the BitBoxApp completely; while it is open, Sparrow cannot connect.
2. In Sparrow, click **New Wallet**, name it, click **Create Wallet**, and select **Connect Hardware Wallet**.
3. With the Nova connected, click **Scan**, and enter the device password on the Nova. The first time, confirm that the pairing code matches in Sparrow and on the Nova.
4. Choose **Keystore #0** from the arrow beside **Import Keystore**, then click **Import Keystore**.
5. Set **Policy Type** to Single Signature and **Script Type** to Native Segwit (P2WPKH), click **Apply**, and set a password for the wallet file.
6. Open **Receive**, click **Display Address**, and check that the address on the Nova matches Sparrow's, character by character.

BitBox's Sparrow guide, last updated in August 2025, is written for the BitBox02 and does not name the Nova. If Sparrow does not find the Nova, use the BitBoxApp.

## Common questions

### Can the BitBox02 Nova take dice rolls?

Not on the device. As of October 2026 the way to use dice with a BitBox is BitBox's diceware procedure, in which dice choose 23 words from a printed table and the device offers eight valid last words, or a seed made with the [dice guide](/docs/learn/keys/random/) and restored. BitBox documents its procedure for the BitBox02 without naming the Nova.

### Should I keep a microSD backup as well?

A BitBox microSD backup is not needed when you restore from words, and BitBox's Nova guide notes that such backups are unencrypted by default, so a card is as sensitive as the words themselves. Keep the 24 words on paper or metal and, if you also make a card, store it as carefully as the words.

### What if the BitBoxApp shows a zero balance after I restore?

BitBox's own guide says a zero balance after a restore usually means a different wallet was opened, not that coins are lost. Check the words, check the passphrase if you use one, and let the app finish synchronising. The BitBox02 supports only SegWit and native SegWit accounts, so coins on legacy addresses starting with 1 do not appear in the BitBoxApp.

## Where do these steps come from?

These steps follow BitBox's and Sparrow's documentation as read on 26 October 2026: [How to set up the BitBox02 Nova on iOS](https://support.bitbox.swiss/nova/how-to-set-up-bitbox02-nova-ios), [How to restore from recovery words](https://support.bitbox.swiss/en_US/how-to-restore-from-recovery-words), [Create a Bitcoin wallet with your own entropy](https://support.bitbox.swiss/en_US/wallet-foundations-recovery/create-bitcoin-wallet-own-entropy), [Set up the optional passphrase](https://support.bitbox.swiss/en_US/set-up-bitbox02-optional-passphrase), [Verifying the BitBox02 packaging](https://support.bitbox.swiss/verifying-the-bitbox02-packaging), [Connect the BitBox02 to Sparrow](https://support.bitbox.swiss/en_US/connect-bitbox02-sparrow) and Sparrow's [connected wallet guide](https://sparrowwallet.com/docs/connected-wallet.html). Menu labels change between versions of the BitBoxApp; if a label differs, BitBox's current guide is the authority.
