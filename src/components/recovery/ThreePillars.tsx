'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/components/sandblast/motion';
import CardCarousel from './CardCarousel';
import RecoveryButton from './RecoveryButton';

const PILLARS = [
  {
    href: '#recovery-novapod',
    src: '/content/recovery/novapod-pillar.jpg',
    swapTo: '/content/recovery/novapod-suite.jpg',
    alt: 'NovaPod full-body recovery session',
    eyebrow: 'Full-body therapy',
    headline: 'The NovaPod',
    support: 'Six advanced therapies in one session: infrared heat, red light, and more.',
  },
  {
    href: '#recovery-sauna',
    src: '/content/recovery/clearlight-pillar.jpg',
    swapTo: '/content/recovery/clearlight-sauna.jpg',
    alt: 'ClearLight infrared sauna',
    eyebrow: 'Heat + light',
    headline: 'ClearLight Sauna',
    support: 'True infrared that warms the body directly, not the air around you.',
  },
  {
    href: '#recovery-sculpting',
    src: '/content/recovery/sculpting-pillar.jpg',
    swapTo: '/content/recovery/body-sculpting.jpg',
    alt: 'Body sculpting at Unify Recovery',
    eyebrow: 'Shape + tighten',
    headline: 'Body Sculpting',
    support: 'KoreSCULPT and KoreTHERM. Non-invasive contouring and fat reduction, no downtime.',
  },
] as const;

function PillarCard({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  return (
    <article className="group relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-[580px]">
      {/* placeholder — swap to /content/recovery/… */}
      <Image
        src={pillar.src}
        alt={pillar.alt}
        fill
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 1024px) 82vw, 33vw"
        quality={90}
        data-swap-to={pillar.swapTo}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wide2 text-primary">{pillar.eyebrow}</p>
        <div className="mt-2 h-px w-10 bg-primary" />
        <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-wide2 text-white sm:text-3xl">
          {pillar.headline}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{pillar.support}</p>
        <RecoveryButton href={pillar.href} className="mt-5">
          Learn More
        </RecoveryButton>
      </div>
    </article>
  );
}

export default function ThreePillars() {
  return (
    <section className="py-12 sm:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        <motion.h2
          className="mx-auto w-full max-w-4xl text-center font-display text-[1.65rem] font-bold leading-[1.15] tracking-normal sm:text-5xl sm:tracking-wide2 md:text-6xl"
          variants={fadeInUp}
        >
          Three Ways to Recover.
          <span className="block">
            One Private <span className="text-primary">Suite.</span>
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg"
          variants={fadeInUp}
        >
          Pick the protocol your body needs today. Every session is private, focused, and reserved
          for you.
        </motion.p>

        <div className="mt-10 lg:hidden">
          <CardCarousel label="Recovery services">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.href} pillar={pillar} />
            ))}
          </CardCarousel>
        </div>
        <div className="mt-12 hidden grid-cols-3 gap-6 lg:grid">
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.href} variants={fadeInUp} className="h-full">
              <PillarCard pillar={pillar} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
