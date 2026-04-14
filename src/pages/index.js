import React from 'react';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/homepage/Hero';
import TrustSignals from '@site/src/components/homepage/TrustSignals';
import FeatureBento from '@site/src/components/homepage/FeatureBento';
import LearningPath from '@site/src/components/homepage/LearningPath';
import CommunityCallout from '@site/src/components/homepage/CommunityCallout';
import FinalCTA from '@site/src/components/homepage/FinalCTA';

export default function Home() {
  return (
    <Layout
      title="Bitcoin Self-Custody Guides & Tutorials"
      description="Learn Bitcoin self-custody: hardware wallet setup, seed phrase security, multisig configurations, privacy best practices, and running your own node. Free step-by-step guides."
    >
      <main className="homepage relative bg-neutral-950 text-white">
        <Hero />
        <TrustSignals />
        <FeatureBento />
        <LearningPath />
        <CommunityCallout />
        <FinalCTA />
      </main>
    </Layout>
  );
}
