'use client';

import React, { useState } from 'react';

export function RequestCallBack() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 md:p-16">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144685] mb-4 font-['Poppins']">
              We Are Here To Help You
            </h2>
            <p className="text-xl md:text-2xl text-[#484848] font-['Poppins']">
              Provide your details, we will contact you
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-[#dbdbdb] rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Name Field */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-xl font-['Poppins'] text-[#111111]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-lg bg-[#d9d9d9] border border-[#d9d9d9] focus:border-[#144685] focus:outline-none focus:ring-2 focus:ring-[#144685] focus:ring-opacity-50 px-4 transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="phone" className="text-xl font-['Poppins'] text-[#111111]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-lg bg-[#d9d9d9] border border-[#d9d9d9] focus:border-[#144685] focus:outline-none focus:ring-2 focus:ring-[#144685] focus:ring-opacity-50 px-4 transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-xl font-['Poppins'] text-[#111111]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-lg bg-[#d9d9d9] border border-[#d9d9d9] focus:border-[#144685] focus:outline-none focus:ring-2 focus:ring-[#144685] focus:ring-opacity-50 px-4 transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Company Field */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="company" className="text-xl font-['Poppins'] text-[#111111]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-lg bg-[#d9d9d9] border border-[#d9d9d9] focus:border-[#144685] focus:outline-none focus:ring-2 focus:ring-[#144685] focus:ring-opacity-50 px-4 transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xl font-['Poppins'] text-[#111111]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-lg bg-[#d9d9d9] border border-[#d9d9d9] focus:border-[#144685] focus:outline-none focus:ring-2 focus:ring-[#144685] focus:ring-opacity-50 px-4 py-3 transition-colors resize-none font-['Poppins']"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-2 border-[#144685] text-[#144685] px-6 py-3 rounded-xl font-['Poppins'] font-semibold text-base hover:bg-[#144685] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Call Back'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you! We will contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestCallBack;
