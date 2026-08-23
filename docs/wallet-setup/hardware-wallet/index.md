---
sidebar_position: 2
title: "Hardware Wallet Setup: Step-by-Step Bitcoin Security Guide"
description: "Step-by-step guide to setting up your first hardware wallet. Learn how to initialize, secure, and use a hardware wallet for Bitcoin self-custody."
keywords: ["hardware wallet", "bitcoin", "self custody", "coldcard", "trezor", "ledger", "keystone", "setup guide"]
tags: ["hardware wallet", "self custody", "bitcoin", "security", "wallet setup"]
slug: /wallet-setup/hardware-wallet
---

# Hardware Wallet Setup Guide

:::info What You'll Do
In this guide, you will:
- Choose the right hardware wallet for your needs
- Initialize your device securely
- Generate or import a seed phrase
- Verify your backup works
- Connect to wallet software
- Receive and send your first transaction

**Time required:** 1-2 hours  
**Difficulty:** Beginner to Intermediate  
**Estimated cost:** $70-250 (hardware wallet)  
**Prerequisites:** None - this is a beginner guide
:::

:::tip Why This Matters
A hardware wallet is the foundation of secure Bitcoin self-custody. Unlike software wallets, your private keys never touch an internet-connected device, protecting you from malware, hackers, and remote attacks.
:::

## What is a Hardware Wallet?

A hardware wallet is a dedicated physical device designed to store your Bitcoin private keys securely. Think of it as a personal vault that:

- **Generates keys offline**: Your seed phrase is created inside the device
- **Stores keys in isolation**: Keys never leave the secure chip
- **Signs transactions internally** (your computer never sees your private key)
- **Verifies on its own screen**: Confirm addresses without trusting your computer

<div class="doc-diagram">

![Sending from a hardware wallet: the software creates the transaction, the device screen shows the real recipient and the 1,500 sat fee, you press confirm on the device and it signs, then the software broadcasts; malware can redraw a monitor but not the device screen](/img/diagrams/wallet-setup/hw-signing.svg)

</div>

## Choosing Your Hardware Wallet

### Comparison of Popular Options (August 2026)

<div class="fixed-width-table">

| Device | Price | Best For | Key Features |
|--------|-------|----------|--------------|
| **BitBox02 Nova** | ~$185 | Beginners, simplicity | Secure element, Bitcoin-only edition, dice entropy |
| **Trezor Safe 5** | $169 | Beginners | Secure element, open source, dice entropy |
| **Trezor Safe 7** | $249 | Transparency + UX | Auditable secure element, touchscreen |
| **Blockstream Jade** | $79 | Budget | Open source, QR air-gap capable, dice entropy |
| **Jade Plus** | $149 | Verifiable security | QR air-gap, anti-exfil signing, multi-source entropy |
| **Passport Prime** | $556 | Premium air-gap | QR air-gap, entropy-testing app, Bitcoin-only |
| **Keystone 3 Pro** | $149 | QR workflow, mobile | Air-gapped via QR, large screen, 3 secure elements |
| **[SeedSigner](/docs/seedsigner/) / Krux** | ~$50–80 | DIY builders | Stateless, you supply all entropy |

</div>

See the full [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) for detailed trade-offs, including why two familiar names are missing from this table.

### My Recommendations

**For beginners:** BitBox02 Nova (Bitcoin-only) or Trezor Safe 5
- Easy to use, good security, dice-roll support for later

**For verifiable security:** Jade Plus or Passport Prime
- Air-gapped workflows from vendors with strong entropy practices and crisis track records

**For DIY builders:** [SeedSigner](/docs/seedsigner/) (our favourite; see the [build guide](/docs/seedsigner/build-guide/)) or Krux
- Stateless devices where every bit of entropy is yours by construction

:::warning About Coldcard and Ledger
**Coldcard** was our security pick for years, until the [2026 entropy incident](/docs/learn/wallets/coldcard-entropy-incident/): a five-year firmware flaw made device-generated seeds guessable and ~$116M was stolen. The flaw is patched and dice-generated seeds were never affected, but a warning about this exact code was dismissed in 2025, so we're not recommending new purchases until trust is rebuilt. Existing owners: [check if you're affected](/docs/learn/wallets/coldcard-entropy-incident/#am-i-affected).

**Ledger** devices use closed-source secure-element firmware that cannot be independently audited. After 2026, unverifiable randomness is a bigger ask than ever.
:::

## Before You Begin

### Security Checklist

Before setting up your hardware wallet:

- [ ] **Buy from official sources only**: Never buy used or from third-party sellers
- [ ] **Check the packaging** (look for signs of tampering)
- [ ] **Verify the device**: Most wallets have authenticity checks
- [ ] **Prepare a secure environment**: Private location, no cameras
- [ ] **Have backup materials ready** (metal plate or paper for seed phrase)
- [ ] **Clear your schedule**: Don't rush this process

### What You'll Need

<div class="fixed-width-table">

| Item | Purpose |
|------|---------|
| Hardware wallet | Your new device |
| Computer or phone | To run wallet software |
| USB cable | To connect device (included with most) |
| Seed backup material | Metal plate recommended, paper acceptable |
| Pen (not pencil) | For writing seed words |
| 15-30 minutes of privacy | Uninterrupted setup time |

</div>

## General Setup Process

While each device has specific steps, the general process is similar:

### Step 1: Verify Authenticity

Before powering on, check that your device is genuine:

- **Packaging intact**: No signs of opening or resealing
- **Holographic seals**: If present, should be unbroken
- **Device verification** (run manufacturer's authenticity check)

### Step 2: Initialize the Device

Power on and follow the device prompts:

1. Select language and region
2. Accept terms (read them!)
3. **Update to the latest firmware** and skim the vendor's security advisories page: the 2026 Coldcard incident hit seeds generated on outdated, flawed firmware
4. Set a PIN code
5. Choose whether to create new wallet or restore existing

### Step 3: Generate Your Seed Phrase

This is the moment that decides how much you're trusting the manufacturer. When the device generates a seed by itself, you're trusting its random number generator completely, and in 2026 [that trust failed publicly](/docs/learn/wallets/coldcard-entropy-incident/) for the first time at nine-figure scale. Pick your path deliberately:

**Path A: device-generated (acceptable for starter amounts)**

The device will display 12 or 24 words one at a time. If you take this path, plan to add a [passphrase](/docs/learn/keys/passphrase/) so your funds never rest on the device's randomness alone.

**Path B: with your own entropy (recommended)**

Use the device's **dice-roll option** during setup: 99 rolls of a casino die fully covers a 24-word seed even if the device's generator is broken. Or go further and [generate the seed entirely yourself](/docs/learn/keys/random/), then import it: maximum trust minimization, and every step checkable.

:::danger Critical Steps (both paths)
1. **Write down every word**: In exact order, spelled correctly
2. **Verify you wrote them correctly**: Device will quiz you
3. **Never photograph your seed** (digital copies are vulnerable)
4. **Never type your seed into a computer**: Except the hardware wallet itself
:::

:::warning Firmware updates can't fix a weak seed
If a seed was generated by flawed firmware, updating the firmware later does nothing for it; the seed is already weak. That's why affected Coldcard users had to migrate to new wallets entirely. Generate your seed on current firmware, ideally with your own entropy, and you'll never face that migration.
:::

### Step 4: Verify Your Backup

Most devices will test that you wrote down your seed correctly:

1. Device asks you to confirm specific words
2. Enter the requested words using the device
3. Device confirms backup is correct

**This is not enough!** See our [Backup Verification Guide](/docs/wallet-setup/backup-verification) for proper testing.

### Step 5: Set Up Wallet Software

Your hardware wallet needs companion software to:

- View your balance
- Create transactions
- Manage addresses

**Recommended software:**

<div class="fixed-width-table">

| Software | Platform | Best With |
|----------|----------|-----------|
| **Sparrow Wallet** | Desktop | Any hardware wallet |
| **Trezor Suite** | Desktop/Web | Trezor devices |
| **Ledger Live** | Desktop/Mobile | Ledger devices |
| **BlueWallet** | Mobile | Coldcard, others |
| **Nunchuk** | Desktop/Mobile | Any hardware wallet |

</div>

**We recommend Sparrow Wallet** for most users. It works with all major hardware wallets and offers advanced features like coin control.

### Step 6: Connect and Verify

1. Connect your hardware wallet to your computer
2. Open your wallet software
3. Add your hardware wallet as a new device
4. **Verify the receive address matches on both screens**

:::warning Always Verify Addresses
Before receiving Bitcoin, confirm the address shown in your software matches what's displayed on your hardware wallet screen. Malware can show you fake addresses.
:::

## Your First Transaction

### Receiving Bitcoin

1. Open your wallet software
2. Click "Receive" to generate an address
3. **Verify the address on your hardware wallet screen**
4. Share the address with the sender
5. Wait for confirmation (1+ blocks for security)

### Sending Bitcoin

1. Create a transaction in your wallet software
2. Enter recipient address and amount
3. Review the transaction on your hardware wallet:
   - Verify the recipient address
   - Verify the amount
   - Check the fee
4. Approve on the device
5. Software broadcasts the signed transaction

## Common Mistakes to Avoid

### ❌ Storing Seed Digitally

Never store your seed phrase:
- In a photo
- In a notes app
- In cloud storage
- In a password manager
- In an email

### ❌ Using a Weak PIN

Avoid PINs like:
- 1234, 0000, 1111
- Birthdays
- Repeated numbers

Use a random PIN you can remember, or write it down separately from your seed.

### ❌ Not Testing Your Backup

Many people lose Bitcoin because their backup was wrong. Always verify your backup works before depositing significant funds. See our [Backup Verification Guide](/docs/wallet-setup/backup-verification).

### ❌ Trusting Your Computer Screen

Malware can display fake addresses on your computer. **Always verify addresses on your hardware wallet screen** before sending or receiving.

### ❌ Buying from Unofficial Sources

Pre-compromised devices have been sold on eBay and Amazon. Only buy directly from manufacturers or authorized resellers.

## Passphrase (Optional Advanced Feature)

A passphrase (sometimes called the "25th word") adds extra security:

- Creates a completely separate wallet
- Protects against physical theft of your seed backup
- Requires both seed AND passphrase to access funds

:::danger Passphrase Risks
- **If you forget your passphrase, your Bitcoin is gone forever**
- Even a single character difference creates a different wallet
- You must back up your passphrase separately from your seed

Only use a passphrase if you fully understand the risks. See [DIY Passphrase Guide](/docs/learn/keys/passphrase) for details.
:::

## Next Steps

Now that your hardware wallet is set up:

1. **[Verify Your Backup](/docs/wallet-setup/backup-verification)**: Test that your seed backup actually works
2. **Start small**: Receive a small amount first to test the process
3. **[Run Your Own Node](/docs/bitcoin-node)** (connect to your own node for privacy)
4. **[Learn UTXO Management](/docs/learn/privacy/utxo-management)**: Manage your coins effectively
5. **Consider [Multisig](/docs/learn/wallets/multisig)**: For significant holdings

<NextSteps 
  title="Continue Your Setup"
  items={[
    { 
      label: "Next Step", 
      title: "Verify Your Backup", 
      href: "/docs/wallet-setup/backup-verification/", 
      description: "Critical: Test that your seed backup actually works before trusting it with funds" 
    },
    { 
      label: "Then", 
      title: "Before You Deposit", 
      href: "/docs/wallet-setup/before-you-deposit/", 
      description: "Final checklist before moving significant Bitcoin to your wallet" 
    },
    { 
      label: "Learn More", 
      title: "Hardware Wallets Explained", 
      href: "/docs/learn/wallets/hardware-wallets/", 
      description: "Understand the theory behind how hardware wallets keep you safe" 
    }
  ]}
/>
