---
sidebar_position: 2
title: "Bitcoin Recovery Scams: How to Protect Yourself"
description: "Why almost every 'Bitcoin recovery service' is a scam. Learn to recognize fraud and understand what legitimate recovery actually looks like."
keywords: ["bitcoin recovery scam", "crypto recovery", "seed phrase scam", "bitcoin fraud", "wallet recovery scam"]
tags: ["faq", "scam", "security", "warning"]
---

# Bitcoin recovery scams: how to protect yourself

A bitcoin recovery scam is an offer, usually unsolicited, to recover lost or stolen bitcoin for a fee or in exchange for your seed phrase. Nobody can recover bitcoin from a lost seed phrase, reverse a confirmed transaction or take coins back from a thief's address, so the offer is a fraud: the scammer takes the fee and disappears, or takes the seed phrase and empties whatever is left. If someone contacts you about recovering bitcoin, treat them as a scammer, do not send money or information, and block them.

## Why are recovery scams so common?

People who have just lost bitcoin are distressed and want to believe it can be undone, and scammers look for them deliberately: they watch social media, Reddit and bitcoin forums for posts about lost coins, run advertisements for "recovery services", build convincing websites, and impersonate real companies. Their approach is professional, sympathetic and full of false hope.

## What forms do recovery scams take?

| Scam | How it works | Warning signs |
|---|---|---|
| Upfront payment | They claim they can recover your bitcoin, take a fee (often in crypto or gift cards), show fake "progress", then disappear or demand more | Any payment before recovery; vague explanations of their "technology"; pressure to act quickly; untraceable payment methods |
| Seed phrase theft | They say they need your partial seed phrase "to help", then take any funds they can reach, or brute-force the gaps faster than you | Any request for your seed phrase or part of it; offers to "check whether your seed is valid"; requests for remote access |
| Fake software or websites | A "recovery tool" or site asks you to enter your seed phrase, sends it to the scammer and sweeps the wallet | Any website asking for a seed phrase; downloads from unofficial sources; promises of "instant recovery" |
| Impersonation | Someone posing as Ledger, Trezor or another company reports a "security breach" and asks you to "verify" your seed | Unexpected contact from a wallet company; urgent security warnings; any request for a seed phrase, which real companies never make |

Common stories follow these patterns: a victim shown screenshots of other "recovered" wallets pays a fee and hears nothing more; another is told twelve of their twenty-four words are needed "to verify the format" and finds the wallet empty the next day; another receives an email that looks exactly like their wallet maker's and enters the seed phrase to "protect" it; another pays a first fee, then a second, then a third for "mining fees", and loses everything.

## Why is recovery impossible?

A 24-word seed phrase holds 256 bits of randomness, about 10^77 possible seeds, more than the number of atoms in the observable universe. Guessing one with no information would take longer than the age of the universe on any computer, and no technique for "hacking the blockchain" exists.

What is possible is narrower, and you can do it yourself with open-source tools: finding a few missing words from a seed you mostly have (one or two easily, three with days of graphics-card time when the positions are known), or a partly remembered passphrase. [What if you lose your seed phrase](/docs/reference/faq/lost-seed/#some-words-are-missing-or-unreadable) sets out the limits.

## What does legitimate help look like?

| Legitimate | Fraudulent |
|---|---|
| Open-source tools you download and run yourself, such as [BTCRecover](https://github.com/3rdIteration/btcrecover); nobody else sees your seed | Claims to recover any seed phrase |
| Clear about the limits: a fully lost seed cannot be recovered | Asks for payment up front |
| Free, or paid only for a defined result | Needs your seed phrase or part of it |
| Explains the process so you understand it | Vague "proprietary technology" |
| You go to it | It contacts you first, often with urgency |

## What should you do if you have lost access?

If you are thinking about using a recovery service: stop, and do not act while upset. A fully lost seed cannot be recovered; use only open-source tools that you run yourself; never share your seed phrase; and accept that some losses are permanent.

If you have part of the seed: write down everything you remember, including possible variations; download BTCRecover from its official GitHub page; run it on an offline computer if you can; be patient; and never share the partial seed with "helpers".

If someone has contacted you: assume they are a scammer, do not engage, send nothing, and block and report them.

## What if you have already been scammed?

1. Stop all contact, and send no more money, even if they promise to return the first payment.
2. Record everything: messages, addresses, amounts.
3. Report it to your local police, and in the US to the FBI's Internet Crime Complaint Center ([ic3.gov](https://www.ic3.gov/)), or your country's fraud reporting body.
4. Report the scammer on the platform where you found them, and warn others.

Recovering money lost to scammers is rare; reporting helps stop them reaching others. Do not hire a second "recovery" service to get back what the first one took: those are scams too.

## How do you protect yourself in future?

Keep proper backups, with several copies and a tested recovery; never share your seed phrase with anyone, for any reason; distrust anything that sounds too good; check official sources rather than search adverts; and know what is and is not possible. The [backup verification guide](/docs/wallet-setup/backup-verification/) and the [before you deposit checklist](/docs/wallet-setup/before-you-deposit/) cover the practice.

| Claim | Reality |
|-------|---------|
| "We can recover any lost bitcoin" | Impossible |
| "We have special technology" | No such technology exists |
| "Send us your seed to verify it" | They will empty the wallet |
| "Pay up front and we will recover it" | You will lose the fee too |
| "We have recovered millions for clients" | Invented testimonials |

## Common questions

### How do bitcoin recovery scams work?

Scammers reach victims through search adverts, social media and forums, claiming they can recover lost or stolen bitcoin. They charge fees up front, or ask for sensitive information such as seed phrases or wallet files, then disappear or demand more. No legitimate service can recover bitcoin from a lost seed phrase.

### Can a hacker recover your stolen bitcoin?

No. Once bitcoin has moved to an address a thief controls, only the thief's private key can move it again. No hacker, government agency or recovery service can reverse a confirmed transaction or extract keys from an address.

### Are there any legitimate bitcoin recovery services?

A few help with narrow problems: guessing a forgotten passphrase you partly remember, brute-forcing a weak password on an encrypted wallet file, or repairing a physically damaged device that still holds the keys. They never claim to recover funds from a lost seed phrase, and they work openly, with references you can check.

### What should you do if a recovery service has scammed you?

Stop all contact, pay nothing more, record everything, and report it to your local cybercrime authority and the platform where you found the scammer. Do not hire a second recovery service to get back what the first took; those are scams too.
