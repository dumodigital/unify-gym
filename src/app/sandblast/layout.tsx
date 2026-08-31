import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandblast | Beachfront Summer Workout at Glencoe Beach | Unify Fitness',
  description:
    'Sandblast is a 45-minute beachfront total-body bootcamp at Glencoe Beach. Saturdays at 8 AM, all levels welcome. Strength, cardio, and Lake Michigan views with Unify Fitness.',
  keywords:
    'sandblast, Glencoe Beach workout, beach bootcamp, summer fitness Glencoe, outdoor fitness Illinois, Unify Fitness',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SandblastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
