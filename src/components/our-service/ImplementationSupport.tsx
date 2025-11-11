import React from 'react';
import Link from 'next/link';
import { Zap, CheckCircle, Users, Clock } from 'lucide-react';

export function ImplementationSupport() {
  const features = [
    {
      icon: Zap,
      title: 'Data Migration',
      description: 'Secure and seamless transfer of your institutional data'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Comprehensive onboarding and continuous support'
    },
    {
      icon: CheckCircle,
      title: 'Integrations',
      description: 'Connect with your existing systems effortlessly'
    },
    {
      icon: Clock,
      title: 'SLA-Backed Support',
      description: 'Guaranteed response times and dedicated assistance'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-lg opacity-40" />
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                        <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Implementation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Implementation & Support
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our team ensures a smooth rollout — data migration, staff training,
              integrations and an SLA-backed support plan so you get fast time to value.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature.description}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/request-demo" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Talk to an expert
              </Link>
              <Link href="#" className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImplementationSupport;
