'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Dumbbell } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

type Trainer = {
  id: string;
  name: string;
  slug: string;
  headshot: string;
  specialties: ("Strength & Conditioning"|"Cardio"|"CrossFit"|"Powerlifting"|"Pilates"|"Boxing"|"Performance")[];
  bio: string;
  credentials?: string[];
  socials?: { instagram?: string; facebook?: string; };
  calendly?: string;
};

const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Melissa Delporte',
    slug: 'melissa-delporte',
    headshot: '/content/home/mel.jpg',
    specialties: ['Strength & Conditioning'],
    bio: 'Melissa has been in the fitness game for over 20 years. Having a thirst for fitness at a very young age, she would sneak into health clubs before she was old enough to be on the gym floor. Her relentless pursuit for success is infectious and felt by all those who train with her.',
    credentials: ['NASM-CPT', 'Corrective Exercise Specialist', 'Performance Enhancement Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '2',
    name: 'Leslie Garrett',
    slug: 'leslie-garrett',
    headshot: '/content/home/LESLIE GARRETT.jpg',
    specialties: ['Boxing', 'Weight Training', 'Group Fitness', 'Nutrition'],
    bio: 'Leslie developed a profound passion for working out in her late 20\'s after struggling with weight gain. She expanded her expertise into boxing, professional weight training and group fitness in the last ten years. She ties together her expansive knowledge of nutrition and fitness with a vivacious personality and bad ass street boxing vibes, which can only come from a true Chicagoan.',
    credentials: ['NASM-CPT', 'Boxing Certified', 'Group Fitness Instructor', 'Precision Nutrition Level 1'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '3',
    name: 'Marybeth Burke',
    slug: 'marybeth-burke',
    headshot: '/content/home/mary.jpeg',
    specialties: ['Pilates', 'Core Training'],
    bio: 'With a decade of teaching Pilates, Marybeth has continuously developed her passion for health & fitness. Marybeth will lead you through an intense CORE class to push you past your limitations. She is a perfect combination of charisma and strength that will make you forget you are working out. Pilates help build core strength, flexibility and lean muscle tone with an emphasis on lengthening the body and aligning the spine.',
    credentials: ['PMA-CPT', 'Romana\'s Pilates Certified', 'Mat Pilates Instructor', 'Reformer Certified'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '4',
    name: 'Nikita Katsman',
    slug: 'nikita-katsman',
    headshot: '/content/home/NIKATA KATSMAN.jpg',
    specialties: ['Strength & Conditioning', 'Performance', 'Boxing'],
    bio: 'Nikita grew up playing competitive sports and with years of training he applied his experience toward building a successful training career. Proficient in training the body and mind to work in unison, Nikita believes improves one\'s self is as natural to him as brushing his teeth. Always eager to learn and improve, Nikita uses everyday principles such as "Never Give Up" and give 100% to daily training, sport specific trainer, boxing and one-on-one training are his specialty.',
    credentials: ['NSCA-CSCS', 'NASM-CPT', 'Boxing Certified', 'Sport-Specific Training Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '5',
    name: 'James Herron',
    slug: 'james-herron',
    headshot: '/content/home/JAMES HERRON.jpg',
    specialties: ['Performance', 'Strength & Conditioning', 'Nutrition'],
    bio: 'As a former elite athlete in college football, wrestling and track, James has been helping athletes achieve their highest levels of performance using his extensive background in sports performance, neuroscience and sports nutrition. James focuses on mental, physical and emotional components to help clients achieve excellence not just in their physique, but also their lives. He believes in a balanced approach to training by not only bettering his clients along their fitness journey, but to also help them create an overall blueprint to living.',
    credentials: ['CSCS', 'Sports Performance Specialist', 'Neuroscience in Fitness', 'Precision Nutrition Certified'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '6',
    name: 'Jeff Delgado',
    slug: 'jeff-delgado',
    headshot: '/content/home/jeffbio.jpg',
    specialties: ['Boxing', 'Martial Arts', 'Strength Training'],
    bio: 'Jeff Delgado\'s focus and drive is to empower individuals so that they may better themselves through a healthier way of life. Individuality is very important to me when it comes to creating a program, whether it be through kettle bell training, martial arts, dynamic breathing and movement etc. For over 15 years I\'ve been training in traditional martial arts, boxing, kickboxing, unconventional strength training methods.',
    credentials: ['Traditional Martial Arts Certified', 'Boxing Certified', 'Kickboxing Instructor', 'Kettlebell Training Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '7',
    name: 'Meredith D\'arcy',
    slug: 'meredith-darcy',
    headshot: '/content/home/mer.jpeg',
    specialties: ['Strength & Conditioning', 'Performance', 'Core Training'],
    bio: 'I am a NASM-certified personal trainer and a fitness professional with a passion for improving quality of life through healthy lifestyles. I am motivated to help my clients upgrade their movement quality to maximize performance, live pain-free, improve overall wellness, and increase longevity. I believe in seeking a healthier life by developing consistent long-term habits. I am an athlete through and through; I\'ve dedicated my life to several sports, including strength training, running, and competitive travel soccer for 14 years, and I was a CrossFit Athlete for 3.5 years. Educate. Inspire. Motivate. The medical & fitness industry is filled with misinformation and too much information. It can become confusing and overwhelming to know where to begin a workout routine or healthy lifestyle! That\'s where I come in. My job as a personal trainer is to help educate my clients about the factual science of the human body. I prioritize core development, mobility, strength training, and cardiovascular conditioning with each client and individualize their program based on their goals and needs. I am passionate about inspiring others to take care of themselves and take charge of their life. I encourage consistency in both lifestyle and habits that will lead to increased longevity. I am motivated to help individuals reach their fitness goals. My true passion is helping others pursue the best version of themselves by working towards achieving a healthy balance of fitness, nutrition, and lifestyle. Achieving results is difficult if there are inconsistencies in diet, exercise, and lifestyle choices. That\'s where an accountability coach comes in.',
    credentials: ['NASM-CPT', 'Corrective Exercise Specialist', 'CrossFit Level 1', 'Movement Quality Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '8',
    name: 'Alex Alldritt',
    slug: 'alex-alldritt',
    headshot: '/content/home/alex.jpeg',
    specialties: ['Performance', 'Powerlifting', 'Corporate Wellness'],
    bio: 'Alex has provided training for personal and group needs for nearly 20 years (maybe change it to \'over 15 years\' or \'over 18 years\' only if you prefer). Her experiences range from training professional athletes in the NFL, NBA, and MLB (most impressive to least impressive), coaching competitive powerlifting (one word), managing corporate health programs and providing specialized training for seniors. Her latest certification is becoming a prenatal (one word) and postnatal (one word) specialist. Her personal motto: "Being strong and mobile is like the secret cheat code for life!"',
    credentials: ['Performance Coach Certified', 'Powerlifting Coach', 'Prenatal/Postnatal Specialist', 'Corporate Wellness Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '9',
    name: 'Tex Dimoulas',
    slug: 'tex-dimoulas',
    headshot: '/content/home/tex1.jpg',
    specialties: ['Strength & Conditioning', 'Powerlifting', 'Nutrition'],
    bio: 'Tex brings over a decade of experience in strength training and nutritional coaching to Unify Fitness. With a background in competitive powerlifting and bodybuilding, he understands the intricate relationship between proper nutrition and optimal performance. Tex specializes in helping clients build lean muscle mass while optimizing their dietary habits for sustainable results. His methodical approach to training combines heavy compound movements with strategic nutritional planning. Known for his direct communication style and results-driven programs, Tex has helped hundreds of clients transform their physiques and relationship with food. He believes that true strength comes from consistency in both the gym and the kitchen.',
    credentials: ['NASM-CPT', 'Precision Nutrition Level 2', 'USAPL Certified', 'Bodybuilding Coach'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '10',
    name: 'Dennis Katsman',
    slug: 'dennis-katsman',
    headshot: '/content/home/denn.jpg',
    specialties: ['Strength & Conditioning', 'Performance', 'Nutrition'],
    bio: 'Dennis is a trainer and an athlete. He has experience training individuals of all fitness levels. At a young age, he was introduced to tennis, swimming, and soccer. As he got older, soccer became his priority, and with that so did his training. After suffering from a knee injury during college, Dennis began his journey to recovery. In the process, he developed a deeper understanding of how the human body works. He used his newfound knowledge to incorporate new forms of exercise that would help him get back to training. Since then he has made it his goal to make sure that his clients understand that fitness goes beyond the gym. Based on his experience, Dennis stresses the importance of recovery, strength training, endurance, and healthy eating. He teaches his clients that each component plays an important role in maintaining a healthy lifestyle. He prides himself on his work ethic as he continues learning new ways of training that are effective and efficient.',
    credentials: ['NASM-CPT', 'CSCS', 'Injury Recovery Specialist', 'Holistic Fitness Coach'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '11',
    name: 'Donnie Smith',
    slug: 'donnie-smith',
    headshot: '/content/home/donnie.jpg',
    specialties: ['Strength & Conditioning', 'Performance', 'Sports Training'],
    bio: 'Donnie began his Fitness Journey at Culver Military Academy where he was a 3 sport Varsity Athlete in Football, Basketball, and Track & Field. He then went on to run Division I Track & Field at DePaul University where he went on to earn his BA in Liberal Arts & Science. His personal passion for fitness translated into his dedication to understanding the most effective and efficient ways to increase muscle mass and decrease body fat through functional training and nutrition. He is a NASM Certified Strength and Conditioning Specialist, ISSA Certified Personal Trainer, SafeSport certified to work with children, and a Certified.',
    credentials: ['NASM-CSCS', 'ISSA-CPT', 'SafeSport Certified', 'Youth Athletic Development', 'Functional Training Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '12',
    name: 'Mike Frey',
    slug: 'mike-frey',
    headshot: '/content/home/mike.png',
    specialties: ['Strength & Conditioning', 'Performance', 'Endurance Training', 'Youth & Senior Fitness'],
    bio: 'Mike graduated with a bachelor\'s degree in exercise science. He has been training on the North Shore for 18 years. His clients range in age from 12-85. He starts with new members by discussing their goals, physical health, and limitations. Mike then designs workouts to ensure maximum results. His enthusiasm for teaching and encouraging a lifestyle of health and fitness is wonderfully contagious. Mike cares deeply about his clients, and there\'s nothing more valuable to him than helping somebody go through an experience that makes them happy, confident, and strong. Mike enjoys playing soccer and golf. He has run the Chicago Marathon four times and continues to participate in other races. He loves hiking in the mountains of Colorado with his wife Ashley and son Landon.',
    credentials: ['Exercise Science Degree', 'NSCA-CPT', 'CSCS', 'Youth & Senior Fitness Specialist', 'Endurance Training Certified'],
    socials: { instagram: 'https://instagram.com/unifygym' }
  },
  {
    id: '13',
    name: 'Sasha Katsman',
    slug: 'sasha-katsman',
    headshot: '/content/home/sasha.jpg',
    specialties: ['Strength & Conditioning'],
    bio: 'Sasha combines technical expertise with genuine care for her clients\' success. With over 8 years of experience in strength training and conditioning, she specializes in creating programs that build both physical strength and mental resilience. Her patient, detail-oriented approach ensures proper form and safe progression, while her enthusiasm keeps clients motivated to reach their full potential.',
    credentials: ['NASM-CPT', 'CSCS', 'FMS Level 2', 'Women\'s Fitness Specialist'],
    socials: { instagram: 'https://instagram.com/unifygym' },
    calendly: 'https://calendly.com/unifygym/sasha'
  }
];

const SPECIALTY_FILTERS = [
  'All',
  'Strength & Conditioning',
  'Cardio',
  'CrossFit',
  'Powerlifting',
  'Pilates',
  'Boxing',
  'Performance',
  'Weight Training',
  'Group Fitness',
  'Nutrition',
  'HIIT',
  'Core Training',
  'Martial Arts',
  'Corporate Wellness'
] as const;

// Underline SVG Component
const Underline = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 12"
    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${className}`}
    style={{ width: '120%', opacity: 0.28 }}
  >
    <path
      d="M5 6 Q50 2 100 6 T195 6"
      stroke="#00C2FF"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Filter Chips Component
const FilterChips = ({ 
  activeFilter, 
  onFilterChange,
  trainerCount 
}: { 
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  trainerCount: number;
}) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {SPECIALTY_FILTERS.map((filter) => (
      <button
        key={filter}
        onClick={() => onFilterChange(filter)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeFilter === filter
            ? 'bg-primary text-white shadow-lg'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }`}
      >
        {filter}
      </button>
    ))}
    <div className="ml-auto text-white/60 text-sm self-center">
      {trainerCount} coach{trainerCount !== 1 ? 'es' : ''}
    </div>
  </div>
);

// Search Input Component
const SearchInput = ({ 
  searchTerm, 
  onSearchChange 
}: { 
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) => (
  <div className="relative mb-8">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
    <input
      type="text"
      placeholder="Search by name or specialty..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
);

// Trainer Card Component
const TrainerCard = ({ 
  trainer, 
  onOpenProfile 
}: { 
  trainer: Trainer;
  onOpenProfile: (trainer: Trainer) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
  >
    <div className="relative aspect-[3/4] overflow-hidden">
      <Image
        src={trainer.headshot}
        alt={trainer.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      

      
      {/* Name and Specialties */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg mb-2">{trainer.name}</h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {trainer.specialties.map((specialty, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-primary/80 text-white rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        {/* Action Button */}
        <button
          onClick={() => onOpenProfile(trainer)}
          className="w-full py-2 bg-white/20 backdrop-blur text-white text-sm font-medium rounded-lg hover:bg-white/30 transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  </motion.div>
);

// Profile Modal Component
const ProfileModal = ({ 
  trainer, 
  isOpen, 
  onClose 
}: { 
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!trainer) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-[#0B0B0C] border border-white/10 rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Trainer Profile</h2>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={trainer.headshot}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{trainer.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">About</h4>
                    <p className="text-white/80 leading-relaxed">{trainer.bio}</p>
                  </div>
                  
                  {trainer.credentials && trainer.credentials.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Credentials</h4>
                      <ul className="space-y-2">
                        {trainer.credentials.map((credential, index) => (
                          <li key={index} className="text-white/80 flex items-center">
                            <Dumbbell className="w-4 h-4 text-primary mr-2" />
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  

                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href="/membership"
                      className="w-full py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center border border-white/10 block"
                    >
                      View Membership
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// CTA Banner Component
const CTABanner = () => (
  <section className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">Ready to meet your coach?</h2>
    <p className="text-white/80 mb-6 max-w-2xl mx-auto">
      Our expert trainers are here to guide you on your fitness journey. Book a tour or join today to get started.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="https://calendly.com/unifygym"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors"
      >
        Book a Tour
      </Link>
      <Link
        href="/membership"
        className="px-8 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
      >
        Join Today
      </Link>
    </div>
  </section>
);

export default function TrainersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check URL for coach parameter
    const urlParams = new URLSearchParams(window.location.search);
    const coachSlug = urlParams.get('coach');
    if (coachSlug) {
      const trainer = TRAINERS.find(t => t.slug === coachSlug);
      if (trainer) {
        setSelectedTrainer(trainer);
        setIsModalOpen(true);
      }
    }

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseProfile();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const filteredTrainers = useMemo(() => {
    return TRAINERS.filter(trainer => {
      const matchesFilter = activeFilter === 'All' || trainer.specialties.includes(activeFilter as any);
      const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trainer.specialties.some(specialty => 
                             specialty.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const handleOpenProfile = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
    // Update URL
    if (mounted) {
      window.history.pushState({}, '', `?coach=${trainer.slug}`);
    }
  };

  const handleCloseProfile = () => {
    setIsModalOpen(false);
    setSelectedTrainer(null);
    // Restore URL
    if (mounted) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0B0B0C]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/content/home/Family.jpg"
            alt="Unify Fitness Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
              TEAM OF EXPERT COACHES
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mt-6"
          >
            Meet our team of certified professionals dedicated to helping you achieve your fitness goals
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <FilterChips 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            trainerCount={filteredTrainers.length}
          />
        </motion.div>

        {/* Trainer Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TrainerCard trainer={trainer} onOpenProfile={handleOpenProfile} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredTrainers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/60 text-lg">No trainers found matching your criteria.</p>
          </motion.div>
        )}

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTABanner />
        </motion.div>
      </section>

      {/* Profile Modal */}
      <ProfileModal
        trainer={selectedTrainer}
        isOpen={isModalOpen}
        onClose={handleCloseProfile}
      />
      </div>
      <Footer />
    </>
  );
}
