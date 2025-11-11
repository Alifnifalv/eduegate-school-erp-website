import React from 'react';
import { Headphones, Search } from 'lucide-react';

export function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-40 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 bg-blue-700/50 backdrop-blur-sm border border-blue-600 rounded-full px-4 py-2">
          <Headphones className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-medium text-blue-100">Always Here to Help</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
          We're Here for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Your Success</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Get instant help, answers to common questions, and connect with our dedicated support team to ensure your institution thrives.
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Chat with us
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Browse Knowledge Base
          </button>
        </div>
      </div>
    </section>
  );
}

export default SupportHero;
