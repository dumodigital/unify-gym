'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Clock, Target, Heart, Users, User, ChevronRight, Star, Zap, Award, TrendingUp, Brain, Shield } from 'lucide-react';
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

export default function PersonalTrainingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const personalTrainingServiceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Personal Training",
    "description": "One-on-one personal training with certified fitness coaches at Unify Fitness in Glencoe, IL. Customized workouts, nutrition guidance, and accountability.",
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
    "serviceType": "Personal Fitness Training",
    "audience": {
      "@type": "Audience",
      "audienceType": "weight loss, muscle building, athletic performance, functional fitness"
    },
    "offers": {
      "@type": "Offer",
      "description": "Personalized fitness coaching, nutrition guidance, progress tracking",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <StructuredData data={personalTrainingServiceData} />
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
              src="/content/home/optimized/facility.webp"
              alt="Personal training at Unify Fitness facility"
              fill
              className="object-cover brightness-40"
              style={{ filter: 'brightness(0.4)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/80 via-transparent to-[#0B0B0C]/40" />
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wide2 text-xs sm:text-sm">Certified Experts</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-wide mb-4 sm:mb-6 leading-tight"
              variants={fadeInUp}
            >
              PERSONAL TRAINING
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light px-2"
              variants={fadeInUp}
            >
              Your Goals • Your Timeline • Your Success
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
              variants={fadeInUp}
            >
              <Button 
                variant="primary" 
                href="https://calendly.com/unifygym"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                href="/trainers"
                className="flex items-center gap-2"
              >
                Meet Our Trainers
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Personal Training Section */}
        <motion.section 
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
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
                    <p className="text-primary font-medium uppercase tracking-wide2 text-sm">Personalized Approach</p>
                  </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight">
                YOUR 
                <span className="text-primary"> DEDICATED </span>
                COACH
              </h2>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Experience the power of one-on-one training with Unify Fitness's certified personal trainers. 
                  Our expert coaches create customized workout programs, provide nutrition guidance, and offer 
                  the accountability you need to achieve your specific fitness goals faster and more safely.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Comprehensive fitness assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Customized workout programming
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Nutrition guidance and meal planning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Progress tracking and adjustments
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
                  {/* Main training image */}
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src="/content/home/trainer.jpg"
                      alt="Personal training session at Unify Fitness"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-primary text-sm font-medium uppercase tracking-wide">1-on-1 Training</span>
                      </div>
                      <h3 className="text-white text-xl font-bold">
                        Personalized Fitness Coaching
                      </h3>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating stats element */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur rounded-2xl p-4 text-center shadow-xl border border-primary/30"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Image
                    src="/content/home/svc-training.svg"
                    alt="Training icon"
                    width={32}
                    height={32}
                    className="mx-auto mb-2 brightness-0 invert"
                  />
                  <p className="text-white text-sm font-bold">Personal</p>
                  <p className="text-white/80 text-xs">Training</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Training Specialties Section */}
        <motion.section 
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white/[0.02]"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                TRAINING SPECIALTIES
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Our certified trainers specialize in diverse fitness disciplines to help you 
                achieve any goal, from weight loss to athletic performance
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceFeature
                icon={TrendingUp}
                title="Weight Loss"
                description="Sustainable fat loss through strategic training and nutrition programming"
                delay={0.1}
              />
              <ServiceFeature
                icon={Zap}
                title="Strength Building"
                description="Progressive overload programs to build muscle and increase power"
                delay={0.2}
              />
              <ServiceFeature
                icon={Heart}
                title="Functional Fitness"
                description="Movement patterns that improve daily life and prevent injury"
                delay={0.3}
              />
              <ServiceFeature
                icon={Star}
                title="Athletic Performance"
                description="Sport-specific training to enhance competitive performance"
                delay={0.4}
              />
            </div>
          </div>
        </motion.section>

        {/* Why Choose Personal Training Section */}
        <motion.section 
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                WHY PERSONAL TRAINING?
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Discover the advantages of working with a dedicated fitness professional 
                who's committed to your success
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceFeature
                icon={Target}
                title="Faster Results"
                description="Achieve your goals 3x faster with expert programming and accountability"
                delay={0.1}
              />
              <ServiceFeature
                icon={Shield}
                title="Injury Prevention"
                description="Learn proper form and technique to train safely and avoid setbacks"
                delay={0.2}
              />
              <ServiceFeature
                icon={Brain}
                title="Expert Knowledge"
                description="Benefit from years of education and experience in exercise science"
                delay={0.3}
              />
              <ServiceFeature
                icon={Users}
                title="Motivation & Support"
                description="Stay consistent with a coach who believes in your potential"
                delay={0.4}
              />
              <ServiceFeature
                icon={Clock}
                title="Time Efficiency"
                description="Maximize every minute with focused, purposeful workout sessions"
                delay={0.5}
              />
              <ServiceFeature
                icon={Award}
                title="Customized Programs"
                description="Training designed specifically for your body, goals, and lifestyle"
                delay={0.6}
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 md:p-12"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <User className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wide">Start Today</span>
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
                Ready to Transform Your Life?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Book your complimentary consultation today and discover how personal training 
                can accelerate your fitness journey. Your transformation starts with a single step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="primary" 
                  href="https://calendly.com/unifygym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  href="/trainers"
                  className="flex items-center gap-2"
                >
                  Meet Our Team
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-neutral-400 text-sm mt-6">
                Complimentary fitness assessment included with your first session
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
