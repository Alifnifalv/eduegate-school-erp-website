// src/components/marketing/TestimonialsSection.tsx
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="mx-auto max-w-2xl text-center">
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
        </div>
        
        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.companyName}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              {/* Quote - `flex-grow` pushes the author info to the bottom */}
              <blockquote className="flex-grow text-lg leading-8 text-gray-700">
                <p>"{testimonial.quote}"</p>
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}