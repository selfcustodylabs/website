---
sidebar_position: 6
title: "Bitcoin Passphrase (25th Word): Diceware Generation"
description: "Learn what a Bitcoin passphrase is, when to use it, and how to generate a strong one with dice and the EFF word list. Full 3-step DIY guide."
keywords: ["bitcoin passphrase", "25th word", "diceware", "EFF word list", "hidden wallet", "seed security", "plausible deniability"]
tags: ["passphrase", "seed", "security", "entropy", "dice"]
---
# Bitcoin Passphrase (25th Word)

A passphrase is an additional security layer. Unlike your seed phrase (which consists of predefined words from the [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) word list), a passphrase can be any combination of characters.

Your wallet (collection of addresses) is derived from both the seed phrase and passphrase. Without the passphrase, an attacker who finds your seed will generate the wrong wallet.

For example, if you use the seed with the passphrase `Martha`, the attacker will only see Wallet A (which has no funds) when accessing the seed without the passphrase. However, you store your Bitcoin in `Wallet B`, which is only accessible with the passphrase Martha.

![Passphrase](/img/basics/passphrase.webp)

You can also use `Wallet A` without a passphrase as a **decoy wallet**, storing a small amount of Bitcoin in it. If you're ever forced to reveal your wallet under pressure, you can show this decoy without exposing your main holdings. And remember, never share the full extent of your Bitcoin holdings with anyone, even those you trust, as accidental leaks can make you a target.


## Risks of Using a Passphrase

Adding a passphrase to your seed offers strong security benefits, especially if you're storing a significant amount of Bitcoin. However, it also comes with risk:

- **Risk of Losing Access** – If you forget or mistype your passphrase, there's no way to recover it, and you'll lose access to your funds.
- **More Complexity** – Managing and securely storing an extra secret can be tricky, increasing the chance of mistakes.
- **Potential for Mistakes** – Even a small typo creates an entirely new wallet, making it easy to lock yourself out.
- **Not All Wallets Support It** – Some hardware and software wallets don't support passphrases, limiting compatibility.
- **Social Engineering Risk** – If someone knows you use a passphrase, they may assume you have hidden funds and pressure you to reveal them.


## How Much Security?

Human-chosen passwords are predictable. Even when we try to be random, we follow patterns that attackers can exploit.

<div class="fixed-width-table">

| Human-chosen | Dice-generated |
|--------------|----------------|
| `Bitcoin2024!` | `cruelty postal clammy plasma` |
| `MyD0g$Name` | `stardust article corrode unmasked` |
| Predictable patterns | True randomness |
| Vulnerable to guessing | Measurable security |

</div>

With dice, every word is equally likely. No patterns. No bias. Just math. Each word from the EFF list (7,776 words) adds **~12.9 bits of entropy**:

<div class="fixed-width-table">

| Words | Entropy | Attempts to Crack |
|-------|---------|-------------------|
| 4 words | ~51 bits | 2.3 quadrillion |
| 5 words | ~64 bits | 18 quintillion |
| 6 words | ~77 bits | 151 sextillion |

</div>

For Bitcoin passphrases, **4-6 words** provides excellent security while remaining memorable.

:::info What You'll Do
The rest of this guide walks you through generating a cryptographically strong passphrase using dice rolls and the EFF word list.

**Time required:** 30 minutes  
**Difficulty:** Beginner  
**Estimated cost:** $5-10 (casino dice) or $0 (use any dice)  
**Requirements:** 5 six-sided dice, pen and paper
:::


## Step 1: Choose Your Word List

:::tip Word List
You can find the word list here: [eff_large_wordlist.txt](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt).
:::

The EFF list is the same size as the original Diceware list, with **7,776 words (6⁵)**. It provides the same level of security for each word you choose but improves usability, making it easier to type and remember.

To create this list, EFF:

- Selected words between 3 and 9 characters long, prioritizing common and easy-to-recognize words.
- Removed offensive, sensitive, or emotionally charged words using public filter lists (e.g., one by Luis von Ahn).
- Eliminated hard-to-spell words and homophones (words that sound the same but have different meanings).
- Made sure no word is a prefix of another, reducing typing errors.

The final result is a 7,776-word list suitable for dice-generated passphrases. On average, words in the list are 7.0 characters long, compared to 4.3 characters in Reinhold's original Diceware list. EFF prioritized familiar, meaningful words over very short ones.

The security of passphrases generated with this list is identical to those made with Diceware; the difference is in usability, not security. For most cases, EFF recommends generating a **six word passphrase**, which provides 77 bits of entropy. Each additional word increases security by 12.9 bits; one extra bit doubles the number of guesses required to brute-force the passphrase.


## Step 2: Roll Dice for Your Words

Now it's time to generate your own passphrase using real dice. Using casino-grade dice ensures the highest level of randomness (entropy). If you want to save money, any standard six-sided dice will work. Even slight imperfections wash out when you roll multiple times.

For this method, **five dice** are enough to generate each word.

![Dice](/img/seed/dice.webp)

Before rolling, remember that:

- Each word is generated by rolling one die five times or five dice once, providing **12.9 bits of entropy** per word.
- A six-word passphrase gives **77 bits of entropy**, which is strong security.
- For even stronger security, consider **seven or eight words** (90.3 or 103.2 bits of entropy, respectively).

### How to Generate Your Passphrase

- Roll five dice at once.
- Record the five-digit number they form (e.g., `52465`).
- Look up the matching word in the EFF Long Word List (e.g., **52465 = running**).
- Repeat this process until you have **at least six words** for a secure passphrase.

Your final numbers might look like this:

```text
52465 16663 55321 66621 22166 23234
```

Which translates to your final passphrase:

```text
running cope snowfield yippee darling diaphragm
```

Your passphrase is now ready to use.


## Step 3: Back Up Your Passphrase

Just like your Bitcoin seed phrase, your passphrase is a critical key to your funds. If you lose it or it gets compromised, your Bitcoin is gone forever. That's why proper storage is essential.

While paper and digital backups can degrade, get lost, or be destroyed, metal seed storage provides a durable, fireproof, and waterproof solution for long-term security.

:::danger Never co-locate
Never store your passphrase in the same place as your seed phrase. If both are found together, a thief can access your Bitcoin instantly. Keep them separate to ensure defense in depth.
:::

### Memorize Your Passphrase

:::warning
This method is only recommended if you have multiple secure backups.
:::

You can also memorize your passphrase. Try writing your passphrase down several times and gradually commit it to memory. If needed, use a **mnemonic technique** (e.g., creating a mental story from the words) to make it easier to remember.


## Important Warnings

:::danger Critical
- **Never lose your passphrase**: Without it, your Bitcoin is gone forever.
- **A passphrase creates a completely different wallet**: Even a typo generates different addresses.
- **Store separately from your seed**: Different locations for defense in depth.
:::
