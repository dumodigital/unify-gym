'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { WHY_REASONS } from '@/lib/recovery-data';
import CardCarousel from './CardCarousel';

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

const fadeImage = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease },
  },
};

function ReasonRow({
  index,
  title,
  description,
  className = '',
  variant = 'editorial',
}: {
  index: number;
  title: string;
  description: string;
  className?: string;
  variant?: 'editorial' | 'card';
}) {
  if (variant === 'card') {
    return (
      <article className="flex min-h-[200px] flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <span className="font-display text-3xl leading-none tracking-wide2 text-primary">
          {String(index).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      className={`flex flex-col gap-3 py-8 sm:flex-row sm:items-start sm:gap-10 sm:py-14 ${className}`}
    >
      <span className="font-display text-4xl leading-none tracking-wide2 text-primary sm:w-24 sm:shrink-0 sm:text-5xl">
        {String(index).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-white/65 sm:mt-3 sm:text-lg">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Authority() {
  const [one, two, three, four] = WHY_REASONS;

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-12 sm:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeImage}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6] lg:aspect-auto lg:min-h-[520px]"
          >
            {/* PLACEHOLDER — Dr. Joe photo from lakefrontchiro.com */}
            <Image
              src="/content/recovery/dr-joe.jpg"
              alt="Dr. Joseph Ethen of Lakefront Chiropractic"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm">
              MEET DR. JOE
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
              Recovery, in expert hands.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Unify Recovery is guided by Dr. Joseph Ethen of Lakefront Chiropractic, right here
              inside Unify Gym. A Certified Athletic Trainer with a Master&apos;s in Exercise
              Physiology, Dr. Joe started in physical therapy and turned to recovery after healing
              his own back injury without surgery. His focus has always been the same: keeping you
              strong, mobile, and performing at your best.
            </p>
            <a
              href="https://www.lakefrontchiro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:text-base"
            >
              Visit Lakefront Chiropractic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-16 border-t border-white/10 pt-16 text-center text-xs font-medium uppercase tracking-wide2 text-primary sm:mt-20 sm:text-sm"
          variants={fadeUp}
        >
          WHY UNIFY RECOVERY
        </motion.p>
        <motion.h2
          className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-bold leading-[1.12] sm:text-5xl"
          variants={fadeUp}
        >
          State-of-the-art tech. <span className="text-primary">Expert-run.</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/65 sm:text-lg"
          variants={fadeUp}
        >
          Advanced recovery technology, in expert hands.
        </motion.p>

        <div className="mt-10 md:hidden">
          <CardCarousel label="Why Unify Recovery">
            {WHY_REASONS.map((reason, index) => (
              <ReasonRow
                key={reason.title}
                index={index + 1}
                title={reason.title}
                description={reason.description}
                variant="card"
              />
            ))}
          </CardCarousel>
        </div>

        <div className="mt-12 hidden sm:mt-16 md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ReasonRow
              index={1}
              title={one.title}
              description={one.description}
              className="border-b border-white/10 md:border-r md:pr-12"
            />
            <ReasonRow
              index={2}
              title={two.title}
              description={two.description}
              className="border-b border-white/10 md:pl-12"
            />
            <ReasonRow
              index={3}
              title={three.title}
              description={three.description}
              className="border-b border-white/10 md:border-b-0 md:border-r md:pr-12"
            />
            <ReasonRow
              index={4}
              title={four.title}
              description={four.description}
              className="md:pl-12"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
