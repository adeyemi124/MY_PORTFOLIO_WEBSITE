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
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-green-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">adeyemisaj@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-green-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">Oyo State, Nigeria</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-clock text-green-600"></i>
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
              <a href="https://github.com/adeyemi124" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adebayoadeyemiaa" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/adeyemi9911?t=BVCtjrpO07l4or5y44Yl9g&s=09" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              {/* <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-dribbble"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <iframe
              src="https://www.google.com/maps?q=Oyo%20State%2C%20Nigeria&z=7&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map of Oyo State, Nigeria"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
