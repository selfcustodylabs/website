---
sidebar_position: 1
title: "PayJoin Guide"
description: "Learn how PayJoin enhances Bitcoin privacy by breaking common blockchain analysis assumptions. A practical guide to using PayJoin transactions."
keywords: ["payjoin", "bitcoin privacy", "P2EP", "pay to endpoint", "blockchain analysis", "transaction privacy"]
tags: ["payjoin", "privacy", "transactions", "guide"]
---

# PayJoin Privacy Guide

:::info What You'll Do
In this guide, you will:
- Understand what PayJoin is and why it matters
- Learn how PayJoin breaks blockchain analysis
- Set up and use PayJoin transactions
- Know when PayJoin is the right privacy tool

**Time required:** 30 minutes to learn, variable to implement  
**Difficulty:** Intermediate  
**Estimated cost:** Free (just transaction fees)  
**Prerequisites:** Understanding of [UTXOs](/docs/basics/transactions/utxos), a compatible wallet
:::

---

## What is PayJoin?

PayJoin (also known as P2EP — Pay-to-EndPoint) is a privacy technique where **both the sender and receiver contribute inputs** to a transaction.

In a normal Bitcoin transaction:
- Sender provides inputs
- Receiver gets an output
- Sender gets change

In a PayJoin transaction:
- **Both** sender and receiver provide inputs
- Both get outputs
- The transaction looks like a regular payment, but the assumptions analysts make about it are wrong

```
NORMAL TRANSACTION:
─────────────────────────────────────────────────────────
Alice (sender)              →       Bob (receiver)
┌─────────────┐                    ┌─────────────┐
│ Input: 1 BTC│        ───────►   │ Output: 0.7 │ Bob
└─────────────┘                    │ Output: 0.3 │ Alice (change)
                                   └─────────────┘

Analyst assumes: All inputs belong to sender (Alice)


PAYJOIN TRANSACTION:
─────────────────────────────────────────────────────────
Alice (sender) + Bob (receiver)  →  Both
┌─────────────┐                    ┌─────────────┐
│ Input: 1 BTC│ (Alice)           │ Output: 1.2 │ Bob
│ Input: 0.5  │ (Bob)    ───────► │ Output: 0.3 │ Alice (change)
└─────────────┘                    └─────────────┘

Analyst assumes: All inputs belong to sender — WRONG!
The "common input ownership" heuristic fails.
```

---

## Why PayJoin Matters

### The Common Input Ownership Heuristic

Blockchain analysts rely on a key assumption:

> **"All inputs in a transaction belong to the same entity."**

This assumption is correct most of the time, which is why it's so useful for surveillance. Chain analysis companies trace funds by assuming inputs are owned together.

**PayJoin breaks this assumption.**

When PayJoin transactions exist on-chain, analysts can no longer be certain that inputs share ownership — even in transactions that *aren't* PayJoins. This creates doubt across all transactions.

### Privacy for Everyone

Even if you never use PayJoin yourself, widespread PayJoin adoption helps you:

- Adds uncertainty to chain analysis
- Makes the "common input ownership" assumption unreliable
- Benefits the entire network, not just participants

---

## How PayJoin Works

### Step-by-Step Process

```
PAYJOIN FLOW:
─────────────────────────────────────────────────────────
1. Alice wants to pay Bob 0.7 BTC

2. Alice creates a normal transaction:
   - Input: 1 BTC (Alice's UTXO)
   - Output: 0.7 BTC to Bob
   - Output: 0.3 BTC change to Alice

3. Instead of broadcasting, Alice sends this to Bob's PayJoin endpoint

4. Bob adds his own input:
   - Adds Input: 0.5 BTC (Bob's UTXO)
   - Adjusts his output: 0.7 + 0.5 = 1.2 BTC

5. Bob sends the modified transaction back to Alice

6. Alice verifies the transaction still pays the correct amount
   and signs her inputs

7. The final transaction is broadcast:
   - Inputs: 1 BTC (Alice) + 0.5 BTC (Bob)
   - Outputs: 1.2 BTC (Bob) + 0.3 BTC (Alice)

From outside, it looks like Alice spent 1.5 BTC total.
No one knows Bob contributed an input.
```

### What an Analyst Sees

Looking at the PayJoin transaction on the blockchain:

| What Analyst Assumes | Reality |
|---------------------|---------|
| Sender owns 1.5 BTC of inputs | Sender owns 1 BTC, receiver owns 0.5 BTC |
| Payment amount is ~1.2 BTC | Payment amount is 0.7 BTC |
| Change is 0.3 BTC | This is actually correct (by coincidence) |

The analyst's model of the transaction is completely wrong.

---

## PayJoin vs CoinJoin

Both are privacy techniques, but they work differently:

<div class="fixed-width-table">

| Feature | PayJoin | CoinJoin |
|---------|---------|----------|
| **Participants** | 2 (sender + receiver) | Many (5-100+) |
| **Coordination** | Direct, during payment | Requires coordinator or protocol |
| **Visibility** | Looks like normal transaction | Clearly identifiable as CoinJoin |
| **Use case** | Privacy during payments | Breaking transaction history |
| **Complexity** | Simple | More complex |
| **Fees** | Normal transaction fee | Coordinator fees + larger tx |

</div>

**PayJoin is stealth privacy** — it doesn't look like a privacy transaction.

**CoinJoin is explicit privacy** — anyone can see it's a mixing transaction (though they can't trace through it).

---

## Wallets Supporting PayJoin

### As Sender (Pay via PayJoin)

<div class="fixed-width-table">

| Wallet | Platform | PayJoin Support |
|--------|----------|-----------------|
| **Sparrow** | Desktop | ✅ Full support |
| **BTCPay Server** | Web | ✅ Full support |
| **Wasabi** | Desktop | ✅ Full support |
| **BlueWallet** | Mobile | ✅ Full support |
| **JoinMarket** | Desktop | ✅ Full support |

</div>

### As Receiver (Accept PayJoin)

To receive PayJoin payments, you need:

1. A wallet with PayJoin receiver support, AND
2. A way to expose a PayJoin endpoint (URL)

**BTCPay Server** is the easiest option for merchants — it handles PayJoin automatically for customers whose wallets support it.

---

## Using PayJoin with Sparrow Wallet

### Sending a PayJoin Payment

1. **Recipient provides PayJoin URL**
   - Looks like: `https://btcpay.example.com/BTC/pj`
   - Usually encoded in a BIP21 URI

2. **Create transaction in Sparrow**
   - Go to **Send** tab
   - Paste the BIP21 URI (includes PayJoin endpoint)
   - Sparrow detects the PayJoin capability

3. **Review and send**
   - Sparrow handles the PayJoin negotiation automatically
   - You'll see it's a PayJoin in the transaction details
   - Confirm and broadcast

### Receiving PayJoin Payments

For individuals, receiving PayJoin typically requires running BTCPay Server or similar infrastructure. This is more advanced.

For merchants, BTCPay Server makes it automatic — just enable PayJoin in settings.

---

## Using PayJoin with BTCPay Server

If you run a BTCPay Server instance (for your business or personal use):

### Enable PayJoin

1. Go to **Store Settings → Checkout**
2. Find **PayJoin (BIP78)** option
3. Enable it
4. Configure your hot wallet (PayJoin requires a hot wallet to contribute inputs)

### How It Works for Customers

When a customer pays an invoice:

1. They scan/copy the payment request
2. If their wallet supports PayJoin, it automatically negotiates
3. The transaction uses PayJoin if both sides support it
4. If the customer's wallet doesn't support PayJoin, they pay normally

No action required from the customer — it just works.

---

## PayJoin Best Practices

### Do's ✅

- **Use PayJoin whenever available** — Every PayJoin helps network privacy
- **Run BTCPay Server if you accept payments** — Easy PayJoin for your customers
- **Combine with other privacy practices** — PayJoin + coin control + node

### Don'ts ❌

- **Don't expect anonymity from PayJoin alone** — It breaks one heuristic, not all
- **Don't use with KYC UTXOs expecting full privacy** — Your exchange still knows your inputs
- **Don't rely on receiver's privacy** — Receiver must trust their own infrastructure

---

## Limitations of PayJoin

### What PayJoin Doesn't Do

1. **Doesn't hide amounts** — Transaction amounts are still visible
2. **Doesn't break all heuristics** — Only defeats common input ownership
3. **Doesn't work retroactively** — Only helps new transactions
4. **Requires receiver support** — Both parties need compatible wallets

### When to Use CoinJoin Instead

Use [CoinJoin](/docs/coinjoin) when you need:
- To break links to past transaction history
- Stronger anonymity set (many participants)
- Privacy without receiver cooperation

Use PayJoin when:
- Making a payment to a supporting merchant
- You want stealth privacy (doesn't look like a privacy transaction)
- You want to help network privacy broadly

---

## The Bigger Picture

PayJoin is one tool in the privacy toolbox:

<div class="fixed-width-table">

| Privacy Tool | What It Does |
|--------------|--------------|
| **Own node** | Hides your addresses from third parties |
| **Coin control** | Prevents linking your UTXOs together |
| **PayJoin** | Breaks common input ownership heuristic |
| **CoinJoin** | Breaks transaction graph traceability |
| **Tor** | Hides your IP when transacting |

</div>

Maximum privacy uses multiple layers together.

---

## Summary

- PayJoin is a **stealth privacy technique** where sender and receiver both contribute inputs
- It **breaks the common input ownership assumption** that chain analysis relies on
- PayJoin transactions **look like normal payments** — they're not identifiable as privacy transactions
- **Widespread adoption benefits everyone** — even non-users gain from increased uncertainty
- Use PayJoin whenever you're paying a merchant or service that supports it

---

## Next Steps

- **[CoinJoin Guide](/docs/coinjoin)** — For breaking transaction history
- **[UTXO Management](/docs/utxo-management)** — Control which coins you spend
- **[Why Privacy Matters](/docs/basics/privacy/why-privacy-matters)** — The bigger picture
- **[Bitcoin Node Guide](/docs/bitcoin-node)** — Hide your addresses from third parties

---

## Resources

- [BIP78 Specification](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) — The technical standard
- [BTCPay Server PayJoin Docs](https://docs.btcpayserver.org/Payjoin/) — Setup guide for merchants
- [Sparrow Wallet](https://sparrowwallet.com) — Desktop wallet with PayJoin support
