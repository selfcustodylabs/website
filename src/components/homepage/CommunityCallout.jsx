import React from 'react';
import Link from '@docusaurus/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import XIcon from '@mui/icons-material/X';

import { ClubOrangeIcon, KeybaseIcon, NostrIcon } from '@site/src/components';
import useReveal from '@site/src/hooks/useReveal';

const platforms = [
  {
    icon: NostrIcon,
    label: 'Nostr',
    href: 'https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5',
  },
  { icon: XIcon, label: 'X', href: 'https://x.com/selfcustodylabs' },
  { icon: EmailRoundedIcon, label: 'E-mail', href: 'mailto:selfcustodylabs@proton.me' },
  {
    icon: ClubOrangeIcon,
    label: 'Club Orange',
    href: 'https://app.cluborange.org/selfcustodylabs',
  },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/selfcustodylabs' },
  { icon: KeybaseIcon, label: 'Keybase', href: 'https://keybase.io/selfcustodylabs' },
];

export default function CommunityCallout() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="reveal relative mx-auto w-full max-w-6xl px-6 py-20 md:py-24"
    >
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="h-px w-8 bg-amber-400/50" />
          Find us
          <span className="h-px w-8 bg-amber-400/50" />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Questions, feedback, or a good meme?
        </h2>
        <p className="mt-3 text-sm text-white/55">We're on every platform worth being on.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.label}
              to={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.08] hover:text-white hover:-translate-y-0.5"
            >
              <Icon sx={{ fontSize: 18 }} className="text-amber-400" />
              {p.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
