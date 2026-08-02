---
sidebar_position: 6
title: "Assess Your Threat Model"
description: "Determine what level of Bitcoin security you actually need. Match your setup to your real risks. Not everyone needs maximum security, but some people do."
keywords: ["bitcoin threat model", "security assessment", "bitcoin security", "self custody", "risk assessment"]
tags: ["threat model", "security", "self custody", "getting started"]
slug: /learn/fundamentals/threat-models
---

# Assess Your Threat Model

By the end of this page you'll know which category of attacker you're actually defending against, how much security is enough for your situation, and how to avoid the two expensive mistakes people make at this stage: under-protecting a meaningful stack, and over-engineering a tiny one.

:::info Why this matters
Security is a trade-off, not a dial you turn up to maximum. Under-protecting a significant amount is obviously dangerous, but over-complicating a small amount is also dangerous, because complexity you can't manage is its own failure mode, and locking yourself out of your own wallet hurts every bit as much as losing it to an attacker. The goal of this page is to match your setup to the threats you actually face.
:::


## What a threat model actually is

A threat model is a short honest conversation you have with yourself about three things, and the answers determine everything else about your setup. The first question is what you're protecting, which covers both how much bitcoin you hold today and how important privacy is for you personally. The second is who you're protecting it from, which ranges from random opportunistic attackers who spray phishing emails at millions of addresses all the way up to targeted adversaries who have decided they want your coins specifically. The third is what you're willing to do about it, which means how much time, money, and mental overhead you're ready to spend on the defense.

If any of those answers changes significantly, your threat model changes, which means you should reassess. Someone who holds a few hundred dollars and tells nobody has a completely different model from someone who holds a meaningful percentage of their net worth and posts about Bitcoin on a public profile, and the right setups for those two people look nothing alike.


## The threat spectrum

Most people fit into one of four broad tiers, and the rest of this page uses those tiers as a reference point. The short version is in the table; the detailed reasoning for each level follows below.

<div class="fixed-width-table">

| Level | Attacker | Typical defense |
|-------|----------|-----------------|
| **1. Opportunistic** | Random hackers, phishing, exchange hacks | Hardware wallet and proper backup |
| **2. Targeted digital** | Sophisticated attackers who know you hold Bitcoin | Hardware wallet, passphrase, own node |
| **3. Physical** | Criminals willing to use force or threats | Multisig and geographic distribution |
| **4. State-level** | Governments and intelligence agencies | Beyond the scope of this guide |

</div>

### Level 1: opportunistic threats

At this level the attacker is not targeting you specifically. They're running automated phishing campaigns, spreading malware across millions of machines, and waiting for an exchange to get hacked so they can sweep up the debris. They're looking for easy victims, and they will move on the moment you stop being one. Think of it as a burglar trying doorknobs up and down the street rather than someone who studied your house for a week.

The defense at this level is straightforward. A reputable hardware wallet protects your keys from the malware on your computer. A tested backup protects you from hardware failure. Keeping your bitcoin off exchanges protects you from the next collapse. And basic operational security, which really only means not pasting your seed phrase into websites or photographing it, closes off the remaining easy attacks. The overwhelming majority of Bitcoin users are at this level, and the overwhelming majority of what they need is a hardware wallet plus a proper backup.

### Level 2: targeted digital threats

At this level the attacker knows you specifically hold bitcoin and has decided it's worth some effort to take it from you. They'll invest hours or days in researching you, they'll try to social-engineer your phone carrier into a SIM swap so they can take over your accounts, they'll send you personalized phishing messages that mention real details from your life, and they'll be patient. They're not trying every door on the street; they're watching yours.

Defending against this requires a step up in operational discipline. A hardware wallet is still the foundation, but now you add a passphrase on top of the seed phrase so that even a seed recovery by an attacker isn't enough to spend your coins. Running your own Bitcoin node means your balance checks and transactions don't go through third-party servers that could be correlated with your identity. UTXO management and coin control keep your transaction history from painting a map of your holdings across the blockchain. And the most underrated defense at this level is declining to discuss your holdings publicly, because every person who knows you own bitcoin is a potential leak point.

### Level 3: physical threats

At this level the attacker is willing to show up at your door. They might be a criminal who heard about you from someone you trusted, a home invader who guessed right, or the much-discussed "five-dollar wrench attack" where the theory of perfect cryptographic security runs into the reality of a baseball bat. The defining feature of this tier is that the attacker doesn't need to hack anything; they only need to convince you, by whatever means, to unlock the wallet yourself.

The defense here is to make sure that even you, under duress, cannot move all of your coins in a single sitting. Multisig achieves this because spending requires multiple keys, and if those keys live in physically separate locations, a single raid on your home cannot produce all of them. Geographic distribution of the backups makes the problem even harder for the attacker. A duress wallet, which is a small decoy wallet with a plausible balance, gives you something to hand over under threat while your real coins sit in a setup the attacker doesn't know exists. And at this tier the operational security rule about not publicly associating yourself with Bitcoin is no longer an optional polish, because public association is how attackers pick their targets in the first place.

### Level 4: state-level threats

At this level the attacker is a government, a regulator, or an intelligence agency, and they have legal authority to compel you, vast surveillance resources to watch you, and the physical means to seize any device you own. They can issue subpoenas, freeze bank accounts that touch bitcoin, and in some jurisdictions jail you for refusing to disclose a passphrase. This is genuinely beyond the scope of a self-custody guide, and honestly it's beyond the scope of any static document, because the right defense depends entirely on which state, under which laws, for which reasons. If this is your threat model, what you need is specialized legal counsel and operational security advice from people who do this for a living, not a checklist from a website.


## Assessment: how much are you actually protecting

The single most useful question for matching a setup to a situation is how much value is at stake. Everything else, including how technically capable you are and how public your association with Bitcoin is, refines the answer, but the starting point is the amount. Think in terms of future value as well as current value, because a small stack today can be a significant one a decade from now, and the setup you build now should still make sense as the holdings grow.

<div class="fixed-width-table">

| Amount | What's appropriate |
|--------|--------------------|
| **Under $1,000** | Software wallet is acceptable while learning |
| **$1,000 to $10,000** | Hardware wallet recommended |
| **$10,000 to $100,000** | Hardware wallet required, passphrase recommended |
| **$100,000 to $1,000,000** | Multisig strongly recommended |
| **Over $1,000,000** | Multisig required, consider a professional security review |

</div>

The other three questions sharpen the answer. The more people know you hold bitcoin, the larger your potential attacker pool becomes: if nobody knows, your risk is lower; if close friends or family know, it's moderate; if you've posted about it publicly or you have a following, your risk climbs meaningfully; and if you're a public figure with real visibility, you should treat targeted attacks as a present concern rather than a hypothetical one. Your jurisdiction matters too, because standard security is usually enough if you live in a stable country with functioning property rights, but capital controls, authoritarian regimes, and active conflict zones all push you toward privacy, geographic distribution, and operational security that you wouldn't otherwise need. And your technical comfort puts a ceiling on the setup you can safely run, because the rule that beats every other rule on this page is "don't implement security you don't understand", since complexity you can't manage is a risk rather than a protection.


## Recommended setups by profile

Four profiles cover the vast majority of readers, and each one corresponds loosely to one of the threat levels above. Use the summary table to see them side by side, then read the profile that matches your situation for the reasoning.

<div class="fixed-width-table">

| Profile | Fits | Core setup | Estimated cost | Complexity |
|---------|------|------------|----------------|------------|
| **A. Casual holder** | Small amounts, learning, low profile | Hardware wallet + backup | $70–150 | Low |
| **B. Serious holder** | Meaningful savings, privacy-conscious | Hardware wallet + passphrase + own node | $200–400 | Medium |
| **C. High-value holder** | Significant holdings, some public exposure | Multisig + geographic distribution + Tor | $500–1,000+ | High |
| **D. Maximum security** | Very large holdings, public figures, hostile jurisdictions | 3-of-5 multisig + air-gapped signing + legal planning | $2,000+ plus professional services | Very high |

</div>

### Profile A: casual holder

This profile fits people holding a small amount of bitcoin, still learning the ropes, and not publicly associated with Bitcoin in any meaningful way. The recommended setup is a reputable hardware wallet (Trezor, Ledger, or BitBox all work fine at this level), a seed backup written on either paper or a metal plate, and a tested recovery so you know the backup actually restores to the same wallet. A passphrase is optional at this profile and often adds more risk of self-lockout than security benefit, and running your own node is a nice-to-have rather than a requirement. The whole setup costs around seventy to a hundred and fifty dollars and can be done in an afternoon.

### Profile B: serious holder

This profile fits people holding meaningful savings in bitcoin, where "meaningful" means an amount you would genuinely be upset to lose. Some people in your life probably know you're interested in Bitcoin, and you care about privacy. The recommended setup is a hardware wallet (ideally a Bitcoin-only device such as the BitBox02 Bitcoin-only or the Coldcard), a metal seed backup because paper is too fragile at this level, a passphrase on top of the seed, your own Bitcoin node so that wallet queries don't leak to third parties, and a habit of UTXO management so you control how your coins move. CoinJoin is optional and depends on how much privacy matters to you specifically. Budget two to four hundred dollars and a weekend of careful work.

### Profile C: high-value holder

This profile fits people with significant holdings who are at least partially known to hold bitcoin and who have reason to worry about targeted attacks. The recommended setup is a two-of-three multisig at minimum, built from hardware wallets made by different manufacturers so that a single vendor compromise cannot take everything, with the keys geographically distributed so a single fire or burglary cannot reach them all. Metal seed backups live in separate locations, your Bitcoin node runs over Tor for privacy, and your day-to-day operational security is tighter than most people bother with, including strict limits on who knows what you hold. CoinJoin and related privacy tools are part of the picture at this level rather than optional polish. Budget five hundred to a thousand dollars or more, and expect the complexity to require real commitment.

### Profile D: maximum security

This profile fits very large holdings, public figures with elevated targeting risk, and anyone operating in a hostile jurisdiction. The setup moves to a three-of-five multisig for additional redundancy, adds air-gapped signing devices for the most sensitive operations, considers open-source firmware such as Libreboot or Coreboot for the signing machines, and distributes keys across multiple jurisdictions so no single legal system can reach them all. A professional security audit becomes genuinely useful at this level, legal and estate planning is essential because people in this profile have real heirs and real tax exposure, and collaborative custody services (Unchained, Casa) are worth considering for a portion of the holdings to share the operational burden with professionals. Budget two thousand dollars or more in hardware alone, plus whatever the professional services cost, and expect the ongoing complexity to be a meaningful part of your life.


## Common mistakes

People tend to fail in the same handful of ways at this stage, and naming them in advance is the cheapest way to avoid them.

The first mistake is **over-engineering a small stack**. Setting up a three-of-five multisig across three countries for five hundred dollars of bitcoin creates more ways to fail than it prevents, because every additional moving part is another thing that can break and the value at stake doesn't justify the complexity. The better answer is to start simple and upgrade security as the holdings grow.

The second mistake is the mirror of the first: **under-engineering a large one**. Holding half a million dollars on a single hardware wallet with the seed phrase tucked into a desk drawer is a single point of failure for life-changing money, and one bad day (a fire, a burglary, a careless relative, a lost device) can take it all. Multisig with geographic distribution exists specifically to solve this, and at this amount it's no longer optional.

The third mistake is **security theater**, which looks like obsessing over Faraday bags and exotic hardware while saving the seed phrase to iCloud. Exotic threats are fun to think about and they make the setup feel serious, but they matter nothing at all if the basics are broken. Master the fundamentals first, because the fundamentals are what attackers actually target.

The fourth mistake is **complexity beyond competence**, which means implementing a setup (usually multisig) without fully understanding how to recover it. If you can't walk through a full recovery from scratch, on paper, right now, then the setup is a risk rather than a protection, because the day you need it you'll be stressed, rushed, and working without internet access.


## Upgrading over time

Your threat model is not fixed, and your setup should grow with you. Reassess whenever your holdings increase significantly, your public profile changes, your jurisdiction situation shifts, your technical capability improves, or you have any kind of security incident or close call. The path almost everyone walks, in order, is to start with a hardware wallet, add a passphrase once the workflow is comfortable, set up their own node as a privacy upgrade, move to multisig when the holdings justify the complexity, and layer on privacy measures as needed along the way. You don't have to reach the end of that path, and most people shouldn't.


## Your action items

Once you've read through this page, the concrete next steps are short and in order.

1. Identify which profile (A, B, C, or D) actually matches your situation today, rather than the one that sounds most impressive.
2. Audit your current setup against the recommendations for that profile, noting every place where you're above or below spec.
3. Make a plan to close the gaps one at a time, starting with the cheapest and highest-impact change.
4. Implement each change in isolation and test it end to end before moving on, because a setup you haven't verified is a setup you're guessing about.
5. Put a reminder in your calendar to reassess in six months, and any time one of the trigger events above (holdings, profile, jurisdiction, capability, incident) actually happens.


## Where to go next

If the audit you've done shows you need a hardware wallet, start with the [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/) because that's the foundation every profile above A depends on. If you're ready to add a passphrase on top of an existing hardware wallet, the [DIY Passphrase Guide](/docs/learn/keys/passphrase/) walks through it safely. If running your own node is the next upgrade, the [Bitcoin Node Setup](/docs/bitcoin-node/) guide covers both the hardware and the software side. If your assessment pushed you into profile C or D, read [Multisig Setup](/docs/learn/wallets/multisig/) carefully before you buy anything, because this is the tier where understanding has to come before implementation. And if your threat model raised privacy as a central concern, [Why Privacy Matters](/docs/learn/privacy/why-privacy-matters) explains what you're actually defending against.
