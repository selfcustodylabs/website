import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import BackgroundMotif from './BackgroundMotif';

const pills = [
  { icon: ShieldRoundedIcon, label: 'Privacy First' },
  { icon: SchoolRoundedIcon, label: 'Step-by-Step' },
  { icon: VpnKeyRoundedIcon, label: 'Be Your Own Bank' },
];

function Pill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.06] px-4 py-2 text-xs font-medium text-amber-100/90 backdrop-blur-sm transition-colors duration-300 hover:border-amber-500/50 hover:bg-amber-500/10">
      <Icon sx={{ fontSize: 16 }} className="text-amber-400" />
      {label}
    </span>
  );
}

export default function Hero() {
  const logoSrc = useBaseUrl('/img/logo.svg');

  return (
    <header className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden pb-24 pt-20 md:min-h-screen md:pb-32 md:pt-28">
      <BackgroundMotif />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm animate-fade-in-up">
          <img src={logoSrc} alt="" width="20" height="20" className="h-5 w-5" />
          <span className="tracking-wide uppercase">Self Custody Labs</span>
          <span className="hidden h-1 w-1 rounded-full bg-amber-400 sm:inline-block" />
          <span className="hidden text-white/50 sm:inline">Free, open-source guides</span>
        </div>

        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] animate-fade-in-up">
          Take Control of
          <br />
          <span
            className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          >
            Your Bitcoin
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-xl animate-fade-in-up">
          Learn self-custody the right way. Practical guides that teach you to hold your own keys
          with confidence — from your first hardware wallet to multisig vaults.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5 animate-fade-in-up">
          <Link
            to="/learn"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-glow transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-strong hover:-translate-y-0.5 sm:text-base"
          >
            <span className="relative z-10">Start Learning</span>
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 18 }}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
            />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            to="/guides"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:-translate-y-0.5 sm:text-base"
          >
            Browse Guides
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 18 }}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
          {pills.map((p) => (
            <Pill key={p.label} icon={p.icon} label={p.label} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
        <KeyboardArrowDownRoundedIcon sx={{ fontSize: 28 }} className="text-white/35" />
      </div>
    </header>
  );
}
