'use client';

import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useRef } from 'react';
import Image from 'next/image';

const staff = [
  { name: 'MELISSA CESARE', role: 'Owner / Coach', img: '/content/home/mel.jpg' },
  { name: 'LESLIE GARRETT', role: 'Owner / Coach', img: '/content/home/LESLIE GARRETT.jpg' },
  { name: 'NIKATA KATSMAN', role: 'Strength & Conditioning', img: '/content/home/NIKATA KATSMAN.jpg' },
  { name: 'MARY BETH', role: 'Pilates Coach', img: '/content/home/mary.jpeg' },
  { name: 'JAMES HERRON', role: 'Performance Specialist', img: '/content/home/JAMES HERRON.jpg' },
];

function Card({ s }: { s: (typeof staff)[number] }) {
  return (
    <div className="card relative">
      <Image 
        src={s.img} 
        alt={s.name} 
        width={320}
        height={448}
        className="h-[28rem] w-full object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Logo at top center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <Image 
          src="/content/home/Unify-Fitness.png" 
          alt="Unify Fitness Logo" 
          width={96} 
          height={96}
          className="object-contain brightness-0 invert"
          loading="lazy"
        />
      </div>
      
      {/* Name and role at bottom */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="font-display text-xl">{s.name}</div>
        <div className="text-neutral-300 text-sm">{s.role}</div>
      </div>
    </div>
  );
}

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="panel-dark">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-display text-4xl tracking-wide2">OUR TEAM</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
          Our unique and inspiring fitness center unites highly trained professionals with our valued clients.
        </p>
        <div className="relative mt-10">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
          >
            {staff.map((s, index) => (
              <div key={`${s.name}-${index}`} className="flex-none w-80">
                <Card s={s} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/trainers" className="btn-ghost">Meet our other team members</Link>
        </div>
      </div>
    </section>
  );
}
