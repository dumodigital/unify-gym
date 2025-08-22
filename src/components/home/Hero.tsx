import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate h-[90vh] min-h-[560px]">
      <Image
        src="/content/home/Unify-gym-hero.webp"
        alt="Unify Gym interior"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-soft-light" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center">
          <div className="inline-block border border-white/60 px-10 py-6">
            <h1 className="font-display text-6xl md:text-7xl tracking-wide2">UNIFY GYM</h1>
          </div>
          <p className="mt-6 max-w-2xl text-neutral-200 mx-auto text-lg">
            Unifying our community by enhancing the Mind &amp; Body.
          </p>
          <Link href="/facility" className="mt-8 btn-ghost">Explore the gym</Link>
        </div>
      </div>
    </section>
  );
}
