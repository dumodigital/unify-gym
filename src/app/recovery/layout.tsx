import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute:
      'Unify Recovery: Infrared Sauna, NovaPod & Body Sculpting in Glencoe, IL | Unify Fitness',
  },
  description:
    'Unify Recovery is a private recovery studio inside Unify Gym in Glencoe, IL. Infrared sauna, full-body NovaPod therapy, and results-driven body sculpting. First visit $50. No membership required.',
  keywords:
    'Unify Recovery, infrared sauna Glencoe, NovaPod, body sculpting North Shore, recovery studio Glencoe IL, ClearLight sauna, KoreSCULPT, KoreTHERM, Unify Gym recovery',
};

export default function RecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
