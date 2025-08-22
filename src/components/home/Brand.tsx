import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    // slight overlap so it "belongs" to the hero
    <section className="-mt-12 relative z-10 bg-white text-neutral-900">
      {/* tuck into hero with a soft top fade */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

      <div className="relative grain overflow-hidden">
        {/* faint vertical watermark, very subtle */}
        <div className="absolute left-6 md:left-14 top-8 text-7xl md:text-8xl font-display watermark-vertical select-none">
          GYM
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          {/* mini UF mark */}
          <div className="mx-auto mb-6 grid place-items-center">
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
          <h2 className="text-center font-display tracking-wide2 text-3xl md:text-4xl">
            UNIFY FITNESS
          </h2>

          {/* delicate divider */}
          <div className="mx-auto mt-4 w-40 md:w-56 hr-fade" />

          {/* copy + micro‑features + CTAs */}
          <div className="mx-auto mt-6 grid max-w-3xl gap-8">
            <p className="text-center text-neutral-700 leading-relaxed">
              Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
              We challenge the norm with options for all skill levels to create a personal experience—from
              beginners building a solid foundation to advanced trainees forging a powerful physique.
            </p>

            {/* stat chips (keeps it lively without heavy visuals) */}
            <ul className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-wide">
              <li className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600">Certified Coaches</li>
              <li className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600">Strength • Conditioning</li>
              <li className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-600">Community First</li>
            </ul>

            {/* dual CTAs: outline + solid dark */}
            <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}