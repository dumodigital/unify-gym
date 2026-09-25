import Image from 'next/image';
import Link from 'next/link';
import TypewriterText from './TypewriterText';
import SplitText from './SplitText';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[75svh] overflow-hidden md:h-[100vh] md:min-h-[700px]">
      <Image
        src="/content/home/optimized/home.webp"
        alt="Unify Gym interior"
        fill
        priority
        className="object-cover"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="max-w-5xl space-y-4 text-center sm:space-y-8">
          <div className="overflow-hidden">
            <SplitText
              text="UNIFY FITNESS"
              className="font-display text-4xl font-bold tracking-wide2 text-white drop-shadow-lg whitespace-nowrap sm:text-5xl md:text-8xl lg:text-9xl"
              splitType="chars"
              delay={80}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 100, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>

          <div className="typewriter-delayed">
            <TypewriterText />
          </div>

          <div className="buttons-delayed flex flex-col items-center justify-center gap-3 pt-2 pointer-events-auto sm:flex-row sm:gap-6 sm:pt-8">
            <a
              href="https://calendly.com/unifygym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-h-[48px] min-w-[140px] rounded-lg border-2 border-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black sm:py-3 sm:text-sm"
            >
              Join Today
            </a>
            <Link
              href="/about"
              className="inline-block min-h-[48px] min-w-[140px] rounded-lg border-2 border-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              Explore the Gym
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
