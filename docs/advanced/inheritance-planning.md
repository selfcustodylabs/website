---
sidebar_position: 5
title: "Bitcoin Inheritance Planning: How to Pass Your Bitcoin to Heirs"
description: "Complete guide to Bitcoin inheritance planning. Learn how to ensure your Bitcoin passes to loved ones securely, from simple methods to advanced multisig solutions."
keywords: ["bitcoin inheritance", "bitcoin estate planning", "pass bitcoin to heirs", "bitcoin death planning", "crypto inheritance", "bitcoin will", "bitcoin trust"]
tags: ["inheritance", "estate planning", "security", "advanced", "multisig"]
---

# Bitcoin Inheritance Planning

How to ensure your Bitcoin passes to your loved ones—not lost forever.

:::danger The Stakes Are High
An estimated **4 million Bitcoin** (worth hundreds of billions) are permanently lost—many because owners died without sharing access. Don't let your Bitcoin become another statistic.
:::

---

## Why Bitcoin Inheritance Is Different

Traditional assets have built-in recovery mechanisms. Banks have beneficiary designations. Brokerages have transfer-on-death accounts. Courts can order access to safe deposit boxes.

**Bitcoin has none of this.**

| Traditional Assets | Bitcoin |
|-------------------|---------|
| Banks verify identity | Math verifies ownership |
| Courts can force access | No authority can recover keys |
| "Forgot password" exists | Lost seed = lost forever |
| Institutions hold records | Only you hold the keys |

If you die without a plan, your Bitcoin dies with you. There is no appeals process. No customer support. No exceptions.

---

## The Inheritance Dilemma

Bitcoin inheritance creates a fundamental tension:

**Security requires secrecy** — The fewer people who know your seed phrase, the safer your Bitcoin from theft.

**Inheritance requires sharing** — Someone must eventually access your keys after you're gone.

Every inheritance solution is a balance between these competing needs. The right choice depends on your situation.

---

## Approaches by Complexity

### Level 1: Simple Letter Method
**Best for:** Smaller amounts, high-trust family situations

**What it is:** A sealed letter with instructions stored securely, to be opened only upon death.

**Pros:**
- Simple to set up
- No technical knowledge required by heirs
- Works today with no changes to your setup

**Cons:**
- Single point of failure (letter gets lost/found/destroyed)
- Requires high trust (anyone who finds it can steal)
- No verification that letter is still valid/accessible

---

### Level 2: Lawyer/Executor Method
**Best for:** Moderate amounts, existing estate planning

**What it is:** Instructions stored with your estate attorney or in a safe deposit box accessed through probate.

**Pros:**
- Integrates with existing estate planning
- Professional management
- Can include conditions and delays

**Cons:**
- Requires trusting a third party
- Probate delays (months to years)
- Lawyer may not understand Bitcoin security
- Physical document can still be compromised

---

### Level 3: Split Seed Method
**Best for:** Moderate to significant amounts, technical heirs

**What it is:** Seed phrase split into parts distributed to different people/locations. Example: 3 parts, any 2 needed to reconstruct.

**Pros:**
- No single person/location has full access
- Survives loss of one part
- Can distribute across trusted parties

**Cons:**
- Requires technical understanding to recombine
- Shamir's Secret Sharing adds complexity
- Simple splits (words 1-12, 13-24) are LESS secure, not more

:::warning About Simple Splits
Never split a seed phrase by just dividing the words (1-12 to Person A, 13-24 to Person B). This is **less secure** than giving the whole seed to one trusted person. Each half significantly reduces the search space for an attacker. Use Shamir's Secret Sharing (SLIP39) or proper threshold schemes instead.
:::

---

### Level 4: Multisig Inheritance
**Best for:** Significant amounts, long-term planning

**What it is:** A multisig wallet where heirs hold some keys from the start.

**Example 2-of-3 Setup:**
- Key 1: You control (primary spending)
- Key 2: Trusted family member (sealed, stored securely)
- Key 3: Estate attorney or second family member

**Pros:**
- No single point of failure
- Heirs can access funds without reconstructing anything
- Can spend normally during your lifetime
- Built-in redundancy

**Cons:**
- Complex to set up
- Requires hardware wallets for multiple parties
- All parties must safeguard wallet descriptor
- Higher upfront cost

This is the recommended approach for significant holdings.

---

### Level 5: Collaborative Custody Services
**Best for:** Very large holdings, institutional needs

**What it is:** Professional services like Unchained, Casa, or similar that hold one key in a multisig arrangement.

**Pros:**
- Professional key management
- Inheritance services built-in
- Support if something goes wrong
- Geographic distribution

**Cons:**
- Monthly/annual fees
- Counterparty risk (company could fail)
- Privacy implications
- Regulatory uncertainty

---

## Recommended Setup: Family Multisig

For most people with significant Bitcoin holdings, a family multisig provides the best balance of security and inheritance planning.

### How It Works

```
2-of-3 Multisig Structure
├── Key 1: Your primary hardware wallet (daily use)
├── Key 2: Spouse/child's hardware wallet (stored securely)
└── Key 3: Backup location (safe deposit box, attorney, etc.)
```

**During your lifetime:** You use Key 1 plus Key 2 or Key 3 to spend.

**After your passing:** Your heir uses Key 2 plus Key 3 to access funds.

### Step-by-Step Implementation

#### Step 1: Set Up the Multisig

Follow the [Multisig Setup Guide](/docs/advanced/multisig/) to create a 2-of-3 multisig wallet.

Assign keys with inheritance in mind:
- **Key 1:** Your primary device (e.g., Coldcard)
- **Key 2:** Heir's device (e.g., Trezor) — they keep it
- **Key 3:** Backup device (e.g., Ledger) — secure storage

#### Step 2: Distribute the Seeds

Each key holder backs up their own seed phrase. You do NOT need to know their seeds, and they don't need to know yours.

| Key | Held By | Seed Stored |
|-----|---------|-------------|
| Key 1 | You | Your secure location |
| Key 2 | Primary heir | Their secure location |
| Key 3 | Backup | Safe deposit box, attorney, etc. |

#### Step 3: Back Up the Wallet Descriptor

:::danger Critical Step
Every key holder MUST have a copy of the wallet descriptor (also called "wallet configuration" or "multisig file"). Without it, the funds cannot be spent even with all three seeds.
:::

The wallet descriptor contains:
- The extended public keys (xpubs) of all devices
- The quorum requirements (2-of-3)
- Derivation paths
- Address format

Export from Sparrow Wallet: `File → Export → Wallet Descriptor`

Store copies:
- With each hardware wallet backup
- With your estate documents
- In your instructions letter

#### Step 4: Create Instructions Document

Write clear instructions for your heirs. Include:

```markdown
## Bitcoin Inheritance Instructions

### What You're Inheriting
- A 2-of-3 multisig Bitcoin wallet
- You need ANY 2 of 3 keys to access funds

### What You Need
1. Two hardware wallets with their seed phrases
2. The wallet descriptor file (attached/located at ___)
3. Sparrow Wallet software (https://sparrowwallet.com)

### Steps to Access Funds
1. Download and verify Sparrow Wallet
2. Go to File → Import Wallet
3. Select "Wallet Descriptor" and load the file
4. Connect first hardware wallet, verify it's recognized
5. Connect second hardware wallet
6. You can now see balance and send transactions

### Important Contacts
- Estate attorney: [name, phone]
- Technical helper (if needed): [name, phone]
- Key 3 location: [details]

### If Something Goes Wrong
- DO NOT share seed phrases with "recovery services" — they are scams
- Contact [trusted technical person] before taking any action
- The Bitcoin cannot be "hacked" — if seeds are secure, funds are secure
```

#### Step 5: Test the Setup

Before relying on this for inheritance:

1. **Test spending:** Make a small transaction using Keys 1+2, then 1+3, then 2+3
2. **Test recovery:** Have your heir recover their wallet on a fresh device
3. **Verify descriptor:** Confirm all parties' descriptor copies produce the same addresses
4. **Practice run:** Walk your heir through the entire process with a test amount

#### Step 6: Secure Storage Checklist

| Item | Location | Who Knows |
|------|----------|-----------|
| Key 1 device | Your home | You |
| Key 1 seed | Your secure location | You only |
| Key 2 device | Heir's possession | Heir |
| Key 2 seed | Heir's secure location | Heir only |
| Key 3 device | Backup location | You (+ executor) |
| Key 3 seed | With Key 3 device | You (+ executor) |
| Wallet descriptor | Multiple locations | All parties |
| Instructions | With estate documents | Executor |

---

## For Single-Sig Wallets

If you're not ready for multisig, you can still plan for inheritance with a single-signature wallet.

### Option A: Sealed Letter with Passphrase

1. Store your seed phrase in a secure location (safe, safe deposit box)
2. Use a strong passphrase on your wallet
3. Store the passphrase SEPARATELY (with attorney, different location)
4. Leave instructions explaining both are needed

**Advantage:** Neither location alone grants access.

**Disadvantage:** Still relies on both items surviving and being found.

### Option B: Time-Locked Instructions

1. Use a service like [Dead Man's Switch](https://www.deadmansswitch.net/) or similar
2. Set up regular check-ins (monthly/quarterly)
3. If you miss check-ins, instructions are automatically sent

**Advantage:** Automated, doesn't require anyone to know in advance.

**Disadvantage:** Relies on third-party service continuing to operate.

### Option C: Shamir's Secret Sharing (SLIP39)

Some wallets support SLIP39, which splits your seed into shares where you define how many are needed to reconstruct.

Example: 3-of-5 split
- Share 1: Primary heir
- Share 2: Secondary heir  
- Share 3: Attorney
- Share 4: Safe deposit box
- Share 5: Trusted friend

**Advantage:** True threshold security (any 3 of 5 works).

**Disadvantage:** Not all wallets support SLIP39; adds recovery complexity.

---

## Common Mistakes to Avoid

### 1. "I'll Set This Up Later"
The most common mistake. People procrastinate, and tragedy doesn't wait. Set up basic inheritance planning TODAY, even if imperfect. Improve it later.

### 2. Storing Seeds and Instructions Together
If someone finds your seed phrase AND knows it's for Bitcoin, they can steal everything. Keep seeds and explanatory documents separate.

### 3. Assuming Heirs Will "Figure It Out"
Most people don't understand Bitcoin. Without clear instructions, heirs may:
- Never find the wallet
- Fall for recovery scams
- Make mistakes that lose funds
- Give up and assume it's inaccessible

### 4. Forgetting the Wallet Descriptor (Multisig)
Seed phrases alone do NOT restore a multisig wallet. The descriptor is required. Back it up with every seed.

### 5. Not Testing the Plan
An untested inheritance plan is no plan at all. Walk through the entire process with your heirs before you need it.

### 6. Single Point of Failure
If everything depends on one document, one location, or one person—that's a vulnerability. Build in redundancy.

### 7. Over-Engineering
A complex plan that heirs can't execute is worse than a simple plan they can. Match complexity to your heirs' technical ability.

### 8. Trusting "Bitcoin Recovery Services"
There is no legitimate way to recover Bitcoin without the seed phrase. Any service claiming otherwise is a scam targeting grieving families. Warn your heirs explicitly.

---

## Legal Considerations

:::info Not Legal Advice
This is educational information, not legal advice. Consult an estate planning attorney familiar with digital assets in your jurisdiction.
:::

### Include Bitcoin in Your Will

Even if you handle key transfer separately, your will should acknowledge Bitcoin exists. This prevents disputes and ensures your wishes are documented.

Example language (customize with your attorney):
> "I own Bitcoin cryptocurrency. Instructions for accessing these assets are stored separately and have been provided to [person/location]. I direct that these assets pass to [beneficiary]."

### Consider a Trust

A trust can provide:
- Privacy (avoids probate records)
- Conditions on distribution
- Professional management during transition
- Tax planning opportunities

Some people create a "Bitcoin trust" specifically for digital assets.

### Document for Taxes

Your heirs may owe taxes on inherited Bitcoin. Keep records of:
- Acquisition dates and prices (cost basis)
- Which addresses/wallets you control
- Any taxable events during your lifetime

This documentation can save heirs significant money and legal complications.

### International Considerations

If you have heirs in different countries:
- Laws vary significantly by jurisdiction
- Key storage locations may have legal implications
- Consider consulting attorneys in relevant jurisdictions

---

## Maintenance Schedule

Inheritance planning isn't "set and forget." Review annually:

### Annual Checklist

- [ ] **Verify access:** Can you still access all keys?
- [ ] **Update amounts:** Has your Bitcoin holding changed significantly?
- [ ] **Check contacts:** Are attorney, heir, trustee contacts still valid?
- [ ] **Test backups:** Do seed backups still work?
- [ ] **Review instructions:** Are they still accurate and clear?
- [ ] **Life changes:** Marriage, divorce, births, deaths—update beneficiaries?
- [ ] **Software updates:** Has wallet software changed significantly?

### When to Update Your Plan

- Significant change in Bitcoin value
- Change in family situation (marriage, divorce, children)
- Moving to a different jurisdiction
- Change in estate attorney or executor
- Hardware wallet reaching end of life
- Discovering a security concern

---

## Quick Start Checklist

If you do nothing else, do this TODAY:

- [ ] **Write down** which wallets/addresses hold your Bitcoin
- [ ] **Verify** your seed phrase backups exist and are readable
- [ ] **Tell ONE trusted person** that you own Bitcoin and where to find instructions
- [ ] **Write basic instructions** explaining how to access your Bitcoin
- [ ] **Store instructions** separately from seed phrases

This takes 30 minutes and could save your family from permanent loss.

---

## Summary

| Approach | Best For | Complexity | Trust Required |
|----------|----------|------------|----------------|
| Letter method | Small amounts, high trust | Low | High |
| Lawyer/executor | Existing estate plan | Low | Medium |
| Split seed (SLIP39) | Technical heirs | Medium | Distributed |
| **Multisig (recommended)** | **Significant holdings** | **Medium-High** | **Distributed** |
| Collaborative custody | Large holdings, institutions | Medium | Service provider |

The best plan is one that:
1. Actually gets implemented (don't let perfect be the enemy of good)
2. Your heirs can actually execute
3. Doesn't create new security vulnerabilities
4. Gets reviewed and updated regularly

---

## Next Steps

1. **Assess your situation** — How much Bitcoin? Who are your heirs? What's their technical level?
2. **Choose an approach** — Match complexity to your needs and heirs' abilities
3. **Implement the basics** — Even a simple letter is better than nothing
4. **Test the plan** — Walk through it before you need it
5. **Document and store** — Multiple copies, multiple locations
6. **Schedule reviews** — Annual check-up at minimum

### Related Guides

- [Multisig Setup Guide](/docs/advanced/multisig/) — Implement 2-of-3 inheritance multisig
- [Backup Verification](/docs/wallet-setup/backup-verification/) — Ensure your backups work
- [Threat Model Assessment](/docs/getting-started/threat-models/) — Understand what you're protecting against
- [Physical Security](/docs/security/physical-security/) — Secure storage locations
