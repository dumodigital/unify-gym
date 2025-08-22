import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Hero from '@/components/home/Hero';
import Brand from '@/components/home/Brand';
import Tiles from '@/components/home/Tiles';
import Team from '@/components/home/Team';
import Services from '@/components/home/Services';
import VideoBanner from '@/components/home/VideoBanner';
import Schedule from '@/components/home/Schedule';
import Map from '@/components/home/Map';
import Contact from '@/components/home/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Brand />
        <Tiles />
        <Team />
        <Services />
        <VideoBanner />
        <Schedule />
        <Map />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
