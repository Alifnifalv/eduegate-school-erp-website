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
    <main style={{background: 'var(--color-main-bg)', color: 'var(--color-main-text)'}}>
      <section>
        <OurServiceHero />
      </section>
      <section>
        <OurApproach />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        {/* <ImplementationSupport /> */}
      </section>
      <section>
        {/* <CTASection /> */}
      </section>
    </main>
  );
}
