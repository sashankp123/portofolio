import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Header from './Header';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="bg-[var(--color-background-surface)] text-[var(--color-text-primary)] py-6 pb-2">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="h-full flex flex-col">
            <Header />
            
            <div className="flex flex-wrap gap-2 mt-4">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  <FaEnvelope size={14} />
                  <span className="ml-1.5">Feedback</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-indigo-700 to-violet-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="relative overflow-hidden group border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:text-white px-4 py-2 rounded-full font-medium flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  <span>View My Work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          <div className="h-full flex">
            <div className="bg-[var(--color-background)] rounded-lg p-5 shadow-lg w-full border-2 border-indigo-200 dark:border-indigo-900 h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white border-b-2 pb-2 border-indigo-200 dark:border-indigo-900">About Me</h3>
              <div className="prose prose-base dark:prose-invert">
                <p className="text-base">
                  I'm a passionate Full Stack Developer with expertise in modern web technologies.
                  My goal is to create intuitive and effective digital solutions to solve real-world problems.
                </p>
                <p className="text-base mt-3">
                  With strong skills in both frontend and backend development, I enjoy working on projects
                  that challenge me to learn and grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 