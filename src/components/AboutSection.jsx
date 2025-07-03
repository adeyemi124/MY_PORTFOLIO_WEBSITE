import React from "react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://readdy.ai/api/search-image?query=A%20professional%20portrait%20of%20a%20developer%20in%20a%20modern%20office%20environment%20with%20soft%20natural%20lighting%2C%20working%20on%20multiple%20screens%20with%20code%20visible%2C%20wearing%20smart%20casual%20attire%20with%20a%20confident%20expression&width=600&height=600&seq=9&orientation=squaris"
            alt="Developer portrait"
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Me</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-rocket text-blue-600"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Time-bound Development</h3>
                <p className="text-gray-600">
                  I deliver clean, reliable solutions within set timelines—without compromising on creativity, quality, or performance. Your time matters, and so does the impact of your vision.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-comments text-purple-600"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
                <p className="text-gray-600">
                  I believe in transparent, consistent communication throughout the development process, ensuring we're always aligned on goals and progress.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-lightbulb text-indigo-600"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Problem-Solving Mindset</h3>
                <p className="text-gray-600">
                  I approach each challenge with analytical thinking and creative problem-solving in a bid to proffer the best possible solution to any particular challenge I am faced with as a developer, as reflected in real-world problems I have been able to provide useful solutions to in my Projects Section.
                </p>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">90%+</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">On-time Delivery Record</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
