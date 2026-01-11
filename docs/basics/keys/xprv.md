---
sidebar_position: 7
title: "Extended Private Key (XPRV)"
description: "Practical guide: Extended Private Key (XPRV). Covers Why the Extended Private Key Matters, Security Considerations, Generating and Testing an Extended Private."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "extended", "private", "xprv"]
tags: ["private keys", "xprv", "bip39", "seed"]
---
# Extended Private Key (XPRV)

![Diagram](/img/basics/diagram.png)

The extended private key is derived from the binary private key (along with an optional passphrase) using mathematical functions that most users don’t need to understand in detail.

:::warning
Adding a passphrase significantly changes the resulting extended private key. Likewise, modifying the derivation path alters the generated keys and addresses. It’s generally best to stick with the default derivation path provided by your wallet software, but make sure to write it down for future reference.
:::


## Why the Extended Private Key Matters

The extended private key is responsible for generating all Bitcoin addresses in a wallet and granting the ability to spend from them. The key structure works as follows:

- The extended private key produces multiple individual private keys (standard private keys).
- Each individual private key generates a public key.
- Each public key creates a unique Bitcoin address.

Additionally, the extended private key is used to derive the extended public key, which we’ll cover next.


## Security Considerations

Each individual private key does not reveal the extended private key. While I’m not a cryptography expert, my understanding is that an individual private key might theoretically reveal the next private key in sequence, though this is uncertain. To stay safe, never share any private key with anyone.

However, it is certain that a public key cannot reveal its corresponding private key, nor can it reveal any other private key in the wallet. This is crucial to understand for security.


## Generating and Testing an Extended Private Key

You can generat a test wallet using [Ian Coleman’s BIP39 tool](https://iancoleman.io/bip39/), a great resource for experimenting with dummy wallets.

:::danger
Never use Ian Coleman’s BIP39 tool to generate a real wallet on an internet-connected computer!
:::

Here’s an example of an extended private key:

```text
xprv9yVYaFXM2uUDeaj3STkiHS8svtqoASkVZ8hdTYuBdgVQGKjr76ks922e4r6826YvdQtQdu71ZA2qK8fYE85jXvTPdBFwgQ2d8rk7hhXV5wu
```

## Understanding Prefixes and Address Types

- Keys starting with `“x”` generate **legacy** (P2PKH) addresses, which begin with `“1”`.
- Keys starting with `“y”` generate **P2SH** (Pay to Script Hash) addresses, which begin with `“3”`.
- Keys starting with `“z”` generate **native SegWit** (Bech32) addresses, which begin with `“bc1q”`.
- Keys starting with uppercase “X”, “Y”, or “Z” are used for multisignature wallets.

Understanding the extended private key is essential because it underpins all wallet addresses and transactions. Proper handling ensures security and smooth Bitcoin management.