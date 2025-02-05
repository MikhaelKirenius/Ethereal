import React from "react";
import FeatureCard from "./FeaturesCard";
import { Shield, Zap, Gem } from "lucide-react";

const FeaturesSection: React.FC = () => {
    const features = [
      {
        Icon: Shield,
        title: "Bank-Grade Security",
        description: "Enterprise-level security with multi-signature wallets and advanced encryption protocols to keep your assets safe.",
      },
      {
        Icon: Zap,
        title: "Lightning-Fast Trades",
        description: "Execute trades at lightning speed with our optimized matching engine and layer-2 scaling solutions.",
      },
      {
        Icon: Gem,
        title: "Premium NFT Tools",
        description: "Create, mint, and trade NFTs with advanced tools for artists and collectors. Includes royalty management and tracking.",
      },
    ];
  
    return (
      <section className="min-h-screen w-full flex flex-col justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                }}>
              Powerful Features for Modern Finance
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience the next generation of decentralized trading with our cutting-edge features
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeaturesSection;
