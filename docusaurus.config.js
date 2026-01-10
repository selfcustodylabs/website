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

  // Set the production url of your site here
  url: "https://selfcustodylabs.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "selfcustodylabs", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  trailingSlash: false,
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
      image: 'img/logo.svg',
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
            label: 'Guides',
            to: '/guides',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialBasics',
            position: 'left',
            label: 'Basics',
          },
          {
            label: 'Bitcoin Devices',
            to: '/bitcoin-devices',
            position: 'left',
          },
          {
            label: 'Education',
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
            ],
          },
          {
            label: 'Resources',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                href: 'https://timechainstats.com/',
                label: 'TimechainStats',
              },
              {
                href: 'https://mempool.space.com/',
                label: 'Mempool',
              },
              {
                href: 'https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt',
                label: 'BIP39'
              },
            ],
          },
          {
            label: 'Find Us',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5',
                label: 'Nostr',
              },
              {
                href: 'https://x.com/btcselfcustody',
                label: 'X',
              },
              {
                href: 'mailto:btcselfcustody@proton.me',
                label: 'E-mail'
              },
              {
                href: 'https://app.cluborange.org/btcselfcustody',
                label: 'Club Orange App',
              },
              {
                href: 'https://github.com/btcselfcustody',
                label: 'GitHub',
              },
              {
                href: 'https://keybase.io/btcselfcustody',
                label: 'Keybase'
              },
            ],
          },
          {
            href: 'https://github.com/btcselfcustody',
            position: 'right',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://app.cluborange.org/btcselfcustody',
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
            title: 'Guides',
            items: [
              {
                label: 'DIY Seed',
                to: '/docs/seed',
              },
              {
                label: 'Libreboot',
                to: '/docs/libreboot',
              },
              {
                label: 'Bitcoin Node',
                to: '/docs/bitcoin-node',
              },
            ],
          },
          {
            title: 'Devices',
            items: [
              {
                label: 'Bitcoin computer',
                href: '/docs/bitcoin-computer',
              },
              {
                label: 'Air-gapped computer',
                href: '/docs/air-gapped-computer',
              },
              {
                label: 'Nostr Signing Device',
                href: '/docs/nostr-signing-device',
              }
            ],
          },
          {
            title: 'Find Us',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/btcselfcustody',
              },
              {
                label: 'Keybase',
                href: 'https://keybase.io/btcselfcustody',
              },
              {
                label: 'Club Orange App',
                href: 'https://app.cluborange.org/btcselfcustody',
              }
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
