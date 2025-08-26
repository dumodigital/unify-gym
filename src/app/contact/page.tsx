'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Map from '@/components/home/Map';

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

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailSubject = `[Unify Fitness] ${formData.subject || 'Contact Inquiry'}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was generated from the Unify Fitness contact form.
    `.trim();

    const mailtoLink = `mailto:info@unifygym.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase tracking-wide2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wide2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 uppercase tracking-wide2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 uppercase tracking-wide2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
          >
            <option value="">Select a subject</option>
            <option value="membership">Membership Inquiry</option>
            <option value="personal-training">Personal Training</option>
            <option value="group-classes">Group Classes</option>
            <option value="boxing">Boxing Training</option>
            <option value="pilates">Pilates</option>
            <option value="chiropractic">Chiropractic Services</option>
            <option value="general">General Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase tracking-wide2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
          placeholder="Tell us about your fitness goals, questions, or how we can help you..."
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide2 text-sm flex items-center justify-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        Open Email to Send
      </motion.button>
      
      <p className="text-xs text-neutral-400 text-center">
        This will open your email client with your message pre-filled
      </p>
    </motion.form>
  );
}

// Contact info component
function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@unifygym.com",
      link: "mailto:info@unifygym.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(224) 522-9040",
      link: "tel:+12245229040"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "664 Vernon Avenue\nGlencoe, IL 60022",
      link: "https://maps.google.com/?q=664+Vernon+Avenue+Glencoe+IL+60022"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sun: 6:00 AM - 10:00 PM\nEvery Day",
      link: null
    }
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-neutral-300 hover:text-primary transition-colors duration-300 whitespace-pre-line"
                >
                  {item.content}
                </a>
              ) : (
                <div className="text-neutral-300 whitespace-pre-line">{item.content}</div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0B0B0C] text-white">
        {/* Hero Section */}
        <motion.section 
          className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <div className="absolute inset-0">
            <Image
              src="/content/home/optimized/hello.webp"
              alt="Contact Unify Fitness"
              fill
              className="object-cover brightness-50 grayscale"
              style={{ filter: 'brightness(0.5) grayscale(100%)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-[#0B0B0C]/40" />
          </div>
          
          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold tracking-wide"
              variants={fadeInUp}
            >
              CONTACT US
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-neutral-300 mt-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Ready to transform your fitness journey? Get in touch today.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div variants={slideFromLeft}>
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">GET IN TOUCH</h2>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Have questions about our programs, membership, or want to schedule a consultation? 
                    We'd love to hear from you and help you start your fitness journey.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={slideFromRight}>
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">REACH OUT</h2>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    Connect with us through any of these channels. Our team is here to support 
                    your fitness goals and answer any questions you might have.
                  </p>
                </div>
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="px-4 md:px-8 lg:px-12 mb-12">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">VISIT OUR FACILITY</h2>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Located in the heart of Glencoe, our boutique training facility offers a premium 
                fitness experience in a welcoming, community-focused environment.
              </p>
            </div>
          </div>
          <Map />
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of fitness enthusiasts and discover what makes Unify Fitness 
                the premier destination for health and wellness in Glencoe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://calendly.com/unifygym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wide2 transition-all duration-300 rounded-md bg-primary hover:bg-primary/90 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.a>
                <motion.a
                  href="/membership"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wide2 transition-all duration-300 rounded-md border-2 border-white/80 text-white hover:bg-white hover:text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Membership
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
