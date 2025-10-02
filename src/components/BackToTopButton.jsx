import React from "react";

const BackToTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
  >
    <i className="fas fa-arrow-up"></i>
  </button>
);

export default BackToTopButton;
