# How to Set Up a Jade Plus Air-Gapped With Dice

> Set up a Jade Plus over QR codes on words chosen with dice: firmware, genuine check, final-word calculation, QR PIN Unlock and Sparrow, from Blockstream's docs.

Source: https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/jade-plus/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

To set up a Blockstream Jade Plus air-gapped on randomness you control, update its firmware and run the Genuine Check over USB first, choose 23 words with dice, then pick **Restore Wallet** on the device, enter those words and let the Jade Plus calculate a valid last word. After that, choose QR mode, unlock it with QR PIN Unlock, and add it to Sparrow by scanning QR codes, so the Jade never connects to a computer again for daily use. As of October 2026 the Jade has no dice entry on the device, but Blockstream documents dice methods for choosing the words and the final-word calculation that turns them into a valid seed.

Time: 1-2 hours, plus the dice. Cost: $149 (device). Level: Intermediate. Reviewed: 26 Oct 2026. Updated: 26 Oct 2026. You need: A Jade Plus, dice, a USB cable for the first firmware update, a phone or computer with a camera, and Sparrow.

Every step below follows Blockstream's own help pages as of October 2026, linked at the end. We have reviewed them against Blockstream's documentation; we have not yet done this setup on a Jade Plus ourselves.

## What do you need before you start?

| Item | Why |
|---|---|
| A Jade Plus, bought from Blockstream or an authorised reseller | A device from a marketplace may have been tampered with |
| A USB-C cable and a computer with Chrome or another WebSerial browser | The first firmware update and the Genuine Check |
| Dice: one six-sided die is enough | Your own entropy for the words |
| Blockstream's [binary words table](https://help.blockstream.com/generate-recovery-phrase-offline-binary-table), printed | Turns each 11 bits from the dice into a word |
| A phone or computer with a camera | Carries the QR PIN Unlock exchange and talks to Sparrow by QR |
| [Sparrow Wallet](https://sparrowwallet.com/) on a computer with a webcam | The wallet software that builds transactions for the Jade to sign |
| An hour in a private room | No cameras, no visitors |

## How does an air-gapped Jade Plus work?

An air-gapped Jade Plus is a Jade Plus that exchanges data with your wallet software only through QR codes shown on one screen and read by the other's camera, never through a cable or Bluetooth. Sparrow shows the unsigned transaction as an animated QR code, the Jade Plus reads it with its camera, shows the amount and address for you to approve, and displays the signed transaction as a QR code for Sparrow to read back. Nothing but those codes crosses between the two, so malware on the computer can neither reach the keys nor change what the Jade's screen asks you to approve.

## Step 1: Update the firmware and run the Genuine Check

Step 1 is the only part done over a cable. Blockstream recommends updating the firmware before setting the device up. Connect the Jade Plus by USB to a computer, open Blockstream's upgrade web portal in a WebSerial browser such as Chrome, and click **Update your Jade**; the Blockstream app and a command-line script can do the same. A Jade that shipped with firmware older than 1.0.38 should be factory reset before or after its first upgrade.

Then check the device is genuine at [verify.blockstream.com](https://verify.blockstream.com), the web Genuine Check for devices not being set up in the Blockstream app, and select **Yes** on the Jade to sign the challenge. If the check reports that the device is not genuine, stop, do not use it, and contact Blockstream support.

## Step 2: Choose 23 words with dice

Step 2 makes your entropy. Blockstream's six-sided-die method turns each roll into bits: 1 is `00`, 2 is `01`, 3 is `10`, 4 is `11`, 5 is `0` and 6 is `1`. Roll until you have 11 bits (if the last roll gives one bit too many, keep only the leftmost one you need), read the 11 bits left to right, and look the word up in Blockstream's binary words table. Repeat for words 1 to 23, on paper only. Blockstream also documents methods with eight- and sixteen-sided dice that take fewer rolls per word.

You can instead make all 24 words with our [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/) and enter them in full in step 3, choosing **Existing** for the last word.

## Step 3: Restore the words and let the Jade Plus calculate the last one

Step 3 loads the seed. On the Jade Plus:

1. Select **Set Up Jade**, then **Advanced Setup**, then **Restore Wallet**, and choose 24 words.
2. Enter your 23 words on the Jade's keyboard, in order.
3. Select **Calculate**. The keyboard for the 24th word now accepts only words that make a valid seed.
4. Choose one of the valid words, or click through the calculation and the Jade picks one at random.
5. Write the final word on your paper as word 24.

If the Jade Plus offers to make a SeedQR (a QR code of your seed that you draw by hand on Blockstream's template), you can skip it unless you plan to unlock with a SeedQR instead of a PIN. Test the paper before funding the wallet, as the [backup verification guide](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) describes: entering the words once proves they load, not that the copy you keep is correct.

## Step 4: Choose QR mode and set up QR PIN Unlock

Step 4 makes the device air-gapped. Choose **QR** as the connection method, and complete QR PIN Unlock with a six-digit PIN. The Jade has no secure element: its PIN works with Blockstream's PIN server, the "blind oracle" described in the [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/), and QR PIN Unlock relays that exchange through QR codes and a web page on your phone, so the Jade Plus itself never goes online. Each session:

1. On the Jade Plus, select **QR Mode**, then **QR PIN Unlock**.
2. On your phone or computer, open Blockstream's companion page at [blkstrm.com/pn](https://blkstrm.com/pn) and select **Continue**.
3. Enter your PIN on the Jade Plus, then tap **Done** on the page.
4. Scan the Jade's animated QR code with the phone's camera until the progress bar is full, then press the checkmark on the Jade Plus.
5. Point the Jade's camera at the page's animated QR code until its progress bar fills. The Jade Plus unlocks.

If scanning stalls, set **QR Density** to Low in the Jade's **Options**. Blockstream says that after three wrong PIN entries you must restore the wallet from your recovery phrase. With a SeedQR you can skip the PIN and scan the SeedQR each session instead, which makes the drawn code exactly as sensitive as the 24 words.

**Warning: Three wrong PINs and the words are the only way back**
On the Jade, three wrong PIN entries mean restoring from the recovery phrase. Before funding the wallet, make sure the 24 words, including the last word the Jade chose, are on paper and tested.

## Step 5: Add a passphrase if you want one

Step 5 is optional. A [passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) turns the same words into a separate hidden wallet. Before unlocking, open **Options** on the Jade's main menu and select **BIP39 Passphrase**. Set **Frequency** to **Always Ask** (asked at every login) or **Next Login Only** (asked once, which also hides that you use one), and **Method** to **Manual** for any characters or **WordList** to build it from BIP39 words. Passphrases are case-sensitive and spaces count. A typo opens a different, empty wallet without any error, so note the fingerprint the Jade shows at the lower right when you open the passphrase wallet, and compare it every time. Set this before step 6: the passphrase wallet has its own key for Sparrow.

## Step 6: Add the Jade Plus to Sparrow by QR

Step 6 gives Sparrow the public key, so it can show balances and build transactions while the private keys stay on the Jade.

1. On the unlocked Jade Plus, select **Options**, **Wallet**, **Export Xpub**. The default is single-signature native segwit, `m/84'/0'/0'`; keep it unless you know you need another.
2. In Sparrow, choose **File**, **New Wallet**, name it, and select **Airgapped Hardware Wallet**.
3. Find the Jade in the list, click **Scan…**, and hold the Jade's animated QR code up to the webcam until Sparrow has read it.
4. Click **Apply** and set a password for the wallet file.

Blockstream warns that the script type in Sparrow must match the one exported, or the wallet shows the wrong addresses and no balance.

## Step 7: Check a receive address and sign by QR

Step 7 proves the Jade and Sparrow agree, before any money moves. To check an address, open **Receive** in Sparrow, select **Scan QR** on the Jade Plus and point it at the address's QR code; the Jade searches its wallet and confirms the address is its own. It checks the first 500 addresses and then offers **Skip** to search further.

To send:

1. In Sparrow, enter the address and amount, click **Create Transaction**, then **Finalize Transaction for Signing**, then **Show QR**.
2. On the Jade Plus, select **Scan QR** and read Sparrow's animated code.
3. Check the address and amount on the Jade's screen, not only in Sparrow, and confirm.
4. In Sparrow, click **Scan QR** and hold up the signed transaction the Jade now shows.
5. Click **Broadcast Transaction**.

Send a small amount out and back first. QR mode handles bitcoin only; Liquid needs USB or Bluetooth and the Blockstream app.

## Common questions

### Can the Jade Plus take dice rolls?

Not on the device. As of October 2026 you roll dice off the device with one of Blockstream's documented methods, enter the first 23 words, and the Jade Plus calculates a valid 24th word. You can also enter a full 24-word seed made with the [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/).

### Do I need the Blockstream app?

No. This guide uses a web browser for the firmware update and the Genuine Check, Blockstream's QR PIN Unlock page, and Sparrow. The Blockstream app is needed only for Liquid, or if you prefer to connect by USB or Bluetooth.

### Is a SeedQR safer than QR PIN Unlock?

A SeedQR keeps nothing on the device: the Jade Plus forgets the seed when it powers off, and you scan the drawn code to sign. That removes the PIN server from the picture, but the drawn code is your full seed, so it needs the same protection as the 24 words, and anyone who sees it can copy the wallet. QR PIN Unlock keeps the seed on the device behind a PIN and the blind oracle.

## Where do these steps come from?

These steps follow Blockstream's and Sparrow's documentation as read on 26 October 2026: [Set up Jade](https://help.blockstream.com/blockstream-jade/set-up-transact-recover-your-wallet/set-up-jade), [Air-gapped Jade Plus setup](https://help.blockstream.com/blockstream-jade/use-jade-air-gapped/air-gapped-jade-plus-setup), [Update Jade firmware](https://help.blockstream.com/blockstream-jade/set-up-transact-recover-your-wallet/update-jade-firmware), [Perform a Genuine Check with Jade](https://help.blockstream.com/blockstream-jade/set-up-transact-recover-your-wallet/perform-a-genuine-check-with-jade), [Generate a recovery phrase offline](https://help.blockstream.com/generate-recovery-phrase-offline) and its [six-sided-die method](https://help.blockstream.com/generate-recovery-phrase-offline-d6), [Create a recovery phrase using dice](https://help.blockstream.com/blockstream-jade/add-more-security-functionality/create-a-recovery-phrase-using-dice), [Access Jade air-gapped with QR PIN Unlock](https://help.blockstream.com/blockstream-jade/use-jade-air-gapped/access-jade-air-gapped-with-qr-pin-unlock), [Connect Jade to a companion app](https://help.blockstream.com/blockstream-jade/set-up-transact-recover-your-wallet/connect-jade-to-a-companion-app), [Add a BIP39 passphrase for Jade](https://help.blockstream.com/blockstream-jade/add-more-security-functionality/add-a-bip39-passphrase-for-jade), [Add Jade Plus to an air-gap supported app](https://help.blockstream.com/blockstream-jade/use-jade-air-gapped/add-jade-plus-to-an-air-gap-supported-app), [Verify receive addresses with an air-gapped Jade Plus](https://help.blockstream.com/blockstream-jade/use-jade-air-gapped/verify-receive-addresses-with-an-air-gapped-jade-plus), and Sparrow's [QR air-gapped wallet guide](https://sparrowwallet.com/docs/airgapped-wallet-qr.html). Menu labels differ slightly between Blockstream's articles and change between firmware versions; if a label differs, Blockstream's current guide is the authority.
