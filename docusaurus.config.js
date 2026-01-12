// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Self Custody Labs",
  tagline: "Guide Writer| The University of Satoshi",
  favicon: "img/favicon.ico",

  headTags: [
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.googletagmanager.com" } },
    { tagName: "link", attributes: { rel: "preconnect", href: "https://www.google-analytics.com" } },
    // Global SEO + social cards
    { tagName: "meta", attributes: { name: "description", content: "Bitcoin self-custody guides and tutorials from Self Custody Labs. Learn cold storage, hardware wallets, air-gapped setups, wallet security, and privacy best practices." } },
    { tagName: "meta", attributes: { name: "keywords", content: "bitcoin, self custody, self-custody, cold storage, hardware wallet, air gapped, air-gapped computer, privacy, bitcoin node, multisig" } },
    { tagName: "meta", attributes: { property: "og:site_name", content: "Self Custody Labs" } },
    { tagName: "meta", attributes: { property: "og:type", content: "website" } },
    { tagName: "meta", attributes: { property: "og:title", content: "Self Custody Labs" } },
    { tagName: "meta", attributes: { property: "og:description", content: "Bitcoin self-custody guides and tutorials from Self Custody Labs." } },
    { tagName: "meta", attributes: { property: "og:image", content: "https://selfcustodylabs.com/img/social-card.png" } },
    { tagName: "meta", attributes: { property: "og:url", content: "https://selfcustodylabs.com" } },
    { tagName: "meta", attributes: { name: "twitter:card", content: "summary_large_image" } },
    { tagName: "meta", attributes: { name: "twitter:title", content: "Self Custody Labs" } },
    { tagName: "meta", attributes: { name: "twitter:description", content: "Bitcoin self-custody guides and tutorials from Self Custody Labs." } },
    { tagName: "meta", attributes: { name: "twitter:image", content: "https://selfcustodylabs.com/img/logo.svg" } },
    // Basic structured data for better rich results
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Self Custody Labs",
        "url": "https://selfcustodylabs.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://selfcustodylabs.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    },
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Self Custody Labs",
        "url": "https://selfcustodylabs.com",
        "logo": "https://selfcustodylabs.com/img/logo.svg",
      }),
    },
  ],

  // Set the production url of your site here
  url: "https://selfcustodylabs.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "selfcustodylabs", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  trailingSlash: true,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-DB4LHSKK4J",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Self Custody Labs',
        logo: {
          alt: 'Self Custody Labs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialBasics',
            position: 'left',
            label: 'Learn',
          },
          {
            label: 'Guides',
            to: '/guides',
            position: 'left',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'books',
                label: 'Books',
              },
              {
                to: 'podcasts',
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
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'What is Self-Custody',
                to: '/docs/basics',
              },
              {
                label: 'Private Keys',
                to: '/docs/basics/keys/intro',
              },
              {
                label: 'Wallets',
                to: '/docs/basics/wallets/software-wallets',
              },
              {
                label: 'Transactions',
                to: '/docs/basics/transactions/understanding',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'DIY Seed',
                to: '/docs/seed',
              },
              {
                label: 'DIY Passphrase',
                to: '/docs/passphrase',
              },
              {
                label: 'Bitcoin Node',
                to: '/docs/bitcoin-node',
              },
              {
                label: 'Air-Gapped Computer',
                to: '/docs/air-gapped-computer',
              },
              {
                label: 'Libreboot',
                to: '/docs/libreboot',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Books',
                to: '/books',
              },
              {
                label: 'Podcasts',
                to: '/podcasts',
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
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        // @type {import("@easyops-cn/docusaurus-search-local").PluginOptions}
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
  
          // For Docs using Chinese, it is recomended to set:
          // language: ["en", "zh"],
  
          // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
          // forceIgnoreNoIndex: true,
        }),
      ],
    ],
    scripts: [
      // Umami object format.
      {
        src: 'https://cloud.umami.is/script.js',
        defer: true,
        'data-website-id': '5649cb57-bc60-498c-a7ff-2d044fc85912'
      },
    ],
};

export default config;