import Link from 'next/link';
import Map from '@/components/home/Map';

export default function Contact() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl tracking-wide2 md:text-5xl">VISIT US IN GLENCOE</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Unify Fitness is on Vernon Avenue, in the heart of the North Shore. Come train, recover,
            and see the space in person.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide2 text-neutral-950 transition-colors hover:bg-neutral-100"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Map contained />
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl tracking-wide2 sm:text-4xl">COME SEE THE GYM</h3>
            <p className="mt-3 text-sm uppercase tracking-wide2 text-neutral-500">
              Have questions, or want to talk about joining? We would love to hear from you.
            </p>
            <div className="mt-6 space-y-1 text-neutral-300">
              <div className="font-semibold text-neutral-100">Unify Fitness</div>
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
            <img
              src="/content/home/about.jpg"
              alt="Unify Fitness in Glencoe"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
