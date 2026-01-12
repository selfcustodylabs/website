---
sidebar_position: 1
title: "What is a Bitcoin Node"
description: "Understand what a Bitcoin node does and why running your own node matters for privacy, security, and true self-custody of your Bitcoin."
keywords: ["bitcoin node", "self custody", "bitcoin core", "full node", "blockchain", "verification"]
tags: ["bitcoin node", "self custody", "wallet"]
---
# Bitcoin Node

:::info What You'll Learn
In this guide, you will:
- Understand what a Bitcoin node does
- Learn why running your own node matters for privacy
- Set up a node using popular software options
- Connect your wallet to your own node

**⏱️ Time required:** 2-4 hours (plus sync time)  
**📊 Difficulty:** Intermediate  
**🔧 Prerequisites:** Dedicated computer or Raspberry Pi, 1TB+ storage
:::

Before we dive into the technical details, let’s start with the basics.

## What is a Bitcoin Node?  

A Bitcoin node is software (Bitcoin Core) that plays a crucial role in the Bitcoin network. It has several key functions:  

1. **Maintaining the blockchain** – A node stores a full copy of the Bitcoin blockchain, just like many other nodes around the world.  
2. **Connecting to the network** – It communicates with other nodes to share and receive transactions. Pending transactions are kept in a queue called the **mempool** until they are included in a block.  
3. **Verifying transactions and blocks** – Every node checks that new transactions and blocks follow Bitcoin’s rules. Invalid ones are rejected.  
4. **Providing blockchain data** – Nodes can respond to requests from wallets and other software, such as checking balances.  
5. **Helping new nodes sync** – When a new node joins the network, existing nodes provide a copy of the blockchain. However, the new node independently verifies every transaction, it doesn’t blindly trust the data.  


## Running a Bitcoin Node  

To run a node, you simply download Bitcoin Core and let it sync with the network by downloading the blockchain from other nodes. As new blocks are added (roughly every 10 minutes), your node verifies them before adding them to its copy of the blockchain.  

If a block is invalid, your node rejects it, not because others rejected it first, but because it fails Bitcoin’s built-in rules. Every other honest node running Bitcoin Core will do the same.  


## Bitcoin Wallets vs. Bitcoin Nodes  

Your Bitcoin wallet **does not** store a copy of the blockchain. Instead, it holds your private keys and needs to ask a Bitcoin node for information, like whether an address has received bitcoin. (Bitcoin Core has a built-in wallet, but most wallets are separate.)  

If you rely on someone else’s node, you’re trusting their data. Running your own node means you **verify everything yourself**, your wallet can query **your own** copy of the blockchain, without depending on third parties.  

(Connecting your wallet to your own node is a critical step, but that’s a topic for another article.)  

---

Now that we understand what a Bitcoin node does, let’s explore why running your own node is important.