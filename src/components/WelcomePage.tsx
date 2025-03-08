import React, { useEffect, useState } from 'react';
import TypeWriter from './TypeWriter';

interface WelcomePageProps {
  onToggle: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onToggle }) => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing content for a nice fade-in effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-24 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-24 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      </div>
      
      <div className={`text-center transform transition-all duration-1000 z-10 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Main welcome text with stylish overlay */}
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 animate-fade-in relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Welcome to My Webpage
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-6"></div>
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Hi, Welcome!
          </h2>
          <div className="text-xl text-indigo-300 mt-4">
            <TypeWriter 
              texts={["I'm a passionate developer.", "Check out my portfolio.", "Let's build something amazing!"]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={1000}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <button
            onClick={onToggle}
            className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              <span>Enter Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage; 