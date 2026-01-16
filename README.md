# Self Custody Labs - Master Bitcoin Self Custody with Simple, Clear Guides

Welcome to **selfcustodylabs.com** - your resource for mastering Bitcoin self-custody. Whether you're a beginner or an experienced user, our guides provide simple, clear, and practical steps to help you take control of your Bitcoin securely and independently.

## Overview

selfcustodylabs.com is dedicated to empowering individuals with the knowledge to store and secure their Bitcoin without relying on third-party custodians. Our goal is to provide high-quality, easy-to-understand tutorials on various aspects of Bitcoin self-custody, including cold storage, hardware wallets, and securing your private keys.

## Features

- **Comprehensive Guides**: Step-by-step instructions for setting up Bitcoin self-custody.
- **Security Best Practices**: Learn how to safeguard your private keys and backup strategies.
- **Cold Storage Solutions**: Detailed information on hardware wallets and air-gapped computers.

## Topics Covered

- **Introduction to Bitcoin Self Custody**: What it means to take control of your Bitcoin.
- **Choosing the Right Setup**: How to select the best self custody setup for your needs.
- **Air-Gapped Computer (AGC)**: How to securely set up and use an AGC for signing Bitcoin transactions offline.
- **Backup & Recovery**: Ensuring your seed is recoverable in case of one of your backup loss.

## Tech Stack

- **Framework**: [Docusaurus 3.x](https://docusaurus.io/)
- **Frontend**: React 18
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js >= 18.0
- npm >= 9.0

### Installation

```bash
# Clone the repository
git clone https://github.com/selfcustodylabs/website.git
cd website

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run start

# The site will be available at http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Serve the production build locally
npm run serve
```

### Other Commands

```bash
# Clear the build cache
npm run clear

# Check for broken links
npm run build  # Docusaurus throws on broken links

# Lint code
npm run lint

# Auto-fix lint errors
npm run lint:fix

# Format code
npm run format

# Check formatting without changing files
npm run format:check
```

## Project Structure

```
├── docs/               # Documentation content (Markdown/MDX)
│   ├── learn/          # Educational content
│   ├── security/       # Security guides
│   ├── privacy/        # Privacy guides
│   └── ...
├── src/
│   ├── components/     # React components
│   ├── css/            # Custom styles
│   ├── data/           # Data files (schema, navigation)
│   ├── pages/          # Custom pages
│   └── theme/          # Docusaurus theme overrides
├── static/             # Static assets (images, etc.)
├── docusaurus.config.js
└── sidebars.js
```

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on:

- Development setup
- Code style guidelines
- Pull request process

Quick start:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

- Website: [selfcustodylabs.com](https://selfcustodylabs.com)
- Twitter: [@selfcustodylabs](https://x.com/selfcustodylabs)
- Nostr: [nprofile...](https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5)
- Email: selfcustodylabs@proton.me