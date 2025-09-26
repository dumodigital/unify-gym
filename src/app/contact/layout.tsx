import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Started at Unify Fitness',
  description: 'Contact Unify Fitness in Glencoe, IL. Call (224) 522-9040 or visit us at 662 Vernon Avenue. Start your fitness journey with our expert team today.',
  keywords: 'contact Unify Fitness, gym Glencoe IL phone number, 662 Vernon Avenue, fitness consultation, join gym Glencoe',
  openGraph: {
    title: 'Contact Us - Get Started at Unify Fitness',
    description: 'Contact Unify Fitness in Glencoe, IL. Call (224) 522-9040 or visit us at 662 Vernon Avenue. Start your fitness journey with our expert team today.',
    images: [{
      url: "/content/home/optimized/Unify-Fitness.webp",
      width: 1200,
      height: 630,
      alt: "Contact Unify Fitness - Premium Gym in Glencoe"
    }]
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
