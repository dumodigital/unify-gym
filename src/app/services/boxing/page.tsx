'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Clock, Target, Heart, Users, Dumbbell, ChevronRight, Star, Shield, Award, Zap } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import StructuredData from '@/components/site/StructuredData';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Button component following project patterns
function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  target,
  rel,
  onClick
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-4 sm:py-3 text-base sm:text-sm font-medium uppercase tracking-wide2 transition-all duration-300 rounded-md min-h-[44px] min-w-[120px]";
  
  const variants = {
    primary: `${baseClasses} bg-primary hover:bg-primary/90 text-white`,
    outline: `${baseClasses} border-2 border-white/80 text-white hover:bg-white hover:text-black`
  };

  const Component = href ? Link : 'button';
  
  return (
    <Component
      className={`${variants[variant]} ${className}`}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

// Active service indicator
function ActiveBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-primary rounded-full"></div>
      <span className="text-primary font-medium uppercase tracking-wide2 text-sm">Now Available</span>
      <div className="w-3 h-3 bg-primary rounded-full"></div>
    </div>
  );
}

// Features preview component
function FeaturePreview({ icon: Icon, title, description, delay = 0 }: { 
  icon: React.ComponentType<{ className?: string }>; 
  title: string; 
  description: string; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-display font-bold text-white">{title}</h3>
      </div>
      <p className="text-neutral-300 group-hover:text-white transition-colors duration-300">{description}</p>
    </motion.div>
  );
}

export default function BoxingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const boxingServiceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Boxing Training",
    "description": "Elite boxing training programs combining traditional techniques with modern conditioning methods at Unify Fitness in Glencoe, IL.",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "name": "Unify Fitness",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "662 Vernon Avenue",
        "addressLocality": "Glencoe",
        "addressRegion": "IL",
        "postalCode": "60022"
      },
      "telephone": "+12245229040"
    },
    "serviceType": "Boxing Training",
    "audience": {
      "@type": "Audience",
      "audienceType": "fitness enthusiasts, athletes, beginners"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional boxing training sessions",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <StructuredData data={boxingServiceData} />
      <Header />
      <main className="bg-[#0B0B0C] text-white">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <div className="absolute inset-0">
            <Image
              src="/content/home/optimized/boxing.webp"
              alt="Boxing training at Unify Fitness"
              fill
              className="object-cover brightness-40"
              style={{ filter: 'brightness(0.4)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/80 via-transparent to-[#0B0B0C]/40" />
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              variants={fadeInUp}
            >
              <ActiveBadge />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold tracking-wide mb-6"
              variants={fadeInUp}
            >
              BOXING
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              variants={fadeInUp}
            >
              Power • Precision • Performance
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                variant="primary" 
                href="https://calendly.com/unifygym"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Target className="w-4 h-4" />
                Book Training
              </Button>
              <Button 
                variant="outline" 
                href="/contact"
                className="flex items-center gap-2"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Boxing Section */}
        <motion.section 
          className="py-20 px-4 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={slideFromLeft} className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-primary font-medium uppercase tracking-wide2 text-sm">Elite Training</p>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold">
                    EXPLOSIVE 
                    <span className="text-primary"> BOXING </span>
                    WORKOUTS
                  </h2>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Our elite boxing program combines traditional boxing techniques with modern training 
                  methods in Unify Fitness's signature style. Experience high-intensity workouts that 
                  build explosive power, cardiovascular endurance, and unshakeable confidence while 
                  learning proper boxing fundamentals.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Training Includes
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Fundamental boxing techniques & footwork
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Heavy bag, speed bag & pad work
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      High-intensity conditioning circuits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Small group classes & private sessions
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div variants={slideFromRight} className="relative">
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main boxing image */}
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src="/content/home/boxing.jpg"
                      alt="Boxing equipment and training setup"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wide">Now Available</span>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Elite Boxing Training
                      </h3>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating preview element */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur rounded-2xl p-4 text-center shadow-xl border border-primary/30"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Image
                    src="/content/home/svc-boxing.svg"
                    alt="Boxing icon"
                    width={32}
                    height={32}
                    className="mx-auto mb-2 brightness-0 invert"
                  />
                  <p className="text-white text-sm font-bold">Boxing</p>
                  <p className="text-white/80 text-xs">Available Now</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Preview Section */}
        <motion.section 
          className="py-20 px-4 md:px-8 lg:px-12 bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                ELITE BOXING TRAINING
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Our boxing program integrates seamlessly with Unify Fitness's holistic approach to strength, 
                conditioning, and wellness for complete athletic development
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeaturePreview
                icon={Target}
                title="Technical Mastery"
                description="Master proper boxing fundamentals, footwork, and combinations with expert instruction"
                delay={0.1}
              />
              <FeaturePreview
                icon={Heart}
                title="Power Conditioning"
                description="Build explosive power and cardiovascular endurance through high-intensity training"
                delay={0.2}
              />
              <FeaturePreview
                icon={Users}
                title="Small Group Classes"
                description="Train in intimate group settings with personalized attention and motivation"
                delay={0.3}
              />
              <FeaturePreview
                icon={Shield}
                title="Safe & Progressive"
                description="Learn proper form and safety protocols while progressing at your own pace"
                delay={0.4}
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 px-4 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wide">Ready to Train</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Unleash Your Power?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Book your first boxing session today and experience the ultimate combination of 
                technique, conditioning, and confidence building. Limited class sizes ensure personal attention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="primary" 
                  href="https://calendly.com/unifygym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Target className="w-4 h-4" />
                  Book Your Session
                </Button>
                <Button 
                  variant="outline" 
                  href="/membership"
                  className="flex items-center gap-2"
                >
                  View Membership Options
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-neutral-400 text-sm mt-6">
                Members receive priority booking and discounted rates on all boxing sessions
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

