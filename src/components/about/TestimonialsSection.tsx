// src/components/marketing/TestimonialsSection.tsx
import Image from 'next/image';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';

// --- Animation Variants for Framer Motion ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// A more structured data format for our new testimonials
const testimonialsData = [
  {
    quote: "This ERP has been a game-changer for our institution. Its powerful features have allowed us to build a high-performance, collaborative environment for our staff and parents like never before.",
    companyLogo: '/logos/wunderman-thompson.svg', // You'll need to add these logos
    companyName: 'Wunderman Thompson',
    authorName: 'Daniel Lopes',
    authorTitle: 'Head of Technology',
  },
  {
    quote: "With this platform, we now consistently achieve top marks for digital experience, placing our school in the top tier for parent satisfaction and operational efficiency.",
    companyLogo: '/logos/notion.svg',
    companyName: 'Notion',
    authorName: 'Jane Doe',
    authorTitle: 'Senior Administrator',
  },
  {
    quote: "Our UI for the parent portal responds to input within 100ms and all operations run at a consistent 60fps. The performance is simply outstanding for a web-based system.",
    companyLogo: '/logos/adobe.svg',
    companyName: 'Adobe',
    authorName: 'Charlton Roberts',
    authorTitle: 'Lead Product Engineer',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-lg leading-8 text-gray-600">
            For <span className="font-bold text-gray-900">performance</span>, <span className="font-bold text-gray-900">efficiency</span>, and <span className="font-bold text-gray-900">user experience</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our School ERP is trusted by some of the most innovative institutions on the web.
          </p>
          <div className="mt-8">
            <Link 
              href="/casestudies" // A link to a future case studies page
              className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              View Our Showcase
            </Link>
          </div>
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div 
              key={testimonial.companyName}
              variants={fadeInUp}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              {/* Quote - `flex-grow` pushes the author info to the bottom */}
              <blockquote className="flex-grow text-lg leading-8 text-gray-700">
                <p>&quot;{testimonial.quote}&quot;</p>
              </blockquote>

              {/* Divider and Author Info */}
              <footer className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial.companyName}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.authorName}</div>
                    <div className="text-sm text-gray-600">{testimonial.authorTitle}, {testimonial.companyName}</div>
                  </div>
                </div>
              </footer>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}