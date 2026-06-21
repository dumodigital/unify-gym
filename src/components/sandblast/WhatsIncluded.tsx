'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Heart, Users, Sun } from 'lucide-react';
import { SANDBLAST, WHATS_INCLUDED } from '@/lib/sandblast-data';
import { Button, fadeInUp, staggerChildren } from '@/components/sandblast/motion';

const icons = [Dumbbell, Heart, Users, Sun];

export default function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="py-20 px-4 md:px-8 lg:px-12 bg-white/[0.02]"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        <motion.div className="mb-12 text-center" variants={fadeInUp}>
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm font-medium uppercase tracking-wide2 text-primary">
              The Workout
            </p>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-wide2 sm:text-5xl md:text-6xl">
            WHAT&apos;S <span className="text-primary">INCLUDED</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            Packed with fun, sun, and sweat: a fresh mix of strength and cardio every
            Saturday on the sand. In collaboration with {SANDBLAST.partner}.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHATS_INCLUDED.map((item, index) => {
            const Icon = icons[index] ?? Dumbbell;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 transition-colors group-hover:bg-primary/30">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="text-center" variants={fadeInUp}>
          <Button
            variant="primary"
            href={SANDBLAST.calendlyDropInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Reserve Your Spot
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
