"use client"
import HeroSection from "./components/HeroSection"
import InteractiveWaveGradient from "./components/Dynamic";
import FeaturesSection from "./components/FeaturesSection";
import Navbar from "./components/Navbar";
import CTASection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
    <InteractiveWaveGradient />
    <div className="relative z-10">
      <Navbar />
      <div className="flex flex-col">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="cta">
          <CTASection />
        </div>
        <Footer />
      </div>
    </div>
  </div>
  );
}