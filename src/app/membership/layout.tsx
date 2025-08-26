import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Membership — Unify Fitness",
  description: "Private, high-performance training memberships with expert coaches and a premium facility.",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
