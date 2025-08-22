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
      {/* Much darker overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 grid place-items-center px-4">
        <div className="text-center space-y-10 max-w-5xl">
          {/* Main heading with solid background */}
          <div className="bg-black/90 border-4 border-white px-20 py-12 rounded-xl shadow-2xl">
            <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] tracking-wide2 text-white font-black">
              UNIFY GYM
            </h1>
          </div>
          
          {/* Typewriter text with solid background */}
          <div className="bg-black/90 rounded-xl p-8 border-2 border-white/50">
            <TypewriterText />
          </div>
          
          {/* Buttons with solid backgrounds */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <a 
              href="https://calendly.com/unifygym"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#00C2FF', color: 'white' }}
              className="inline-block px-12 py-6 rounded-xl font-black uppercase tracking-wide text-xl border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              📅 BOOK YOUR SESSION
            </a>
            <Link 
              href="/facility"
              className="inline-block bg-white text-black px-10 py-5 rounded-xl font-bold uppercase tracking-wide text-lg border-4 border-white shadow-2xl hover:bg-gray-100 transition-all duration-300"
            >
              EXPLORE THE GYM
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
