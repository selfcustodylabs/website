---
sidebar_position: 3
title: "Assess Your Threat Model"
description: "Determine what level of Bitcoin security you actually need. Match your setup to your real risks—not everyone needs maximum security, but some people do."
keywords: ["bitcoin threat model", "security assessment", "bitcoin security", "self custody", "risk assessment"]
tags: ["threat model", "security", "self custody", "getting started"]
---

# Assess Your Threat Model

:::info Why This Matters
The right security setup depends on your situation. Under-securing significant holdings is dangerous. Over-complicating small amounts creates unnecessary friction and risk of self-lockout.

This guide helps you match your security to your actual needs.
:::

## What is a Threat Model?

A threat model asks three questions:

1. **What am I protecting?** (How much Bitcoin? How important is privacy?)
2. **Who am I protecting it from?** (Random hackers? Targeted attackers? Governments?)
3. **What am I willing to do?** (Time, cost, complexity tolerance)

Your answers determine the right security approach.


## The Threat Spectrum

### 🟢 Level 1: Opportunistic Threats

**Who:** Random hackers, phishing attacks, malware, exchange hacks

**Characteristics:**
- Not targeting you specifically
- Looking for easy victims
- Will move on if you're not an easy target

**Protected by:**
- Hardware wallet (any reputable brand)
- Basic operational security (don't share seed)
- Not storing Bitcoin on exchanges

**Recommended setup:** Hardware wallet + proper backup

---

### 🟡 Level 2: Targeted Digital Threats

**Who:** Sophisticated hackers who know you hold Bitcoin, SIM swappers, social engineers

**Characteristics:**
- Know you specifically hold Bitcoin
- Willing to invest time in attacking you
- May use social engineering, SIM swapping, or targeted malware

**Protected by:**
- Hardware wallet with passphrase
- Running your own node
- Enhanced operational security
- Not publicly discussing holdings

**Recommended setup:** Hardware wallet + passphrase + own node + UTXO management

---

### 🟠 Level 3: Physical Threats

**Who:** Criminals who know you hold Bitcoin, home invaders, $5 wrench attackers

**Characteristics:**
- Willing to use physical force or threats
- May target your home or family
- "Give me your seed or else"

**Protected by:**
- Multisig (no single point of compromise)
- Geographic distribution of keys
- Duress wallets / plausible deniability
- Not publicly associating with Bitcoin
- Physical security measures

**Recommended setup:** Multisig + geographic distribution + operational security

---

### 🔴 Level 4: State-Level Threats

**Who:** Governments, law enforcement with legal authority, intelligence agencies

**Characteristics:**
- Can compel disclosure through legal means
- Vast surveillance resources
- May seize devices physically

**Protected by:**
- Maximum operational security
- Jurisdictional diversification
- Extreme privacy measures
- This is beyond most people's needs

**Recommended setup:** Beyond this guide's scope—seek specialized counsel

---

## Assessment Questions

Answer honestly to determine your level:

### Question 1: How much are you protecting?

| Amount | Implication |
|--------|-------------|
| **Under $1,000** | Software wallet may be acceptable |
| **$1,000 - $10,000** | Hardware wallet recommended |
| **$10,000 - $100,000** | Hardware wallet required, passphrase recommended |
| **$100,000 - $1M** | Multisig strongly recommended |
| **Over $1M** | Multisig required, professional security review |

*Note: Think in terms of future value too. A small stack today might be significant in 10 years.*

### Question 2: Does anyone know you hold Bitcoin?

| Situation | Risk Level |
|-----------|------------|
| **No one knows** | Lower risk |
| **Close friends/family know** | Moderate risk |
| **Publicly known** (social media, work) | Higher risk |
| **Public figure / large following** | Significant risk |

*The more people know, the larger your potential attacker pool.*

### Question 3: Are you in a hostile jurisdiction?

| Situation | Consideration |
|-----------|---------------|
| **Stable democracy with property rights** | Standard security usually sufficient |
| **Country with capital controls** | Privacy becomes more important |
| **Authoritarian regime** | Maximum operational security |
| **Active conflict / instability** | Geographic distribution critical |

### Question 4: What's your technical comfort?

| Level | Realistic Setup |
|-------|-----------------|
| **Non-technical** | Hardware wallet, guided setup, possibly collaborative custody |
| **Somewhat technical** | Hardware wallet, passphrase, can run a node |
| **Very technical** | DIY seed, multisig, air-gapped setups, custom infrastructure |

*Don't implement security you don't understand. Complexity you can't manage is a risk.*


## Recommended Setups by Profile

### Profile A: Casual Holder

**Situation:** Small amount, learning about Bitcoin, not publicly associated

**Recommended setup:**
- ✅ Hardware wallet (Trezor, Ledger, or similar)
- ✅ Proper seed backup (paper or metal)
- ✅ Tested backup recovery
- ⬜ Passphrase (optional)
- ⬜ Own node (nice to have)

**Estimated cost:** $70-150
**Complexity:** Low

---

### Profile B: Serious Holder

**Situation:** Meaningful savings, some people know you're into Bitcoin, privacy-conscious

**Recommended setup:**
- ✅ Hardware wallet (Bitcoin-only device recommended)
- ✅ Metal seed backup
- ✅ Passphrase
- ✅ Own Bitcoin node
- ✅ UTXO management / coin control
- ⬜ CoinJoin for privacy (optional)

**Estimated cost:** $200-400
**Complexity:** Medium

---

### Profile C: High-Value Holder

**Situation:** Significant holdings, publicly known to hold Bitcoin, concerned about targeted attacks

**Recommended setup:**
- ✅ Multisig (2-of-3 minimum)
- ✅ Hardware wallets from different manufacturers
- ✅ Geographic distribution of keys
- ✅ Metal seed backups in separate locations
- ✅ Own Bitcoin node with Tor
- ✅ Strict operational security
- ✅ CoinJoin / privacy measures

**Estimated cost:** $500-1000+
**Complexity:** High

---

### Profile D: Maximum Security

**Situation:** Very large holdings, public figure, hostile jurisdiction concerns

**Recommended setup:**
- ✅ Multisig (3-of-5)
- ✅ Air-gapped signing devices
- ✅ Open-source firmware (Libreboot/Coreboot)
- ✅ Multiple geographic jurisdictions
- ✅ Professional security audit
- ✅ Legal/estate planning
- ✅ Consider collaborative custody for part of holdings

**Estimated cost:** $2000+ plus professional services
**Complexity:** Very High

---

## Common Mistakes

### Over-Engineering for Small Amounts

**Mistake:** Setting up 3-of-5 multisig across 3 countries for $500 of Bitcoin.

**Problem:** The complexity creates more ways to fail than the threats you're protecting against.

**Better:** Start simple. Upgrade security as holdings grow.

### Under-Engineering for Large Amounts

**Mistake:** $500,000 on a single hardware wallet with seed backup in your desk drawer.

**Problem:** Single point of failure for life-changing money.

**Better:** Multisig with geographic distribution.

### Security Theater

**Mistake:** Obsessing over Faraday cages and exotic hardware while your seed is saved in iCloud.

**Problem:** Focusing on exotic threats while ignoring basic ones.

**Better:** Master fundamentals before advanced techniques.

### Complexity Beyond Competence

**Mistake:** Implementing multisig without fully understanding how to recover it.

**Problem:** You might lock yourself out.

**Better:** Only use security you can confidently manage.


## Upgrading Over Time

Your threat model isn't fixed. Reassess when:

- Your holdings significantly increase
- Your public profile changes (more exposure)
- Your jurisdiction situation changes
- You become more technically capable
- After any security incident or close call

**The path:**
1. Start with a hardware wallet
2. Add passphrase when comfortable
3. Run your own node
4. Consider multisig for significant holdings
5. Add privacy measures as needed


## Your Action Items

Based on your assessment:

1. **Identify your profile** (A, B, C, or D above)
2. **Audit your current setup** against the recommendations
3. **Make a plan** to close any gaps
4. **Implement changes** one at a time, testing each
5. **Reassess periodically** as your situation evolves


---

## Next Steps

Based on your threat model:

**Need a hardware wallet?**
→ [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/)

**Ready for passphrase security?**
→ [DIY Passphrase Guide](/docs/security/passphrase/)

**Want to run your own node?**
→ [Bitcoin Node Setup](/docs/bitcoin-node/)

**Need multisig?**
→ [Multisig Setup Guide](/docs/advanced/multisig/)

**Concerned about privacy?**
→ [Why Privacy Matters](/docs/learn/privacy/why-privacy-matters)
