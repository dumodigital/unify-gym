import '../styles/globals.css';
import '../styles/tokens.css';
import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import CookieConsent from '@/components/site/CookieConsent';
import StructuredData from '@/components/site/StructuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://unifygym.com'),
  title: {
    default: 'Unify Fitness - Premium Gym in Glencoe, IL',
    template: '%s | Unify Fitness'
  },
  description: 'Unify Fitness is a premium gym in Glencoe, Illinois offering personal training, boxing, pilates, and chiropractic services. Transform your health with expert coaches.',
  keywords: [
    'gym Glencoe IL',
    'personal training Glencoe',
    'strength training',
    'boxing classes',
    'pilates',
    'chiropractic',
    'fitness center Glencoe',
    'private gym',
    'North Shore fitness'
  ],
  authors: [{ name: 'Unify Fitness' }],
  creator: 'Unify Fitness',
  publisher: 'Unify Fitness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unifygym.com',
    siteName: 'Unify Fitness',
    title: 'Unify Fitness - Premium Gym in Glencoe, IL',
    description: 'Transform your health at Unify Fitness, a premium gym in Glencoe, IL. Expert personal training, boxing, pilates, and chiropractic services.',
    images: [
      {
        url: '/unf.png',
        width: 880,
        height: 850,
        alt: 'Unify Fitness - Premium Gym in Glencoe, Illinois',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unify Fitness - Premium Gym in Glencoe, IL',
    description: 'Transform your health at Unify Fitness, a premium gym in Glencoe, IL. Expert personal training, boxing, pilates, and chiropractic services.',
    images: ['/unf.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here', // Replace with actual Google verification token
  },
  icons: {
    icon: '/unf.png',
    shortcut: '/unf.png',
    apple: '/unf.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans bg-black text-neutral-50 antialiased">
        <StructuredData type="organization" />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
