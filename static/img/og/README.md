# Open Graph Images

This directory contains custom Open Graph images for social media sharing.

## Recommended Specifications

- **Dimensions**: 1200 x 630 pixels (1.91:1 ratio)
- **Format**: PNG or JPG
- **File size**: Under 1MB (ideally under 300KB)
- **Color space**: sRGB

## Naming Convention

Use the page path as the filename:
- Homepage: `home.png`
- `/docs/security/seed-generation/`: `seed-generation.png`
- `/docs/wallet-setup/hardware-wallet/`: `hardware-wallet.png`

## Priority Pages for Custom OG Images

1. **Homepage** (`home.png`)
   - Brand-focused with logo and tagline
   - "Master Bitcoin Self-Custody"

2. **DIY Seed Generation** (`seed-generation.png`)
   - Show dice imagery
   - "Generate Your Own Bitcoin Seed"

3. **Hardware Wallet Setup** (`hardware-wallet.png`)
   - Hardware wallet device imagery
   - "Set Up Your Hardware Wallet"

4. **Bitcoin Node** (`bitcoin-node.png`)
   - Node/server imagery
   - "Run Your Own Bitcoin Node"

5. **What is Bitcoin** (`what-is-bitcoin.png`)
   - Educational/foundational imagery
   - "Understanding Bitcoin"

## Design Guidelines

### Brand Colors
- Primary Orange: `#f26b00`
- Dark Background: `#0b0b0c`
- Light Text: `#ffffff`

### Template Structure
```
┌─────────────────────────────────────┐
│                                     │
│   [Logo]                            │
│                                     │
│   Page Title                        │
│   Short description                 │
│                                     │
│             selfcustodylabs.com     │
└─────────────────────────────────────┘
```

### Tools for Creating OG Images
- **Figma**: Free design tool with templates
- **Canva**: Easy drag-and-drop
- **OG Image Generator**: https://og-playground.vercel.app/

## Usage in Frontmatter

To use a custom OG image, add to the page's frontmatter:

```yaml
---
title: DIY Seed Generation
description: Create your own Bitcoin seed phrase
image: /img/og/seed-generation.png
---
```

## Verification

Test your OG images with:
- https://www.opengraph.xyz/
- https://cards-dev.twitter.com/validator
- Facebook Sharing Debugger

## Default Fallback

If no custom image is specified, the default `social-card.png` is used.
