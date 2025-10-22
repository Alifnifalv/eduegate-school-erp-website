import Image from 'next/image';
import Link from 'next/link';

const featuredLogos = [
  { name: 'Vodafone', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/Vodafone.svg?2025-09-25T11:44:46.089Z', width: 107, height: 28 },
  { name: 'Rubrik', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/Rubrik.svg?2025-08-06T13:30:49.145Z', width: 95, height: 28 },
  { name: 'OneSignal', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/OneSignal-1.svg?2025-09-25T11:48:09.276Z', width: 126, height: 30 },
  { name: 'Glean', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/glean.svg?2025-08-06T13:30:49.153Z', width: 68, height: 28 },
  { name: 'Salesforce', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/Salesforce.svg?2025-08-06T13:30:49.147Z', width: 55, height: 38 },
  { name: 'VMware', src: 'https://ptvdgv6jodffh5ts.public.blob.vercel-storage.com/vmware.svg?2025-08-06T13:30:49.151Z', width: 92, height: 14 },
];

export function FeaturedClients() {
  return (
    <div className="relative">
      <div className="group">
        {/* "See all clients" Button */}
        <Link
          href="/clients"
          className="items-center gap-[6px] justify-center whitespace-nowrap rounded-[32px] py-2 px-[14px] text-sm font-medium text-white bg-transparent backdrop-blur-[24px] 
                     absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
                     hidden md:flex 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ease-out
                     after:content-[''] after:absolute after:inset-0 after:bg-gray-600/50 after:-z-10 after:rounded-[32px] 
                     after:transition-all after:duration-200 hover:after:bg-white/20"
        >
          See all clients
        </Link>

        {/* Desktop: Vertical Logo Column */}
        <div className="hidden md:flex flex-col gap-8 items-end relative self-center w-fit mx-auto 
                        group-hover:-translate-x-[10px] group-hover:scale-90 transition-all duration-300 ease-out">
          {featuredLogos.map((logo) => (
            <div key={logo.name}>
              <Image
                alt={`${logo.name} logo`}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                className="w-full p-px transition-all duration-500 ease-out group-hover:blur-[7px]"
                style={{ color: 'transparent' }}
              />
            </div>
          ))}
        </div>

        {/* Mobile: Scrolling Marquee */}
        <div className="md:hidden w-full overflow-hidden">
          <div className="flex w-fit animate-marquee-slow">
            {[...featuredLogos, ...featuredLogos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0 h-12 mx-4 flex items-center justify-center">
                <Image
                  alt={`${logo.name} logo`}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  className="h-full w-auto object-contain pointer-events-none select-none"
                  style={{ color: 'transparent' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}