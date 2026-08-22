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
  // Root path, no cache-busting query string: Google requires the favicon URL to
  // be stable, and a ?v= bump (commit 4bd0b7a9, Apr 2026) is a URL change. Icons
  // regenerate in place via scripts/generate-favicons.py so this never moves again.
  favicon: "favicon.ico",

  // ===========================================
  // HEAD TAGS - Global SEO & Structured Data
  // ===========================================
  headTags: [
    // ===========================================
    // Favicon set (see scripts/generate-favicons.py)
    // ===========================================
    // Docusaurus emits <link rel="icon" href="/favicon.ico"> from `favicon` above.
    // These are the larger alternates: Google recommends an icon "larger than
    // 48x48px so that it looks good on various surfaces", and the .ico alone used
    // to top out at exactly 48. Serve them from the root and never version the URLs.
    { tagName: "link", attributes: { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" } },
    { tagName: "link", attributes: { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" } },
    { tagName: "link", attributes: { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" } },

    // Preconnect for performance
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.googletagmanager.com" } },
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.google-analytics.com" } },

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
    // NOTE: Do NOT add "index, follow" or a "googlebot" directive here.
    // This headTag is emitted on EVERY page, including the tag listing pages
    // that swizzle in <meta name="robots" content="noindex, follow">. A global
    // "index", and especially a Googlebot-specific "index", overrode that
    // per-page noindex, leaving tag pages stuck in GSC "Crawled - currently not
    // indexed" instead of cleanly dropping out via "Excluded by noindex".
    // index/follow are the defaults anyway; keep only the preview directives.
    { tagName: "meta", attributes: { name: "robots", content: "max-image-preview:large, max-snippet:-1, max-video-preview:-1" } },
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
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; font-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
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
    // Structured Data - WebSite Schema
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
        "inLanguage": "en-US"
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
          // Internal planning docs live here but are not published
          exclude: ["superpowers/**"],
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
      // NOTE: hrefs below are NOT covered by onBrokenLinks. The link checker only
      // walks Markdown/MDX. Verify these routes by hand after any edit.
      // Bump `id` to re-show the bar to visitors who already dismissed it.
      announcementBar: {
        id: 'coldcard_rng_2026',
        content:
          '⚠️ <strong>Coldcard RNG flaw:</strong> seeds generated 2021–2026 may be ' +
          'brute-forceable, and new firmware does <strong>not</strong> fix an existing seed. ' +
          '<a href="/docs/learn/wallets/coldcard-entropy-incident/">Am I affected?</a> · ' +
          'Generate your own: <a href="/docs/learn/keys/random/">dice seed</a> + ' +
          '<a href="/docs/learn/keys/passphrase/">passphrase</a>.',
        backgroundColor: '#f59e0b',
        textColor: '#000',
        isCloseable: true,
      },
      
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
            href: 'https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5',
            position: 'right',
            className: "header--nostr-link",
            "aria-label": "Nostr profile",
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
              {
                label: 'Hardware Wallet Comparison',
                to: '/docs/reference/hardware-wallet-comparison/',
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
              {
                label: 'SeedSigner',
                to: '/docs/seedsigner/',
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
          // CATEGORY ROUTES → DOC-BACKED INDEX PAGES (Phase 4b)
          // Generated-index category pages were replaced with
          // real index.md files so the sitemap can carry lastmod.
          // =============================================
          {
            from: '/docs/category/internal-flashing',
            to: '/docs/coreboot/internal',
          },
          {
            from: '/docs/category/nodes',
            to: '/docs/learn/nodes',
          },
          {
            from: '/docs/category/privacy',
            to: '/docs/learn/privacy',
          },
          {
            from: '/docs/category/transactions',
            to: '/docs/learn/transactions',
          },
          {
            from: '/docs/category/wallets',
            to: '/docs/learn/wallets',
          },
          {
            from: '/docs/category/raspberry-pico',
            to: '/docs/libreboot/raspberry-pico',
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
            to: '/docs/learn/privacy',
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
          // ---------------------------------------------------
          // Topic 5: Air-gapped computer (merged into learn/wallets/air-gapped-wallets)
          // ---------------------------------------------------
          {
            from: '/docs/advanced/air-gapped-computer',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          {
            from: '/docs/advanced/air-gapped-computer/types',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          {
            from: '/docs/advanced/air-gapped-computer/setup',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          {
            from: '/docs/air-gapped-computer',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          {
            from: '/docs/air-gapped-computer/types',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          {
            from: '/docs/air-gapped-computer/setup',
            to: '/docs/learn/wallets/air-gapped-wallets',
          },
          // =============================================
          // RENAMED PAGES → current slugs (GSC "Not found (404)")
          // Old URLs Google still remembers that were renamed,
          // not merged. Redirect to preserve their link equity.
          // =============================================
          {
            from: '/docs/libreboot/build-libreboot',
            to: '/docs/libreboot/build',
          },
          {
            from: '/docs/libreboot/update',
            to: '/docs/libreboot/update-bios',
          },
          {
            from: '/docs/bitcoin-node/node-setup',
            to: '/docs/bitcoin-node',
          },
          {
            from: '/docs/category/keys-and-seeds',
            to: '/docs/learn/keys',
          },
        ],
        /** @param {string} existingPath */
        createRedirects(existingPath) {
          // trailingSlash: true means existingPath arrives WITH a trailing slash
          // (e.g. '/docs/reference/glossary/'). Normalize it away so the exact
          // '===' matches below fire. Without this, those redirects are silently
          // never generated and the old URLs 404.
          const path = existingPath.replace(/\/$/, '');
          // Catch-all for any /docs/learn/ path - create redirect from /docs/basics/
          if (path.includes('/docs/learn/') && !path.includes('/docs/learn/fundamentals/')) {
            return [path.replace('/docs/learn/', '/docs/basics/')];
          }
          // Catch-all for reference paths (glossary and address-types moved from learn)
          if (path === '/docs/reference/glossary') {
            return ['/docs/learn/glossary', '/docs/basics/glossary'];
          }
          if (path === '/docs/reference/address-types') {
            return ['/docs/learn/address-types', '/docs/basics/address-types'];
          }
          // Catch-all for wallet-setup paths
          if (path.includes('/docs/wallet-setup/hardware-wallet')) {
            return [path.replace('/docs/wallet-setup/hardware-wallet', '/docs/hardware-wallet-setup')];
          }
          if (path.includes('/docs/wallet-setup/backup-verification')) {
            return [path.replace('/docs/wallet-setup/backup-verification', '/docs/backup-verification')];
          }
          // Catch-all for advanced paths
          if (path.includes('/docs/advanced/bitcoin-computer')) {
            return [path.replace('/docs/advanced/bitcoin-computer', '/docs/bitcoin-computer')];
          }
          return undefined;
        },
      },
    ],
  ],
  
};

export default config;