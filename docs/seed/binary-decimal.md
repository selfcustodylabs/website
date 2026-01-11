---
sidebar_position: 5
title: "Binary to Decimal"
description: "Practical guide: Binary to Decimal. Covers Airgapped Computer, Paper & Pen, bitcoin."
keywords: ["bitcoin", "self custody", "security", "privacy", "seed", "binary", "decimal"]
slug: "/seed/binary-to-decimal/"
tags: ["seed", "binary"]
---
# Binary to Decimal

Each of the 24 lines, consisting of 11 binary digits, must be converted to a decimal number **manually** on your airgapped computer or by using paper and pen. This is important because using online tools to convert binary to decimal could expose your seed phrase, which would compromise your security.

A bit about binary: In the binary system, there are only two digits: 0 and 1. The digits we’re familiar with (2, 3, 4, etc.) don’t exist here. So when counting, we start with 0, then 1. But after 1, there's no "2." The next number after 1 is “10” in binary, which is read as "one, zero" (not "ten"). This represents the decimal number 2. The next binary number is “11” ("one, one"), which is 3 in decimal.

In binary, the numbers increase like this:

- “100” is 4,
- “101” is 5,
- “110” is 6,
- “111” is 7,
- “1000” is 8,
- “1001” is 9, and so on.

With 11 binary digits, the smallest number is 0 (00000000000), and the largest is 2047 (11111111111).

To convert each line of binary digits, simply take each 11-digit sequence and convert it to decimal. You can do this in 2 ways:

## Airgapped Computer

For example, to convert the first line, whose number is `10111000101`, you’d type:

```bash
echo $((2#10111000101))
```

This will output **1477**. You just need to replace the binary digits in the command with each 11-digit binary number and run the calculation.


## Paper & Pen

At the top left of your page, write the following numbers from left to right, aligned with the binary digits below. Start with 1024 above the first column, then 512 above the second column, 256 above the third, and so on, halving the number each time until you reach 1 above the last (eleventh) column on the right.

Now, for each binary digit:

- If the digit is 1, write down the decimal number directly above it.
- If the digit is 0, write 0 or skip that number.

Add up all the numbers you wrote down. **This sum is the decimal equivalent of the binary number**.

For example, to convert the first line, whose number is `10111000101`, you'd do:

```bash
1024+0+256+128+64+0+0+0+4+0+1
```
This will output **1477** which is the same number we got with the airgapped computer method.

Repeat this process for all 24 rows. You’ll now have 24 decimal numbers, each ranging from 0 to 2047.

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