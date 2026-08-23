---
sidebar_position: 7
title: "Bitcoin PayJoin (BIP78): Stealth Privacy for Payments"
description: "Learn how PayJoin (BIP78) enhances Bitcoin privacy by breaking the common-input-ownership assumption. Set up PayJoin with Sparrow Wallet and BTCPay Server."
keywords: ["bitcoin payjoin", "BIP78", "P2EP", "pay to endpoint", "bitcoin privacy", "sparrow payjoin", "btcpay server payjoin", "blockchain analysis"]
tags: ["payjoin", "privacy", "transactions", "BIP78"]
slug: /learn/privacy/payjoin
---

# PayJoin: Stealth Privacy for Bitcoin Payments

:::info What You'll Learn
**Time:** 30 minutes  
**Difficulty:** Intermediate  
**Cost:** Free (just transaction fees)  
**Prerequisites:** Understanding of [UTXOs](/docs/learn/transactions/utxos), a compatible wallet.
:::

PayJoin (also called P2EP: Pay-to-EndPoint, specified as BIP78) is a privacy technique where **both the sender and the receiver contribute inputs** to a transaction.

In a normal Bitcoin transaction the sender provides the inputs, the receiver gets an output, and the sender gets change. PayJoin adds a twist: the receiver also adds one of their own inputs. The on-chain result looks like a normal transaction, but the assumptions that blockchain analysts make about it are wrong.

<div class="doc-diagram">

![In a normal payment Alice's 1.0 BTC input pays Bob 0.7 with 0.3 change; in a PayJoin Bob adds his own 0.5 BTC input and receives 1.2, so the analyst reads the payment as 1.2 and wrongly assumes every input is Alice's](/img/diagrams/privacy/payjoin-vs-normal.svg)

</div>

## Why PayJoin Matters

### The Common-Input-Ownership Heuristic

Blockchain analysts rely on a key assumption:

> All inputs in a transaction belong to the same entity.

This assumption is correct most of the time, which is exactly why it is so useful for surveillance. Chain analysis companies trace funds by assuming inputs are owned together.

**PayJoin breaks this assumption.** When PayJoin transactions exist on-chain, analysts can no longer be certain that inputs share ownership, even in transactions that aren't PayJoins. That uncertainty ripples across the entire transaction graph.

### Privacy for Everyone

Even if you never use PayJoin yourself, widespread PayJoin adoption helps you:

- Adds uncertainty to every chain-analysis inference
- Makes the common-input-ownership assumption unreliable
- Benefits the entire network, not just participants

## How PayJoin Works

```
PAYJOIN FLOW:
─────────────────────────────────────────────────────────
1. Alice wants to pay Bob 0.7 BTC.

2. Alice creates a normal transaction:
   - Input: 1 BTC (Alice's UTXO)
   - Output: 0.7 BTC to Bob
   - Output: 0.3 BTC change to Alice

3. Instead of broadcasting, Alice sends this PSBT
   to Bob's PayJoin endpoint.

4. Bob adds his own input:
   - Adds input: 0.5 BTC (Bob's UTXO)
   - Adjusts his output: 0.7 + 0.5 = 1.2 BTC

5. Bob sends the modified transaction back to Alice.

6. Alice verifies the payment still goes where she intended
   and signs her inputs.

7. The final transaction is broadcast:
   - Inputs:  1 BTC (Alice) + 0.5 BTC (Bob)
   - Outputs: 1.2 BTC (Bob) + 0.3 BTC (Alice)

From outside it looks like Alice spent 1.5 BTC total.
No one knows Bob contributed an input.
```

### What an Analyst Sees

| What Analyst Assumes | Reality |
|----------------------|---------|
| Sender owns 1.5 BTC of inputs | Sender owns 1 BTC, receiver owns 0.5 BTC |
| Payment amount is ~1.2 BTC | Payment amount is 0.7 BTC |
| Change is 0.3 BTC | Correct, by coincidence |

The analyst's model of the transaction is completely wrong.

## PayJoin vs. CoinJoin

Both are privacy techniques, but they work differently:

<div class="fixed-width-table">

| Feature | PayJoin | CoinJoin |
|---------|---------|----------|
| **Participants** | 2 (sender + receiver) | Many (5 – 100+) |
| **Coordination** | Direct, during payment | Requires coordinator or protocol |
| **Visibility** | Looks like normal transaction | Clearly identifiable on-chain |
| **Use case** | Privacy during payments | Breaking transaction history |
| **Complexity** | Simple | More complex |
| **Fees** | Normal transaction fee | Coordinator fees + larger transaction |

</div>

**PayJoin is stealth privacy.** It doesn't look like a privacy transaction. **CoinJoin is explicit privacy.** Anyone can see it is a mixing transaction (though they can't trace through it). The two are complementary.

## Wallets Supporting PayJoin

### As Sender

<div class="fixed-width-table">

| Wallet | Platform | PayJoin Support |
|--------|----------|-----------------|
| **Sparrow** | Desktop | ✅ Full support |
| **BTCPay Server** | Web | ✅ Full support |
| **Wasabi** | Desktop | ✅ Full support |
| **BlueWallet** | Mobile | ✅ Full support |
| **JoinMarket** | Desktop | ✅ Full support |

</div>

### As Receiver

To receive PayJoin you need a wallet with PayJoin receiver support **and** a way to expose a PayJoin endpoint (URL). **BTCPay Server** is the easiest option for merchants; it handles PayJoin automatically for customers whose wallets support it.

## Using PayJoin with Sparrow Wallet

### Sending a PayJoin Payment

1. **Recipient provides a PayJoin URL.** It looks like `https://btcpay.example.com/BTC/pj` and is usually encoded inside a BIP21 URI.
2. **Create the transaction in Sparrow.** Go to the **Send** tab and paste the BIP21 URI. Sparrow detects the PayJoin capability automatically.
3. **Review and send.** Sparrow handles the PayJoin negotiation with the recipient endpoint. The transaction details show it is a PayJoin. Confirm and broadcast.

### Receiving PayJoin Payments

For individuals, receiving PayJoin typically requires running BTCPay Server or similar infrastructure. For merchants, BTCPay Server makes it automatic: just enable PayJoin in settings.

## Using PayJoin with BTCPay Server

If you run BTCPay Server for your business or personal use:

1. Go to **Store Settings → Checkout**
2. Find the **PayJoin (BIP78)** option
3. Enable it
4. Configure your hot wallet (PayJoin requires a hot wallet to contribute inputs)

When a customer pays an invoice:

1. They scan or copy the payment request.
2. If their wallet supports PayJoin, it negotiates automatically.
3. If it doesn't, they pay normally: no error, no friction.

No action is required from the customer. It just works.

## PayJoin Best Practices

### Do ✅

- **Use PayJoin whenever available:** every PayJoin helps network privacy
- **Run BTCPay Server if you accept payments:** easy PayJoin for your customers
- **Combine with other privacy practices:** PayJoin + coin control + own node

### Don't ❌

- **Don't expect anonymity from PayJoin alone:** it breaks one heuristic, not all
- **Don't use with KYC UTXOs expecting full privacy:** your exchange still knows your inputs
- **Don't rely on the receiver's privacy:** a receiver using bad infrastructure can leak information you can't control

## Limitations of PayJoin

1. **Doesn't hide amounts:** transaction amounts are still visible on-chain.
2. **Doesn't break all heuristics:** only the common-input-ownership one.
3. **Doesn't work retroactively:** only helps new transactions.
4. **Requires receiver support:** both parties need compatible wallets.

### When to Use CoinJoin Instead

Use [CoinJoin](/docs/learn/privacy/coinjoin) when you need to break links to past transaction history, get a stronger anonymity set, or gain privacy without the receiver's cooperation.

Use PayJoin when you are making a payment to a supporting merchant, you want stealth privacy that doesn't look like a privacy transaction, or you want to help network privacy broadly.

## The Bigger Picture

PayJoin is one tool in the privacy toolbox:

<div class="fixed-width-table">

| Tool | What It Does |
|------|--------------|
| **Own node** | Hides your addresses from third parties |
| **Coin control** | Prevents linking your UTXOs together |
| **PayJoin** | Breaks the common-input-ownership heuristic |
| **CoinJoin** | Breaks transaction graph traceability |
| **Tor** | Hides your IP when transacting |

</div>

Maximum privacy uses multiple layers together.

## Summary

- PayJoin is a **stealth privacy technique** where sender and receiver both contribute inputs.
- It **breaks the common-input-ownership assumption** that chain analysis relies on.
- PayJoin transactions **look like normal payments**; they aren't identifiable as privacy transactions.
- **Widespread adoption benefits everyone**, even non-users, by adding uncertainty to analysis.
- Use PayJoin whenever you pay a merchant or service that supports it.

## Resources

- [BIP78 Specification](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki): the technical standard
- [BTCPay Server PayJoin Docs](https://docs.btcpayserver.org/Payjoin/): setup guide for merchants
- [Sparrow Wallet](https://sparrowwallet.com): desktop wallet with PayJoin support

<NextSteps
  title="Continue Building Privacy"
  items={[
    {
      label: "Related",
      title: "CoinJoin Privacy Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction history with collaborative mixing"
    },
    {
      label: "Foundation",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Coin control, consolidation, and dusting-attack defense"
    },
    {
      label: "Context",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand what you are defending against"
    }
  ]}
/>
