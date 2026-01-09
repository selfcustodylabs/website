---
sidebar_position: 4
title: Calculate the Checksum
slug: /seed/calculate-checksum/
tags: [seed, binary, checksum]
---

# Calculate the Checksum

The last eight missing digits need to be calculated to create what's called a "checksum."

So, what exactly is a checksum? A checksum is a way for computers to verify that you haven't made a mistake when entering things like your credit card number or bank account details. It's a helpful tool that lets the computer alert you if you've made a typo, this is especially useful when dealing with your Bitcoin private key!

## Generate the Hash Output

To calculate the checksum, you'll need to use your air-gapped computer (though it can be done by hand, but it is not covered in this guide as it is a long process).
On Linux, open a terminal and type the command below. Be sure to replace my binary digits with your own random binary digits. Keep in mind that the sequence should be entered as one long line, even though it might look broken up in this example.

```bash
echo 1011100010111011100100101111001110110100010111111010101111110010000010000010110111000101101010101001011101110111111000101011110011101011101010010011000111101110001111111101110100011000101101010001101111101010011111000100001010001011011101010110011000101001 | shasum -a 256 -0
```

In simpler terms, this command takes the binary sequence you have just created with your dice, applies the SHA-256 hash function, and produces a unique output (the checksum) that verifies the seed is correct. This checksum is important for ensuring that no errors or typos were made when creating the seed.

That said, our output is:

```bash
52831c8346d7423d26648b51490f2d7ae0ddf172956f241a6bb8bdc0d887c292 ^-
```

## Convert HEX to Binary

Now, let’s begin calculating the checksum.

Our goal is to convert the first two digits of our hash output into their four-digit binary equivalents. In this case, we have **"5"** and **"2"**, which are in hexadecimal format. Hexadecimal is a number system that goes beyond the usual digits 0 to 9 by using letters A to F to represent the values 10 to 15.

The conversion process is showed in the below chart and consists of two steps:

#### 1. HEX to Decimal

The first step is to convert the two hexadecimal digits into decimal numbers.

In our case, the hex digits "5" and "2" are directly equivalent to **5** and **2** in decimal. But if we had a **"b"** in the hexadecimal number, it would convert to **11** in decimal.


#### 2. Decimal to Binary

Next, we convert the decimal numbers into their four-digit binary equivalents.

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

The result is:

- **5** in binary is **0101** (4 bits)
- **2** in binary is **0010** (4 bits)

These four-digit binary numbers are the **checksum**, which we will add to the 24th line to finish off the final set of 11 binary digits. At this point, you should have a total of 264 digits (see the below diagram).

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