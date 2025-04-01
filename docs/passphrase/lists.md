---
sidebar_position: 2
title: Word Lists
slug: /passphrase/word-lists
tags: [passphrase, self custody, entropy, word lists]
---

# EFF's New Word Lists

:::tip Word List
You can find the word lists below this [link](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt).
:::


## The List Explained

This EFF list is the same size as the original Diceware list, with **7,776 words (6⁵)**. It provides the same level of security for each word you choose but improves usability, making it easier to type and remember.

To create this list, EFF:

- Selected words between 3 and 9 characters long, prioritizing common and easy-to-recognize words.
- Removed offensive, sensitive, or emotionally charged words using public filter lists (e.g., one by Luis von Ahn).
- Eliminated hard-to-spell words and homophones (words that sound the same but have different meanings, which could cause confusion).
- Made sure no word is a prefix of another, reducing typing errors.

The final result is a 7,776-word list suitable for dice-generated passphrases. On average, words in the list are 7.0 characters long, compared to 4.3 characters in Reinhold’s Diceware list. This happened because EFF excluded very short words and focused on more familiar, meaningful words.


## Security & Passphrase Strength

The security of passphrases generated with this list is the same as those made with Diceware—the difference is in usability, not security. For most cases, EFF recommend generating a **six word passphrase**, which provides 77 bits of entropy (a standard way to measure password strength). Each additional word increases security by 12.9 bits, making the passphrase exponentially harder to crack. Adding one extra bit of entropy doubles the number of guesses required to break the passphrase, making brute-force attacks significantly more difficult.

Now you are ready to go to next section and create your seed passphrase by rolling the dice.