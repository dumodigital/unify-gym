'use client';

import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import StructuredData from '@/components/site/StructuredData';
import { recoverySchema } from '@/lib/recovery-data';
import Hero from '@/components/recovery/Hero';
import WhyRecovery from '@/components/recovery/WhyRecovery';
import ServiceDeepDives from '@/components/recovery/ServiceDeepDives';
import Experience from '@/components/recovery/Experience';
import Authority from '@/components/recovery/Authority';
import Menu from '@/components/recovery/Menu';
import FAQ from '@/components/recovery/FAQ';
import FinalCTA from '@/components/recovery/FinalCTA';
import ThreePillars from '@/components/recovery/ThreePillars';

export default function RecoveryPage() {
  return (
    <>
      <StructuredData id="recovery-schema" data={recoverySchema} />
      <Header />
      <main className="max-w-[100vw] overflow-x-clip bg-[#0B0B0C] text-white">
        <Hero />
        <WhyRecovery />
        <ThreePillars />
        <ServiceDeepDives />
        <Experience />
        <Authority />
        <Menu />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
