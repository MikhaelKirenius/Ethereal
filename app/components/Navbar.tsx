import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ethereal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Features', id: 'features' },
              { name: 'Get Started', id: 'cta' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-white transition-colors duration-200
                  ${item.name === 'Get Started' ? 
                    'px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white' : 
                    ''
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`
        md:hidden 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}
        overflow-hidden
        bg-black/90 backdrop-blur-lg
      `}>
        <div className="px-4 py-2 space-y-2">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'Features', id: 'features' },
            { name: 'Get Started', id: 'cta' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;