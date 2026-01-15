import React from 'react';

/**
 * Section badge to show which section the current page belongs to
 * 
 * Usage:
 * <SectionBadge section="fundamentals" />
 * <SectionBadge section="keys" icon="🔑" />
 * 
 * Available sections:
 * - fundamentals (green)
 * - keys (amber)
 * - wallets (purple)
 * - transactions (blue)
 * - privacy (pink)
 * - nodes (cyan)
 * - security (red)
 * - advanced (orange)
 */

const sectionLabels = {
  fundamentals: { label: 'Start Here', icon: '🌱' },
  keys: { label: 'Keys & Seeds', icon: '🔑' },
  wallets: { label: 'Wallets', icon: '👛' },
  transactions: { label: 'Transactions', icon: '💸' },
  privacy: { label: 'Privacy', icon: '🕵️' },
  nodes: { label: 'Nodes', icon: '🖥️' },
  security: { label: 'Security', icon: '🛡️' },
  advanced: { label: 'Advanced', icon: '🏰' },
  reference: { label: 'Reference', icon: '📖' },
};

export default function SectionBadge({ section, icon, label }) {
  const sectionData = sectionLabels[section] || { label: section, icon: '📄' };
  const displayIcon = icon || sectionData.icon;
  const displayLabel = label || sectionData.label;
  
  return (
    <span className={`section-badge section-badge--${section}`}>
      <span>{displayIcon}</span>
      <span>{displayLabel}</span>
    </span>
  );
}
