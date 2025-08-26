import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us — Unify Fitness",
  description: "Our story, vision, values, and milestones at Unify Fitness."
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
