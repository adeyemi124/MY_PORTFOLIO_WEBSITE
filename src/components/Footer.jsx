import React from "react";

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">Adebayo Adeyemi</h3>
                    <p className="text-gray-400 mb-6 max-w-md">
                        Building digital experiences that make a difference. Let's create something amazing together.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/adeyemi124" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/adebayoadeyemiaa" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://x.com/adeyemi9911?t=BVCtjrpO07l4or5y44Yl9g&s=09" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        {/* <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <i className="fab fa-dribbble text-xl"></i>
                        </a> */}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-l-lg border-none outline-none text-gray-800 text-sm w-full bg-white placeholder-gray-500"
                            style={{ color: "#1a202c" }}
                        />
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-r-lg !rounded-button cursor-pointer whitespace-nowrap"
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Adebayo Adeyemi. All rights reserved.</p>
                <div className="mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors mr-6 cursor-pointer">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
