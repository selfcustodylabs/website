---
sidebar_position: 7
title: "Bitcoin Passphrase (25th Word): Diceware Generation"
description: "What a Bitcoin passphrase (the 25th word) is, when to use one, and how to make a strong one with dice and the EFF word list, then test and back it up."
keywords: ["bitcoin passphrase", "25th word", "diceware", "EFF word list", "hidden wallet", "seed security", "plausible deniability"]
tags: ["passphrase", "seed", "security", "entropy", "dice"]
guide:
  time: "30 minutes"
  level: "Beginner"
  cost: "$5-10 (casino dice) or $0 (use any dice)"
  needs: "5 six-sided dice, pen and paper"
date: "2025-04-01"
---
# Bitcoin passphrase (the "25th word")

A BIP39 passphrase is an extra secret, chosen by you, that is combined with your seed phrase to produce a different wallet. The seed phrase alone opens one wallet; the seed phrase plus the passphrase opens another, so someone who finds your 24 words but not the passphrase finds only the first. It is called the "25th word", but it is not a word from the BIP39 list: it can be any text, and the strongest kind is six words chosen with dice from the EFF word list. A passphrase also adds a way to lose everything, because it cannot be recovered and a single wrong character opens an empty wallet.

<GuideFacts />

## How does a passphrase change the wallet?

BIP39 turns your seed phrase into the binary seed every key comes from by running PBKDF2-HMAC-SHA512 for 2048 rounds, with the seed phrase as the password and the text `mnemonic` followed by your passphrase as the salt. Without a passphrase the salt is just `mnemonic`. Any change to the passphrase therefore produces a different seed and an unrelated set of addresses, and because there is no checksum on the passphrase, no wallet can tell you it is wrong: a mistyped passphrase opens a valid, empty wallet.

<div class="doc-diagram">

![A passphrase splits one seed into two wallets: the 24 words alone derive the decoy wallet at one address, and the words plus your passphrase derive your real wallet at a different address; the passphrase is part of the backup](/img/diagrams/wallet-setup/passphrase-wallets.svg)

</div>

The wallet the seed phrase opens on its own can serve as a decoy: keep a small amount there, and if you are ever forced to open your wallet, that is the one you show. It only works if nobody knows you use a passphrase, which is one more reason not to discuss your holdings with anyone.

## What exactly counts as a different passphrase?

Every character counts, and so does how the characters are encoded:

| Difference | Same wallet? |
|---|---|
| `Martha` and `martha` | No: passphrases are case-sensitive |
| `running cope` and `running  cope` (two spaces) | No |
| `running cope` and `running cope ` (trailing space) | No |
| `café` typed on two keyboards that encode the accent differently | Yes in principle, because BIP39 normalises the passphrase to Unicode NFKD before use, but devices that accept only ASCII cannot type it at all |

Use lowercase letters and single spaces only. That avoids the case and spacing traps, and every device can type it.

## What are the risks of using a passphrase?

- Losing it loses the bitcoin. There is no recovery and no reset.
- A typo is silent. A wrong passphrase opens a valid empty wallet rather than giving an error, which is easy to mistake for a missing balance.
- It is one more secret to store, separately from the seed phrase, for as long as you hold the bitcoin.
- Your heirs need it too. An inheritance plan that passes on the seed phrase without the passphrase passes on an empty wallet; see [inheritance planning](/docs/advanced/inheritance-planning/).
- Someone who knows you use one may assume there is a hidden wallet and pressure you to reveal it.

For amounts small enough that a [threat model](/docs/learn/fundamentals/threat-models/) puts you at level 1, the risk of locking yourself out can outweigh the protection. From around $10,000 upwards, or when the seed phrase could be found, it is worth the extra care.

## How strong does a passphrase need to be?

As strong as a password that can be attacked without limits. A passphrase only matters once someone has your seed phrase, and they can then test guesses offline as fast as their hardware allows, with no lockout. Human-chosen passwords follow patterns that guessing tools try first, so the passphrase should come from dice.

<div class="fixed-width-table">

| Human-chosen | Dice-generated |
|--------------|----------------|
| `Bitcoin2024!` | `cruelty postal clammy plasma` |
| `MyD0g$Name` | `stardust article corrode unmasked` |
| Follows predictable patterns | Every word equally likely |
| Strength unknown | Strength can be calculated |

</div>

The EFF long word list has 7,776 words (6 to the power 5), so each word chosen with five dice adds about 12.9 bits of entropy:

<div class="fixed-width-table">

| Words | Entropy | Possible passphrases |
|-------|---------|-------------------|
| 4 | 51.7 bits | 3.7 quadrillion |
| 5 | 64.6 bits | 28 quintillion |
| 6 | 77.5 bits | 221 sextillion |
| 7 | 90.5 bits | 1.7 octillion |

</div>

Use six words, which is what the EFF recommends for this word list. Four words is within reach of a well-funded attacker who already holds your seed phrase.

## Step 1: Get the EFF word list and check your device's limit

Step 1 prepares the two things you need before rolling. Download the [EFF long word list](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) and print it, or copy it to the offline computer you will use; you will look up words in it, so it must not be a page you search online.

The EFF built the list in 2016 for dice passphrases: words of 3 to 9 letters, common and easy to spell, with offensive words, homophones and hard-to-spell words removed. Its words average 7 characters, against 4.3 in Arnold Reinhold's original Diceware list, so they are easier to remember at the same strength per word.

Then check how long a passphrase your hardware wallet accepts, because six EFF words average about 47 characters and can reach 59:

| Device | Maximum passphrase length (vendor documentation, October 2026) |
|---|---|
| Trezor Safe 3, Safe 5, Safe 7, Model T | 128 ASCII characters |
| Trezor Model One | 50 characters |
| BitBox02 | 149 ASCII characters |

For any other device, find the limit in its manual before you roll.

## Step 2: Roll dice for your words

Step 2 picks each word with five dice. Casino dice are the most even, but any six-sided dice will do here: a small bias in a die costs a negligible amount of entropy over six words.

![Blue and green translucent casino dice on a grey surface](/img/seed/dice.webp)

1. Roll five dice at once and read them left to right as a five-digit number, such as `52465`.
2. Find that number in the EFF list: `52465` is `running`.
3. Repeat until you have six words. Do not reroll a word because you dislike it; that removes entropy.

The [diceware passphrase worksheet](/worksheets/diceware-passphrase/) has a row of five dice boxes for each word and space to record the test in step 3.

Six rolls might give:

```text
52465 16663 55321 66621 22166 23234
```

which is the passphrase:

```text
running cope snowfield yippee darling diaphragm
```

That example is 47 characters. Write yours down exactly, in lowercase, with single spaces.

## Step 3: Test the passphrase before you use it

Step 3 proves you can open the passphrase wallet again before any bitcoin goes into it. On your hardware wallet, open the passphrase wallet and note its first receive address. Disconnect, open it again by typing the passphrase from your written copy, and check the address is identical. Then send a small amount, and confirm you can see it after re-entering the passphrase once more. [Backup verification](/docs/wallet-setup/backup-verification/) covers the full test.

## Step 4: Back up the passphrase

Step 4 stores the passphrase as carefully as the seed phrase, because losing either one loses the bitcoin.

:::danger Never store the passphrase with the seed phrase
A thief who finds both together can spend everything at once. Keep them in different places, so that finding one does not reveal the other.
:::

Metal survives the fire and water that destroy paper, so a stamped or engraved copy is the durable option. You can also memorise the passphrase, by writing it out several times or making a short story from the words, but only in addition to a written backup, never instead of one: memory fails, and so do people.
