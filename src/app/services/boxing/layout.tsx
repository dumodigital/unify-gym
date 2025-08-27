import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boxing Training | Unify Fitness - Elite Boxing Classes in Glencoe, IL',
  description: 'Elite boxing training at Unify Fitness in Glencoe, IL. Master boxing fundamentals, build explosive power, and improve conditioning with expert instruction in small group classes.',
  keywords: 'boxing classes Glencoe IL, boxing training, fitness boxing, boxing gym, martial arts, strength conditioning, boxing techniques, personal training',
};

export default function BoxingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

