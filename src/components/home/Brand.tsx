'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import DarkVeil from '@/components/ui/DarkVeil';

export default function Brand() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add 800ms delay before starting animations
          setTimeout(() => {
            setShouldAnimate(true);
          }, 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMounted]);

  const renderStaggeredText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`${shouldAnimate ? 'stagger-letter' : 'opacity-0'}`}
        style={{ 
          animationDelay: shouldAnimate ? `${index * 0.08 + 0.1}s` : '0s',
          animationPlayState: shouldAnimate ? 'running' : 'paused'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
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
        {/* Staggered heading animation */}
        <div className="relative mb-6" style={{ perspective: '1000px' }}>
          <h2 className="relative z-10 font-display text-5xl md:text-6xl lg:text-7xl tracking-wide2">
            {renderStaggeredText('UNIFY FITNESS')}
          </h2>
        </div>

        {/* Copy with fade-in from left */}
        <p className={`text-xl text-white leading-relaxed max-w-2xl mx-auto mb-10 scroll-fade-left ${shouldAnimate ? 'animate' : ''}`}
           style={{ transitionDelay: '1.2s' }}>
          Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
          We offer options for all skill levels, creating personal experiences for beginners building a
          foundation and advanced trainees forging a powerful physique.
        </p>

        {/* CTAs with staggered fade-in */}
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