import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Discover Unify Fitness's story, mission, and values. Learn how our gym in Glencoe, IL became the premier destination for personalized fitness and wellness.",
  keywords: "about Unify Fitness, gym story Glencoe, fitness mission, personal training philosophy, wellness center values",
  openGraph: {
    title: "About Unify Fitness - Our Story & Mission",
    description: "Discover Unify Fitness's story, mission, and values. Learn how our gym in Glencoe, IL became the premier destination for personalized fitness.",
    images: [{
      url: "/content/home/optimized/about.webp",
      width: 1200,
      height: 630,
      alt: "About Unify Fitness - Premium Gym in Glencoe"
    }]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
