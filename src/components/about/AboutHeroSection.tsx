import React from 'react';

interface StatCard {
  number: string;
  label: string;
}

const stats: StatCard[] = [
  {
    number: '20+',
    label: 'Modules',
  },
  {
    number: '4+',
    label: 'Mobile apps',
  },
  {
    number: '25+',
    label: 'Integrations',
  },
  {
    number: '25+',
    label: 'On Going\nProjects',
  },
];

export function AboutHeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-transparent pointer-events-none" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23144685" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#144685]">
                About eduêgate
              </h1>
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111]">
                  The Best School ERP for
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111]">
                  Modern Institutions
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-[#484848] leading-relaxed">
              eduêgate is a powerful, all-in-one School ERP system designed to simplify and optimize school operations. Recognized as one of the best ERP solutions for schools
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Top Row - First two cards */}
              <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] hover:shadow-lg transition-shadow">
                <p className="text-5xl md:text-6xl font-bold text-[#111111] mb-3">
                  20+
                </p>
                <p className="text-base md:text-lg text-[#484848] text-center">
                  Modules
                </p>
              </div>

              <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] hover:shadow-lg transition-shadow">
                <p className="text-5xl md:text-6xl font-bold text-[#111111] mb-3">
                  4+
                </p>
                <p className="text-base md:text-lg text-[#484848] text-center">
                  Mobile apps
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Bottom Row - Last two cards */}
              <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] hover:shadow-lg transition-shadow">
                <p className="text-5xl md:text-6xl font-bold text-[#111111] mb-3">
                  25+
                </p>
                <p className="text-base md:text-lg text-[#484848] text-center">
                  Integrations
                </p>
              </div>

              <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] hover:shadow-lg transition-shadow">
                <p className="text-5xl md:text-6xl font-bold text-[#111111] mb-3">
                  25+
                </p>
                <p className="text-base md:text-lg text-[#484848] text-center">
                  On Going
                  <br />
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
