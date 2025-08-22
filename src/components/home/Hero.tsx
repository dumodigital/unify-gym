import Image from 'next/image';
import Link from 'next/link';
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <section className="relative isolate h-[90vh] min-h-[560px] overflow-hidden">
      <Image
        src="/content/home/home.jpg"
        alt="Unify Gym interior"
        fill
        priority
        className="object-cover"
      />
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Clean heading */}
          <div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide2 text-white font-bold drop-shadow-lg">
              UNIFY GYM
            </h1>
          </div>
          
          {/* Typewriter text */}
          <div>
            <TypewriterText />
          </div>
          
          {/* Clean buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Book Your Session
            </a>
            <Link 
              href="/facility"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Explore the Gym
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
