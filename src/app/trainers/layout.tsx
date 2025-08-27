import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expert Personal Trainers - Meet Our Certified Team",
  description: "Meet Unify Fitness's certified personal trainers in Glencoe, IL. Expert coaches specializing in strength training, weight loss, and athletic performance.",
  keywords: "personal trainers Glencoe IL, certified fitness coaches, strength training experts, weight loss trainers, athletic performance coaches",
  openGraph: {
    title: "Expert Personal Trainers - Meet Our Certified Team",
    description: "Meet Unify Fitness's certified personal trainers in Glencoe, IL. Expert coaches specializing in strength training, weight loss, and athletic performance.",
    images: [{
      url: "/content/home/optimized/team.webp",
      width: 1200,
      height: 630,
      alt: "Unify Fitness Personal Trainers - Expert Certified Coaches"
    }]
  }
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

