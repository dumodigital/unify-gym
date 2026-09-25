'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Activity,
  Check,
  Flame,
  Magnet,
  Sun,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import { NOVAPOD_THERAPIES } from '@/lib/recovery-data';
import BookNow from './BookNow';
import CardCarousel from './CardCarousel';

const ease = [0.22, 1, 0.36, 1] as const;

const novapodStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const novapodFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease },
  },
};

const novapodImage = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease },
  },
};

const THERAPY_ICONS: Record<(typeof NOVAPOD_THERAPIES)[number]['icon'], LucideIcon> = {
  Flame,
  Sun,
  Waves,
  Magnet,
  Activity,
  Wind,
};

const SAUNA_BENEFITS = [
  'Detoxification',
  'Faster Recovery',
  'Improved Circulation',
  'Better Sleep',
  'Stress Relief',
  'Joint & Muscle Comfort',
  'Healthier Skin',
  'Overall Wellness',
] as const;

const KORESCULPT_BENEFITS = [
  'Contours, smooths, and tightens stubborn areas: thighs, hips, stomach, and arms.',
  'Stimulates lymphatic drainage and circulation.',
  'Breaks down dense, fibrous tissue and the look of cellulite.',
  'Non-invasive, with visible changes you can feel after one session.',
  'Feels like a deep tissue massage, without the discomfort.',
] as const;

const KORETHERM_BENEFITS = [
  'Alternating heat and cold to trigger a rapid metabolic response.',
  'Targets stubborn fat that resists diet and exercise: abdomen, thighs, and love handles.',
  'Combines thermal contrast with muscle stimulation.',
  'Supports fat metabolism and tissue tightening.',
  'Non-invasive and customizable, in efficient 30-minute sessions.',
] as const;

export default function ServiceDeepDives() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-12 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-28">
        <NovaPod />
        <Sauna />
        <BodySculpting />
      </div>
    </section>
  );
}

function NovaPod() {
  return (
    <motion.div
      id="recovery-novapod"
      className="scroll-mt-32 md:scroll-mt-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={novapodStagger}
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={novapodImage}
          className="relative h-full min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[520px]"
        >
          {/* PLACEHOLDER — need real NovaPod product photo */}
          <Image
            src="/content/recovery/novapod-pillar.jpg"
            alt="NovaPod full-body recovery session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div className="flex min-w-0 flex-col justify-center">
          <motion.div variants={novapodFade}>
            <p className="text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm">
              Full-Body Therapy
            </p>
            <div className="mt-2 h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            className="mt-5 font-display text-[1.65rem] font-bold leading-[1.15] sm:text-5xl"
            variants={novapodFade}
          >
            Six advanced therapies.
            <span className="block">
              One incredible <span className="text-primary">experience.</span>
            </span>
          </motion.h2>

          <div className="mt-8 md:hidden">
            <CardCarousel label="NovaPod therapies">
              {NOVAPOD_THERAPIES.map((therapy) => {
                const Icon = THERAPY_ICONS[therapy.icon];
                return (
                  <article
                    key={therapy.title}
                    className="flex min-h-[180px] flex-col rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-white">{therapy.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{therapy.description}</p>
                  </article>
                );
              })}
            </CardCarousel>
          </div>

          <ul className="mt-8 hidden space-y-5 md:block">
            {NOVAPOD_THERAPIES.map((therapy) => {
              const Icon = THERAPY_ICONS[therapy.icon];
              return (
                <motion.li
                  key={therapy.title}
                  variants={novapodFade}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-white sm:text-xl">{therapy.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
                      {therapy.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <motion.div className="mt-10" variants={novapodFade}>
            <BookNow className="w-full sm:w-auto" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Sauna() {
  return (
    <motion.div
      id="recovery-sauna"
      className="scroll-mt-32 md:scroll-mt-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={novapodStagger}
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={novapodImage}
          className="relative h-full min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:col-start-2 lg:row-start-1 lg:min-h-[520px]"
        >
          {/* PLACEHOLDER — need real ClearLight infrared sauna photo */}
          <Image
            src="/content/recovery/clearlight-pillar.jpg"
            alt="ClearLight infrared sauna"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div className="flex min-w-0 flex-col justify-center lg:col-start-1 lg:row-start-1">
          <motion.div variants={novapodFade}>
            <p className="text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm">
              ClearLight Infrared Sauna
            </p>
            <div className="mt-2 h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            className="mt-5 font-display text-[1.65rem] font-bold leading-[1.15] sm:text-5xl"
            variants={novapodFade}
          >
            Feel the difference of
            <span className="mt-0 block text-primary">true infrared.</span>
          </motion.h2>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            variants={novapodFade}
          >
            Unlike traditional saunas that heat the surrounding air, infrared therapy warms your
            body directly, allowing therapeutic heat to penetrate muscles and joints while remaining
            comfortable.
          </motion.p>

          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-8">
            {SAUNA_BENEFITS.map((benefit) => (
              <motion.li
                key={benefit}
                variants={novapodFade}
                className="flex items-center gap-3 text-sm text-white/85 sm:text-base"
              >
                <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.25} />
                <span className="font-display text-white">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div className="mt-10" variants={novapodFade}>
            <BookNow className="w-full sm:w-auto" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function BodySculpting() {
  return (
    <div id="recovery-sculpting" className="scroll-mt-32 space-y-16 sm:space-y-24 md:scroll-mt-40">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={novapodStagger}
      >
        <motion.p
          className="text-xs font-medium uppercase tracking-wide2 text-primary sm:text-sm"
          variants={novapodFade}
        >
          Shape + Tighten
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-[1.65rem] font-bold leading-[1.15] sm:text-5xl"
          variants={novapodFade}
        >
          Shape and <span className="text-primary">tighten.</span>
          <span className="block">No downtime.</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg"
          variants={novapodFade}
        >
          Two non-invasive technologies to contour, tone, and target the areas diet and exercise
          miss.
        </motion.p>
      </motion.div>

      <KoreSculpt />
      <KoreTherm />
    </div>
  );
}

function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((benefit) => (
        <motion.li
          key={benefit}
          variants={novapodFade}
          className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.25} />
          <span>{benefit}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function KoreSculpt() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={novapodStagger}
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={novapodImage}
          className="relative h-full min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[520px]"
        >
          <Image
            src="/content/recovery/koresculpt-2k.jpg"
            alt="KoreSCULPT treatment suite"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div className="flex min-w-0 flex-col justify-center">
          <motion.div variants={novapodFade}>
            <p className="text-xs font-medium uppercase leading-snug tracking-wide text-primary sm:text-sm sm:tracking-wide2">
              KoreSCULPT · Tissue Sculpting & Lymphatic Flow
            </p>
            <div className="mt-2 h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            className="mt-5 font-display text-[1.65rem] font-bold leading-[1.15] sm:text-5xl"
            variants={novapodFade}
          >
            Sculpt, smooth, and <span className="text-primary">tighten.</span>
            <span className="block">No downtime.</span>
          </motion.h2>

          <BenefitList items={KORESCULPT_BENEFITS} />

          <motion.div className="mt-10" variants={novapodFade}>
            <BookNow className="w-full sm:w-auto" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function KoreTherm() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={novapodStagger}
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={novapodImage}
          className="relative h-full min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:col-start-2 lg:row-start-1 lg:min-h-[520px]"
        >
          <Image
            src="/content/recovery/koretherm.jpg"
            alt="KoreTHERM contrast therapy suite"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div className="flex min-w-0 flex-col justify-center lg:col-start-1 lg:row-start-1">
          <motion.div variants={novapodFade}>
            <p className="text-xs font-medium uppercase leading-snug tracking-wide text-primary sm:text-sm sm:tracking-wide2">
              KoreTHERM · Fire & Ice Metabolic Activation
            </p>
            <div className="mt-2 h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            className="mt-5 font-display text-[1.65rem] font-bold leading-[1.15] sm:text-5xl"
            variants={novapodFade}
          >
            Fire and ice.
            <span className="block">
              Rapid metabolic <span className="text-primary">activation.</span>
            </span>
          </motion.h2>

          <BenefitList items={KORETHERM_BENEFITS} />
        </div>
      </div>
    </motion.div>
  );
}
