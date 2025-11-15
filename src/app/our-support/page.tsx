import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Support - Eduegate',
  description: 'This page has been moved to Contact Us.',
};

export default function SupportPage() {
  redirect('/contact');
  return null;
}
