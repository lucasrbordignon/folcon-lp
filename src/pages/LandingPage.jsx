
import React from 'react';
import HeaderApp from '@/components/layout/HeaderApp';
import FooterApp from '@/components/layout/FooterApp';
import HeroApp from '@/components/sections/HeroApp';
import FeaturesApp from '@/components/sections/FeaturesApp';
import DemoApp from '@/components/sections/DemoApp';
import BenefitsApp from '@/components/sections/BenefitsApp';
import DownloadApp from '@/components/sections/DownloadApp';
import FinalCTAApp from '@/components/sections/FinalCTAApp';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderApp />
      <main className="flex-grow">
        <HeroApp />
        <BenefitsApp />
        <FeaturesApp />
        <DemoApp />
        <DownloadApp />
        <FinalCTAApp />
      </main>
      <FooterApp />
    </div>
  );
};

export default LandingPage;
  