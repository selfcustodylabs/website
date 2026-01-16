---
sidebar_position: 3
title: "Before You Deposit: Critical Checklist"
description: "Essential verification steps before sending Bitcoin to any new wallet. This checklist can save you from catastrophic, irreversible mistakes."
keywords: ["bitcoin checklist", "before deposit", "verify wallet", "self custody safety", "bitcoin security"]
tags: ["checklist", "security", "self custody", "safety"]
slug: /wallet-setup/before-you-deposit
---

<SectionBadge section="wallet-setup" label="Final Checklist" />

# Before You Deposit: Critical Checklist

<ProgressIndicator current={3} total={3} title="Wallet Setup Journey" />

:::danger Stop and Read This
This page exists because people have lost Bitcoin by skipping these steps.

Every item below addresses a real failure mode. **Do not skip any step.**

If you're impatient, Bitcoin self-custody is not for you yet. Slow down.
:::

## Why This Checklist Exists

Moving Bitcoin to a new wallet is **irreversible**. If anything is wrong with your setup:

- Wrong seed backup → Funds lost forever
- Compromised device → Funds stolen
- Wrong address type → Recovery may be impossible
- Untested backup → False sense of security

This checklist ensures you've verified everything *before* it matters.


## The Pre-Deposit Checklist

Complete every item before depositing significant funds.

### ✅ Seed Phrase Verification

- [ ] **I have written down my seed phrase physically** (paper or metal)
- [ ] **I have verified every word is spelled correctly** (check against [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt))
- [ ] **I have verified the words are in the correct order**
- [ ] **My seed phrase has never been:**
  - Photographed
  - Typed into a computer (except hardware wallet)
  - Stored in a notes app, cloud service, or password manager
  - Spoken aloud or sent via any messaging app
  - Shown to anyone else

### ✅ Backup Recovery Test

:::danger Most Critical Step
If you skip only one thing (don't), don't skip this one. More Bitcoin has been lost to untested backups than to hackers.
:::

- [ ] **I have performed a full recovery test** using my written backup
  - Reset device OR use a second device
  - Restored wallet using only my physical backup
  - Verified the first receive address matches my original wallet
  
→ See [Backup Verification Guide](/docs/wallet-setup/backup-verification/) for detailed instructions

### ✅ Passphrase Verification (If Used)

If you're using a passphrase (25th word):

- [ ] **I understand a passphrase creates a completely different wallet**
- [ ] **I have backed up my passphrase separately from my seed**
- [ ] **I have tested recovery with seed + passphrase**
- [ ] **I have verified the passphrase wallet shows different addresses than the seed-only wallet**
- [ ] **I understand that forgetting my passphrase = losing my Bitcoin forever**

### ✅ Receive Address Verification

- [ ] **I have generated a receive address in my wallet software**
- [ ] **I have verified this address on my hardware wallet screen**
  - The address shown on my computer matches exactly what my device displays
  - I checked character-by-character (at least first 8 and last 8 characters)
- [ ] **I understand why this matters:** Malware can show fake addresses on your computer screen. Your hardware wallet cannot be fooled.

### ✅ Device Security

- [ ] **My hardware wallet was purchased directly from the manufacturer** (not Amazon, eBay, or third-party sellers)
- [ ] **The packaging showed no signs of tampering** when I received it
- [ ] **I ran the manufacturer's authenticity verification** (if available)
- [ ] **My device firmware is up to date** (verified on manufacturer's website)
- [ ] **I set a strong PIN** that I can remember but others cannot guess

### ✅ Wallet Software Security

- [ ] **I downloaded wallet software from official sources only**
  - Sparrow: https://sparrowwallet.com
  - Electrum: https://electrum.org
  - Manufacturer software: from their official website
- [ ] **I verified the download signature** (if technically able)
- [ ] **My computer is reasonably secure:**
  - Operating system is up to date
  - No suspicious software installed
  - Not a public or shared computer

### ✅ Test Transaction

Before sending significant funds:

- [ ] **I have sent a small test amount** (enough to verify, not enough to hurt if lost)
- [ ] **I have verified the transaction arrived** in my wallet
- [ ] **I have successfully sent a transaction** from this wallet
- [ ] **I understand the fee structure** and how to set appropriate fees


## The Mental Checklist

Beyond technical verification, ask yourself:

### Do I Understand What I'm Doing?

- [ ] I can explain what a seed phrase is in my own words
- [ ] I understand that my seed phrase IS my Bitcoin (not the device)
- [ ] I understand that if I lose my seed phrase, no one can help me recover
- [ ] I understand that if someone else sees my seed phrase, they can take everything

### Am I Prepared for Responsibility?

- [ ] I have a plan for where my backup is stored
- [ ] I have considered fire, flood, theft, and other disaster scenarios
- [ ] I have thought about what happens if I die (inheritance planning)
- [ ] I am comfortable being my own bank

### Am I Moving Too Fast?

- [ ] I am not rushing because of market FOMO
- [ ] I have taken at least 24 hours between setup and significant deposit
- [ ] I have read through this entire checklist, not just skimmed it


## Red Flags: Stop If...

🚩 **Do NOT deposit if any of these apply:**

- You're not 100% sure you wrote down the seed correctly
- You haven't tested recovery
- Your hardware wallet came from an unofficial source
- Someone else has seen your seed phrase
- You're feeling rushed or pressured
- Something "feels off" about your setup
- You're doing this on a compromised or untrusted computer

**It's better to delay than to lose everything.**


## After You Deposit

Once funds are in your wallet:

1. **Verify the transaction confirmed** (at least 1 confirmation, 6 for certainty)
2. **Record the transaction** for your own records
3. **Do NOT share:**
   - Your receive address publicly (address reuse = privacy leak)
   - Screenshots showing your balance
   - That you own Bitcoin at all (for physical security)


## What If Something Goes Wrong?

### "I sent to the wrong address"

Unfortunately, Bitcoin transactions are irreversible. If you sent to an address you don't control, those funds are likely gone. This is why we verify addresses before sending.

### "I can't remember my passphrase"

If you used a passphrase and cannot remember it exactly:
- Your seed phrase without the passphrase controls a different (empty) wallet
- There is no recovery mechanism
- This is why we test passphrases before depositing

### "I lost my seed phrase"

If your device still works, you can:
1. Move funds to a NEW wallet with a NEW seed
2. Properly back up the new seed
3. Test the new backup

If your device is also lost/broken, those funds are unrecoverable.

### "Someone saw my seed phrase"

Assume compromise. Immediately:
1. Create a new wallet with a new seed
2. Transfer all funds to the new wallet
3. The old seed should never be used again


## Summary

This checklist exists because self-custody is serious. The freedom and security it provides comes with real responsibility.

**Complete the checklist. Test your backup. Verify everything.**

Then—and only then—are you ready to truly own your Bitcoin.

:::tip 🎉 Congratulations!
If you've completed this checklist, you've finished the core wallet setup journey. You now have a secure hardware wallet with a verified backup. Welcome to true Bitcoin ownership!
:::

<NextSteps 
  title="What's Next?"
  items={[
    { 
      label: "Recommended", 
      title: "Run Your Own Node", 
      href: "/docs/bitcoin-node/", 
      description: "Verify transactions yourself—the ultimate step in sovereignty" 
    },
    { 
      label: "Privacy", 
      title: "UTXO Management", 
      href: "/docs/privacy/utxo-management/", 
      description: "Learn to manage your coins for better privacy and lower fees" 
    },
    { 
      label: "Advanced", 
      title: "Multisig Setup", 
      href: "/docs/advanced/multisig/", 
      description: "Eliminate single points of failure for significant holdings" 
    },
    { 
      label: "Learn More", 
      title: "Why Privacy Matters", 
      href: "/docs/learn/privacy/why-privacy-matters/", 
      description: "Understand what's exposed on the blockchain and how to protect yourself" 
    }
  ]}
/>
