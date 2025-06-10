import { HeroSection } from "../components/HeroSection";
import { GlaucomaSection } from "../components/GlaucomaSection";
import { OfferSection } from "../components/OfferSection";
import { Footer } from '../components/Footer';

function LandingLayout() {
  return (
    <>
      <HeroSection />
      <GlaucomaSection />
      <OfferSection />
      <Footer />
    </>
  );
}

export default LandingLayout;