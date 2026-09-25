'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { RECOVERY_OUTCOMES } from '@/lib/recovery-data';
import CardCarousel from './CardCarousel';

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

const viewport = { once: true, amount: 0.4 } as const;

function Benefit({
  index,
  title,
  description,
  variant = 'list',
}: {
  index: number;
  title: string;
  description: string;
  variant?: 'list' | 'card';
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={
        variant === 'card'
          ? 'flex min-h-[180px] flex-col rounded-2xl border border-white/10 bg-white/5 p-5'
          : 'min-w-0 border-t border-white/15 pt-5'
      }
    >
      <p className="font-display text-sm tracking-wide2 text-primary">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 font-display text-xl text-white sm:text-[1.65rem]">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
        {description}
      </p>
    </motion.article>
  );
}

export default function WhyRecovery() {
  return (
    <section className="py-12 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-start gap-10 px-4 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="flex flex-col text-left lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div variants={fadeScale} className="w-fit">
              <Image
                src="/content/recovery/uf-recovery-logo.png"
                alt="Unify Recovery"
                width={170}
                height={170}
                unoptimized
                className="h-[110px] w-[110px] object-contain sm:h-[160px] sm:w-[160px] lg:h-[170px] lg:w-[170px]"
              />
            </motion.div>

            <motion.p
              className="mt-5 text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm"
              variants={fadeUp}
            >
              Recover. Recharge. Restore.
            </motion.p>
            <motion.p
              className="mt-3 text-xs font-medium uppercase tracking-wide2 text-white/45 sm:text-sm"
              variants={fadeUp}
            >
              A Division of Unify Gym
            </motion.p>
            <motion.h2
              className="mt-6 font-display text-[1.85rem] font-bold leading-[1.08] sm:text-5xl lg:text-[3.5rem]"
              variants={fadeUp}
            >
              <span className="block sm:whitespace-nowrap">Recovery isn&apos;t a luxury.</span>
              <span className="block">
                It&apos;s a <span className="text-primary">lifestyle.</span>
              </span>
            </motion.h2>
            <motion.p
              className="mt-5 w-full max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
              variants={fadeUp}
            >
              Recovery is where progress happens. The right recovery tools help your body repair,
              rebuild, and perform at its best, every day.
            </motion.p>
          </motion.div>

          <div className="min-w-0 lg:col-span-6">
            <div className="md:hidden">
              <CardCarousel label="Recovery benefits">
                {RECOVERY_OUTCOMES.map((outcome, index) => (
                  <Benefit key={outcome.title} index={index} variant="card" {...outcome} />
                ))}
              </CardCarousel>
            </div>
            <motion.div
              className="hidden grid-cols-2 gap-x-10 gap-y-12 md:grid"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {RECOVERY_OUTCOMES.map((outcome, index) => (
                <Benefit key={outcome.title} index={index} {...outcome} />
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
}
