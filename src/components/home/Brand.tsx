'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Brand() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="-mt-10 relative z-10 mesh-gradient text-neutral-50 overflow-hidden min-h-screen flex items-center">
      {/* Floating Orbs */}
      <div className="floating-orb w-32 h-32 top-20 left-20 opacity-30" />
      <div className="floating-orb w-24 h-24 top-40 right-32 opacity-20" />
      <div className="floating-orb w-40 h-40 bottom-32 left-1/4 opacity-25" />
      
      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-20 text-center relative z-10">
        {/* Premium Glass Card */}
        <div className="glass-card rounded-3xl p-12 md:p-16 backdrop-blur-xl">
          {/* Enhanced UF Logo with Glow */}
          <div className="relative mx-auto h-28 w-28 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-pulse" />
            <Image
              src="/content/home/Unify-Fitness.png"
              alt="Unify Fitness Logo"
              fill
              className="object-contain brightness-0 invert logo-glow"
              sizes="112px"
            />
          </div>

          {/* Typewriter Heading */}
          <div className="mb-8">
            {mounted && (
              <h2 className="typewriter font-display text-4xl md:text-6xl lg:text-7xl tracking-wide2 font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                UNIFY FITNESS
              </h2>
            )}
          </div>

          {/* Animated Underline */}
          <div className="mx-auto mb-10 h-0.5 w-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[width_2s_ease-in-out_3s_forwards]" 
               style={{animation: mounted ? 'width 2s ease-in-out 3s forwards' : 'none'}} />

          {/* Enhanced Copy */}
          <div className="mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_4s_forwards]"
               style={{animation: mounted ? 'fadeInUp 1s ease-out 4s forwards' : 'none'}}>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
              Our philosophy unifies the 3 major aspects of health &amp; fitness – 
              <span className="text-white font-medium"> Mind, Body &amp; Spirit</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
              We offer options for all skill levels, creating personal experiences for beginners building a
              foundation and advanced trainees forging a powerful physique.
            </p>
          </div>

          {/* Premium Glass Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_5s_forwards]"
               style={{animation: mounted ? 'fadeInUp 1s ease-out 5s forwards' : 'none'}}>
            <Link
              href="/trainers"
              className="glass-button-secondary px-8 py-4 rounded-2xl text-white uppercase tracking-wider text-sm font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Meet the Trainers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/membership"
              className="glass-button-primary px-8 py-4 rounded-2xl text-white uppercase tracking-wider text-sm font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Membership</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </section>
  );
}