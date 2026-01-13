---
sidebar_position: 3
title: "Sparrow Wallet Setup"
description: "Step-by-step guide to creating a 2-of-3 multisig wallet in Sparrow. Learn to configure your multisig, verify addresses, and make transactions."
keywords: ["bitcoin", "multisig", "sparrow wallet", "2-of-3", "setup", "tutorial"]
tags: ["multisig", "sparrow", "security", "bitcoin", "tutorial"]
---

# Creating Your Multisig in Sparrow Wallet

Sparrow Wallet is the best free option for managing multisig wallets. This guide walks through creating a **2-of-3 multisig** step by step.


## Prerequisites

Before starting:
- [ ] [Sparrow Wallet](https://sparrowwallet.com/download/) installed
- [ ] 3 hardware wallets set up with unique seeds ([Hardware Setup](/docs/multisig/hardware-setup))
- [ ] Master fingerprint recorded for each device
- [ ] Ideally: Your own [Bitcoin node](/docs/bitcoin-node) running


## Step 1: Connect Sparrow to a Server

For maximum privacy, connect Sparrow to your own Bitcoin node. If you don't have one yet, you can use a public server to start (but plan to run your own for privacy).

1. Open Sparrow Wallet
2. Go to `File` → `Preferences` → `Server`
3. Choose your connection type:
   - **Bitcoin Core** — If running your own node
   - **Private Electrum** — Your own Electrum server
   - **Public Server** — Acceptable for testing (less private)
4. Click `Test Connection` then `Close`


## Step 2: Create New Multisig Wallet

1. Go to `File` → `New Wallet`
2. Enter a name (e.g., "My Multisig Vault")
3. Click `Create Wallet`

You'll see the **Settings** screen with configuration options.


## Step 3: Configure Multisig Settings

### Policy Type
1. Change `Policy Type` from "Single Signature" to **"Multi Signature"**

### Signature Settings
2. Set the signature requirement:
   - **M (Cosigners required):** 2
   - **N (Total cosigners):** 3

This creates a **2-of-3 multisig**.

### Script Type
3. Leave as **Native Segwit (P2WSH)** — Most efficient and recommended

Your settings should show: `2 of 3 Multi Signature (Sorted Multi, Native Segwit)`


## Step 4: Add Keystore 1 (First Hardware Wallet)

Below the settings, you'll see tabs for `Keystore 1`, `Keystore 2`, and `Keystore 3`.

### For USB-Connected Devices (Trezor, Ledger, BitBox)

1. Click on `Keystore 1` tab
2. Click **"Connected Hardware Wallet"**
3. Connect your first hardware wallet via USB
4. Click **"Scan..."** in the dialog
5. Your device should appear—click on it
6. Unlock the device with your PIN
7. Click **"Import Keystore"**

The keystore details will populate:
- **Label:** (Rename to identify this device, e.g., "Trezor - Home")
- **Master fingerprint:** Should match what you recorded
- **Derivation:** `m/48'/0'/0'/2'` (standard for multisig)
- **xpub:** Extended public key

### For Air-Gapped Devices (Coldcard, Keystone)

1. Click on `Keystore 1` tab
2. Click **"Airgapped Hardware Wallet"**
3. Select your device type (e.g., "Coldcard Multisig")
4. Choose import method:
   - **Import File:** Insert MicroSD with exported JSON
   - **Scan QR:** Use camera to scan device's QR code
5. Select the file or complete the scan
6. The keystore details will populate

**Rename the label** to identify which device (e.g., "Coldcard - Key #1")


## Step 5: Add Keystore 2

1. Click the `Keystore 2` tab
2. Repeat the process for your second hardware wallet
3. Use the appropriate method (USB or air-gapped)
4. Label appropriately (e.g., "Keystone - Key #2")
5. **Verify the fingerprint matches your records**


## Step 6: Add Keystore 3

1. Click the `Keystore 3` tab
2. Repeat the process for your third hardware wallet
3. Label appropriately (e.g., "Ledger - Key #3")
4. **Verify the fingerprint matches your records**


## Step 7: Apply and Save

1. Review all three keystores:
   - Each should have a unique fingerprint
   - Labels should clearly identify each device
2. Click **"Apply"**
3. You'll be asked to set a password (optional but recommended)
4. Click **"Save"**

Your wallet is now created!


## Step 8: Register Multisig on Hardware Wallets

**Critical step!** Your hardware wallets need to know about the multisig to verify addresses.

### Coldcard Registration

1. In Sparrow, go to `Settings` tab
2. Click `Export...` at the bottom
3. Select **"Coldcard Multisig"** and save to MicroSD
4. Insert MicroSD into Coldcard
5. On Coldcard: `Settings` → `Multisig Wallets` → `Import from SD`
6. Review and confirm the wallet details
7. Coldcard will now verify multisig addresses

### Keystone Registration

1. In Sparrow, click `Export...`
2. Select **"Keystone Multisig"** and choose "Show QR"
3. On Keystone: `Menu` → `Multisig Wallet` → `Import Multisig`
4. Scan the QR code displayed by Sparrow
5. Confirm the wallet details

### Trezor / Ledger / BitBox

These devices register automatically when you verify an address:
1. Go to `Receive` tab in Sparrow
2. Click `Display Address` on the hardware wallet
3. The device will show the multisig configuration for confirmation
4. Verify and confirm


## Step 9: Verify Your First Address

**Never deposit to an address without verifying it!**

1. Go to the `Receive` tab
2. You'll see your first multisig receive address
3. Click **"Display Address"** for each hardware wallet
4. Each device should display the **exact same address**
5. Confirm on each device

If addresses don't match on all devices, **STOP** — something is wrong.

```
ADDRESS VERIFICATION:
────────────────────────────────────────
Sparrow shows:    bc1q8n5...xyz
Coldcard shows:   bc1q8n5...xyz  ✓
Keystone shows:   bc1q8n5...xyz  ✓
Trezor shows:     bc1q8n5...xyz  ✓

All match = Safe to receive!
```


## Step 10: Backup Your Wallet Descriptor

**Essential!** Without this, you cannot recreate your multisig even with all seeds.

### Export as PDF
1. Go to `Settings` tab
2. Click the QR code icon (top right of settings)
3. Click **"Save PDF..."**
4. Save and print this document
5. Store copies with each seed phrase backup

### Export as File
1. Click `Export...` at bottom of Settings
2. Select **"Sparrow"** to export wallet file
3. Save the `.json` file to multiple locations

The PDF contains:
- QR code of your wallet descriptor
- All three xpubs with fingerprints
- Derivation paths
- Script type

**Store this with your seed backups** — you'll need it for recovery.


## Making Your First Transaction

### Receiving Bitcoin

1. Go to `Receive` tab
2. Click `Get Next Address` for a new address
3. **Verify on at least 2 hardware wallets**
4. Send a small test amount first
5. Wait for confirmation

### Sending Bitcoin

1. Go to `Send` tab
2. Enter recipient address
3. Enter amount
4. Set fee (check [mempool.space](https://mempool.space) for current rates)
5. Click **"Create Transaction"**
6. Click **"Finalize Transaction for Signing"**

### Signing the Transaction

You need **2 of 3** signatures. Here's the process:

**With USB devices:**
1. Connect first hardware wallet
2. Click **"Sign"**
3. Verify transaction details on device
4. Confirm on device
5. Disconnect, connect second device
6. Click **"Sign"** again
7. Verify and confirm on second device

**With air-gapped devices:**
1. Click **"Save PSBT"** to MicroSD (or show QR)
2. Load PSBT on first device and sign
3. Export signed PSBT back to computer
4. Load into Sparrow
5. Repeat with second device

**Broadcast:**
1. After 2 signatures, click **"Broadcast Transaction"**
2. Your transaction is sent to the network

```
SIGNING FLOW:
─────────────────────────────────────────────
Sparrow creates PSBT (unsigned transaction)
        ↓
Device #1 signs → Now have 1 of 2 needed
        ↓
Device #2 signs → Now have 2 of 2 needed ✓
        ↓
Sparrow broadcasts to network
```


## Important Tips

### Address Verification

**Always verify on devices before depositing significant amounts:**
- First deposit to a new wallet
- After software updates
- Periodically for ongoing deposits

### Test Transaction First

Before depositing large amounts:
1. Send a small test amount (e.g., $10)
2. Verify it appears in your wallet
3. Send it back out (proves you can spend)
4. Now you know everything works

### Keep Sparrow Updated

Sparrow receives security updates:
1. Check for updates regularly
2. Verify download signatures
3. Update promptly for security fixes


## Troubleshooting

### Device Not Detected

- Check USB cable (try a different one)
- Try a different USB port
- Ensure device is unlocked
- Check that Bitcoin app is open (Ledger)

### Addresses Don't Match

- Verify you imported the correct xpubs
- Check derivation paths match (should be `m/48'/0'/0'/2'`)
- Ensure all devices are registered with the same multisig
- Try re-exporting and re-importing the wallet to devices

### Transaction Won't Sign

- Ensure PSBT is for the correct wallet
- Verify device has the multisig registered
- Check that you're signing with a key from this multisig


## Summary

You now have a working 2-of-3 multisig wallet:

1. ✅ Three hardware wallets initialized
2. ✅ Multisig created in Sparrow
3. ✅ All devices registered with the multisig
4. ✅ Addresses verified on multiple devices
5. ✅ Wallet descriptor backed up

**Next step:** Ensure your backups are properly secured.

→ Continue to [Backup & Recovery](/docs/multisig/backup-recovery)
