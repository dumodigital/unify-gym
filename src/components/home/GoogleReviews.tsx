'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/site/Section';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Anonymous",
    rating: 5,
    text: "Great trainers, especially Melissa, friendly atmosphere, plenty of equipment, always clean. Now with Covid-19, staff wear masks, clean equipment after each use, provide sanitizers. I enjoy coming here.",
    date: "4 years ago"
  },
  {
    id: 2,
    name: "Anonymous",
    rating: 5,
    text: "Unify Gym in Glencoe is awesome!! Owners Leslie and Melissa run a quality operation. Clean, professional, state of art equipment and great trainers! I train with Nikita and he is always trying to structure workouts for my physical condition and limitations. Maybe most importantly, it is a fun vibe, good music and friendly people!",
    date: "4 years ago"
  },
  {
    id: 3,
    name: "Robert Wise",
    rating: 5,
    text: "Best gym in the Northshore! Private, clean and great trainers. I've been coming to Unify since opening in 2018 and have made great progress in my overall health and fitness goals. If you're looking for more of a exclusive one on one training experience, then check out Unify.",
    date: "4 years ago"
  },
  {
    id: 4,
    name: "Anonymous",
    rating: 5,
    text: "The coaches are AMAZING!! They motivate you in so many ways with words of encouragement, energy, cheering for you to keep going and push past the idea of what you think you can do!! Each coach brings a little something different to class but all of them are rooting for you!!",
    date: "2 years ago"
  },
  {
    id: 5,
    name: "Bardi Plumbing & Heating Co.",
    rating: 5,
    text: "Visiting from out of state and needed a place to work out for a few days so I emailed unify and Leslie responded to me immediately, said it wasn't a problem. There's a minor fee that they call a 'drop-in fee'. The facilities very nice and clean also the people and trainees there are very pleasant, yes I highly recommend unify.",
    date: "2 years ago"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    rating: 5,
    text: "The personalized attention here is unmatched. Every trainer knows your name and your goals. The small group setting makes all the difference - you get the energy of a group workout with the focus of personal training.",
    date: "3 weeks ago"
  },
  {
    id: 7,
    name: "Michael Thompson",
    rating: 5,
    text: "I've tried many gyms in the area, but nothing compares to Unify. The equipment is top-notch, the facility is spotless, and the community feel is incredible. Worth every penny and then some!",
    date: "1 month ago"
  },
  {
    id: 8,
    name: "Jennifer Lee",
    rating: 5,
    text: "As someone who was intimidated by fitness, the trainers here made me feel so comfortable from day one. They meet you where you are and help you grow. The progress I've made in just 6 months is amazing!",
    date: "2 weeks ago"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-amber-400' : 'text-slate-300'} drop-shadow-sm`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-3 sm:p-4 mx-1 sm:mx-3 h-32 sm:h-40 flex flex-col sm:flex-row gap-3 sm:gap-4 border border-slate-100 hover:border-slate-200 group">
      {/* Left section - Avatar, Name, Date, Stars */}
      <div className="flex flex-col sm:flex-shrink-0 sm:w-48">
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
            {review.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-900 text-xs sm:text-sm truncate">{review.name}</h4>
            <p className="text-xs text-slate-500">{review.date}</p>
          </div>
        </div>
        <div className="mt-1">
          <StarRating rating={review.rating} />
        </div>
      </div>
      
      {/* Right section - Quote */}
      <blockquote className="text-slate-700 leading-snug text-xs sm:text-sm font-medium flex-1 overflow-hidden">
        <span 
          className="block overflow-hidden line-clamp-3 sm:line-clamp-4"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical'
          }}
        >"{review.text}"</span>
      </blockquote>
    </div>
  );
};

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <Section className="bg-gradient-to-b from-slate-50 via-gray-100 to-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/content/home/google.webp"
              alt="Google"
              width={110}
              height={36}
              className="h-9 w-auto"
            />
            <div className="flex items-center gap-1.5">
              <StarRating rating={5} />
              <span className="text-base text-slate-700 ml-2 font-semibold">5.0</span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Client Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hear what our members say about their transformation journey with us
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop View - Show 3 cards */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex * 33.333)}%)`,
                  width: `${(reviews.length * 33.333)}%`
                }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-1/3 flex-shrink-0">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Show 1 card */}
          <div className="md:hidden relative">
            <div className="overflow-hidden mx-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex * 100)}%)`,
                  width: `${(reviews.length * 100)}%`
                }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-1">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-6 bg-white/95 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-slate-200 z-10"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-6 bg-white/95 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-slate-200 z-10"
            aria-label="Next review"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-slate-700 scale-125 shadow-md'
                  : 'bg-slate-400 hover:bg-slate-600 hover:scale-110'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6 lg:mt-8">
          <p className="text-slate-600 mb-6 font-medium text-lg">Ready to start your transformation?</p>
          <a
            href="https://calendly.com/unifyfitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-slate-700"
          >
            Join Today
          </a>
        </div>
      </div>
    </Section>
  );
}
