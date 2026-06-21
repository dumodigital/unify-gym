'use client';

import { motion } from 'framer-motion';
import { SANDBLAST } from '@/lib/sandblast-data';
import { fadeInUp } from '@/components/sandblast/motion';

export default function ScheduleLocation() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SANDBLAST.mapsQuery)}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(SANDBLAST.mapsQuery)}&output=embed`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-bold tracking-wide2 sm:text-5xl">
            FIND US ON THE <span className="text-primary">SAND</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            {SANDBLAST.locationNote}
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            In collaboration with{' '}
            <span className="text-neutral-300">{SANDBLAST.partner}</span>
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div
            className="group relative h-[320px] w-full cursor-pointer sm:h-[400px]"
            onClick={handleMapClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleMapClick()}
            aria-label="Open Glencoe Beach in Google Maps"
          >
            <iframe
              title="Glencoe Beach Location"
              src={embedSrc}
              className="pointer-events-none h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-black/5" />
            <div className="absolute bottom-4 left-4 right-4 md:hidden">
              <div className="rounded-lg bg-black/80 px-4 py-2 text-center text-sm font-medium text-white opacity-90 backdrop-blur-sm">
                Tap to open in Maps app
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
