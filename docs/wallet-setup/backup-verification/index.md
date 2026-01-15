---
sidebar_position: 3
title: "How to Test Your Bitcoin Seed Backup (Before You Need It)"
description: "Learn how to properly verify your Bitcoin seed backup works before trusting it with significant funds. Step-by-step guide to testing your recovery process."
keywords: ["bitcoin", "seed backup", "verification", "recovery test", "self custody", "hardware wallet"]
tags: ["backup", "verification", "seed", "security", "self custody", "wallet setup"]
slug: /wallet-setup/backup-verification
---

<SectionBadge section="security" label="Wallet Setup Guide" />

# Backup Verification Guide

:::info What You'll Do
In this guide, you will:
- Understand why backup verification is critical
- Learn safe methods to test your backup
- Perform a complete recovery test
- Verify your backup without risking funds

**Time required:** 30-60 minutes  
**Difficulty:** Beginner  
**Estimated cost:** Free  
**Prerequisites:** A seed phrase backup to test
:::

:::danger Why This Matters
**Thousands of Bitcoin have been lost** because people assumed their backup was correct without testing it. A single wrong word, a smudged letter, or a misread character can make your backup useless.

**Test your backup BEFORE depositing significant funds.**
:::


## The Problem

Most people set up their wallet like this:

1. ✅ Generate seed phrase
2. ✅ Write down seed phrase
3. ✅ Device confirms words are correct
4. ❌ Assume backup works forever
5. 💀 Years later, need to recover... backup doesn't work

**What can go wrong:**
- Handwriting is illegible
- A word was misspelled
- Words are in wrong order
- Paper degraded or got wet
- Metal stamp is unclear
- Wrong word list was used
- Passphrase was forgotten


## The Solution: Test Your Recovery

The only way to **know** your backup works is to actually use it to recover your wallet. This guide shows you how to do this safely.


## Method 1: Recovery Test on the Same Device

The simplest method — reset your device and recover using your backup.

### When to Use This Method

- You have a hardware wallet
- You haven't deposited any funds yet
- You want to verify before your first deposit

### Step-by-Step Process

**1. Verify you have your seed backup ready**

Before doing anything, confirm you have your written seed phrase in hand.

**2. Check your wallet is empty**

Make sure there are no funds in the wallet. If there are funds, use Method 2 instead.

**3. Reset your device to factory settings**

Each device has a different process:

<div class="fixed-width-table">

| Device | How to Reset |
|--------|--------------|
| **Coldcard** | Settings → Danger Zone → Seed Functions → Destroy Seed |
| **Trezor** | Settings → Device → Factory Reset |
| **Ledger** | Settings → Security → Reset Device |
| **Keystone** | Settings → Wallet → Delete All Data |
| **BitBox02** | Device Settings → Reset Device |

</div>

**4. Recover using your seed backup**

- Start the device as if it were new
- Choose "Recover wallet" or "Import existing wallet"
- Enter your seed words exactly as written on your backup
- If you used a passphrase, enter that too

**5. Verify the recovery succeeded**

Connect to your wallet software and verify:
- The wallet loads correctly
- The first receive address matches what you had before

:::tip Pro Tip
Before resetting, write down your first receive address. After recovery, verify this address matches exactly. If it matches, your backup is correct.
:::


## Method 2: Recovery Test on a Different Device

More thorough — verify your backup works on independent hardware.

### When to Use This Method

- You already have funds in your wallet
- You want extra confidence
- You have access to a second device

### Step-by-Step Process

**1. Get a second device or use software wallet temporarily**

Options:
- A second hardware wallet (same or different brand)
- A software wallet on an air-gapped device (for testing only)
- Sparrow Wallet in watch-only mode + seed verification tool

**2. Recover on the second device**

Enter your seed phrase (and passphrase if applicable) on the second device.

**3. Compare addresses**

The recovered wallet should show the same addresses as your original:

```
VERIFICATION CHECK:
─────────────────────────────────────────────────────────
Original Wallet          Recovered Wallet
────────────────         ────────────────
First address:           First address:
bc1qxy2...abc     =?     bc1qxy2...abc

If they match → ✅ Backup is correct
If different → ❌ Something is wrong
```

**4. Delete the test wallet**

After verification, securely delete the recovered wallet from the second device:
- Factory reset hardware wallet, or
- Securely delete software wallet data


## Method 3: Address Verification (No Recovery Needed)

Verify your backup mathematically without fully recovering.

### When to Use This Method

- You want to verify without entering your seed anywhere
- You have technical comfort with command line
- You want to verify periodically without a full recovery

### Using Ian Coleman's BIP39 Tool (Offline)

:::warning Security Warning
Only use this tool on an **air-gapped computer** that will never connect to the internet. Never enter your real seed phrase on an internet-connected device.
:::

**1. Download the tool**

Download from: https://github.com/iancoleman/bip39

**2. Transfer to air-gapped computer**

Use a USB drive to move the HTML file to your offline computer.

**3. Open in browser (offline)**

Open the HTML file in a browser with NO internet connection.

**4. Enter your seed phrase**

Type your seed words into the tool.

**5. Compare derived addresses**

The tool shows addresses derived from your seed. Compare the first several with your actual wallet addresses.

**If they match** → Your seed backup is correct
**If they don't match** → Check for errors in your seed, passphrase, or derivation path


## Method 4: Using Sparrow Wallet's Verification

Sparrow Wallet can verify your backup matches your wallet.

### Step-by-Step Process

**1. Open Sparrow and connect your hardware wallet**

**2. Go to Settings → Keystore**

**3. Click "Test Backup..."**

**4. Enter your seed phrase**

Sparrow will verify the seed matches the connected wallet without exposing your keys.


## Verifying Passphrase Backups

If you use a passphrase (25th word), you must verify that too:

### The Challenge

A passphrase creates a **completely different wallet**. Even a tiny difference (capitalization, extra space) generates different addresses.

### Verification Process

1. Recover with seed phrase ONLY (no passphrase)
2. Note the first address — this is the "decoy" wallet
3. Now add your passphrase
4. Note the first address — this is your real wallet
5. Verify this matches your actual wallet

```
PASSPHRASE VERIFICATION:
─────────────────────────────────────────────────────────
Seed only:          seed + "MyPassphrase":
bc1q111...xxx       bc1q222...yyy
(decoy wallet)      (your real wallet)

Both should be derivable from your backup.
```

### Common Passphrase Mistakes

- Forgetting capitalization: "Bitcoin" ≠ "bitcoin"
- Extra spaces: "my phrase" ≠ "my phrase "
- Similar characters: "0" (zero) ≠ "O" (letter)
- Forgetting you used one at all


## How Often to Verify

<div class="fixed-width-table">

| Situation | Recommended Action |
|-----------|-------------------|
| New wallet setup | Verify immediately before depositing |
| After creating metal backup | Verify the metal backup specifically |
| Every 6-12 months | Quick verification that backup is readable |
| Before major life changes | Full recovery test |
| After any backup modification | Full verification |

</div>


## Signs Your Backup May Be Compromised

Perform a full recovery test if:

- Your backup was exposed to water, fire, or heat
- Paper is yellowing or ink is fading
- You can't read your handwriting clearly
- Metal stamps are unclear or corroded
- You found your backup wasn't stored securely
- You suspect someone may have seen it


## What If Verification Fails?

### If addresses don't match:

**1. Check for simple errors**
- Did you enter all words?
- Are words spelled correctly?
- Are words in the right order?
- Did you use the correct passphrase?
- Is the passphrase entered exactly right (caps, spaces)?

**2. Check derivation path**
Different wallet software may use different paths:
- BIP84 (bc1q...): `m/84'/0'/0'` — Most common for SegWit
- BIP49 (3...): `m/49'/0'/0'` — Older SegWit
- BIP44 (1...): `m/44'/0'/0'` — Legacy

**3. Check word list**
Make sure you're using the English BIP39 word list. Other languages have different words.

### If you find an error:

**1. Don't panic**
Your original wallet still works. The error is in your backup, not your wallet.

**2. Create a new backup**
While your wallet is still accessible:
- Display the seed phrase on your hardware wallet
- Create a fresh, correct backup
- Verify the new backup immediately

**3. Consider creating a new wallet**
If your backup was wrong, it may have been compromised. Consider:
- Generating a new seed
- Moving funds to the new wallet
- Properly backing up the new seed


## Backup Verification Checklist

Before trusting your backup with significant funds:

- [ ] Seed phrase is readable and legible
- [ ] All 12/24 words are present
- [ ] Words are spelled correctly
- [ ] Words are in correct order
- [ ] Successfully recovered wallet on test device
- [ ] First receive address matches original wallet
- [ ] Passphrase verified (if applicable)
- [ ] Backup stored securely after verification


## Summary

**Verification is not optional** — it's a critical part of self-custody.

The process is simple:
1. Reset or use a second device
2. Recover using only your backup
3. Confirm addresses match
4. Repeat periodically

Taking 30 minutes to verify your backup can save you from losing everything.

<NextSteps 
  title="Complete Your Setup"
  items={[
    { 
      label: "Final Step", 
      title: "Before You Deposit", 
      href: "/docs/learn/fundamentals/before-you-deposit/", 
      description: "Complete checklist before moving significant funds to your wallet" 
    },
    { 
      label: "Enhance Security", 
      title: "Run Your Own Node", 
      href: "/docs/bitcoin-node/", 
      description: "Verify transactions yourself for maximum privacy and security" 
    },
    { 
      label: "Advanced", 
      title: "Consider Multisig", 
      href: "/docs/advanced/multisig/", 
      description: "Eliminate single points of failure for significant holdings" 
    }
  ]}
/>
