import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <section className="-mt-10 relative z-10 bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        {/* UF mark */}
        <div className="relative mx-auto h-20 w-20">
          <Image
            src="/content/home/Unify-Fitness.png"
            alt="UF mark"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-wide2">
          UNIFY FITNESS
        </h2>

        {/* Copy */}
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
          We offer options for all skill levels, creating personal experiences for beginners building a
          foundation and advanced trainees forging a powerful physique.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/trainers"
            className="px-5 py-2 rounded-md border border-neutral-400 text-neutral-200 uppercase tracking-wide2 hover:bg-neutral-800 transition"
          >
            Meet the Trainers
          </Link>
          <Link
            href="/membership"
            className="px-5 py-2 rounded-md bg-primary text-neutral-950 uppercase tracking-wide2 hover:bg-primary/80 transition"
          >
            Explore Membership
          </Link>
        </div>
      </div>
    </section>
  );
}