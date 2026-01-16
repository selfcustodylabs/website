import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

import styles from './styles.module.css';

const quickLinks = [
  {
    icon: HomeRoundedIcon,
    title: 'Homepage',
    description: 'Return to the main page',
    href: '/',
  },
  {
    icon: SchoolRoundedIcon,
    title: 'Learn',
    description: 'Educational content about Bitcoin self-custody',
    href: '/learn/',
  },
  {
    icon: MenuBookRoundedIcon,
    title: 'Guides',
    description: 'Step-by-step tutorials and how-to guides',
    href: '/guides/',
  },
  {
    icon: HelpOutlineRoundedIcon,
    title: 'FAQ',
    description: 'Frequently asked questions',
    href: '/docs/reference/faq/',
  },
];

function QuickLinkCard({ icon: Icon, title, description, href }) {
  return (
    <Link to={href} className={styles.notFoundCard}>
      <div className={styles.notFoundCardIcon}>
        <Icon fontSize="large" />
      </div>
      <div className={styles.notFoundCardContent}>
        <h3 className={styles.notFoundCardTitle}>{title}</h3>
        <p className={styles.notFoundCardDesc}>{description}</p>
      </div>
    </Link>
  );
}

export default function NotFound() {
  const logoSrc = useBaseUrl('/img/logo.svg');

  return (
    <Layout
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
    >
      <main className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          {/* Logo */}
          <img
            src={logoSrc}
            alt="Self Custody Labs"
            className={styles.notFoundLogo}
          />

          {/* Error Message */}
          <h1 className={styles.notFoundTitle}>404</h1>
          <h2 className={styles.notFoundSubtitle}>Page Not Found</h2>
          <p className={styles.notFoundMessage}>
            The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track.
          </p>

          {/* Search suggestion */}
          <div className={styles.notFoundSearch}>
            <SearchRoundedIcon />
            <span>Try using the search bar in the navigation</span>
          </div>

          {/* Quick Links */}
          <div className={styles.notFoundLinks}>
            <h3 className={styles.notFoundLinksTitle}>Popular Destinations</h3>
            <div className={styles.notFoundGrid}>
              {quickLinks.map((link) => (
                <QuickLinkCard key={link.title} {...link} />
              ))}
            </div>
          </div>

          {/* Back button */}
          <button
            className={styles.notFoundBackButton}
            onClick={() => window.history.back()}
            type="button"
          >
            ← Go Back
          </button>
        </div>
      </main>
    </Layout>
  );
}
