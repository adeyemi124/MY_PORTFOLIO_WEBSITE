import React, { useState, useEffect } from 'react';

const ModernHeroSection = ({ isVisible: parentVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const techStack = ['Javascript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Supabase'];

  useEffect(() => {
    setIsVisible(true);
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(techInterval);
  }, []);

  // Use parent's isVisible if provided, else use local
  const visible = typeof parentVisible === 'boolean' ? parentVisible : isVisible;

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-green-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            {/* Status Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Available for freelance</span>
            </div>
            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-white">We Build</span>
              <br />
              <span className="text-green-400">
                Digital Solutions
              </span>
              <br />
              <span className="text-white">To Problems</span>
            </h1>
            {/* Dynamic Tech Stack */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-300 text-lg mb-4">
                Specializing in <span className="text-green-400 font-semibold transition-all duration-500">{techStack[currentTech]}</span>
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
                      index === currentTech
                        ? 'bg-green-500/30 text-green-300 border border-green-500/50'
                        : 'bg-white/10 text-gray-400 border border-white/20'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Description */}
            <p className={`text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I transform complex problems into elegant software solutions. Crafting digital experiences that help businesses thrive in the modern world.
            </p>
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="https://github.com/adeyemi124"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <svg className="w-6 h-6 mr-2 text-white group-hover:text-green-200 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://wa.link/jjko7t"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center border-2 border-green-500/50 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/20 hover:border-green-500 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
                WhatsApp Me
              </a>
            </div>
            {/* Stats */}
            <div className={`mt-12 grid grid-cols-3 gap-8 transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Right Content - 3D Visual */}
          <div className="lg:w-1/2 relative">
            <div className={`relative z-10 transition-all duration-1000 delay-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main Visual Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Floating Code Blocks */}
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 animate-float">
                  <div className="text-green-400 font-mono text-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>Building...</span>
                    </div>
                    <div className="text-gray-300 text-xs">{"</> React App"}</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 animate-float animation-delay-2000">
                  <div className="text-blue-400 font-mono text-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span>API Ready</span>
                    </div>
                    <div className="text-gray-300 text-xs">{"200 OK"}</div>
                  </div>
                </div>
                {/* Central Developer Image */}
                <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dw1gzsri4/image/upload/v1751554367/WhatsApp_Image_2025-07-03_at_3.47.55_PM_l9layh.jpg"
                      alt="Developer workspace"
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Floating Tech Icons */}
                <div className="absolute top-16 -left-16 w-12 h-12 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center animate-bounce">
                  <span className="text-green-400 font-bold text-sm">JS</span>
                </div>
                <div className="absolute bottom-16 -right-16 w-12 h-12 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center animate-bounce animation-delay-1000">
                  <span className="text-green-400 font-bold text-sm">TS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ModernHeroSection;
