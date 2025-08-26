import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Unify Fitness',
  description: 'Get in touch with Unify Fitness. Send us your questions, inquiries, or learn about joining our boutique training facility in Glencoe, Illinois.',
  keywords: 'contact, unify fitness, glencoe gym, personal training, fitness inquiries',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
