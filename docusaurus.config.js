// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// @type {import('@docusaurus/types').Config}
const config = {
  title: "Self Custody Labs",
  tagline: "Bitcoin self-custody guides and tutorials. Learn cold storage, hardware wallets, and privacy best practices.",
  favicon: "img/favicon.ico?v=2",

  // ===========================================
  // HEAD TAGS - Global SEO & Structured Data
  // ===========================================
  headTags: [
    // Preconnect for performance
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.googletagmanager.com" } },
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.google-analytics.com" } },
    
    // DNS Prefetch for external resources
    { tagName: "link", attributes: { rel: "dns-prefetch", href: "https://cloud.umami.is" } },
    
    // ===========================================
    // Open Graph Meta Tags (Facebook, LinkedIn, etc.)
    // ===========================================
    { tagName: "meta", attributes: { property: "og:site_name", content: "Self Custody Labs" } },
    { tagName: "meta", attributes: { property: "og:type", content: "website" } },
    { tagName: "meta", attributes: { property: "og:locale", content: "en_US" } },
    
    // ===========================================
    // Twitter Card Meta Tags
    // ===========================================
    { tagName: "meta", attributes: { name: "twitter:card", content: "summary_large_image" } },
    { tagName: "meta", attributes: { name: "twitter:site", content: "@selfcustodylabs" } },
    { tagName: "meta", attributes: { name: "twitter:creator", content: "@selfcustodylabs" } },
    
    // ===========================================
    // Additional SEO Meta Tags
    // ===========================================
    { tagName: "meta", attributes: { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" } },
    { tagName: "meta", attributes: { name: "googlebot", content: "index, follow" } },
    { tagName: "meta", attributes: { name: "author", content: "Self Custody Labs" } },
    { tagName: "meta", attributes: { name: "publisher", content: "Self Custody Labs" } },
    
    // Theme color for mobile browsers
    { tagName: "meta", attributes: { name: "theme-color", content: "#f59e0b" } },
    { tagName: "meta", attributes: { name: "msapplication-TileColor", content: "#f59e0b" } },

    // ===========================================
    // Content Security Policy
    // ===========================================
    {
      tagName: "meta",
      attributes: {
        "http-equiv": "Content-Security-Policy",
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://cloud.umami.is; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://cloud.umami.is https://region1.google-analytics.com; font-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
      }
    },

    // Additional security headers via meta tags
    { tagName: "meta", attributes: { "http-equiv": "X-Content-Type-Options", content: "nosniff" } },
    { tagName: "meta", attributes: { "http-equiv": "X-Frame-Options", content: "DENY" } },

    // ===========================================
    // Structured Data - Organization Schema
    // ===========================================
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://selfcustodylabs.com/#organization",
        "name": "Self Custody Labs",
        "url": "https://selfcustodylabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://selfcustodylabs.com/img/logo.svg",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://x.com/selfcustodylabs",
          "https://github.com/selfcustodylabs",
          "https://keybase.io/selfcustodylabs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "selfcustodylabs@proton.me",
          "contactType": "customer support"
        }
      }),
    },
    
    // ===========================================
    // Structured Data - WebSite Schema with SearchAction
    // ===========================================
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://selfcustodylabs.com/#website",
        "name": "Self Custody Labs",
        "url": "https://selfcustodylabs.com",
        "description": "Bitcoin self-custody guides and tutorials. Learn cold storage, hardware wallets, air-gapped setups, and privacy best practices.",
        "publisher": {
          "@id": "https://selfcustodylabs.com/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://selfcustodylabs.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }),
    },
    
    // ===========================================
    // Structured Data - Educational Organization
    // ===========================================
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": "https://selfcustodylabs.com/#educationalorg",
        "name": "Self Custody Labs",
        "description": "Free educational resources for Bitcoin self-custody",
        "url": "https://selfcustodylabs.com",
        "sameAs": [
          "https://x.com/selfcustodylabs",
          "https://github.com/selfcustodylabs"
        ],
        "areaServed": "Worldwide",
        "knowsAbout": [
          "Bitcoin",
          "Self-custody",
          "Hardware wallets",
          "Cold storage",
          "Cryptocurrency security",
          "Private keys",
          "Seed phrases",
          "Multisig wallets"
        ]
      }),
    },
  ],

  // ===========================================
  // SITE URLS - Critical for canonical tags
  // ===========================================
  url: "https://selfcustodylabs.com",
  baseUrl: "/",
  
  // IMPORTANT: trailingSlash must be consistent
  // This ensures canonical URLs match actual URLs
  // Set to true = all URLs end with /
  trailingSlash: true,

  // ===========================================
  // GitHub Pages Deployment
  // ===========================================
  organizationName: "selfcustodylabs",
  projectName: "website",
  deploymentBranch: "gh-pages",

  // ===========================================
  // Link/Build Checking
  // ===========================================
  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  onDuplicateRoutes: "warn",
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // ===========================================
  // Internationalization
  // ===========================================
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // ===========================================
  // PRESETS
  // ===========================================
  presets: [
    [
      "classic",
      // @type {import('@docusaurus/preset-classic').Options}
      ({
        // Google Analytics
        gtag: {
          trackingID: "G-DB4LHSKK4J",
          anonymizeIP: true,
        },
        
        // Sitemap Configuration
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            '/docs/tags/**',
            '/404.html',
            '/404/',
            '/search/',
          ],
          filename: 'sitemap.xml',
        },
        
        // Docs Configuration
        docs: {
          sidebarPath: "./sidebars.js",
          // Enable "last updated" for SEO freshness signals
          showLastUpdateTime: true,
          // Breadcrumbs help with SEO and navigation
          breadcrumbs: true,
        },
        
        // Blog disabled
        blog: false,
        
        // Theme
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/tailwind.css"],
        },
      }),
    ],
  ],

  // ===========================================
  // THEME CONFIG
  // ===========================================
  themeConfig:
    // @type {import('@docusaurus/preset-classic').ThemeConfig}
    ({
      // Default social card image
      image: 'img/social-card.png',
      
      // ===========================================
      // Global Metadata (fallback for pages without frontmatter)
      // ===========================================
      metadata: [
        { name: 'keywords', content: 'bitcoin, self custody, self-custody, cold storage, hardware wallet, air gapped, air-gapped computer, privacy, bitcoin node, multisig, seed phrase, private keys' },
        { name: 'description', content: 'Bitcoin self-custody guides and tutorials. Learn cold storage, hardware wallets, air-gapped setups, wallet security, and privacy best practices.' },
        { property: 'og:image', content: 'https://selfcustodylabs.com/img/social-card.png' },
        { name: 'twitter:image', content: 'https://selfcustodylabs.com/img/social-card.png' },
      ],
      
      // Color Mode
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      
      // ===========================================
      // Announcement Bar (optional - for important updates)
      // ===========================================
      // announcementBar: {
      //   id: 'new_guide',
      //   content: '🆕 New guide: <a href="/docs/learn/wallets/multisig/">Multisig Setup</a> - Eliminate single points of failure',
      //   backgroundColor: '#f59e0b',
      //   textColor: '#000',
      //   isCloseable: true,
      // },
      
      // ===========================================
      // Navigation
      // ===========================================
      navbar: {
        title: 'Self Custody Labs',
        logo: {
          alt: 'Self Custody Labs - Bitcoin Self-Custody Guides',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Learn',
            to: '/learn/',
            position: 'left',
          },
          {
            label: 'Guides',
            to: '/guides/',
            position: 'left',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: '/books/',
                label: 'Books',
              },
              {
                to: '/podcasts/',
                label: 'Podcasts',
              },
              {
                type: 'html',
                value: '<hr style="margin: 8px 0; border-color: rgba(245, 158, 11, 0.2);">',
              },
              {
                href: 'https://timechainstats.com/',
                label: 'TimechainStats',
              },
              {
                href: 'https://kycnot.me/',
                label: 'No KYC'
              },
              {
                href: 'https://mempool.space/',
                label: 'Mempool',
              },
              {
                href: 'https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt',
                label: 'BIP39 Word List'
              },
            ],
          },
          {
            label: 'About',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5',
                label: 'Nostr',
              },
              {
                href: 'https://x.com/selfcustodylabs',
                label: 'X (Twitter)',
              },
              {
                href: 'mailto:selfcustodylabs@proton.me',
                label: 'E-mail'
              },
              {
                href: 'https://app.cluborange.org/selfcustodylabs',
                label: 'Club Orange App',
              },
              {
                href: 'https://github.com/selfcustodylabs',
                label: 'GitHub',
              },
              {
                href: 'https://keybase.io/selfcustodylabs',
                label: 'Keybase'
              },
            ],
          },
          {
            href: 'https://github.com/selfcustodylabs',
            position: 'right',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://app.cluborange.org/selfcustodylabs',
            position: 'right',
            className: "header--cluborange-link",
            "aria-label": "Club Orange App",
          },
        ],
      },
      
      // ===========================================
      // Footer
      // ===========================================
      footer: {
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Start Here',
                to: '/docs/learn/fundamentals/',
              },
              {
                label: 'What is Self-Custody',
                to: '/docs/learn/fundamentals/what-is-self-custody/',
              },
              {
                label: 'Private Keys',
                to: '/docs/learn/keys/intro/',
              },
              {
                label: 'Glossary',
                to: '/docs/reference/glossary/',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Wallet Setup',
                to: '/docs/wallet-setup/',
              },
              {
                label: 'Security Hardening',
                to: '/docs/security/',
              },
              {
                label: 'Privacy Guides',
                to: '/docs/learn/privacy/protecting-privacy/',
              },
              {
                label: 'Advanced Setups',
                to: '/docs/advanced/',
              },
              {
                label: 'Bitcoin Node',
                to: '/docs/bitcoin-node/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Books',
                to: '/books/',
              },
              {
                label: 'Podcasts',
                to: '/podcasts/',
              },
              {
                label: 'BIP39 Word List',
                href: 'https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt',
              },
              {
                label: 'Mempool',
                href: 'https://mempool.space/',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy/',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Nostr',
                href: 'https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/selfcustodylabs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/selfcustodylabs',
              },
              {
                label: 'Keybase',
                href: 'https://keybase.io/selfcustodylabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Self Custody Labs. Built with Docusaurus.`,
      },
      
      // ===========================================
      // Code Highlighting
      // ===========================================
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
    }),
    
  // ===========================================
  // THEMES (Search)
  // ===========================================
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      // @type {import("@easyops-cn/docusaurus-search-local").PluginOptions}
      ({
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: "/docs",
        // Improve search result quality
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        // Highlight search terms
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],
  
  // ===========================================
  // PLUGINS
  // ===========================================
  plugins: [
    function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwind',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindcss);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // =============================================
          // GETTING-STARTED → LEARN/FUNDAMENTALS migration
          // =============================================
          {
            from: '/docs/getting-started',
            to: '/docs/learn/fundamentals',
          },
          {
            from: '/docs/getting-started/what-is-bitcoin',
            to: '/docs/learn/fundamentals/what-is-bitcoin',
          },
          {
            from: '/docs/getting-started/what-is-self-custody',
            to: '/docs/learn/fundamentals/what-is-self-custody',
          },
          {
            from: '/docs/getting-started/holding-bitcoin',
            to: '/docs/learn/fundamentals/holding-bitcoin',
          },
          {
            from: '/docs/getting-started/choosing-your-path',
            to: '/docs/learn/fundamentals/choosing-your-path',
          },
          {
            from: '/docs/getting-started/threat-models',
            to: '/docs/learn/fundamentals/threat-models',
          },
          {
            from: '/docs/getting-started/before-you-deposit',
            to: '/docs/wallet-setup/before-you-deposit',
          },
          // =============================================
          // LEARN/FUNDAMENTALS → WALLET-SETUP migration
          // =============================================
          {
            from: '/docs/learn/fundamentals/before-you-deposit',
            to: '/docs/wallet-setup/before-you-deposit',
          },
          // =============================================
          // CONTENT MERGES - Phase 3
          // =============================================
          {
            from: '/docs/learn/transactions/lifecycle',
            to: '/docs/learn/transactions/understanding',
          },
          // Legacy /docs/basics/ redirects
          {
            from: '/docs/basics/what-is-bitcoin',
            to: '/docs/learn/fundamentals/what-is-bitcoin',
          },
          {
            from: '/docs/basics/holding',
            to: '/docs/learn/fundamentals/holding-bitcoin',
          },
          // Top-level legacy path (no docs prefix) → closest topic
          {
            from: '/bitcoin-devices',
            to: '/docs/reference/hardware-wallet-comparison',
          },
          // =============================================
          // SEED GENERATION MERGE → /docs/learn/keys/random
          // The old /docs/security/seed-generation/* tree and its
          // bare /docs/seed/* aliases were merged into a single
          // canonical page at /docs/learn/keys/random/.
          // =============================================
          {
            from: '/docs/security/seed-generation',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/requirements',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/dice-roll',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/binary-decimal',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/checksum',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/bip39',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/security/seed-generation/backup',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/requirements',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/dice-roll',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/binary-decimal',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/checksum',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/bip39',
            to: '/docs/learn/keys/random',
          },
          {
            from: '/docs/seed/backup',
            to: '/docs/learn/keys/random',
          },
          // =============================================
          // PASSPHRASE MERGE → /docs/learn/keys/passphrase
          // The old /docs/security/passphrase/* tree and its
          // bare /docs/passphrase/* aliases were merged into
          // a single canonical page at /docs/learn/keys/passphrase/.
          // =============================================
          {
            from: '/docs/security/passphrase',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/security/passphrase/word-lists',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/security/passphrase/dice-roll',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/security/passphrase/backup',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/passphrase',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/passphrase/word-lists',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/passphrase/dice-roll',
            to: '/docs/learn/keys/passphrase',
          },
          {
            from: '/docs/passphrase/backup',
            to: '/docs/learn/keys/passphrase',
          },
          // =============================================
          // PRIVACY TRIO MERGE → /docs/learn/privacy/*
          // The old /docs/privacy/* tree and its bare
          // /docs/{coinjoin,payjoin,utxo-management}/*
          // aliases were merged into three canonical pages:
          //   /docs/learn/privacy/coinjoin
          //   /docs/learn/privacy/payjoin
          //   /docs/learn/privacy/utxo-management
          // =============================================
          // Old /docs/privacy/* hub
          {
            from: '/docs/privacy',
            to: '/docs/learn/privacy/protecting-privacy',
          },
          // CoinJoin
          {
            from: '/docs/privacy/coinjoin',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/privacy/coinjoin/how-it-works',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/privacy/coinjoin/services',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/privacy/coinjoin/best-practices',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/coinjoin',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/coinjoin/how-it-works',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/coinjoin/services',
            to: '/docs/learn/privacy/coinjoin',
          },
          {
            from: '/docs/coinjoin/best-practices',
            to: '/docs/learn/privacy/coinjoin',
          },
          // PayJoin
          {
            from: '/docs/privacy/payjoin',
            to: '/docs/learn/privacy/payjoin',
          },
          {
            from: '/docs/payjoin',
            to: '/docs/learn/privacy/payjoin',
          },
          // UTXO Management
          {
            from: '/docs/privacy/utxo-management',
            to: '/docs/learn/privacy/utxo-management',
          },
          {
            from: '/docs/privacy/utxo-management/coin-control',
            to: '/docs/learn/privacy/utxo-management',
          },
          {
            from: '/docs/privacy/utxo-management/consolidation',
            to: '/docs/learn/privacy/utxo-management',
          },
          {
            from: '/docs/utxo-management',
            to: '/docs/learn/privacy/utxo-management',
          },
          {
            from: '/docs/utxo-management/coin-control',
            to: '/docs/learn/privacy/utxo-management',
          },
          {
            from: '/docs/utxo-management/consolidation',
            to: '/docs/learn/privacy/utxo-management',
          },
          // ---------------------------------------------------
          // Topic 4: Multisig (merged into learn/wallets/multisig)
          // ---------------------------------------------------
          {
            from: '/docs/advanced/multisig',
            to: '/docs/learn/wallets/multisig',
          },
          {
            from: '/docs/advanced/multisig/hardware-setup',
            to: '/docs/learn/wallets/multisig/hardware-setup',
          },
          {
            from: '/docs/advanced/multisig/sparrow-setup',
            to: '/docs/learn/wallets/multisig/sparrow-setup',
          },
          {
            from: '/docs/advanced/multisig/backup-recovery',
            to: '/docs/learn/wallets/multisig/backup-recovery',
          },
          {
            from: '/docs/multisig',
            to: '/docs/learn/wallets/multisig',
          },
          {
            from: '/docs/multisig/hardware-setup',
            to: '/docs/learn/wallets/multisig/hardware-setup',
          },
          {
            from: '/docs/multisig/sparrow-setup',
            to: '/docs/learn/wallets/multisig/sparrow-setup',
          },
          {
            from: '/docs/multisig/backup-recovery',
            to: '/docs/learn/wallets/multisig/backup-recovery',
          },
        ],
        /** @param {string} existingPath */
        createRedirects(existingPath) {
          // Catch-all for any /docs/learn/ path - create redirect from /docs/basics/
          if (existingPath.includes('/docs/learn/') && !existingPath.includes('/docs/learn/fundamentals/')) {
            return [existingPath.replace('/docs/learn/', '/docs/basics/')];
          }
          // Catch-all for reference paths (glossary and address-types moved from learn)
          if (existingPath === '/docs/reference/glossary') {
            return ['/docs/learn/glossary', '/docs/basics/glossary'];
          }
          if (existingPath === '/docs/reference/address-types') {
            return ['/docs/learn/address-types', '/docs/basics/address-types'];
          }
          // Catch-all for wallet-setup paths
          if (existingPath.includes('/docs/wallet-setup/hardware-wallet')) {
            return [existingPath.replace('/docs/wallet-setup/hardware-wallet', '/docs/hardware-wallet-setup')];
          }
          if (existingPath.includes('/docs/wallet-setup/backup-verification')) {
            return [existingPath.replace('/docs/wallet-setup/backup-verification', '/docs/backup-verification')];
          }
          // Catch-all for advanced paths
          if (existingPath.includes('/docs/advanced/air-gapped-computer')) {
            return [existingPath.replace('/docs/advanced/air-gapped-computer', '/docs/air-gapped-computer')];
          }
          if (existingPath.includes('/docs/advanced/bitcoin-computer')) {
            return [existingPath.replace('/docs/advanced/bitcoin-computer', '/docs/bitcoin-computer')];
          }
          return undefined;
        },
      },
    ],
  ],
  
  // ===========================================
  // SCRIPTS
  // ===========================================
  // Note: SRI (Subresource Integrity) is not used for Umami script because
  // Umami updates their script periodically, which would break the hash.
  // Security is maintained via CSP headers instead.
  scripts: [
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '5649cb57-bc60-498c-a7ff-2d044fc85912',
      async: true,
    },
  ],
};

export default config;