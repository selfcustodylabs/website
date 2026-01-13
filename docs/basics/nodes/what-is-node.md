---
sidebar_position: 1
title: "What is a Bitcoin Node"
description: "Understand what a Bitcoin node does, how it differs from a wallet, and its role in the network. Essential knowledge before running your own node."
keywords: ["bitcoin node", "full node", "bitcoin core", "blockchain", "verification", "mempool"]
tags: ["node", "bitcoin", "basics", "network"]
---

# What is a Bitcoin Node?

A Bitcoin node is software that participates in the Bitcoin network. It maintains a copy of the blockchain, verifies transactions, and helps keep the network running.

Understanding nodes is important because **your wallet depends on a node** to function—whether you realize it or not.


## What a Node Does

A Bitcoin node performs several critical functions:

### 1. Stores the Blockchain

A full node downloads and stores the complete Bitcoin blockchain—every transaction since January 2009. This currently requires around 600+ GB of storage.

```
YOUR NODE'S COPY:
──────────────────────────────────────────────
Block 1 → Block 2 → Block 3 → ... → Block 850,000+
                                     (and counting)

Every transaction ever made, stored locally.
```

### 2. Verifies Everything

Your node doesn't trust other nodes. It independently verifies:
- Every transaction follows Bitcoin's rules
- Every block is properly constructed
- No bitcoin is spent twice
- No bitcoin is created out of thin air

If a block breaks any rule, your node rejects it—even if every other node accepts it.

### 3. Connects to the Network

Nodes communicate with each other in a peer-to-peer network:
- Broadcasting new transactions
- Sharing new blocks
- Helping new nodes sync

### 4. Maintains the Mempool

Unconfirmed transactions wait in the **mempool** (memory pool) until miners include them in a block. Your node maintains its own mempool of pending transactions.

### 5. Responds to Wallet Queries

When your wallet needs to:
- Check if you received a payment
- See your balance
- Broadcast a transaction

...it asks a node for this information.


## Nodes vs. Wallets

This distinction is critical:

| Node | Wallet |
|------|--------|
| Stores full blockchain | Stores only your keys |
| Verifies all transactions | Creates your transactions |
| Serves data to wallets | Needs a node to function |
| No private keys | Contains private keys |
| Anyone can run one | Personal to you |

**Your wallet needs a node to work.** The question is: whose node?

```
                    ┌─────────────┐
                    │   Wallet    │
                    │ (your keys) │
                    └──────┬──────┘
                           │
                           │ "What's my balance?"
                           │ "Did I receive payment?"
                           │ "Broadcast this transaction"
                           ▼
                    ┌─────────────┐
                    │    Node     │
                    │ (blockchain)│
                    └─────────────┘
```


## Why the Node Matters

When your wallet queries a node, it reveals information:
- Your addresses (past, present, and future)
- Your transaction history
- Your current balance
- When you're online

If you use **someone else's node**, they learn all of this.

### Random Public Nodes

Many wallets default to connecting to random public nodes. This is convenient but problematic:

```
YOUR WALLET:
  "What's the balance of address bc1q...abc?"
  "What's the balance of address bc1q...xyz?"
  "What's the balance of address bc1q...123?"
           │
           ▼
RANDOM NODE (possibly surveillance company):
  "Interesting... these addresses all belong 
   to the same person. Let me log this."
```

### Your Own Node

When you run your own node, these queries stay private:

```
YOUR WALLET ──→ YOUR NODE
                   │
                   └─ Queries never leave your control
```


## Types of Nodes

### Full Node

Downloads and verifies the complete blockchain. This is what most people mean by "running a node."

- **Pros:** Maximum verification, best privacy
- **Cons:** Requires storage (~600 GB), initial sync takes hours/days

### Pruned Node

A full node that deletes old block data after verification:

- **Pros:** Less storage needed (~10 GB minimum)
- **Cons:** Can't serve historical data to other nodes

### Light Client / SPV

Only downloads block headers, trusts other nodes for transaction data:

- **Pros:** Fast, minimal storage
- **Cons:** Reduced security, must trust other nodes

### Bitcoin Core

The reference implementation that most nodes run. When people say "run a node," they usually mean running Bitcoin Core.


## The Verification Principle

Bitcoin's core principle: **Don't trust, verify.**

Without your own node, you trust someone else to:
- Tell you the correct balance
- Tell you if a transaction is valid
- Not lie about the blockchain state

With your own node:
- You verify everything yourself
- You can't be deceived about your balance
- You enforce Bitcoin's rules directly


## Why Running Your Own Node Matters

### 1. Privacy

No third party learns your addresses or balance.

### 2. Security

You verify your own transactions—no one can fool you with fake confirmations.

### 3. Sovereignty

You directly participate in Bitcoin's consensus rules.

### 4. Network Health

More nodes make Bitcoin more decentralized and resilient.


## Common Misconceptions

### ❌ "I need a node to hold bitcoin"

**Reality:** Your wallet holds bitcoin (via private keys). A node is for verification and privacy.

### ❌ "Running a node earns me bitcoin"

**Reality:** Nodes don't earn rewards. Mining earns rewards. Nodes just verify.

### ❌ "I need technical skills to run a node"

**Reality:** Modern node software is quite user-friendly. If you can install software, you can run a node.

### ❌ "My hardware wallet is my node"

**Reality:** Hardware wallets only store keys and sign transactions. They still need a node to check balances and broadcast.


## Key Takeaways

- A **node** stores the blockchain and verifies transactions
- A **wallet** stores your keys and creates transactions
- Wallets **depend on nodes** to function
- Using someone else's node **exposes your privacy**
- Running your own node = **verify everything yourself**
- The principle: **Don't trust, verify**

---

## Continue Learning

→ **Next:** [Why Run Your Own Node](/docs/basics/nodes/why-run-node) — The benefits explained

→ **Practical Guide:** [Bitcoin Node Setup](/docs/bitcoin-node) — Set up your own node

→ **Related:** [Why Privacy Matters](/docs/basics/privacy/why-privacy-matters) — Privacy implications
