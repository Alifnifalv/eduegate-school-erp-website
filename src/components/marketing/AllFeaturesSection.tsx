

// src/components/marketing/AllFeaturesSection.tsx
import { allFeaturesData } from '../../lib/featuresData'; // Import from our new data source
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function AllFeaturesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">All Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Everything you need to succeed
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our complete suite of integrated modules designed specifically for educational institutions of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {allFeaturesData.map((feature) => (
            // === WRAP THE ENTIRE FEATURE DIV IN A LINK ===
            <Link 
              href={`/features/${feature.slug}`} 
              key={feature.slug}
              className="group block h-full"
            >
              <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col gap-4 h-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    {React.cloneElement(<feature.icon />, { className: 'h-7 w-7 text-blue-600' })}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.shortDescription}
                    </p>
                  </div>

                  {/* Arrow Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}