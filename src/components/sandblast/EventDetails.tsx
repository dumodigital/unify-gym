'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SANDBLAST, SCHEDULE_DETAILS } from '@/lib/sandblast-data';
import { fadeInUp, staggerChildren } from '@/components/sandblast/motion';

const OVERVIEW_LABELS = ['When', 'Duration', 'Where', 'Meeting spot'] as const;

export default function EventDetails() {
  const items = SCHEDULE_DETAILS.filter(({ label }) =>
    OVERVIEW_LABELS.includes(label as (typeof OVERVIEW_LABELS)[number])
  );

  return (
    <section
      id="event-details"
      className="border-b border-white/10 bg-white/[0.02] py-16 px-4 sm:py-20 md:px-8 lg:px-12"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={fadeInUp}>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide2 text-primary">
              Summer 2026
            </p>
            <h2 className="mb-8 font-display text-4xl font-bold tracking-wide2 md:text-5xl">
              The Details,
              <span className="block text-primary">On the Sand.</span>
            </h2>

            <ul className="space-y-5 text-base text-neutral-300 sm:text-lg">
              {items.map(({ label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-white">{label}:</span>{' '}
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-neutral-400">
              In collaboration with{' '}
              <span className="text-neutral-300">{SANDBLAST.partner}</span>
            </p>
          </motion.div>

          <motion.div className="relative w-full" variants={fadeInUp}>
            {/* Mobile: stacked photos */}
            <div className="space-y-4 md:hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/content/sandblast/lake-michigan-walk.png"
                  alt="Glencoe Beach along Lake Michigan"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/content/sandblast/beach-catamarans.png"
                  alt="Sailboats on the sand at Glencoe Beach"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Desktop: overlapping mosaic (membership-style) */}
            <div className="relative mx-auto hidden max-w-md md:block lg:max-w-none lg:ml-auto">
              <div className="relative z-10 w-full max-w-[380px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/content/sandblast/hero-workout-mobile.png"
                    alt="Outdoor group workout at Glencoe Beach"
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 1024px) 380px, 380px"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-2 z-20 w-[58%] max-w-[260px] lg:-right-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-[#0B0B0C] shadow-2xl">
                  <Image
                    src="/content/sandblast/beach-catamarans.png"
                    alt="Sailboats on the sand at Glencoe Beach"
                    fill
                    className="object-cover object-center"
                    sizes="260px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
