'use client';

import { motion } from 'framer-motion';
import { Bluetooth, Droplet, Home, Leaf, Sparkles, type LucideIcon } from 'lucide-react';
import { EXPERIENCE_DETAILS } from '@/lib/recovery-data';

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease },
  },
};

const ICONS: Record<(typeof EXPERIENCE_DETAILS)[number]['icon'], LucideIcon> = {
  Home,
  Leaf,
  Droplet,
  Bluetooth,
  Sparkles,
};

export default function Experience() {
  return (
    <section className="py-12 sm:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.p
          className="text-center text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm"
          variants={fadeUp}
        >
          The Experience
        </motion.p>
        <motion.h2
          className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-bold leading-[1.12] sm:text-5xl"
          variants={fadeUp}
        >
          A private suite. <span className="text-primary">Every detail considered.</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg"
          variants={fadeUp}
        >
          Every detail is handled, so all you have to do is recover.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {EXPERIENCE_DETAILS.map((item, index) => {
            const Icon = ICONS[item.icon];
            const isLast = index === EXPERIENCE_DETAILS.length - 1;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className={`flex rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 ${
                  isLast
                    ? 'col-span-2 flex-row items-center gap-4 lg:col-span-1 lg:flex-col lg:items-start lg:gap-0'
                    : 'flex-col'
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h3
                    className={`font-display leading-snug text-white sm:text-xl ${
                      isLast ? 'mt-0 text-lg lg:mt-4' : 'mt-4 text-base'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
