// src/components/marketing/FeatureHero.tsx
import { Sparkles } from 'lucide-react';

export function FeatureHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-40 -z-10" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 bg-blue-700/50 backdrop-blur-sm border border-blue-600 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-blue-200" />
          <span className="text-sm font-medium text-blue-100">Powerful Features</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white leading-tight mb-6">
          A Comprehensive Solution for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Modern Education</span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-serif text-blue-100 leading-relaxed">
          Explore the powerful modules engineered to connect and streamline every aspect of your institution—from administration to the classroom.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold font-sans hover:bg-blue-50 transition-colors shadow-lg">
            Explore Features
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold font-sans hover:bg-white/10 transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}