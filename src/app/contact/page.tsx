import SupportSection from '@/components/contact/SupportSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import CardsSection from '@/components/contact/CardsSection';

export const metadata = {
  title: 'Contact Us - Eduegate',
  description: 'Get in touch with Eduegate. Access support, documentation, FAQs, and community resources for your school ERP system.',
};

export default function ContactPage() {
  return (
    <main style={{background: 'var(--color-main-bg)', color: 'var(--color-main-text)'}}>
      <SupportSection />
      <ContactFormSection />
      <CardsSection />
    </main>
  );
}