"use client"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection";
import Navbar from "./components/Navbar";
import CTASection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600/40 via-blue-600/40 to-teal-600/40">
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col">
          <div id="hero" className="bg-white">
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