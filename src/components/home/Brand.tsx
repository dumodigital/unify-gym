import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaHeartPulse, FaUsers } from 'react-icons/fa6';

export default function Brand() {
  return (
    // Dark band that overlaps hero and fades in/out
    <section className="-mt-10 bg-neutral-950 text-neutral-50 top-vignette bottom-vignette relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Floating brand card */}
        <div className="mx-auto max-w-3xl rounded-3xl bg-white text-neutral-900 card-ring shadow-xl overflow-hidden">
          {/* small top accent bar to echo the brand */}
          <div className="h-1 bg-neutral-900" />

          <div className="px-6 md:px-10 py-10 md:py-12">
            {/* mini UF mark */}
            <div className="mx-auto mb-5 grid place-items-center">
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
                <Image
                  src="/content/home/brand.jpg"
                  alt="UF mark"
                  fill
                  className="object-cover rounded-full"
                  sizes="56px"
                />
              </span>
            </div>

            {/* headline */}
            <h2 className="text-center font-display tracking-wide2 text-[28px] md:text-4xl">
              UNIFY FITNESS
            </h2>

            {/* copy */}
            <p className="mt-4 text-center text-neutral-700 leading-relaxed">
              Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
              We challenge the norm with options for all skill levels to create a personal experience—from
              beginners building a solid foundation to advanced trainees forging a powerful physique.
            </p>

            {/* mini features (icon row) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <Feature icon={<FaDumbbell />} label="Certified Coaches" />
              <Feature icon={<FaHeartPulse />} label="Strength & Conditioning" />
              <Feature icon={<FaUsers />} label="Community First" />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/trainers" className="btn-outline-dark">Meet the trainers</Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2 text-white uppercase tracking-wide2 hover:bg-neutral-800 transition"
              >
                Explore membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ultra-subtle vertical watermark on the left edge of the band (not inside the card) */}
      <div className="pointer-events-none absolute left-2 sm:left-6 top-10 bottom-10 hidden md:block">
        <div className="h-full text-8xl font-display watermark-vertical opacity-[0.05] text-white/80 select-none">
          GYM
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200/70 bg-white px-4 py-3 text-neutral-700">
      <span className="text-neutral-900">{icon}</span>
      <span className="uppercase tracking-wide2 text-[11px]">{label}</span>
    </div>
  );
}