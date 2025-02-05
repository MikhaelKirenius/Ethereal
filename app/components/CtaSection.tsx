"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Transform{' '}
            </span>
            Your Digital Future?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of creators and investors shaping the future of decentralized art and finance. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
              Watch Demo
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Active Users', value: '100K+' },
                { label: 'Trading Volume', value: '$500M+' },
                { label: 'Artists Onboarded', value: '50K+' },
                { label: 'TVL', value: '$550M+' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
