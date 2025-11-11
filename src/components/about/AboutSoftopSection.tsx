import React from 'react';

export function AboutSoftopSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#144685] mb-4 font-['Poppins']">
          About Softop Solutions – Innovative Minds in EdTech
        </h2>
        <p className="max-w-4xl mx-auto text-sm md:text-base text-[#484848] leading-relaxed mb-10">
          Softop Solutions is a dynamic software company driven by young, innovative minds passionate about transforming
          education through technology. With a focus on intuitive design and scalable architecture, Softop builds platforms that are:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white border border-[#dbdbdb] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#144685] mb-2 font-['Poppins']">User-centric and multilingual</h3>
          </div>

          <div className="bg-white border border-[#dbdbdb] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#144685] mb-2 font-['Poppins']">Data-driven and analytics-ready</h3>
          </div>

          <div className="bg-white border border-[#dbdbdb] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#144685] mb-2 font-['Poppins']">Agile and integration-friendly</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSoftopSection;
