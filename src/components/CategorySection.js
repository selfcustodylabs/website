import React from "react";
import PropTypes from "prop-types";
import { Card, cardStyles, DifficultyTag } from "@site/src/components";
import styles from "@site/src/pages/styles.module.css";

/**
 * Reusable CategorySection component for landing pages
 *
 * Displays a titled section with a grid of Card components.
 * Used on /guides and /learn pages to organize content by category.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Section heading text
 * @param {string} props.description - Section description/subtitle
 * @param {Array} props.items - Array of item objects to display as cards
 * @param {React.ComponentType} props.items[].icon - Material UI icon component
 * @param {string} props.items[].title - Card title
 * @param {string} props.items[].description - Card description
 * @param {string} props.items[].href - Link destination
 * @param {string} [props.items[].badge] - Optional badge text (e.g., "POPULAR", "NEW")
 * @param {string} [props.items[].level] - Difficulty level for DifficultyTag
 * @param {string} [props.items[].cost] - Optional cost text (e.g., "💰 $50-100")
 * @returns {React.ReactElement} CategorySection component
 *
 * @example
 * <CategorySection
 *   title="🔐 Security & Keys"
 *   description="Generate and protect your Bitcoin keys"
 *   items={[
 *     {
 *       icon: CasinoRoundedIcon,
 *       title: "DIY Seed Generation",
 *       description: "Create your own secure seed",
 *       href: "/docs/security/seed-generation",
 *       badge: "POPULAR",
 *       level: "Intermediate",
 *       cost: "💰 $30-80",
 *     },
 *   ]}
 * />
 */
export default function CategorySection({ title, description, items }) {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <p className={styles.categoryDescription}>{description}</p>
      </div>
      <div className={styles.grid3}>
        {items.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            href={item.href}
            badge={item.badge}
            cost={item.cost}
            footerLeft={item.level ? <DifficultyTag level={item.level} /> : null}
            footerRight={<span className={cardStyles.arrow}>→</span>}
          />
        ))}
      </div>
    </section>
  );
}

CategorySection.propTypes = {
  /** Section heading text */
  title: PropTypes.string.isRequired,
  /** Section description/subtitle */
  description: PropTypes.string.isRequired,
  /** Array of item objects to display as cards */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      badge: PropTypes.string,
      level: PropTypes.string,
      cost: PropTypes.string,
    })
  ).isRequired,
};
