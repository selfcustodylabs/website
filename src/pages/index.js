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
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

import GitHubIcon from "@mui/icons-material/GitHub";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import VpnKeyRounded from "@mui/icons-material/VpnKeyRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import XIcon from "@mui/icons-material/X";

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

function Card({ icon: Icon, title, description, href, badge, footerLeft, footerRight }) {
  const content = (
    <div className={styles.cardInner}>
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <Icon fontSize="inherit" />
        </div>
        {badge ? <div className={styles.cardBadge}>{badge}</div> : null}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {(footerLeft || footerRight) && (
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterLeft}>{footerLeft}</div>
          <div className={styles.cardFooterRight}>{footerRight}</div>
        </div>
      )}
    </div>
  );

  if (!href) return <div className={styles.card}>{content}</div>;

  return (
    <Link className={styles.cardLink} to={href}>
      <div className={styles.card}>{content}</div>
    </Link>
  );
}

function ClubOrangeIcon({ fontSize, ...props }) {
  return (
    <svg
      viewBox="0 0 1500 1500"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      {...props}
    >
      <path d="M776.906 583.614C767.602 606.832 734.735 606.832 725.431 583.614L571.111 198.508C565.78 185.204 571.6 170.264 585.125 165.526C614.731 155.154 671.601 140 751.17 140C830.74 140 887.608 155.154 917.212 165.526C930.737 170.264 936.557 185.204 931.226 198.507L776.906 583.614Z" />
      <path d="M886.19 651.578C863.193 661.416 839.953 638.176 849.792 615.179L1012.98 233.747C1018.62 220.571 1033.3 214.122 1046.21 220.335C1074.48 233.935 1125.41 263.433 1181.67 319.697C1237.94 375.961 1267.44 426.888 1281.03 455.156C1287.25 468.07 1280.8 482.75 1267.62 488.387L886.19 651.578Z" />
      <path d="M915.402 776.906C892.184 767.602 892.184 734.735 915.402 725.431L1300.51 571.111C1313.81 565.78 1328.75 571.6 1333.49 585.126C1343.86 614.731 1359.02 671.601 1359.02 751.17C1359.02 830.74 1343.86 887.608 1333.49 917.212C1328.75 930.737 1313.81 936.557 1300.51 931.226L915.402 776.906Z" />
      <path d="M847.42 886.19C837.581 863.194 860.821 839.953 883.818 849.792L1265.25 1012.98C1278.43 1018.62 1284.88 1033.3 1278.66 1046.21C1265.06 1074.48 1235.56 1125.41 1179.3 1181.67C1123.04 1237.94 1072.11 1267.44 1043.84 1281.03C1030.93 1287.25 1016.25 1280.8 1010.61 1267.62L847.42 886.19Z" />
      <path d="M612.825 847.438C635.822 837.599 659.062 860.84 649.224 883.836L486.033 1265.27C480.396 1278.44 465.716 1284.89 452.801 1278.68C424.533 1265.08 373.605 1235.58 317.341 1179.32C261.077 1123.05 231.58 1072.13 217.981 1043.86C211.768 1030.95 218.217 1016.27 231.393 1010.63L612.825 847.438Z" />
      <path d="M583.614 722.11C606.832 731.414 606.832 764.281 583.614 773.585L198.508 927.905C185.204 933.235 170.264 927.416 165.526 913.89C155.154 884.285 140 827.415 140 747.845C140 668.276 155.154 611.408 165.526 581.804C170.264 568.278 185.204 562.459 198.507 567.789L583.614 722.11Z" />
      <path d="M651.596 612.825C661.435 635.822 638.194 659.062 615.198 649.224L233.766 486.033C220.589 480.396 214.14 465.716 220.354 452.801C233.954 424.533 263.451 373.605 319.715 317.341C375.98 261.077 426.907 231.58 455.174 217.981C468.089 211.768 482.768 218.217 488.405 231.393L651.596 612.825Z" />
    </svg>
  );
}

function KeybaseIcon(props) {
  return (
    <svg
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="currentColor">
        <path d="M111.5,227.7c0,5.6-4.6,10.1-10.2,10.1c-5.6,0-10.1-4.6-10.1-10.2c0-5.6,4.5-10.1,10.1-10.1 C106.9,217.6,111.4,222.2,111.5,227.7 M174.4,227.7c0,5.6-4.6,10.1-10.2,10.1c-5.6,0-10.1-4.6-10.1-10.2c0-5.6,4.5-10.1,10.1-10.1 C169.8,217.6,174.4,222.2,174.4,227.7" />
        <path d="M222.8,130.3l-1.7-2.2c-0.5-0.6-1-1.2-1.5-1.9c-0.5-0.6-1-1.2-1.5-1.8c-1.1-1.3-2.2-2.5-3.4-3.8l-0.8-0.9 l-1-1.1l-1.4-1.4c-0.2-0.2-0.3-0.4-0.5-0.6c-11.9-11.8-26.3-20.9-42.1-26.6l-2.4-0.8l0.4-0.9c4.4-11.2,3.9-23.8-1.3-34.6 c-5.1-10.9-14.5-19.2-25.9-23c-7-2.3-13.1-3.4-18.2-3.2c-0.4-1.1-1.1-6.1,5.3-19.7l-12.8-7.6l-3.1,4.2c-3.5,4.8-6.9,9.5-10.1,14.1 c-3.5-3.7-8.2-5.9-13.3-6.2l-14.9-0.9h-0.1c-0.4,0-0.7,0-1.1,0c-10.5,0-19.3,8.2-19.9,18.7l-0.9,14.9v0c-0.6,11,7.7,20.4,18.7,21.1 l10.7,0.6c-0.7,8.9,0.8,17.2,4.3,24.5c-14.6,6.2-27.8,15.1-39,26.4C10,153.5,10,192.4,10,223.7v18.9l13.9-14.8 c2.8,9.9,6.9,19.2,12.2,27.8h18.1c-9-12.1-15.2-26.1-17.9-41l20.4-21.6L46.1,226l18.5-13.5c32.7-23.8,71.8-29.3,116.1-16.3 c19.2,5.7,37.9,0.4,47.6-13.4l1.1-1.8c1,5.3,1.5,10.6,1.5,15.9c0,16.6-2.7,39.2-14.7,58.7h17.1c8.3-16.6,12.6-36.5,12.6-58.7 C246,173.6,237.6,150,222.8,130.3L222.8,130.3z M94.9,66.2c1.3-10.7,6.2-20.7,13.1-31.6c2.6,5.1,7.9,8.3,13.7,8 c2.3-0.1,6.4,0.3,13.1,2.5c7.6,2.5,13.7,7.9,17.1,15.2c3.4,7.2,3.7,15.3,0.8,22.9c-1.8,4.7-4.8,8.7-8.6,11.8l-4.3-5.3l0,0 c-5.5-6.6-15.3-7.6-21.9-2.2c-3.6,2.9-5.5,7-5.7,11.3C99.5,92.8,93.1,81.1,94.9,66.2L94.9,66.2z M140.7,120.6l-5.5,4.5 c-1,0.9-2.6,0.7-3.4-0.3c0,0,0,0,0,0l-1.2-1.4c-0.9-1.1-0.7-2.7,0.4-3.6l5.4-4.5l-11.2-13.8c-1.2-1.4-1-3.4,0.4-4.6c0,0,0,0,0,0 c1.4-1.2,3.4-1,4.5,0.3c0,0,0,0.1,0.1,0.1l31.5,38.8c1.2,1.4,1,3.5-0.4,4.6c-0.4,0.3-0.9,0.6-1.4,0.7c-1.2,0.3-2.5-0.2-3.3-1.1 l-3.1-3.9l-11.1,9.1c-0.5,0.4-1,0.6-1.6,0.6c-0.8,0-1.5-0.4-2-1l-5.1-6.2c-0.9-1.1-0.7-2.7,0.4-3.6l11.2-9.1L140.7,120.6 L140.7,120.6L140.7,120.6z M82.8,52.1l-12.7-0.8c-2.7-0.2-4.8-2.5-4.6-5.2l1-14.9c0.1-2.6,2.3-4.6,4.9-4.6h0.3l14.9,1 c2.7,0.1,4.8,2.5,4.6,5.1c0,0,0,0,0,0L91,33.8C87.6,39.6,84.9,45.7,82.8,52.1L82.8,52.1z M216.1,174.3c-6,8.6-18,11.5-31.1,7.6 c-41.4-12.1-78.7-9.6-111.4,7.5L91,134.8l-56.3,59.7c1.1-40,26.1-74.1,61.3-88.5c5,4,11,7,17.8,9c1.7,0.5,3.4,0.8,5.1,1.1 c-2,5-1.2,10.8,2.2,15l0.8,1c-1.8,4.8-1.1,10.4,2.4,14.6l5.1,6.2c2.8,3.5,7,5.5,11.5,5.5c3.4,0,6.8-1.2,9.4-3.3l3-2.5 c1.9,0.8,3.9,1.2,6,1.2c3.6,0,7.1-1.2,9.9-3.5c6.6-5.4,7.7-15.3,2.2-21.9l-17.8-21.9c1.5-1.2,3-2.6,4.3-4.1 c1.4,0.4,2.9,0.8,4.3,1.3c2.8,1,5.7,2.1,8.5,3.4c10.9,4.9,20.9,11.8,29.5,20.2c0.3,0.3,0.6,0.6,0.9,0.9l1.8,1.9 c1.3,1.3,2.5,2.7,3.7,4.1l1.3,1.6c0.5,0.6,0.9,1.1,1.4,1.7l1.2,1.6c0.4,0.5,0.8,1.1,1.2,1.6C220.7,152.8,222.3,165.4,216.1,174.3 L216.1,174.3L216.1,174.3z" />
        <path d="M82.4,44.1l-8.9-0.5l0.6-8.9l8.9,0.5L82.4,44.1z" />
      </g>
    </svg>
  );
}

function NostrIcon(props) {
  return (
    <svg
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="currentColor">
        <path d="M210.8 199.4c0 3.1-2.5 5.7-5.7 5.7h-68c-3.1 0-5.7-2.5-5.7-5.7v-15.5c.3-19 2.3-37.2 6.5-45.5 2.5-5 6.7-7.7 11.5-9.1 9.1-2.7 24.9-.9 31.7-1.2 0 0 20.4.8 20.4-10.7s-9.1-8.6-9.1-8.6c-10 .3-17.7-.4-22.6-2.4-8.3-3.3-8.6-9.2-8.6-11.2-.4-23.1-34.5-25.9-64.5-20.1-32.8 6.2.4 53.3.4 116.1v8.4c0 3.1-2.6 5.6-5.7 5.6H57.7c-3.1 0-5.7-2.5-5.7-5.7v-144c0-3.1 2.5-5.7 5.7-5.7h31.7c3.1 0 5.7 2.5 5.7 5.7 0 4.7 5.2 7.2 9 4.5 11.4-8.2 26-12.5 42.4-12.5 36.6 0 64.4 21.4 64.4 68.7v83.2ZM150 99.3c0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1 5.4 12.1 12.1 12.1S150 106 150 99.3Z" />
      </g>
    </svg>
  );
}

function DifficultyTag({ level }) {
  const cls =
    level === "Beginner"
      ? styles.tagBeginner
      : level === "Intermediate"
        ? styles.tagIntermediate
        : styles.tagAdvanced;
  return <span className={`${styles.tag} ${cls}`}>{level}</span>;
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

  const guideCards = [
    {
      icon: CasinoRoundedIcon,
      title: "DIY Seed Generation",
      description:
        "Learn to create your own cryptographically secure seed using dice. Generate true randomness and take full control.",
      href: "/docs/seed",
      badge: "POPULAR",
      level: "Beginner",
    },
    {
      icon: KeyRoundedIcon,
      title: "DIY Passphrase",
      description:
        "Add an extra layer of security with a custom passphrase. Learn best practices for creating and managing passphrases.",
      href: "/docs/passphrase",
      badge: "POPULAR",
      level: "Intermediate",
    },
    {
      icon: LaptopMacRoundedIcon,
      title: "Bitcoin Node",
      description:
        "Run your own Bitcoin node to verify transactions independently. Achieve maximum sovereignty and privacy.",
      href: "/docs/bitcoin-node",
      badge: "POPULAR",
      level: "Intermediate",
    },
    {
      icon: FlightRoundedIcon,
      title: "Air-Gapped Computer",
      description:
        "Set up an offline computer for maximum security. Perfect for cold storage and signing transactions safely.",
      href: "/docs/air-gapped-computer",
      level: "Advanced",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Libreboot Setup",
      description:
        "Install Libreboot for a fully open-source BIOS. Take control of your hardware from the firmware level.",
      href: "/docs/libreboot",
      level: "Advanced",
    },
    {
      icon: ComputerRoundedIcon,
      title: "Bitcoin Computer",
      description:
        "Build a dedicated Bitcoin computer optimized for security and privacy. Your all-in-one Bitcoin workstation.",
      href: "/docs/bitcoin-computer",
      level: "Intermediate",
    },
  ];

  const learningPath = [
    {
      step: "01",
      icon: MenuBookRoundedIcon,
      title: "Learn the Basics",
      description:
        "Understand the fundamentals of Bitcoin, private keys, and why self-custody matters.",
      href: "/docs/basics/what-is-self-custody",
    },
    {
      step: "02",
      icon: CasinoRoundedIcon,
      title: "Create Your Seed",
      description:
        "Generate a secure 24-word seed phrase using our DIY dice method for true randomness.",
      href: "/docs/seed",
    },
    {
      step: "03",
      icon: KeyRoundedIcon,
      title: "Set Up a Wallet",
      description:
        "Choose and configure a secure Bitcoin wallet. Learn about hardware and software options.",
      href: "/docs/basics/wallets",
    },
    {
      step: "04",
      icon: LaptopMacRoundedIcon,
      title: "Run a Node",
      description:
        "Take full sovereignty by running your own Bitcoin node to verify transactions.",
      href: "/docs/bitcoin-node",
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
      href: "/docs/basics/what-is-self-custody",
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
    <Layout title="Bitcoin Self-Custody Guides" description="Step-by-step Bitcoin self-custody tutorials: cold storage, air-gapped setups, wallet security, and privacy.">
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
                Learn self-custody the right way. Comprehensive guides and theory to help you become truly sovereign with your Bitcoin.
              </p>

              <div className={styles.heroCtas}>
                <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/docs/basics/what-is-self-custody">
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
                {idx < learningPath.length - 1 ? <div className={styles.pathConnector}>↓</div> : null}
              </React.Fragment>
            ))}

            <div className={styles.centerCta}>
              <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/docs/basics/what-is-self-custody">
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
                footerRight={<span className={styles.arrow}>→</span>}
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
            <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/docs/basics/what-is-self-custody">
              Get Started Now
            </Link>
          </div>
        </Section>
      </main>
    </Layout>
  );
}