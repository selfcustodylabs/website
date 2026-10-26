# Tor Configuration for Bitcoin Nodes

> Configure your Bitcoin node to run over Tor for enhanced privacy. Hide your IP address and enable secure remote access to your node.

Source: https://selfcustodylabs.com/docs/bitcoin-node/tor/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Tor does two jobs for a Bitcoin node. Routing the node's connections to other Bitcoin nodes through Tor hides your home IP address, so the network cannot see that your address runs a node, which would mark you as a likely bitcoin holder. And publishing your Electrum server as a Tor onion address lets your wallet reach your node from anywhere, with no port forwarding and no VPN. Parmanode installs and configures Tor from its menus; the cost is some extra latency.

## Why does your node's IP address matter?

Every node your node connects to sees its IP address, and an IP address is tied to you through your internet provider's records. With little effort, anyone can learn roughly where you live, that you run a Bitcoin node, and possibly link it with your other online activity. Someone who knows you run a node may assume you hold significant bitcoin, and a Lightning node's channel capacity is public, which gives a minimum estimate of your holdings. That makes you a potential target, including for [physical attacks](https://selfcustodylabs.com/docs/security/physical-security/).

<div class="doc-diagram">

![Tor serves two jobs for a node: routing node-to-network traffic so other Bitcoin nodes never see your IP or location, and carrying wallet-to-node connections to your onion address so you can reach home from anywhere without port forwarding](https://selfcustodylabs.com/img/diagrams/bitcoin-node/tor-use-cases.svg)

</div>

## How does Tor hide your node from the network?

Configured to use only Tor, your node connects to other nodes through their onion addresses and offers its own, so its peers see an onion address and never your home IP. That stops observers learning that you run a node, locating it, correlating it with your other activity, and your internet provider logging your Bitcoin connections.

In Parmanode, Tor is an option in the menus. In Bitcoin Core's own configuration file, these settings route every connection through Tor and connect only to other nodes on Tor:

```
proxy=127.0.0.1:9050
listen=1
bind=127.0.0.1
onlynet=onion
```

## How do you reach your node when you are away from home?

At home, your wallet reaches your node over your local network, privately and without Tor. Away from home, the node's local address (such as `192.168.1.100`) does not exist on the network you are on. The usual alternatives both have drawbacks: port forwarding exposes your node, and your home IP, to the whole internet, and a VPN back home takes setup and often a subscription.

A **Tor hidden service** solves it: your node publishes an `.onion` address reachable through the Tor network from anywhere, without exposing your home IP or opening a port, and the connection is encrypted end to end.

<div class="doc-diagram">

![Remote access over Tor: a wallet on a traveling phone connects through the Tor network to the hidden service onion address of your node at home; no open ports, no exposed IP and no VPN needed](https://selfcustodylabs.com/img/diagrams/bitcoin-node/tor-remote-access.svg)

</div>

## How do you set it up with Parmanode?

Install Tor from Parmanode's other-install menu. Parmanode then shows onion addresses for Bitcoin Core and for your Electrum server; the Electrum server's appears in its status menu:

```
TOR:  abc123...xyz.onion:50001
```

Enter that address in your wallet's server settings to connect from anywhere.

## Can you share your node with family?

Yes: give them your Electrum server's onion address and their wallets can use your node from anywhere. Each connected wallet adds load, though, and a Raspberry Pi handles only a few at once, so do not publish the address.

## What does Tor cost?

Tor adds latency, because traffic passes through several relays. That is acceptable for ordinary node use, but can matter for time-sensitive work such as running a routing Lightning node. A hybrid setup, connecting to peers both over Tor and directly, improves connectivity at the price of privacy, since the direct connections reveal your IP.
