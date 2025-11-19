import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WarehouseGallery from "./components/WarehouseGallery";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Header />
      <Hero />
      <CTA />
      <HowItWorks />
      <Services />
      <WarehouseGallery />
      <Pricing />
      <Testimonials />
      <WhyChoose />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </main>
  );
}
