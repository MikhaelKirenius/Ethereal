import React, { useState, useEffect,useRef  } from "react";

interface FeatureCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
    index: number;
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ 
    Icon, 
    title, 
    description, 
    delay,
    index 
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
  
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`relative group p-8 rounded-2xl bg-black/40 backdrop-blur-xl
                   transition-all duration-700 transform hover:scale-105 border border-white/10
                   ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div 
          className="absolute inset-0 rounded-2xl opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        ${index % 2 === 0 ? 'rgba(0, 255, 224, 0.15)' : 'rgba(189, 0, 255, 0.15)'} 0%, 
                        transparent 70%)`
          }}
        />
  
        <div className="relative z-10">
          <div className="mb-6 inline-block p-4 rounded-xl bg-white/5">
            <Icon className="w-8 h-8 text-white" 
                 style={{
                   filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                 }}
            />
          </div>
  
          <h3 className="text-xl font-semibold mb-4 text-white tracking-wide"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
              }}>
            {title}
          </h3>
  
          <p className="text-white/80 leading-relaxed font-light"
             style={{
               textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
             }}>
            {description}
          </p>
        </div>
  
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute bottom-0 right-0 h-px w-12 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
      </div>
    );
  };

export default FeatureCard;
