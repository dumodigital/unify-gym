import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <section className="-mt-10 relative z-10 bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        {/* UF mark - Fixed to show properly */}
        <div className="relative mx-auto h-24 w-24 mb-8">
          <Image
            src="/content/home/Unify-Fitness.png"
            alt="Unify Fitness Logo"
            fill
            className="object-contain brightness-0 invert"
            sizes="96px"
          />
        </div>

        {/* Heading - Made much bigger */}
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide2 mb-6">
          UNIFY FITNESS
        </h2>

        {/* Copy */}
        <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
          We offer options for all skill levels, creating personal experiences for beginners building a
          foundation and advanced trainees forging a powerful physique.
        </p>

        {/* CTAs - Fixed hover effects and styling */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/trainers"
            className="px-8 py-4 rounded-lg border-2 border-neutral-400 text-neutral-200 uppercase tracking-wide2 text-sm font-semibold hover:bg-neutral-800 hover:border-neutral-300 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Meet the Trainers
          </Link>
          <Link
            href="/membership"
            className="px-8 py-4 rounded-lg bg-white text-neutral-950 uppercase tracking-wide2 text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Explore Membership
          </Link>
        </div>
      </div>
    </section>
  );
}