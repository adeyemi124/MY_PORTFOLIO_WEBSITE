import React from "react";

const ServicesSection = ({ services }) => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Specialized expertise to bring your digital vision to life with precision and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mb-6">
              <i className={`${service.icon} text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* <a href="#" className="text-blue-600 hover:text-purple-600 transition-colors inline-flex items-center cursor-pointer">
              Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </a> */}

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
