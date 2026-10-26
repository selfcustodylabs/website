# How to Set Up a Trezor Safe 5 With a Dice Seed

> Set up a Trezor Safe 5 on 24 words you made with dice: Bitcoin-only firmware, recovery on the touchscreen, PIN, passphrase and Sparrow, from Trezor's guides.

Source: https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/trezor-safe-5/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

To set up a Trezor Safe 5 on randomness you control, make a 24-word seed with dice first, then let Trezor Suite install the firmware and check the device is genuine, choose Recover instead of creating a wallet, and type the 24 words on the device's touchscreen. As of October 2026 the Safe 5 cannot take dice rolls itself, so restoring a seed you made is the only way to supply your own entropy; it also gives you a standard BIP39 seed that almost every wallet can restore. Then set a PIN, test the backup, add a passphrase if you want one, and connect Sparrow, checking every address on the Trezor's own screen.

Time: 1-2 hours, plus the dice. Cost: $129 (device). Level: Beginner. Reviewed: 26 Oct 2026. Updated: 26 Oct 2026. You need: A Trezor Safe 5, a 24-word seed made with dice, a computer with Trezor Suite and Sparrow.

Every step below follows Trezor's own guides as of October 2026, linked at the end. We have reviewed them against Trezor's documentation; we have not yet done this setup on a Safe 5 ourselves.

## What do you need before you start?

| Item | Why |
|---|---|
| A Trezor Safe 5, bought from trezor.io or an authorised reseller | A device from a marketplace may have been tampered with |
| A computer with [Trezor Suite](https://trezor.io/start) | Installs the firmware and runs the authenticity check. Trezor's guide says iPhone users must use the desktop app |
| 24 words made with dice, on paper | The seed you will restore; the [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/) and the [dice worksheet](https://selfcustodylabs.com/worksheets/dice-seed/) make it |
| [Sparrow Wallet](https://sparrowwallet.com/) | The wallet software we recommend once setup is done |
| An hour in a private room | No cameras, no visitors |

## Why restore a seed instead of letting the Trezor create one?

A Trezor Safe 5 that creates a wallet itself makes a 20-word backup in Trezor's SLIP39 format from the device's own randomness mixed with randomness from the computer. Trezor Suite's entropy check, run automatically on firmware 2.8.7 or later, confirms the device really mixed in the computer's part, and Trezor said in August 2026 that its devices were not affected by the [Coldcard entropy flaw](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/). A seed you make with dice does not depend on either generator, and you can check every step of it yourself. Trezor's own backup page lists BIP39 backups of 12 and 24 words as supported on the Safe 5, so a dice seed restores normally.

## Step 1: Make the 24 words with dice

Step 1 creates the seed before the Trezor is involved. Follow the [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/): 99 rolls of a six-sided die give the 256 bits of a 24-word seed, and the guide calculates the last word, which carries the checksum, on an offline computer. Write the 24 words on paper, numbered, and check the spelling against the BIP39 word list. Trezor has no dice method of its own as of October 2026; on 5 August 2026 it said it was considering user-supplied entropy, without committing to it.

## Step 2: Install Trezor Suite and the firmware

Step 2 puts current firmware on the device. Download Trezor Suite for desktop from [trezor.io/start](https://trezor.io/start), connect the Safe 5 with its USB-C cable, and click **Set up my Trezor** after the device security check. Trezor Suite offers two firmware types: choose **Bitcoin-only**, which leaves out the code for other coins, then click **Install firmware**. The device restarts by itself when the install finishes.

## Step 3: Pass the authenticity check

Step 3 confirms the device is a genuine Trezor. Click **Start** in Trezor Suite and follow the prompts on the device. If the check fails, stop: do not set the device up, and contact Trezor support. You can skip the optional "Know your Trezor" tutorial that follows.

## Step 4: Recover the dice seed on the touchscreen

Step 4 loads your 24 words onto the device. When Trezor Suite offers to create a new wallet or recover one, choose **Recover**, then:

1. Click **Start Recovery** and confirm on the device.
2. Accept the terms on the touchscreen.
3. Select the number of words on the device: 24. Trezor's default is 20, so change it.
4. Enter each word on the touchscreen in order. The keyboard is T9-style: tap the tile holding each letter once, and the device suggests matching words.
5. Tap the green checkmark to confirm each word.

When all 24 are accepted, the device shows "Wallet recovery completed". Type the words only on the Trezor, never into Trezor Suite, a website or any other app.

## Step 5: Set a PIN

Step 5 locks the device. Set a PIN on the device when Trezor Suite asks, or later under **Settings**, then **Device**. Trezor accepts 4 to 50 digits; avoid sequences and dates. After 16 wrong PIN attempts the Safe 5 erases the wallet, which you can then recover only from your 24 words.

## Step 6: Check the backup

Step 6 proves the paper matches the device. Trezor Suite's recovery check has you enter the backup words on the device and confirms they match the wallet it holds, without wiping anything. That catches a miswritten word, but the full test is restoring from the paper alone and comparing addresses, as the [backup verification guide](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) describes. Do it before you deposit more than a small amount.

## Step 7: Add a passphrase if you want one

Step 7 is optional. A [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) turns the same 24 words into a separate hidden wallet, so the words alone open nothing of value. Turn it on in Trezor Suite under **Settings**, **Device**, **Passphrase**, then open the hidden wallet from the wallet menu at the top left with **+ Passphrase wallet**, and type the passphrase on the Safe 5 rather than in Trezor Suite. Trezor passphrases are case-sensitive and up to 50 ASCII characters.

**Warning: A mistyped passphrase opens an empty wallet, not an error**
Trezor does not store the passphrase and cannot recover it. Any other string, including one with a single wrong character, opens a different and empty wallet. Write the passphrase down, keep it apart from the 24 words, and test opening the hidden wallet before you put funds in it.

## Step 8: Connect Sparrow and check a receive address

Step 8 moves daily use to Sparrow, which works with every major hardware wallet and with [your own node](https://selfcustodylabs.com/docs/bitcoin-node/). Close Trezor Suite first: only one application can talk to the device at a time. Then, following Sparrow's guide:

1. In Sparrow, choose **File**, **New Wallet**, name it, and select **Connected Hardware Wallet**.
2. Click **Scan…** with the Trezor connected and unlocked. On Linux, if nothing is found, install the device rules with **Tools**, **Install Udev Rules**.
3. If you use a passphrase, switch on the passphrase toggle Sparrow shows for the Trezor, and enter it on the device.
4. Click **Import Keystore**, then **Apply**, and set a password for the wallet file.
5. Open **Receive**, click **Display Address**, and check that the address on the Trezor's screen matches Sparrow's, character by character.

The Trezor's screen is the one to believe, every time you receive and every time you send, because malware can change what a computer shows but not what the device shows.

## Common questions

### Can the Trezor Safe 5 take dice rolls?

No. As of October 2026 the Trezor Safe 5 has no way to enter dice rolls during setup and Trezor documents no dice procedure. The way to supply your own entropy is to make the seed with dice and restore it, as this guide does.

### Should I choose Bitcoin-only or Standard firmware?

Choose Bitcoin-only if you hold only bitcoin. It leaves out the code for other coins, so less code runs next to your keys, and Trezor Suite installs either type in the same step.

### What if Trezor Suite shows a zero balance after I restore?

A zero balance after a restore usually means a different wallet was opened, not that funds are gone. Check each of the 24 words against your paper, check that a passphrase was entered exactly, and check that the wallet software uses the same address type as before, usually native segwit with addresses starting `bc1q`.

## Where do these steps come from?

These steps follow Trezor's and Sparrow's documentation as read on 26 October 2026: [Get started with the Trezor Safe 5](https://trezor.io/guides/trezor-devices/trezor-safe-5/get-started-with-the-trezor-safe-5), [Recover wallet on Trezor Safe 5](https://trezor.io/guides/backups-recovery/general-standards/recover-wallet-on-trezor-safe-5), [Understanding Trezor wallet backups](https://trezor.io/learn/security-privacy/how-trezor-keeps-you-safe/understanding-trezor-wallet-backups-12-20-or-24-words), [Entropy check](https://trezor.io/learn/security-privacy/how-trezor-keeps-you-safe/entropy-check-how-trezor-suite-verifies-wallet-generation), [What is a passphrase?](https://trezor.io/guides/backups-recovery/advanced-wallets/what-is-a-passphrase), Trezor's [statement on the Coldcard vulnerability](https://trezor.io/blog/news/coldcard-vulnerability-trezor-devices-are-not-affected), and Sparrow's [connected wallet guide](https://sparrowwallet.com/docs/connected-wallet.html). Menu labels change between versions of Trezor Suite; if a label differs, the vendor's current guide is the authority.
