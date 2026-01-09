import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
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

export default function BitcoinDevicesPage() {
  // (kept for parity with guides.js; can be useful later if you add page branding)
  const logoSrc = useBaseUrl("/img/logo.svg");

  // Keep this list in sync with your navbar item "Bitcoin Devices".
  const devices = [
    {
      icon: LaptopMacRoundedIcon,
      title: "Bitcoin Node",
      description: "Run your own Bitcoin node to verify independently and improve privacy.",
      href: "/docs/bitcoin-node",
      badge: "POPULAR",
      level: "Intermediate",
    },
    {
      icon: ComputerRoundedIcon,
      title: "Bitcoin Computer",
      description: "Build a dedicated Bitcoin workstation optimized for security and privacy.",
      href: "/docs/bitcoin-computer",
      level: "Intermediate",
    },
    {
      icon: FlightRoundedIcon,
      title: "Air-Gapped Computer",
      description: "Set up an offline computer for maximum security: seed generation, verification, and signing.",
      href: "/docs/air-gapped-computer",
      level: "Advanced",
    },
    {
      icon: PasswordRoundedIcon,
      title: "Nostr Signing Device",
      description: "Use a dedicated signing device to keep your Nostr private key off your computer.",
      href: "/docs/nostr-signing-device",
      level: "Beginner",
    },
  ];

  return (
    <Layout title="Bitcoin Devices" description="Browse all Bitcoin device guides.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroTitle}>Bitcoin Devices</h1>
              <p className={styles.heroSubtitle}>
                Choose a device category to start learning.
              </p>

              <div className={styles.grid3}>
                {devices.map((d) => (
                  <Card
                    key={d.title}
                    icon={d.icon}
                    title={d.title}
                    description={d.description}
                    href={d.href}
                    badge={d.badge}
                    footerLeft={<DifficultyTag level={d.level} />}
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
