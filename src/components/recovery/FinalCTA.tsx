'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Map from '@/components/home/Map';
import { fadeInUp, staggerChildren } from '@/components/sandblast/motion';
import BookNow from './BookNow';
import RecoveryButton from './RecoveryButton';

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-24">
      <motion.div
        className="mx-auto max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerChildren}
      >
        <motion.div className="mx-auto max-w-3xl text-center" variants={fadeInUp}>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-normal sm:text-5xl sm:tracking-wide2">
            VISIT THE RECOVERY STUDIO
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Unify Recovery is a private suite inside Unify Gym on Vernon Avenue. Book a session, or
            reach out with questions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookNow className="w-full sm:w-auto" />
            <RecoveryButton href="/contact" variant="outline" className="w-full sm:w-auto">
              Contact Us
            </RecoveryButton>
          </div>
        </motion.div>

        <motion.div className="mt-12" variants={fadeInUp}>
          <Map contained />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
          variants={fadeInUp}
        >
          <div>
            <h3 className="font-display text-2xl leading-[1.15] tracking-normal sm:text-4xl sm:tracking-wide2">
              COME SEE THE SUITE
            </h3>
            <p className="mt-3 text-sm uppercase tracking-wide2 text-white/45">
              Have questions, or want to talk about a session? We would love to hear from you.
            </p>
            <div className="mt-6 space-y-1 text-white/70">
              <div className="font-semibold text-white">Unify Recovery</div>
              <div>Inside Unify Gym</div>
              <div>664 Vernon Avenue, Glencoe, IL 60022</div>
              <a className="text-primary hover:underline" href="tel:+12245229040">
                (224) 522-9040
              </a>
              <div>
                <a className="text-primary hover:underline" href="mailto:info@unifygym.com">
                  info@unifygym.com
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-80">
            <Image
              src="/content/recovery/suite-cta-2k.jpg"
              alt="Unify Recovery spa treatment suite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
