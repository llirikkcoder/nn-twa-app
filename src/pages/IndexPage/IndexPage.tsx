import type { FC } from 'react';

import { HeroSection } from '@/components/HeroSection/HeroSection.tsx';
import { ProblemsSection } from '@/components/ProblemsSection/ProblemsSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';

export const IndexPage: FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
    </>
  );
};
