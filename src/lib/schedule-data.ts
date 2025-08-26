// Class schedule data management
export interface ClassEvent {
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

// This would typically come from a database or CMS
// For now, we'll store it in localStorage for demo purposes
export const getScheduleData = (): ClassEvent[] => {
  if (typeof window === 'undefined') {
    return defaultScheduleData; // Server-side fallback
  }
  
  const stored = localStorage.getItem('gym-schedule-data');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Error parsing schedule data:', error);
      return defaultScheduleData;
    }
  }
  
  // Initialize with default data
  localStorage.setItem('gym-schedule-data', JSON.stringify(defaultScheduleData));
  return defaultScheduleData;
};

export const saveScheduleData = (data: ClassEvent[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gym-schedule-data', JSON.stringify(data));
  }
};

export const addClassEvent = (event: Omit<ClassEvent, 'id'>): ClassEvent => {
  const newEvent: ClassEvent = {
    ...event,
    id: Date.now().toString(), // Simple ID generation
  };
  
  const currentData = getScheduleData();
  const updatedData = [...currentData, newEvent];
  saveScheduleData(updatedData);
  
  return newEvent;
};

export const updateClassEvent = (id: string, updates: Partial<ClassEvent>): ClassEvent | null => {
  const currentData = getScheduleData();
  const index = currentData.findIndex(event => event.id === id);
  
  if (index === -1) return null;
  
  const updatedEvent = { ...currentData[index], ...updates };
  const updatedData = [...currentData];
  updatedData[index] = updatedEvent;
  
  saveScheduleData(updatedData);
  return updatedEvent;
};

export const deleteClassEvent = (id: string): boolean => {
  const currentData = getScheduleData();
  const filteredData = currentData.filter(event => event.id !== id);
  
  if (filteredData.length === currentData.length) return false;
  
  saveScheduleData(filteredData);
  return true;
};

// Default schedule data (same as before)
const defaultScheduleData: ClassEvent[] = [
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
  }
];
