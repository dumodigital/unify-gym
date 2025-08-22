import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa6';
import ScrollToTop from './ScrollToTop';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 px-4 py-16">
        {/* Left: Logo */}
        <div className="space-y-4">
          <div className="relative h-16 w-16">
            <Image src="/content/home/brand.jpg" alt="Unify Fitness logo" fill className="object-cover rounded-full" />
          </div>
          <div className="text-2xl font-display">UNIFY <span className="font-normal">FITNESS</span></div>
        </div>

        {/* Center: Socials */}
        <div className="space-y-3">
          <div className="uppercase tracking-wide2 text-neutral-400">Our Socials</div>
          <div className="flex items-center gap-4 text-xl">
            <Link aria-label="Twitter" href="https://twitter.com" className="hover:text-primary"><FaTwitter /></Link>
            <Link aria-label="Instagram" href="https://instagram.com/unifygym" className="hover:text-primary"><FaInstagram /></Link>
            <Link aria-label="Facebook" href="https://facebook.com" className="hover:text-primary"><FaFacebookF /></Link>
          </div>
        </div>

        {/* Right: Hours + Address */}
        <div className="space-y-3">
          <div className="uppercase tracking-wide2">Working Hours</div>
          <div className="text-sm space-y-1 text-neutral-300">
            <div>Mon – Fri: 6AM – 10PM</div>
            <div>Saturday: 6AM – 10PM</div>
            <div>Sunday: 6AM – 10PM</div>
            <div className="italic text-neutral-400">Hours subject to change upon client request.</div>
          </div>
          <div className="pt-4 text-sm">
            <div className="font-semibold">Unify Fitness</div>
            <div>664 Vernon Avenue</div>
            <div>Glencoe, IL 60022</div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
