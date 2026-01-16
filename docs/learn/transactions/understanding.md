---
sidebar_position: 2
title: "How Bitcoin Transactions Work"
description: "Understand how Bitcoin transactions work: inputs, outputs, change, fees, and the complete lifecycle from creation to confirmation."
keywords: ["bitcoin", "transactions", "inputs", "outputs", "fees", "mempool", "confirmations", "lifecycle"]
tags: ["bitcoin", "transactions", "understanding", "lifecycle"]
---

# How Bitcoin Transactions Work

Bitcoin might seem complicated at first, but once you understand a few key ideas, the process becomes much clearer. This page covers both the structure of transactions and what happens when you send one.


## Inputs and Outputs

Bitcoin doesn't work like a bank account where your balance is just a number. Instead, it uses the **UTXO model** (Unspent Transaction Outputs).

:::tip Deep Dive
For a complete explanation of UTXOs, see [UTXOs Explained](/docs/learn/transactions/utxos).
:::

- **Input:** Where the Bitcoin is coming from (previous UTXOs you own)
- **Output:** Where the Bitcoin is going (new UTXOs being created)

When you send Bitcoin, you're telling the network:

*"I want to consume these inputs (UTXOs I previously received) and create these outputs (new UTXOs for the recipient and change for myself)."*


## You Always Spend the Whole Input

One important detail: Bitcoin doesn't let you spend just a portion of an input. You always spend the whole thing. If you only need part of it, the rest is sent back to you as **change**, usually to a new address that your wallet controls automatically.

Example:

- You have an input worth 0.01 BTC
- You send 0.008 BTC to a friend
- The remaining 0.002 BTC goes back to you as change on a new address

Your wallet takes care of this behind the scenes, but it helps to understand what's happening.


## Transaction Fees

To get your transaction included in a block, you pay a small fee to the miners. This fee isn't a separate line item—it's simply the difference between the amount you're spending and what's being sent out.

Going back to our example:

- **Inputs**: 0.01 BTC
- **Outputs**: 0.008 BTC to friend + 0.0019 BTC change
- **Fee**: 0.0001 BTC (automatically calculated by your wallet)

That means the remaining 0.0001 BTC was used as the transaction fee.

Your wallet usually calculates the fee for you, based on how busy the network is.

:::info Fee Insight
Fees depend on transaction **size** (in bytes), not the **value** being sent. More UTXOs means a larger transaction and higher fees. See [Transaction Fees](/docs/learn/transactions/fees) for a complete guide.
:::


---

## Transaction Lifecycle

When you send Bitcoin, the transaction goes through a series of steps before it's fully confirmed and secure. Here's what happens behind the scenes.

### Step 1: Creating the Transaction

It all begins in your Bitcoin wallet. You enter the recipient's address and the amount you want to send. The wallet then:

1. Selects which coins (UTXOs) to use
2. Generates the outputs, including any change back to you
3. Calculates an appropriate fee based on current network conditions

Once everything is set, the transaction is **signed** using your private key. This signature proves that you're authorized to spend the funds and makes the transaction ready for broadcasting.

### Step 2: Broadcasting

Next, your wallet sends the signed transaction to the Bitcoin network. It connects to one or more Bitcoin nodes and transmits the transaction data. The nodes validate that your transaction follows the rules and then relay it to other nodes.

Within seconds, your transaction is visible across the network.

### Step 3: The Mempool (Waiting Room)

Every full node on the Bitcoin network keeps a copy of the **mempool**—a holding area for unconfirmed transactions. This is where your transaction waits to be included in a block.

Miners review the mempool and select which transactions to include, typically favoring those that pay higher fees per byte (sat/vB).

If your fee is too low, your transaction might stay in the mempool for a while. You can speed things up using:
- **RBF (Replace-By-Fee):** Rebroadcast with a higher fee
- **CPFP (Child-Pays-For-Parent):** Spend the unconfirmed output with a high-fee transaction

### Step 4: Block Inclusion

Roughly every 10 minutes, a miner successfully mines a new block and includes a set of transactions from the mempool. If your transaction makes it into the block, it's now considered **confirmed**—this is the moment it officially becomes part of the blockchain.

### Step 5: Confirmations

Once your transaction is in a block, each additional block that gets added afterward increases its number of **confirmations**:

<div class="fixed-width-table">

| Confirmations | Status | Typical Use |
|---------------|--------|-------------|
| 0 | Unconfirmed | Transaction broadcast but not yet in a block |
| 1 | Confirmed | In a block; suitable for small payments |
| 3 | More secure | Reasonable for medium amounts |
| 6 | Highly secure | Standard for large transactions |

</div>

The more confirmations a transaction has, the harder it becomes to reverse. That's why businesses and users often wait for multiple confirmations before considering a payment final.

```
TRANSACTION FLOW
════════════════════════════════════════════════════════════

  Create → Sign → Broadcast → Mempool → Block → Confirmed
    │        │        │          │        │         │
  Wallet   Private   Nodes    Waiting   Miner    Each new
  builds    key     relay     for       adds     block adds
  tx      proves    to       miner     to       confirmation
          owner   network   pickup   blockchain

════════════════════════════════════════════════════════════
```


## Key Takeaways

- Transactions consume **inputs** (UTXOs you own) and create **outputs** (new UTXOs)
- You always spend the **whole input**—excess comes back as change
- **Fees** are the difference between inputs and outputs
- Transactions wait in the **mempool** until a miner includes them in a block
- More **confirmations** = more security (6 is the standard for large amounts)


<RelatedArticles 
  title="Related Topics"
  articles={[
    { title: "UTXOs Explained", href: "/docs/learn/transactions/utxos/", tag: "Learn" },
    { title: "Transaction Fees", href: "/docs/learn/transactions/fees/", tag: "Learn" },
    { title: "Creating Transactions", href: "/docs/learn/transactions/create/", tag: "Learn" },
    { title: "Broadcasting", href: "/docs/learn/transactions/broadcast/", tag: "Learn" },
  ]}
/>
