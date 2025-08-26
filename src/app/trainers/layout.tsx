import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trainers — Unify Fitness",
  description: "Meet Unify's expert coaching team and find the perfect trainer for your goals.",
};

export default function TrainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

