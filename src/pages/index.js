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
      icon: GitHubIcon,
      title: "GitHub",
      description: "Contribute to our guides",
      href: "https://github.com/btcselfcustody",
      external: true,
    },
    {
      icon: ChatBubbleOutlineRoundedIcon,
      title: "Orange Pill App",
      description: "Connect with Bitcoiners",
      href: "https://www.orangepillapp.com/",
      external: true,
    },
    {
      icon: VpnKeyRounded,
      title: "Keybase",
      description: "Secure messaging",
      href: "https://keybase.io/",
      external: true,
    },
  ];

  return (
    <Layout title="Home" description="BTC Self Custody - Learn self-custody the right way.">
      <main className={styles.page}>
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <img className={styles.heroLogo} src={logoSrc} alt="BTC Self Custody" />
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
                <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/docs/seed">
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
          subtitle="Self-custody isn't just about security—it's about freedom, privacy, and taking back control of your financial future."
        >
          <div className={styles.grid3}>
            {whyCards.map((c) => (
              <Card key={c.title} icon={c.icon} title={c.title} description={c.description} />
            ))}
          </div>
        </Section>

        {/* GUIDES */}
        <Section
          id="guides"
          title="Step-by-Step Guides"
          subtitle="Practical, hands-on tutorials to help you master Bitcoin self-custody. From beginner to advanced."
        >
          <div className={styles.grid3}>
            {guideCards.map((g) => (
              <Card
                key={g.title}
                icon={g.icon}
                title={g.title}
                description={g.description}
                href={g.href}
                badge={g.badge}
                footerLeft={<DifficultyTag level={g.level} />}
                footerRight={<span className={styles.arrow}>→</span>}
              />
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