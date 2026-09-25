'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  BOOKABLES,
  MEMBERSHIP_PERKS,
  NOVAPOD_MENU,
  SCULPTING_MENU,
  type Bookable,
  type BookableId,
} from '@/lib/recovery-data';
import { fadeInUp, staggerChildren } from '@/components/sandblast/motion';
import BookButton from './BookButton';
import CardCarousel from './CardCarousel';

function SlimOfferBar({ id }: { id: BookableId }) {
  const item = BOOKABLES[id];
  return (
    <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:h-12 sm:px-10 sm:py-0 lg:px-12">
      <p className="min-w-0 text-sm leading-snug text-white sm:truncate sm:text-base">
        <span className="font-display tracking-wide2">{item.name}</span>
        <span className="mt-0.5 block text-white/50 sm:mt-0 sm:inline"> · {item.benefit}</span>
      </p>
      <div className="flex shrink-0 flex-col items-end gap-1.5 sm:flex-row sm:items-center sm:gap-5">
        <p className="font-display text-lg leading-none text-white">{item.priceLabel}</p>
        <BookButton bookableId={id} variant="outline" size="compact">
          Book
        </BookButton>
      </div>
    </div>
  );
}

function PricingCard({ item }: { item: Bookable }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex h-full min-h-[280px] flex-col rounded-2xl border p-6 sm:p-7 ${
        item.highlight
          ? 'border-primary bg-primary/5 shadow-[0_0_40px_-12px_rgba(0,194,255,0.45)]'
          : 'border-white/10 bg-white/5'
      }`}
    >
      {item.badge ? (
        <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-wide2 text-white">
          {item.badge}
        </span>
      ) : (
        <span className="mb-4 h-6" aria-hidden="true" />
      )}
      <h3 className="font-display text-xl tracking-wide2 text-white sm:text-2xl">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{item.benefit}</p>
      <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="break-words font-display text-2xl leading-tight text-white sm:text-3xl">
          {item.priceLabel}
        </p>
        {item.compareAtPrice && (
          <p className="font-display text-lg text-white/35 line-through sm:text-xl">
            {item.compareAtPrice}
          </p>
        )}
      </div>
      <BookButton
        bookableId={item.id}
        variant={item.highlight ? 'primary' : 'outline'}
        className="mt-6 w-full"
      >
        Book
      </BookButton>
    </motion.article>
  );
}

const A_LA_CARTE: {
  title: string;
  ids: BookableId[];
  label: string;
  desktop: 'fill' | 'third';
  slimId?: BookableId;
}[] = [
  { title: 'NovaPod', ids: NOVAPOD_MENU, label: 'NovaPod pricing', desktop: 'fill' },
  {
    title: 'Body Sculpting (KoreSCULPT & KoreTHERM)',
    ids: SCULPTING_MENU,
    label: 'Body sculpting pricing',
    desktop: 'fill',
    slimId: 'kore-intro',
  },
];

export default function Menu() {
  const membership = BOOKABLES.membership;

  return (
    <section id="menu" className="scroll-mt-32 py-12 sm:py-24 md:scroll-mt-40">
      <motion.div
        className="mx-auto max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        <motion.p
          className="text-center text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm"
          variants={fadeInUp}
        >
          THE MENU
        </motion.p>
        <motion.h2
          className="mt-3 w-full text-center font-display text-3xl font-bold leading-[1.15] tracking-normal sm:text-5xl sm:tracking-wide2 md:text-6xl"
          variants={fadeInUp}
        >
          Choose your <span className="text-primary">session.</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/60 sm:text-base"
          variants={fadeInUp}
        >
          One visit, a package, or unlimited.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-primary bg-primary/5 p-5 shadow-[0_0_80px_-16px_rgba(0,194,255,0.5)] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.16),transparent_55%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full bg-primary px-4 py-1.5 text-xs font-medium uppercase tracking-wide2 text-white">
                  BEST VALUE
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15] tracking-normal sm:mt-5 sm:text-4xl sm:tracking-wide2 md:text-5xl">
                  Unlimited Sauna Membership
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
                  {membership.benefit}
                </p>
                <ul className="mt-6 space-y-3">
                  {MEMBERSHIP_PERKS.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex shrink-0 flex-col items-start lg:items-end">
                <p className="font-display text-4xl font-bold tracking-wide2 text-white sm:text-6xl">
                  {membership.priceLabel}
                </p>
                <BookButton bookableId="membership" className="mt-6 w-full sm:w-auto">
                  Start Unlimited
                </BookButton>
              </div>
            </div>
          </div>

          <SlimOfferBar id="sauna-dropin" />
        </motion.div>

        {A_LA_CARTE.map((group) => (
          <motion.div key={group.title} className="mt-14" variants={fadeInUp}>
            <h3 className="mb-5 font-display text-lg tracking-wide2 text-white/80">{group.title}</h3>
            <CardCarousel label={group.label} desktop={group.desktop}>
              {group.ids.map((id) => (
                <PricingCard key={id} item={BOOKABLES[id]} />
              ))}
            </CardCarousel>
            {group.slimId ? <SlimOfferBar id={group.slimId} /> : null}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
