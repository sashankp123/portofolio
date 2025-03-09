import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="bg-indigo-500 h-6 w-1 mr-3 rounded-full"></span>
              Sashank Punyamurthy
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Full-Stack Developer specializing in modern web applications with a passion for building beautiful interfaces and scalable solutions.
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/sashankp123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sashank-p/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="https://x.com/sashank_p123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#experience" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Experience
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#skills" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#education" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Education
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#feedback" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-3 text-sm">Feel free to reach out with any questions or opportunities.</p>
            <a href="mailto:sashank0409@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center mb-4 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sashank0409@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex justify-center items-center">
          <p className="text-white text-base font-medium">Thanks for visiting my portfolio!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 