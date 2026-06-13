import { useEffect, useRef, useState } from 'react';
import {
  NavbarComponent as Navbar,
  ExperienceComponent as Experience,
  ProjectsComponent as Projects,
  SkillsComponent as Skills,
  EducationComponent as Education,
  ContactComponent as Contact,
  WelcomePage,
  FooterComponent as Footer,
  HeroSectionComponent as HeroSection,
  LiquidBackground,
} from './components/components';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Marquee from './components/Marquee';
import './index.css';

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      style={{
        overflow: 'hidden',
        lineHeight: 0,
        transform: flip ? 'rotate(180deg)' : undefined,
        marginBottom: flip ? undefined : -1,
        marginTop: flip ? -1 : undefined,
        zIndex: 1,
        position: 'relative',
      }}
    >
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '55px' }}
      >
        {/* Fill must equal the section band color exactly or a seam shows */}
        <path
          d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
          fill="var(--bg-section)"
        />
      </svg>
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal mb-12">
      <div className="flex items-center gap-4">
        <span
          className="font-mono font-bold"
          style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}
        >
          {number}
        </span>
        <h2
          className="font-black"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--text-primary)' }}
        >
          {title}
        </h2>
        <div
          className="heading-line"
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(to right, rgba(var(--accent-rgb),0.4), transparent)',
          }}
        />
      </div>
    </div>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Theme: saved preference wins, otherwise follow the system.
  // (index.html applies this pre-paint; this re-sync covers HMR and private-mode storage errors.)
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      /* storage unavailable (private mode) — fall back to system */
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', saved ? saved === 'dark' : prefersDark);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <CursorGlow />
      {showWelcome ? (
        <WelcomePage onToggle={() => setShowWelcome(false)} />
      ) : (
        <>
          <ScrollProgress />
          <BackToTop />
          <LiquidBackground />
          <Navbar />

          <main style={{ position: 'relative', zIndex: 10, animation: 'fadeIn 0.7s ease-out both' }}>
            {/* ── Hero ── */}
            <HeroSection scrollToSection={scrollToSection} />

            {/* ── Flowing tech ticker ── */}
            <Marquee />

            {/* ── Wave ── */}
            <WaveDivider />

            {/* ── Experience ── */}
            <section
              id="experience"
              style={{
                background: 'var(--bg-section)',
                paddingTop: '5rem',
                paddingBottom: '5rem',
              }}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading number="01" title="Work Experience" />
                <Experience />
              </div>
            </section>

            <WaveDivider flip />

            {/* ── Projects ── */}
            <section
              id="projects"
              style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading number="02" title="Projects" />
                <Projects />
              </div>
            </section>

            <WaveDivider />

            {/* ── Skills ── */}
            <section
              id="skills"
              style={{
                background: 'var(--bg-section)',
                paddingTop: '5rem',
                paddingBottom: '5rem',
              }}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading number="03" title="Skills & Technologies" />
                <Skills />
              </div>
            </section>

            <WaveDivider flip />

            {/* ── Education ── */}
            <section
              id="education"
              style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading number="04" title="Education" />
                <Education />
              </div>
            </section>

            <WaveDivider />

            {/* ── Contact ── */}
            <section
              id="contact"
              style={{
                background: 'var(--bg-section)',
                paddingTop: '5rem',
                paddingBottom: '5rem',
              }}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading number="05" title="Get In Touch" />
                <Contact />
              </div>
            </section>
          </main>

          <Footer scrollToSection={scrollToSection} />
        </>
      )}
    </div>
  );
}

export default App;
