// src/components/widgets/MobileAppWidget.tsx
import Image from 'next/image';

export function MobileAppWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20">
      <Image 
        src="/widgets/mobile-app-ui.png" 
        alt="Eduegate Mobile App UI" 
        width={250} 
        height={500} 
        className="rounded-xl"
      />
    </div>
  );
}