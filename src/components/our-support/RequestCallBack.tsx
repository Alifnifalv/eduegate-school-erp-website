"use client";
import { useState } from 'react';

export function RequestCallBack() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#144685] mb-6">
          Request a Call Back
        </h2>
        <p className="text-base md:text-lg text-[#484848] mb-8">
          Need help or want to talk to our support team? Fill out the form and we'll get back to you as soon as possible.
        </p>
        {!submitted ? (
          <form
            className="space-y-6"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#144685] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Call Back
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-semibold text-lg mt-8">
            Thank you! Our support team will contact you soon.
          </div>
        )}
      </div>
    </section>
  );
}
