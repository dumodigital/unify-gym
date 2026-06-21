'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SANDBLAST } from '@/lib/sandblast-data';
import { fadeInUp } from '@/components/sandblast/motion';

const buttonBase =
  'inline-flex box-border min-h-[48px] w-full min-w-0 items-center justify-center rounded-md border-2 px-8 py-4 text-sm font-medium uppercase tracking-wide2 transition-colors sm:min-w-[280px] sm:w-auto sm:py-3';

export default function SandblastCallout() {
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
          src="/content/sandblast/beach-summer.png"
          alt="Beachfront workout at Glencoe Beach"
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />
      </div>

      <div className="relative px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide2 text-primary drop-shadow-sm">
              Summer 2026
            </p>
            <h2 className="font-display text-4xl tracking-wide2 text-white drop-shadow-md sm:text-5xl md:text-6xl">
              SANDBLAST
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-100 drop-shadow-sm sm:text-lg">
              {SANDBLAST.tagline} In collaboration with {SANDBLAST.partner}.
            </p>
          </div>

          <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center text-sm sm:text-base">
            <p className="font-medium tracking-wide2 text-primary drop-shadow-sm">
              {SANDBLAST.seasonDates} · weather permitting
            </p>
            <p className="text-neutral-100 drop-shadow-sm">{SANDBLAST.location}</p>
            <p className="text-neutral-100 drop-shadow-sm">
              {SANDBLAST.duration} total-body bootcamp · all levels
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/sandblast"
              className={`${buttonBase} border-white/80 bg-black/30 text-white backdrop-blur-sm hover:bg-white hover:text-neutral-900`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
