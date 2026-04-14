import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// Shared components
import { CategorySection } from "@site/src/components";
import PageHeader from "@site/src/components/homepage/PageHeader";

// CollectionPage schema for the guides listing page
const guidesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bitcoin Self-Custody Guides",
  description:
    "Step-by-step tutorials for securing your Bitcoin. From beginner seed generation to advanced air-gapped setups.",
  url: "https://selfcustodylabs.com/guides/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DIY Seed Generation",
        url: "https://selfcustodylabs.com/docs/learn/keys/random/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DIY Passphrase",
        url: "https://selfcustodylabs.com/docs/learn/keys/passphrase/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hardware Wallet Setup",
        url: "https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Backup Verification",
        url: "https://selfcustodylabs.com/docs/wallet-setup/backup-verification/",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Bitcoin Node",
        url: "https://selfcustodylabs.com/docs/bitcoin-node/",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Bitcoin Computer",
        url: "https://selfcustodylabs.com/docs/advanced/bitcoin-computer/",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Air-Gapped Computer",
        url: "https://selfcustodylabs.com/docs/advanced/air-gapped-computer/",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Libreboot Installation",
        url: "https://selfcustodylabs.com/docs/libreboot/",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Coreboot Installation",
        url: "https://selfcustodylabs.com/docs/coreboot/",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Nostr Signing Device",
        url: "https://selfcustodylabs.com/docs/nostr-signing-device/",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "CoinJoin Privacy Guide",
        url: "https://selfcustodylabs.com/docs/learn/privacy/coinjoin/",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "UTXO Management Guide",
        url: "https://selfcustodylabs.com/docs/learn/privacy/utxo-management/",
      },
      {
        "@type": "ListItem",
        position: 13,
        name: "Multisig Setup Guide",
        url: "https://selfcustodylabs.com/docs/learn/wallets/multisig/",
      },
    ],
  },
};

export default function GuidesPage() {
  // Security & Keys - Seed and passphrase generation
  const securityGuides = [
    {
      icon: CasinoRoundedIcon,
      title: "DIY Seed Generation",
      description:
        "Create your own cryptographically secure seed using dice. True randomness, fully offline.",
      href: "/docs/learn/keys/random",
      badge: "POPULAR",
      level: "Intermediate",
    },
    {
      icon: KeyRoundedIcon,
      title: "DIY Passphrase",
      description:
        "Add a strong passphrase layer and learn best practices for creating and managing it.",
      href: "/docs/learn/keys/passphrase",
      badge: "POPULAR",
      level: "Beginner",
    },
    {
      icon: PasswordRoundedIcon,
      title: "Hardware Wallet Setup",
      description: "Step-by-step guide to setting up your first hardware wallet securely.",
      href: "/docs/wallet-setup/hardware-wallet",
      badge: "NEW",
      level: "Beginner",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Backup Verification",
      description:
        "Test that your seed backup actually works before trusting it with significant funds.",
      href: "/docs/wallet-setup/backup-verification",
      badge: "NEW",
      level: "Beginner",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Multisig Setup",
      description:
        "Eliminate single points of failure with multi-signature wallets. The ultimate security for significant holdings.",
      href: "/docs/learn/wallets/multisig",
      level: "Advanced",
    },
  ];

  // Hardware & Firmware - Dedicated computers and BIOS
  const hardwareGuides = [
    {
      icon: ComputerRoundedIcon,
      title: "Bitcoin Computer",
      description:
        "Build a dedicated Bitcoin workstation designed for strong security and privacy.",
      href: "/docs/advanced/bitcoin-computer",
      level: "Intermediate",
    },
    {
      icon: FlightRoundedIcon,
      title: "Air-Gapped Computer",
      description:
        "Set up an offline computer for maximum security: seed generation, verification, and signing.",
      href: "/docs/advanced/air-gapped-computer",
      level: "Advanced",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Libreboot",
      description:
        "Install Libreboot to replace your BIOS with fully open-source firmware and remove Intel ME.",
      href: "/docs/libreboot",
      level: "Advanced",
    },
    {
      icon: MemoryRoundedIcon,
      title: "Coreboot",
      description:
        "Learn Coreboot fundamentals and why open firmware matters for security-minded setups.",
      href: "/docs/coreboot",
      level: "Advanced",
    },
  ];

  // Network & Nodes
  const nodeGuides = [
    {
      icon: StorageRoundedIcon,
      title: "Bitcoin Node",
      description:
        "Run your own Bitcoin node to independently verify transactions and enhance your privacy.",
      href: "/docs/bitcoin-node",
      badge: "POPULAR",
      level: "Intermediate",
    },
  ];

  // Privacy
  const privacyGuides = [
    {
      icon: SecurityRoundedIcon,
      title: "CoinJoin",
      description:
        "Break the link between your transaction history and your coins using CoinJoin mixing.",
      href: "/docs/learn/privacy/coinjoin",
      level: "Intermediate",
    },
    {
      icon: SecurityRoundedIcon,
      title: "PayJoin",
      description:
        "Stealth privacy that breaks blockchain analysis assumptions. Both sender and receiver contribute inputs.",
      href: "/docs/learn/privacy/payjoin",
      badge: "NEW",
      level: "Intermediate",
    },
    {
      icon: KeyRoundedIcon,
      title: "UTXO Management",
      description:
        "Master coin control, consolidation, and labeling to minimize fees and protect privacy.",
      href: "/docs/learn/privacy/utxo-management",
      level: "Intermediate",
    },
  ];

  // Bonus Projects
  const bonusGuides = [
    {
      icon: HubRoundedIcon,
      title: "Nostr Signing Device",
      description:
        "Use a dedicated signing device to keep your Nostr private key off your computer.",
      href: "/docs/nostr-signing-device",
      level: "Intermediate",
    },
  ];

  return (
    <Layout
      title="Bitcoin Self-Custody Guides: Setup, Security & Privacy"
      description="Step-by-step Bitcoin guides: hardware wallet setup, seed generation, multisig configuration, node setup, privacy tools, and security best practices."
    >
      <Head>
        <script type="application/ld+json">{JSON.stringify(guidesCollectionSchema)}</script>
      </Head>
      <main className="homepage relative bg-neutral-950 text-white">
        <PageHeader
          eyebrow="GUIDES"
          title={
            <>
              Self-Custody{" "}
              <span
                className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
              >
                Guides
              </span>
            </>
          }
          subtitle="Step-by-step tutorials for securing your Bitcoin. From beginner seed generation to advanced air-gapped setups."
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <CategorySection
            title="🔐 Security & Keys"
            description="Generate and protect your Bitcoin keys with verifiable randomness"
            items={securityGuides}
          />

          <CategorySection
            title="🕵️ Privacy"
            description="Techniques to enhance your financial privacy on Bitcoin"
            items={privacyGuides}
          />

          <CategorySection
            title="💻 Hardware & Firmware"
            description="Build dedicated devices with open-source firmware for maximum security"
            items={hardwareGuides}
          />

          <CategorySection
            title="🌐 Nodes & Network"
            description="Run your own infrastructure to verify transactions privately"
            items={nodeGuides}
          />

          <CategorySection
            title="🛠️ Bonus Projects"
            description="Additional projects using the same security principles"
            items={bonusGuides}
          />

          <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-glow transition-all duration-300 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-glow-strong"
            >
              New to Bitcoin? Start with the basics
              <ArrowForwardRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/5 px-7 py-3.5 text-sm font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/70 hover:bg-amber-500/15 hover:-translate-y-0.5"
            >
              <ArrowBackRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
