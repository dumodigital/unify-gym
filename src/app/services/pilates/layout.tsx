import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilates Classes | Unify Fitness - Expert Pilates Training in Glencoe, IL',
  description: 'Transform your body with expert Pilates classes at Unify Fitness in Glencoe, IL. Build core strength, improve flexibility, and enhance posture with our certified instructors.',
  keywords: 'pilates classes Glencoe IL, pilates training, core strength, flexibility, posture, reformer pilates, mat pilates, fitness classes',
};

export default function PilatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
