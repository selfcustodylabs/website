---
sidebar_position: 1
title: "CoinJoin Guide"
description: "Learn how CoinJoin works to improve your Bitcoin privacy. Understand the basics, benefits, risks, and how to mix your coins to break transaction history links."
keywords: ["bitcoin", "coinjoin", "privacy", "mixing", "utxo", "self custody", "wasabi", "whirlpool", "joinmarket"]
tags: ["coinjoin", "privacy", "self custody", "bitcoin"]
---

# CoinJoin: Bitcoin Privacy Guide

:::info What You'll Learn
**Time:** 30-45 minutes reading  
**Difficulty:** Intermediate  
**Prerequisites:** Understanding of [private keys](/docs/basics/keys/intro), [transactions](/docs/basics/transactions/understanding), [why privacy matters](/docs/basics/privacy/why-privacy-matters), and ideally running your own [Bitcoin node](/docs/bitcoin-node)
:::

:::tip Background Reading
If you haven't already, read [Why Bitcoin Privacy Matters](/docs/basics/privacy/why-privacy-matters) and [Chain Analysis Explained](/docs/basics/privacy/chain-analysis) to understand the surveillance problem CoinJoin solves.
:::

**CoinJoin** is a privacy technique that breaks the link between your transaction history and your coins. After a CoinJoin, an outside observer cannot tell which coins belong to you.

This guide covers:
- What CoinJoin is and how it works
- The different CoinJoin implementations
- How to use CoinJoin services
- Best practices after mixing


## What is CoinJoin?

CoinJoin is when multiple people combine their Bitcoin transactions into a single transaction, making it impossible to determine which output belongs to which person.

### A Simple Example

Imagine you and a friend each want to send 0.1 BTC somewhere:

**Without CoinJoin (two separate transactions):**
```
Transaction 1:
  Alice: 0.15 BTC → 0.1 BTC (payment) + 0.05 BTC (change)

Transaction 2:
  Bob: 0.12 BTC → 0.1 BTC (payment) + 0.02 BTC (change)
```
Anyone can see Alice's payment came from Alice, and Bob's from Bob.

**With CoinJoin (one combined transaction):**
```
Combined Transaction:
  INPUTS                      OUTPUTS
  ─────────────────────────────────────────
  Alice: 0.15 BTC      →      0.1 BTC (???)
  Bob:   0.12 BTC      →      0.1 BTC (???)
                              0.05 BTC (Alice's change)
                              0.02 BTC (Bob's change)
```

Now there are two identical 0.1 BTC outputs. An observer cannot tell which 0.1 BTC belongs to Alice and which belongs to Bob. Each has a **50% probability** of belonging to either person.

:::tip The Key Insight
The privacy comes from **identical output amounts**. When multiple outputs have the same value, they become indistinguishable from each other.
:::

### Why This Works

Bitcoin transactions can have multiple inputs and outputs signed by different people. This is a built-in feature of Bitcoin, not a hack or exploit.

In a CoinJoin:
1. Multiple participants agree on a common output amount
2. Each person contributes inputs (their UTXOs)
3. Each person receives outputs of the agreed amount
4. The transaction is signed by all participants
5. No one can tell which output belongs to which participant


## Understanding UTXOs

CoinJoin operates on UTXOs (Unspent Transaction Outputs). If you're not familiar with how UTXOs work, read [UTXOs Explained](/docs/basics/transactions/utxos) first—it's essential background for understanding CoinJoin.

**Quick recap for CoinJoin purposes:**
- Your wallet contains discrete "pieces" of bitcoin (UTXOs), not a liquid balance
- When you spend, entire UTXOs are consumed and new ones created
- Change from a transaction becomes a new UTXO
- UTXOs are combined as inputs when you need to spend more than one contains


## What CoinJoin Can (and Cannot) Do

### ✅ What CoinJoin DOES

**1. Breaks the transaction trail**

After mixing, the link between your past and future transactions is broken:
```
Before CoinJoin:
  Exchange → Address A → Address B → Address C
  (All linked to your identity)

After CoinJoin:
  Exchange → Address A → CoinJoin → ??? 
  (Trail goes cold)
```

**2. Provides spending privacy**

When you pay someone with mixed coins, they cannot see:
- Where your coins originally came from
- How much Bitcoin you own
- Your transaction history

**3. Improves privacy for everyone**

The more people who CoinJoin, the larger the "anonymity set" becomes. Even if you don't CoinJoin, others doing so makes blockchain analysis harder overall.

### ❌ What CoinJoin DOES NOT Do

**1. Hide your total holdings from the government**

If you bought 1 BTC on a KYC exchange, the government knows you own 1 BTC. CoinJoin hides *where* your coins are, not *that* you have them.

**2. Make "boating accidents" believable**

If you claim to have lost your Bitcoin, but later spend coins that can be traced back to your exchange withdrawals, your claim is exposed as false.

**3. Hide the change outputs**

In most CoinJoins, only the equal-value outputs are private. The change outputs can often still be linked to you.


## CoinJoin Methods

There are two main approaches to CoinJoin:

### 1. Automated Services

Software that coordinates CoinJoins automatically:

<div class="fixed-width-table">

| Service | Type | Approximate Cost |
|---------|------|------------------|
| **Wasabi Wallet** | Centralized coordinator | ~0.3% + mining fees |
| **Whirlpool** (via Sparrow) | Centralized coordinator | Fixed fee per pool + mining fees |
| **JoinMarket** | Decentralized market | Variable (can earn fees as maker) |

</div>

**Pros:**
- Easy to use
- Many participants = better privacy
- Automatic remixing

**Cons:**
- Costs money
- Must trust the coordinator somewhat
- Your coins sit in a hot wallet during mixing

### 2. Manual/DIY CoinJoin

Coordinate directly with trusted friends or contacts using wallet software like Electrum or Sparrow.

**Pros:**
- No coordinator fees
- Full control
- Educational

**Cons:**
- Need to find partners
- More technical
- Smaller anonymity set


## Privacy Considerations

### The Anonymity Set

The "anonymity set" is how many people your coins could belong to after mixing.

- **2-person CoinJoin:** 50% chance of being you
- **5-person CoinJoin:** 20% chance of being you  
- **100-person CoinJoin:** 1% chance of being you

Larger is better. Automated services typically have larger anonymity sets than manual CoinJoins.

### Multiple Rounds

One CoinJoin provides some privacy. Multiple rounds compound the privacy:

```
Round 1: 1 in 5 chance (20%)
Round 2: 1 in 25 chance (4%)
Round 3: 1 in 125 chance (0.8%)
```

### Common Mistakes That Undo Privacy

:::danger Avoid These Errors

**1. Merging mixed and unmixed coins**
If you combine a CoinJoined UTXO with a KYC UTXO in the same transaction, the CoinJoined coin loses its privacy.

**2. Sending all outputs to the same address**
If multiple CoinJoin outputs end up at the same address, an observer knows they belong to the same person.

**3. Using a wallet connected to someone else's node**
If your wallet queries a random node for your addresses, that node learns your addresses. Always use your own node. See our [Bitcoin Node guide](/docs/bitcoin-node).

**4. Ignoring timing analysis**
If you CoinJoin and immediately spend, timing can be a clue. Let mixed coins "age" before spending.
:::


## Is CoinJoin Legal?

CoinJoin itself is not illegal in most jurisdictions. It's simply a method of constructing a Bitcoin transaction.

However:
- Some exchanges may flag or refuse deposits from addresses with CoinJoin history
- Regulatory attitudes are evolving
- You should research your local laws

**Mitigation strategies:**
- Use Lightning Network for spending (channels opened with mixed coins are not detectable)
- Keep some unmixed coins for exchanges
- Don't mix more than you need


## Do You Need CoinJoin?

Consider CoinJoin if:
- ✅ You value financial privacy as a principle
- ✅ You hold significant amounts of Bitcoin
- ✅ You want to spend without revealing your wealth
- ✅ You live in a jurisdiction with uncertain property rights

You may not need CoinJoin if:
- You only make occasional, small purchases
- You're comfortable with Lightning Network privacy
- You don't mind merchants seeing your transaction history

:::tip Lightning as an Alternative
For everyday spending, the Lightning Network provides practical privacy without the complexity of CoinJoin. Payments are not recorded on the public blockchain.
:::


## Best Practices After CoinJoin

Once you have mixed coins, protect your privacy:

1. **Never merge mixed coins with KYC coins**
   Keep them in separate wallets entirely

2. **Avoid merging different mixed coins if possible**
   Each UTXO should be spent independently

3. **Use coin control**
   Always know exactly which UTXOs you're spending. Wallets like Sparrow and Electrum have coin control features.

4. **Label your UTXOs**
   Mark which coins are mixed vs. unmixed

5. **Run your own node**
   Never connect your privacy wallet to a random public node

6. **Consider using Lightning**
   Open channels with mixed coins, then spend via Lightning


## Next Steps

Ready to enhance your Bitcoin privacy?

1. **Prerequisite:** Set up your own [Bitcoin Node](/docs/bitcoin-node) first—this is essential for privacy
2. **Learn more:** Understand [transactions](/docs/basics/transactions/understanding) deeply
3. **Choose a method:** 
   - For ease: Use Sparrow Wallet with Whirlpool
   - For control: Learn manual CoinJoin with Electrum
   - For decentralization: Explore JoinMarket

---

## Related Guides

- [UTXO Management](/docs/utxo-management) — Essential foundation for understanding CoinJoin
- [Bitcoin Node Setup](/docs/bitcoin-node) — Essential for private CoinJoin use
- [Understanding Transactions](/docs/basics/transactions/understanding) — Know how Bitcoin transactions work
- [Air-Gapped Computer](/docs/air-gapped-computer) — Maximum security for signing

---

:::note Attribution
This guide was inspired by and adapted from [Arman the Parman's CoinJoin Guide](https://armantheparman.com/cj/), with additional explanations and examples added for clarity.
:::
