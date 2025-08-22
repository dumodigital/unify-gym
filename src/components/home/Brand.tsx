'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Brand() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStaggeredText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`stagger-letter ${isVisible ? '' : 'opacity-0'}`}
        style={{ animationDelay: isVisible ? `${index * 0.05 + 0.2}s` : '0s' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="-mt-10 relative z-10 animated-gradient text-neutral-50"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        {/* UF mark with scale animation */}
        <div className={`relative mx-auto h-48 w-48 mb-8 scroll-scale ${isVisible ? 'animate' : ''}`}>
          <Image
            src="/content/home/Unify-Fitness.png"
            alt="UF mark"
            fill
            className="object-contain brightness-0 invert"
            sizes="192px"
          />
        </div>

        {/* Staggered heading animation */}
        <div className="relative mb-6">
          <h2 className="relative z-10 font-display text-5xl md:text-6xl lg:text-7xl tracking-wide2">
            {renderStaggeredText('UNIFY FITNESS')}
          </h2>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[60%] h-3">
            <img
              src="/brand-underline.svg"
              alt=""
              className="w-full h-full object-contain opacity-70"
            />
          </div>
        </div>

        {/* Copy with fade-in from left */}
        <p className={`text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 scroll-fade-left ${isVisible ? 'animate' : ''}`}
           style={{ transitionDelay: '1.2s' }}>
          Our philosophy unifies the 3 major aspects of health &amp; fitness – Mind, Body &amp; Spirit.
          We offer options for all skill levels, creating personal experiences for beginners building a
          foundation and advanced trainees forging a powerful physique.
        </p>

        {/* CTAs with staggered fade-in */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/trainers"
            className={`px-8 py-4 rounded-lg border-2 border-neutral-400 text-neutral-200 uppercase tracking-wide2 text-sm font-semibold hover:bg-neutral-800 hover:border-neutral-300 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 scroll-fade-in ${isVisible ? 'animate' : ''}`}
            style={{ transitionDelay: '1.6s' }}
          >
            Meet the Trainers
          </Link>
          <Link
            href="/membership"
            className={`px-8 py-4 rounded-lg bg-white text-neutral-950 uppercase tracking-wide2 text-sm font-semibold hover:bg-neutral-100 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl scroll-fade-in ${isVisible ? 'animate' : ''}`}
            style={{ transitionDelay: '1.8s' }}
          >
            Explore Membership
          </Link>
        </div>
      </div>
    </section>
  );
}