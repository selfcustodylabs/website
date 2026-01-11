---
sidebar_position: 5
title: "Horse Extension"
description: "Practical guide: Horse Extension. Covers bitcoin, self custody, security."
keywords: ["bitcoin", "self custody", "security", "privacy", "nsd", "horse", "extension"]
slug: "/nostr-signing-device/horse-extension-setup"
tags: ["nostr", "nsd", "signing device", "github", "horse", "extension"]
---
# Installing the Horse Extension (Chromium Browser Only)

This works only with Chromium Browser

### Clone the repository:

Open a terminal and run:

```bash
git clone https://github.com/lnbits/horse.git
```

### Navigate to the project folder:

```bash
cd horse
```

### Install dependencies

Run the following command (the `--force` flag is required to ensure successful installation):

```bash
npm install --force
```

### Build the extension:

```bash
npm run build
```

### Load the extension in your browser

- Open Chromium.
- Type `chrome://extensions/` in the address bar and press Enter.
- Enable `Developer mode` (toggle in the top right corner).
- Click `Load unpacked` (top left).
- Select the `horse/extension` folder.

Once installed, the Horse extension should appear among your extensions.

![Horse](/img/nsd/horse.png)

You're now ready to securely sign offline transactions with your NSD and dive into the world of Nostr!