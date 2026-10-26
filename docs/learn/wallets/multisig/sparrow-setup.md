---
sidebar_position: 3
title: "Multisig in Sparrow Wallet"
description: "Step-by-step guide to creating a 2-of-3 multisig wallet in Sparrow. Learn to configure your multisig, verify addresses, and make transactions."
keywords: ["bitcoin", "multisig", "sparrow wallet", "2-of-3", "setup", "tutorial"]
tags: ["multisig", "sparrow", "security", "bitcoin", "tutorial"]
slug: /learn/wallets/multisig/sparrow-setup
date: "2026-01-13"
---

# Creating your multisig in Sparrow Wallet

A 2-of-3 multisig is created in Sparrow by making a new wallet with the Multi Signature policy, adding each of the three hardware wallets as a keystore, saving it, registering the wallet on each device, checking that every device shows the same first receive address, and backing up the wallet descriptor. Sparrow is free, works with every major hardware wallet over USB, QR codes or microSD, and holds no private keys: it coordinates, and the devices sign.

Before starting, you need [Sparrow](https://sparrowwallet.com/download/) installed (with its download signature checked), three hardware wallets [set up with their own seeds](/docs/learn/wallets/multisig/hardware-setup/) and the master fingerprint of each recorded, and ideally your own [Bitcoin node](/docs/bitcoin-node/).

## Step 1: Connect Sparrow to a server

Step 1 decides who Sparrow asks about your wallet's addresses. Your own node keeps that private; a public server works for a first test, but it sees your addresses, so plan to move to your own.

1. Open Sparrow Wallet
2. Go to `File` → `Preferences` → `Server`
3. Choose your connection type:
   - Bitcoin Core, if you run your own node
   - Private Electrum, for your own Electrum server
   - Public Server, acceptable for testing but less private
4. Click `Test Connection` then `Close`

## Step 2: Create a new wallet

Step 2 creates the empty wallet.

1. Go to `File` → `New Wallet`
2. Enter a name, for example "Vault"
3. Click `Create Wallet`

You'll see the **Settings** screen with configuration options.

## Step 3: Set the multisig policy

Step 3 makes the wallet a 2-of-3 multisig:

1. Change `Policy Type` from Single Signature to Multi Signature.
2. Set the cosigners required (M) to 2 and the total cosigners (N) to 3.
3. Leave the script type as Native Segwit (P2WSH), the most efficient and the usual choice.

Your settings should show: `2 of 3 Multi Signature (Sorted Multi, Native Segwit)`

## Step 4: Add the first hardware wallet

Step 4 adds keystore 1. Below the settings are tabs for `Keystore 1`, `Keystore 2` and `Keystore 3`.

### USB devices (Trezor, BitBox02)

1. Click on `Keystore 1` tab
2. Click `Connected Hardware Wallet`
3. Connect your first hardware wallet via USB
4. Click `Scan...` in the dialog
5. Click your device when it appears
6. Unlock the device with your PIN
7. Click `Import Keystore`

Sparrow fills in the keystore: rename its label to identify the device (for example "Trezor, key 1"), and check that the master fingerprint matches your record. The derivation path is `m/48'/0'/0'/2'`, the usual one for each key of a native segwit multisig, and the xpub is the device's extended public key for it.

### Air-gapped devices (Jade, Keystone, SeedSigner, Coldcard)

1. Click the `Keystore 1` tab
2. Click `Airgapped Hardware Wallet`
3. Select your device type
4. Import the key from the device's microSD export file, or scan the QR code it displays
5. Rename the label to identify the device, and check the fingerprint

## Step 5: Add the second hardware wallet

Step 5 repeats step 4 on the `Keystore 2` tab with the second device, by USB or air-gapped as it requires. Label it (for example "Keystone, key 2") and check its fingerprint against your record.

## Step 6: Add the third hardware wallet

Step 6 does the same on the `Keystore 3` tab with the third device. Label it (for example "BitBox02, key 3") and check its fingerprint.

## Step 7: Apply and save

Step 7 creates the wallet. Check that the three keystores have different fingerprints and clear labels, click `Apply`, set a password for the wallet file when asked (optional, but recommended), and save.

## Step 8: Register the multisig on each hardware wallet

Step 8 tells each device which wallet it belongs to. A device that knows the other keys and the 2-of-3 rule can check receive and change addresses itself; one that does not would have to trust the computer.

### Coldcard

1. In Sparrow, go to `Settings` tab
2. Click `Export...` at the bottom
3. Select Coldcard Multisig and save it to a microSD card
4. Insert MicroSD into Coldcard
5. On the Coldcard: `Settings`, `Multisig Wallets`, `Import from SD`
6. Review and confirm the wallet details
7. Coldcard will now verify multisig addresses

### Keystone

1. In Sparrow, click `Export...`
2. Select Keystone Multisig and choose Show QR
3. On the Keystone, open the multisig wallet menu and choose to import a multisig wallet
4. Scan the QR code displayed by Sparrow
5. Confirm the wallet details

### Trezor, BitBox02 and Jade over USB

These devices receive the multisig details from Sparrow when you display an address over USB, and show them for you to confirm:
1. Go to `Receive` tab in Sparrow
2. Click `Display Address` on the hardware wallet
3. The device will show the multisig configuration for confirmation
4. Verify and confirm

## Step 9: Check the first address on every device

Step 9 proves Sparrow and all three devices agree on the wallet before any money goes in.

1. Go to the `Receive` tab, which shows the first multisig receive address
2. Click `Display Address` for each hardware wallet in turn
3. Check that every device shows exactly the same address, and confirm on each

If any device shows a different address, stop: something is wrong, and nothing should be deposited until you find it.

<div class="doc-diagram">

![Multisig address verification: Sparrow, Coldcard, Keystone and Trezor each display the receive address, and all four must show the identical bc1q string; any mismatch means stop immediately](/img/diagrams/wallets/address-verification.svg)

</div>

## Step 10: Back up the wallet descriptor

Step 10 saves the one thing, besides the seeds, that recovery needs. Without the wallet descriptor you cannot rebuild the multisig from two of its three seed phrases, because the third key's xpub is recorded only there.

### Export as PDF
1. Go to `Settings` tab
2. Click the QR code icon (top right of settings)
3. Click `Save PDF...`
4. Save and print this document
5. Store copies with each seed phrase backup

### Export as File
1. Click `Export...` at bottom of Settings
2. Select Sparrow to export the wallet file
3. Save the `.json` file to multiple locations

The PDF contains the descriptor as a QR code, all three xpubs with their fingerprints, the derivation paths and the script type. Store a copy with each seed backup.

## How do you receive and send from the multisig?

### Receiving

1. Go to `Receive` tab
2. Click `Get Next Address` for a new address
3. Check it on at least two of the hardware wallets
4. Send a small test amount first
5. Wait for confirmation

### Sending

1. Go to `Send` tab
2. Enter recipient address
3. Enter amount
4. Set fee (check [mempool.space](https://mempool.space) for current rates)
5. Click `Create Transaction`
6. Click `Finalize Transaction for Signing`

### Signing

The transaction needs two of the three signatures.

With USB devices:
1. Connect first hardware wallet
2. Click `Sign`
3. Verify transaction details on device
4. Confirm on device
5. Disconnect, connect second device
6. Click `Sign` again
7. Verify and confirm on second device

With air-gapped devices:

1. Click `Save PSBT` to a microSD card, or show it as a QR code
2. Load PSBT on first device and sign
3. Export signed PSBT back to computer
4. Load into Sparrow
5. Repeat with second device

When it has two signatures, click `Broadcast Transaction`.

<div class="doc-diagram">

![Signing a 2-of-3 multisig spend in Sparrow: Sparrow creates the unsigned PSBT, device 1 signs for one of two needed signatures, device 2 completes the quorum, and Sparrow broadcasts; the PSBT moves between devices, the keys never do](/img/diagrams/wallets/sparrow-signing-steps.svg)

</div>

## What habits keep it safe?

- Check addresses on the devices before the first deposit, after software updates, and from time to time afterwards.
- Before depositing a large amount, send a small test amount in, then send it back out, which proves the wallet can spend.
- Keep Sparrow updated, checking each download's signature.

## What if something does not work?

| Problem | What to check |
|---|---|
| The device is not detected | Try another USB cable and port, and make sure the device is unlocked |
| The addresses do not match | That you imported the right xpubs, that the derivation paths are `m/48'/0'/0'/2'`, and that every device is registered with the same multisig; re-export and re-import the wallet to the devices if needed |
| The transaction will not sign | That the PSBT belongs to this wallet, that the device has the multisig registered, and that it holds one of this wallet's keys |

The next guide, [backup and recovery](/docs/learn/wallets/multisig/backup-recovery/), covers storing the backups and rehearsing a recovery.
