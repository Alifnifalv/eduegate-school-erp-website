  // // src/components/marketing/SocialProof.tsx
  // import Image from 'next/image';

  // const logos = [
  //   { name: 'Google', src: '/logos/google.svg' },
  //   { name: 'Spotify', src: '/logos/spotify.svg' },
  //   { name: 'Netflix', src: '/logos/netflix.svg' },
  //   { name: 'Amazon', src: '/logos/amazon.svg' },
  //   { name: 'Stripe', src: '/logos/stripe.svg' },
  //   { name: 'Microsoft', src: '/logos/microsoft.svg' },
  // ];

  // export function SocialProof() {
  //   return (
  //     <section className="py-16 bg-slate-50">
  //       <div className="container">
  //         <h2 className="text-center text-xl font-semibold text-muted-foreground">
  //           Trusted by 150,000+ developers & companies
  //         </h2>
  //         <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
  //           {logos.map((logo) => (
  //             <div key={logo.name} className="flex justify-center">
  //               <Image
  //                 src={logo.src} // Add your logo files to `public/logos`
  //                 alt={logo.name}
  //                 width={120}
  //                 height={40}
  //                 className="grayscale hover:grayscale-0 transition-all"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // src/components/marketing/SocialProof.tsx
import Image from 'next/image';

const logos = [
  { name: 'UI Path', src: '/logos/Pearl-School-1.png' , bgColor: 'bg-violet-100'},
  { name: 'Vue Cinemas', src: '/logos/Podar-Pearl-School-1.png', bgColor: 'bg-amber-100'  },
  { name: 'NASA', src: '/logos/american-academy-school.png' , bgColor: 'bg-sky-100'},
  { name: 'Puma', src: '/logos/qatar-aeronotical-academy.png', bgColor: 'bg-green-100' },
  { name: 'Rolls Royce', src: '/logos/solid-rocks-academy.png', bgColor: 'bg-blue-100'  },
];

export function SocialProof() {
  return (
    <section id="brands" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold font-sans text-muted-foreground">
          Trusted by top school&apos;s world wide
        </h2>
        <div className="relative mt-6">
     <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          <div 
            className="group flex overflow-hidden p-4"
            style={{ '--gap': '2.5rem' } as React.CSSProperties}
          >

            {/* First render */}
            <div className="flex shrink-0 animate-marquee items-center  gap-[var(--gap)]  group-hover:[animation-play-state:paused]">
              {logos.map((logo, index) => (
                  <div  key={logo.name + '1'}
                    className={`flex h-[100px] items-center justify-center rounded-3xl px-8 py-5 
                               grayscale transition-all duration-300 ease-in-out hover:grayscale-0 
                               ${logo.bgColor} ${index === logos.length - 1 ? 'mr-10' : ''}`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={56}
                      className="h-auto w-auto max-h-14 object-contain"
                    />
                  </div>
              ))}
            </div>

             {/* Second render (for seamless loop) */}
             <div className="flex shrink-0 animate-marquee items-center gap-[var(--gap)]  group-hover:[animation-play-state:paused]" aria-hidden="true">
              {logos.map((logo) => (
                   <div key={logo.name + '2'}
                    className={`flex h-[100px] items-center justify-center rounded-3xl px-8 py-5 
                               grayscale transition-all duration-300 ease-in-out hover:grayscale-0 
                               ${logo.bgColor}`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={56}
                      className="h-auto w-auto max-h-14 object-contain"
                    />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}