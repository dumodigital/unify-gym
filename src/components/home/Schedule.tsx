'use client';
import { useState, useMemo } from 'react';

const tabs = ['All Events', 'Cardio', 'CrossFit', 'Gym', 'Powerlifting'] as const;

interface ClassEvent {
  id: string;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: number; // in minutes
  type: 'Cardio' | 'CrossFit' | 'Gym' | 'Powerlifting';
  capacity: number;
  spotsLeft: number;
  description: string;
}

// Sample class data for September 2025
const classEvents: ClassEvent[] = [
  // Cardio Classes
  {
    id: '1',
    title: 'HIIT Cardio Blast',
    instructor: 'Melissa Cesare',
    date: '2025-09-02',
    time: '6:00 AM',
    duration: 45,
    type: 'Cardio',
    capacity: 12,
    spotsLeft: 3,
    description: 'High-intensity interval training to boost your cardiovascular fitness'
  },
  {
    id: '2',
    title: 'Cardio Kickboxing',
    instructor: 'Leslie Garrett',
    date: '2025-09-04',
    time: '7:00 PM',
    duration: 50,
    type: 'Cardio',
    capacity: 15,
    spotsLeft: 8,
    description: 'Combine cardio with martial arts movements for a full-body workout'
  },
  {
    id: '3',
    title: 'Spin & Sculpt',
    instructor: 'Nikata Katsman',
    date: '2025-09-07',
    time: '9:00 AM',
    duration: 60,
    type: 'Cardio',
    capacity: 10,
    spotsLeft: 2,
    description: 'Indoor cycling combined with strength training'
  },
  
  // CrossFit Classes
  {
    id: '4',
    title: 'CrossFit Foundations',
    instructor: 'James Herron',
    date: '2025-09-03',
    time: '6:30 AM',
    duration: 60,
    type: 'CrossFit',
    capacity: 12,
    spotsLeft: 5,
    description: 'Perfect for beginners - learn the fundamentals of CrossFit'
  },
  {
    id: '5',
    title: 'CrossFit WOD',
    instructor: 'Melissa Cesare',
    date: '2025-09-05',
    time: '5:30 PM',
    duration: 60,
    type: 'CrossFit',
    capacity: 15,
    spotsLeft: 0,
    description: 'Workout of the Day - scaled for all fitness levels'
  },
  {
    id: '6',
    title: 'CrossFit Open Gym',
    instructor: 'Leslie Garrett',
    date: '2025-09-08',
    time: '10:00 AM',
    duration: 90,
    type: 'CrossFit',
    capacity: 20,
    spotsLeft: 12,
    description: 'Open gym format with coach supervision'
  },
  
  // Gym Classes
  {
    id: '7',
    title: 'Functional Fitness',
    instructor: 'Nikata Katsman',
    date: '2025-09-01',
    time: '8:00 AM',
    duration: 45,
    type: 'Gym',
    capacity: 10,
    spotsLeft: 4,
    description: 'Movement patterns that help you in everyday life'
  },
  {
    id: '8',
    title: 'Boot Camp',
    instructor: 'James Herron',
    date: '2025-09-06',
    time: '6:00 PM',
    duration: 50,
    type: 'Gym',
    capacity: 16,
    spotsLeft: 7,
    description: 'Military-inspired workout combining strength and cardio'
  },
  {
    id: '9',
    title: 'Core & Mobility',
    instructor: 'Mary Beth',
    date: '2025-09-09',
    time: '7:30 AM',
    duration: 30,
    type: 'Gym',
    capacity: 12,
    spotsLeft: 9,
    description: 'Focus on core strength and flexibility'
  },
  
  // Powerlifting Classes
  {
    id: '10',
    title: 'Powerlifting Basics',
    instructor: 'James Herron',
    date: '2025-09-02',
    time: '5:00 PM',
    duration: 75,
    type: 'Powerlifting',
    capacity: 8,
    spotsLeft: 1,
    description: 'Learn proper form for squat, bench press, and deadlift'
  },
  {
    id: '11',
    title: 'Competition Prep',
    instructor: 'Nikata Katsman',
    date: '2025-09-04',
    time: '4:00 PM',
    duration: 90,
    type: 'Powerlifting',
    capacity: 6,
    spotsLeft: 3,
    description: 'Advanced powerlifting techniques for competition'
  },
  {
    id: '12',
    title: 'Max Effort Training',
    instructor: 'Melissa Cesare',
    date: '2025-09-07',
    time: '11:00 AM',
    duration: 60,
    type: 'Powerlifting',
    capacity: 8,
    spotsLeft: 5,
    description: 'High-intensity powerlifting for strength gains'
  },
  
  // Additional classes throughout the month
  {
    id: '13',
    title: 'Morning HIIT',
    instructor: 'Leslie Garrett',
    date: '2025-09-10',
    time: '6:00 AM',
    duration: 45,
    type: 'Cardio',
    capacity: 12,
    spotsLeft: 6,
    description: 'Start your day with high-intensity cardio'
  },
  {
    id: '14',
    title: 'Strength Fundamentals',
    instructor: 'James Herron',
    date: '2025-09-11',
    time: '7:00 PM',
    duration: 60,
    type: 'Powerlifting',
    capacity: 10,
    spotsLeft: 4,
    description: 'Build your foundation in powerlifting'
  },
  {
    id: '15',
    title: 'Flexibility & Recovery',
    instructor: 'Mary Beth',
    date: '2025-09-12',
    time: '8:00 AM',
    duration: 45,
    type: 'Gym',
    capacity: 8,
    spotsLeft: 8,
    description: 'Focus on flexibility and muscle recovery'
  },
  {
    id: '16',
    title: 'CrossFit Challenge',
    instructor: 'Nikata Katsman',
    date: '2025-09-13',
    time: '6:30 PM',
    duration: 75,
    type: 'CrossFit',
    capacity: 16,
    spotsLeft: 3,
    description: 'Push your limits with challenging WODs'
  },
  {
    id: '17',
    title: 'Weekend Warrior',
    instructor: 'Melissa Cesare',
    date: '2025-09-14',
    time: '9:00 AM',
    duration: 90,
    type: 'Gym',
    capacity: 20,
    spotsLeft: 12,
    description: 'Intense weekend workout for busy schedules'
  },
  {
    id: '18',
    title: 'Cardio Circuit',
    instructor: 'Leslie Garrett',
    date: '2025-09-16',
    time: '5:30 PM',
    duration: 50,
    type: 'Cardio',
    capacity: 14,
    spotsLeft: 7,
    description: 'Circuit training for cardiovascular fitness'
  },
  {
    id: '19',
    title: 'Olympic Lifting',
    instructor: 'James Herron',
    date: '2025-09-17',
    time: '4:00 PM',
    duration: 75,
    type: 'Powerlifting',
    capacity: 8,
    spotsLeft: 2,
    description: 'Learn Olympic lifting techniques'
  },
  {
    id: '20',
    title: 'CrossFit Endurance',
    instructor: 'Nikata Katsman',
    date: '2025-09-18',
    time: '6:00 AM',
    duration: 60,
    type: 'CrossFit',
    capacity: 12,
    spotsLeft: 9,
    description: 'Build endurance with CrossFit movements'
  },
  {
    id: '21',
    title: 'Functional Movement',
    instructor: 'Mary Beth',
    date: '2025-09-19',
    time: '7:30 AM',
    duration: 45,
    type: 'Gym',
    capacity: 10,
    spotsLeft: 5,
    description: 'Improve movement quality and mobility'
  },
  {
    id: '22',
    title: 'HIIT Boxing',
    instructor: 'Leslie Garrett',
    date: '2025-09-20',
    time: '6:30 PM',
    duration: 50,
    type: 'Cardio',
    capacity: 12,
    spotsLeft: 0,
    description: 'Boxing-inspired HIIT workout'
  },
  {
    id: '23',
    title: 'Powerlifting Meet Prep',
    instructor: 'James Herron',
    date: '2025-09-21',
    time: '10:00 AM',
    duration: 90,
    type: 'Powerlifting',
    capacity: 6,
    spotsLeft: 1,
    description: 'Prepare for powerlifting competition'
  },
  {
    id: '24',
    title: 'Sunday Sweat',
    instructor: 'Melissa Cesare',
    date: '2025-09-22',
    time: '11:00 AM',
    duration: 60,
    type: 'CrossFit',
    capacity: 15,
    spotsLeft: 8,
    description: 'Sunday CrossFit session to end the week strong'
  },
  {
    id: '25',
    title: 'Metabolic Conditioning',
    instructor: 'Nikata Katsman',
    date: '2025-09-23',
    time: '6:00 AM',
    duration: 45,
    type: 'Cardio',
    capacity: 14,
    spotsLeft: 6,
    description: 'High-intensity metabolic workout'
  },
  {
    id: '26',
    title: 'Strength & Conditioning',
    instructor: 'James Herron',
    date: '2025-09-24',
    time: '5:00 PM',
    duration: 75,
    type: 'Gym',
    capacity: 12,
    spotsLeft: 4,
    description: 'Build strength and improve conditioning'
  },
  {
    id: '27',
    title: 'Open Gym',
    instructor: 'Melissa Cesare',
    date: '2025-09-25',
    time: '7:00 PM',
    duration: 90,
    type: 'Gym',
    capacity: 25,
    spotsLeft: 18,
    description: 'Self-directed training with coach supervision'
  },
  {
    id: '28',
    title: 'CrossFit Skills',
    instructor: 'Leslie Garrett',
    date: '2025-09-26',
    time: '8:00 AM',
    duration: 60,
    type: 'CrossFit',
    capacity: 10,
    spotsLeft: 7,
    description: 'Focus on CrossFit movement skills'
  },
  {
    id: '29',
    title: 'Cardio Blast',
    instructor: 'Nikata Katsman',
    date: '2025-09-27',
    time: '9:00 AM',
    duration: 45,
    type: 'Cardio',
    capacity: 16,
    spotsLeft: 11,
    description: 'High-energy cardio session'
  },
  {
    id: '30',
    title: 'Saturday Strength',
    instructor: 'James Herron',
    date: '2025-09-28',
    time: '10:00 AM',
    duration: 75,
    type: 'Powerlifting',
    capacity: 8,
    spotsLeft: 3,
    description: 'Weekend powerlifting session'
  },
  {
    id: '31',
    title: 'Recovery & Mobility',
    instructor: 'Mary Beth',
    date: '2025-09-29',
    time: '4:00 PM',
    duration: 60,
    type: 'Gym',
    capacity: 12,
    spotsLeft: 10,
    description: 'End the month with recovery and mobility work'
  },
  {
    id: '32',
    title: 'Month-End Challenge',
    instructor: 'Melissa Cesare',
    date: '2025-09-30',
    time: '6:00 PM',
    duration: 60,
    type: 'CrossFit',
    capacity: 20,
    spotsLeft: 5,
    description: 'Special challenge workout to close out September'
  }
];

export default function Schedule() {
  const [active, setActive] = useState<typeof tabs[number]>('All Events');
  const [currentDate] = useState(new Date(2025, 8, 1)); // September 2025

  const filteredEvents = useMemo(() => {
    if (active === 'All Events') {
      return classEvents;
    }
    return classEvents.filter(event => event.type === active);
  }, [active]);

  // Generate calendar days
  const generateCalendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Start from the beginning of the week
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    // Generate 42 days (6 weeks)
    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    
    return days;
  }, [currentDate]);

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return filteredEvents.filter(event => event.date === dateString);
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <section className="bg-neutral-900 text-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-4xl tracking-wide2 text-center">TRAINING HOURS AND CLASSES</h2>
        
        {/* Month Display */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-neutral-200 uppercase tracking-wider">
            {formatMonth(currentDate)}
          </h3>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-md uppercase tracking-wide2 text-sm border transition-all duration-300 ${
                active === t 
                  ? 'border-blue-500 text-blue-400 bg-blue-500/10' 
                  : 'border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        
        {/* Calendar */}
        <div className="mt-10 bg-neutral-800 rounded-2xl p-6 border border-neutral-700">
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center py-3 text-neutral-400 text-sm font-medium uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays.map((date, index) => {
              const dayEvents = getEventsForDate(date);
              const isCurrentMonthDay = isCurrentMonth(date);
              const isTodayDate = isToday(date);
              
              return (
                <div
                  key={index}
                  className={`min-h-[120px] p-2 border border-neutral-700 transition-all duration-200 ${
                    isCurrentMonthDay 
                      ? 'bg-neutral-800 hover:bg-neutral-750' 
                      : 'bg-neutral-850 text-neutral-600'
                  } ${isTodayDate ? 'ring-2 ring-red-500 bg-red-500/5' : ''}`}
                >
                  <div className={`text-right mb-2 ${
                    isTodayDate 
                      ? 'bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-auto text-sm font-bold'
                      : `text-sm font-medium ${isCurrentMonthDay ? 'text-neutral-200' : 'text-neutral-600'}`
                  }`}>
                    {date.getDate()}
                  </div>
                  
                  {/* Events for this day */}
                  <div className="space-y-1">
                    {dayEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 transition-opacity ${
                          event.type === 'Cardio' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                          event.type === 'CrossFit' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                          event.type === 'Gym' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}
                        title={`${event.title} - ${event.time} with ${event.instructor}`}
                      >
                        <div className="font-medium">{event.time}</div>
                        <div className="truncate">{event.title}</div>
                      </div>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-xs text-neutral-400 font-medium">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500/20 border border-red-500/30 rounded"></div>
            <span className="text-neutral-400">Cardio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500/20 border border-orange-500/30 rounded"></div>
            <span className="text-neutral-400">CrossFit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/20 border border-green-500/30 rounded"></div>
            <span className="text-neutral-400">Gym</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500/20 border border-blue-500/30 rounded"></div>
            <span className="text-neutral-400">Powerlifting</span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://calendly.com/unifygym"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Full Schedule & Book
          </a>
        </div>
      </div>
    </section>
  );
}
