import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import FooterLegal from './components/FooterLegal';
import FooterLinks from './components/FooterLinks';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

// Imported images from assets
import ipadAirImage from './assets/ipad-air.png';
import macbookImage from './assets/macbook.jpg';
import appleWatchImage from './assets/apple-watch.jpg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="iPad Air"
        subtitle="Now with the M2 chip."
        dark={true}
        bgImage={ipadAirImage}
      />

      <Section
        title="MacBook Air"
        subtitle="Supercharged by M3."
        dark={true}
        bgImage={macbookImage}
      />

      <Section
        title="Apple Watch Series 9"
        subtitle="Smarter. Brighter. Mightier."
        dark={true}
        bgImage={appleWatchImage}
      />

      <FooterLinks />
      <FooterLegal />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;