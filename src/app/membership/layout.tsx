import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Membership Plans & Pricing - Join Unify Fitness",
  description: "Join Unify Fitness in Glencoe, IL. Exclusive membership plans for personal training, group classes, and premium facility access. Transform your fitness journey today.",
  keywords: "gym membership Glencoe IL, personal training membership, fitness pricing, private gym membership, North Shore fitness center",
  openGraph: {
    title: "Membership Plans & Pricing - Join Unify Fitness",
    description: "Join Unify Fitness in Glencoe, IL. Exclusive membership plans for personal training, group classes, and premium facility access.",
    images: [{
      url: "/content/home/optimized/membership.webp",
      width: 1200,
      height: 630,
      alt: "Unify Fitness Membership Plans - Premium Gym"
    }]
  }
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
