import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaDumbbell } from 'react-icons/fa6';
import { GiWeightLiftingUp, GiMuscleUp, GiBoxingGlove } from 'react-icons/gi';
import ScrollToTop from './ScrollToTop';

export default function Footer() {
  return (
    <footer className="relative bg-black text-neutral-200">
      {/* Subtle Silver Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900/50 to-neutral-800/30"></div>
      
      {/* Subtle Silver Accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center md:items-start text-center md:text-left">
          {/* Logo and Button - Left Side */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            {/* Larger Logo */}
            <img src="/content/home/Unify-Fitness.png" alt="Unify Fitness" className="h-24 w-auto brightness-0 invert md:-ml-2" />
            
            {/* Gym Equipment Icons under logo */}
            <div className="flex items-center justify-center md:justify-start space-x-4 text-neutral-500">
              <FaDumbbell className="text-lg hover:text-primary transition-colors" />
              <GiWeightLiftingUp className="text-lg hover:text-primary transition-colors" />
              <GiMuscleUp className="text-lg hover:text-primary transition-colors" />
              <GiBoxingGlove className="text-lg hover:text-primary transition-colors" />
            </div>
            
            {/* Join Today Button */}
            <Link
              href="https://calendly.com/unifygym"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary/90 transition-colors self-center md:self-start"
            >
              Join Today
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 cursor-default">Pages</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <Link href="/" className="block hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/membership" className="block hover:text-white transition-colors">Membership</Link>
              <Link href="/trainers" className="block hover:text-white transition-colors">Trainers</Link>
              <Link href="/facility" className="block hover:text-white transition-colors">Our Facility</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 cursor-default">Services</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <Link href="/services/personal-training" className="block hover:text-white hover:translate-x-1 transition-all duration-200">Personal Training</Link>
              <Link href="/services/boxing" className="block hover:text-white hover:translate-x-1 transition-all duration-200">Boxing</Link>
              <Link href="/services/pilates" className="block hover:text-white hover:translate-x-1 transition-all duration-200">Pilates</Link>
              <Link href="/services/chiropractic" className="block hover:text-white hover:translate-x-1 transition-all duration-200">Chiropractic</Link>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 cursor-default">Hours</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="hover:text-white hover:scale-105 transition-all duration-200 cursor-default">
                <span>Mon - Fri: </span>
                <span className="text-primary">6AM - 10PM</span>
              </div>
              <div className="hover:text-white hover:scale-105 transition-all duration-200 cursor-default">
                <span>Saturday: </span>
                <span className="text-primary">6AM - 10PM</span>
              </div>
              <div className="hover:text-white hover:scale-105 transition-all duration-200 cursor-default">
                <span>Sunday: </span>
                <span className="text-primary">6AM - 10PM</span>
              </div>
              <div className="italic text-neutral-500 text-xs pt-2 hover:text-neutral-400 transition-colors duration-200">*Hours subject to change upon client request.</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 cursor-default">Contact</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-default">664 Vernon Avenue</div>
              <div className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-default">Glencoe, IL 60022</div>
              <a href="tel:+12245229040" className="block text-primary hover:text-white hover:translate-x-1 transition-all duration-200">
                (224) 522-9040
              </a>
              <a href="mailto:info@unifyfitness.com" className="block text-primary hover:text-white hover:translate-x-1 transition-all duration-200">
                info@unifyfitness.com
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <Link href="https://x.com/unifygym" className="text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300 transform">
                <FaTwitter className="text-xl" />
              </Link>
              <Link href="https://www.instagram.com/unifygym/#" className="text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300 transform">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="https://www.facebook.com/unifygym" className="text-neutral-400 hover:text-primary hover:scale-110 transition-all duration-300 transform">
                <FaFacebookF className="text-xl" />
              </Link>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center md:justify-start space-x-4 text-xs text-neutral-500 pt-3">
              <Link href="/privacy-policy" className="hover:text-primary hover:translate-x-1 transition-all duration-200">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary hover:translate-x-1 transition-all duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
