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

const services = [
  { href: '/services/personal-training', label: 'Personal Training' },
  { href: '/services/boxing', label: 'Boxing' },
  { href: '/services/pilates', label: 'Pilates' },
  { href: '/services/chiropractic', label: 'Chiropractic' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membershipDropdownOpen, setMembershipDropdownOpen] = useState(false);
  
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 py-4 sm:py-5 md:py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/content/home/Unify-Fitness.png"
            alt="Unify Fitness"
            width={250}
            height={75}
            className="h-14 sm:h-16 md:h-20 w-auto brightness-0 invert sepia-0 saturate-200 hue-rotate-0"
            style={{filter: 'brightness(0) invert(1)'}}
            priority
            quality={75}
            sizes="(max-width: 768px) 224px, 320px"
          />
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 uppercase tracking-wide2 text-sm">
            {nav.slice(0, 2).map((n) => (
              <li key={n.href}>
                <Link className="hover:text-primary transition-colors" href={n.href} prefetch>{n.label}</Link>
              </li>
            ))}
            
            {/* Membership Dropdown */}
            <li className="relative group">
              <button 
                className="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wide2 text-sm"
                onMouseEnter={() => setMembershipDropdownOpen(true)}
                onMouseLeave={() => setMembershipDropdownOpen(false)}
              >
                Membership
                <svg className={`w-4 h-4 transition-transform duration-200 ${membershipDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-neutral-900/95 backdrop-blur border border-neutral-800 rounded-lg shadow-xl transition-all duration-200 ${
                  membershipDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setMembershipDropdownOpen(true)}
                onMouseLeave={() => setMembershipDropdownOpen(false)}
              >
                <div className="py-2">
                  <Link
                    href="/membership"
                    className="block px-4 py-3 text-sm text-white hover:text-primary hover:bg-neutral-800/50 transition-all duration-150 normal-case tracking-normal border-b border-neutral-800/50"
                    prefetch
                  >
                    Membership Plans
                  </Link>
                  <div className="px-4 py-2 text-xs text-neutral-400 uppercase tracking-wider">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-neutral-300 hover:text-primary hover:bg-neutral-800/50 transition-all duration-150 normal-case tracking-normal"
                      prefetch
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            
            {nav.slice(3).map((n) => (
              <li key={n.href}>
                <Link className="hover:text-primary transition-colors" href={n.href} prefetch>{n.label}</Link>
              </li>
            ))}
          </ul>
          
          {/* Join Today Button */}
          <Link
            href="https://calendly.com/unifygym"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200 rounded-full"
          >
            Join Today
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative flex flex-col justify-center items-center w-9 sm:w-10 h-9 sm:h-10 rounded-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
            <span className={`relative block h-0.5 w-5 bg-white transition-all duration-400 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-1' : 'group-hover:w-5.5'}`} />
            <span className={`relative block h-0.5 w-5 bg-white transition-all duration-400 ease-out mt-1 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'group-hover:w-4'}`} />
            <span className={`relative block h-0.5 w-5 bg-white transition-all duration-400 ease-out mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'group-hover:w-5.5'}`} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-b from-black/98 via-neutral-900/98 to-black/98 backdrop-blur-xl border-t border-neutral-700/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <ul className="relative px-8 py-8 space-y-1">
            {nav.slice(0, 2).map((n, index) => (
              <li 
                key={n.href}
                className={`transform transition-all duration-500 ease-out ${
                  mobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                <Link 
                  className="group block py-4 px-6 text-white hover:text-primary transition-all duration-300 uppercase tracking-[0.15em] text-sm font-light border-b border-neutral-800/50 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-sm" 
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  prefetch
                >
                  <span className="relative">
                    {n.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ))}
            
            {/* Membership Menu Item with Services Submenu */}
            <li 
              className={`transform transition-all duration-500 ease-out ${
                mobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `200ms` : '0ms' }}
            >
              <button 
                className="group w-full text-left py-4 px-6 text-white hover:text-primary transition-all duration-300 uppercase tracking-[0.15em] text-sm font-light border-b border-neutral-800/50 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-sm flex items-center justify-between"
                onClick={() => setMembershipDropdownOpen(!membershipDropdownOpen)}
              >
                <span className="relative">
                  Membership
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${membershipDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Membership & Services Submenu */}
              <div className={`overflow-hidden transition-all duration-300 ${membershipDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 py-2 bg-neutral-900/50">
                  <Link
                    href="/membership"
                    className="block py-3 px-6 text-white hover:text-primary text-sm transition-all duration-200 border-l-2 border-transparent hover:border-primary/50 font-medium"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMembershipDropdownOpen(false);
                    }}
                  >
                    Membership Plans
                  </Link>
                  <div className="px-6 py-2 text-xs text-neutral-500 uppercase tracking-wider border-l-2 border-transparent">Services</div>
                  {services.map((service, serviceIndex) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-3 px-6 text-neutral-300 hover:text-primary text-sm transition-all duration-200 border-l-2 border-transparent hover:border-primary/50"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMembershipDropdownOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            
            {nav.slice(3).map((n, index) => (
              <li 
                key={n.href}
                className={`transform transition-all duration-500 ease-out ${
                  mobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${(index + 3) * 100}ms` : '0ms' }}
              >
                <Link 
                  className="group block py-4 px-6 text-white hover:text-primary transition-all duration-300 uppercase tracking-[0.15em] text-sm font-light border-b border-neutral-800/50 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-sm" 
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative">
                    {n.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Premium Footer in Mobile Menu */}
          <div className="relative px-8 pb-8 pt-4 border-t border-neutral-800/30">
            <div className="text-center">
              <p className="text-neutral-400 text-xs uppercase tracking-[0.2em] font-light mb-4">
                Training Facility
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}