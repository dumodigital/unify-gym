'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronDown } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const PRICES = {
  weekly: { gold: 89, platinum: 169, pro: 239 },
  monthly: { gold: 349, platinum: 649, pro: 899 },
};

const PACKAGES = [
  {
    id: 'gold',
    name: 'Gold Package',
    features: [
      '1 Personal Training session weekly',
      'Gym membership included',
      'Zoom! Workouts available',
      'Wellness check with Lakefront Chiropractic'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    features: [
      '2 Personal training sessions weekly',
      'Gym membership included',
      'Zoom! Workout available',
      'Wellness check with Lakefront Chiropractic'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro Package',
    features: [
      '3 Personal training sessions weekly',
      'Gym membership included',
      'Zoom! Workout available',
      'Wellness check with Lakefront Chiropractic'
    ]
  }
];

const TIMELINE_STEPS = [
  { title: 'Meet your trainer', description: 'Get matched with an expert trainer' },
  { title: 'Personalized plan', description: 'Customized program for your goals' },
  { title: 'Train + track progress', description: 'Consistent sessions with measurable results' },
  { title: 'Reassess & level up', description: 'Evolve your program as you grow' }
];

const FAQ_ITEMS = [
  {
    question: 'Can I Choose My Personal Trainer?',
    answer: 'Yes! We will pair you with the trainer of your choice to help you with your personal goals and preferences.'
  },
  {
    question: 'Is There Parking Near The Gym?',
    answer: 'Yes, the gym is located in downtown Glencoe and has street parking right in front of the gym for your convenience.'
  },
  {
    question: 'How Long Is Each Session?',
    answer: 'Each private session is typically one hour, depending on what the trainer decides is necessary to get the results you want.'
  },
  {
    question: 'Do You Have Spa Services?',
    answer: 'Unfortunately at this time we do not offer spa services but check back with us from time to time for a referral.'
  },
  {
    question: 'Can I Cancel My Subscription?',
    answer: 'Yes, a 30 day notice of cancellation is required. All sessions must be used within the month. Special circumstances to be discussed.'
  },
  {
    question: 'Do You Have Showers At The Gym?',
    answer: 'Yes we have a full bathroom and shower in both the Men\'s & Women\'s bathrooms so you can get back to work quickly!'
  },
  {
    question: 'Are Any Other Services Included In The Membership?',
    answer: 'We also offer Pilates and Boxing but they are not included and are separate from the packages.'
  },
  {
    question: 'Can I Come Into The Gym Whenever I Want?',
    answer: 'Yes, you will be given a FOB Key that you can use to come and go in our private, members only gym.'
  }
];

// Components
function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`w-full ${className}`}>
      {children}
    </section>
  );
}

function PriceToggle({ 
  isWeekly, 
  onToggle 
}: { 
  isWeekly: boolean; 
  onToggle: (weekly: boolean) => void; 
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-lg ${!isWeekly ? 'text-white' : 'text-white/60'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isWeekly)}
        className={`relative w-14 h-7 rounded-full transition-colors ${
          isWeekly ? 'bg-primary' : 'bg-white/20'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
            isWeekly ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-lg ${isWeekly ? 'text-white' : 'text-white/60'}`}>
        Weekly
      </span>
    </div>
  );
}

function PricingCard({ 
  pkg, 
  price, 
  period 
}: { 
  pkg: typeof PACKAGES[0]; 
  price: number; 
  period: string; 
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border p-8 transition-all duration-300 hover:border-primary/50 ${
        pkg.popular 
          ? 'border-primary bg-primary/5' 
          : 'border-white/10 bg-white/5'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
        <div className="text-4xl font-bold text-white">
          ${price}
          <span className="text-lg text-white/60">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-white/90">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <Link
          href="https://calendly.com/unifygym"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          Get Started
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="https://calendly.com/unifygym"
          className="w-full border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl transition-colors text-center block"
        >
          Book a Tour
        </Link>
      </div>
    </motion.div>
  );
}

function Timeline() {
  return (
    <div className="relative">
      {/* Continuous connecting line */}
      <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 z-0" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {TIMELINE_STEPS.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10">
              {index + 1}
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
            <p className="text-white/70">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ item }: { item: typeof FAQ_ITEMS[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-primary/80 bg-neutral-800/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-primary/5 transition-colors touch-manipulation"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-white font-medium italic text-base sm:text-lg pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        id={`faq-content-${item.question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className={`px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 italic text-sm sm:text-base leading-relaxed transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          {item.answer}
        </div>
      </div>
    </div>
  );
}

function CTABanner() {
  return (
    <div
      className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 text-center"
    >
      <h3 className="text-3xl font-bold text-white mb-4">Ready to see the space?</h3>
      <p className="text-white/70 mb-6 text-lg">
        Book a complimentary tour and experience what makes Unify Fitness different.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="https://calendly.com/unifygym"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
        >
          Book a Tour
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="border border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-xl transition-colors"
        >
          Questions? Contact Us
        </Link>
      </div>
    </div>
  );
}

export default function MembershipPage() {
  const [isWeekly, setIsWeekly] = useState(false);
  const currentPrices = isWeekly ? PRICES.weekly : PRICES.monthly;
  const period = isWeekly ? 'week' : 'month';

  return (
    <>
      <Header />
      <main className="bg-[#0B0B0C] text-white min-h-screen">
        {/* Hero Section */}
      <Section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/content/home/gym.jpg"
            alt="Unify Fitness gym"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-[#0B0B0C]/40 to-[#0B0B0C]/20" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">JOIN TODAY</h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">Private & Exclusive</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/unifygym"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              Book a Tour
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://calendly.com/unifygym"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/50 text-white font-medium py-4 px-8 rounded-xl transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Why Unify Section */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-8 overflow-hidden">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Membership,
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-primary"
                >
                  Transformed.
                </motion.div>
              </div>
              <motion.ul 
                className="space-y-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              >
                {[
                  "Immaculate, private facility designed for high performers",
                  "Expert trainers who design programs for your unique goals", 
                  "Integrated digital workouts for seamless training anywhere",
                  "Small, exclusive community of like-minded individuals"
                ].map((text, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.2 + (index * 0.1), duration: 0.5 }}
                  >
                    <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="text-white/60 mt-8 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.5 }}
              >
                * Complimentary initial wellness check with Lakefront Chiropractic
              </motion.p>
            </div>

            <div className="relative">
              <div className="relative">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src="/content/home/lift.jpg"
                    alt="Training at Unify Fitness"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute -bottom-12 -right-12"
                >
                  <Image
                    src="/content/home/gym2.jpg"
                    alt="Unify Fitness facility"
                    width={300}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Packages Section */}
      <Section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Monthly Training Packages</h2>
            <p className="text-xl text-white/70 mb-8">
              * Complimentary Initial Wellness Check With Lakefront Chiropractic
            </p>
            <PriceToggle isWeekly={isWeekly} onToggle={setIsWeekly} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PricingCard
                key={pkg.id}
                pkg={pkg}
                price={currentPrices[pkg.id as keyof typeof currentPrices]}
                period={period}
              />
            ))}
          </div>

          <div className="mt-12 text-center space-y-2 text-white/60">
            <p>* Semi-private/small group packages available</p>
            <p>* Single sessions available</p>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Journey With Us</h2>
            <p className="text-xl text-white/70">
              From first session to fitness transformation
            </p>
          </div>
          <Timeline />
        </div>
      </Section>

      {/* FAQ + CTA Section */}
      <Section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-primary/80 italic text-lg mb-4">All You Need To Know</p>
            <h2 className="text-4xl md:text-6xl font-bold italic mb-12">
              FREQUENTLY ASKED<br />
              QUESTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>

          <CTABanner />
        </div>
      </Section>
      </main>
      <Footer />
    </>
  );
}
