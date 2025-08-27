import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Hero from '@/components/home/Hero';
import Brand from '@/components/home/Brand';
import Tiles from '@/components/home/Tiles';
import Team from '@/components/home/Team';
import GoogleReviews from '@/components/home/GoogleReviews';
import Services from '@/components/home/Services';

import Schedule from '@/components/home/Schedule';
import Map from '@/components/home/Map';
import Contact from '@/components/home/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brand />
        <Tiles />
        <Team />
        <GoogleReviews />
        <Services />
        <Schedule />
        <Map />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
