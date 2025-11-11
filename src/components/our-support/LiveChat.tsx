import React from 'react';
import { MessageCircle, Users, Zap, Award } from 'lucide-react';

export function LiveChat() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Instant Support</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Real-Time Chat Support
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Connect with our support experts instantly. No waiting, no frustration. Get your questions answered in real-time by our knowledgeable team.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Instant Responses</h3>
                  <p className="text-gray-600 mt-1">
                    Get real-time answers to your questions without long waiting periods.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-gray-600 mt-1">
                    Talk to experienced Eduegate specialists who understand your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">24/7 Available</h3>
                  <p className="text-gray-600 mt-1">
                    Our support team is available around the clock for your convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quick Solutions</h3>
                  <p className="text-gray-600 mt-1">
                    Most issues are resolved in under 5 minutes of conversation.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Start Chat Now
            </button>
          </div>

          {/* Right side - Chat Preview */}
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs rounded-tl-none">
                  <p className="text-sm">
                    Hi there! How can I help you today?
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-gray-200 text-gray-900 rounded-lg p-3 max-w-xs rounded-tr-none">
                  <p className="text-sm">
                    I need help setting up reports
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs rounded-tl-none">
                  <p className="text-sm">
                    No problem! I can guide you through the report setup. First, let's access the Reports module.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs rounded-tl-none">
                  <p className="text-sm">
                    Are you ready? I'll share a screen with step-by-step instructions.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveChat;
