import Image from 'next/image';

export default function Brand() {
  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      <div className="absolute left-4 md:left-12 top-6 text-7xl md:text-8xl font-display watermark-vertical select-none">GYM</div>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="mx-auto relative h-24 w-24">
          <Image src="/content/home/brand.jpg" alt="UF mark" fill className="object-cover rounded-full" />
        </div>
        <h2 className="mt-6 font-display text-3xl tracking-wide2">UNIFY FITNESS</h2>
        <p className="mt-4 text-neutral-700">
          Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
          We challenge the norm with options for all skill levels to create a personal experience—from
          beginners building a foundation to advanced trainees forging powerful physiques.
        </p>
      </div>
    </section>
  );
}
