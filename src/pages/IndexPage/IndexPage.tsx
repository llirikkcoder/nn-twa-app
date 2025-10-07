import type { FC } from 'react';
import './IndexPage.css';

import { HeroSection } from '@/components/HeroSection/HeroSection.tsx';
import { ProblemsSection } from '@/components/ProblemsSection/ProblemsSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { SolutionSection } from '@/components/SolutionSection/SolutionSection';

export const IndexPage: FC = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <SolutionSection />
    </div>
  );
};
