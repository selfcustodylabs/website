---
sidebar_position: 6
title: "Connect NSD to Nostr Clients"
description: "Connect your Nostr Signing Device to clients like Coracle and NoStrudel. Final step to start using your hardware-secured Nostr identity."
keywords: ["nostr client", "coracle", "nostrudel", "NSD connection", "horse extension"]
tags: ["nostr", "client", "setup"]
date: "2025-04-17"
---
# Connect to a Nostr client

The last step is logging in to a Nostr web client that can use the browser extension, so that every post and reaction is signed on the device. I have tested the device and the Horse extension with [Coracle](https://coracle.social/) and [noStrudel](https://nostrudel.ninja/). Other clients, Snort among them, have shown errors whose cause I have not found yet, so stick to those two for now.

Many popular web clients, [Primal](https://primal.net/) for example, do not support external signers and ask for your private key (`nsec`) to log in instead, which defeats the purpose of a signing device. Never paste your `nsec` into one.

Once logged in, add your preferred relays. From then on, every action you take (posting, reacting, following) asks the device to sign it before it is sent to the network.
