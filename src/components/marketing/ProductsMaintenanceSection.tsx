'use client';

import Image from 'next/image';

// Asset URLs - valid for 7 days from generation
const imgBanner = "https://www.figma.com/api/mcp/asset/b6d5cf50-b0e5-4ba3-b529-f5ee85b1a965";
const imgSetting = "https://www.figma.com/api/mcp/asset/477f6a6c-a4eb-4081-a9ae-af7b88405dc0";
const imgWrench = "https://www.figma.com/api/mcp/asset/6d44794f-f70b-48fa-835b-32c436ef98ff";
const imgWarning = "https://www.figma.com/api/mcp/asset/d2ea4816-337f-4972-933e-d9a48ca460a9";
const imgOval = "https://www.figma.com/api/mcp/asset/00c1434e-d827-4e03-a2dc-c6ab9ef9e0cd";
const imgOval1 = "https://www.figma.com/api/mcp/asset/5546f583-f1c7-4625-b329-7bf9b089e41b";
const imgOval2 = "https://www.figma.com/api/mcp/asset/0b6be17b-db08-4fc2-a5f9-56817ea04631";

export function ProductsMaintenanceSection() {
  return (
    <section 
      className="relative w-full py-[89px] px-[270px] bg-white min-h-[511px] flex items-center justify-center"
      data-node-id="638:401"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-[26px] items-center max-w-[688px]">
        
        {/* Icons Grid */}
        <div className="relative w-full" data-node-id="638:375">
          <div className="relative h-[250px] flex items-center justify-center">
            {/* Setting Icon - Top Left */}
            <div className="absolute left-[10%] top-[0%]">
              <div className="relative w-[168px] h-[183px]">
                <img 
                  alt="Setting icon" 
                  src={imgSetting}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-[133px] h-[133px]">
                <img 
                  alt="Oval background" 
                  src={imgOval}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Wrench Icon - Center Right */}
            <div className="absolute right-[25%] top-[35%]">
              <div className="relative w-[69px] h-[72px]">
                <img 
                  alt="Wrench icon" 
                  src={imgWrench}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-[59px] h-[59px]">
                <img 
                  alt="Oval background" 
                  src={imgOval1}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Warning Icon - Bottom Center */}
            <div className="absolute right-[10%] bottom-[10%]">
              <div className="relative w-[101px] h-[106px]">
                <img 
                  alt="Warning icon" 
                  src={imgWarning}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-[85px] h-[85px]">
                <img 
                  alt="Oval background" 
                  src={imgOval2}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-[20px] items-center text-center w-full">
          <h2 className="text-5xl font-semibold text-[#144685]">
            Under Maintenance
          </h2>
          <p className="text-2xl text-[#484848]">
            Our Page is under maintenance. We will be back shortly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductsMaintenanceSection;
