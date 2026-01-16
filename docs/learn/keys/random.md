---
sidebar_position: 7
title: "The Random Number"
description: "Practical guide: The Random Number. Covers The Checksum, bitcoin, self custody."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "random", "number"]
tags: ["private keys", "random number", "entropy"]
---
# Private Key as Random Number

A private key starts as a binary number. While it can be converted into different formats, at its core, it remains a binary number because that’s what computers understand.

Here’s an example of a private key in binary:

```text
10111000101 11011100100 10111100111 01101000101 11111010101 11111001000 00100000101 10111000101 10101010100 10111011101 11111000101 01111001110 10111010100 10011000111 10111000111 11111011101 00011000101 10101000110 11111010100 11111000100 00101000101 10111010101 10011000101 00101010010
```

Each group contains 11 digits, and there are 24 groups in total. That makes 264 binary digits (24 × 11 = 264).

When stored in a computer, the same key appears as one continuous number:

```text
101110001011101110010010111100111011010001011111101010111111001000001000001011011100010110101010100101110111011111100010101111001110101110101001001100011110111000111111110111010001100010110101000110111110101001111100010000101000101101110101011001100010100101010010
```

This is a very large number. In decimal form, it looks like this:

```text
7,869,270,257,961,728,227,967,109,454,183,816,220,476,881,432,001,550,169,555,390,346,110,510,455,025,983
```

Clearly, binary and decimal representations can be overwhelming for humans, which is why other formats are used.

## The Checksum

A private key is mostly random, but the final portion, called the checksum, is generated mathematically. This checksum is based on the random part and is designed to help detect errors. If you enter a private key incorrectly, the checksum won’t match, and the wallet software can warn you about the mistake. However, if necessary, the user can still choose to proceed.

The checksum isn’t required by Bitcoin’s core code, it’s just an extra safety measure used by wallets

### How the Checksum Works

When generating a key, the random portion looks like this:

```text
10111000101 11011100100 10111100111 01101000101 11111010101 11111001000 00100000101 10111000101 10101010100 10111011101 11111000101 01111001110 10111010100 10011000111 10111000111 11111011101 00011000101 10101000110 11111010100 11111000100 00101000101 10111010101 10011000101 001
```

Using a mathematical formula, this exact checksum is generated:

```text
01010010
```

The checksum is then added to the end of the private key to form the final version. The total length is structured so that each 11-digit group corresponds to a BIP39 word (discussed later).

### Why This Matters

Every different random private key will generate a different checksum. If you enter a key into a wallet and make even a single mistake, the wallet software will recognize the mismatch and issue a warning. This safeguard ensures accuracy when entering private keys manually.

Understanding this process is crucial, as it plays a key role in Bitcoin security and key management.

---

<RelatedArticles 
  title="Related Topics"
  articles={[
    { title: "Number Systems", href: "/docs/learn/keys/number-systems/", tag: "Technical" },
    { title: "Seed Phrases", href: "/docs/learn/keys/seed/", tag: "Learn" },
    { title: "DIY Seed Generation", href: "/docs/security/seed-generation/", tag: "Guide" },
    { title: "Keys Overview", href: "/docs/learn/keys/", tag: "Overview" },
  ]}
/>
