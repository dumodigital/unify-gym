import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Training | Unify Fitness - Expert Personal Trainers in Glencoe, IL',
  description: 'Transform your fitness with expert personal training at Unify Fitness in Glencoe, IL. Customized workouts, nutrition guidance, and accountability from certified trainers.',
  keywords: 'personal trainer Glencoe IL, personal training, fitness coach, strength training, weight loss, muscle building, nutrition coaching, one-on-one training',
};

export default function PersonalTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
