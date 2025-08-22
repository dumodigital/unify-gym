import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaHeartPulse, FaUsers } from 'react-icons/fa6';

export default function Brand() {
  return (
    // Dark band that overlaps hero and fades in/out
    <section className="-mt-10 bg-neutral-950 text-neutral-50 top-vignette bottom-vignette relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* ACTUAL Floating brand card - ensuring white background shows */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-white text-neutral-900 shadow-2xl overflow-hidden border border-white/20">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800" />

          <div className="bg-white px-8 md:px-12 py-12 md:py-16">
            {/* Brand mark */}
            <div className="mx-auto mb-8 grid place-items-center">
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-neutral-200 bg-white shadow-lg">
                <Image
                  src="/content/home/brand.jpg"
                  alt="UF mark"
                  fill
                  className="object-cover rounded-full"
                  sizes="64px"
                />
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-center font-display tracking-wide2 text-3xl md:text-4xl text-neutral-900 mb-2">
              UNIFY FITNESS
            </h2>
            
            {/* Divider */}
            <div className="text-center mb-8">
              <div className="inline-block h-0.5 w-16 bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />
            </div>

            {/* Copy */}
            <p className="text-center text-neutral-600 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
              Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
              We challenge the norm with options for all skill levels to create a personal experience—from
              beginners building a solid foundation to advanced trainees forging a powerful physique.
            </p>

            {/* Feature cards - FIXED to be visible */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="flex items-center justify-center gap-3 rounded-xl border-2 border-neutral-200 bg-white px-6 py-4 text-neutral-700 shadow-sm hover:shadow-md transition-all hover:border-neutral-300">
                <FaDumbbell className="text-neutral-800 text-lg" />
                <span className="uppercase tracking-wide text-xs font-semibold text-neutral-800">Certified Coaches</span>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-xl border-2 border-neutral-200 bg-white px-6 py-4 text-neutral-700 shadow-sm hover:shadow-md transition-all hover:border-neutral-300">
                <FaHeartPulse className="text-neutral-800 text-lg" />
                <span className="uppercase tracking-wide text-xs font-semibold text-neutral-800">Strength & Conditioning</span>
              </div>
              <div className="flex items-center justify-center gap-3 rounded-xl border-2 border-neutral-200 bg-white px-6 py-4 text-neutral-700 shadow-sm hover:shadow-md transition-all hover:border-neutral-300">
                <FaUsers className="text-neutral-800 text-lg" />
                <span className="uppercase tracking-wide text-xs font-semibold text-neutral-800">Community First</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/trainers" 
                className="inline-flex items-center gap-2 rounded-xl border-2 border-neutral-900 bg-white px-8 py-4 text-neutral-900 uppercase tracking-wide font-semibold text-sm hover:bg-neutral-900 hover:text-white transition-all w-full sm:w-auto justify-center"
              >
                <FaUsers className="text-base" />
                Meet the trainers
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 text-white uppercase tracking-wide font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg w-full sm:w-auto justify-center"
              >
                <FaDumbbell className="text-base" />
                Explore membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark on the dark background */}
      <div className="pointer-events-none absolute left-6 top-12 bottom-12 hidden lg:block">
        <div className="h-full text-8xl font-display watermark-vertical opacity-[0.04] text-white select-none">
          GYM
        </div>
      </div>
    </section>
  );
}