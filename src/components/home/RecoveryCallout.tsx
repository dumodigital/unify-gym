'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeInUp } from '@/components/sandblast/motion';

export default function RecoveryCallout() {
  return (
    <motion.section
      className="relative overflow-hidden border-y border-primary/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
    >
      <div className="absolute inset-0">
        <Image
          src="/content/recovery/hero-suite-2k.jpg"
          alt="Unify Recovery suite"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide2 text-primary">
            Now Open · Glencoe
          </p>
          <h2 className="font-display text-4xl tracking-wide2 text-white sm:text-5xl md:text-6xl">
            UNIFY <span className="text-primary">RECOVERY</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-100 sm:text-lg">
            Infrared sauna, full-body NovaPod therapy, and results-driven body sculpting, all in
            one private suite inside Unify Gym.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/recovery"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white hover:bg-primary/90"
            >
              Explore Recovery
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
