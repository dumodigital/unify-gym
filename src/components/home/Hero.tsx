import Image from 'next/image';
import Link from 'next/link';
import TypewriterText from './TypewriterText';
import SplitText from './SplitText';

export default function Hero() {
  return (
    <section className="relative isolate h-[100vh] min-h-[700px] overflow-hidden">
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
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center space-y-8 max-w-5xl">
          {/* Animated Heading with SplitText */}
          <div className="overflow-hidden">
            <SplitText
              text="UNIFY FITNESS"
              className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-wide2 text-white font-bold drop-shadow-lg whitespace-nowrap"
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
          
          {/* Typewriter text with delayed entrance */}
          <div className="typewriter-delayed">
            <TypewriterText />
          </div>
          
          {/* Buttons with delayed entrance */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 buttons-delayed">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 rounded-lg"
            >
              Join Today
            </a>
            <Link 
              href="/facility"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 rounded-lg"
            >
              Explore the Gym
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
