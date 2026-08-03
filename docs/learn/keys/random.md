---
sidebar_position: 7
title: "Generate Your Own Bitcoin Seed Phrase with Dice"
description: "Generate a BIP39 Bitcoin seed phrase from dice rolls. True randomness, verifiable checksum, fully offline, no need to trust the wallet RNG."
keywords: ["bitcoin seed", "DIY seed", "dice entropy", "BIP39", "seed phrase generation", "air-gapped", "true randomness", "entropy"]
tags: ["private keys", "random number", "entropy", "seed", "BIP39", "dice"]
---

# Generate Your Own Bitcoin Seed Phrase with Dice

Most wallets generate seed phrases for you, but that requires trust: you are trusting that the wallet's random number generator is actually random, hasn't been backdoored, and wasn't compromised somewhere in the supply chain. This guide shows you how to generate a 24-word BIP39 seed phrase from dice rolls, entirely offline, with randomness you can verify yourself.

:::danger Fund Loss Warning
**Mistakes in seed generation can result in permanent, irreversible loss of all Bitcoin.**

Common fatal errors:

- **Using a compromised computer**: If your "air-gapped" machine was ever connected to the internet, it may have malware that captures your seed.
- **Insufficient randomness**: Using weak entropy (like mental "random" numbers) makes your seed guessable.
- **Transcription errors**: A single wrong word means a completely different (empty) wallet.
- **Improper backup storage**: Paper burns, fades, and water-damages easily.

**There is no recovery.** No customer support. No password reset. If you lose access to your seed or generate it insecurely, your Bitcoin is gone forever.

**Do not proceed unless you fully understand these risks.**
:::

:::info What You'll Do
In this guide you will:

- Generate true randomness using physical dice rolls
- Convert your binary entropy into decimal numbers
- Calculate the checksum that completes the final word
- Look up all 24 BIP39 seed words
- Verify the finished seed in an offline wallet
- Securely back up your seed phrase on metal

**Time required:** 2–4 hours
**Difficulty:** Intermediate
**Estimated cost:** $10–30 (casino dice) + $20–50 (metal backup plate)
**Requirements:** [Air-gapped computer](/docs/learn/wallets/air-gapped-wallets) or Raspberry Pi Zero, casino dice
:::

:::tip Prerequisites
Before starting, make sure you understand:

- [What seed phrases are](/docs/learn/keys/seed) and how they protect your Bitcoin
- [Private keys](/docs/learn/keys/intro) and how they relate to seeds
- [Number systems](/docs/learn/keys/number-systems): binary, decimal, and hex
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

- **Verify the randomness yourself**: no trust required
- **Eliminate software vulnerabilities**: dice can't be hacked
- **Understand what you're protecting**: knowledge is security


## Who Is This Guide For?

| Situation | Recommendation |
|-----------|----------------|
| Learning with small amounts | **Not recommended**: Use a hardware wallet's built-in seed generation |
| Moderate holdings, want to learn | **Maybe**: Practice on testnet first and understand the risks |
| Significant holdings, high security needs | **Yes**: Verifiable entropy is worth the effort |
| Don't trust hardware wallet RNG | **Yes**: This eliminates that trust requirement |
| Not comfortable with technical processes | **No**: A mistake here loses everything |

**Most people should use their hardware wallet's seed generation.** This guide is for users who want verifiable randomness and understand the additional risks of a manual process.


## Critical Environment Requirements

:::warning Before You Begin
Your seed generation environment **must** meet ALL of these requirements:

- [ ] **Air-gapped computer**: A machine that has NEVER connected to the internet and NEVER will
- [ ] **Fresh operating system**: Booted from a verified, read-only medium (like a Tails USB)
- [ ] **No wireless hardware**: Wi-Fi and Bluetooth physically removed or disabled in BIOS
- [ ] **No cameras or microphones**: Cover or disconnect them
- [ ] **Private location**: No one can see your screen or your seed words
- [ ] **No electronic devices nearby**: Phones, smartwatches, etc. can capture keystrokes or screens

**If any of these are not met, your seed may be compromised before you even finish generating it.**
:::


## What You'll Need

### Casino dice

Casino-grade dice are precision-machined with flush, filled pips, so every face weighs the same. Cheaper pipped dice have material drilled out for each pip, which makes some faces very slightly more likely than others.

That bias is small and not fatal here: across 256 bits, a fraction-of-a-percent bias per face costs a negligible amount of entropy. Casino dice simply remove the question, and they are cheap.

:::note More dice is about speed, not fairness
Rolling several dice at once does **not** cancel out a die's bias. Each die still produces its own slightly biased bit. Using 5–10 dice per throw is purely a speed optimization: it collects 5–10 bits per throw instead of 1.
:::

![Dice](/img/seed/dice.webp)

### Air-gapped computer

An air-gapped computer is a device that has never been connected to the internet and is physically incapable of doing so. This is crucial for securely generating and handling your private key. Suitable options:

- **Raspberry Pi Zero 1.3**: Highly recommended because it lacks built-in Wi-Fi and Bluetooth, reducing attack surfaces. Harder to find these days, but worth the hunt.
- **Laptop or PC**: A machine with the Wi-Fi and Bluetooth modules physically removed and the Ethernet port permanently disabled. Even if stolen, an attacker cannot put it back online to extract the private key.

You genuinely need a computer for this process. Step 1, 2, and 4 can be done with paper and pen, but **Step 3 computes a SHA-256 hash, which cannot be done by hand.**

![Raspberry Pi Zero](/img/seed/rpizero.webp)

### Paper and pen

Used only as a temporary record of the process. Must be destroyed (burned) after you have transferred the seed phrase to a durable medium.

### Metal seed storage

Once your seed phrase is created, it should be permanently stored on a fireproof, waterproof, tamper-resistant metal plate. This protects your seed from fire, water, and the slow degradation of paper over time.

![Metal seed backup](/img/seed/metalseed.webp)


## How the Numbers Fit Together

Before you start rolling, it helps to see where the process is going. A 24-word BIP39 seed is **264 bits**, and those bits come from two different places:

<div class="fixed-width-table">

| Where it comes from | Bits | Step |
|---|---|---|
| Dice rolls (your entropy) | 256 | Step 1 |
| Checksum, calculated from those 256 bits | 8 | Step 3 |
| **Total** | **264** | 264 ÷ 11 = **24 words** |

</div>

You will write your 256 dice bits into a grid of 24 rows, 11 bits per row. That fills 23 rows completely (23 × 11 = 253) and leaves **3 bits** in row 24. Row 24 stays unfinished until Step 3, when the checksum supplies its last 8 bits.

This is why the steps must be done in order: **row 24 does not have a value until Step 3.**


## Step 1: Roll Dice for Entropy

Your goal is to generate a large, truly random binary number by rolling dice.

### Assign binary values

Before rolling, decide how each die is converted into a binary value. This mapping gives an equal probability of 0 or 1:

- If the die lands on **1, 2, or 3**, it is assigned a value of **0**.
- If the die lands on **4, 5, or 6**, it is assigned a value of **1**.

### Roll and record

You need **256 individual die results**, one per bit. With 5 dice that is about 52 throws; with 10 dice, about 26. Stop once you have 256 bits and discard any extras from the final throw.

Roll the dice and record the results from left to right. Consistency is key: always read in the same order. If it is unclear which die is further to the left, re-roll those dice.

:::warning
It is crucial that the data is truly random. If it lacks randomness, there is a risk that someone else could reproduce the exact same sequence. This would allow them to regenerate your private key and potentially access all of your Bitcoin.
:::

### Format the output

Write your 256 bits into 23 rows of 11 binary digits, plus a 24th row that will hold only 3 digits for now.

- For readability, separate each full row into three groups: 4-4-3 (e.g., `1011 1000 101`).
- Keep the numbers aligned in columns and leave space to the right of each row for the calculations in Step 2.
- **Leave the rest of row 24 blank.** Its final 8 digits are filled in by the checksum in Step 3.

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

You have now generated your 256 bits of entropy: 23 full rows of 11 bits, plus 3 bits in row 24.

**Do not roll dice for the remaining 8 bits.** They are not random data. They are the checksum, and they must be *calculated* from the 256 bits above so your wallet can detect typos later.


## Step 2: Convert Binary to Decimal

Convert **rows 1 through 23** to decimal. Each 11-bit row becomes one number, which you will use in Step 4 to look up a seed word.

:::caution Row 24 is not ready yet
Row 24 still has only 3 of its 11 bits, so it has no value at this stage. You will complete and convert it in Step 3. Skip it for now.
:::

Do the conversion **manually** on your air-gapped computer or with paper and pen. Never use an online tool. Copying your binary string into a web calculator could expose your seed.

With 11 binary digits, the smallest number is 0 (`00000000000`) and the largest is 2047 (`11111111111`). Each result will therefore fall in the range 0–2047.

You can convert in either of two ways.

### Method A: air-gapped shell

In a bash terminal, to convert the first row, `10111000101`, type:

```bash
echo $((2#10111000101))
```

This will output **1477**. Replace the binary digits in the command with each 11-digit row and run the calculation.

### Method B: paper and pen

At the top-left of your page, write the powers of two from left to right, aligned with the binary digits below: `1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1`.

For each binary digit in the row:

- If the digit is 1, write down the power of two above it.
- If the digit is 0, skip it.

Add up all the numbers you wrote down. **The sum is the decimal equivalent of the binary number.**

For example, to convert the first row, `10111000101`:

```text
1024 + 0 + 256 + 128 + 64 + 0 + 0 + 0 + 4 + 0 + 1 = 1477
```

Repeat this for rows 1 through 23. You will have 23 decimal numbers, each in the range 0–2047.

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
|**24)**|0|0|1|–|–|–|–|–|–|–|–|*Step 3*|

</div>


## Step 3: Calculate the Checksum

The 8 missing digits in row 24 are calculated from the 256 bits you rolled in Step 1. Together they form a **checksum**: a short verification code that lets your wallet detect if you have made a typo when entering the seed. If the checksum doesn't match, the wallet warns you that something is wrong.

### Write out your 256 bits as one line

Read your grid from Step 1 straight through, row 1 to row 24, left to right, with no spaces and no line breaks. Rows 1–23 contribute 11 bits each and row 24 contributes its 3 bits, for 256 characters total.

For our example:

```text
1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001
```

Count the characters before continuing. If you don't have exactly 256, the hash will be wrong and so will your seed.

### Generate the hash output

On your air-gapped Linux machine, feed that 256-bit string into SHA-256:

```bash
echo 1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001 | shasum -a 256 -0
```

Our example output:

```text
52831c8346d7423d26648b51490f2d7ae0ddf172956f241a6bb8bdc0d887c292 ^-
```

:::danger The `-0` flag is not optional
`-0` (also written `--01`) puts `shasum` into **BITS mode**, where each `0` and `1` character is treated as an actual bit. BIP39 requires hashing the 256 raw bits, not the text `"1011…"`.

Drop the `-0` and the command still runs and still prints a perfectly normal-looking hash, but it is the hash of 256 ASCII characters instead: `03ab8729…` rather than `52831c83…`. That produces a wrong checksum, a wrong 24th word, and an invalid seed phrase. The `^` in the output above is `shasum` confirming BITS mode was used.

If `shasum` is unavailable, this gives the same result:

```bash
python3 -c "import hashlib; b='YOUR_256_BITS'; print(hashlib.sha256(int(b,2).to_bytes(32,'big')).hexdigest())"
```

Running both and comparing is a good way to catch a mistyped bit string.
:::

The checksum is the first **8 bits** of that hash, which means you only care about the **first two hexadecimal characters**: `52`.

### Convert the first two hex characters to binary

Convert the two hexadecimal digits `5` and `2` into their 4-bit binary equivalents. Hexadecimal is a number system that uses 0–9 plus a–f to represent values 0–15.

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

Concatenated, the checksum is **`01010010`** (8 bits).

### Complete row 24

Append those 8 bits to the 3 bits already in row 24. It now holds 11 bits and your grid is complete at 264 bits:

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

Now convert row 24 to decimal using the same method as Step 2. In our example, `00101010010` gives:

```text
0 + 0 + 256 + 0 + 64 + 0 + 16 + 0 + 0 + 2 + 0 = 338
```

You now have all **24 decimal numbers**: 23 from Step 2, plus 338 from row 24.


## Step 4: Look Up BIP39 Words

BIP39 (Bitcoin Improvement Proposal 39) defines a list of **2048 words**, arranged alphabetically. Each word corresponds to a specific position, and each of your 24 decimal numbers points at one word.

- The smallest possible value is 0 (binary `00000000000`), which corresponds to the word **"abandon"**, the first word on the list.
- The largest possible value is 2047 (binary `11111111111`), which corresponds to the word **"zoo"**, the last word on the list.

:::info Zero-indexed list, one-indexed GitHub
Computers count from 0. The BIP39 position of "abandon" is 0, not 1. However, the [official BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) on GitHub displays line numbers starting from 1. So a BIP39 position of 1477 maps to **GitHub line 1478**. Always add 1 to your decimal when searching the GitHub file.
:::

For example, the first row's decimal is 1477. On GitHub you will find it on line 1478: the word is **"reward"**.

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

:::warning Order is part of the seed
The words must stay in this exact order. The same 24 words in a different order is a completely different (and empty) wallet. Number every word as you write it down.
:::

You have now created a 24-word Bitcoin mnemonic seed. The next step confirms it is valid.


## Step 5: Verify Your Seed Phrase

Install a software wallet such as Sparrow on your air-gapped computer and enter the 24 words in order.

- **If the wallet accepts the seed**, your checksum matched, which means the whole chain of calculations is consistent. Continue to Step 6.
- **If the wallet rejects the seed**, the checksum is wrong. Do not adjust words at random. Go back and re-check, in this order: the 256-bit string you hashed in Step 3 (exactly 256 characters, no typos), that you used the `-0` flag, the two hex characters you converted, row 24's binary, and finally the word lookups.

Keep this wallet offline. It is being used to check the arithmetic, not to hold funds.

![Importing the seed into Sparrow Wallet for verification](/img/seed/import.webp)


## Step 6: Back Up on Metal

Your Bitcoin seed phrase is the key to your funds. If it is lost or compromised, your Bitcoin is gone forever. Paper and digital backups can degrade, get lost, or be destroyed. A metal seed plate is a durable, fireproof, waterproof backup that can last decades.

### Why metal

- **Fire and water resistance**: Unlike paper, metal plates withstand extreme temperatures and flooding.
- **Durability**: Metal does not degrade over time the way paper and electronic storage do.
- **Tamper resistance**: A sealed metal backup makes unauthorized access visible.
- **Longevity**: A well-engraved or stamped metal seed plate can last a lifetime, keeping your Bitcoin recoverable for decades.

### Finish in this order

1. Stamp or engrave all 24 words onto the metal plate, numbered and in order.
2. Read the metal plate back word by word against your paper and confirm every word and position matches.
3. Only then, **destroy every paper record** of the process: the dice grid, the decimal calculations, and the word list. Burn them.
4. Store the plate in a secure location: a safe, hidden vault, or safety deposit box.

Consider splitting your backup across multiple secure locations, and never store the seed digitally or photograph it.

Your Bitcoin is only as safe as your seed backup. Protect it wisely.

---

<RelatedArticles
  title="Related Topics"
  articles={[
    { title: "Seed Phrases", href: "/docs/learn/keys/seed/", tag: "Learn" },
    { title: "Number Systems", href: "/docs/learn/keys/number-systems/", tag: "Technical" },
    { title: "Air-Gapped Computer", href: "/docs/learn/wallets/air-gapped-wallets/", tag: "Guide" },
    { title: "Keys Overview", href: "/docs/learn/keys/", tag: "Overview" },
  ]}
/>
