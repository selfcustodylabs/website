---
sidebar_position: 5
title: "Install Horse Browser Extension"
description: "Install the Horse Chromium browser extension to connect your Nostr Signing Device to web clients and sign Nostr events from your browser."
keywords: ["horse extension", "nostr browser extension", "chromium extension", "NSD connection"]
tags: ["nostr", "horse", "extension", "browser"]
date: "2025-03-29"
---
# Installing the Horse extension (Chromium only)

Horse is LNbits' browser extension that passes signing requests from Nostr websites to the signing device. It works only in Chromium-based browsers and is built from source: clone it, install its dependencies, build it, and load it as an unpacked extension.

## Step 1: Build the extension

Step 1 builds it from source, which needs git and Node.js:

```bash
git clone https://github.com/lnbits/horse.git
cd horse
npm install --force
npm run build
```

The `--force` flag is needed for the dependencies to install.

## Step 2: Load it in the browser

Step 2 installs it:

1. Open Chromium and go to `chrome://extensions/`.
2. Turn on `Developer mode`, top right.
3. Click `Load unpacked`, top left, and select the `horse/extension` folder.

Horse then appears among your extensions.

![The Horse 0.0.2 extension in Chromium's extensions page, described as "Hardware Remote Signer of Events"](/img/nsd/horse.webp)
