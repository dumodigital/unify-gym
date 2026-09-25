import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Hero from '@/components/home/Hero';
// Seasonal: restore Sandblast homepage callout next summer
// import SandblastCallout from '@/components/home/SandblastCallout';
import Tiles from '@/components/home/Tiles';
import Team from '@/components/home/Team';
import GoogleReviews from '@/components/home/GoogleReviews';
import Services from '@/components/home/Services';
import RecoveryCallout from '@/components/home/RecoveryCallout';
import Contact from '@/components/home/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tiles />
        {/* Seasonal: restore next summer */}
        {/* <SandblastCallout /> */}
        <Team />
        <GoogleReviews />
        <Services />
        <RecoveryCallout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
