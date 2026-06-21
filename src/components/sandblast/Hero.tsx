'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SANDBLAST } from '@/lib/sandblast-data';
import { Button, fadeInUp, scaleIn } from '@/components/sandblast/motion';

export default function Hero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const scrollToDetails = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={heroRef}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden site-header-offset sm:min-h-[65vh] md:min-h-[70vh]"
      initial="hidden"
      animate={heroInView ? 'visible' : 'hidden'}
      variants={scaleIn}
    >
      <div className="absolute inset-0">
        <div className="relative h-full md:hidden">
          <Image
            src="/content/sandblast/hero-workout-mobile.png"
            alt="Outdoor group workout at Glencoe Beach"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative hidden h-full md:block">
          <Image
            src="/content/sandblast/hero-glencoe-beach.png"
            alt="Glencoe Beach welcome area"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/15 md:bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/55 via-[#0B0B0C]/20 to-transparent md:from-[#0B0B0C]/90 md:via-[#0B0B0C]/55 md:to-[#0B0B0C]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/15 via-transparent to-[#0B0B0C]/10 md:from-[#0B0B0C]/40 md:to-[#0B0B0C]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-wide2 text-primary drop-shadow-sm"
          variants={fadeInUp}
        >
          Summer Service · Glencoe Beach
        </motion.p>

        <motion.h1
          className="mb-6 font-display text-5xl font-bold tracking-wide2 drop-shadow-md sm:text-7xl lg:text-8xl"
          variants={fadeInUp}
        >
          SANDBLAST
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg font-light text-neutral-100 drop-shadow-sm sm:text-xl"
          variants={fadeInUp}
        >
          {SANDBLAST.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
          variants={fadeInUp}
        >
          <Button
            variant="primary"
            href={SANDBLAST.calendlyDropInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Reserve Your Spot
          </Button>
          <Button
            variant="outline"
            onClick={scrollToDetails}
            className="w-full sm:w-auto"
          >
            See the Details
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
