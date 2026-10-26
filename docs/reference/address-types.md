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
| Nested segwit | `3...` | P2SH-P2WPKH | 2012 | Transitional |
| Native segwit | `bc1q...` | P2WPKH / Bech32 | 2017 | Recommended |
| Taproot | `bc1p...` | P2TR / Bech32m | 2021 | Newest |

</div>

## What is a legacy address?

A legacy address (P2PKH, pay to public key hash) is the original format from 2009 and starts with `1`. Every wallet and exchange can send to it, but coins held at it cost the most to spend, because a legacy input is about 148 vbytes against 68 for native segwit. Use one only for a service that accepts nothing else.

## What is a nested segwit address?

A nested segwit address (P2SH-P2WPKH) starts with `3` and wraps a segwit script inside the pay-to-script-hash format introduced in 2012, so that services built before segwit could still send to it. The same `3` prefix is used by every P2SH script, including older multisig wallets, so a `3` address alone does not tell you which it is. Its inputs, about 91 vbytes, are cheaper than legacy and dearer than native segwit; there is no reason to choose it today unless a service cannot send to `bc1` addresses.

## What is a native segwit address?

A native segwit address (P2WPKH, encoded in Bech32) starts with `bc1q` and has been in use since 2017. It is all lowercase, so it is easy to read aloud and compact in a QR code, and its checksum catches most typing mistakes. Its inputs are about 68 vbytes. It is the default in almost every current wallet, and the type we recommend.

## What is a Taproot address?

A Taproot address (P2TR, encoded in Bech32m) starts with `bc1p` and has been usable since the Taproot upgrade activated in November 2021. It uses Schnorr signatures, and when the signers of a multisig combine their keys into one (MuSig2), spending looks on chain like an ordinary single-signature payment; a Taproot multisig that spends through its script is still recognisable as multisig. For a simple single-signature payment it saves almost nothing over native segwit, because its smaller input is offset by a larger output. Support for sending to `bc1p` arrived later than for `bc1q`, so check that a service can pay to one before you hand it out.

## How do the fees compare?

The size of an input, and so the fee to spend it, depends on the address type the coin is held at:

<div class="fixed-width-table">

| Spending from | Input size | Fee, relative to legacy |
|--------------|--------------|--------------|
| Legacy (P2PKH) | 148 vbytes | 100% (baseline) |
| Nested segwit (P2SH-P2WPKH) | 91 vbytes | ~61% |
| Native segwit (P2WPKH) | 68 vbytes | ~46% |
| Taproot (P2TR) | 57 vbytes | ~39% |

</div>

Spending a native segwit input costs about 54% less than a legacy one; for a whole typical payment, with its outputs and overhead, the saving is about 38%. Taproot inputs are the smallest, but Taproot outputs are larger (about 43 vB against 31), so a simple Taproot payment costs about the same as a native segwit one.

## Which should you use?

| Type | Use it when | Why |
|---|---|---|
| Native segwit (`bc1q`) | By default | Low fees, universal support, in use since 2017 |
| Taproot (`bc1p`) | Your wallet and the services you use support it, especially for multisig | A multisig or complex script spent by agreement looks like an ordinary single-signature payment, which helps privacy and saves space |
| Nested segwit (`3`) | Only for an old service that cannot send to `bc1` addresses | A transitional format with higher fees |
| Legacy (`1`) | Only when nothing else is accepted | Roughly twice the input fee of native segwit, for no benefit |

## What do wallets use by default?

Most current wallets support every type and default to native segwit:

<div class="fixed-width-table">

| Wallet | Default address type |
|--------|---------------------|
| Sparrow | Native segwit (`bc1q`), configurable |
| Electrum | Native segwit (`bc1q`), configurable |
| Trezor Suite | Native segwit (`bc1q`) |
| Ledger Live | Native segwit (`bc1q`) |
| Coldcard | Native segwit (`bc1q`), configurable |
| BlueWallet | Native segwit (`bc1q`) |

</div>

Where the table says configurable, the address type can be changed in the wallet's settings or when creating the wallet.

## Which derivation path goes with each type?

Each address type has its own **derivation path**, the route from your seed phrase to its addresses; see [derivation paths](/docs/learn/keys/derivation-path/).

<div class="fixed-width-table">

| Address type | Derivation path | Standard |
|--------------|-----------------|--------------|
| Legacy | `m/44'/0'/0'` | BIP44 |
| Nested segwit | `m/49'/0'/0'` | BIP49 |
| Native segwit | `m/84'/0'/0'` | BIP84 |
| Taproot | `m/86'/0'/0'` | BIP86 |

</div>

When restoring a wallet you need the same path as the original to see your funds. Most wallets handle it automatically, but if a restored wallet is empty, the path is the first thing to check.

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
