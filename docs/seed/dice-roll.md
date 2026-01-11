---
sidebar_position: 3
title: "Roll the Dice"
description: "Practical guide: Roll the Dice. Covers bitcoin, self custody, security."
keywords: ["bitcoin", "self custody", "security", "privacy", "seed", "roll", "dice"]
slug: "/seed/roll-the-dice/"
tags: ["seed", "dice", "entropy"]
---
# Roll the Dice

Our goal is to generate a large, truly random binary number by rolling the dice.

Procedure:


### Assign Binary Values

Before rolling the dice, you need to determine how each roll will be converted into a binary value. The following method ensures an equal probability of obtaining a **0** or **1**:

- If the die lands on **1, 2, or 3**, it is assigned a value of **0**.
- If the die lands on **4, 5, or 6**, it is assigned a value of **1**.


### Roll and Record

Roll the dice and record the results from left to right. Consistency is key, always read in the same order to maintain randomness. If it’s unclear which die is further to the left, re-roll those dice.

:::warning
It is crucial that the data is truly random. If it lacks randomness, there is a risk that someone else could reproduce the exact same sequence. This would allow them to regenerate your private key and potentially access all of your Bitcoin.
:::


### Format the Output

Create 23 rows of 11 binary digits each, plus a final 24th row containing only 3 digits.

- For readability, separate each row into three groups: 4-4-3 (e.g., 1010 1101 011).
- Keep the numbers neatly aligned in columns and leave space between rows for manual calculations later.

This structured approach will help you maintain accuracy and ensure a truly random binary sequence for your needs.

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

Now, let’s look at the total number of binary digits we’ll generate. In this case, we have 256 bits, which breaks down into 23 full sets of 11 bits each, with a partial 24th set containing only three bits.

Later, you’ll see why this matters, but for now, just understand that every 11-bit segment will be converted into a mnemonic seed word. If we divide 256 bits by 11, we get 23.27 words, which isn’t a whole number. Since a mnemonic seed must contain whole words, we don’t yet have enough bits to complete a 24-word seed.

To fix this, we need eight more bits, bringing our total to 264 bits. This allows us to cleanly divide the bits into 24 full sets of 11, each corresponding to a word in the mnemonic phrase. As you’ll see later, these final eight extra bits serve a crucial role in the process.