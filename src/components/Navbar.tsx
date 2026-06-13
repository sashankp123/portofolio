import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = ['hero', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 120 && bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768 && isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  const toggleTheme = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* private mode — theme still applies for this visit */
    }
    setIsDark(next);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  }, []);

  const navItems = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center transition-all duration-300"
      style={{
        width: '34px',
        height: '34px',
        borderRadius: '0.6rem',
        background: 'var(--glass-mid)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(var(--accent-rgb),0.18)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
        (e.currentTarget as HTMLElement).style.transform = 'rotate(18deg)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'var(--glass-mid)';
        (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
        (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg)';
      }}
    >
      {isDark ? <FaSun size={14} /> : <FaMoon size={13} />}
    </button>
  );

  return (
    <header
      className="fixed top-0 w-full z-50 flex justify-center"
      style={{ paddingTop: isScrolled ? '12px' : '20px', paddingLeft: '1rem', paddingRight: '1rem' }}
    >
      <nav
        className="w-full max-w-4xl transition-all duration-500"
        style={{
          background: isScrolled || isMenuOpen ? 'rgba(var(--nav-rgb), 0.85)' : 'transparent',
          backdropFilter: isScrolled || isMenuOpen ? 'blur(30px)' : 'none',
          WebkitBackdropFilter: isScrolled || isMenuOpen ? 'blur(30px)' : 'none',
          border: isScrolled || isMenuOpen ? '1px solid var(--glass-border)' : '1px solid transparent',
          borderRadius: '1rem',
          padding: '0.6rem 1.5rem',
          boxShadow: isScrolled || isMenuOpen ? 'var(--shadow-nav)' : 'none',
        }}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="font-black text-base tracking-wider gradient-text"
          >
            SP
          </button>

          <div className="flex items-center" style={{ gap: '2px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative font-medium transition-all duration-200"
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '0.6rem',
                  fontSize: '0.875rem',
                  color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background:
                    activeSection === item.id
                      ? 'rgba(var(--accent-rgb),0.2)'
                      : 'transparent',
                  border:
                    activeSection === item.id
                      ? '1px solid rgba(var(--accent-rgb),0.35)'
                      : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id)
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {themeButton}
            <a
              href={`${import.meta.env.BASE_URL}Sashank_Punyamurthy_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold transition-all duration-200"
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '0.6rem',
                fontSize: '0.8rem',
                color: 'var(--btn-text)',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
                boxShadow: '0 0 20px rgba(var(--accent-rgb),0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(var(--accent-rgb),0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(var(--accent-rgb),0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="font-black gradient-text">
            SP
          </button>
          <div className="flex items-center gap-2">
            {themeButton}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: 'var(--text-secondary)', padding: '0.25rem' }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-mid)' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left transition-colors duration-200"
                style={{
                  padding: '0.6rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  color: activeSection === item.id ? 'var(--link)' : 'var(--text-secondary)',
                  background:
                    activeSection === item.id ? 'rgba(var(--accent-rgb),0.1)' : 'transparent',
                  marginBottom: '2px',
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Sashank_Punyamurthy_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-semibold"
              style={{
                marginTop: '0.5rem',
                padding: '0.6rem',
                borderRadius: '0.5rem',
                color: 'var(--btn-text)',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
                fontSize: '0.875rem',
              }}
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
