/**
 * ProductsMaintenanceSection - Implementation Guide & Variations
 * 
 * This file documents various ways to use and customize the ProductsMaintenanceSection component.
 */

// ============================================
// BASIC USAGE
// ============================================

import { ProductsMaintenanceSection } from "@/components/marketing/ProductsMaintenanceSection";

export function BasicExample() {
  return <ProductsMaintenanceSection />;
}

// ============================================
// WITH CUSTOM WRAPPER & LAYOUT
// ============================================

export function WithLayoutWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional: Header */}
      <nav className="bg-white shadow">
        {/* Navigation */}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <ProductsMaintenanceSection />
      </main>

      {/* Optional: Footer */}
      <footer className="bg-gray-900 text-white py-8">
        {/* Footer content */}
      </footer>
    </div>
  );
}

// ============================================
// WITH PARENT LAYOUT COMPONENTS
// ============================================

import { HeroSection } from "./HeroSection";
import { CtaSection } from "./CtaSection";
import { AllFeaturesSection } from "./AllFeaturesSection";

export function WithOtherSections() {
  return (
    <main>
      <HeroSection />
      <AllFeaturesSection />
      <ProductsMaintenanceSection />
      <CtaSection />
    </main>
  );
}

// ============================================
// RESPONSIVE VARIANT
// ============================================

'use client';

import Image from 'next/image';

const imgBanner = "https://www.figma.com/api/mcp/asset/b6d5cf50-b0e5-4ba3-b529-f5ee85b1a965";
const imgSetting = "https://www.figma.com/api/mcp/asset/477f6a6c-a4eb-4081-a9ae-af7b88405dc0";
const imgWrench = "https://www.figma.com/api/mcp/asset/6d44794f-f70b-48fa-835b-32c436ef98ff";
const imgWarning = "https://www.figma.com/api/mcp/asset/d2ea4816-337f-4972-933e-d9a48ca460a9";
const imgOval = "https://www.figma.com/api/mcp/asset/00c1434e-d827-4e03-a2dc-c6ab9ef9e0cd";
const imgOval1 = "https://www.figma.com/api/mcp/asset/5546f583-f1c7-4625-b329-7bf9b089e41b";
const imgOval2 = "https://www.figma.com/api/mcp/asset/0b6be17b-db08-4fc2-a5f9-56817ea04631";

export function ResponsiveVariant() {
  return (
    <section 
      className="relative w-full py-20 md:py-[89px] px-6 md:px-[270px] bg-white min-h-screen md:min-h-[511px] flex items-center justify-center"
      data-node-id="638:401"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-[26px] items-center max-w-full md:max-w-[688px] px-4 md:px-0">
        
        {/* Icons Grid - Hidden on Mobile */}
        <div className="relative w-full hidden md:block" data-node-id="638:375">
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
        <div className="flex flex-col gap-4 md:gap-[20px] items-center text-center w-full">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#144685]">
            Under Maintenance
          </h2>
          <p className="text-lg md:text-2xl text-[#484848]">
            Our Page is under maintenance. We will be back shortly.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DARK MODE VARIANT
// ============================================

export function DarkModeVariant() {
  return (
    <section 
      className="relative w-full py-[89px] px-[270px] bg-slate-900 min-h-[511px] flex items-center justify-center"
    >
      {/* Darker background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-[26px] items-center max-w-[688px]">
        
        {/* Icons Grid (colors inverted for dark mode) */}
        <div className="relative w-full" data-node-id="638:375">
          <div className="relative h-[250px] flex items-center justify-center">
            {/* Icons remain the same */}
            {/* ... icon code ... */}
          </div>
        </div>

        {/* Text Content - Light colors for dark background */}
        <div className="flex flex-col gap-[20px] items-center text-center w-full">
          <h2 className="text-5xl font-semibold text-white">
            Under Maintenance
          </h2>
          <p className="text-2xl text-slate-200">
            Our Page is under maintenance. We will be back shortly.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// WITH COUNTDOWN TIMER (FUTURE ENHANCEMENT)
// ============================================

'use client';

import { useState as useStateTimer, useEffect as useEffectTimer } from 'react';

export function WithCountdownTimer() {
  const [timeLeft, setTimeLeft] = useStateTimer({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffectTimer(() => {
    // Set target date - 48 hours from now
    const targetDate = new Date(Date.now() + 48 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full py-[89px] px-[270px] bg-white min-h-[511px] flex items-center justify-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-[26px] items-center max-w-[688px]">
        
        {/* Icons Grid */}
        {/* ... icon code ... */}

        {/* Text Content */}
        <div className="flex flex-col gap-[20px] items-center text-center w-full">
          <h2 className="text-5xl font-semibold text-[#144685]">
            Under Maintenance
          </h2>
          <p className="text-2xl text-[#484848]">
            Our Page is under maintenance. We will be back shortly.
          </p>

          {/* Countdown */}
          <div className="flex gap-4 mt-8">
            <div className="bg-blue-100 rounded px-4 py-2">
              <div className="text-2xl font-bold text-[#144685]">{timeLeft.days}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="bg-blue-100 rounded px-4 py-2">
              <div className="text-2xl font-bold text-[#144685]">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="bg-blue-100 rounded px-4 py-2">
              <div className="text-2xl font-bold text-[#144685]">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="bg-blue-100 rounded px-4 py-2">
              <div className="text-2xl font-bold text-[#144685]">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// WITH EMAIL SUBSCRIPTION (FUTURE ENHANCEMENT)
// ============================================

'use client';

import { useState as useStateEmail } from 'react';

export function WithEmailSubscription() {
  const [email, setEmail] = useStateEmail('');
  const [submitted, setSubmitted] = useStateEmail(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email subscription logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      className="relative w-full py-[89px] px-[270px] bg-white min-h-[511px] flex items-center justify-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-[26px] items-center max-w-[688px]">
        
        {/* Icons Grid */}
        {/* ... icon code ... */}

        {/* Text Content */}
        <div className="flex flex-col gap-[20px] items-center text-center w-full">
          <h2 className="text-5xl font-semibold text-[#144685]">
            Under Maintenance
          </h2>
          <p className="text-2xl text-[#484848]">
            Our Page is under maintenance. We will be back shortly.
          </p>

          {/* Email Subscription */}
          <form onSubmit={handleSubmit} className="mt-8 flex gap-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#144685]"
            />
            <button
              type="submit"
              className="bg-[#075ca9] text-white px-6 py-2 rounded hover:bg-[#144685] transition"
            >
              Notify Me
            </button>
          </form>

          {submitted && (
            <p className="text-green-600 text-sm">
              Thank you! We'll notify you when we're back online.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================
// USAGE IN PAGES
// ============================================

// In src/app/products/page.tsx
export function ProductsPageExample() {
  return (
    <main>
      <ProductsMaintenanceSection />
    </main>
  );
}

// In src/app/layout.tsx - if you want it as a global section
export function LayoutWithMaintenanceSection() {
  return (
    <html>
      <body>
        {/* <Header /> */}
        <main>
          <ProductsMaintenanceSection />
          {/* Other content */}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
