const ContactFormSection = () => (
  <section className="flex flex-col items-center px-4 sm:px-8 lg:px-36 py-8 w-full">
    <div className="w-full max-w-5xl bg-white border border-gray-300 rounded-md p-8 md:p-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#144685]">We Are Here To Help You</h2>
        <p className="text-lg text-[#484848]">Provide your details, we will contact you</p>
      </div>
      <form className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#111111]">Your Name</label>
            <input type="text" className="bg-gray-200 h-12 rounded px-4" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#111111]">Phone Number</label>
            <input type="text" className="bg-gray-200 h-12 rounded px-4" placeholder="Enter your phone number" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#111111]">Email Address</label>
            <input type="email" className="bg-gray-200 h-12 rounded px-4" placeholder="Enter your email address" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#111111]">Company Name</label>
            <input type="text" className="bg-gray-200 h-12 rounded px-4" placeholder="Enter your company name" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg text-[#111111]">Message</label>
          <textarea className="bg-gray-200 h-12 rounded px-4" placeholder="Type your message here" />
        </div>
        <button type="submit" className="border border-[#144685] text-[#144685] rounded-xl px-6 py-3 font-semibold w-48 self-center hover:bg-[#144685] hover:text-white transition-colors">Request a Call Back</button>
      </form>
    </div>
  </section>
);

export default ContactFormSection;
