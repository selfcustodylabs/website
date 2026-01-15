---
sidebar_position: 3
title: "Bitcoin Address Types Explained"
description: "Understand the different Bitcoin address types: Legacy, SegWit, Native SegWit, and Taproot. Learn which to use and why it matters for fees and compatibility."
keywords: ["bitcoin address", "segwit", "taproot", "legacy", "bech32", "address types", "bc1", "P2PKH", "P2SH", "P2WPKH", "P2TR"]
tags: ["bitcoin", "addresses", "segwit", "taproot", "reference"]
slug: /reference/address-types
---

# Bitcoin Address Types Explained

If you've used Bitcoin, you've noticed addresses can look very different:

- `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` (starts with 1)
- `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy` (starts with 3)  
- `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq` (starts with bc1q)
- `bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297` (starts with bc1p)

These aren't random — each format represents a different **address type** with different properties. Understanding them helps you save on fees and avoid compatibility issues.

---

## The Four Address Types

<div class="fixed-width-table">

| Type | Prefix | Name | Year | Status |
|------|--------|------|------|--------|
| Legacy | `1...` | P2PKH | 2009 | Outdated |
| Script | `3...` | P2SH / P2SH-P2WPKH | 2012 | Transitional |
| Native SegWit | `bc1q...` | P2WPKH / Bech32 | 2017 | **Recommended** |
| Taproot | `bc1p...` | P2TR / Bech32m | 2021 | Newest |

</div>

---

## Legacy Addresses (P2PKH)

**Starts with:** `1`  
**Example:** `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

### What It Is

The original Bitcoin address format from 2009. "P2PKH" stands for "Pay to Public Key Hash."

### Pros
- Universal compatibility — every wallet and exchange supports it
- Battle-tested since Bitcoin's beginning

### Cons
- **Highest fees** — transactions are larger in bytes
- No SegWit benefits
- Considered outdated

### When to Use
Only if you're sending to an old wallet or service that doesn't support newer formats. Otherwise, avoid.

---

## Script Addresses (P2SH / Nested SegWit)

**Starts with:** `3`  
**Example:** `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

### What It Is

Introduced in 2012 for advanced scripts (like multisig). Later repurposed as "wrapped" or "nested" SegWit — a way to get SegWit benefits while maintaining compatibility with older systems.

### Pros
- Good compatibility with older exchanges
- Lower fees than Legacy
- SegWit benefits (when using P2SH-P2WPKH)

### Cons
- Not as efficient as Native SegWit
- Can be confusing (P2SH is used for both multisig and wrapped SegWit)

### When to Use
Useful if an exchange or wallet doesn't support `bc1` addresses (increasingly rare). Otherwise, prefer Native SegWit.

---

## Native SegWit (P2WPKH / Bech32)

**Starts with:** `bc1q`  
**Example:** `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`

### What It Is

The "native" SegWit format introduced in 2017. Uses Bech32 encoding (lowercase, no ambiguous characters). "P2WPKH" stands for "Pay to Witness Public Key Hash."

### Pros
- **Lowest fees** (smallest transaction size for standard payments)
- Better error detection (Bech32 has built-in checksums)
- No mixed case confusion (all lowercase)
- Widely supported by most wallets and exchanges

### Cons
- Some older services still don't support it (rare now)
- Longer addresses than Legacy

### When to Use
**This should be your default for everyday use.** Best balance of low fees and compatibility.

---

## Taproot (P2TR / Bech32m)

**Starts with:** `bc1p`  
**Example:** `bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297`

### What It Is

The newest address type, activated in November 2021. Uses Schnorr signatures and enables advanced smart contracts while improving privacy.

### Pros
- **Best privacy** — multisig and single-sig look identical on-chain
- Advanced scripting capabilities
- Slightly smaller signatures than SegWit
- Future-proof for Bitcoin development

### Cons
- Not universally supported yet (but growing fast)
- Some exchanges still don't allow withdrawals to `bc1p`
- Minimal fee savings over Native SegWit for simple transactions

### When to Use
If your wallet supports it and you're sending to/from Taproot-compatible services. Especially valuable for multisig setups where privacy matters.

---

## Fee Comparison

Transaction size (and thus fees) varies by address type. Smaller = cheaper.

<div class="fixed-width-table">

| Sending From | Approx. Size | Relative Fee |
|--------------|--------------|--------------|
| Legacy (P2PKH) | 148 vbytes | 100% (baseline) |
| Nested SegWit (P2SH) | 91 vbytes | ~61% |
| Native SegWit (P2WPKH) | 68 vbytes | ~46% |
| Taproot (P2TR) | 57 vbytes | ~39% |

</div>

**Using Native SegWit instead of Legacy saves you ~54% on fees.**

*Note: These are for simple single-input transactions. Complex transactions vary.*

---

## Visual Recognition Guide

```
ADDRESS TYPE QUICK REFERENCE:
─────────────────────────────────────────────────────────

1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
↑
Starts with "1" = LEGACY (P2PKH)
Higher fees, outdated but universal


3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy
↑
Starts with "3" = SCRIPT (P2SH)
Could be multisig or wrapped SegWit


bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
↑↑↑↑
Starts with "bc1q" = NATIVE SEGWIT (P2WPKH)
Low fees, recommended for most use


bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8
↑↑↑↑
Starts with "bc1p" = TAPROOT (P2TR)
Newest, best privacy, growing support
```

---

## Which Should You Use?

### For Most People: Native SegWit (bc1q...)

**Use Native SegWit as your default.** It offers:
- Lowest practical fees
- Wide compatibility
- Proven reliability since 2017

### For Privacy-Focused Users: Taproot (bc1p...)

If your wallet supports Taproot and you're transacting with Taproot-compatible services:
- Better privacy (especially for multisig)
- Slightly lower fees
- Future-proof

### Avoid: Legacy (1...)

Only use Legacy addresses if absolutely required for compatibility. You're paying ~2x the fees for no benefit.

---

## Wallet Support

Most modern wallets support all address types. Here's what they typically default to:

<div class="fixed-width-table">

| Wallet | Default Address Type |
|--------|---------------------|
| Sparrow | Native SegWit (bc1q) — configurable |
| Electrum | Native SegWit (bc1q) — configurable |
| Trezor Suite | Native SegWit (bc1q) |
| Ledger Live | Native SegWit (bc1q) |
| Coldcard | Native SegWit (bc1q) — configurable |
| BlueWallet | Native SegWit (bc1q) |

</div>

You can usually change the address type in wallet settings if needed.

---

## Derivation Paths

Each address type uses a different **derivation path** — the recipe for generating addresses from your seed phrase.

<div class="fixed-width-table">

| Address Type | Derivation Path | BIP Standard |
|--------------|-----------------|--------------|
| Legacy | `m/44'/0'/0'` | BIP44 |
| Nested SegWit | `m/49'/0'/0'` | BIP49 |
| Native SegWit | `m/84'/0'/0'` | BIP84 |
| Taproot | `m/86'/0'/0'` | BIP86 |

</div>

**Why this matters:** When recovering a wallet, you need to use the same derivation path to see your funds. Most wallets handle this automatically, but it's good to know.

---

## Common Questions

### Can I send between different address types?

**Yes.** You can send from any address type to any other. The network doesn't care — it's all Bitcoin.

### Why do I see different addresses in my wallet?

Wallets generate new addresses for privacy. Each receive address is unique, but they're all derived from your seed phrase and all belong to you.

### An exchange won't let me withdraw to bc1...

Some older exchanges don't support Bech32 (bc1) addresses. Options:
1. Use a different exchange
2. Withdraw to a Legacy (1...) or Script (3...) address temporarily
3. Contact their support — they should upgrade

### Does address type affect security?

Not directly. All types are secure. The differences are in fees, features, and compatibility.

### I recovered my wallet but balance shows zero?

You might be on the wrong derivation path. Try:
1. Check if your wallet is set to the correct address type
2. In Sparrow/Electrum, try different script types
3. Your funds are safe — you just need to find the right path

---

## Key Takeaways

1. **Use Native SegWit (bc1q...)** as your default — best fees and compatibility
2. **Consider Taproot (bc1p...)** for enhanced privacy and future-proofing
3. **Avoid Legacy (1...)** unless required — you're overpaying for fees
4. **All types are secure** — differences are mainly about efficiency
5. **You can send between any address types** — they're all Bitcoin

---

## Continue Learning

- [Private Keys Explained](/docs/learn/keys/intro) — How addresses are derived
- [Transactions Explained](/docs/learn/transactions/understanding) — How Bitcoin moves
- [UTXO Management](/docs/privacy/utxo-management) — Managing your coins effectively
