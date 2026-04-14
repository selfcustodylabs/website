import React from 'react';
import Link from '@docusaurus/Link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import useReveal from '@site/src/hooks/useReveal';

const stages = [
  {
    number: '01',
    title: 'Understand',
    description: 'Learn what Bitcoin is, why self-custody matters, and how private keys actually work.',
    href: '/docs/learn/fundamentals',
  },
  {
    number: '02',
    title: 'Set up',
    description: 'Pick a hardware wallet, generate a seed, and make your first secure backup.',
    href: '/docs/wallet-setup/hardware-wallet',
  },
  {
    number: '03',
    title: 'Secure',
    description: 'Add a passphrase, verify your backup, run your own node, and learn UTXO control.',
    href: '/docs/learn/keys/passphrase',
  },
  {
    number: '04',
    title: 'Advance',
    description: 'Graduate to multisig, air-gapped signing, and advanced privacy when you are ready.',
    href: '/docs/learn/wallets/multisig',
  },
];

export default function LearningPath() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="reveal relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="mb-16 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="h-px w-8 bg-amber-400/50" />
          Your path to self-custody
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
          Four stages, at your own pace.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
          You don't have to become a security engineer. Just take the next step when it fits, and
          upgrade your setup as your holdings and confidence grow.
        </p>
      </div>

      <div className="relative grid gap-8 md:grid-cols-4 md:gap-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-10 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 md:block"
        />

        {stages.map((s, idx) => (
          <Link
            key={s.number}
            to={s.href}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-amber-500/35 hover:bg-white/[0.04] hover:-translate-y-1"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-neutral-950 font-display text-base font-bold text-amber-400 transition-all duration-500 group-hover:border-amber-500/60 group-hover:shadow-glow">
                {s.number}
              </div>
              {idx < stages.length - 1 && (
                <div className="hidden flex-1 border-t border-dashed border-white/10 md:hidden" />
              )}
            </div>
            <h3 className="font-display text-lg font-bold tracking-tight text-white">{s.title}</h3>
            <p className="mb-6 mt-2 text-sm leading-relaxed text-white/65">{s.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-400/80 transition-colors duration-300 group-hover:text-amber-300">
              Read more
              <ArrowForwardRoundedIcon
                sx={{ fontSize: 14 }}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          to="/learn"
          className="group inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/70 hover:bg-amber-500/20 hover:-translate-y-0.5"
        >
          Start the path
          <ArrowForwardRoundedIcon
            sx={{ fontSize: 16 }}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
