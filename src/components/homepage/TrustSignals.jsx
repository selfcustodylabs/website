import React from 'react';
import Link from '@docusaurus/Link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import useReveal from '@site/src/hooks/useReveal';

const collapses = [
  {
    figure: '$8B',
    label: 'FTX (2022)',
    description: 'Customer funds misappropriated in one of the largest financial frauds in crypto history.',
  },
  {
    figure: '~850,000 BTC',
    label: 'Mt. Gox (2014)',
    description: 'The largest Bitcoin exchange in the world, hacked and mismanaged over years.',
  },
  {
    figure: '$4.7B',
    label: 'Celsius (2022)',
    description: 'Froze customer withdrawals, then filed for bankruptcy. Customers became unsecured creditors.',
  },
];

export default function TrustSignals() {
  const ref = useReveal();

  return (
    <section
      id="trust-signals"
      ref={ref}
      className="reveal relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mb-14 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="h-px w-8 bg-amber-400/50" />
          The cost of trust
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
          When you don't hold the keys,
          <br />
          <span className="text-white/50">you don't own the coins.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {collapses.map((c) => (
          <article
            key={c.label}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-amber-500/30 hover:bg-white/[0.04] hover:-translate-y-1"
          >
            <div
              className="mb-5 bg-gradient-to-br from-amber-300 via-amber-500 to-orange-500 bg-clip-text font-display text-5xl font-extrabold leading-none tracking-tightest text-transparent md:text-6xl"
              style={{ backgroundSize: '200% 200%' }}
            >
              {c.figure}
            </div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              {c.label}
            </div>
            <p className="text-sm leading-relaxed text-white/70">{c.description}</p>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-base text-white/60">
          None of them were holding their own keys. If they had been, none of those collapses
          would have touched their coins.
        </p>
        <Link
          to="/docs/learn/fundamentals/holding-bitcoin"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors duration-300 hover:text-amber-300"
        >
          Read the full story
          <ArrowForwardRoundedIcon
            sx={{ fontSize: 16 }}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
