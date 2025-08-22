import '../styles/globals.css';
import '../styles/tokens.css';
import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' });

export const metadata: Metadata = {
  title: 'Unify Gym',
  description: 'A boutique strength & conditioning gym',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans bg-black text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
