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
        className="object-cover scale-105 animate-[zoom-in_1.5s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center space-y-8 animate-[fade-up_1s_ease-out_0.5s_both]">
          <div className="inline-block border-2 border-white/80 px-12 py-8 backdrop-blur-sm bg-white/5 rounded-lg shadow-2xl animate-[glow_2s_ease-in-out_infinite_alternate]">
            <h1 className="font-display text-6xl md:text-8xl tracking-wide2 text-white drop-shadow-lg">
              UNIFY GYM
            </h1>
          </div>
          
          <TypewriterText />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              <span className="relative z-10">Book Your Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <Link 
              href="/facility" 
              className="btn-ghost hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Explore the gym
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
