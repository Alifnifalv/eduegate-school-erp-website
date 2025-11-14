"use client";

export function AboutMapSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#144685] mb-6">
          Our Location
        </h2>
        <p className="text-base md:text-lg text-[#484848] mb-8">
          Visit us at our office or reach out for more information.
        </p>
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799144053!2d-74.25986768739997!3d40.69767006346398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b8e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2sSoftop%20Solutions!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Softop Solutions Location"
          ></iframe>
        </div>
        <div className="text-lg text-[#144685]">
          <strong>Softop Solutions</strong><br />
          123 Main Street, Business District<br />
          City, Country 12345<br />
          Phone: +1 234 567 8900<br />
          Email: info@softopsolutions.com
        </div>
      </div>
    </section>
  );
}
