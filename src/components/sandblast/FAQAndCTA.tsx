'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Target } from 'lucide-react';
import { SANDBLAST, SANDBLAST_FAQ } from '@/lib/sandblast-data';
import { Button, fadeInUp, staggerChildren } from '@/components/sandblast/motion';

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left transition-colors hover:bg-white/5 sm:px-5 sm:py-5 lg:px-6 lg:py-6"
        aria-expanded={isOpen}
      >
        <span className="flex-1 pr-4 text-base font-medium text-white lg:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3 text-sm leading-relaxed text-neutral-300 sm:px-5 sm:pb-5 sm:pt-4 lg:px-6 lg:pb-6 lg:text-base">
          {answer}
        </div>
      )}
    </div>
  );
}

function FinalCTACard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center sm:p-8 lg:p-10 ${className}`}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
        <Target className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium uppercase tracking-wide text-primary sm:text-sm">
          Book Your Spot
        </span>
      </div>

      <h2 className="font-display text-2xl font-bold tracking-wide2 sm:text-3xl lg:text-4xl">
        Ready to blast into summer?
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-neutral-300 sm:text-base lg:max-w-md">
        {SANDBLAST.seasonDates} · {SANDBLAST.location}
      </p>
      <p className="mt-2 text-sm font-medium text-primary">
        {SANDBLAST.noClassNote}
      </p>
      <p className="mt-2 text-sm text-neutral-400">
        ${SANDBLAST.dropInPrice} drop-in · ${SANDBLAST.fivePackPrice} 5-pack
      </p>

      <Button
        variant="primary"
        href={SANDBLAST.calendlyDropInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full sm:w-auto"
      >
        Reserve Your Spot
      </Button>
    </div>
  );
}

export default function FAQAndCTA() {
  return (
    <section className="px-4 py-16 sm:py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        {/* Mobile / tablet: FAQ then CTA stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          <motion.div variants={fadeInUp}>
            <h2 className="mb-6 text-center font-display text-3xl font-bold tracking-wide2 sm:text-4xl">
              GOOD TO <span className="text-primary">KNOW</span>
            </h2>
            <div className="space-y-3">
              {SANDBLAST_FAQ.map((item, index) => (
                <FAQItem
                  key={item.question}
                  {...item}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <FinalCTACard />
          </motion.div>
        </div>

        {/* Desktop: side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div variants={fadeInUp}>
            <h2 className="mb-8 font-display text-4xl font-bold tracking-wide2 sm:text-5xl">
              GOOD TO <span className="text-primary">KNOW</span>
            </h2>
            <div className="space-y-3">
              {SANDBLAST_FAQ.map((item) => (
                <FAQItem key={item.question} {...item} />
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:sticky lg:top-28" variants={fadeInUp}>
            <FinalCTACard className="text-left lg:text-center" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
