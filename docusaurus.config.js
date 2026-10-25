// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import { redirects, createRedirects } from "./src/data/redirects.js";
import { contentSecurityPolicy } from "./src/data/securityHeaders.js";

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
    // Defined once in src/data/securityHeaders.js and shared with the real
    // response headers that plugins/cloudflare writes to build/_headers. The
    // meta copy leaves out frame-ancestors, which browsers ignore in a meta tag.
    {
      tagName: "meta",
      attributes: {
        "http-equiv": "Content-Security-Policy",
        content: contentSecurityPolicy({ forMeta: true }),
      },
    },

    // ===========================================
    // Structured Data - Organization Schema
    // ===========================================
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        // One entity, two types: a separate EducationalOrganization block with
        // its own @id made the graph describe two publishers.
        "@type": ["Organization", "EducationalOrganization"],
        "@id": "https://selfcustodylabs.com/#organization",
        "name": "Self Custody Labs",
        "url": "https://selfcustodylabs.com",
        // description and knowsAbout are what an AI assistant reads to decide
        // what this publisher is an authority on before citing it.
        "description":
          "Independent, vendor-neutral guides to Bitcoin self-custody: cold storage, hardware wallets, seed phrases, multisig, node operation, and privacy. No affiliate links and no sponsored placement.",
        "knowsAbout": [
          "Bitcoin self-custody",
          "Hardware wallets",
          "Seed phrases and BIP39",
          "Multisignature wallets",
          "Air-gapped transaction signing",
          "Bitcoin privacy and CoinJoin",
          "Running a Bitcoin node",
          "Coreboot and Libreboot",
          "Bitcoin inheritance planning",
        ],
        "areaServed": "Worldwide",
        "logo": {
          "@type": "ImageObject",
          "url": "https://selfcustodylabs.com/img/logo.svg",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://x.com/selfcustodylabs",
          "https://github.com/selfcustodylabs",
          "https://keybase.io/selfcustodylabs",
          "https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "selfcustodylabs@proton.me",
          "contactType": "editorial"
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
              // NOTE: onBrokenLinks does not walk themeConfig, so this internal
              // route is not link-checked by the build. Verify it by hand.
              {
                to: '/about/',
                label: 'About Self Custody Labs',
              },
              {
                type: 'html',
                value: '<hr style="margin: 8px 0; border-color: rgba(245, 158, 11, 0.2);">',
              },
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
                label: 'About',
                to: '/about/',
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
        copyright: `© ${new Date().getFullYear()} Self Custody Labs`,
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
    // Machine-readable mirrors for AI agents: /llms.txt, /llms-full.txt and a
    // per-doc <route>.md beside each index.html. See plugins/llms-txt/index.js.
    './plugins/llms-txt',
    // Cloudflare Pages: _redirects (real 301s from the same redirect list as
    // below) and _headers (CSP, HSTS, caching). See plugins/cloudflare/index.js.
    './plugins/cloudflare',

    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
        createRedirects,
      },
    ],
  ],
  
};

export default config;