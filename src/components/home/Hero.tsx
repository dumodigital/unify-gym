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
          
          {/* Minimalist buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <span>📅</span>
                <span>Book Your Session</span>
              </span>
            </a>
            <Link 
              href="/facility"
              className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              Explore the Gym
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
