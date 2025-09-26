import Link from 'next/link';
import Image from 'next/image';

function Tile({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <Link href={href} className="group relative block h-64 sm:h-72 md:h-80 overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-overlay-40 transition group-hover:bg-overlay-60 pointer-events-none" />
      <div className="absolute inset-0 grid place-items-center text-center pointer-events-none">
        <div className="pointer-events-auto">
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
      <Tile title="WHO WE ARE" href="/about" image="/content/home/hello.jpg" />
      <Tile title="OUR FACILITY" href="/about" image="/content/home/facility.jpg" />
      <Tile title="MEMBERSHIP" href="/membership" image="/content/home/jump.jpg" />
    </section>
  );
}
