---
sidebar_position: 1
title: "What is a Bitcoin Node"
description: "Understand what a Bitcoin node does, how it differs from a wallet, and its role in the network. Essential knowledge before running your own node."
keywords: ["bitcoin node", "full node", "bitcoin core", "blockchain", "verification", "mempool"]
tags: ["node", "bitcoin", "basics", "network"]
---

# What is a Bitcoin Node?

Every time you check your wallet balance, someone is answering your question. Every time you broadcast a transaction, someone is relaying it to the network. That "someone" is a Bitcoin node—and unless you're running your own, you're trusting a stranger with intimate details of your financial life.

A Bitcoin node is software that participates in the Bitcoin network. It maintains a complete copy of the blockchain, verifies every transaction against Bitcoin's rules, and helps keep the entire system running. Nodes are the backbone of Bitcoin's trustless architecture—they're what make "don't trust, verify" possible.

Understanding nodes is important because **your wallet depends on a node to function**—whether you realize it or not. The question isn't whether you'll use a node; it's whether you'll use your own or someone else's.


## What a Node Does

A Bitcoin node performs several critical functions, each one essential to the network's operation and your security.

### 1. Stores the Blockchain

A full node downloads and stores the complete Bitcoin blockchain—every transaction since Satoshi mined the genesis block in January 2009. This currently requires around 600+ GB of storage, and it grows by roughly 50-100 GB per year.

```
YOUR NODE'S COPY:
──────────────────────────────────────────────
Block 1 → Block 2 → Block 3 → ... → Block 850,000+
                                     (and counting)

Every transaction ever made, stored locally.
```

This might seem excessive, but there's a reason for it. Having the complete history means your node can independently verify any claim about any transaction. No trust required.

### 2. Verifies Everything

Here's where nodes become powerful: your node doesn't believe anything it's told. When it receives a new block or transaction, it independently verifies that every rule is followed. Did this transaction actually have valid signatures? Does the sender actually have the coins they're trying to spend? Does this block follow the consensus rules?

If a block breaks any rule—even by a single satoshi—your node rejects it. It doesn't matter if every other node in the world accepts it. Your node enforces the rules you agreed to run.

### 3. Connects to the Network

Nodes communicate with each other in a peer-to-peer mesh, sharing new transactions as they're created, propagating new blocks as they're mined, and helping new nodes synchronize with the current state. When you broadcast a transaction, your node sends it to its peers, who send it to their peers, until it reaches miners who can include it in a block.

### 4. Maintains the Mempool

Before transactions are confirmed in blocks, they wait in the **mempool**—a holding area of pending transactions. Each node maintains its own mempool, deciding which unconfirmed transactions to keep based on factors like fee rates and validity.

### 5. Responds to Wallet Queries

This is where it gets personal. When your wallet needs to check your balance, see if a payment arrived, or broadcast a transaction you've signed, it asks a node. That node sees exactly what your wallet is asking about—your addresses, your transactions, your financial activity.


## Nodes vs. Wallets

This distinction is critical:

<div class="fixed-width-table">

| Node | Wallet |
|------|--------|
| Stores full blockchain | Stores only your keys |
| Verifies all transactions | Creates your transactions |
| Serves data to wallets | Needs a node to function |
| No private keys | Contains private keys |
| Anyone can run one | Personal to you |

</div>

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

Here's the privacy problem most Bitcoin users don't think about: when your wallet queries a node, it necessarily reveals information. Your addresses, your transaction history, your current balance, when you're online—all of this flows to whatever node your wallet connects to.

If you use **someone else's node**, they learn all of this. And "someone else" could be anyone—a privacy-respecting node operator, a chain analysis company, or something in between.

### Random Public Nodes

Many wallets default to connecting to random public nodes. From the user's perspective, this just works—you open your wallet, see your balance, send transactions. Behind the scenes, however, your wallet is having a very revealing conversation:

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

The node operator now knows that these addresses belong to the same wallet. Combined with timing information and transaction patterns, this builds a comprehensive profile.

### Your Own Node

When you run your own node, this privacy leak disappears. Your wallet queries your node, and those queries never leave your control:

```
YOUR WALLET ──→ YOUR NODE
                   │
                   └─ Queries stay between you and your own infrastructure
```

This is why running a node isn't just for technical enthusiasts—it's a fundamental privacy measure.


## Types of Nodes

Not all nodes are the same. Different configurations offer different tradeoffs between storage requirements, verification depth, and functionality.

### Full Node

The gold standard. A full node downloads and verifies the complete blockchain—every block, every transaction, from the beginning of time to right now.

This is what most people mean by "running a node." It provides maximum verification (you're trusting no one) and best privacy (queries stay local). The cost is storage—currently around 600 GB and growing—plus an initial sync that can take hours to days depending on your hardware.

### Pruned Node

A pruned node is a full node that deletes old block data after verification. It still validates everything, but it doesn't keep the historical data around afterward.

- **Pros:** Less storage needed (~10 GB minimum)
- **Cons:** Can't serve historical data to other nodes

### Light Client / SPV

Light clients take a different approach. Instead of downloading and verifying everything, they only download block headers—tiny summaries that let them check whether a transaction is included in a block. For the actual transaction data, they ask full nodes.

This is fast and requires minimal storage, but it comes at a cost: you're trusting that the nodes you query are honest. For small amounts and convenience, this tradeoff can be acceptable. For serious holdings or privacy-sensitive use, it's not.

### Bitcoin Core

Bitcoin Core is the reference implementation—the original Bitcoin software maintained by the community since Satoshi's initial release. When people say "run a node," they usually mean running Bitcoin Core.

It's not the only option (alternatives like Bitcoin Knots exist), but it's the most widely used and the default choice for most node operators.


## The Verification Principle

Bitcoin's core philosophy can be summarized in three words: **Don't trust, verify.**

This isn't just a slogan. It's a fundamental architectural principle that distinguishes Bitcoin from every financial system that came before it. Traditional finance requires trust at every layer—trust that banks are solvent, trust that ledgers are accurate, trust that institutions follow the rules. Bitcoin replaces that trust with verification.

Without your own node, you're reintroducing trust. You trust someone else to tell you your correct balance. You trust them to accurately report whether transactions are valid. You trust them not to lie about the blockchain state.

With your own node, that trust becomes unnecessary. You verify everything yourself. You can't be deceived about your balance because you've independently confirmed it. You enforce Bitcoin's rules directly because you check every rule on every transaction.


## Why Running Your Own Node Matters

The benefits of running a node aren't abstract—they're practical improvements to your security, privacy, and relationship with the Bitcoin network.

**Privacy:** When your wallet talks to your node, no third party learns which addresses belong to you, what your balance is, or what transactions you're making. This is the single biggest privacy upgrade most Bitcoiners can make.

**Security:** You verify your own transactions against your own copy of the blockchain. No one can fool you with fake confirmations or misleading balance information. What your node says is what's true, because your node has verified it independently.

**Sovereignty:** You're not just using Bitcoin—you're participating in it. Your node validates the consensus rules, and by running it, you're part of the decentralized enforcement mechanism that keeps Bitcoin working.

**Network Health:** Every node makes Bitcoin stronger. The more nodes exist, the more copies of the blockchain exist, the harder it becomes to attack or censor the network. Running a node isn't just self-interested—it's a contribution to Bitcoin's resilience.


## Common Misconceptions

Even experienced Bitcoiners sometimes misunderstand what nodes do (and don't do).

**"I need a node to hold bitcoin"** — Your wallet holds bitcoin via private keys. A node is for verification and privacy. You can absolutely hold bitcoin without running a node; you'll just be trusting someone else's node for information about your holdings.

**"Running a node earns me bitcoin"** — Nodes don't earn rewards. Mining earns rewards. Nodes verify transactions and propagate blocks, but this service is provided for free. The reward is the security and privacy benefits to the node operator.

**"I need technical skills to run a node"** — This was true years ago; it's much less true today. Modern node software—especially user-friendly distributions like Umbrel or RaspiBlitz—has made running a node accessible to anyone who can follow basic instructions. If you can set up a Raspberry Pi or install software on a computer, you can run a node.

**"My hardware wallet is my node"** — Hardware wallets store keys and sign transactions. That's it. They have no blockchain data and can't verify anything independently. When you check your balance on a hardware wallet setup, that information is coming from a node somewhere—either yours or someone else's.


## Key Takeaways

The relationship between nodes and wallets is fundamental to understanding Bitcoin. Remember:

- A **node** stores the blockchain and verifies transactions
- A **wallet** stores your keys and creates transactions  
- Wallets **depend on nodes** to function—the question is whose node
- Using someone else's node **exposes your privacy**
- Running your own node means you **verify everything yourself**
- The principle: **Don't trust, verify**

---

## Continue Learning

Understanding what nodes do is the first step. The next is understanding why running your own is worth the effort.

→ **Next:** [Why Run Your Own Node](/docs/learn/nodes/why-run-node) — The benefits explained in depth

→ **Practical Guide:** [Bitcoin Node Setup](/docs/bitcoin-node) — Ready to run your own node

→ **Related:** [Why Privacy Matters](/docs/learn/privacy/why-privacy-matters) — The privacy implications
