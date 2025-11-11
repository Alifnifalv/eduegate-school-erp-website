import SupportHero from '@/components/our-support/SupportHero';
import RequestCallBack from '@/components/our-support/RequestCallBack';
import SupportCategories from '@/components/our-support/SupportCategories';
import LiveChat from '@/components/our-support/LiveChat';
import FAQSection from '@/components/our-support/FAQSection';
import ContactSupport from '@/components/our-support/ContactSupport';
import SupportContactSection from '@/components/our-support/SupportContactSection';
import SupportCTA from '@/components/our-support/SupportCTA';

export const metadata = {
  title: 'Support - Eduegate',
  description: 'Get help with Eduegate. Access 24/7 support, documentation, FAQs, and community resources for your school ERP system.',
};

export default function SupportPage() {
  return (
    <main className="bg-white">
      <SupportHero />
      <RequestCallBack />
      <SupportCategories />
      <LiveChat />
      <FAQSection />
      <ContactSupport />
      <SupportContactSection />
      <SupportCTA />
    </main>
  );
}
