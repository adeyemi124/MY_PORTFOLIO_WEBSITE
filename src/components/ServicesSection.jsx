import React from "react";

const ServicesSection = ({ services }) => (
  <section id="services" className="py-20 bg-white relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Enhanced header with staggered animation */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
          Specialized expertise to bring your digital vision to life with precision and creativity.
        </p>
      </div>
      
      {/* Enhanced grid with staggered cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services?.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 overflow-hidden opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Enhanced icon container */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <i className={`${service.icon} text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative z-10`}></i>
              </div>
              
              {/* Title with hover effect */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              {/* Description with enhanced typography */}
              <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
              
              {/* Animated learn more button */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <button className="text-blue-600 hover:text-purple-600 transition-colors inline-flex items-center cursor-pointer font-medium relative overflow-hidden group/btn">
                  {/* <span className="relative z-10">Learn more</span> */}
                  {/* <i className="fas fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover/btn:translate-x-1"></i> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>
              </div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-600/5 to-blue-600/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Custom animations */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </section>
);

export default ServicesSection;
