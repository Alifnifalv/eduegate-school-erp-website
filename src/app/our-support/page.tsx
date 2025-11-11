import SupportHero from '@/components/our-support/SupportHero';
import SupportCategories from '@/components/our-support/SupportCategories';
import LiveChat from '@/components/our-support/LiveChat';
import FAQSection from '@/components/our-support/FAQSection';
import ContactSupport from '@/components/our-support/ContactSupport';
import SupportCTA from '@/components/our-support/SupportCTA';

export const metadata = {
  title: 'Support - Eduegate',
  description: 'Get help with Eduegate. Access 24/7 support, documentation, FAQs, and community resources for your school ERP system.',
};

export default function SupportPage() {
  return (
    <main className="bg-white">
      <SupportHero />
      <SupportCategories />
      <LiveChat />
      <FAQSection />
      <ContactSupport />
      <SupportCTA />
    </main>
  );
}
