// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// @type {import('@docusaurus/types').Config}
const config = {
  title: "Self Custody Labs",
  tagline: "Bitcoin self-custody guides and tutorials. Learn cold storage, hardware wallets, and privacy best practices.",
  favicon: "img/favicon.ico",

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
          ignorePatterns: ['/tags/**'],
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
          customCss: "./src/css/custom.css",
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
      //   content: '🆕 New guide: <a href="/docs/multisig/">Multisig Setup</a> - Eliminate single points of failure',
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
                label: 'What is Self-Custody',
                to: '/docs/basics/',
              },
              {
                label: 'Private Keys',
                to: '/docs/basics/keys/intro/',
              },
              {
                label: 'Wallets',
                to: '/docs/basics/wallets/software-wallets/',
              },
              {
                label: 'Transactions',
                to: '/docs/basics/transactions/understanding/',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'DIY Seed',
                to: '/docs/seed/',
              },
              {
                label: 'DIY Passphrase',
                to: '/docs/passphrase/',
              },
              {
                label: 'Bitcoin Node',
                to: '/docs/bitcoin-node/',
              },
              {
                label: 'Air-Gapped Computer',
                to: '/docs/air-gapped-computer/',
              },
              {
                label: 'Libreboot',
                to: '/docs/libreboot/',
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
  // SCRIPTS
  // ===========================================
  scripts: [
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '5649cb57-bc60-498c-a7ff-2d044fc85912'
    },
  ],
};

export default config;
