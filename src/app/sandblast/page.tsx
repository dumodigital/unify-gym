'use client';

import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import StructuredData from '@/components/site/StructuredData';
import Hero from '@/components/sandblast/Hero';
import EventDetails from '@/components/sandblast/EventDetails';
import WhatsIncluded from '@/components/sandblast/WhatsIncluded';
import ScheduleLocation from '@/components/sandblast/ScheduleLocation';
import FAQAndCTA from '@/components/sandblast/FAQAndCTA';
import { sandblastEvent } from '@/lib/sandblast-data';

export default function SandblastPage() {
  return (
    <>
      <StructuredData id="sandblast-event" data={sandblastEvent} />
      <Header />
      <main className="overflow-x-hidden bg-[#0B0B0C] text-white">
        <Hero />
        <EventDetails />
        <WhatsIncluded />
        <ScheduleLocation />
        <FAQAndCTA />
      </main>
      <Footer />
    </>
  );
}
