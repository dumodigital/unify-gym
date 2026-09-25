'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RECOVERY_FAQ } from '@/lib/recovery-data';

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof RECOVERY_FAQ)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full overflow-hidden rounded-lg border-2 border-primary/80 bg-neutral-800/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[4.75rem] w-full cursor-pointer items-center justify-between px-4 py-4 text-left transition-colors hover:bg-white/5 md:h-36 md:min-h-0 md:px-6 md:py-0"
        aria-expanded={isOpen}
      >
        <span className="flex-1 pr-3 text-base font-medium italic leading-snug text-white md:pr-4 md:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isOpen && (
        <p className="px-4 pb-5 text-sm italic leading-relaxed text-white/90 md:px-6 md:pb-8 md:text-base">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white/5 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <p className="mb-4 text-base italic text-primary/80 sm:text-lg">All You Need To Know</p>
          <h2 className="text-3xl font-bold italic sm:text-4xl md:text-6xl">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-2">
          {RECOVERY_FAQ.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
