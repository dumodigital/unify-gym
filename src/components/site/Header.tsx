'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/membership', label: 'Membership' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        mounted && scrolled ? 'bg-neutral-900/90 backdrop-blur border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">{/* Fixed header */}
        <Link href="/" className="flex items-center">
          <Image
            src="/content/home/Unify-Fitness.png"
            alt="Unify Fitness"
            width={250}
            height={75}
            className="h-20 w-auto brightness-0 invert sepia-0 saturate-200 hue-rotate-0"
            style={{filter: 'brightness(0) invert(1)'}}
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 uppercase tracking-wide2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:text-primary transition-colors" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://calendly.com/unifygym"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/20 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200"
          >
            Join Today
          </Link>
        </div>
      </nav>
    </header>
  );
}