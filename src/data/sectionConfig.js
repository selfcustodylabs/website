/**
 * Section Configuration
 *
 * Centralized configuration for documentation sections.
 * Used by SectionBadge component and DocItem theme override.
 *
 * @typedef {Object} SectionConfig
 * @property {string} label - Display label for the section
 * @property {string} icon - Emoji icon for the section
 * @property {string} color - CSS color class suffix (e.g., "fundamentals" -> "section-badge--fundamentals")
 */

/**
 * Configuration for each documentation section
 * @type {Object.<string, SectionConfig>}
 */
export const sectionConfig = {
  fundamentals: {
    label: "Start Here",
    icon: "🌱",
    color: "fundamentals",
  },
  keys: {
    label: "Keys & Seeds",
    icon: "🔑",
    color: "keys",
  },
  wallets: {
    label: "Wallets",
    icon: "👛",
    color: "wallets",
  },
  transactions: {
    label: "Transactions",
    icon: "💸",
    color: "transactions",
  },
  privacy: {
    label: "Privacy",
    icon: "🕵️",
    color: "privacy",
  },
  nodes: {
    label: "Nodes",
    icon: "🖥️",
    color: "nodes",
  },
  security: {
    label: "Security",
    icon: "🛡️",
    color: "security",
  },
  advanced: {
    label: "Advanced",
    icon: "🏰",
    color: "advanced",
  },
  reference: {
    label: "Reference",
    icon: "📖",
    color: "reference",
  },
  seedsigner: {
    label: "SeedSigner",
    icon: "🎲",
    color: "seedsigner",
  },
};

/**
 * Get section configuration by key
 * @param {string} section - Section key
 * @returns {SectionConfig|null} Section configuration or null if not found
 */
export function getSectionConfig(section) {
  return sectionConfig[section] || null;
}

export default sectionConfig;
