---
sidebar_position: 6
title: "Connect to a Nostr Client"
description: "Practical guide: Connect to a Nostr Client. Covers bitcoin, self custody, security."
keywords: ["bitcoin", "self custody", "security", "privacy", "nsd", "connect", "nostr", "client"]
slug: "/nostr-signing-device/connect-to-client"
tags: ["nostr", "nsd", "signing device", "client"]
---
# Connect to a Nostr Client

Now that you’ve set up your NSD (Nostr Signing Device) and the browser extension, the last step is to connect to your favorite Nostr client. Make sure to choose one that supports the browser extension we connected the NSD to.

So far, I’ve tested the NSD and the Horse extension with the following Nostr clients:

- [Coracle](https://coracle.social/)
- [NoStrudel](https://nostrudel.ninja/)

Some other clients, like Snort, may show errors. I haven’t figured out the cause yet, so I recommend sticking to the ones above for now.

You can try other web clients (like the more popular [Primal](https://primal.net/)), but keep in mind that many of them don’t support the Horse extension or external signing devices. Instead, they ask you to enter your private key (`nsec`) to log in, which is against the whole point of using a signing device to keep your private key offline.

Once you're logged in, make sure to add your preferred relays. And in general, for every action (like posting or reacting), you'll be prompted to sign it using your signing device before it’s propagated to the network.

Congratulations, you're now fully sovereign on Nostr!