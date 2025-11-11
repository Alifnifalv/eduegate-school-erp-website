import React from 'react';
import { ArrowRight } from 'lucide-react';

export function SupportCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Get Started?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Experience how Eduegate can transform your institution. Get a personalized demo today and see why thousands of schools trust us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
            Schedule Your Demo
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            View Pricing Plans
          </button>
        </div>

        <p className="text-blue-200 text-sm mt-8">
          🎯 Special offer: First 3 months 50% off for new institutions
        </p>
      </div>
    </section>
  );
}

export default SupportCTA;
