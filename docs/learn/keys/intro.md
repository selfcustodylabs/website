---
sidebar_position: 1
title: "Understanding Bitcoin Private Keys"
description: "Learn what Bitcoin private keys are, how they work, and why they're essential for controlling your Bitcoin. The foundation of self-custody explained."
keywords: ["bitcoin private key", "public key", "cryptography", "bitcoin security", "key management"]
tags: ["private keys", "bitcoin", "security"]
---

# Private keys

A Bitcoin private key is a randomly chosen 256-bit number that authorises spending the bitcoin sent to the addresses derived from it. Whoever knows the number can spend those coins, and nobody who lacks it can, so keeping the private key secret and backed up is what self-custody consists of. Modern wallets do not make you handle private keys directly: they derive them all from a [seed phrase](/docs/learn/keys/seed/), which is the thing you actually write down.

## How does a private key relate to a public key and an address?

| | What it is | Who sees it |
|---|---|---|
| Private key | A secret number between 1 and about 1.16 × 10<sup>77</sup> | Nobody but you, ever |
| Public key | A point on the secp256k1 elliptic curve, computed from the private key | Revealed when you spend (or, for Taproot addresses, already part of the address) |
| Address | A short encoding of the public key, or of its hash, that people send bitcoin to | Anyone you give it to |

Each step goes one way only. Computing the public key from the private key, and the address from the public key, is quick; going backwards is not feasible with any known method, which is why an address and even a public key can be shared without exposing the private key.

## What does a private key do?

When you spend, your wallet uses the private key to sign the transaction: it produces a digital signature that anyone can check against the public key, but that only the holder of the private key could have made. Nodes accept the transaction only if the signature is valid. Nothing else (no account name, password or identity) is involved.

## Why is storing a private key hard?

A private key must be secret and must also survive. Stored on an online device, it can be copied by malware; stored offline, it can be lost, burned or misread. A raw key is also a 64-character hexadecimal string that is easy to copy wrongly by hand.

[Seed phrases](/docs/learn/keys/seed/) solve the copying problem: 12 or 24 words from a fixed list, with a built-in checksum, that regenerate every private key in the wallet. Hardware wallets solve the online problem by keeping the keys on a device that never exposes them. Losing the private keys, or the seed phrase they come from, loses the bitcoin; exposing them lets anyone take it.
