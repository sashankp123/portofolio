import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaSun, FaMoon, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');

  // Debounce function to limit the rate at which a function can fire
  const debounce = useCallback((func: () => void, wait: number): () => void => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  }, []);

  // Use debounced scroll handler
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Update navbar background on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ['summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debounce]);

  // Check for saved theme preference or system preference
  useEffect(() => {
    // Check if user previously selected dark mode
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }, [isDarkMode]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  }, []);

  // Memoize navigation items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ], []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Desktop Navigation - New Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left Navigation Items */}
          <div className="flex space-x-6">
            {navItems.slice(0, 3).map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-indigo-600 dark:text-indigo-400 font-medium' : ''
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform transition-transform duration-300"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Center Logo/Avatar */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" onClick={() => scrollToSection('summary')}>
              <FaUser size={20} color="currentColor" />
            </div>
          </div>
          
          {/* Right Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.slice(3).map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-indigo-600 dark:text-indigo-400 font-medium' : ''
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform transition-transform duration-300"></span>
                )}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 bg-gray-100 dark:bg-gray-800 rounded-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Header */}
        <div className="flex md:hidden items-center justify-between">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" onClick={() => scrollToSection('summary')}>
            <FaUser size={16} color="currentColor" />
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="space-y-3 pb-3 border-t border-gray-200 dark:border-gray-700 pt-3">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`block py-2 w-full text-left transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 