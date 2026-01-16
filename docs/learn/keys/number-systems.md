---
sidebar_position: 8
title: "Number Systems: Binary, Decimal, Hex"
description: "Understand binary, decimal, and hexadecimal number systems used in Bitcoin private keys. Essential foundation for understanding seed phrases."
keywords: ["binary", "decimal", "hexadecimal", "number systems", "bitcoin cryptography"]
tags: ["binary", "private keys", "basics"]
---
# Number Systems

Before diving into Bitcoin private keys, it’s important to understand how different number systems work.

:::note
If you’re already familiar with binary, decimal, and hexadecimal, feel free to skip ahead.
:::

### Decimal (Base 10):

- Each digit has 10 possible values (0-9).
- For example, in the number 4.25, the first digit is 4, the second is 2, and the third is 5.
- We count: 0, 1, 2, ..., 9. When we reach 9, we add a new digit to the left and reset the rightmost digit to 0 (e.g., 10).

### Binary (Base 2):

- Each digit has only 2 possible values (0 or 1).
- Counting in binary looks like this: 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, etc.
- It may seem like a big jump, but that’s because we’re used to decimal counting.

### Hexadecimal (Base 16):

- Each digit has 16 possible values (0-9 and a-f, where a=10, b=11, ..., f=15).
- Just like playing cards where the Jack, Queen, and King represent specific numbers, letters can be used to represent numbers in hex.
- Hex numbers are more compact. For example, the decimal number 2047 is 11111111111 in binary (11 digits) but just 7FF in hex.


<div class="fixed-width-table">

|Decimal|Binary|HEX|
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

---

## You've Completed the Keys Section

You now understand the foundation of Bitcoin ownership: how private keys work, how they become seed phrases, how child keys are derived, and the number systems that underpin it all.

<NextSteps 
  title="What's Next?"
  items={[
    { 
      label: "Recommended", 
      title: "Hardware Wallets Explained", 
      href: "/docs/learn/wallets/hardware-wallets/", 
      description: "Learn how hardware wallets protect your keys" 
    },
    { 
      label: "Setup", 
      title: "Hardware Wallet Setup", 
      href: "/docs/wallet-setup/hardware-wallet/", 
      description: "Ready to set up your first hardware wallet?" 
    },
    { 
      label: "Advanced", 
      title: "DIY Seed Generation", 
      href: "/docs/security/seed-generation/", 
      description: "Generate your own seed with verifiable randomness" 
    }
  ]}
/>