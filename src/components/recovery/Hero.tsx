'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import BookNow from './BookNow';

const MARQUEE = [
  'Recover faster',
  'Sleep deeper',
  'Melt away soreness',
  'Less stress, more energy',
  'Tighten and tone',
  'Glowing, healthier skin',
  'Feel years younger',
];

const AVATARS = [
  '/content/home/mel.jpg',
  '/content/home/joe.jpg',
  '/content/home/maryb.jpg',
  '/content/home/jamesh.jpg',
];

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-8 whitespace-nowrap pr-8 text-sm font-bold uppercase tracking-wide2 text-white sm:text-base"
        >
          <span>{item}</span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className="relative z-10 shrink-0 overflow-hidden border-y border-white/10 bg-black">
      <div className="animate-recovery-marquee flex w-max py-4 sm:py-5">
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="recovery-hero"
      className="relative flex flex-col overflow-hidden md:h-[100vh] md:min-h-[700px]"
    >
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0">
          <Image
            src="/content/recovery/hero-suite-2k.jpg"
            alt="Unify Recovery suite"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex h-full min-w-0 flex-col site-header-offset">
          <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-1 items-center justify-start px-4 pb-8 pt-6 sm:pb-20 sm:pt-10">
            <div className="flex w-full min-w-0 max-w-2xl flex-col items-start text-left">
              {/* TODO confirm real numbers before launch */}
              <div className="mb-4 flex w-full min-w-0 flex-col items-start gap-2 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map((src) => (
                    <div
                      key={src}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white/80"
                    >
                      <Image src={src} alt="" fill className="object-cover" sizes="32px" />
                    </div>
                  ))}
                </div>
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <span className="flex text-primary" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-white sm:text-xs sm:tracking-wide2">
                    Rated 4.92/5 · Loved by 500+
                  </p>
                </div>
              </div>

              <h1 className="w-full font-display text-[1.55rem] font-bold leading-[1.15] tracking-normal text-white drop-shadow-md sm:text-5xl sm:tracking-wide2 md:text-6xl lg:text-7xl">
                <span className="block whitespace-nowrap">The North Shore&apos;s</span>
                <span className="block whitespace-nowrap">Most Advanced</span>
                <span className="block whitespace-nowrap">Recovery Studio.</span>
              </h1>

              <p className="mt-4 w-full max-w-xl text-[0.8125rem] font-light leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl">
                Infrared sauna, full-body NovaPod therapy, and results-driven body sculpting, all in
                one private suite.
              </p>

              <div className="mb-2 mt-6 sm:mt-10">
                <BookNow className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
