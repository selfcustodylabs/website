---
sidebar_position: 2
title: "Hardware Setup"
description: "Prepare your hardware wallets for multisig. Learn how to initialize signing devices from different manufacturers for maximum security."
keywords: ["bitcoin", "multisig", "hardware wallet", "coldcard", "trezor", "keystone", "setup"]
tags: ["multisig", "hardware wallet", "security", "bitcoin"]
---

# Hardware Setup for Multisig

Before creating your multisig wallet, you need to set up each hardware wallet (signing device) individually. This page guides you through preparing your devices.


## Recommended Hardware Combinations

For a **2-of-3 multisig**, using different manufacturers eliminates single-vendor risk:

### Option A: Maximum Security (Air-Gapped)

<div class="fixed-width-table">

| Device | Role | Communication |
|--------|------|---------------|
| **Coldcard Mk4/Q** | Key 1 | MicroSD card (air-gapped) |
| **Keystone 3 Pro** | Key 2 | QR codes (air-gapped) |
| **Trezor Safe 3/5** | Key 3 | USB |

</div>

### Option B: Balanced (User-Friendly)

<div class="fixed-width-table">

| Device | Role | Communication |
|--------|------|---------------|
| **Trezor Safe 3** | Key 1 | USB |
| **Ledger Nano S+/X** | Key 2 | USB |
| **BitBox02** | Key 3 | USB |

</div>

### Option C: Budget-Conscious

<div class="fixed-width-table">

| Device | Role | Communication |
|--------|------|---------------|
| **Trezor Model One** | Key 1 | USB |
| **Ledger Nano S+** | Key 2 | USB |
| **Blockstream Jade** | Key 3 | USB or QR |

</div>

:::tip Cost Consideration
A complete 3-device setup costs $200-500 depending on models chosen. This is a one-time investment to protect potentially much larger holdings.
:::


## General Setup Principles

### 1. Generate Seeds on the Devices

**Always generate new seed phrases directly on the hardware wallets.** Never:
- Import a seed you generated elsewhere
- Use a seed from a software wallet
- Share seeds between devices

Each device = Unique seed = Independent key

### 2. Verify Device Authenticity

Before setup:
- Purchase directly from manufacturers or authorized resellers
- Check tamper-evident packaging
- Verify firmware signatures where possible

### 3. Update Firmware First

Before generating seeds:
- Connect to manufacturer's official software
- Update to latest firmware
- This ensures you have latest security patches

### 4. Create Strong PINs

Each device needs a PIN:
- Use 6-8 digits minimum
- Don't use obvious patterns (123456, 000000)
- Don't reuse PINs across devices
- Consider writing PINs down separately from seeds (stored in different locations)


## Device-Specific Setup

### Coldcard Setup

Coldcard is Bitcoin-only and supports excellent air-gapped operation.

**Initial Setup:**
1. Power on with battery pack or USB power adapter (not computer)
2. Accept terms and create a PIN
   - Prefix PIN (shown before words)
   - Main PIN (required to access)
3. Select "New Seed Words"
4. Choose 24 words
5. **Write down all 24 words on paper/metal**
6. Verify by re-entering selected words
7. Record the **master fingerprint** (8 characters, e.g., `7C8A9B2D`)

**Export Public Key for Multisig:**
1. Insert MicroSD card
2. Go to: `Advanced/Tools` → `Export Wallet` → `Generic JSON`
3. This creates a file with your xpub for the coordinator software

**Label your Coldcard** with a number (1, 2, or 3) using the included stickers.

### Trezor Setup

Trezor offers excellent software integration with Sparrow.

**Initial Setup:**
1. Connect to computer via USB
2. Open Trezor Suite or Sparrow Wallet
3. Select "Create new wallet"
4. Choose 12 or 24 words (24 recommended for multisig)
5. **Write down all words on paper/metal**
6. Verify by re-entering words
7. Create a PIN (up to 50 digits)
8. Note the **master fingerprint** (visible in Sparrow after connecting)

**For Multisig:**
- Trezor works via USB connection with Sparrow
- No export file needed—Sparrow reads directly from device

### Keystone Setup

Keystone uses QR codes for fully air-gapped operation.

**Initial Setup:**
1. Power on and select language
2. Create a password (device access)
3. Select "Create New Wallet"
4. Choose 24 words
5. **Write down all words on paper/metal**
6. Verify the seed phrase
7. Note the **master fingerprint** from wallet info

**Export for Multisig:**
1. Go to: `Menu` → `Multisig Wallet` → three dots → `Show/Export XPUB`
2. Can export via QR code or to MicroSD

### BitBox02 Setup

BitBox02 offers simple setup with strong security.

**Initial Setup:**
1. Connect via USB
2. Open BitBox App
3. Select "Create wallet"
4. Device generates 24-word seed
5. **Write down all words on paper/metal**
6. Verify on device
7. Set device password

**For Multisig:**
- BitBox02 works directly with Sparrow via USB
- Note the fingerprint shown in Sparrow

### Ledger Setup

Ledger devices work with most multisig coordinators.

**Initial Setup:**
1. Connect via USB
2. Set up PIN (4-8 digits)
3. Select "Set up as new device"
4. Write down the 24-word recovery phrase
5. Confirm words on device
6. Install Bitcoin app via Ledger Live

**For Multisig:**
- Works with Sparrow via USB
- Note: Ledger uses closed-source firmware


## Recording Device Information

For each device, create a record card:

![](/img/multisig/record-card.webp)

**Important:** Store this record SEPARATELY from the seed phrases.


## Seed Phrase Backup

### Why Metal Backups Matter

Paper can be destroyed by:
- Fire
- Water/flooding
- Ink fading over time
- Accidental disposal

**Metal seed backups** survive these disasters.

### Recommended Metal Backup Options

<div class="fixed-width-table">

| Product | Type | Price Range |
|---------|------|-------------|
| Blockplate | Punch plates | $80-100 |
| Cryptosteel | Letter tiles | $80-100 |
| Seedplate | Stamp/punch | $50-80 |
| Billfodl | Letter tiles | $80-100 |

</div>

### Backup Process

1. Set up hardware wallet and verify seed works
2. Transfer seed to metal backup carefully
3. Verify metal backup by reading it back
4. Store metal backup in secure location (NOT with the device)

### Seed Backup Locations for 2-of-3

![](/img/multisig/seed-backup-locations.webp)

**Never store a seed phrase with its corresponding device!**


## Pre-Multisig Checklist

Before proceeding to create your multisig wallet, verify:

- [ ] All 3 devices are set up with unique seed phrases
- [ ] All 3 seed phrases are backed up on metal
- [ ] Each seed backup is in a different physical location
- [ ] You've recorded the master fingerprint for each device
- [ ] Each device has a unique PIN you can remember
- [ ] Firmware is up to date on all devices
- [ ] You've labeled each device (1, 2, 3) for easy identification

:::warning Double-Check Seeds
Before creating the multisig, verify each seed works:
1. Reset one device to factory
2. Restore from its seed backup
3. Confirm the fingerprint matches
4. Repeat for each device

This confirms your backups are correct BEFORE you deposit funds.
:::


## Next Steps

With your hardware wallets prepared:

→ Continue to [Sparrow Wallet Setup](/docs/advanced/multisig/sparrow-setup) to create your 2-of-3 multisig wallet.
