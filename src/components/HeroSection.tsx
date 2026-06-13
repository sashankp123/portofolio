import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { FaCode, FaProjectDiagram, FaCertificate, FaClock } from 'react-icons/fa';
import { useCountUp } from '../hooks/useCountUp';
import { useMagnetic } from '../hooks/useMagnetic';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const stats = [
  { icon: <FaClock size={16} />, value: 2, suffix: '+', label: 'Years Experience', color: 'var(--accent)' },
  { icon: <FaCode size={16} />, value: 90, suffix: '%+', label: 'Test Coverage', color: 'var(--accent-soft)' },
  { icon: <FaProjectDiagram size={16} />, value: 40, suffix: '%', label: 'Faster CI/CD', color: 'var(--accent-strong)' },
  { icon: <FaCertificate size={16} />, value: 92, suffix: '%+', label: 'RAG Accuracy', color: 'var(--link)' },
];

function StatCard({
  stat,
  index,
  started,
}: {
  stat: (typeof stats)[number];
  index: number;
  started: boolean;
}) {
  const count = useCountUp(stat.value, started, 1300 + index * 150);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div
      className="glass-card spotlight-card rounded-2xl"
      onMouseMove={handleMove}
      style={{
        padding: '1.5rem',
        textAlign: 'center',
        animation: `scale-in 0.7s cubic-bezier(0.16,1,0.3,1) ${0.5 + 0.12 * index}s both`,
      }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl mx-auto mb-3"
        style={{
          background: `color-mix(in srgb, ${stat.color} 13%, transparent)`,
          border: `1px solid color-mix(in srgb, ${stat.color} 27%, transparent)`,
          color: stat.color,
        }}
      >
        {stat.icon}
      </div>
      <div className="font-black mb-1" style={{ fontSize: '1.8rem', color: stat.color }}>
        {count}
        {stat.suffix}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  );
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersOn, setCountersOn] = useState(false);
  const primaryBtn = useMagnetic<HTMLButtonElement>(0.25);
  const secondaryBtn = useMagnetic<HTMLButtonElement>(0.25);

  // Kick the counters shortly after mount so they sync with the card pop-in
  useEffect(() => {
    const t = setTimeout(() => setCountersOn(true), 650);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax — drives --px / --py (-1..1) for decorative layers
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty('--px', px.toFixed(3));
      el.style.setProperty('--py', py.toFixed(3));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Profile + actions */}
          <div
            style={{
              animation: 'reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}
          >
            <Header />

            {/* About blurb */}
            <div
              className="mt-6 glass-card rounded-2xl"
              style={{ padding: '1.25rem 1.5rem' }}
            >
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                I'm a results-driven Full Stack Software Engineer at{' '}
                <span style={{ color: 'var(--link)', fontWeight: 600 }}>Experian</span>, designing and deploying scalable,
                cloud-native apps on AWS with React.js, TypeScript, NestJS, and FastAPI. Hands-on with{' '}
                <span style={{ color: 'var(--link)', fontWeight: 600 }}>AI/LLM integrations</span> — I own features end-to-end
                with a focus on performance, reliability, and measurable impact. Let's build something{' '}
                <span className="gradient-text font-semibold">amazing</span> together.
              </p>
            </div>

            {/* CTA buttons — magnetic */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                ref={primaryBtn}
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden font-semibold rounded-full"
                style={{
                  color: 'var(--btn-text)',
                  padding: '0.65rem 1.75rem',
                  fontSize: '0.875rem',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
                  boxShadow: '0 0 24px rgba(var(--accent-rgb),0.35)',
                }}
              >
                Get In Touch
              </button>

              <button
                ref={secondaryBtn}
                onClick={() => scrollToSection('projects')}
                className="font-semibold rounded-full"
                style={{
                  padding: '0.65rem 1.75rem',
                  fontSize: '0.875rem',
                  color: 'var(--link)',
                  background: 'rgba(var(--accent-rgb),0.1)',
                  border: '1px solid rgba(var(--accent-rgb),0.3)',
                }}
              >
                View My Work →
              </button>
            </div>
          </div>

          {/* Right — Stats + decorative blob */}
          <div
            style={{
              animation: 'reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both',
            }}
          >
            <div className="relative">
              {/* Parallax blob */}
              <div
                className="absolute liquid-blob"
                style={{
                  width: '300px',
                  height: '300px',
                  top: '50%',
                  left: '50%',
                  marginLeft: '-150px',
                  marginTop: '-150px',
                  translate: 'calc(var(--px, 0) * -22px) calc(var(--py, 0) * -16px)',
                  background: 'radial-gradient(circle, rgba(var(--accent-rgb),0.12) 0%, rgba(var(--accent-rgb),0.06) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Stats grid — counts up + spotlight */}
              <div
                className="relative grid grid-cols-2 gap-4"
                style={{
                  translate: 'calc(var(--px, 0) * 8px) calc(var(--py, 0) * 6px)',
                  transition: 'translate 0.25s ease-out',
                }}
              >
                {stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} started={countersOn} />
                ))}
              </div>

              {/* Tech stack pills */}
              <div
                className="glass-card rounded-2xl mt-4"
                style={{
                  padding: '1rem 1.25rem',
                  translate: 'calc(var(--px, 0) * 5px) calc(var(--py, 0) * 4px)',
                  transition: 'translate 0.3s ease-out',
                }}
              >
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Core Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Python', 'FastAPI', 'NestJS', 'AWS', 'LangChain', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech) => (
                    <span
                      key={tech}
                      className="font-medium rounded-lg"
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        background: 'rgba(var(--accent-rgb),0.1)',
                        border: '1px solid rgba(var(--accent-rgb),0.2)',
                        color: 'var(--link)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2"
          style={{ transform: 'translateX(-50%)', opacity: 0.4 }}
        >
          <div
            className="animate-float flex flex-col items-center gap-2"
            style={{ color: 'var(--text-muted)' }}
          >
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>scroll</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
