import React, { useState, useEffect, useRef } from "react";

const ProjectList = ({ projects = [] }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Handle empty projects array
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">No projects to display</div>
      </div>
    );
  }

  return () => observer.disconnect();
  }, [projects]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -10;
    const rotateY = (mouseX / rect.width) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    setHoveredCard(null);
  };

  // Update the images to match the project descriptions with more specific images
  const updatedProjects = projects.map((project) => {
    let image = project.image;
    if (project.title.includes('ApplyEase')) {
      image = 'https://plus.unsplash.com/premium_photo-1661484773497-5825e7cbd902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpvYiUyMHNlZWtlcnN8ZW58MHx8MHx8fDA%3D'; // Resume/CV/AI
    } else if (project.title.includes('Insightpilot')) {
      image = 'https://plus.unsplash.com/premium_photo-1665203411542-6fdb1f1929b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlY2lzaW9uJTIwbWFraW5nfGVufDB8fDB8fHww'; // Analytics/Dashboard
    } else if (project.title.includes('AI Suite')) {
      image = 'https://images.unsplash.com/photo-1627244714766-94dab62ed964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGVudCUyMGNyZWF0b3J8ZW58MHx8MHx8fDA%3D'; // Content/AI
    } else if (project.title.includes('URL Shortener')) {
      image = 'https://media.istockphoto.com/id/1221997075/photo/url-concept-on-wooden-cubes-on-a-keyboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bqh6Vo_WKqIvQl0KpvT_tmVPJ4hwn1_3uT0uucPmwHQ='; // Shortened URL on screen
    } else if (project.title.includes('Transfera Bank')) {
      image = 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&w=600&q=80'; // Modern banking/fintech interface (Pexels, reliable)
    } else if (project.title.includes('Oreoluwa')) {
      image = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80'; // Portfolio/Personal
    } else if (project.title.includes('OAP')) {
      image = 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFkaW8lMjBwcmVzZW50ZXJ8ZW58MHx8MHx8fDA%3D'; // Media/Personality
    } else if (project.title.includes('Photographer')) {
      image = 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww'; // Photography
    }
    return { ...project, image };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
      {updatedProjects.map((project, idx) => (
        <div
          key={idx}
          ref={(el) => (cardRefs.current[idx] = el)}
          data-index={idx}
          className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer transform-gpu ${
            visibleCards.has(idx) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: `${idx * 150}ms`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          }}
          onMouseEnter={() => setHoveredCard(idx)}
          onMouseMove={(e) => handleMouseMove(e, idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Floating Project Number */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20 transform group-hover:scale-110 transition-transform duration-300">
              {String(idx + 1).padStart(2, '0')}
            </div>
            
            {/* Live Preview Indicator */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full z-20 transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-medium">Live</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col relative z-10">
            {/* Title with Animated Underline */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 relative">
              {project.title}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 delay-100"></div>
            </h3>

            {/* Description */}
            <p className="text-base text-gray-800 mb-4 flex-1 leading-relaxed group-hover:text-blue-900 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-300 hover:from-blue-200 hover:to-purple-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                  style={{
                    transitionDelay: `${tagIdx * 50}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button className="group/btn relative overflow-hidden px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          {/* Floating Particles */}
          {hoveredCard === idx && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 200}ms`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
};

export default ProjectList;