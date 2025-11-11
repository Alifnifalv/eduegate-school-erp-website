import React from 'react';
import { MessageSquare, BookOpen, Zap, Users, Settings, AlertCircle } from 'lucide-react';

const supportCategories = [
  {
    id: 1,
    title: 'Live Chat Support',
    description: 'Connect instantly with our support team. Get real-time assistance for your urgent issues.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    available: '24/7',
  },
  {
    id: 2,
    title: 'Knowledge Base',
    description: 'Browse comprehensive documentation, guides, and tutorials for all Eduegate features.',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    available: 'Always',
  },
  {
    id: 3,
    title: 'Quick Start Guide',
    description: 'Get started quickly with step-by-step guides for initial setup and configuration.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    available: 'On-Demand',
  },
  {
    id: 4,
    title: 'Community Forum',
    description: 'Connect with other educators and share best practices with the Eduegate community.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    available: 'Community',
  },
  {
    id: 5,
    title: 'System Status',
    description: 'Monitor real-time system performance and get updates on maintenance schedules.',
    icon: Settings,
    color: 'from-indigo-500 to-blue-500',
    available: 'Real-time',
  },
  {
    id: 6,
    title: 'Bug Reports',
    description: 'Report technical issues and track the status of your support tickets.',
    icon: AlertCircle,
    color: 'from-red-500 to-pink-500',
    available: 'Priority',
  },
];

export function SupportCategories() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Support Options</span>
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Multiple Ways to Get Help
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the support channel that works best for you. We're available across multiple platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {supportCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-semibold rounded-full`}>
                    {category.available}
                  </span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                    Learn More
                    <span>→</span>
                  </button>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50 group-hover:to-cyan-50 rounded-2xl pointer-events-none transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupportCategories;
