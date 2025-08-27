import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chiropractic Care - Lakefront Chiropractic | Unify Fitness',
  description: 'Professional chiropractic care with Dr. Joseph Ethen at Lakefront Chiropractic. Partnered with Unify Fitness in Glencoe, IL. Comprehensive spine, sports injury, and wellness treatments.',
  keywords: 'chiropractor Glencoe IL, Dr Joseph Ethen, Lakefront Chiropractic, spine care, sports injury, back pain treatment, neck pain, chiropractic Glencoe',
  openGraph: {
    title: 'Chiropractic Care - Lakefront Chiropractic | Unify Fitness',
    description: 'Professional chiropractic care with Dr. Joseph Ethen at Lakefront Chiropractic. Expert treatment for spine, sports injuries, and wellness in Glencoe, IL.',
    images: [{
      url: "/content/home/optimized/chiro.webp",
      width: 1200,
      height: 630,
      alt: "Lakefront Chiropractic - Professional Chiropractic Care in Glencoe"
    }]
  }
};

export default function ChiropracticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

