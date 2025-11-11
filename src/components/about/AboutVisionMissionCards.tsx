import React from 'react';

export function AboutVisionMissionCards() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Illustration */}
        <div className="mb-8">
          <img src="/images/vision-rocket.svg" alt="vision illustration" className="mx-auto h-40 md:h-48 object-contain" />
        </div>

        {/* Two boxed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="bg-white border border-[#e6e6e6] rounded-lg p-8 text-left">
            <h3 className="text-xl font-semibold text-[#144685] mb-4">Vision</h3>
            <p className="text-sm text-[#484848] leading-relaxed">
              To lead the future of education with smart, inclusive, and impactful technology—bridging gaps and unlocking potential.
            </p>
          </div>

          <div className="bg-white border border-[#e6e6e6] rounded-lg p-8 text-left">
            <h3 className="text-xl font-semibold text-[#144685] mb-4">Mission</h3>
            <p className="text-sm text-[#484848] leading-relaxed">
              To deliver cutting-edge EdTech solutions that simplify school management, enhance transparency, and foster stakeholder empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVisionMissionCards;
