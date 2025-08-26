import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chiropractic Care - Lakefront Chiropractic | Unify Fitness',
  description: 'Professional chiropractic care with Dr. Joseph Ethen at Lakefront Chiropractic. Partnered with Unify Fitness in Glencoe, IL. Comprehensive spine, sports injury, and wellness treatments.',
};

export default function ChiropracticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

