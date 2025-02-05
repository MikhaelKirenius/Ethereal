import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-4 py-12 md:py-0">
      <WavyBackground>
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Discover the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block sm:inline">
                Decentralized
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block">
                Art & Finance
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl">
              Join the revolution of digital creativity and financial
              innovation. Create, trade, and earn with next-generation NFTs and
              DeFi solutions.
            </p>

            <button
              className="group inline-flex items-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-purple-600 rounded-full 
                     hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default HeroSection;
