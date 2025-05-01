---
sidebar_position: 6
title: Broadcasting
slug: /basics/transactions/broadcasting
tags: [bitcoin, transactions, broadcasting]
---

# Broadcasting Transactions

Once your Bitcoin transaction is fully signed, it's ready to be **broadcasted**, meaning sent out to the peer-to-peer (P2P) network. Other nodes receive it and temporarily store it in their **mempool**, essentially a waiting room for transactions. From there, miners select transactions from the mempool to include in the next block.

In short, broadcasting is how your transaction gets announced to the network for confirmation.


## Broadcasting via Your Own Node vs. Third-Party Servers

You have two main ways to broadcast a transaction: through your own full node or via third-party servers.


### Using Your Own Node

When your wallet connects to your personal full node, the transaction is sent directly from your machine—no intermediaries involved.

This method offers **maximum privacy and control**. It’s trustless, meaning you independently verify everything without relying on a third party. However, it does require you to run and maintain a full node (e.g., Bitcoin Core or Umbrel), which can be a technical or resource commitment.


### Using Third-Party Servers

Many wallets—especially mobile apps—broadcast transactions through external servers such as Electrum public servers, Blockstream.info, or the wallet provider’s backend.

This approach is much more convenient. It’s fast, with no setup required. But there’s a tradeoff: you’re trusting that server not to log your IP, delay, censor, or snoop on your transaction. This method offers less privacy, and you lose some control over how your transaction is relayed.


## Privacy Considerations

Broadcasting can reveal information about you if not done carefully. To improve your privacy:

- Use Tor: Whether you're using your own node or a third-party server, routing through Tor helps conceal your IP address.
- Be cautious with mobile wallets: Many rely on centralized servers. Understand what you're giving up in terms of privacy.
- Run your own node whenever possible. It's the best way to retain sovereignty and keep your broadcast private.