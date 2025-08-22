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
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Clean, professional heading */}
          <div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide2 text-white font-bold drop-shadow-2xl">
              UNIFY GYM
            </h1>
          </div>
          
          {/* Typewriter text with subtle background */}
          <div className="backdrop-blur-sm bg-black/30 rounded-lg p-6">
            <TypewriterText />
          </div>
          
          {/* Professional buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-400"
            >
              📅 Book Your Session
            </a>
            <Link 
              href="/facility"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-lg transition-all duration-300"
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
