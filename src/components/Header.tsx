import React from 'react';
import TypeWriter from './TypeWriter';
import profileImage from '../assets/1738557530900.jpeg';

const Header: React.FC = () => {
  const typingTexts = [
    "Full Stack Software Engineer",
    "React.js Developer",
    "NestJS Backend Developer",
    "UI/UX Enthusiast"
  ];

  return (
    <div className="p-5 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border-2 border-indigo-200 dark:border-indigo-700 shadow-lg h-full flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Profile Photo */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-indigo-500 dark:border-indigo-400">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/200x200?text=Add+Your+Photo';
            }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary dark:text-white animate-fade-in">
            Sashank Punyamurthy
          </h1>
          <p className="text-secondary dark:text-dark-secondary mb-2 h-5 animate-fade-in">
            <TypeWriter 
              texts={typingTexts} 
              typingSpeed={80} 
              deletingSpeed={40}
              className="font-medium text-sm" 
            />
          </p>
          <div className="contact-info flex flex-col items-center md:items-start gap-1">
            <a href="mailto:sashank0409@gmail.com" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sashank0409@gmail.com
            </a>
            <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cincinnati, OH
            </span>
          </div>
          
          <div className="mt-3 flex justify-center md:justify-start space-x-3 animate-fade-in">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1zZY2re6hcCAFxtqmo33muRzw_lonRJbi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium flex items-center transition-colors"
              aria-label="Download Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 