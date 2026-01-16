# Contributing to Self Custody Labs

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/selfcustodylabs/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run start
   ```

4. **Open in browser**
   Visit `http://localhost:3000`

## Code Style

We use ESLint and Prettier to maintain consistent code quality.

### Before Committing

Run these commands to ensure your code meets our standards:

```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors where possible
npm run lint:fix

# Check formatting
npm run format:check

# Auto-format files
npm run format
```

### Style Guidelines

- **JavaScript/React**: ES6+ syntax, functional components with hooks
- **Imports**: Group by type (React, Docusaurus, MUI, local components)
- **Components**: Use JSDoc comments for props documentation
- **CSS**: Use CSS Modules (`.module.css` files)

### Example Component

```jsx
import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Example card component
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string} props.href - Link destination
 */
export default function ExampleCard({ title, href }) {
  return (
    <Link to={href}>
      <h3>{title}</h3>
    </Link>
  );
}
```

## Project Structure

```
src/
├── components/       # Shared React components
│   ├── icons/        # Custom SVG icon components
│   └── index.js      # Barrel exports
├── css/              # Global styles
├── data/             # Static data (schemas, progress data)
├── pages/            # Landing pages (index, learn, guides)
└── theme/            # Docusaurus theme overrides

docs/                 # Documentation content (MDX files)
static/               # Static assets (images, fonts)
```

## Writing Documentation

Documentation is written in MDX (Markdown with JSX support).

### Frontmatter

Every doc should include frontmatter:

```yaml
---
title: Page Title
description: Brief description for SEO
sidebar_position: 1
---
```

### Adding Images

1. Place images in `static/img/`
2. Reference with absolute path: `![Alt text](/img/example.png)`

### Using Components

Import shared components in MDX:

```mdx
import { NextSteps } from '@site/src/components';

<NextSteps items={[...]} />
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm run format`
4. Run `npm run build` to verify the build succeeds
5. Submit a pull request with a clear description

## Questions?

Open an issue or reach out via our community channels listed on the website.
