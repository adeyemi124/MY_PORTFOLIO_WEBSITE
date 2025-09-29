import React, { useState, useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import ProjectList from '../components/ProjectList';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import ModernHeroSection from '../components/ModernHeroSection';


const HomePage = () => {
 const [isVisible, setIsVisible] = useState(false);
 
 useEffect(() => {
   setIsVisible(true);
 }, []);
 
 const scrollToSection = (id) => {
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
 };










 //* Services Section Data
   const services = [
     {
       title: 'Frontend Applications',
       description: 'Building responsive, intuitive web applications that deliver exceptional user experiences.',
       icon: 'fas fa-laptop-code'
     },
     {
       title: 'Backend APIs',
       description: 'Crafting robust, scalable backend solutions that power your digital products.',
       icon: 'fas fa-server'
     },
     {
       title: 'Fullstack Projects',
       description: 'End-to-end development from concept to deployment with modern tech stacks.',
       icon: 'fas fa-layer-group'
     }
   ];
 







    //* Projects Section Data
   const projects = [
     {
       title: 'ApplyEase AI SaaS App',
       description: 'A career-changing AI suite designed for job seekers — generating CVs, cover letters, and offering tailored interview preparation. This app makes job readiness accessible with a click, giving users the edge in competitive job markets through personalized document generation and feedback.',
       tags: ['React JS', 'Gemini API', 'Tailwind CSS', 'Supabase'],
       image: 'https://readdy.ai/api/search-image?query=A%20modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20showing%20product%20cards%20with%20subtle%20shadows%20against%20a%20light%20background.%20The%20interface%20features%20elegant%20typography%20and%20a%20professional%20layout%20with%20shopping%20cart%20functionality&width=600&height=400&seq=1&orientation=landscape',
       link: 'https://applyeasefree-version.vercel.app/'
     },
     {
       title: 'Insightpilot SaaS App',
       description: 'An AI-powered decision intelligence dashboard that translates complex industry trends into actionable insights. Built for forward-thinkers and strategy teams, InsightPilot is a quiet revolution in how users can forecast, compare, and plan based on real-time generative data.',
       tags: ['React JS', 'Gemini AI API', 'Tailwind CSS', 'Node.js(Express)', 'Mongo DB'],
       image: 'https://readdy.ai/api/search-image?query=A%20health%20and%20fitness%20tracking%20mobile%20app%20interface%20with%20activity%20graphs%2C%20step%20counter%2C%20and%20heart%20rate%20monitoring%20displayed%20on%20a%20smartphone%20against%20a%20clean%20background%20with%20subtle%20health-related%20icons&width=600&height=400&seq=2&orientation=landscape',
         link: 'https://insightpilot.vercel.app/'
     },
     {
       title: 'AI Suite for Content Creator/Developers',
       description: 'An all-in-one AI writing assistant that feels like having a content strategist, marketer, and copywriter in one place. Built to generate blogs, captions, and structured content from developer input — it proves how AI can radically empower creators and save hours of cognitive load.',
       tags: ['HTML', 'CSS', 'Gemini AI API'],
       image: 'https://readdy.ai/api/search-image?query=A%20professional%20financial%20dashboard%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%20elements%20displaying%20market%20trends%20and%20analytics%20against%20a%20dark%20blue%20background%20with%20glowing%20elements%20and%20clean%20typography&width=600&height=400&seq=3&orientation=landscape',
         link: 'https://ai-content-generator-liard-ten.vercel.app/'
     },
     {
       title: 'URL Shortener/QR Code Generator',
       description: 'More than a typical short-link generator, this backend-powered app compresses URLs and generates a scannable QR Code for the users while providing a clean interface and intelligent redirects. Designed to be scalable and efficient, it’s a productivity utility that mirrors the quality of commercial alternatives like bit.ly and tinyurl.com',
       tags: ['React JS', 'Node.js(Express)'],
       image: 'https://readdy.ai/api/search-image?query=A%20modern%20social%20media%20interface%20showing%20user%20profiles%2C%20messaging%20features%2C%20and%20content%20feed%20with%20engagement%20metrics%20against%20a%20gradient%20background%20with%20subtle%20network%20connection%20visuals&width=600&height=400&seq=4&orientation=landscape',
         link: 'https://url-shortener-three-sigma.vercel.app/'
     },
     {
       title: 'Transfera Bank Application',
       description: 'I crafted a modern banking interface with the real-world experience of digital finance. Designed with clear UX principles, responsive pages, and standard and secure banking logic — this project demonstrates how fintech solutions can be visually intuitive, secure, and consumer-friendly. This application is still in development, with backend still being developed.',
       tags: ['React JS', 'Tailwind CSS'],
       image: 'https://readdy.ai/api/search-image?query=A%20professional%20financial%20dashboard%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%20elements%20displaying%20market%20trends%20and%20analytics%20against%20a%20dark%20blue%20background%20with%20glowing%20elements%20and%20clean%20typography&width=600&height=400&seq=3&orientation=landscape',
            link: 'https://transfera-bank-application.vercel.app/'
     },
     {
       title: 'Oreoluwa’s Portfolio',
       description: 'Engineered a crisp and expressive digital presence for convener of Millionaire-A-student event using clean layout systems, accessible color contrast, and interactive elements. This portfolio sets a high bar for professional self-representation, telling a story of what she stands for, her impacts and confidence in less than 10 seconds of page load.',
       tags: ['React JS', 'Tailwind CSS', 'Vite'],
       image: 'https://readdy.ai/api/search-image?query=A%20modern%20social%20media%20interface%20showing%20user%20profiles%2C%20messaging%20features%2C%20and%20content%20feed%20with%20engagement%20metrics%20against%20a%20gradient%20background%20with%20subtle%20network%20connection%20visuals&width=600&height=400&seq=4&orientation=landscape',
         link: 'https://afolabi-oreoluwa.vercel.app/'
     },
     {
       title: 'OAP’s Portfolio ',
       description: 'I built a minimalist personal brand experience which feels like a curated museum. The site captures the elegance and competence of an On Air Personality(OAP), blending UI excellence with lightning-fast performance. It’s not just a portfolio — it’s an online impression that leaves his potential clients hooked.',
       tags: ['React JS', 'Tailwind CSS', 'Vite'],
       image: 'https://readdy.ai/api/search-image?query=A%20professional%20financial%20dashboard%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%20elements%20displaying%20market%20trends%20and%20analytics%20against%20a%20dark%20blue%20background%20with%20glowing%20elements%20and%20clean%20typography&width=600&height=400&seq=3&orientation=landscape',
            link: 'https://adebayo-adedamola.vercel.app/'
     },
     {
       title: 'Photographer’s Portfolio',
       description: 'I created a dynamic portfolio website, a trust-building personal brand tool for a photographer. With its seamless user flow and captivating layout, this project reflects a deep understanding of human-first design, showcasing how powerful personal branding can be executed with simplicity and precision.',
       tags: ['React JS', 'Tailwind CSS'],
       image: 'https://readdy.ai/api/search-image?query=A%20modern%20social%20media%20interface%20showing%20user%20profiles%2C%20messaging%20features%2C%20and%20content%20feed%20with%20engagement%20metrics%20against%20a%20gradient%20background%20with%20subtle%20network%20connection%20visuals&width=600&height=400&seq=4&orientation=landscape',
            link: 'https://refined-brand-space.vercel.app/'
     },
   ];
 








 
   return (
     <div className="min-h-screen bg-white text-gray-800 font-sans">


       {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">Adebayo Adeyemi</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
                <button
                    onClick={() => scrollToSection('services')}
                    className="group text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer whitespace-nowrap relative text-lg"
                >
                    Services
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-green-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="group text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer whitespace-nowrap relative text-lg"
                >
                    Projects
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-green-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
                <button
                    onClick={() => scrollToSection('about')}
                    className="group text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer whitespace-nowrap relative text-lg"
                >
                    About Me
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-green-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="relative bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden text-lg"
                >
                    <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
                    Contact Me
                </button>
            </div>
            <div className="md:hidden flex items-center">
                <button className="text-gray-700 hover:text-green-600 transition-colors duration-300 cursor-pointer">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </div>
</nav>
 




    {/* Hero Section */}
    <ModernHeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
     






        {/* Services Section */}
       <ServicesSection services={services} />
 
       {/* Projects Section */}
       <section id="projects" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               A showcase of my recent work, demonstrating my skills and approach to solving real-world problems.
             </p>
           </div>
           <ProjectList projects={projects} />
           <div className="text-center mt-12">
             {/* <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all !rounded-button cursor-pointer whitespace-nowrap">
               View All Projects
             </button> */}
           </div>
         </div>
       </section>
 
       {/* About Me Section */}
       <AboutSection />
 
       {/* Contact Section */}
       <ContactSection />
 
       {/* Footer */}
       <Footer />
 
       {/* Back to top button */}
       <BackToTopButton />
     </div>
  );
}

export default HomePage;
