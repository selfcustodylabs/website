---
sidebar_position: 7
title: "Generate Your Own Bitcoin Seed Phrase with Dice"
description: "Step-by-step guide to generating a Bitcoin BIP39 seed phrase from dice rolls. True randomness, verifiable checksum, fully offline — without trusting your hardware wallet's RNG."
keywords: ["bitcoin seed", "DIY seed", "dice entropy", "BIP39", "seed phrase generation", "air-gapped", "true randomness", "entropy"]
tags: ["private keys", "random number", "entropy", "seed", "BIP39", "dice"]
---

# Generate Your Own Bitcoin Seed Phrase with Dice

Most wallets generate seed phrases for you, but that requires trust: you are trusting that the wallet's random number generator is actually random, hasn't been backdoored, and wasn't compromised somewhere in the supply chain. This guide shows you how to generate a 24-word BIP39 seed phrase from dice rolls, entirely offline, with randomness you can verify yourself.

:::danger Fund Loss Warning
**Mistakes in seed generation can result in permanent, irreversible loss of all Bitcoin.**

Common fatal errors:

- **Using a compromised computer** — If your "air-gapped" machine was ever connected to the internet, it may have malware that captures your seed.
- **Insufficient randomness** — Using weak entropy (like mental "random" numbers) makes your seed guessable.
- **Transcription errors** — A single wrong word means a completely different (empty) wallet.
- **Improper backup storage** — Paper burns, fades, and water-damages easily.

**There is no recovery.** No customer support. No password reset. If you lose access to your seed or generate it insecurely, your Bitcoin is gone forever.

**Do not proceed unless you fully understand these risks.**
:::

:::info What You'll Do
In this guide you will:

- Generate true randomness using physical dice rolls
- Convert binary entropy to BIP39 seed words
- Calculate and verify your checksum
- Securely back up your seed phrase on metal

**Time required:** 2–4 hours
**Difficulty:** Intermediate
**Estimated cost:** $10–30 (casino dice) + $20–50 (metal backup plate)
**Requirements:** [Air-gapped computer](/docs/advanced/air-gapped-computer) or Raspberry Pi Zero, casino dice
:::

:::tip Prerequisites
Before starting, make sure you understand:

- [What seed phrases are](/docs/learn/keys/seed) and how they protect your Bitcoin
- [Private keys](/docs/learn/keys/intro) and how they relate to seeds
- [Number systems](/docs/learn/keys/number-systems) — binary, decimal, and hex
:::


## Why Generate Your Own Seed?

When a wallet generates a seed phrase for you, you are trusting three things at once:

<div class="fixed-width-table">

| Risk | Description |
|------|-------------|
| **Weak randomness** | Software may not use proper entropy |
| **Backdoors** | Wallets could have security flaws or intentional vulnerabilities |
| **Supply chain attacks** | Pre-generated seeds have been found in compromised hardware wallets |

</div>

By generating your own seed with physical dice, you:

- **Verify the randomness yourself** — no trust required
- **Eliminate software vulnerabilities** — dice can't be hacked
- **Understand what you're protecting** — knowledge is security


## Who Is This Guide For?

| Situation | Recommendation |
|-----------|----------------|
| Learning with small amounts | **Not recommended** — Use a hardware wallet's built-in seed generation |
| Moderate holdings, want to learn | **Maybe** — Practice on testnet first and understand the risks |
| Significant holdings, high security needs | **Yes** — Verifiable entropy is worth the effort |
| Don't trust hardware wallet RNG | **Yes** — This eliminates that trust requirement |
| Not comfortable with technical processes | **No** — A mistake here loses everything |

**Most people should use their hardware wallet's seed generation.** This guide is for users who want verifiable randomness and understand the additional risks of a manual process.


## Critical Environment Requirements

:::warning Before You Begin
Your seed generation environment **must** meet ALL of these requirements:

- [ ] **Air-gapped computer** — A machine that has NEVER connected to the internet and NEVER will
- [ ] **Fresh operating system** — Booted from a verified, read-only medium (like a Tails USB)
- [ ] **No wireless hardware** — Wi-Fi and Bluetooth physically removed or disabled in BIOS
- [ ] **No cameras or microphones** — Cover or disconnect them
- [ ] **Private location** — No one can see your screen or your seed words
- [ ] **No electronic devices nearby** — Phones, smartwatches, etc. can capture keystrokes or screens

**If any of these are not met, your seed may be compromised before you even finish generating it.**
:::


## What You'll Need

### Casino dice

Casino-grade dice are ideal for generating true randomness. You don't strictly need expensive dice — any standard six-sided dice will work, even with small biases, as long as you use several at a time. Using 5–10 dice per roll speeds the process up dramatically.

![Dice](/img/seed/dice.webp)

### Air-gapped computer

An air-gapped computer is a device that has never been connected to the internet and is physically incapable of doing so. This is crucial for securely generating and handling your private key. Suitable options:

- **Raspberry Pi Zero 1.3** — Highly recommended because it lacks built-in Wi-Fi and Bluetooth, reducing attack surfaces. Harder to find these days, but worth the hunt.
- **Laptop or PC** — A machine with the Wi-Fi and Bluetooth modules physically removed and the Ethernet port permanently disabled. Even if stolen, an attacker cannot put it back online to extract the private key.

![Raspberry Pi Zero](/img/seed/rpizero.webp)

### Paper and pen

Used only as a temporary record of the process. Must be destroyed (burned) after you have transferred the seed phrase to a durable medium.

### Metal seed storage

Once your seed phrase is created, it should be permanently stored on a fireproof, waterproof, tamper-resistant metal plate. This protects your seed from fire, water, and the slow degradation of paper over time.

![Metal seed backup](/img/seed/metalseed.webp)


## Step 1: Roll Dice for Entropy

Our goal is to generate a large, truly random binary number by rolling the dice.

### Assign binary values

Before rolling, decide how each roll is converted into a binary value. This mapping gives an equal probability of 0 or 1:

- If the die lands on **1, 2, or 3**, it is assigned a value of **0**.
- If the die lands on **4, 5, or 6**, it is assigned a value of **1**.

### Roll and record

Roll the dice and record the results from left to right. Consistency is key — always read in the same order. If it is unclear which die is further to the left, re-roll those dice.

:::warning
It is crucial that the data is truly random. If it lacks randomness, there is a risk that someone else could reproduce the exact same sequence. This would allow them to regenerate your private key and potentially access all of your Bitcoin.
:::

### Format the output

Create 23 rows of 11 binary digits each, plus a final 24th row containing only 3 digits (the remaining 8 bits of the 24th row will be filled in later by the checksum).

- For readability, separate each row into three groups: 4-4-3 (e.g., `1011 1000 101`).
- Keep the numbers aligned in columns and leave space between rows for manual calculations later.

<div class="fixed-width-table">

|#||||||||||||
|-|-|-|-|-|-|-|-|-|-|-|-|
|**1)**|1|0|1|1|1|0|0|0|1|0|1|
|**2)**|1|1|0|1|1|1|0|0|1|0|0|
|**3)**|1|0|1|1|1|1|0|0|1|1|1|
|**4)**|0|1|1|0|1|0|0|0|1|0|1|
|**5)**|1|1|1|1|1|0|1|0|1|0|1|
|**6)**|1|1|1|1|1|0|0|1|0|0|0|
|**7)**|0|0|1|0|0|0|0|0|1|0|1|
|**8)**|1|0|1|1|1|0|0|0|1|0|1|
|**9)**|1|0|1|0|1|0|1|0|1|0|0|
|**10)**|1|0|1|1|1|0|1|1|1|0|1|
|**11)**|1|1|1|1|1|0|0|0|1|0|1|
|**12)**|0|1|1|1|1|0|0|1|1|1|0|
|**13)**|1|0|1|1|1|0|1|0|1|0|0|
|**14)**|1|0|0|1|1|0|0|0|1|1|1|
|**15)**|1|0|1|1|1|0|0|0|1|1|1|
|**16)**|1|1|1|1|1|0|1|1|1|0|1|
|**17)**|0|0|0|1|1|0|0|0|1|0|1|
|**18)**|1|0|1|0|1|0|0|0|1|1|0|
|**19)**|1|1|1|1|1|0|1|0|1|0|0|
|**20)**|1|1|1|1|1|0|0|0|1|0|0|
|**21)**|0|0|1|0|1|0|0|0|1|0|1|
|**22)**|1|0|1|1|1|0|1|0|1|0|1|
|**23)**|1|0|0|1|1|0|0|0|1|0|1|
|**24)**|0|0|1|||||||||

</div>

You have now generated 256 bits of entropy (23 full rows of 11 bits + 3 bits on the 24th row). Each 11-bit segment will be converted into one BIP39 seed word later.

Dividing 256 bits by 11 gives 23.27 words, which is not a whole number. To get a clean 24-word seed, we need eight more bits — bringing the total to 264 bits (24 × 11). Those final 8 bits come from the checksum calculated in Step 3.


## Step 2: Convert Binary to Decimal

Each of the 24 rows of 11 binary digits must be converted to a decimal number **manually** on your air-gapped computer or by using paper and pen. Never use an online tool — copying your binary string into a web calculator could expose your seed.

With 11 binary digits, the smallest number is 0 (`00000000000`) and the largest is 2047 (`11111111111`). Each decimal result will therefore fall in the range 0–2047.

You can convert in either of two ways.

### Method A — air-gapped shell

For example, to convert the first line, `10111000101`, type:

```bash
echo $((2#10111000101))
```

This will output **1477**. Replace the binary digits in the command with each 11-digit row and run the calculation.

### Method B — paper and pen

At the top-left of your page, write the powers of two from left to right, aligned with the binary digits below: `1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1`.

For each binary digit in the row:

- If the digit is 1, write down the power of two above it.
- If the digit is 0, skip it.

Add up all the numbers you wrote down. **The sum is the decimal equivalent of the binary number.**

For example, to convert the first row, `10111000101`:

```text
1024 + 0 + 256 + 128 + 64 + 0 + 0 + 0 + 4 + 0 + 1 = 1477
```

Repeat this process for all 24 rows. You will now have 24 decimal numbers, each in the range 0–2047.

<div class="fixed-width-table">

|#|1024|512|256|128|64|32|16|8|4|2|1|TOT|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|**1)**|1|0|1|1|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**1477**</span>|
|**2)**|1|1|0|1|1|1|0|0|1|0|0|<span style={{ color: "#da6000" }}>**1764**</span>|
|**3)**|1|0|1|1|1|1|0|0|1|1|1|<span style={{ color: "#da6000" }}>**1511**</span>|
|**4)**|0|1|1|0|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**837**</span>|
|**5)**|1|1|1|1|1|0|1|0|1|0|1|<span style={{ color: "#da6000" }}>**2005**</span>|
|**6)**|1|1|1|1|1|0|0|1|0|0|0|<span style={{ color: "#da6000" }}>**1992**</span>|
|**7)**|0|0|1|0|0|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**261**</span>|
|**8)**|1|0|1|1|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**1477**</span>|
|**9)**|1|0|1|0|1|0|1|0|1|0|0|<span style={{ color: "#da6000" }}>**1364**</span>|
|**10)**|1|0|1|1|1|0|1|1|1|0|1|<span style={{ color: "#da6000" }}>**1501**</span>|
|**11)**|1|1|1|1|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**1989**</span>|
|**12)**|0|1|1|1|1|0|0|1|1|1|0|<span style={{ color: "#da6000" }}>**974**</span>|
|**13)**|1|0|1|1|1|0|1|0|1|0|0|<span style={{ color: "#da6000" }}>**1492**</span>|
|**14)**|1|0|0|1|1|0|0|0|1|1|1|<span style={{ color: "#da6000" }}>**1223**</span>|
|**15)**|1|0|1|1|1|0|0|0|1|1|1|<span style={{ color: "#da6000" }}>**1479**</span>|
|**16)**|1|1|1|1|1|0|1|1|1|0|1|<span style={{ color: "#da6000" }}>**2013**</span>|
|**17)**|0|0|0|1|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**197**</span>|
|**18)**|1|0|1|0|1|0|0|0|1|1|0|<span style={{ color: "#da6000" }}>**1350**</span>|
|**19)**|1|1|1|1|1|0|1|0|1|0|0|<span style={{ color: "#da6000" }}>**2004**</span>|
|**20)**|1|1|1|1|1|0|0|0|1|0|0|<span style={{ color: "#da6000" }}>**1988**</span>|
|**21)**|0|0|1|0|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**325**</span>|
|**22)**|1|0|1|1|1|0|1|0|1|0|1|<span style={{ color: "#da6000" }}>**1493**</span>|
|**23)**|1|0|0|1|1|0|0|0|1|0|1|<span style={{ color: "#da6000" }}>**1221**</span>|
|**24)**|0|0|1|0|1|0|1|0|0|1|0|<span style={{ color: "#da6000" }}>**338**</span>|

</div>


## Step 3: Calculate the Checksum

The last eight missing digits are calculated from the 256 bits you have so far, creating what is called a **checksum**. A checksum is a short verification code that lets your wallet detect if you have made a typo when entering the seed. If the checksum doesn't match, the wallet will warn you that something is wrong.

### Generate the hash output

On your air-gapped Linux machine, open a terminal and feed your 256-bit binary string into SHA-256. Replace the example digits with your own binary string — it must be one continuous line:

```bash
echo 1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001 | shasum -a 256 -0
```

This command takes your binary sequence, applies the SHA-256 hash function, and produces a unique hexadecimal output. Our example output:

```text
52831c8346d7423d26648b51490f2d7ae0ddf172956f241a6bb8bdc0d887c292
```

The checksum is the first **8 bits** of that hash, which means we only care about the **first two hexadecimal characters**: `52`.

### Convert the first two hex characters to binary

We need to convert the two hexadecimal digits `5` and `2` into their 4-bit binary equivalents. Hexadecimal is a number system that uses 0–9 plus a–f to represent values 0–15.

<div class="fixed-width-table">

|HEX|Decimal|Binary|
|-|-|-|
|0|0|0000|
|1|1|0001|
|2|2|0010|
|3|3|0011|
|4|4|0100|
|5|5|0101|
|6|6|0110|
|7|7|0111|
|8|8|1000|
|9|9|1001|
|a|10|1010|
|b|11|1011|
|c|12|1100|
|d|13|1101|
|e|14|1110|
|f|15|1111|

</div>

From the table:

- **5** in binary is **0101** (4 bits)
- **2** in binary is **0010** (4 bits)

Concatenated, the checksum is **`01010010`** (8 bits). Append it to the 24th row so the row now has 11 bits, completing the 264-bit sequence.

<div class="fixed-width-table">

|#||||||||||||
|-|-|-|-|-|-|-|-|-|-|-|-|
|**1)**|1|0|1|1|1|0|0|0|1|0|1|
|**2)**|1|1|0|1|1|1|0|0|1|0|0|
|**3)**|1|0|1|1|1|1|0|0|1|1|1|
|**4)**|0|1|1|0|1|0|0|0|1|0|1|
|**5)**|1|1|1|1|1|0|1|0|1|0|1|
|**6)**|1|1|1|1|1|0|0|1|0|0|0|
|**7)**|0|0|1|0|0|0|0|0|1|0|1|
|**8)**|1|0|1|1|1|0|0|0|1|0|1|
|**9)**|1|0|1|0|1|0|1|0|1|0|0|
|**10)**|1|0|1|1|1|0|1|1|1|0|1|
|**11)**|1|1|1|1|1|0|0|0|1|0|1|
|**12)**|0|1|1|1|1|0|0|1|1|1|0|
|**13)**|1|0|1|1|1|0|1|0|1|0|0|
|**14)**|1|0|0|1|1|0|0|0|1|1|1|
|**15)**|1|0|1|1|1|0|0|0|1|1|1|
|**16)**|1|1|1|1|1|0|1|1|1|0|1|
|**17)**|0|0|0|1|1|0|0|0|1|0|1|
|**18)**|1|0|1|0|1|0|0|0|1|1|0|
|**19)**|1|1|1|1|1|0|1|0|1|0|0|
|**20)**|1|1|1|1|1|0|0|0|1|0|0|
|**21)**|0|0|1|0|1|0|0|0|1|0|1|
|**22)**|1|0|1|1|1|0|1|0|1|0|1|
|**23)**|1|0|0|1|1|0|0|0|1|0|1|
|**24)**|0|0|1|<span style={{ color: "#da6000" }}>**0**</span>|<span style={{ color: "#da6000" }}>**1**</span>|<span style={{ color: "#da6000" }}>**0**</span>|<span style={{ color: "#da6000" }}>**1**</span>|<span style={{ color: "#da6000" }}>**0**</span>|<span style={{ color: "#da6000" }}>**0**</span>|<span style={{ color: "#da6000" }}>**1**</span>|<span style={{ color: "#da6000" }}>**0**</span>|

</div>

Now convert row 24 from binary to decimal using the same method as Step 2. That gives the final decimal value of row 24 — in our example, **338**.


## Step 4: Look Up BIP39 Words

BIP39 (Bitcoin Improvement Proposal 39) defines a list of **2048 words**, arranged alphabetically. Each word corresponds to a specific position. Your 24 decimal numbers (from Step 2 and the checksum row in Step 3) are used to look up your 24 seed words.

- The smallest possible value is 0 (binary `00000000000`), which corresponds to the word **"abandon"** — the first word on the list.
- The largest possible value is 2047 (binary `11111111111`), which corresponds to the word **"zoo"** — the last word on the list.

:::info Zero-indexed list, one-indexed GitHub
Computers count from 0. The BIP39 position of "abandon" is 0, not 1. However, the [official BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) on GitHub displays line numbers starting from 1. So a BIP39 position of 1477 maps to **GitHub line 1478**. Always add 1 to your decimal when searching the GitHub file.
:::

For example, the first 11-bit binary number we calculated equals 1477 in decimal. On GitHub you will find it on line 1478 — the word is **"reward"**.

Look up each decimal value below (remembering to add 1 when searching GitHub) and record the corresponding word for all 24 rows.

<div class="fixed-width-table">

|#|BIP39|GitHub|Word|
|-|-|-|-|
|**1)**|<span style={{ color: "#da6000" }}>**1477**</span>|1478|<span style={{ color: "#da6000" }}>**reward**</span>|
|**2)**|<span style={{ color: "#da6000" }}>**1764**</span>|1765|<span style={{ color: "#da6000" }}>**symptom**</span>|
|**3)**|<span style={{ color: "#da6000" }}>**1511**</span>|1512|<span style={{ color: "#da6000" }}>**rude**</span>|
|**4)**|<span style={{ color: "#da6000" }}>**837**</span>|838|<span style={{ color: "#da6000" }}>**hamster**</span>|
|**5)**|<span style={{ color: "#da6000" }}>**2005**</span>|2006|<span style={{ color: "#da6000" }}>**wide**</span>|
|**6)**|<span style={{ color: "#da6000" }}>**1992**</span>|1993|<span style={{ color: "#da6000" }}>**weekend**</span>|
|**7)**|<span style={{ color: "#da6000" }}>**261**</span>|262|<span style={{ color: "#da6000" }}>**camera**</span>|
|**8)**|<span style={{ color: "#da6000" }}>**1477**</span>|1478|<span style={{ color: "#da6000" }}>**reward**</span>|
|**9)**|<span style={{ color: "#da6000" }}>**1364**</span>|1365|<span style={{ color: "#da6000" }}>**pride**</span>|
|**10)**|<span style={{ color: "#da6000" }}>**1501**</span>|1502|<span style={{ color: "#da6000" }}>**roof**</span>|
|**11)**|<span style={{ color: "#da6000" }}>**1989**</span>|1990|<span style={{ color: "#da6000" }}>**weather**</span>|
|**12)**|<span style={{ color: "#da6000" }}>**974**</span>|975|<span style={{ color: "#da6000" }}>**keep**</span>|
|**13)**|<span style={{ color: "#da6000" }}>**1492**</span>|1493|<span style={{ color: "#da6000" }}>**ritual**</span>|
|**14)**|<span style={{ color: "#da6000" }}>**1223**</span>|1224|<span style={{ color: "#da6000" }}>**ocean**</span>|
|**15)**|<span style={{ color: "#da6000" }}>**1479**</span>|1480|<span style={{ color: "#da6000" }}>**rib**</span>|
|**16)**|<span style={{ color: "#da6000" }}>**2013**</span>|2014|<span style={{ color: "#da6000" }}>**wing**</span>|
|**17)**|<span style={{ color: "#da6000" }}>**197**</span>|198|<span style={{ color: "#da6000" }}>**board**</span>|
|**18)**|<span style={{ color: "#da6000" }}>**1350**</span>|1351|<span style={{ color: "#da6000" }}>**potato**</span>|
|**19)**|<span style={{ color: "#da6000" }}>**2004**</span>|2005|<span style={{ color: "#da6000" }}>**whisper**</span>|
|**20)**|<span style={{ color: "#da6000" }}>**1988**</span>|1989|<span style={{ color: "#da6000" }}>**weasel**</span>|
|**21)**|<span style={{ color: "#da6000" }}>**325**</span>|326|<span style={{ color: "#da6000" }}>**chunk**</span>|
|**22)**|<span style={{ color: "#da6000" }}>**1493**</span>|1494|<span style={{ color: "#da6000" }}>**rival**</span>|
|**23)**|<span style={{ color: "#da6000" }}>**1221**</span>|1222|<span style={{ color: "#da6000" }}>**obvious**</span>|
|**24)**|<span style={{ color: "#da6000" }}>**338**</span>|339|<span style={{ color: "#da6000" }}>**clean**</span>|

</div>

Congratulations — you have now created a valid 24-word Bitcoin mnemonic seed.

### Verify the seed in Sparrow Wallet

As a final sanity check, install a software wallet such as Sparrow on your air-gapped computer and enter the 24 words. If Sparrow accepts the seed, your checksum matched and the whole chain of calculations is correct. If it rejects the seed, the checksum is wrong — double-check every step, especially the SHA-256 output and the final row of binary.

![Importing the seed into Sparrow Wallet for verification](/img/seed/import.webp)


## Step 5: Back Up on Metal

Your Bitcoin seed phrase is the key to your funds. If it is lost or compromised, your Bitcoin is gone forever. Paper and digital backups can degrade, get lost, or be destroyed. A metal seed plate is a durable, fireproof, waterproof backup that can last decades.

### Why metal

- **Fire and water resistance** — Unlike paper, metal plates withstand extreme temperatures and flooding.
- **Durability** — Metal does not degrade over time the way paper and electronic storage do.
- **Tamper resistance** — A sealed metal backup makes unauthorized access visible.
- **Longevity** — A well-engraved or stamped metal seed plate can last a lifetime, keeping your Bitcoin recoverable for decades.

### How to store your metal backup safely

- Keep it in a secure location — a safe, hidden vault, or safety deposit box.
- Consider splitting your seed into multiple secure locations.
- Avoid storing it digitally or in places prone to theft or destruction.
- Once the seed is stamped into metal, **destroy the paper copy** (burn it).

Your Bitcoin is only as safe as your seed backup. Protect it wisely.

---

<RelatedArticles
  title="Related Topics"
  articles={[
    { title: "Seed Phrases", href: "/docs/learn/keys/seed/", tag: "Learn" },
    { title: "Number Systems", href: "/docs/learn/keys/number-systems/", tag: "Technical" },
    { title: "Air-Gapped Computer", href: "/docs/advanced/air-gapped-computer/", tag: "Guide" },
    { title: "Keys Overview", href: "/docs/learn/keys/", tag: "Overview" },
  ]}
/>
