import React from 'react';
import Link from '@docusaurus/Link';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import useReveal from '@site/src/hooks/useReveal';

const anchor = {
  icon: VpnKeyRoundedIcon,
  title: 'True Ownership',
  tagline: 'Your keys, your coins.',
  description:
    "Self-custody is the difference between holding Bitcoin and holding a promise. Learn how private keys actually authorize transactions, why exchange balances are IOUs, and how to move from renting your coins to owning them.",
  href: '/docs/learn/fundamentals/what-is-self-custody',
};

const mediums = [
  {
    icon: SecurityRoundedIcon,
    title: 'Hardware Wallets',
    description: 'Keep your keys offline on a device that signs transactions without ever exposing them.',
    href: '/docs/wallet-setup/hardware-wallet',
  },
  {
    icon: KeyRoundedIcon,
    title: 'Seed Phrases',
    description: 'Generate, back up, and verify a recovery phrase that actually works when you need it.',
    href: '/docs/learn/keys/random',
  },
  {
    icon: ShieldRoundedIcon,
    title: 'Privacy',
    description: 'Understand UTXO management and coin control so your on-chain footprint stays yours.',
    href: '/docs/learn/privacy/utxo-management',
  },
  {
    icon: DnsRoundedIcon,
    title: 'Run a Node',
    description: "Verify every Bitcoin rule yourself instead of trusting somebody else's server.",
    href: '/docs/bitcoin-node',
  },
];

const wide = {
  icon: AccountTreeRoundedIcon,
  title: 'Multisig',
  tagline: 'Eliminate single points of failure.',
  description:
    'Require multiple independent keys to spend, stored in separate places. The setup most serious Bitcoiners graduate into.',
  href: '/docs/learn/wallets/multisig',
};

function CardShell({ children, href, className = '' }) {
  const base =
    'group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-amber-500/35 hover:bg-white/[0.04] hover:-translate-y-1';
  if (href) {
    return (
      <Link to={href} className={`${base} ${className}`}>
        {children}
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 opacity-0 transition-opacity duration-500 group-hover:from-amber-500/5 group-hover:via-transparent group-hover:to-orange-500/5 group-hover:opacity-100" />
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}

function IconBadge({ icon: Icon, size = 'md' }) {
  const dim = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11';
  const iconSize = size === 'lg' ? 28 : 22;
  return (
    <div
      className={`mb-5 inline-flex ${dim} items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/[0.08] text-amber-400 transition-colors duration-500 group-hover:border-amber-500/50 group-hover:bg-amber-500/15`}
    >
      <Icon sx={{ fontSize: iconSize }} />
    </div>
  );
}

function ArrowHint() {
  return (
    <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-400/80 transition-colors duration-300 group-hover:text-amber-300">
      Explore
      <ArrowForwardRoundedIcon
        sx={{ fontSize: 14 }}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  );
}

export default function FeatureBento() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="reveal relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mb-14 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="h-px w-8 bg-amber-400/50" />
          What you'll learn
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
          From your first wallet
          <br />
          <span className="text-white/50">to advanced vaults.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto]">
        <CardShell href={anchor.href} className="lg:col-span-2 lg:row-span-2">
          <IconBadge icon={anchor.icon} size="lg" />
          <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {anchor.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-amber-300/90">{anchor.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 md:text-base">
            {anchor.description}
          </p>
          <div className="mt-8">
            <ArrowHint />
          </div>
        </CardShell>

        {mediums.map((m) => (
          <CardShell key={m.title} href={m.href}>
            <IconBadge icon={m.icon} />
            <h3 className="font-display text-lg font-bold tracking-tight text-white">{m.title}</h3>
            <p className="mb-6 mt-2 text-sm leading-relaxed text-white/65">{m.description}</p>
            <ArrowHint />
          </CardShell>
        ))}

        <CardShell href={wide.href} className="lg:col-span-4">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <IconBadge icon={wide.icon} size="lg" />
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                {wide.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-amber-300/90">{wide.tagline}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                {wide.description}
              </p>
            </div>
            <div className="md:self-end">
              <ArrowHint />
            </div>
          </div>
        </CardShell>
      </div>
    </section>
  );
}
