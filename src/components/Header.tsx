import React from 'react';
import TypeWriter from './TypeWriter';
import profileImage from '../assets/1738557530900.jpeg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function AnimatedName({ text, gradient, baseDelay = 0 }: { text: string; gradient?: boolean; baseDelay?: number }) {
  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className={`letter-span ${gradient ? 'gradient-text' : ''}`}
          style={{ animationDelay: `${baseDelay + i * 0.045}s` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

const Header: React.FC = () => {
  const roles = [
    'Full Stack Software Engineer',
    'React & TypeScript Developer',
    'AI / LLM Integration Engineer',
    'FastAPI & NestJS Backend Developer',
    'AWS Cloud & DevOps Engineer',
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Profile row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Avatar with liquid ring */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute inset-0 liquid-blob"
            style={{
              background: 'linear-gradient(135deg, rgba(var(--accent-rgb),0.55), rgba(var(--accent-rgb),0.2))',
              borderRadius: '50%',
              transform: 'scale(1.12)',
              filter: 'blur(5px)',
            }}
          />
          <div
            className="relative overflow-hidden"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px solid rgba(var(--accent-rgb),0.5)',
              boxShadow: '0 0 30px rgba(var(--accent-rgb),0.3)',
            }}
          >
            <img
              src={profileImage}
              alt="Sashank Punyamurthy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=SP&background=10b981&color=fff&size=120';
              }}
            />
          </div>
        </div>

        {/* Name + title */}
        <div className="text-center sm:text-left">
          <h1
            className="font-black tracking-tight leading-tight mb-1"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text-primary)' }}
          >
            <AnimatedName text="Sashank" baseDelay={0.3} />{' '}
            <AnimatedName text="Punyamurthy" gradient baseDelay={0.62} />
          </h1>

          <div
            className="font-medium mb-3"
            style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', minHeight: '1.4rem' }}
          >
            <TypeWriter
              texts={roles}
              typingSpeed={70}
              deletingSpeed={38}
              delayBetweenTexts={2000}
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3" style={{ fontSize: '0.8rem' }}>
            <a
              href="mailto:sashank0409@gmail.com"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--link)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sashank0409@gmail.com
            </a>
            <a
              href="tel:5135440885"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--link)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (513) 544-0885
            </a>
            <span className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Houston, TX
            </span>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/sashankp123"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center rounded-lg transition-all duration-200"
          style={{
            width: '38px',
            height: '38px',
            background: 'var(--glass-mid)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(var(--accent-rgb),0.15)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.4)';
            (e.currentTarget as HTMLElement).style.color = 'var(--link)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--glass-mid)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
            (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          <FaGithub size={17} />
        </a>

        <a
          href="https://www.linkedin.com/in/sashank-p/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center rounded-lg transition-all duration-200"
          style={{
            width: '38px',
            height: '38px',
            background: 'var(--glass-mid)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(var(--accent-rgb),0.15)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.4)';
            (e.currentTarget as HTMLElement).style.color = 'var(--link)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--glass-mid)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
            (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          <FaLinkedin size={17} />
        </a>

        <a
          href="https://x.com/sashank_p123"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter/X"
          className="flex items-center justify-center rounded-lg transition-all duration-200"
          style={{
            width: '38px',
            height: '38px',
            background: 'var(--glass-mid)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(var(--accent-rgb),0.15)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--accent-rgb),0.4)';
            (e.currentTarget as HTMLElement).style.color = 'var(--link)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--glass-mid)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
            (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          <FaTwitter size={17} />
        </a>

        <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)', margin: '0 4px' }} />

        <a
          href={`${import.meta.env.BASE_URL}Sashank_Punyamurthy_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold rounded-lg transition-all duration-200"
          style={{
            color: 'var(--btn-text)',
            padding: '0.45rem 1rem',
            fontSize: '0.8rem',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
            boxShadow: '0 0 20px rgba(var(--accent-rgb),0.25)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(var(--accent-rgb),0.45)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(var(--accent-rgb),0.25)';
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
