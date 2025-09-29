'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Clock, Target, Heart, Users, FlowerIcon as Lotus, ChevronRight, Star, Zap, Award, Activity } from 'lucide-react';
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

// Service feature component
function ServiceFeature({ icon: Icon, title, description, delay = 0 }: { 
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

export default function PilatesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const pilatesServiceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pilates Classes",
    "description": "Expert-led Pilates classes focusing on core strength, flexibility, and mind-body connection at Unify Fitness in Glencoe, IL.",
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
    "serviceType": "Pilates Training",
    "audience": {
      "@type": "Audience",
      "audienceType": "all fitness levels, rehabilitation, flexibility improvement"
    },
    "offers": {
      "@type": "Offer",
      "description": "Mat Pilates, Beginner Classes, Advanced Training, Therapeutic Sessions",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <StructuredData data={pilatesServiceData} />
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
              src="/content/home/optimized/pilates.webp"
              alt="Pilates training at Unify Fitness"
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
              <Star className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wide2 text-sm">Expert Instruction</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold tracking-wide mb-6"
              variants={fadeInUp}
            >
              PILATES
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              variants={fadeInUp}
            >
              Strength • Grace • Balance
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
                <Lotus className="w-4 h-4" />
                Book Class
              </Button>
              <Button 
                variant="outline" 
                href="/membership"
                className="flex items-center gap-2"
              >
                View Membership
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Pilates Section */}
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
                    <p className="text-primary font-medium uppercase tracking-wide2 text-sm">Mind-Body Connection</p>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold">
                    TRANSFORM 
                    <span className="text-primary"> YOUR </span>
                    BODY
                  </h2>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Experience the transformative power of Pilates at Unify Fitness. Our expert-led classes 
                  focus on building core strength, improving flexibility, and enhancing overall body 
                  awareness through precise, controlled movements that connect mind and body.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    What You'll Gain
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Improved core strength and stability
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Enhanced flexibility and mobility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Better posture and body alignment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Reduced stress and improved focus
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
                  {/* Main pilates image */}
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src="/content/home/pilates.jpg"
                      alt="Pilates class at Unify Fitness"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wide">Expert Instruction</span>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Professional Pilates Training
                      </h3>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating info element */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur rounded-2xl p-4 text-center shadow-xl border border-primary/30"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Image
                    src="/content/home/svc-pilates.svg"
                    alt="Pilates icon"
                    width={32}
                    height={32}
                    className="mx-auto mb-2 brightness-0 invert"
                  />
                  <p className="text-white text-sm font-bold">Pilates</p>
                  <p className="text-white/80 text-xs">Classes Available</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Class Types Section */}
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
                PILATES PROGRAMS
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Choose from our range of Pilates offerings designed to meet every fitness level 
                and goal, from beginner fundamentals to advanced conditioning
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceFeature
                icon={Lotus}
                title="Mat Pilates"
                description="Traditional floor-based exercises focusing on core strength and body control"
                delay={0.1}
              />
              <ServiceFeature
                icon={Activity}
                title="Beginner Classes"
                description="Perfect introduction to Pilates fundamentals with step-by-step instruction"
                delay={0.2}
              />
              <ServiceFeature
                icon={Zap}
                title="Advanced Training"
                description="Challenging sequences for experienced practitioners seeking progression"
                delay={0.3}
              />
              <ServiceFeature
                icon={Heart}
                title="Therapeutic Focus"
                description="Gentle, restorative sessions for injury prevention and rehabilitation"
                delay={0.4}
              />
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-20 px-4 md:px-8 lg:px-12"
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
                PROVEN BENEFITS
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Discover why Pilates is trusted by athletes, healthcare professionals, 
                and fitness enthusiasts worldwide
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceFeature
                icon={Target}
                title="Core Strength"
                description="Build deep abdominal strength and spinal stability for better movement patterns"
                delay={0.1}
              />
              <ServiceFeature
                icon={Users}
                title="Flexibility"
                description="Improve range of motion and muscle elasticity through controlled stretching"
                delay={0.2}
              />
              <ServiceFeature
                icon={Award}
                title="Posture"
                description="Correct imbalances and develop awareness for better daily posture"
                delay={0.3}
              />
              <ServiceFeature
                icon={Heart}
                title="Mind-Body"
                description="Enhance focus, reduce stress, and improve mental clarity through movement"
                delay={0.4}
              />
              <ServiceFeature
                icon={Star}
                title="Injury Prevention"
                description="Strengthen stabilizing muscles to reduce risk of common injuries"
                delay={0.5}
              />
              <ServiceFeature
                icon={Clock}
                title="Better Sleep"
                description="Regular practice promotes relaxation and improved sleep quality"
                delay={0.6}
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
                <Lotus className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wide">Transform Today</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Transform Your Body?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Join our Pilates classes and experience the perfect combination of strength, 
                flexibility, and mindfulness. All levels welcome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="primary" 
                  href="https://calendly.com/unifygym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Lotus className="w-4 h-4" />
                  Book Your Class
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
                First-time visitors receive a complimentary consultation with our certified instructors
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
