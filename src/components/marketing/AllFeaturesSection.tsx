

// src/components/marketing/AllFeaturesSection.tsx
import { allFeaturesData } from '../../lib/featuresData'; // Import from our new data source
import Link from 'next/link';
import React from 'react';

export function AllFeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            {/* ... section title and description ... */}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allFeaturesData.map((feature) => (
            // === WRAP THE ENTIRE FEATURE DIV IN A LINK ===
            <Link 
              href={`/features/${feature.slug}`} 
       key={feature.slug}
              className="group block p-4 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  {React.cloneElement(<feature.icon />, { className: 'h-6 w-6' })}
                </div>
                <div>
                  <h3 className="font-semibold text-base group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}