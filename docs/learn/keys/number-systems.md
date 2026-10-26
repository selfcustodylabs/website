# Number Systems: Binary, Decimal, Hex

> Understand binary, decimal, and hexadecimal number systems used in Bitcoin private keys. Essential foundation for understanding seed phrases.

Source: https://selfcustodylabs.com/docs/learn/keys/number-systems/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Bitcoin keys are numbers, and the same number can be written in different bases: decimal (base 10) for people, binary (base 2) for the bits a seed is made of, and hexadecimal (base 16) for compact display of hashes and keys. The [dice guide](https://selfcustodylabs.com/docs/learn/keys/random/) moves between all three, so this page covers just enough to follow it.

## What is decimal?

Decimal is base 10: each digit has ten possible values, 0 to 9. Counting past 9 adds a digit on the left and resets the right one to 0, giving 10. Each position is worth ten times the one to its right (ones, tens, hundreds).

## What is binary?

Binary is base 2: each digit, or bit, is 0 or 1. Counting goes 0, 1, 10, 11, 100, 101, 110, 111, 1000. Each position is worth twice the one to its right: 1, 2, 4, 8, 16 and so on, so `1011` is 8 + 0 + 2 + 1 = 11. A die roll in the dice guide becomes one bit, and 11 bits make one seed word, because 2<sup>11</sup> = 2048 is the length of the BIP39 word list.

## What is hexadecimal?

Hexadecimal is base 16: each digit has sixteen values, written 0 to 9 and then a to f for 10 to 15. One hex digit stands for exactly four bits, which makes it a compact way to write binary: 2047 is `11111111111` in binary (11 digits) but `7ff` in hex. SHA-256 hashes, such as the one the dice guide uses for its checksum, are usually printed in hex.

<div class="fixed-width-table">

|Decimal|Binary|Hex|
|-|-|-|
|0|0000|0|
|1|0001|1|
|2|0010|2|
|3|0011|3|
|4|0100|4|
|5|0101|5|
|6|0110|6|
|7|0111|7|
|8|1000|8|
|9|1001|9|
|10|1010|a|
|11|1011|b|
|12|1100|c|
|13|1101|d|
|14|1110|e|
|15|1111|f|

</div>
