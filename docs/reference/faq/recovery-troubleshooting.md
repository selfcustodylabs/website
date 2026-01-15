---
sidebar_position: 3
title: "Wallet Recovery Troubleshooting"
description: "Common problems when recovering a Bitcoin wallet and how to solve them. Empty wallet after recovery, wrong addresses, and other troubleshooting steps."
keywords: ["wallet recovery", "bitcoin recovery", "empty wallet", "wrong addresses", "derivation path", "troubleshooting"]
tags: ["recovery", "troubleshooting", "wallet", "faq"]
slug: /reference/faq/recovery-troubleshooting
---

<SectionBadge section="reference" label="Troubleshooting" />

# Wallet Recovery Troubleshooting

Recovering a Bitcoin wallet should be straightforward, but things can go wrong. This guide covers the most common problems and their solutions.

:::danger Before You Panic
Most "missing" Bitcoin isn't actually lost—it's usually a configuration issue. Work through this guide systematically before assuming the worst.
:::


## Problem: Wallet Shows Zero Balance After Recovery

This is the most common recovery issue. You enter your seed phrase correctly, but the wallet shows zero balance.

### Cause 1: Wrong Derivation Path

Different wallet software uses different derivation paths. If you recover with the wrong path, you'll see different (empty) addresses.

**Solution:**

1. **Check your original wallet's derivation path**
   - BIP44 (Legacy): `m/44'/0'/0'` — Addresses start with `1`
   - BIP49 (Nested SegWit): `m/49'/0'/0'` — Addresses start with `3`
   - BIP84 (Native SegWit): `m/84'/0'/0'` — Addresses start with `bc1q`
   - BIP86 (Taproot): `m/86'/0'/0'` — Addresses start with `bc1p`

2. **In Sparrow Wallet:**
   - File → New Wallet
   - Enter your seed
   - Choose "Native SegWit" if your addresses started with `bc1q`
   - If still empty, try other script types

3. **Common wallet defaults:**
   | Wallet | Default Path |
   |--------|--------------|
   | Ledger Live | BIP84 (bc1q) |
   | Trezor Suite | BIP84 (bc1q) |
   | Electrum | BIP84 (bc1q) |
   | Older wallets | BIP44 (Legacy) |

### Cause 2: Passphrase Required

If you set up a passphrase (25th word), the wallet will be empty without it.

**Solution:**
- Re-enter recovery with passphrase enabled
- In Sparrow: Check "Use passphrase" during wallet creation
- Try variations if you're unsure of exact passphrase

:::warning Case Sensitivity
Passphrases are case-sensitive. `MyPassphrase` and `mypassphrase` create different wallets.
:::

### Cause 3: Wrong Seed Phrase

Even one wrong word creates a completely different (empty) wallet.

**Solution:**
- Double-check each word against the [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
- Common mistakes:
  - `advice` vs `advise`
  - `letter` vs `latter`
  - `affect` vs `effect`
- Try reading from your backup again, carefully

### Cause 4: Not Enough Addresses Scanned

Wallets only check a certain number of addresses. If you used many addresses with gaps, funds might not be found.

**Solution:**
- Increase the "gap limit" in your wallet software
- In Sparrow: Wallet → Settings → Script Type → Increase gap limit
- Try scanning 100+ addresses


## Problem: Different Addresses Than Expected

You recover successfully but the addresses don't match what you had before.

### Check Script Type

Native SegWit vs Legacy vs Taproot:

| Your Old Addresses Started With | Script Type to Select |
|--------------------------------|----------------------|
| `1` | Legacy (P2PKH) |
| `3` | Nested SegWit (P2SH-P2WPKH) |
| `bc1q` | Native SegWit (P2WPKH) |
| `bc1p` | Taproot (P2TR) |

### Check Account Number

Some wallets use multiple accounts under the same seed:
- Account 0: `m/84'/0'/0'`
- Account 1: `m/84'/0'/1'`
- Account 2: `m/84'/0'/2'`

If you used Account 1, recovering with Account 0 shows different addresses.

**Solution in Sparrow:**
1. When importing, click "Show Advanced"
2. Change the account number in the derivation path


## Problem: Recovery Fails Completely

The wallet software rejects your seed phrase.

### Invalid Checksum

If any word is wrong, the checksum fails.

**Solution:**
- Verify each word exists in BIP39 word list
- Check for similar words (see common mistakes above)
- Ensure you have the correct number of words (12, 15, 18, 21, or 24)

### Wrong Word List Language

BIP39 has word lists in multiple languages (English, Spanish, Japanese, etc.). You must use the same language.

**Solution:**
- Most wallets use English
- If you created with non-English wallet, find matching word list


## Problem: Only Some Funds Recovered

You recovered some Bitcoin but not all of it.

### Multiple Address Types

You may have received Bitcoin to different address types:
- Some to Legacy addresses (start with `1`)
- Some to SegWit addresses (start with `bc1q`)

**Solution:**
1. In Sparrow, create multiple wallets from same seed
2. One with Legacy script type
3. One with Native SegWit
4. Check balances in each

### Multiple Accounts

Similar to above, funds may be in different accounts.

**Solution:**
- Create wallets with account numbers 0, 1, 2
- Check each for balances

### Unconfirmed Transactions

Funds from unconfirmed transactions won't appear until confirmed.

**Solution:**
- Wait for confirmation
- Check transaction status on mempool.space


## Problem: Hardware Wallet Shows Different Address

Your hardware wallet shows a different address than your software wallet.

### Verification Mismatch

This is a **critical security issue**. Never send to an address your hardware wallet doesn't display.

**Possible causes:**
1. Malware modified the address in software
2. Wrong derivation path in software
3. Hardware wallet has different seed than expected

**Solution:**
1. Verify you're using the correct wallet file
2. Check derivation paths match
3. Re-pair hardware wallet with software
4. If still mismatched, DO NOT TRANSACT until resolved


## Problem: Multisig Recovery Issues

Multisig wallets are more complex to recover.

### Missing Wallet Descriptor

You need more than just seed phrases for multisig recovery:
- All participating public keys (xpubs)
- The wallet descriptor or configuration file
- Knowledge of M-of-N setup (e.g., 2-of-3)

**Solution:**
- Locate your backup of the wallet descriptor
- In Sparrow, you can import via File → Import Wallet → Descriptor

### Wrong Cosigner Order

Multisig addresses depend on key ordering. Different order = different addresses.

**Solution:**
- Import using original wallet descriptor
- If manually recreating, match exact order of cosigners


## Systematic Recovery Checklist

If you're stuck, work through this systematically:

- [ ] Verify seed phrase words against BIP39 list
- [ ] Check for passphrase requirement
- [ ] Try different script types (Legacy, SegWit, Taproot)
- [ ] Try different account numbers (0, 1, 2)
- [ ] Increase address gap limit to 100+
- [ ] Check multiple derivation paths
- [ ] Verify with a different wallet software
- [ ] If multisig, locate wallet descriptor

## When to Seek Professional Help

Consider professional assistance if:
- You've exhausted all troubleshooting steps
- Significant funds are at stake
- You suspect hardware wallet malfunction
- You have partial seed phrase (some words missing)

:::danger Recovery Scams
Most "Bitcoin recovery services" are scams. See our [Recovery Scams](/docs/reference/faq/recovery-scams) guide before contacting anyone. Never share your seed phrase with "helpers."
:::


## Prevention for the Future

Avoid recovery problems by:

1. **Document everything**
   - Which wallet software you used
   - Which derivation path
   - Whether you used a passphrase
   - Which script type (address format)

2. **Test your backup**
   - [Verify your backup works](/docs/wallet-setup/backup-verification) before trusting it

3. **Keep wallet descriptor backups**
   - Especially for multisig setups

4. **Use standard settings**
   - Stick to defaults when possible
   - BIP84 (Native SegWit) is the current standard

<NextSteps 
  title="Related Help"
  items={[
    { 
      label: "Guide", 
      title: "Backup Verification", 
      href: "/docs/wallet-setup/backup-verification/", 
      description: "How to properly test your backup before you need it" 
    },
    { 
      label: "Warning", 
      title: "Recovery Scams", 
      href: "/docs/reference/faq/recovery-scams/", 
      description: "How to avoid scammers targeting people with lost Bitcoin" 
    },
    { 
      label: "FAQ", 
      title: "Lost Seed Phrase", 
      href: "/docs/reference/faq/lost-seed/", 
      description: "What to do if you've actually lost your seed phrase" 
    }
  ]}
/>
