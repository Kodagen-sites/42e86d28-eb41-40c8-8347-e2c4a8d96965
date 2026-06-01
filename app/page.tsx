import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrubHero from "@/components/home/ScrubHero";
import Capabilities from "@/components/home/Capabilities";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSection from "@/components/home/AboutSection";
import CtaContact from "@/components/home/CtaContact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <ScrubHero />
        <Capabilities />
        <HowItWorks />
        <AboutSection />
        <CtaContact />
      </main>
      <Footer />
    </>
  );
}
