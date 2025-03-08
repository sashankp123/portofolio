import { useEffect, useState } from 'react';
import {
  NavbarComponent as Navbar,
  ExperienceComponent as Experience,
  ProjectsComponent as Projects,
  SkillsComponent as Skills,
  EducationComponent as Education,
  CertificatesComponent as Certificates,
  ContactComponent as Contact,
  WelcomePage,
  FooterComponent as Footer,
  HeroSectionComponent as HeroSection
} from './components/components';
import './index.css';

// Define more precise type for theme colors
type ColorVariant = {
  light: string;
  dark: string;
};

type ColorWithHover = ColorVariant & {
  hover: ColorVariant;
};

type ThemeColors = {
  primary: ColorWithHover;
  secondary: ColorWithHover;
  background: {
    light: string;
    dark: string;
    surface: ColorVariant;
  };
  text: {
    primary: ColorVariant;
    secondary: ColorVariant;
    muted: ColorVariant;
  };
};

// Define theme with explicit type
const theme: {
  colors: ThemeColors;
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  animations: {
    fadeUp: string;
    fadeIn: string;
    pulse: string;
    bounce: string;
  };
  combine: (...classNames: string[]) => string;
  color: (colorType: keyof ThemeColors, subType?: string, variant?: 'light' | 'dark') => string;
} = {
  colors: {
    primary: {
      light: 'indigo-600',
      dark: 'indigo-500',
      hover: {
        light: 'indigo-700',
        dark: 'indigo-600'
      }
    },
    secondary: {
      light: 'gray-600',
      dark: 'gray-500',
      hover: {
        light: 'gray-700',
        dark: 'gray-600'
      }
    },
    background: {
      light: 'white',
      dark: 'gray-900',
      surface: {
        light: 'gray-100',
        dark: 'gray-800'
      }
    },
    text: {
      primary: {
        light: 'gray-900',
        dark: 'gray-100'
      },
      secondary: {
        light: 'gray-600',
        dark: 'gray-400'
      },
      muted: {
        light: 'gray-500',
        dark: 'gray-500'
      }
    }
  },
  
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  },
  
  animations: {
    fadeUp: 'animate-fadeUp',
    fadeIn: 'animate-fadeIn',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
  },
  
  combine(...classNames: string[]) {
    return classNames.join(' ');
  },

  color(colorType: keyof ThemeColors, subType?: string, variant: 'light' | 'dark' = 'light') {
    const color = theme.colors[colorType];
    
    // Type guard to handle different color structures
    if (typeof color === 'object') {
      if (subType && 'hover' in color) {
        const hoveredColor = (color as ColorWithHover).hover;
        return variant === 'light' ? hoveredColor.light : hoveredColor.dark;
      }
      
      if ('light' in color && 'dark' in color) {
        return variant === 'light' ? (color as ColorVariant).light : (color as ColorVariant).dark;
      }
    }
    
    // Fallback for unexpected types
    return String(color);
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  // Handle dark mode persistence and system preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const storedDarkMode = localStorage.getItem('darkMode');

    const setDarkMode = (isDark: boolean) => {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('darkMode', isDark.toString());
    };

    // Initial dark mode setting
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    } else {
      setDarkMode(prefersDarkMode.matches);
    }

    // Listen for system dark mode changes
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    prefersDarkMode.addEventListener('change', handleDarkModeChange);
    return () => prefersDarkMode.removeEventListener('change', handleDarkModeChange);
  }, []);
  
  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Combined class sets for common elements
  const sectionBg = theme.combine(
    'bg-[var(--color-background-secondary)]',
    theme.shadows.md
  );
  
  const headingText = theme.combine(
    'text-[var(--color-text-primary)]',
    'font-bold'
  );
  
  const handleWelcomePageToggle = () => {
    setShowWelcomePage(false);
  };

  return (
    <div className={theme.combine('bg-[var(--color-background)]', 'min-h-screen')}>
      {showWelcomePage ? (
        <WelcomePage onToggle={handleWelcomePageToggle} />
      ) : (
        <>
          {/* Fixed navbar with scroll effect */}
          <div className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
            scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
          }`}>
            <Navbar />
          </div>
          
          <main className="pt-24">
            {/* Hero Section */}
            <HeroSection scrollToSection={scrollToSection} />
            
            {/* Alternating Sections */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Experience Section */}
              <section id="experience" className="mb-24">
                <div className="flex items-center mb-10">
                  <h2 className={`text-3xl ${headingText}`}>Work Experience</h2>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
                </div>
                <div className={`${sectionBg} rounded-xl overflow-hidden`}>
                  <Experience />
                </div>
              </section>
              
              {/* Projects Section */}
              <section id="projects" className="mb-24">
                <div className="flex items-center mb-10">
                  <h2 className={`text-3xl ${headingText}`}>Projects</h2>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
                </div>
                <div className={`${sectionBg} rounded-xl p-6`}>
                  <Projects />
                </div>
              </section>
              
              {/* Skills Section */}
              <section id="skills" className="mb-24">
                <div className="flex items-center mb-10">
                  <h2 className={`text-3xl ${headingText}`}>Skills</h2>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
                </div>
                <div className={`${sectionBg} rounded-xl p-6`}>
                  <Skills />
                </div>
              </section>
              
              {/* Education & Certificates Section */}
              <section id="education" className="mb-24">
                <div className="flex items-center mb-10">
                  <h2 className={`text-3xl ${headingText}`}>Education & Certificates</h2>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className={`${sectionBg} rounded-xl p-6`}>
                    <Education />
                  </div>
                  <div className={`${sectionBg} rounded-xl p-6`}>
                    <Certificates />
                  </div>
                </div>
              </section>
              
              {/* Feedback Section */}
              <section id="contact">
                <div className="flex items-center mb-10">
                  <h2 className={`text-3xl ${headingText}`}>Feedback</h2>
                  <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow ml-6"></div>
                </div>
                <div className={`bg-[var(--color-primary)] text-white rounded-xl ${theme.shadows.lg} overflow-hidden`}>
                  <div className="p-8">
                    <Contact />
                  </div>
                </div>
              </section>
            </div>
          </main>
          
          {/* Footer */}
          <Footer scrollToSection={scrollToSection} />
          
          {/* CSS for background pattern */}
          <style>{`
            .bg-grid-pattern {
              background-image: linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
              background-size: 20px 20px;
            }
            
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            
            @keyframes float {
              0% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-20px) translateX(10px);
              }
              100% {
                transform: translateY(0px) translateX(0px);
              }
            }
            
            @keyframes float-delayed {
              0% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(20px) translateX(-10px);
              }
              100% {
                transform: translateY(0px) translateX(0px);
              }
            }
            
            @keyframes float-slow {
              0% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-10px) translateX(-5px);
              }
              100% {
                transform: translateY(0px) translateX(0px);
              }
            }
            
            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
            
            .animate-float-delayed {
              animation: float-delayed 10s ease-in-out infinite;
            }
            
            .animate-float-slow {
              animation: float-slow 12s ease-in-out infinite;
            }
            
            .animate-fadeUp {
              animation: fadeUp 0.6s ease-out forwards;
            }
            
            .animate-fadeIn {
              animation: fadeIn 0.8s ease-out forwards;
            }
          `}</style>
        </>
      )}
    </div>
  );
}

export default App;
