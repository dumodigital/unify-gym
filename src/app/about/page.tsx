'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, LazyMotion, domAnimation, m } from 'framer-motion';
import { Users, Target, Heart, TrendingUp, Clock, Calendar } from 'lucide-react';
import { useRef, useState } from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';


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

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const timelineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { 
      duration: 2, 
      delay: 0.5
    } 
  }
};

const milestoneVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8 + index * 0.15
    }
  })
};

// Animated Counter Component
function AnimatedCounter({ target, duration = 2, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

// Enhanced Stat Pill Component
function StatPill({ icon: Icon, value, label, delay = 0 }: { 
  icon?: React.ComponentType<{ className?: string }>; 
  value: string; 
  label: string; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm flex items-center gap-2 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      {Icon && <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />}
      <span className="group-hover:text-white transition-colors duration-300">
        {value} {label}
      </span>
    </motion.div>
  );
}

export default function AboutPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  return (
    <>
      <Header />
      <main className="bg-[#0B0B0C] text-white">
        {/* Hero Section */}
        <motion.section 
          className="relative min-h-[36vh] md:min-h-[44vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <div className="absolute inset-0">
            <Image
              src="/content/home/optimized/about.webp"
              alt="Unify Fitness Team"
              fill
              className="object-cover brightness-50 grayscale"
              style={{ filter: 'brightness(0.5) grayscale(100%)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-[#0B0B0C]/40" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-wide leading-tight"
              variants={fadeInUp}
            >
              ABOUT US
            </motion.h1>
          </div>
        </motion.section>

        {/* How It Started Section */}
        <motion.section 
          className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div variants={slideFromLeft} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold">HOW IT ALL STARTED</h2>
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Having been in the health & fitness industry for <AnimatedCounter target={25} suffix="+" /> years, we wanted to create a different 
                  atmosphere and experience. Our mission is to unify the 3 major aspects of health & fitness to 
                  maximize our clients potential.
                </p>
                
                {/* Interactive Stats Grid */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  <motion.div 
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter target={500} suffix="+" />
                    </div>
                    <div className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      Members Trained
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      <AnimatedCounter target={8} />
                    </div>
                    <div className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                      Years in Glencoe
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Pills */}
                <div className="flex flex-wrap gap-3">
                  <StatPill icon={Clock} value="25+" label="Years Coaching" delay={0.1} />
                  <StatPill icon={Users} value="1" label="Community" delay={0.2} />
                  <StatPill icon={Target} value="3" label="Pillars" delay={0.3} />
                </div>
              </motion.div>
              
              <motion.div variants={slideFromRight} className="lg:order-last">
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/content/home/about1.jpg"
                    alt="How we started"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Vision Section */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div variants={fadeInUp} className="lg:order-first">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/content/home/about2.jpg"
                    alt="Our vision"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6 lg:order-last">
                <div className="relative">
                  <div className="absolute -top-1 left-0 w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50"></div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold pt-4">OUR VISION</h2>
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
                  Our team of highly trained fitness professionals, all from diverse backgrounds, creates a truly magical environment. 
                  The key to success is listening to our valued clients, understanding what is important to each and then executing 
                  to ensure we are providing the most unique, fun and inspiring place to achieve results.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-white font-medium">
                    "We believe fitness should unite, not divide. Every body, every goal, every journey matters here."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
              variants={fadeInUp}
            >
              OUR VALUES
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community",
                  description: "Building connections that last beyond the gym walls"
                },
                {
                  icon: Target,
                  title: "Coaching Quality",
                  description: "Expert guidance tailored to your unique journey"
                },
                {
                  icon: Heart,
                  title: "Inclusive Training",
                  description: "Welcoming environment for every fitness level"
                },
                {
                  icon: TrendingUp,
                  title: "Results-Driven",
                  description: "Focused approach that delivers real outcomes"
                }
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                  <p className="text-neutral-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Milestones Timeline + CTA */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
              variants={fadeInUp}
            >
              OUR JOURNEY
            </motion.h2>
            
            {/* Interactive Timeline with Photos */}
            <div className="relative mb-20">
              {/* Photo Preview Area - Desktop */}
              <motion.div 
                className="hidden md:block mb-12 h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative"
                layout
              >
                {(hoveredMilestone !== null || selectedMilestone !== null) ? (
                  <motion.div
                    key={(hoveredMilestone ?? selectedMilestone)!}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full h-full bg-neutral-900"
                  >
                    <Image
                      src={[
                        { image: "/content/home/about1.jpg", year: "2016" },
                        { image: "/content/home/team1.jpg", year: "2019" },
                        { image: "/content/home/facility.jpg", year: "2022" },
                        { image: "/content/home/about2.jpg", year: "2025" }
                      ][(hoveredMilestone ?? selectedMilestone)!].image}
                      alt="Timeline milestone"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <motion.h3 
                        className="text-2xl font-display font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {[
                          { year: "2016", title: "The Beginning" },
                          { year: "2019", title: "Growing Expertise" },
                          { year: "2022", title: "Premier Destination" },
                          { year: "2025", title: "Future Vision" }
                        ][(hoveredMilestone ?? selectedMilestone)!].title}
                      </motion.h3>
                      <motion.p 
                        className="text-neutral-200"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {[
                          "Founded with a vision to unite fitness",
                          "Expanded our coaching expertise", 
                          "Became Glencoe's premier gym",
                          "Continuing to innovate and inspire"
                        ][(hoveredMilestone ?? selectedMilestone)!]}
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="relative w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    {[
                      { image: "/content/home/about1.jpg", year: "2016", title: "The Beginning" },
                      { image: "/content/home/team1.jpg", year: "2019", title: "Growing Expertise" },
                      { image: "/content/home/facility.jpg", year: "2022", title: "Premier Destination" },
                      { image: "/content/home/about2.jpg", year: "2025", title: "Future Vision" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="relative rounded-lg overflow-hidden cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedMilestone(idx)}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 text-white">
                          <div className="text-sm font-bold">{item.year}</div>
                          <div className="text-xs opacity-90">{item.title}</div>
                        </div>
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                    
                    {/* Instruction overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 2, duration: 1 }}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="text-center text-white">
                        <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm">Click any photo or hover timeline below</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {/* Animated timeline line */}
              <motion.div 
                className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/20 origin-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={timelineVariants}
                style={{ top: 'calc(100% - 8rem)' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
              
              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
                {[
                  { 
                    year: "2016", 
                    milestone: "Founded with a vision to unite fitness", 
                    icon: Heart,
                    image: "/content/home/about1.jpg",
                    imageAlt: "Our founding vision"
                  },
                  { 
                    year: "2019", 
                    milestone: "Expanded our coaching expertise", 
                    icon: TrendingUp,
                    image: "/content/home/team1.jpg",
                    imageAlt: "Professional coaching team"
                  },
                  { 
                    year: "2022", 
                    milestone: "Became Glencoe's premier gym", 
                    icon: Target,
                    image: "/content/home/facility.jpg",
                    imageAlt: "Our premium facility"
                  },
                  { 
                    year: "2025", 
                    milestone: "Continuing to innovate and inspire", 
                    icon: Users,
                    image: "/content/home/about2.jpg",
                    imageAlt: "Future innovations"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={milestoneVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="md:text-center relative group cursor-pointer"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                  >
                    {/* Mobile Layout with Inline Image */}
                    <div className="md:hidden flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <motion.div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0B0B0C] relative overflow-hidden transition-all duration-300 flex-shrink-0 ${
                          hoveredMilestone === index || selectedMilestone === index 
                            ? 'bg-primary shadow-lg shadow-primary/25' 
                            : 'bg-primary group-hover:shadow-lg group-hover:shadow-primary/25'
                        }`}
                        whileHover={{ 
                          boxShadow: "0 0 15px rgba(0, 194, 255, 0.3)" 
                        }}
                        animate={{
                          scale: selectedMilestone === index ? 1.05 : 1,
                          boxShadow: selectedMilestone === index ? "0 0 20px rgba(0, 194, 255, 0.4)" : "0 0 0px rgba(0, 194, 255, 0)"
                        }}
                      >
                        {/* Mobile pulse animation */}
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-full"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0, 0.2]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 1.0
                          }}
                        />
                        
                        {/* Mobile icon overlay */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        {/* Mobile year text */}
                        <motion.span 
                          className="text-white font-bold text-sm relative z-10 group-hover:opacity-0 transition-opacity duration-200"
                        >
                          {item.year}
                        </motion.span>
                      </motion.div>
                      
                      {/* Mobile content and image */}
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg font-display font-bold mb-2"
                          style={{ color: selectedMilestone === index ? '#00C2FF' : 'white' }}
                        >
                          {item.year}: {[
                            "The Beginning",
                            "Growing Expertise", 
                            "Premier Destination",
                            "Future Vision"
                          ][index]}
                        </motion.h3>
                        <motion.p 
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            hoveredMilestone === index || selectedMilestone === index 
                              ? 'text-white' 
                              : 'text-neutral-300 group-hover:text-white'
                          }`}
                        >
                          {item.milestone}
                        </motion.p>
                      </div>
                      
                      {/* Mobile inline image */}
                      <motion.div 
                        className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          width={80}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block relative">
                      <motion.div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#0B0B0C] relative overflow-hidden transition-all duration-300 ${
                          hoveredMilestone === index || selectedMilestone === index 
                            ? 'bg-primary shadow-lg shadow-primary/25' 
                            : 'bg-primary group-hover:shadow-lg group-hover:shadow-primary/25'
                        }`}
                        whileHover={{ 
                          boxShadow: "0 0 15px rgba(0, 194, 255, 0.3)" 
                        }}
                        animate={{
                          scale: selectedMilestone === index ? 1.05 : 1,
                          boxShadow: selectedMilestone === index ? "0 0 20px rgba(0, 194, 255, 0.4)" : "0 0 0px rgba(0, 194, 255, 0)"
                        }}
                      >
                        {/* Animated background pulse */}
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-full"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0, 0.2]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 1.0
                          }}
                        />
                        
                        {/* Icon overlay on hover */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        {/* Year text */}
                        <motion.span 
                          className="text-white font-bold text-sm relative z-10 group-hover:opacity-0 transition-opacity duration-200"
                        >
                          {item.year}
                        </motion.span>
                      </motion.div>
                      
                      {/* Desktop floating thumbnail on hover */}
                      <motion.div
                        className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-20 rounded-lg overflow-hidden shadow-lg border-2 border-primary/50 z-20"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ 
                          opacity: hoveredMilestone === index ? 1 : 0,
                          scale: hoveredMilestone === index ? 1 : 0.8,
                          y: hoveredMilestone === index ? 0 : 10
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ pointerEvents: 'none' }}
                      >
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-1 left-1 text-white text-xs font-medium">
                          {item.year}
                        </div>
                      </motion.div>
                      
                      <motion.p 
                        className={`text-sm leading-relaxed text-center transition-colors duration-300 ${
                          hoveredMilestone === index || selectedMilestone === index 
                            ? 'text-white' 
                            : 'text-neutral-300 group-hover:text-white'
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.milestone}
                      </motion.p>
                      
                      {/* Desktop click indicator */}
                      <motion.div
                        className="mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredMilestone === index ? 1 : 0 
                        }}
                      >
                        {selectedMilestone === index ? "Click to deselect" : "Click to pin"}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <motion.div 
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Train With Us?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Join our community and discover what makes Unify Fitness the premier destination for fitness in Glencoe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" href="https://calendly.com/unifygym">
                  Join Today
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
