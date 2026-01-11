---
sidebar_position: 3
title: "Running over TOR"
description: "Practical guide: Running over TOR. Covers Connecting to Other Nodes, Connecting Your Bitcoin Wallet, bitcoin."
keywords: ["bitcoin", "self custody", "security", "privacy", "node", "running", "over", "bitcoin node", "electrum", "tor"]
tags: ["bitcoin node", "tor", "self custody"]
---
# Bitcoin Node over TOR

When running a Bitcoin node, there are two types of Tor connections to consider:


## Connecting to Other Nodes

The first connection is the one your node makes to other Bitcoin nodes. By using Tor, your node hides your home IP address from the rest of the Bitcoin network. Your IP address is tied to your identity through the KYC (Know Your Customer) information collected by your Internet Service Provider (ISP).

Anyone can look up your IP address, which can reveal your approximate location. More advanced tools could potentially pinpoint your location even more precisely, though I’m not familiar with any specific methods to explain this.

Why is this important? You don’t want attackers to know that you’re running a Bitcoin node, or to learn about your Bitcoin holdings. If you’re running a Lightning Node, your channel liquidity is publicly visible. While inbound sats may not be owned by you, an attacker could estimate how much Bitcoin is on your Lightning Node, which could give them an idea of how much you have in cold storage. This makes you a potential target. So, it’s important to run your node over Tor to protect your privacy and location.


## Connecting Your Bitcoin Wallet

The second connection to consider is between your Bitcoin node and the wallet on your computer. This connection is already private because it only involves two devices on your local home network, which aren’t accessible from the outside world. (However, ensure your router’s security is strong, use a firewall, a good password, and avoid opening unnecessary ports.)

Your router assigns internal IP addresses to devices connected to it, and these addresses can’t be accessed from the internet. Your wallet needs to know the internal IP address of your node to communicate with it. But what if you’re away from home with your wallet? The internal IP address won’t work anymore because you’re no longer connected to the same network. This is where Tor helps. It allows your wallet to connect to your node from anywhere in the world.

The node has a Tor onion address, which your wallet needs to know to establish the connection. In this case, Tor isn’t helping with privacy, but rather enabling communication between your wallet and node from outside your home network.

If you share your onion address with friends or family, they can also connect to your node (but keep in mind, too many connections might overload your setup, especially on a small Raspberry Pi).