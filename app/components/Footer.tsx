import React from 'react';
import { Twitter, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Get Started', href: '#cta' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-blue-600/40 to-teal-600/40">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="group">
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Ethereal
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                Revolutionizing the future of decentralized art and finance.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigationLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-px bg-gradient-to-r from-purple-400 to-transparent mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative backdrop-blur-lg bg-black/50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-4">
                {navigationLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@ethereal.com"
                className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                contact@ethereal.com
              </a>
              <div className="text-gray-300 pl-8">
                123 Blockchain Street
                <br />
                Crypto Valley, CV 12345
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ethereal. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-8">
                  {navigationLinks.slice(3).map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;