---
sidebar_position: 2
title: Word Lists
slug: /passphrase/word-lists
tags: [passphrase, self custody, entropy, word lists]
---

# EFF's New Word Lists

:::tip Word List
You can find the word lists below this [link](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt).
:::


## The List Explained

This EFF list is the same size as the original Diceware list, with **7,776 words (6⁵)**. It provides the same level of security for each word you choose but improves usability, making it easier to type and remember.

To create this list, EFF:

- Selected words between 3 and 9 characters long, prioritizing common and easy-to-recognize words.
- Removed offensive, sensitive, or emotionally charged words using public filter lists (e.g., one by Luis von Ahn).
- Eliminated hard-to-spell words and homophones (words that sound the same but have different meanings, which could cause confusion).
- Made sure no word is a prefix of another, reducing typing errors.

The final result is a 7,776-word list suitable for dice-generated passphrases. On average, words in the list are 7.0 characters long, compared to 4.3 characters in Reinhold’s Diceware list. This happened because EFF excluded very short words and focused on more familiar, meaningful words.


## Security & Passphrase Strength

The security of passphrases generated with this list is the same as those made with Diceware—the difference is in usability, not security. For most cases, EFF recommend generating a **six word passphrase**, which provides 77 bits of entropy (a standard way to measure password strength). Each additional word increases security by 12.9 bits, making the passphrase exponentially harder to crack. Adding one extra bit of entropy doubles the number of guesses required to break the passphrase, making brute-force attacks significantly more difficult.

Now you are ready to go to next section and create your seed passphrase by rolling the dice.




### **2. Generate the Passphrase Securely**
- Use **physical dice** (five six-sided dice) and roll for each word.  
- You can use a tool like `diceware` in Linux, but physical dice ensure **no digital footprint**.  
- If using software, ensure it’s **offline and open-source** (e.g., `passphrase.py` with verified code).  

### **3. Store the Passphrase Safely**
Since this is your **main vault**, you should store the passphrase securely:  
- **Write it down** on high-quality paper, laminated or stored in a fireproof safe.  
- **Backup a copy** in a secure location (e.g., a bank deposit box or a second fireproof safe).  
- **Do NOT store it digitally**—even encrypted files can be compromised.  

### **4. Test Memorability**
- Try to memorize it gradually by writing it down multiple times.  
- If necessary, use a **mnemonic technique** (e.g., forming a mental story using the words).  

### **5. Use It Only When Necessary**
- Since this is a **rare-use vault**, avoid frequent access to reduce the risk of exposure.  
- Consider using a **separate, lower-security passphrase** for frequent use wallets and only move funds to/from the vault occasionally.  

Would you like a script or printable template to help with generating and writing down the passphrase securely?