'use client';
import Link from 'next/link';
import { useState } from 'react';
import DarkVeil from '@/components/ui/DarkVeil';

export default function Brand() {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <section 
      className="-mt-10 relative z-10 bg-black text-neutral-50 overflow-hidden min-h-[500px]"
    >
      {/* Premium sophisticated background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle gradient movement */}
        <div className="absolute inset-0 w-full h-full brand-premium-gradient" />
        
        {/* Elegant light rays */}
        <div className="absolute inset-0 w-full h-full brand-light-rays" />
        
        {/* WebGL background overlay */}
        <div className="absolute inset-0 w-full h-full opacity-50">
          {isMounted && (
            <DarkVeil
              hueShift={0}
              noiseIntensity={0.01}
              scanlineIntensity={0.005}
              speed={0.8}
              scanlineFrequency={0.001}
              warpAmount={0.05}
              resolutionScale={1.0}
            />
          )}
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        {/* Heading without animation */}
        <div className="relative mb-6">
          <h2 className="relative z-10 font-display text-5xl md:text-6xl lg:text-7xl tracking-wide2">
            UNIFY FITNESS
          </h2>
        </div>

        {/* Copy without animation */}
        <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto mb-10">
          Glencoe's premier fitness center unifying Mind, Body &amp; Spirit through expert coaching.
          Our certified personal trainers create customized experiences for every fitness level – from beginners 
          building their foundation to advanced athletes achieving peak performance.
        </p>

        {/* CTAs without animation delays */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/trainers"
            className="px-8 py-4 rounded-lg border border-white/20 text-neutral-200 uppercase tracking-wide2 text-sm font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-500 ease-out transform hover:-translate-y-0.5"
          >
            Meet the Trainers
          </Link>
          <Link
            href="/membership"
            className="px-8 py-4 rounded-lg bg-white text-neutral-950 uppercase tracking-wide2 text-sm font-semibold hover:bg-neutral-100 transition-all duration-500 ease-out transform hover:-translate-y-0.5"
          >
            Explore Membership
          </Link>
        </div>
      </div>
    </section>
  );
}