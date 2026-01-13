---
sidebar_position: 2
title: "Chain Analysis Explained"
description: "Learn how blockchain surveillance works. Understand the heuristics and techniques used to track Bitcoin transactions and link addresses to identities."
keywords: ["chain analysis", "blockchain surveillance", "bitcoin tracking", "heuristics", "common input ownership"]
tags: ["privacy", "chain analysis", "bitcoin", "surveillance"]
---

# Chain Analysis Explained

Chain analysis is the practice of examining the Bitcoin blockchain to track the flow of funds and identify users. Understanding how it works helps you protect your privacy.


## What Is Chain Analysis?

Chain analysis companies study blockchain data to:

- **Cluster addresses** — Determine which addresses belong to the same person
- **Track fund flows** — Follow bitcoin as it moves between addresses
- **Identify entities** — Link address clusters to real-world identities
- **Flag transactions** — Mark certain coins as "tainted" or suspicious

This information is sold to:
- Law enforcement agencies
- Tax authorities
- Banks and financial institutions
- Cryptocurrency exchanges


## The Core Techniques

Analysts use several **heuristics**—rules of thumb that are usually (but not always) true.

### 1. Common Input Ownership Heuristic

**The assumption:** All inputs in a single transaction belong to the same owner.

**Why it usually works:** To spend bitcoin from multiple addresses in one transaction, you need the private keys for all of them. Typically, only one person has those keys.

```
TRANSACTION EXAMPLE:
──────────────────────────────────────────────────────────
Inputs:                      Outputs:
  Address A (0.5 BTC)  ─┐
  Address B (0.3 BTC)  ─┼──→  Address X (0.7 BTC)
  Address C (0.4 BTC)  ─┘     Address Y (0.5 BTC)

Analyst concludes:
  "A, B, and C are controlled by the same entity"
```

**When it breaks down:**
- CoinJoin transactions intentionally combine inputs from multiple people
- PayJoin transactions mix buyer and seller inputs

### 2. Change Address Detection

**The assumption:** One output is payment, the other is change returning to the sender.

When you spend bitcoin, you rarely have the exact amount. The "leftover" returns to you as change.

```
CHANGE DETECTION:
──────────────────────────────────────────────────────────
Input:                       Outputs:
  Address A (1.0 BTC)  ──→   Address B (0.7 BTC)  ← Payment
                              Address C (0.29 BTC) ← Change?

Clues that C is change:
• C is a new address (never seen before)
• C has an odd amount (0.29 vs round 0.7)
• C uses same address type as input
```

**Common change detection clues:**

| Indicator | Why It Suggests Change |
|-----------|----------------------|
| New address | Wallets generate fresh change addresses |
| Odd decimal places | Payments tend to be round numbers |
| Same script type | Wallet uses consistent address format |
| Smaller amount | Change is often the remainder |

**Combining heuristics:** Once analysts identify change addresses, they link them to your other addresses via common input ownership.

### 3. Address Reuse Detection

**The problem:** Using the same address twice links all those transactions together.

```
ADDRESS REUSE RISK:
──────────────────────────────────────────────────────────
Transaction 1: Someone pays you at Address A
Transaction 2: You pay someone from Address A
Transaction 3: Someone else pays you at Address A

All three transactions are now linked.
Anyone who knows one transaction knows all of them.
```

Modern wallets generate new addresses automatically, but some users still reuse addresses.

### 4. Timing Analysis

**The pattern:** Transactions close together in time may be related.

- Deposit to exchange → withdrawal minutes later
- Receive payment → forward to another address immediately
- Regular transactions at the same time each day/week

### 5. Amount Correlation

**Round amounts:** Payments are often round numbers (0.1 BTC, 0.01 BTC).

**Matching amounts:** If 0.5 BTC enters a mixer and 0.5 BTC exits elsewhere, they might be connected (though mixers try to prevent this).


## Clustering: Building Your Profile

Analysts combine these heuristics to build **clusters**—groups of addresses believed to belong to the same entity.

```
CLUSTER BUILDING:
──────────────────────────────────────────────────────────

Step 1: Find multi-input transaction
  Addresses A, B, C spent together → Same owner

Step 2: Identify change addresses
  Transaction from A creates change at D → Add D to cluster

Step 3: Follow the chain
  D later spent with E → Add E to cluster

Step 4: Continue...
  Cluster grows: {A, B, C, D, E, F, G, H...}

Result: Analyst knows all your addresses
```


## External Data Sources

Blockchain analysis alone has limits. Analysts also use:

### Exchange Data

When you use a KYC exchange:
- Exchange knows your identity
- Exchange knows your deposit/withdrawal addresses
- Exchange may share this with chain analysis companies

### Web Scraping

Analysts search for:
- Bitcoin addresses posted on forums
- Donation addresses on websites
- Addresses in leaked databases
- Social media posts mentioning addresses

### Transaction Metadata

Some wallets or services leak information:
- IP addresses (if not using Tor)
- Browser fingerprints
- Transaction timing patterns
- Unique wallet behaviors


## The Cluster Attribution Problem

Clustering addresses is one thing. Identifying the owner is another.

**Strong attribution:**
- Address received funds from identified exchange account
- Address posted publicly by known person
- Address in law enforcement database

**Weak attribution:**
- Address transacted with identified address
- Address pattern matches known behavior
- Statistical likelihood based on heuristics

Analysts often have high confidence in clusters but lower confidence in identity.


## What This Means for You

### Your Transaction History Is Visible

Anyone with blockchain access can see:
- Every transaction you've made
- Your current balance (if they identify your addresses)
- Who you've transacted with (if those parties are identified)

### Past Actions Affect Future Privacy

- Coins you bought years ago still have that history
- Address reuse from the past still links transactions
- Your entire history can be reconstructed retroactively

### Exchanges Are Key Vulnerability Points

- KYC exchanges link identity to addresses
- This is often the starting point for tracing
- Even using an exchange once creates permanent records


## Limitations of Chain Analysis

It's not perfect:

| Technique | Limitation |
|-----------|------------|
| Common input ownership | Broken by CoinJoin |
| Change detection | Multiple heuristics can conflict |
| Timing analysis | Users can delay transactions |
| Amount correlation | Equal-output transactions hide amounts |

**CoinJoin and similar techniques** specifically target these heuristics. When many people combine their transactions, the assumptions break down.


## Key Takeaways

- Chain analysis uses **heuristics** (educated guesses) to track funds
- **Common input ownership** and **change detection** are primary techniques
- Analysts build **clusters** of addresses they believe you control
- **External data** (exchanges, web scraping) provides identity links
- The techniques have **limitations** that privacy tools exploit

---

## Continue Learning

→ **Next:** [Protecting Your Privacy](/docs/basics/privacy/protecting-privacy) — Practical techniques

→ **Practice:** [UTXO Management Guide](/docs/utxo-management) — Coin control and consolidation

→ **Advanced:** [CoinJoin Guide](/docs/coinjoin) — Break the chain analysis heuristics
