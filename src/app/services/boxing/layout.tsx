import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boxing - Coming Soon | Unify Fitness',
  description: 'Elite boxing program coming soon to Unify Fitness. High-intensity training combining traditional techniques with modern methods in our boutique Glencoe facility.',
};

export default function BoxingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

