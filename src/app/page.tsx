
import { NewHeroSection } from '../components/marketing/NewHeroSection';
// import { HeroSection } from '../components/marketing/HeroSection';
import { SocialProof } from '../components/marketing/SocialProof';
import { AiFeatures } from '@/components/marketing/AiFeatures';
import { WhyEduegateSection } from '@/components/marketing/WhyEduegateSection';
import { InstitutionsSection } from '@/components/marketing/InstitutionsSection';
import { BrochureDownloadSection } from '@/components/marketing/BrochureDownloadSection';
import { MobileAppSection } from '@/components/marketing/MobileAppSection';
import { CleanModules } from '@/components/marketing/CleanModules';
import { FeaturedModuleSection } from '@/components/marketing/FeaturedModuleSection';

// import { DemosSection } from '../components/marketing/DemosSection';
import { FeaturesSection } from '../components/marketing/FeaturesSection';
import { PackageSection } from '../components/marketing/PackageSection';
import { WallOfLoveSection } from '../components/marketing/WallOfLoveSection';
import { SuccessStoriesSection } from '../components/marketing/SuccessStoriesSection';
import { FaqSection } from '../components/marketing/FaqSection';
// ProductsMaintenanceSection removed from homepage




export default function Home() {
  return (

    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div >
      <main>

        <NewHeroSection />
        <AiFeatures />
        <InstitutionsSection />
        <WhyEduegateSection />
        <MobileAppSection />
        <CleanModules />
        <FeaturedModuleSection />
        {/* <HeroSection /> */}
        <SocialProof />
        <BrochureDownloadSection />
        {/* <DemosSection /> */}
        {/* <FeaturesSection />  */}
        {/* <PackageSection /> */}
        {/* <WallOfLoveSection /> */}
        {/* <SuccessStoriesSection />  */}
        {/* <FaqSection />  */}
        {/* <FeaturesSection /> */}
        {/* <TechStackSection /> */}
      </main>

    </div>
  );
}
