import Link from 'next/link';

function Tile({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <Link href={href} className="group relative block h-64 sm:h-72 md:h-80 overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-overlay-40 transition group-hover:bg-overlay-60" />
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <h3 className="font-display text-2xl md:text-3xl tracking-wide2"> {title} </h3>
          <span className="mt-4 inline-flex btn-ghost">Learn more</span>
        </div>
      </div>
    </Link>
  );
}

export default function Tiles() {
  return (
    <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-16">
      <Tile title="WHO WE ARE" href="/about" image="/content/home/tile-who.svg" />
      <Tile title="OUR FACILITY" href="/facility" image="/content/home/tile-facility.svg" />
      <Tile title="MEMBERSHIP" href="/membership" image="/content/home/tile-membership.svg" />
    </section>
  );
}
