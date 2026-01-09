import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";

import styles from "./styles.module.css";

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

export default function GuidesPage() {
  const logoSrc = useBaseUrl("/img/logo.svg");

  // Keep this list in sync with your nav dropdown.
  const guides = [
    {
      icon: CasinoRoundedIcon,
      title: "DIY Seed Generation",
      description: "Create your own cryptographically secure seed using dice. True randomness, fully offline.",
      href: "/docs/seed",
      badge: "POPULAR",
      level: "Beginner",
    },
    {
      icon: KeyRoundedIcon,
      title: "DIY Passphrase",
      description: "Add a strong passphrase layer and learn best practices for creating and managing it.",
      href: "/docs/passphrase",
      badge: "POPULAR",
      level: "Intermediate",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Libreboot",
      description: "Install Libreboot for a fully open-source BIOS and tighter hardware trust.",
      href: "/docs/libreboot",
      level: "Advanced",
    },
    {
      icon: MemoryRoundedIcon,
      title: "Coreboot",
      description: "Learn Coreboot fundamentals and why open firmware matters for security-minded setups.",
      href: "/docs/coreboot",
      level: "Intermediate",
    },
  ];

  return (
    <Layout title="Guides" description="Browse all BTC Self Custody guides.">
      <main className={styles.page}>
        <header className={`${styles.hero} guidesHero`}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className="guides-header">
                <h1 className={styles.heroTitle}>Self Custody Guides</h1>
                <p className={styles.heroSubtitle}>Browse step-by-step tutorials. Pick one to get started.</p>
              </div>

              <div className={styles.grid3}>
                {guides.map((g) => (
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

              <div className={styles.heroCtas} style={{ marginTop: 24 }}>
                <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}