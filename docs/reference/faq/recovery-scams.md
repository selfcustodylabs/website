---
sidebar_position: 2
title: "Bitcoin Recovery Scams: How to Protect Yourself"
description: "Why almost every 'Bitcoin recovery service' is a scam. Learn to recognize fraud and understand what legitimate recovery actually looks like."
keywords: ["bitcoin recovery scam", "crypto recovery", "seed phrase scam", "bitcoin fraud", "wallet recovery scam"]
tags: ["faq", "scam", "security", "warning"]
---

# Bitcoin Recovery Scams: How to Protect Yourself

:::danger Scam Alert
If someone has contacted you about recovering your Bitcoin, there is a 99%+ chance they are trying to steal from you.

This page explains how these scams work and how to protect yourself.
:::

## Why Recovery Scams Are So Common

People who have lost access to their Bitcoin are desperate and vulnerable. Scammers know this. They actively search for victims by:

- Monitoring social media for posts about lost Bitcoin
- Monitoring Reddit, Twitter, and Bitcoin forums
- Running fake "recovery service" advertisements
- Creating fraudulent websites that look legitimate
- Impersonating legitimate companies

**The target:** Someone who has lost their seed phrase and is emotionally compromised.

**The approach:** Professional, sympathetic, and full of false hope.


## How Recovery Scams Work

### Scam Type 1: Upfront Payment Fraud

**How it works:**
1. Scammer claims they can recover your Bitcoin
2. They request payment upfront (often in Bitcoin or crypto)
3. They may show "progress" or fake screenshots
4. Eventually they disappear or demand more money
5. You lose both your Bitcoin AND the "recovery fee"

**Red flags:**
- Any request for payment before recovery
- Vague explanations of their "technology"
- Pressure to act quickly
- Untraceable payment methods (crypto, gift cards)

---

### Scam Type 2: Seed Phrase Theft

**How it works:**
1. Scammer offers to help recover your wallet
2. They claim they need your partial seed phrase "to help"
3. With even partial seed information, they may be able to:
   - Steal funds immediately (if enough words provided)
   - Attempt brute-force recovery faster than you can
4. Any recovered funds go to them, not you

**Red flags:**
- ANY request for your seed phrase or partial seed
- Offers to "check if your seed is valid"
- Remote access requests to your computer

---

### Scam Type 3: Fake Software/Websites

**How it works:**
1. Scammer creates fake "recovery tool" or website
2. You're asked to enter your seed phrase to "check" it
3. The seed phrase is transmitted to the scammer
4. They immediately sweep any funds from your wallet

**Red flags:**
- Websites asking you to enter your seed phrase
- Software downloads from unofficial sources
- Tools that promise "instant recovery"

---

### Scam Type 4: Impersonation

**How it works:**
1. Scammer impersonates legitimate company (Ledger, Trezor, etc.)
2. They claim there's been a security breach
3. They ask you to "verify" your seed for your protection
4. Your seed goes directly to the scammer

**Red flags:**
- Unsolicited contact claiming to be from hardware wallet company
- Urgency about "security threats"
- Request for seed phrase (legitimate companies NEVER ask for this)


## The Mathematics of Why Recovery Is Impossible

Scammers rely on you not understanding why recovery is impossible:

**A 24-word seed phrase has:**
- 2048^24 possible combinations
- That's approximately 10^79 combinations
- More than the number of atoms in the observable universe

**Even with the fastest supercomputers:**
- Brute-forcing a full 24-word seed would take longer than the age of the universe
- This is not an exaggeration—it's mathematics

**What IS possible:**
- Recovering 1-2 missing words (2,048 to ~4 million combinations)
- Using known partial information to narrow search space
- This is something you can do yourself with open-source tools

**What is NOT possible:**
- Recovering a seed with no information
- "Hacking the blockchain" to recover funds
- Any magic technology that bypasses mathematics


## Legitimate vs Fraudulent Recovery

### Legitimate Recovery Looks Like:

✅ **Open-source tools** you download and run yourself:
- BTCRecover (https://github.com/3rdIteration/btcrecover)
- SeedRecover
- You maintain full control; no one else sees your seed

✅ **Transparent limitations:**
- Will clearly state that full seed loss is unrecoverable
- Will explain that only 1-2 missing words are feasible
- Won't promise guaranteed results

✅ **No upfront payment:**
- Legitimate help doesn't require payment before recovery
- Open-source tools are free

✅ **Technical education:**
- Explains the process so you understand it
- Empowers you rather than creating dependency

### Fraudulent Recovery Looks Like:

❌ **Claims to recover any seed phrase**
- Mathematically impossible

❌ **Requests payment upfront**
- Scam pattern

❌ **Needs your seed phrase or partial seed**
- If they have it, they can steal from you

❌ **Uses urgency or pressure**
- Legitimate help doesn't pressure you

❌ **Vague about methodology**
- "Proprietary technology" = scam

❌ **Unsolicited contact**
- They found you by monitoring for vulnerable targets


## What To Do If You've Lost Access

### If You're Considering "Recovery Services":

1. **Stop.** Take a breath. Don't act while emotional.
2. **Understand the mathematics.** Full seed loss = no recovery.
3. **Use only open-source tools** you run yourself.
4. **Never share your seed** with anyone for any reason.
5. **Accept that some losses are permanent.**

### If You Have Partial Information:

1. **Document what you know** (words you remember, possible variations)
2. **Download BTCRecover** from the official GitHub
3. **Run it on an air-gapped computer** if possible
4. **Be patient**—recovery takes time
5. **Do not share your partial seed** with "helpers"

### If Someone Has Contacted You:

1. **Assume they are a scammer** until proven otherwise
2. **Do not engage** with them
3. **Do not send any money or information**
4. **Block and report** the account
5. **Warn others** if appropriate


## Stories From Victims

These are real patterns reported by scam victims:

> "They showed me screenshots of 'recovering' other people's wallets. Looked so professional. I paid $2,000 and never heard from them again."

> "They said they just needed 12 of my 24 words to 'verify' the format. The next day my wallet was empty."

> "I got an email that looked exactly like it was from Ledger saying my wallet was compromised. I entered my seed to 'protect' it."

> "They kept asking for more money—first $500, then $1000, then $5000 for 'mining fees.' I lost everything."


## If You've Been Scammed

If you've already fallen victim:

1. **Stop all contact** with the scammer
2. **Do not send more money** even if they promise your first payment back
3. **Document everything** (conversations, addresses, amounts)
4. **Report to authorities:**
   - Local police
   - FBI IC3 (ic3.gov) for US residents
   - National fraud reporting in your country
5. **Report the scam** on platforms where you found them
6. **Warn others** on Reddit, Twitter, forums

**Be aware:** Recovery of scammed funds is extremely rare. The purpose of reporting is to potentially stop the scammer from hurting others.


## Protecting Yourself Going Forward

The best protection is prevention:

1. **Proper backups** — Multiple copies, tested recovery
2. **Never share your seed** — For any reason, with anyone
3. **Healthy skepticism** — If it sounds too good to be true, it is
4. **Verify everything** — Check official sources, not Google ads
5. **Understand the limits** — Know what's mathematically possible

→ See: [Backup Verification Guide](/docs/wallet-setup/backup-verification/)
→ See: [Before You Deposit Checklist](/docs/getting-started/before-you-deposit)


## Summary

| Claim | Reality |
|-------|---------|
| "We can recover any lost Bitcoin" | Mathematically impossible |
| "We have special technology" | No such technology exists |
| "Just send us your seed to verify" | They will steal your funds |
| "Pay upfront and we'll recover" | You'll lose the payment too |
| "We recovered $X million for clients" | Fake testimonials |

**The only legitimate recovery:**
- 1-2 missing words using open-source tools
- Running those tools yourself
- Never sharing your seed with anyone

---

## Related Guides

- [What Happens If You Lose Your Seed?](/docs/reference/faq/lost-seed) — Understanding seed loss
- [Backup Verification](/docs/wallet-setup/backup-verification/) — Prevent loss in the first place
- [Hardware Wallet Setup](/docs/wallet-setup/hardware-wallet/) — Start with good practices
