---
sidebar_position: 6
title: "Look up BIP39 Words"
description: "Practical guide: Look up BIP39 Words. Covers bitcoin, self custody, security."
keywords: ["bitcoin", "self custody", "security", "privacy", "seed", "look", "bip39", "words"]
tags: ["seed", "BIP39"]
---
# Look up BIP39 Words

BIP39 (Bitcoin Improvement Proposal 39) defines a list of 2048 words, arranged alphabetically. Each word in the list corresponds to a specific position, which is used to map a binary number to its matching word. For example, if the binary number you calculate corresponds to the number 1477, the word in that position on the list is "reward”.

- The smallest possible value is 0 (binary: 00000000000), which corresponds to the word “abandon” ,  the first word on the list.
- The largest possible value is 2047 (binary: 11111111111), which corresponds to the word “zoo” ,  the last word on the list.

:::warning Important
Computers count starting at 0. So, for example, the fifth item in a list is actually item number 4 (not 5). This is crucial when looking up words on the BIP39 list.
:::

The official [BIP 39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) on GitHub displays line numbers starting from 1, not 0. This creates a slight mismatch between what you see in the list and the actual position in the BIP 39 specification.

For instance, the first 11-digit binary number you’ve calculated equals 1477 in decimal. When you look at the GitHub list, you’ll find the word in line 1478 (since GitHub’s line numbers start at 1). This word will be “reward.”

Go ahead and look up each decimal value ,  remember to add 1 to your calculated result to match the line numbers on GitHub ,  and find the corresponding word for all 24 binary rows.

If you’ve made it this far, congratulations! You’ve now created a valid 24-word Bitcoin mnemonic seed.

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

Now, the last step is to use your seed phrase to verify that the 24 words were correctly generated. You can install a software wallet, like Sparrow Wallet, on your airgapped computer and enter the seed words. If they’re rejected, it means there was an error during the process. Sparrow will quickly show an error if there's a mismatch, typically because the checksum doesn't match. So, take your time and carefully double-check each step!

![Import](/img/seed/import.webp)