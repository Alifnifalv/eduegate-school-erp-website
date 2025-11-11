'use client';

import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

// Country flags as simple SVG components
const flagComponents = {
  Qatar: () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" fill="#8B5A8C" />
      <path d="M 10 32 L 55 32" stroke="white" strokeWidth="2" />
    </svg>
  ),
  UAE: () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" fill="#CE1126" />
      <rect y="21.33" width="64" height="21.34" fill="white" />
      <rect width="21.33" height="64" fill="black" />
    </svg>
  ),
  SaudiArabia: () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" fill="#006C35" />
      <path d="M 15 30 Q 20 25 25 30 Q 30 35 35 30 Q 40 25 45 30 Q 50 35 55 30" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  India: () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="21.33" fill="#FF9933" />
      <rect y="21.33" width="64" height="21.34" fill="white" />
      <rect y="42.66" width="64" height="21.34" fill="#138808" />
      <circle cx="32" cy="32" r="6" fill="#004AAD" />
    </svg>
  ),
};

interface ContactLocation {
  country: string;
  phone: string;
  company?: string;
  address?: string[];
  website?: string;
  mapImage?: string;
  lat: number;
  lng: number;
}

// Google Maps component
const GoogleMapComponent = ({ lat, lng, title }: { lat: number; lng: number; title: string }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Google Maps script if not already loaded
    if ((window as any).google && (window as any).google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDJdtz9MrZdbaGkT4g3at7W0KBBffHRfk&libraries=geometry';
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }

    function initMap() {
      if (!mapRef.current) return;

      const map = new (window as any).google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat, lng },
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
      });

      // Add marker
      new (window as any).google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: title,
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      });
    }
  }, [lat, lng, title]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
};

const contactLocations: ContactLocation[] = [
  {
    country: 'Qatar',
    company: 'Panacea Management Consulting,',
    phone: '+974 40012341',
    address: [
      'Office 43, 2nd Floor,',
      'O BOX: 18395, Office 43,',
      'Al Matar Business Center',
      'Old Airport, Doha, Qatar',
    ],
    lat: 25.2854,
    lng: 51.5310,
  },
  {
    country: 'UAE',
    company: 'iTrade ERP Solution',
    phone: '+971 42890580',
    website: 'www.tradeerp.com',
    address: [
      'Office #1 -148, Block A, Techno Hub',
      'P.O Box 342010',
      'Silicon Oasis, Dubai, UAE',
    ],
    lat: 25.1615,
    lng: 55.2768,
  },
  {
    country: 'India',
    company: 'Softop Solutions',
    phone: '+91 48 4354 3642',
    address: [
      '8th Floor, Vismaya Building, Infopark Phase 1,',
      'Kakkanad, Kochi, 682042',
    ],
    lat: 10.1873,
    lng: 76.2635,
  },
];

const quickContactInfo = [
  {
    type: 'email',
    icon: Mail,
    label: 'sales@softopsolutions.com',
    value: 'sales@softopsolutions.com',
  },
  {
    type: 'phone',
    icon: Phone,
    label: '+974 301165 00',
    value: '+974 301165 00',
  },
];

const countryPhones = [
  { country: 'Qatar', phone: '+974 30116500' },
  { country: 'UAE', phone: '+971 529822133' },
  { country: 'Saudi Arabia', phone: '+966533992232' },
  { country: 'India', phone: '+91 7356638860' },
];

export function SupportContactSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        {/* Get in Touch Section */}
        <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 md:p-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144685] mb-3 font-['Poppins']">
              Get in touch
            </h2>
            <p className="text-xl md:text-2xl text-[#484848] font-['Poppins']">
              We like to hear from you
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-8">
            {/* Email and Phone */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
              <div className="flex gap-5 items-end">
                <div className="bg-[#144685] rounded-full p-1.5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <p className="text-xl font-['Poppins'] text-[#111111]">
                  sales@softopsolutions.com
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <Phone className="w-10 h-10 text-[#144685] flex-shrink-0" />
                <p className="text-xl font-['Poppins'] text-[#111111]">
                  +974 301165 00
                </p>
              </div>
            </div>

            {/* Country Contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countryPhones.map((item, index) => {
                const FlagComponent = flagComponents[item.country as keyof typeof flagComponents] || (() => null);
                return (
                  <div key={index} className="flex gap-5 items-center">
                    <FlagComponent />
                    <div>
                      <p className="font-semibold text-[#111111] font-['Poppins']">
                        {item.country}
                      </p>
                      <p className="text-[#111111] font-['Poppins']">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Support Section */}
        <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144685] mb-4 font-['Poppins']">
                Need Technical Support
              </h2>
              <p className="text-xl md:text-2xl text-[#484848] font-['Poppins'] mb-8">
                Get expert assistance anytime, anywhere with remote support solutions
              </p>
              <button className="border-2 border-[#144685] text-[#144685] px-6 py-3 rounded-xl font-['Poppins'] font-semibold text-base hover:bg-[#144685] hover:text-white transition-all duration-300">
                Request Support
              </button>
            </div>
            <div className="lg:flex-1 flex justify-center">
              <svg className="w-72 h-72" viewBox="0 0 200 250" fill="none">
                {/* Phone illustration */}
                <rect x="70" y="20" width="60" height="120" rx="5" fill="none" stroke="#144685" strokeWidth="2" />
                <circle cx="100" cy="40" r="3" fill="#144685" />
                <rect x="75" y="50" width="50" height="70" fill="#E8F0FE" />
                <circle cx="95" cy="70" r="6" fill="#144685" />
                <circle cx="105" cy="70" r="6" fill="#144685" />
                <circle cx="95" cy="90" r="6" fill="#FF6B6B" />
                <circle cx="105" cy="90" r="6" fill="#FF6B6B" />
                
                {/* Chat bubbles */}
                <rect x="30" y="90" width="50" height="20" rx="3" fill="#144685" opacity="0.1" />
                <rect x="120" y="60" width="50" height="20" rx="3" fill="#144685" opacity="0.2" />
                <rect x="15" y="140" width="65" height="20" rx="3" fill="#144685" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Partner Locations Section */}
        <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 md:p-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144685] mb-3 font-['Poppins']">
              Our Partner
            </h2>
            <p className="text-xl md:text-2xl text-[#484848] font-['Poppins']">
              All over the world
            </p>
          </div>

          <div className="space-y-8">
            {contactLocations.map((location, index) => {
              const FlagComponent = flagComponents[location.country as keyof typeof flagComponents] || (() => null);
              return (
                <div
                  key={index}
                  className="bg-white border border-[#dbdbdb] rounded-lg p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center lg:justify-between"
                >
                  <div className="flex-1 flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <FlagComponent />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#111111] font-['Poppins'] mb-4">
                          {location.country}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {location.company && (
                          <p className="font-semibold text-[#111111] font-['Poppins'] text-lg">
                            {location.company}
                          </p>
                        )}
                        {location.address && (
                          <div className="text-[#111111] font-['Poppins'] space-y-1">
                            {location.address.map((line, i) => (
                              <p key={i} className="text-base">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                        <div className="flex gap-3 items-center pt-2">
                          <Phone className="w-5 h-5 text-[#144685] flex-shrink-0" />
                          <p className="font-semibold text-[#111111] font-['Poppins']">
                            {location.phone}
                          </p>
                        </div>
                        {location.website && (
                          <div className="flex gap-3 items-center">
                            <Globe className="w-5 h-5 text-[#144685] flex-shrink-0" />
                            <p className="font-semibold text-[#111111] font-['Poppins']">
                              {location.website}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="lg:flex-shrink-0 w-full lg:w-96 h-64 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                    <GoogleMapComponent lat={location.lat} lng={location.lng} title={location.country} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportContactSection;
