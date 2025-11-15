const CardsSection = () => (
  <section className="flex flex-col items-center px-4 sm:px-8 lg:px-[147px] py-[60px] w-full">
    <div className="w-full max-w-[1146px] flex flex-col gap-[40px]">
      {/* Get in Touch Card */}
      <div className="bg-white border border-[#dbdbdb] rounded-[4px] flex flex-col justify-between w-full px-6 py-8 gap-10 sm:px-10 sm:py-12 sm:gap-12 md:px-[63px] md:py-[66px] md:gap-[40px] max-w-full" style={{ minHeight: '411px' }}>
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-medium text-2xl sm:text-3xl md:text-[32px] text-[#144685] leading-tight mb-2">Get in touch</h3>
          <p className="font-normal text-lg sm:text-xl md:text-[24px] text-[#484848] leading-tight">We like to hear from you</p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-[60px] items-end">
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-end">
              <span className="inline-flex items-center justify-center bg-[#144685] rounded-[20px] w-10 h-10 p-1.5">
                <img src="https://www.figma.com/api/mcp/asset/6e37c8a5-6bb1-4c6a-93f6-31a2e5133909" alt="Mail" className="w-6 h-5" />
              </span>
              <span className="text-base sm:text-lg md:text-[20px] text-[#111111]">sales@softopsolutions.com</span>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-center">
              <img src="https://www.figma.com/api/mcp/asset/7490427e-3a40-4dc3-808e-18c815961d59" alt="Phone" className="w-10 h-10" />
              <span className="text-base sm:text-lg md:text-[20px] text-[#111111]">+974 301165 00</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-[60px] items-center w-full mt-10 md:mt-[40px]">
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-center">
              <img src="https://www.figma.com/api/mcp/asset/efd1b962-c476-49c1-8c12-6c902c9f1538" alt="Qatar" className="w-10 h-10" />
              <div className="flex flex-col items-start text-base sm:text-lg md:text-[20px] text-[#111111] w-[137px]">
                <span className="font-medium">Qatar</span>
                <span>+974 30116500</span>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-center">
              <img src="https://www.figma.com/api/mcp/asset/a62b16f3-4b57-4a38-815c-2a992d3423cb" alt="UAE" className="w-10 h-10" />
              <div className="flex flex-col items-start text-base sm:text-lg md:text-[20px] text-[#111111] w-[145px]">
                <span className="font-medium">UAE</span>
                <span>+971 529822133</span>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-center">
              <img src="https://www.figma.com/api/mcp/asset/c02643cb-ed5f-4804-b847-e6637957ebeb" alt="Saudi Arabia" className="w-10 h-10" />
              <div className="flex flex-col items-start text-base sm:text-lg md:text-[20px] text-[#111111] w-[155px]">
                <span className="font-medium">Saudi Arabia</span>
                <span>+966533992232</span>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-[20px] items-center">
              <img src="https://www.figma.com/api/mcp/asset/ea570676-5941-4581-a47b-638f63bdb476" alt="India" className="w-10 h-10" />
              <div className="flex flex-col items-start text-base sm:text-lg md:text-[20px] text-[#111111] w-[160px]">
                <span className="font-medium">India</span>
                <span>+91 7356638860</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Need Technical Support Card */}
      <div className="bg-white border border-[#dbdbdb] rounded-[4px] flex flex-col w-full px-6 py-8 gap-8 sm:px-10 sm:py-12 sm:gap-10 md:px-[63px] md:py-[66px] md:gap-[40px] max-w-full" style={{ minHeight: '411px' }}>
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-[21px]">
          <h3 className="font-medium text-2xl sm:text-3xl md:text-[32px] text-[#144685] leading-tight mb-2">Need Technical Support</h3>
          <p className="font-normal text-lg sm:text-xl md:text-[24px] text-[#484848] leading-tight">Get expert assistance anytime, anywhere with remote support solutions</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-[78px] w-full">
          <button className="border border-[#144685] text-[#144685] rounded-[12px] px-6 py-3 font-semibold w-full md:w-[200px] md:mb-[21px] hover:bg-[#144685] hover:text-white transition-colors">Request Support</button>
          <img src="https://www.figma.com/api/mcp/asset/b5431016-943d-4257-add9-65f18f312b7a" alt="Support" className="w-full max-w-[343px] h-auto md:h-[287px] object-contain" />
        </div>
      </div>
      {/* Our Partner Card - Figma accurate */}
      <div className="flex flex-col gap-8">
        <div className="bg-white border border-[#dbdbdb] rounded-[4px] flex flex-col w-full px-6 py-8 sm:px-10 sm:py-12 md:px-[63px] md:py-[66px] gap-10 md:gap-[40px]">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#144685]">Our Partner</h2>
            <p className="text-xl text-[#484848]">All over the world</p>
          </div>
          <div className="flex flex-col gap-10">
            {/* Qatar */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-[#dbdbdb] rounded-[4px] p-6 md:p-10 gap-6 md:gap-10">
              <div className="flex flex-col gap-4 w-full md:w-1/3">
                <div className="flex items-center gap-3">
                  <img src="https://www.figma.com/api/mcp/asset/78544e8c-fbe9-4e73-92e4-2982e862cc4c" alt="Qatar" className="w-10 h-10" />
                  <span className="text-2xl font-semibold text-[#111111]">Qatar</span>
                </div>
                <div className="text-lg font-medium text-[#111111]">Panacea Management Consulting</div>
                <div className="text-base text-[#111111]">Office 43, 2nd Floor, O BOX: 18395, Office 43, Al Matar Business Center, Old Airport, Doha, Qatar</div>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://www.figma.com/api/mcp/asset/60e17c94-c6e2-43bf-b43d-c7a03a0590d8" alt="Phone" className="w-6 h-6" />
                  <span className="text-lg font-medium text-[#111111]">+974 40012341</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex justify-center">
                <iframe title="Qatar Map" src="https://www.google.com/maps?q=Doha,+Qatar&output=embed" className="rounded-md w-full max-w-lg h-64 border-0" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
            {/* UAE */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-[#dbdbdb] rounded-[4px] p-6 md:p-10 gap-6 md:gap-10">
              <div className="flex flex-col gap-4 w-full md:w-1/3">
                <div className="flex items-center gap-3">
                  <img src="https://www.figma.com/api/mcp/asset/a62b16f3-4b57-4a38-815c-2a992d3423cb" alt="UAE" className="w-10 h-10" />
                  <span className="text-2xl font-semibold text-[#111111]">UAE</span>
                </div>
                <div className="text-lg font-medium text-[#111111]">iTrade ERP Solution</div>
                <div className="text-base text-[#111111]">
                  Office #1 -148, Block A, Techno Hub<br />
                  P.O Box 342010<br />
                  Silicon Oasis, Dubai, UAE
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://www.figma.com/api/mcp/asset/9a3a979f-5c8f-4106-bc45-d0a2d4a153f0" alt="Phone" className="w-6 h-6" />
                  <span className="text-lg font-medium text-[#111111]">+971 42890580</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://www.figma.com/api/mcp/asset/acd95a32-aeb9-4c00-b48b-cfa3c433ab9c" alt="Website" className="w-6 h-6" />
                  <a href="https://www.tradeerp.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#144685] underline">www.tradeerp.com</a>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex justify-center">
                <iframe title="UAE Map" src="https://www.google.com/maps?q=Dubai,+UAE&output=embed" className="rounded-md w-full max-w-lg h-64 border-0" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
            {/* India */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-[#dbdbdb] rounded-[4px] p-6 md:p-10 gap-6 md:gap-10">
              <div className="flex flex-col gap-4 w-full md:w-1/3">
                <div className="flex items-center gap-3">
                  <img src="https://www.figma.com/api/mcp/asset/b78fc4cb-a696-48b1-97d2-763b8c8652e4" alt="India" className="w-10 h-10" />
                  <span className="text-2xl font-semibold text-[#111111]">India</span>
                </div>
                <div className="text-lg font-medium text-[#111111]">Softop Solutions</div>
                <div className="text-base text-[#111111]">8th Floor, Vismaya Building, Infopark Phase 1, Kakkanad, Kochi, 682042</div>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://www.figma.com/api/mcp/asset/60e17c94-c6e2-43bf-b43d-c7a03a0590d8" alt="Phone" className="w-6 h-6" />
                  <span className="text-lg font-medium text-[#111111]">+91 48 4354 3642</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 flex justify-center">
                <iframe title="India Map" src="https://www.google.com/maps?q=Kochi,+India&output=embed" className="rounded-md w-full max-w-lg h-64 border-0" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CardsSection;
