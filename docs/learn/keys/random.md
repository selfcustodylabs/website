# Generate Your Own Bitcoin Seed Phrase with Dice

> Generate a BIP39 Bitcoin seed phrase from dice rolls. True randomness, verifiable checksum, fully offline, no need to trust the wallet RNG.

Source: https://selfcustodylabs.com/docs/learn/keys/random/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

You can make a 24-word BIP39 seed phrase yourself: roll dice 256 times to get the randomness, compute an 8-bit checksum with SHA-256 on a computer that has never been online, and look up the 24 words in the BIP39 word list. Done this way, no wallet's random number generator is involved, so a broken or backdoored generator cannot weaken your seed. That is exactly the flaw that let attackers sweep Coldcard seeds in July 2026; seeds made from dice were untouched.

Time: 2-4 hours. Cost: $10-30 (casino dice) + $20-50 (metal backup plate). Level: Intermediate. Updated: 26 Oct 2026. You need: Casino dice, an air-gapped computer or Raspberry Pi Zero, a metal backup plate.

Read [what seed phrases are](https://selfcustodylabs.com/docs/learn/keys/seed/) and [how private keys relate to them](https://selfcustodylabs.com/docs/learn/keys/intro/) first if they are new to you; [number systems](https://selfcustodylabs.com/docs/learn/keys/number-systems/) covers the binary and hexadecimal used below.

**Danger: A mistake here can lose everything**
A seed made on a computer that has ever been online may already be in someone else's hands. Numbers you "randomly" think of instead of rolling are guessable. One wrong word gives a different, empty wallet, and a paper-only backup burns. None of these can be undone, so read the whole guide before rolling the first die.

## Why generate your own seed?

A wallet that generates your seed phrase asks you to trust three things at once:

<div class="fixed-width-table">

| Risk | What it means |
|------|-------------|
| Weak randomness | The software may not gather enough real entropy |
| Backdoors | A flaw, accidental or deliberate, can make seeds predictable |
| Supply chain attacks | Compromised devices have been sold with pre-generated seeds |

</div>

The first risk stopped being theoretical in July 2026. A Coldcard firmware bug, present since 2021, had been generating seeds from a predictable software generator instead of the hardware one, and attackers brute-forced roughly $116 million out of more than 5,200 wallets on air-gapped devices that were never hacked. Seeds generated from dice rolls were unaffected, because the dice bits never went through the broken generator. [The Coldcard entropy incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) has the full story.

Generating the seed with dice means you can check the randomness yourself, no software flaw can touch it, and you understand exactly what the 24 words are.

## Who is this guide for?

| Situation | Recommendation |
|-----------|----------------|
| Learning with small amounts | Use a hardware wallet that takes dice rolls, with the cross-check below, instead of the full manual process |
| Moderate holdings, and you want to learn how it works | Yes: practise on testnet first |
| Significant holdings | Yes: verifiable entropy is worth the effort |
| You do not trust hardware wallet random number generators | Yes: 2026 proved that instinct right |
| You are not comfortable with technical processes | Use a device that takes dice rolls, with the cross-check below; a mistake in the manual process loses everything |

Before July 2026 we said most people should let their hardware wallet generate the seed. The [Coldcard entropy incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) retired that advice: device randomness is now the fallback, not the default. If the full manual process is more than you want, the middle path below gets most of the benefit.

### How do you use your hardware wallet's dice feature safely?

As of October 2026 a few devices take dice rolls on the device itself: the Keystone 3 Pro, SeedSigner, Krux and Coldcard. BitBox, Blockstream (Jade) and Foundation (Passport) document procedures for choosing the words yourself, and the Trezor Safe has no dice path at all, so with it you make the seed with this guide and restore it onto the device; the [comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/#entropy-who-lets-you-verify) lists each. With a device that takes rolls, two rules make it trustworthy:

1. Roll enough. 50 rolls of a six-sided die contribute about 128 bits, enough to protect you even if the device's generator is completely broken. For a 24-word seed, roll 99 times (about 256 bits). This is why dice-rolled Coldcard seeds survived the incident.
2. Cross-check the result. A buggy or malicious device could silently ignore your rolls. Re-derive the seed from the same rolls on an independent device (a [SeedSigner](https://selfcustodylabs.com/docs/seedsigner/) or [Krux](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/#seedsigner--krux-diy), or this guide's manual process on an air-gapped computer) and compare all 24 words. If they match, the device used your entropy.

## What must the environment be like?

The seed is only as safe as the room and the machine it is made in. Before starting, make sure of all of these:

- The computer has never connected to the internet and never will (an air-gapped computer).
- It boots a fresh operating system from verified, read-only media, such as a Tails USB stick.
- It has no working wireless hardware: Wi-Fi and Bluetooth are physically removed or disabled in the firmware settings.
- Its cameras and microphones are covered or disconnected.
- Nobody can see the screen or the paper, and no phones, smartwatches or other electronics are in the room, since they can record screens and keystrokes.

If any of these is not true, the seed may be exposed before you finish making it.

## What do you need?

### Casino dice

Casino-grade dice are precision-machined with flush, filled pips, so every face weighs the same. Ordinary dice have material drilled out for each pip, which makes some faces very slightly more likely than others.

That bias is small and not dangerous here: across 256 bits, a fraction-of-a-percent bias per face costs a negligible amount of entropy. Casino dice remove the question, and they are cheap.

Rolling several dice at once does not cancel out a die's bias, because each die still produces its own slightly biased bit. Throwing 5 to 10 dice at a time only makes the process faster, collecting 5 to 10 bits per throw instead of one.

![Blue and green translucent casino dice on a grey surface, the kind with flush, filled pips used for seed generation](https://selfcustodylabs.com/img/seed/dice.webp)

### An air-gapped computer

An air-gapped computer is one that has never been connected to the internet and is physically unable to connect. Two options suit this guide:

- A Raspberry Pi Zero 1.3, which has no Wi-Fi or Bluetooth hardware at all. It is harder to find than the later wireless models, but worth the search.
- A laptop or PC with the Wi-Fi and Bluetooth modules physically removed and the Ethernet port disabled, so that even a thief could not put it online.

You do need a computer. Steps 1, 2 and 4 can be done with pen and paper, but step 3 computes a SHA-256 hash, which cannot practically be done by hand.

![A Raspberry Pi Zero 1.3 circuit board, the model without wireless hardware](https://selfcustodylabs.com/img/seed/rpizero.webp)

### Paper and pen

Paper is only a temporary record of the process, and every sheet is burned once the seed phrase is on metal. The [dice seed worksheet](https://selfcustodylabs.com/worksheets/dice-seed/) is the grid from steps 1 to 4 as a printable sheet, with the column values, the checksum boxes and a column for each word.

### Metal seed storage

The finished seed phrase goes onto a metal plate, stamped or engraved, which survives the fire, water and slow decay that destroy paper.

![A Billfodl steel seed backup with letter tiles slotted into numbered rows](https://selfcustodylabs.com/img/seed/metalseed.webp)

## How do 256 dice rolls become 24 words?

A 24-word BIP39 seed is 264 bits, and those bits come from two places: 256 from your dice and 8 from a checksum calculated from them.

<div class="fixed-width-table">

| Where it comes from | Bits | Step |
|---|---|---|
| Dice rolls (your entropy) | 256 | Step 1 |
| Checksum, calculated from those 256 bits | 8 | Step 3 |
| Total | 264 | 264 ÷ 11 = 24 words |

</div>

You will write the 256 dice bits into a grid of 24 rows, 11 bits per row. That fills 23 rows completely (23 × 11 = 253) and leaves 3 bits in row 24, which stays unfinished until step 3 supplies the last 8 bits from the checksum. That is why the steps must be done in order: row 24 has no value until step 3.

## Step 1: Roll dice for entropy

Step 1 turns dice rolls into a 256-bit random binary number.

### Assign binary values

Each die result becomes one bit, with an equal chance of 0 or 1:

- 1, 2 or 3 is a 0.
- 4, 5 or 6 is a 1.

### Roll and record

You need 256 individual die results, one per bit. With 5 dice that is about 52 throws; with 10 dice, about 26. Stop once you have 256 bits and discard any extras from the final throw.

Roll the dice and record the results from left to right, always in the same order. If it is unclear which die is further left, roll those dice again.

Every bit has to come from a die. A sequence you choose, or alter because it "looks too regular", is less random than it seems, and someone who can reproduce it can regenerate your keys and spend your bitcoin.

### Format the output

Write your 256 bits into 23 rows of 11 binary digits, plus a 24th row that will hold only 3 digits for now.

- For readability, split each full row into groups of 4, 4 and 3 (for example `1011 1000 101`).
- Keep the digits aligned in columns and leave space to the right of each row for the calculations in step 2.
- Leave the rest of row 24 blank. Its last 8 digits come from the checksum in step 3.

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

Do not roll dice for the remaining 8 bits. They are the checksum, which is calculated from the 256 bits above so that a wallet can detect typos later.

## Step 2: Convert binary to decimal

Step 2 converts rows 1 to 23 to decimal. Each 11-bit row becomes one number, which step 4 uses to look up a seed word. Skip row 24: it has only 3 of its 11 bits so far, and step 3 completes it.

Do the conversion on the air-gapped computer or with pen and paper, never with an online tool. Pasting the binary into a web calculator could expose your seed.

With 11 binary digits, the smallest number is 0 (`00000000000`) and the largest is 2047 (`11111111111`). Each result will therefore fall in the range 0–2047.

You can convert in either of two ways.

### Method A: air-gapped shell

In a bash terminal, to convert the first row, `10111000101`, type:

```bash
echo $((2#10111000101))
```

This prints 1477. Replace the binary digits in the command with each 11-digit row and run the calculation.

### Method B: paper and pen

At the top-left of your page, write the powers of two from left to right, aligned with the binary digits below: `1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1`.

For each binary digit in the row:

- If the digit is 1, write down the power of two above it.
- If the digit is 0, skip it.

Add up the numbers you wrote down. The sum is the decimal value of the row.

For example, to convert the first row, `10111000101`:

<div class="wrap-code">

```text
1024 + 0 + 256 + 128 + 64 + 0 + 0 + 0 + 4 + 0 + 1 = 1477
```

</div>

Repeat this for rows 1 through 23. You will have 23 decimal numbers, each in the range 0–2047.

<div class="fixed-width-table">

|#|1024|512|256|128|64|32|16|8|4|2|1|TOT|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|**1)**|1|0|1|1|1|0|0|0|1|0|1|**1477**|
|**2)**|1|1|0|1|1|1|0|0|1|0|0|**1764**|
|**3)**|1|0|1|1|1|1|0|0|1|1|1|**1511**|
|**4)**|0|1|1|0|1|0|0|0|1|0|1|**837**|
|**5)**|1|1|1|1|1|0|1|0|1|0|1|**2005**|
|**6)**|1|1|1|1|1|0|0|1|0|0|0|**1992**|
|**7)**|0|0|1|0|0|0|0|0|1|0|1|**261**|
|**8)**|1|0|1|1|1|0|0|0|1|0|1|**1477**|
|**9)**|1|0|1|0|1|0|1|0|1|0|0|**1364**|
|**10)**|1|0|1|1|1|0|1|1|1|0|1|**1501**|
|**11)**|1|1|1|1|1|0|0|0|1|0|1|**1989**|
|**12)**|0|1|1|1|1|0|0|1|1|1|0|**974**|
|**13)**|1|0|1|1|1|0|1|0|1|0|0|**1492**|
|**14)**|1|0|0|1|1|0|0|0|1|1|1|**1223**|
|**15)**|1|0|1|1|1|0|0|0|1|1|1|**1479**|
|**16)**|1|1|1|1|1|0|1|1|1|0|1|**2013**|
|**17)**|0|0|0|1|1|0|0|0|1|0|1|**197**|
|**18)**|1|0|1|0|1|0|0|0|1|1|0|**1350**|
|**19)**|1|1|1|1|1|0|1|0|1|0|0|**2004**|
|**20)**|1|1|1|1|1|0|0|0|1|0|0|**1988**|
|**21)**|0|0|1|0|1|0|0|0|1|0|1|**325**|
|**22)**|1|0|1|1|1|0|1|0|1|0|1|**1493**|
|**23)**|1|0|0|1|1|0|0|0|1|0|1|**1221**|
|**24)**|0|0|1|–|–|–|–|–|–|–|–|*Step 3*|

</div>

## Step 3: Calculate the checksum

Step 3 calculates the 8 missing digits of row 24 from the 256 bits rolled in step 1. Those 8 bits are the **checksum**, a short check value that lets a wallet detect a typo when the seed is entered.

There are two ways to do it. The manual method below hashes the bits and converts two hexadecimal characters by hand, and it shows what a checksum actually is. [A single command](#or-do-it-in-one-command) at the end of this step produces the same result on the same machine. The safest choice is both: work it out by hand, run the command, and stop to find the mistake if the two disagree.

### Write out your 256 bits as one line

Read your grid from step 1 straight through, row 1 to row 24, left to right, with no spaces and no line breaks. Rows 1–23 contribute 11 bits each and row 24 contributes its 3 bits, for 256 characters total.

For our example:

<div class="wrap-code">

```text
1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001
```

</div>

Count the characters before continuing. If there are not exactly 256, the hash will be wrong, and so will the seed.

### Generate the hash output

On your air-gapped Linux machine, feed that 256-bit string into SHA-256:

<div class="wrap-code">

```bash
echo 1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001 | shasum -a 256 -0
```

</div>

Our example output:

<div class="wrap-code">

```text
52831c8346d7423d26648b51490f2d7ae0ddf172956f241a6bb8bdc0d887c292 ^-
```

</div>

**Danger: The `-0` flag is not optional**
`-0` (also written `--01`) puts `shasum` into BITS mode, where each `0` and `1` character is read as an actual bit. BIP39 hashes the 256 raw bits, not the text `"1011…"`.

Drop the `-0` and the command still runs and still prints a perfectly normal-looking hash, but it is the hash of 256 ASCII characters instead: `03ab8729…` rather than `52831c83…`. That produces a wrong checksum, a wrong 24th word, and an invalid seed phrase. The `^` in the output above is `shasum` confirming BITS mode was used.

If `shasum` is unavailable, this gives the same result:

<div class="wrap-code">

```bash
python3 -c "import hashlib; b='YOUR_256_BITS'; print(hashlib.sha256(int(b,2).to_bytes(32,'big')).hexdigest())"
```

</div>

Running both and comparing is a good way to catch a mistyped bit string.

The checksum is the first 8 bits of that hash, which are its first two hexadecimal characters: `52`.

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

- 5 in binary is `0101`
- 2 in binary is `0010`

Together, the checksum is `01010010` (8 bits).

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
|**24)**|0|0|1|**0**|**1**|**0**|**1**|**0**|**0**|**1**|**0**|

</div>

Now convert row 24 to decimal with the same method as step 2. In our example, `00101010010` gives:

<div class="wrap-code">

```text
0 + 0 + 256 + 0 + 64 + 0 + 16 + 0 + 0 + 2 + 0 = 338
```

</div>

You now have all 24 decimal numbers: 23 from step 2, plus 338 from row 24.

### Or do it in one command

Everything above, the hash, the hex conversion, and row 24, can also be produced by one command on the same air-gapped machine. `python3` ships with Raspberry Pi OS, Tails, and every mainstream Linux install, and neither command below needs an internet connection or a single package you have to install.

Start by putting your 256 bits into a variable. You can paste them with the 4-4-3 spacing from your grid, because both commands ignore whitespace:

<div class="wrap-code">

```bash
BITS=1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001
```

</div>

Option 1 prints just the checksum. It finishes row 24 and leaves the word lookups in step 4 to you:

<details>
<summary>Just the Checksum</summary>

```bash
python3 -c "
import hashlib,sys
b=''.join(sys.argv[1].split())
if len(b)!=256 or set(b)-{'0','1'}:
    sys.exit('ERROR: need exactly 256 binary digits, got %d' % len(b))
cs=format(hashlib.sha256(int(b,2).to_bytes(32,'big')).digest()[0],'08b')
print('checksum bits :',cs)
print('row 24 binary :',b[253:]+cs)
print('row 24 decimal:',int(b[253:]+cs,2))
" "$BITS"
```

</details>

For our example this prints:

```text
checksum bits : 01010010
row 24 binary : 00101010010
row 24 decimal: 338
```

Option 2 prints all 24 numbers, every row's decimal value, so it checks step 2 as well as step 3:

<details>
<summary>All 24 Numbers</summary>

```bash
python3 -c "
import hashlib,sys,os
b=''.join(sys.argv[1].split())
if len(b)!=256 or set(b)-{'0','1'}:
    sys.exit('ERROR: need exactly 256 binary digits, got %d' % len(b))
f=b+format(hashlib.sha256(int(b,2).to_bytes(32,'big')).digest()[0],'08b')
w=open('english.txt').read().split() if os.path.exists('english.txt') else []
for n in range(24):
    i=int(f[n*11:n*11+11],2)
    print('%2d. %4d  %s' % (n+1,i,w[i] if w else ''))
" "$BITS"
```

</details>

If you have saved the [official BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) as `english.txt` in the same folder, this also prints the words, giving you an independent check on the lookups you do in Step 4. Without that file it prints the numbers only, which is all you need.

Both commands refuse to guess. If the string is not exactly 256 binary digits, they stop with an error instead of printing a plausible wrong answer; miscounting the bits is the most common mistake in the whole process.

### Why can several last words look valid?

A 24-word seed does have more than one possible valid last word, and it is the most confusing part of this process. Rows 1 to 23 fix 253 of the 264 bits. The 24th word supplies the remaining 11: the 3 bits you rolled in row 24, plus the 8 checksum bits. Because those 3 rolled bits can take 8 values, exactly 8 of the 2048 BIP39 words produce a valid checksum. For the example in this guide they are:

<div class="fixed-width-table">

|Row 24's 3 rolled bits|24th word|
|-|-|
|000|believe|
|**001**|**clean** ← what our dice rolled|
|010|gap|
|011|hover|
|100|message|
|101|rule|
|110|soul|
|111|visual|

</div>

You do not choose between them; your dice already chose. The checksum never picks a word off that list, it completes the word your own 3 bits started. We rolled `001`, so our word is "clean". Had we rolled `110`, the checksum bits would have come out differently too, and the word would have been "soul".

**Danger: The other seven are valid, and no wallet will warn you**
Each of those 8 words produces a perfectly valid BIP39 seed phrase. Pick the wrong one and nothing rejects it: you get a real, valid, completely different wallet that has nothing to do with the dice you rolled. There is no error message, because from the wallet's point of view nothing is wrong.

Never pick a last word from a list of candidates. If you rolled all 256 bits, exactly one word is yours: the one your own checksum produced.

Tools that offer a menu of "valid last words" are built for a different starting point: someone with 23 words and no entropy yet committed to row 24. For them any of the 8 is equally fine, because making that choice is how they supply the last 3 bits. You supplied those bits with dice in step 1, so the choice is already spent.

The effect is more visible with 12-word seeds, where the last word carries 7 entropy bits and only 4 checksum bits, so 128 of the 2048 words are valid last words. That is where most people first meet the idea, and it does not carry over to a dice-rolled seed whose every bit is already fixed.

## Step 4: Look up the BIP39 words

Step 4 turns each of the 24 numbers into a word. BIP39 (Bitcoin Improvement Proposal 39) defines a list of 2048 words in alphabetical order, numbered from 0: position 0 (`00000000000`) is "abandon" and position 2047 (`11111111111`) is "zoo".

The [official BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) on GitHub numbers its lines from 1, so add 1 to each number when you look it up there. The first row's 1477 is on GitHub line 1478: "reward".

Look up all 24 values the same way and write down each word.

<div class="fixed-width-table">

|#|BIP39|GitHub|Word|
|-|-|-|-|
|**1)**|**1477**|1478|**reward**|
|**2)**|**1764**|1765|**symptom**|
|**3)**|**1511**|1512|**rude**|
|**4)**|**837**|838|**hamster**|
|**5)**|**2005**|2006|**wide**|
|**6)**|**1992**|1993|**weekend**|
|**7)**|**261**|262|**camera**|
|**8)**|**1477**|1478|**reward**|
|**9)**|**1364**|1365|**pride**|
|**10)**|**1501**|1502|**roof**|
|**11)**|**1989**|1990|**weather**|
|**12)**|**974**|975|**keep**|
|**13)**|**1492**|1493|**ritual**|
|**14)**|**1223**|1224|**ocean**|
|**15)**|**1479**|1480|**rib**|
|**16)**|**2013**|2014|**wing**|
|**17)**|**197**|198|**board**|
|**18)**|**1350**|1351|**potato**|
|**19)**|**2004**|2005|**whisper**|
|**20)**|**1988**|1989|**weasel**|
|**21)**|**325**|326|**chunk**|
|**22)**|**1493**|1494|**rival**|
|**23)**|**1221**|1222|**obvious**|
|**24)**|**338**|339|**clean**|

</div>

Keep the words in this exact order and number each one as you write it. The same 24 words in a different order are a different, empty wallet.

## Step 5: Verify your seed phrase

Step 5 checks the seed phrase before any money depends on it. Install a software wallet such as Sparrow on the air-gapped computer and enter the 24 words in order.

- If the wallet accepts the seed, the checksum inside the phrase is consistent. That is necessary but not sufficient, so continue to the re-derivation check below.
- If the wallet rejects the seed, the checksum is wrong. Do not adjust words at random, and do not swap the last word for another one that happens to be accepted. Go back and re-check, in this order: the 256-bit string you hashed in Step 3 (exactly 256 characters, no typos), that you used the `-0` flag, the two hex characters you converted, row 24's binary, and finally the word lookups.

Keep this wallet offline. It is being used to check the arithmetic, not to hold funds.

### Does a wallet accepting the seed prove it is yours?

No. A wallet accepting the phrase proves the 24 words are consistent with each other, not that they match the dice you rolled. As step 3 explained, 8 different last words all pass that check, and 7 of them open a different wallet. If you picked the wrong one, or mistyped a word into another one that keeps the checksum valid, Sparrow opens a valid wallet without a single warning. The only thing that catches this is comparing the result against your dice grid:

1. Take the 256-bit string from your grid again.
2. Run [option 2 from step 3](#or-do-it-in-one-command), or redo the lookups by hand on a clean sheet of paper.
3. Compare all 24 words against what you entered into the wallet, in order, one at a time.

If every word matches, the seed really is the one your dice produced. If any word differs, trust the dice grid and find the mistake before you send any funds to it.

![Importing the seed into Sparrow Wallet for verification](https://selfcustodylabs.com/img/seed/import.webp)

### Why check the words on a second, independent wallet?

The re-derivation above proves your words match your dice. It does not prove the wallet is doing the right thing with them. A tampered Sparrow build, the wrong derivation path, or a passphrase you did not mean to set will each accept all 24 words and then show you addresses belonging to a different wallet. You would fund those addresses and find out only when you tried to recover.

The check that catches this is entering the same 24 words into a second, independent wallet implementation and confirming both derive the same account.

Set both wallets up identically first, or they will disagree for reasons that are not a bug:

- The same derivation path. Use `m/84'/0'/0'` (native segwit) on both unless you have a reason to pick another. Sparrow defaults to it; most signing devices ask.
- The same script type. A wallet set to legacy or nested segwit shows completely different addresses from the same key.
- No passphrase on either. A [BIP39 passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/) opens a different wallet entirely, and a stray space counts as one.

Then compare, in this order:

1. The account xpub. Both wallets should show the same [extended public key](https://selfcustodylabs.com/docs/learn/keys/xpub/) for the account. Compare the whole string, not the first few characters. This is the check that matters, because the xpub covers every address in the account rather than one of them.
2. The first receive address, character for character.
3. One address further down, say index 5 or 10, as a spot check that the two agree past index 0.

If the two disagree, do not fund anything. Re-check path, script type and passphrase before you suspect the seed, then re-check the words you typed into each wallet. A mismatch is far more often a settings difference than a bad seed. If the settings are identical and the addresses still differ, trust the dice grid over both wallets and find the error there.

A stateless device makes the better second wallet. [SeedSigner](https://selfcustodylabs.com/docs/seedsigner/) has no persistent storage for a seed to sit in, so the words are exposed only while it is powered, and it is a reasonable second opinion here if you already own one (building and running it is not a beginner project, which is why it is a cross-check in this guide rather than a prerequisite). A second general-purpose computer has storage and may have been online at some point in its life; if you use one, wipe it afterwards and treat it as burned.

This check proves two independent implementations agree on which wallet your words open, so one tampered wallet build cannot quietly point you at somebody else's addresses. It does not prove your entropy was good: that is what the dice in Step 1 are for, and two wallets fed the same words will always agree on the addresses whether those words came from dice or from a backdoored generator. It also does not prove either machine kept your seed to itself, and it costs you a second place the phrase has been. One extra exposure buys a real check; a third device buys nothing.

Comparing addresses across devices protects the setup, not the coins. Once funded, the defence against any single compromised device is [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) across different vendors, where no one device can move funds on its own.

[Backup verification](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) runs the same comparison against the finished metal backup rather than the paper draft.

## Step 6: Back up on metal

Step 6 moves the seed phrase from paper to metal and destroys the paper. Metal survives the fire, flooding and slow decay that destroy paper and electronics, and a well-stamped plate stays readable for decades.

1. Stamp or engrave all 24 words onto the metal plate, numbered and in order.
2. Read the plate back word by word against the paper and confirm every word and position matches.
3. Only then destroy every paper record of the process, the dice grid, the decimal working and the word list, by burning it.
4. Store the plate somewhere secure, such as a safe or a safe deposit box.

For larger amounts, keep a second copy in a separate place. Never store the seed phrase digitally or photograph it.
