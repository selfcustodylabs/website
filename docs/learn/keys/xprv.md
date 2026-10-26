---
sidebar_position: 3
title: "Extended Private Key (XPRV)"
description: "What a Bitcoin extended private key (xprv) is, why it can spend from every address in a wallet, how to keep it offline, and what its prefix tells you."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "extended", "private", "xprv"]
tags: ["private keys", "xprv", "bip39", "seed"]
date: "2025-04-02"
---

# Extended private key (xprv)

An extended private key, or xprv, is a private key paired with a 32-byte chain code, which together can generate an unlimited tree of child private keys. The master xprv of a wallet is computed from the BIP39 seed (the seed phrase plus any passphrase), and every private key and address in the wallet descends from it, so whoever holds an xprv can spend from every address beneath it. It never needs to leave a hardware wallet, and it should not.

## How is the extended private key made?

Under BIP32, the wallet runs the 512-bit BIP39 seed through HMAC-SHA512 with the fixed key "Bitcoin seed". The first half of the result is the master private key and the second half is the chain code. Because a passphrase changes the BIP39 seed, it also changes the master xprv and every key below it; so does choosing a different [derivation path](/docs/learn/keys/derivation-path/). Use your wallet's default path, and write down which one it is.

## What does the extended private key control?

From the master xprv, the wallet derives a child key for each step of the derivation path, ending in the account's extended private key and then in individual keys:

1. The account xprv produces individual private keys, one per address.
2. Each private key produces a public key.
3. Each public key produces an address.

The xprv also produces the matching [extended public key (xpub)](/docs/learn/keys/xpub/), which can generate all the same addresses but cannot spend.

## Can one leaked private key expose the others?

Sometimes, and this is the subtle part. With ordinary (non-hardened) derivation, a single child private key combined with the parent's xpub is enough to compute the parent xprv, and with it every other key in that account. That is why the account levels of a derivation path use hardened derivation (the `'` in `m/84'/0'/0'`), which breaks that link, and why you should never export or share a single private key from an HD wallet whose xpub anyone else might have. A public key, on its own, reveals no private key at all.

## What does an xprv look like?

```text
xprv9yVYaFXM2uUDeaj3STkiHS8svtqoASkVZ8hdTYuBdgVQGKjr76ks922e4r6826YvdQtQdu71ZA2qK8fYE85jXvTPdBFwgQ2d8rk7hhXV5wu
```

[Ian Coleman's BIP39 tool](https://iancoleman.io/bip39/) shows the xprv and xpub for a seed phrase, which makes it useful for learning with a made-up test phrase. Never type a real seed phrase into it, or into any page, on a computer that is or has been online.

## What do the prefixes mean?

The first four letters record which kind of addresses the key was meant for. They come from the SLIP-132 convention, which wallets increasingly replace with [output descriptors](/docs/learn/wallets/multisig/#the-wallet-descriptor) that state the script type explicitly.

| Prefix | Address type | Addresses start with |
|---|---|---|
| `xprv` | Legacy (BIP44), and also used for Taproot (BIP86) | `1`, or `bc1p` for Taproot |
| `yprv` | Nested segwit (BIP49) | `3` |
| `zprv` | Native segwit (BIP84) | `bc1q` |
| `Yprv`, `Zprv` | Multisig, nested or native segwit | `3`, `bc1q` |
| `tprv` | Any type, on testnet | Testnet addresses |
