'use client';
import Link from 'next/link';
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'bg-neutral-900/90 backdrop-blur border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl tracking-wide2">UNIFY</Link>
        <ul className="hidden md:flex items-center gap-8 uppercase tracking-wide2 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <Link className="hover:text-primary" href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
