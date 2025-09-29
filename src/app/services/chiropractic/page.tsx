'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, User, Heart, ChevronRight, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { useRef } from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

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

export default function ChiropracticPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
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
              src="/content/home/optimized/chiro.webp"
              alt="Chiropractic care at Lakefront Chiropractic"
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
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wide2 text-sm">Partner Service</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold tracking-wide mb-6"
              variants={fadeInUp}
            >
              CHIROPRACTIC
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              variants={fadeInUp}
            >
              Expert Care with Lakefront Chiropractic
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                variant="primary" 
                href="https://www.lakefrontchiro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                href="tel:(847) 835-4700"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (847) 835-4700
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Partnership Section */}
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
                    <Star className="w-6 h-6 text-primary" />
                    <p className="text-primary font-medium uppercase tracking-wide2 text-sm">Trusted Partnership</p>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold">
                    MEET 
                    <span className="text-primary"> DR. ETHEN</span>
                  </h2>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Unify Gym has partnered with <strong>Lakefront Chiropractic</strong> to provide our members with 
                  comprehensive wellness care. Dr. Joseph Ethen brings a unique background combining Physical Therapy, 
                  Athletic Training, and Exercise Physiology with his chiropractic expertise.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Why Choose Dr. Ethen?
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Master's degree in Exercise Physiology
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Certified Athletic Trainer background
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Treats the whole body, not just the spine
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      Focus on strength and fitness integration
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div variants={slideFromRight} className="relative">
                {/* Dr. Ethen's Professional Photo */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl group mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 md:h-96">
                    <Image
                      src="/content/home/dr.jpg"
                      alt="Dr. Joseph Ethen, D.C. - Lakefront Chiropractic"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Professional overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Image
                          src="/content/home/svc-chiro.svg"
                          alt="Chiropractic icon"
                          width={24}
                          height={24}
                          className="brightness-0 invert"
                        />
                        <span className="text-primary text-sm font-medium uppercase tracking-wide">Lakefront Chiropractic</span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-1">
                        Dr. Joseph Ethen, D.C.
                      </h3>
                      <p className="text-neutral-200 text-sm">
                        Chiropractor, Physical Therapist & Athletic Trainer
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Clinic Photo */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64">
                    <Image
                      src="/content/home/chiro.jpg"
                      alt="Lakefront Chiropractic clinic interior"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Clinic info overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        Located in downtown Glencoe, connected to Unify Gym
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
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
                COMPREHENSIVE CARE
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Dr. Ethen's extensive knowledge allows him to treat injuries throughout your entire body, 
                not just spinal issues like most chiropractors
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceFeature
                icon={User}
                title="Spine & Posture"
                description="Back pain, neck pain, headaches, scoliosis, and postural deficits"
                delay={0.1}
              />
              <ServiceFeature
                icon={Heart}
                title="Sports Injuries"
                description="Athletic injuries, rotator cuff issues, tennis elbow, and weekend warrior syndrome"
                delay={0.2}
              />
              <ServiceFeature
                icon={CheckCircle}
                title="Extremity Care"
                description="Hip and knee issues, ankle sprains, carpal tunnel, and arm/leg pain"
                delay={0.3}
              />
              <ServiceFeature
                icon={Clock}
                title="Family Care"
                description="Pediatric chiropractic, pregnancy care, and wellness for all ages"
                delay={0.4}
              />
              <ServiceFeature
                icon={Star}
                title="Modern Techniques"
                description="Both traditional adjustments and non-invasive treatment options"
                delay={0.5}
              />
              <ServiceFeature
                icon={MapPin}
                title="Convenient Location"
                description="Connected to Unify Gym in downtown Glencoe for integrated care"
                delay={0.6}
              />
            </div>
          </div>
        </motion.section>

        {/* Location & Contact Section */}
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
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Book your appointment with Dr. Ethen at Lakefront Chiropractic. 
                Experience the difference of integrated wellness care.
              </p>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-neutral-300">
                    662 Vernon Avenue<br />
                    Glencoe, IL 60022
                  </p>
                </div>
                <div className="text-center">
                  <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-neutral-300">
                    (847) 835-4700
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-neutral-300">
                    Tue/Fri: 9am-12pm, 3-6pm<br />
                    Sat: 10am-12pm
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="primary" 
                  href="https://www.lakefrontchiro.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Book Online
                </Button>
                <Button 
                  variant="outline" 
                  href="/membership"
                  className="flex items-center gap-2"
                >
                  Unify Membership Benefits
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-neutral-400 text-sm mt-6">
                Unify Gym members receive integrated wellness check included with membership
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
