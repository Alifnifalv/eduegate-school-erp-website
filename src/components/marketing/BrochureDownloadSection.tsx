"use client";

import { useState } from 'react';
import { Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const imgIcon = "https://www.figma.com/api/mcp/asset/b84d7c32-1b85-41ae-b3f4-53d45cedf89d";

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function BrochureDownloadSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      // Add your subscription/email logic here
      console.log('Subscribing with email:', email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmail('');
      // Show success message
      alert('Thank you for subscribing!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadBrochure = () => {
    // Add your brochure download logic here
    console.log('Downloading brochure');
    // This can be a direct link or trigger a download
    window.open('/brochure.pdf', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-100/50 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="flex flex-col items-center gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-normal font-sans text-center text-[#111111] leading-tight"
          >
            Want to download our Brochure ?
          </motion.h2>

          {/* Email Input and Buttons Container */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center w-full"
          >
            {/* Email Input with Subscribe Button */}
            <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-56 px-4 py-3 bg-white border-0 rounded-l-lg text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-3 bg-[#075ca9] hover:bg-blue-700 text-white rounded-r-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
              >
                <img 
                  alt="send icon" 
                  src={imgIcon}
                  className="w-5 h-5"
                />
              </button>
            </form>

            {/* Download Brochure Button */}
            <button
              onClick={handleDownloadBrochure}
              className="px-6 py-3 border-2 border-[#144685] bg-white hover:bg-blue-50 text-[#144685] rounded-lg font-semibold font-sans text-sm transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download size={16} />
              Download Brochure
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
