import React from "react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Bring Your Idea to Life</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm excited to hear about your project. Fill out the form and I'll get back to you within 24 hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">katamanda144@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-purple-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">Ogbomoso, Oyo State, Nigeria.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-clock text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Availability</h3>
                <p className="text-gray-600">Monday - Saturday, 9am - 6pm</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/adeyemi124" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adebayoadeyemiaa" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              {/* <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-dribbble"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all !rounded-button cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
