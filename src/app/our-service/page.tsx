import OurServiceHero from '@/components/our-service/OurServiceHero';
import OurApproach from '@/components/our-service/OurApproach';
import OurServices from '@/components/our-service/OurServices';
import ServicesGrid from '@/components/our-service/ServicesGrid';
import ImplementationSupport from '@/components/our-service/ImplementationSupport';
import CTASection from '@/components/our-service/CTASection';

export const metadata = {
  title: 'Our Service - Eduegate',
  description: 'Explore our comprehensive ERP solutions and services designed for educational institutions.',
};

export default function OurServicePage() {
  return (
    <main className="bg-white">
      <OurServiceHero />

      <OurApproach />

      <OurServices />

      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Core Modules</span>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              What we offer
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modular platform built for modern institutions — choose the modules you
              need and scale as you grow.
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>

      <ImplementationSupport />

      <CTASection />
    </main>
  );
}
