---
sidebar_position: 2
title: "How CoinJoin Works"
description: "Detailed explanation of how CoinJoin transactions work with step-by-step examples. Learn about inputs, outputs, equal amounts, and anonymity sets."
keywords: ["bitcoin", "coinjoin", "privacy", "transaction", "utxo", "anonymity set"]
tags: ["coinjoin", "privacy", "bitcoin"]
---

# How CoinJoin Works

This page provides a detailed, visual explanation of how CoinJoin transactions achieve privacy.


## Regular Transaction vs. CoinJoin

### A Normal Bitcoin Transaction

When Alice pays Bob 0.5 BTC:

```
┌─────────────────────────────────────────────────────────┐
│                   NORMAL TRANSACTION                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   INPUT                              OUTPUT              │
│   ──────                             ──────              │
│   Alice: 0.8 BTC        →           0.5 BTC (Bob)       │
│                                      0.299 BTC (Alice)   │
│                                      [0.001 BTC fee]     │
│                                                          │
└─────────────────────────────────────────────────────────┘

Anyone can see: Alice paid Bob 0.5 BTC
```

The transaction is completely transparent. Anyone looking at the blockchain can see the flow of funds.

### A CoinJoin Transaction

Now imagine Alice and Carol both want to pay 0.5 BTC to different people:

```
┌─────────────────────────────────────────────────────────┐
│                   COINJOIN TRANSACTION                   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   INPUTS                             OUTPUTS             │
│   ──────                             ───────             │
│   Alice: 0.8 BTC   ─┐           ┌→  0.5 BTC  (???)      │
│                     ├─────────────→  0.5 BTC  (???)      │
│   Carol: 0.7 BTC   ─┘           ├→  0.299 BTC (Alice?)   │
│                                  └→  0.199 BTC (Carol?)   │
│                                                          │
└─────────────────────────────────────────────────────────┘

Observer sees: Two 0.5 BTC outputs, but can't tell who owns which!
```

The two 0.5 BTC outputs are **indistinguishable**. An observer knows one belongs to Alice's recipient and one to Carol's recipient, but cannot determine which is which.


## The Magic of Equal Outputs

The privacy in CoinJoin comes entirely from having **equal output amounts**.

### Why Equal Amounts Matter

Consider this transaction:

```
INPUTS                          OUTPUTS
──────                          ───────
0.8 BTC (Alice)          →      0.5 BTC
0.7 BTC (Carol)          →      0.5 BTC
                                0.25 BTC
                                0.24 BTC
```

The two 0.5 BTC outputs could belong to either person—this is the **anonymity set**.

But notice the change outputs:
- 0.25 BTC likely belongs to Alice (0.8 - 0.5 - fees ≈ 0.25)
- 0.24 BTC likely belongs to Carol (0.7 - 0.5 - fees ≈ 0.24)

:::warning Change Outputs Are NOT Private
Only the equal-value outputs gain privacy. Change outputs can often be deduced through simple math.
:::


## Anonymity Set Explained

The **anonymity set** is the number of possible owners of a particular output.

### 2-Person CoinJoin

```
INPUTS              OUTPUTS
──────              ───────
Alice: 1.0 BTC  →   0.5 BTC  ← Could be Alice OR Bob (50% each)
Bob:   0.6 BTC  →   0.5 BTC  ← Could be Alice OR Bob (50% each)
                    0.5 BTC  (change - Alice)
                    0.1 BTC  (change - Bob)
```

**Anonymity set: 2** — Each mixed output has a 1-in-2 chance of being any participant.

### 5-Person CoinJoin

```
INPUTS                  OUTPUTS
──────                  ───────
Alice:   1.0 BTC   →    0.1 BTC  ← Could be anyone (20% each)
Bob:     0.5 BTC   →    0.1 BTC  ← Could be anyone (20% each)
Carol:   0.3 BTC   →    0.1 BTC  ← Could be anyone (20% each)
Dave:    0.2 BTC   →    0.1 BTC  ← Could be anyone (20% each)
Eve:     0.15 BTC  →    0.1 BTC  ← Could be anyone (20% each)
                        + various change outputs
```

**Anonymity set: 5** — Each 0.1 BTC output has a 1-in-5 chance of being any participant.

### Why Bigger Is Better

<div class="fixed-width-table">

| Anonymity Set | Probability of Being You |
|---------------|-------------------------|
| 2 | 50% |
| 5 | 20% |
| 10 | 10% |
| 50 | 2% |
| 100 | 1% |

</div>

Automated mixing services like Wasabi and Whirlpool can achieve anonymity sets of 100+ participants.


## Multiple Mixing Rounds

One round of CoinJoin provides good privacy. Multiple rounds compound it exponentially.

### How Compound Privacy Works

**Round 1:** Your coin mixes with 4 others
- Anonymity set: 5
- An observer has 20% chance of identifying your output

**Round 2:** That output mixes with 4 new people
- Each of those people could be any of 5 from the previous round
- Anonymity set: 5 × 5 = 25
- Observer now has 4% chance

**Round 3:** Mix again
- Anonymity set: 5 × 5 × 5 = 125
- Observer now has 0.8% chance

```
Round 1:  You → [Mix with 5] → 1 in 5 (20%)
              ↓
Round 2:  Output → [Mix with 5] → 1 in 25 (4%)
              ↓
Round 3:  Output → [Mix with 5] → 1 in 125 (0.8%)
```

This is why mixing services encourage multiple rounds.


## The Complete CoinJoin Flow

Here's what happens in a typical automated CoinJoin:

### Step 1: Registration

You register your UTXO with the coordinator:
```
You:   "I have 0.1 BTC to mix"
Coord: "OK, waiting for more participants..."
```

### Step 2: Coordination

The coordinator collects enough participants:
```
Coordinator collects:
  - Alice: 0.1 BTC, wants output to address A1
  - Bob: 0.1 BTC, wants output to address B1
  - Carol: 0.1 BTC, wants output to address C1
  - Dave: 0.1 BTC, wants output to address D1
  - Eve: 0.1 BTC, wants output to address E1
```

### Step 3: Transaction Construction

The coordinator builds the transaction:
```
INPUTS (5 × 0.1 BTC)         OUTPUTS (5 × 0.1 BTC)
────────────────────         ─────────────────────
Alice's UTXO        →        0.099 BTC to A1
Bob's UTXO          →        0.099 BTC to B1
Carol's UTXO        →        0.099 BTC to C1
Dave's UTXO         →        0.099 BTC to D1
Eve's UTXO          →        0.099 BTC to E1
                             (fees deducted)
```

### Step 4: Signing

Each participant signs ONLY their input:
```
Alice signs her input → 
Bob signs his input →
Carol signs her input →
Dave signs his input →
Eve signs her input →
                        All signatures collected
```

### Step 5: Broadcast

The fully-signed transaction is broadcast to the network:
```
Transaction broadcast → Confirmed in block
```

Now each 0.099 BTC output could belong to ANY of the 5 participants.


## Why The Coordinator Can't Steal

A common question: "If there's a coordinator, can't they steal my coins?"

**No, because:**

1. **You control your private keys**
   - The coordinator never has your keys
   - You sign the transaction yourself

2. **You verify the transaction before signing**
   - Your wallet shows you exactly what you're signing
   - You confirm your output address is included

3. **The transaction is atomic**
   - Either the entire transaction goes through, or none of it does
   - You can't be tricked into signing away your coins

The coordinator only:
- Collects participants
- Constructs the transaction
- Collects signatures
- Broadcasts

They never control funds.


## Visual: Before and After CoinJoin

### Before CoinJoin

```
Exchange ──→ Your Wallet ──→ Purchase ──→ Another Purchase
   │              │              │               │
   └──────────────┴──────────────┴───────────────┘
                        ↑
            All linked to your identity
```

### After CoinJoin

```
Exchange ──→ Your Wallet ──→ CoinJoin ──→ Mixed Coins ──→ Purchase
   │              │              │             │              │
   └──────────────┘              X             └──────────────┘
         ↑                       ↑                    ↑
   Linked to you          Link broken          Not linked to you
```

The CoinJoin creates a "break" in the chain of custody. Coins after the break cannot be traced back to coins before it.


## Key Takeaways

1. **Equal outputs = privacy** — The magic is in identical amounts
2. **Bigger anonymity set = better privacy** — More participants means more cover
3. **Multiple rounds compound privacy** — Each round multiplies protection
4. **Change outputs aren't private** — Only equal-value outputs gain anonymity
5. **You control your keys** — Coordinators can't steal from you

---

**Next:** Learn about [CoinJoin Services](/docs/privacy/coinjoin/services) to choose the right tool for your needs.
