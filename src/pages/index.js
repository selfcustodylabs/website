import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import XIcon from "@mui/icons-material/X";

// Shared components
import { Card, cardStyles, ClubOrangeIcon, KeybaseIcon, NostrIcon } from "@site/src/components";

import styles from "./styles.module.css";

function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle ? <p className={styles.sectionSubtitle}>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Pill({ icon: Icon, label }) {
  return (
    <div className={styles.pill}>
      <span className={styles.pillIcon}>
        <Icon fontSize="inherit" />
      </span>
      <span className={styles.pillLabel}>{label}</span>
    </div>
  );
}

export default function Home() {
  const logoSrc = useBaseUrl("/img/logo.svg");

  const whyCards = [
    {
      icon: VpnKeyRoundedIcon,
      title: "True Ownership",
      description:
        "Not your keys, not your coins. Take complete control without relying on third parties or exchanges.",
    },
    {
      icon: LockRoundedIcon,
      title: "Maximum Security",
      description:
        "Learn to create secure seeds, passphrases, and use hardware wallets to protect your Bitcoin from threats.",
    },
    {
      icon: BlockRoundedIcon,
      title: "Censorship Resistant",
      description:
        "No one can freeze, seize, or prevent you from accessing your Bitcoin when you hold your own keys.",
    },
    {
      icon: PublicRoundedIcon,
      title: "Financial Sovereignty",
      description:
        "Be your own bank. Send, receive, and store Bitcoin on your terms, anywhere in the world.",
    },
    {
      icon: ShieldRoundedIcon,
      title: "Privacy Protection",
      description:
        "Keep your financial data private. Self-custody means no third party tracking your transactions.",
    },
    {
      icon: SchoolRoundedIcon,
      title: "Educational Empowerment",
      description:
        "Understand how Bitcoin works at a fundamental level through hands-on self-custody practice.",
    },
  ];

  const learningPath = [
    {
      step: "01",
      icon: MenuBookRoundedIcon,
      title: "Learn the Basics",
      description:
        "Understand the fundamentals of Bitcoin, private keys, and why self-custody matters.",
      href: "/docs/learn/fundamentals",
    },
    {
      step: "02",
      icon: CasinoRoundedIcon,
      title: "Create Your Seed",
      description:
        "Generate a secure 24-word seed phrase using our DIY dice method for true randomness.",
      href: "/docs/security/seed-generation",
    },
    {
      step: "03",
      icon: KeyRoundedIcon,
      title: "Set Up a Hardware Wallet",
      description: "Configure a hardware wallet to keep your keys secure and offline.",
      href: "/docs/wallet-setup/hardware-wallet",
    },
    {
      step: "04",
      icon: ShieldRoundedIcon,
      title: "Verify Your Backup",
      description: "Test that your seed backup actually works before depositing significant funds.",
      href: "/docs/wallet-setup/backup-verification",
    },
    {
      step: "05",
      icon: LaptopMacRoundedIcon,
      title: "Run Your Own Node",
      description:
        "Take full sovereignty by running your own Bitcoin node to verify transactions privately.",
      href: "/docs/bitcoin-node",
    },
    {
      step: "06",
      icon: SecurityRoundedIcon,
      title: "Enhance Privacy",
      description: "Learn UTXO management and coin control to protect your financial privacy.",
      href: "/docs/privacy/utxo-management",
    },
    {
      step: "07",
      icon: LockRoundedIcon,
      title: "Advanced Security (Optional)",
      description:
        "For significant holdings, set up multisig to eliminate single points of failure.",
      href: "/docs/advanced/multisig",
    },
  ];

  const resources = [
    {
      icon: MenuBookRoundedIcon,
      title: "Books",
      description: "Curated reading list to deepen your Bitcoin knowledge",
      href: "/books",
    },
    {
      icon: HeadphonesRoundedIcon,
      title: "Podcasts",
      description: "Top Bitcoin podcasts for staying informed",
      href: "/podcasts",
    },
    {
      icon: PsychologyRoundedIcon,
      title: "Theory",
      description: "Understand the fundamentals behind Bitcoin",
      href: "/learn",
    },
  ];

  const community = [
    {
      icon: NostrIcon,
      title: "Nostr",
      description: "Follow us on Nostr",
      href: "https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5",
      external: true,
    },
    {
      icon: XIcon,
      title: "X",
      description: "Follow us on X",
      href: "https://x.com/selfcustodylabs",
      external: true,
    },
    {
      icon: EmailRoundedIcon,
      title: "E-mail",
      description: "Get in touch with us",
      href: "mailto:selfcustodylabs@proton.me",
      external: true,
    },
    {
      icon: ClubOrangeIcon,
      title: "Club Orange App",
      description: "Connect with Bitcoiners",
      href: "https://app.cluborange.org/selfcustodylabs",
      external: true,
    },
    {
      icon: GitHubIcon,
      title: "GitHub",
      description: "Contribute to our guides",
      href: "https://github.com/selfcustodylabs",
      external: true,
    },
    {
      icon: KeybaseIcon,
      title: "Keybase",
      description: "Secure messaging",
      href: "https://keybase.io/selfcustodylabs",
      external: true,
    },
  ];

  return (
    <Layout
      title="Bitcoin Self-Custody Guides & Tutorials"
      description="Learn Bitcoin self-custody: hardware wallet setup, seed phrase security, multisig configurations, privacy best practices, and running your own node. Free step-by-step guides."
    >
      <main className={styles.page}>
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <img className={styles.heroLogo} src={logoSrc} alt="Self Custody Labs" />
              <h1 className={styles.heroTitle}>
                Take Control of <span className={styles.accent}>Your Bitcoin</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Learn self-custody the right way. Comprehensive guides and theory to help you become
                truly sovereign with your Bitcoin.
              </p>

              <div className={styles.heroCtas}>
                <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/learn">
                  Start Learning
                </Link>
                <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/guides">
                  View Guides →
                </Link>
              </div>

              <div className={styles.heroPills}>
                <Pill icon={ShieldRoundedIcon} label="Privacy First" />
                <Pill icon={SchoolRoundedIcon} label="Step-by-Step" />
                <Pill icon={VpnKeyRoundedIcon} label="Be Your Own Bank" />
              </div>
            </div>
          </div>
        </header>

        {/* WHY */}
        <Section
          id="why"
          title="Why Self-Custody Matters"
          subtitle="Self-custody isn't just about security, it's about freedom, privacy, and taking back control of your financial future."
        >
          <div className={styles.grid3}>
            {whyCards.map((c) => (
              <Card key={c.title} icon={c.icon} title={c.title} description={c.description} />
            ))}
          </div>
        </Section>

        {/* PATH */}
        <Section
          id="path"
          title="Your Path to Self-Sovereignty"
          subtitle="Follow our proven learning path to become confident in managing your own Bitcoin."
        >
          <div className={styles.path}>
            {learningPath.map((s, idx) => (
              <React.Fragment key={s.step}>
                <Link className={styles.pathItemLink} to={s.href}>
                  <div className={styles.pathItem}>
                    <div className={styles.pathLeft}>
                      <div className={styles.pathStep}>{s.step}</div>
                    </div>
                    <div className={styles.pathContent}>
                      <div className={styles.pathIcon}>
                        <s.icon fontSize="inherit" />
                      </div>
                      <div className={styles.pathText}>
                        <div className={styles.pathTitleRow}>
                          <h3 className={styles.pathTitle}>{s.title}</h3>
                          <span className={styles.pathArrow}>→</span>
                        </div>
                        <p className={styles.pathDescription}>{s.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                {idx < learningPath.length - 1 ? (
                  <div className={styles.pathConnector}>↓</div>
                ) : null}
              </React.Fragment>
            ))}

            <div className={styles.centerCta}>
              <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/learn">
                Start Your Journey
              </Link>
            </div>
          </div>
        </Section>

        {/* RESOURCES + COMMUNITY */}
        <Section id="resources" title="Educational Resources">
          <div className={styles.grid3}>
            {resources.map((r) => (
              <Card
                key={r.title}
                icon={r.icon}
                title={r.title}
                description={r.description}
                href={r.href}
                footerRight={<span className={cardStyles.arrow}>→</span>}
              />
            ))}
          </div>

          <div className={styles.spacer} />

          <div className={styles.sectionHeaderTight}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <p className={styles.sectionSubtitle}>Connect with us on a variety of platforms</p>
          </div>

          <div className={styles.grid3}>
            {community.map((c) => (
              <Link
                key={c.title}
                className={styles.cardLink}
                to={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className={styles.smallCard}>
                  <div className={styles.smallCardIcon}>
                    <c.icon fontSize="inherit" />
                  </div>
                  <div>
                    <div className={styles.smallCardTitle}>{c.title}</div>
                    <div className={styles.smallCardDescription}>{c.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.spacer} />

          <div className={styles.bigCta}>
            <h2 className={styles.bigCtaTitle}>Ready to Take Control?</h2>
            <p className={styles.bigCtaSubtitle}>
              Start your Bitcoin self-custody journey today with our comprehensive guides.
            </p>
            <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/learn">
              Get Started Now
            </Link>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
