---
sidebar_position: 1
title: DIY Passphrase
slug: /passphrase/
tags: [passphrase, self custody, entropy]
---

# DIY Bitcoin Passphrase 🎲🎲

In our [basics](/docs/basics/passphrase.md) section, we covered the fundamentals of passphrases. Now, let's dive into how to create a secure and reliable passphrase for your Bitcoin seed.


## Why Random Passphrases Matter

Most people create predictable passwords, making them vulnerable to attacks. In contrast, randomly generated passphrases offer measurable security, significantly reducing the risk of being cracked.

The key idea behind a strong passphrase is selecting words randomly from a **fixed list**. The number of possible passphrases increases exponentially with the number of words and the size of the wordlist. This makes passphrases highly secure against brute-force attacks.


## Problems with the Original Diceware List

:::warning
It's best to avoid using the original Diceware list and instead use the EFF wordlist for better security and usability!
:::

As you might know there was an original [Diceware list](https://theworld.com/~reinhold/diceware.html), created by Arnold Reinhold in 1995, that has been a widely used standard for generating secure passphrases for 20 years. It contains 7,776 words (corresponding to five six-sided dice rolls: 6⁵ = 7,776). However, the Diceware list has usability issues:

- Some words are difficult to memorize or spell.
- It includes rare words (e.g., buret, vacuo).
- Some words can be easily confused with others.
- It contains proper names (Della, Ervin, Eaton).
- Some words include punctuation (ain’t, don’t).
- There are random letter sequences (aaaa, ll, nbis).
- Some words contain numbers (46, 99, 99th).
- Many words are vulgar or offensive.
- It includes single letters and short bigrams, making it harder to distinguish words in a passphrase.

These issues make Diceware passphrases harder to type, recall, and use—especially on mobile keyboards or in situations where word prediction/autocorrect is involved.