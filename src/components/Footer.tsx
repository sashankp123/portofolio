import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const socials = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/sashankp123', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/sashank-p/', label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, href: 'https://x.com/sashank_p123', label: 'Twitter' },
  ];

  return (
    <footer
      className="relative"
      style={{
        background: 'var(--footer-bg)',
        borderTop: '1px solid rgba(251,252,244,0.1)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2"
        style={{
          transform: 'translateX(-50%)',
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(251,252,244,0.4), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="gradient-text font-black text-2xl mb-3">SP</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--footer-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Full Stack Software Engineer · Building scalable, elegant products that make an impact.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(251,252,244,0.06)',
                    border: '1px solid rgba(251,252,244,0.14)',
                    color: 'var(--footer-muted)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(251,252,244,0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,252,244,0.35)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--footer-text)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(251,252,244,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,252,244,0.14)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--footer-muted)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.72rem',
                color: 'var(--footer-muted)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left transition-colors duration-200"
                  style={{ fontSize: '0.875rem', color: 'var(--footer-muted)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--footer-text)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--footer-muted)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.72rem',
                color: 'var(--footer-muted)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Get In Touch
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--footer-muted)', marginBottom: '0.75rem', lineHeight: '1.6' }}>
              Always open to new opportunities, collaborations, and interesting conversations.
            </p>
            <a
              href="mailto:sashank0409@gmail.com"
              className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
              style={{ fontSize: '0.875rem', color: 'var(--footer-text)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--footer-text)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--footer-text)')}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sashank0409@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(251,252,244,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--footer-faint)', textAlign: 'center' }}>
            Designed &amp; Built by{' '}
            <span className="gradient-text font-semibold">Sashank Punyamurthy</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
