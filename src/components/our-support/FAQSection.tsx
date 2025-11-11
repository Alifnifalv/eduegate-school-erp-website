'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do I get started with Eduegate?',
    answer: 'Getting started is simple! After signing up, follow our onboarding wizard which will guide you through initial setup. You can also access our Quick Start Guide or schedule a demo with our implementation team for personalized assistance.',
  },
  {
    id: 2,
    question: 'What is the typical implementation timeline?',
    answer: 'Implementation typically takes 2-4 weeks depending on your institution\'s size and complexity. Our dedicated implementation team will work with you to customize the setup and ensure a smooth transition from your current system.',
  },
  {
    id: 3,
    question: 'How is my data secured?',
    answer: 'We use enterprise-grade security including 256-bit SSL encryption, regular security audits, and compliance with GDPR and other data protection regulations. Your data is backed up daily and stored in secure data centers.',
  },
  {
    id: 4,
    question: 'Can I customize Eduegate for my institution?',
    answer: 'Yes! Eduegate is highly modular and customizable. You can enable/disable modules, customize workflows, and integrate with your existing systems. Our professional services team can help with complex customizations.',
  },
  {
    id: 5,
    question: 'What kind of support is included in my plan?',
    answer: 'All plans include 24/7 email and live chat support, access to our knowledge base, and community forum. Premium plans also include dedicated account managers, priority support, and custom training sessions.',
  },
  {
    id: 6,
    question: 'How much does Eduegate cost?',
    answer: 'Our pricing is flexible and based on your institution\'s size and the modules you need. We offer tiered plans starting from basic to enterprise. Contact our sales team for a custom quote.',
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Common Questions</span>
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find quick answers to the most common questions about Eduegate. Can't find what you're looking for? Ask our community or contact support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? Our support team is here to help.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
