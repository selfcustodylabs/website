---
sidebar_position: 3
title: "Bitcoin Address Types Explained"
description: "Understand the different Bitcoin address types: Legacy, SegWit, Native SegWit, and Taproot. Learn which to use and why it matters for fees and compatibility."
keywords: ["bitcoin address", "segwit", "taproot", "legacy", "bech32", "address types", "bc1", "P2PKH", "P2SH", "P2WPKH", "P2TR"]
tags: ["bitcoin", "addresses", "segwit", "taproot", "reference"]
slug: /reference/address-types
date: "2026-01-14"
---

# Bitcoin address types explained

Bitcoin has four address types in common use, told apart by their first characters: legacy addresses start with `1`, nested segwit with `3`, native segwit with `bc1q` and Taproot with `bc1p`. They differ in fees and features, not in security, and you can send from any type to any other. Use native segwit (`bc1q`) by default: it is cheap to spend from and every current wallet and exchange supports it. Taproot (`bc1p`) is the newer alternative, with the most to gain in multisig and complex setups.

The four look like this:

- `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` (starts with 1)
- `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy` (starts with 3)  
- `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq` (starts with bc1q)
- `bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297` (starts with bc1p)

## What are the four address types?

<div class="fixed-width-table">

| Type | Prefix | Name | Year | Status |
|------|--------|------|------|--------|
| Legacy | `1...` | P2PKH | 2009 | Outdated |
| Script | `3...` | P2SH / P2SH-P2WPKH | 2012 | Transitional |
| Native SegWit | `bc1q...` | P2WPKH / Bech32 | 2017 | Recommended |
| Taproot | `bc1p...` | P2TR / Bech32m | 2021 | Newest |

</div>

---

## Legacy Addresses (P2PKH)

**Starts with:** `1`  
**Example:** `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`

### What It Is

The original Bitcoin address format from 2009. "P2PKH" stands for "Pay to Public Key Hash."

### Pros
- Universal compatibility: every wallet and exchange supports it
- Battle-tested since Bitcoin's beginning

### Cons
- **Highest fees**: transactions are larger in bytes
- No SegWit benefits
- Considered outdated

### When to Use
Only if you're sending to an old wallet or service that doesn't support newer formats. Otherwise, avoid.

---

## Script Addresses (P2SH / Nested SegWit)

**Starts with:** `3`  
**Example:** `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`

### What It Is

Introduced in 2012 for advanced scripts (like multisig). Later repurposed as "wrapped" or "nested" SegWit, a way to get SegWit benefits while maintaining compatibility with older systems.

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
- **Best privacy**: multisig and single-sig look identical on-chain
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

## How do the fees compare?

The size of an input, and so the fee to spend it, depends on the address type the coin is held at:

<div class="fixed-width-table">

| Spending from | Input size | Fee, relative to legacy |
|--------------|--------------|--------------|
| Legacy (P2PKH) | 148 vbytes | 100% (baseline) |
| Nested SegWit (P2SH) | 91 vbytes | ~61% |
| Native SegWit (P2WPKH) | 68 vbytes | ~46% |
| Taproot (P2TR) | 57 vbytes | ~39% |

</div>

Spending a native segwit input costs about 54% less than a legacy one; for a whole typical payment, with its outputs and overhead, the saving is about 38%. Taproot inputs are the smallest, but Taproot outputs are larger (about 43 vB against 31), so a simple Taproot payment costs about the same as a native segwit one.

---

## How do you recognise each type?

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

## Which should you use?

| Type | Use it when | Why |
|---|---|---|
| Native segwit (`bc1q`) | By default | Low fees, universal support, in use since 2017 |
| Taproot (`bc1p`) | Your wallet and the services you use support it, especially for multisig | A multisig or complex script spent by agreement looks like an ordinary single-signature payment, which helps privacy and saves space |
| Nested segwit (`3`) | Only for an old service that cannot send to `bc1` addresses | A transitional format with higher fees |
| Legacy (`1`) | Only when nothing else is accepted | Roughly twice the input fee of native segwit, for no benefit |

---

## What do wallets use by default?

Most current wallets support every type and default to native segwit:

<div class="fixed-width-table">

| Wallet | Default Address Type |
|--------|---------------------|
| Sparrow | Native SegWit (bc1q), configurable |
| Electrum | Native SegWit (bc1q), configurable |
| Trezor Suite | Native SegWit (bc1q) |
| Ledger Live | Native SegWit (bc1q) |
| Coldcard | Native SegWit (bc1q), configurable |
| BlueWallet | Native SegWit (bc1q) |

</div>

You can usually change the address type in wallet settings if needed.

---

## Which derivation path goes with each type?

Each address type has its own **derivation path**, the route from your seed phrase to its addresses; see [derivation paths](/docs/learn/keys/derivation-path/).

<div class="fixed-width-table">

| Address Type | Derivation Path | BIP Standard |
|--------------|-----------------|--------------|
| Legacy | `m/44'/0'/0'` | BIP44 |
| Nested SegWit | `m/49'/0'/0'` | BIP49 |
| Native SegWit | `m/84'/0'/0'` | BIP84 |
| Taproot | `m/86'/0'/0'` | BIP86 |

</div>

When restoring a wallet you need the same path as the original to see your funds. Most wallets handle it automatically, but if a restored wallet is empty, the path is the first thing to check.

---

## Common questions

### Can you send between different address types?

Yes. You can send from any address type to any other; to the network it is all bitcoin.

### Why does your wallet show a different address each time?

Wallets give you a new address for every payment, for privacy. Each one is different, but all of them come from your seed phrase and all belong to you.

### What if an exchange will not send to a bc1 address?

A few old services still cannot send to `bc1` addresses. Use a different exchange, withdraw to a nested segwit (`3`) address in your wallet for now, or ask the exchange to add support.

### Does the address type affect security?

Not directly. Every type is secure; the differences are in fees, features and compatibility.

### Why does a recovered wallet show a zero balance?

Usually because it is looking at a different address type or derivation path from the original wallet, not because the funds are gone. Set the restoring wallet to the address type your old addresses used, or try each type in Sparrow or Electrum; [recovery troubleshooting](/docs/reference/faq/recovery-troubleshooting/) covers the rest.
