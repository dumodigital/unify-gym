import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaHeartPulse, FaUsers } from 'react-icons/fa6';

export default function Brand() {
  return (
    // Dark band that overlaps hero and fades in/out
    <section className="-mt-10 bg-neutral-950 text-neutral-50 top-vignette bottom-vignette relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* Floating brand card with enhanced styling */}
        <div className="mx-auto max-w-4xl rounded-[2rem] brand-card shadow-2xl overflow-hidden">
          {/* Enhanced top accent with gradient */}
          <div className="h-1.5 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800" />

          <div className="px-8 md:px-12 py-12 md:py-16">
            {/* Floating brand mark */}
            <div className="mx-auto mb-8 grid place-items-center">
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-neutral-100 bg-white shadow-lg brand-mark">
                <Image
                  src="/content/home/brand.jpg"
                  alt="UF mark"
                  fill
                  className="object-cover rounded-full"
                  sizes="64px"
                />
              </span>
            </div>

            {/* Enhanced headline with better spacing */}
            <h2 className="text-center font-display tracking-wide2 text-3xl md:text-5xl mb-2">
              UNIFY FITNESS
            </h2>
            
            {/* Subtle tagline */}
            <div className="text-center mb-8">
              <div className="inline-block h-0.5 w-16 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </div>

            {/* Enhanced copy with better typography */}
            <p className="text-center text-neutral-600 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
              Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
              We challenge the norm with options for all skill levels to create a personal experience—from
              beginners building a solid foundation to advanced trainees forging a powerful physique.
            </p>

            {/* Enhanced feature cards with better spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <Feature icon={<FaDumbbell />} label="Certified Coaches" />
              <Feature icon={<FaHeartPulse />} label="Strength & Conditioning" />
              <Feature icon={<FaUsers />} label="Community First" />
            </div>

            {/* Enhanced CTAs with better spacing and styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/trainers" 
                className="btn-outline-enhanced inline-flex items-center gap-2 rounded-xl px-8 py-4 text-neutral-900 uppercase tracking-wide2 font-semibold text-sm w-full sm:w-auto justify-center"
              >
                <FaUsers className="text-base" />
                Meet the trainers
              </Link>
              <Link
                href="/membership"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-white uppercase tracking-wide2 font-semibold text-sm w-full sm:w-auto justify-center"
              >
                <FaDumbbell className="text-base" />
                Explore membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced ultra-subtle vertical watermark */}
      <div className="pointer-events-none absolute left-3 sm:left-8 top-12 bottom-12 hidden lg:block">
        <div className="h-full text-9xl font-display watermark-vertical opacity-[0.03] text-white/60 select-none">
          GYM
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
    </section>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="feature-card flex items-center justify-center gap-3 rounded-2xl border border-neutral-100 px-6 py-5 text-neutral-700 group">
      <span className="text-neutral-800 text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <span className="uppercase tracking-wide2 text-xs font-medium">{label}</span>
    </div>
  );
}