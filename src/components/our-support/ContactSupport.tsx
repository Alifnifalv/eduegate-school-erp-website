import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactMethods = [
  {
    id: 1,
    title: 'Email Support',
    description: 'Get detailed responses to your questions',
    contact: 'support@eduegate.com',
    responseTime: '24 hours',
    icon: Mail,
  },
  {
    id: 2,
    title: 'Phone Support',
    description: 'Talk to our team directly',
    contact: '+1 (555) 123-4567',
    responseTime: 'Immediate',
    icon: Phone,
  },
  {
    id: 3,
    title: 'Visit Us',
    description: 'Come see us in person',
    contact: '123 Education Lane, Tech City, TC 12345',
    responseTime: 'Business Hours',
    icon: MapPin,
  },
  {
    id: 4,
    title: 'Live Chat',
    description: 'Instant messaging support',
    contact: 'Available on our website',
    responseTime: '5 minutes',
    icon: Clock,
  },
];

export function ContactSupport() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Get in Touch</span>
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Contact Our Support Team
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach out to us through any of these channels. We're always ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                
                <p className="font-semibold text-gray-900 mb-3 break-all">
                  {method.contact}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{method.responseTime}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 lg:p-16 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Support?
            </h3>
            
            <p className="text-blue-100 mb-8">
              Our dedicated support team offers custom solutions for enterprise clients. Get priority support, dedicated account managers, and custom training for your institution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn About Enterprise Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSupport;
