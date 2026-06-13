import React, { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Job {
  title: string;
  company: string;
  location: string;
  date: string;
  color: string;
  description: string[];
}

const jobs: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Experian',
    location: 'Remote, United States',
    date: 'Aug 2024 — Present',
    color: 'var(--accent)',
    description: [
      'Designed and developed customer-facing front-end webpages in React.js + TypeScript, tightly integrating with internal backend tools and improving interface responsiveness by 25%.',
      'Partnered cross-functionally with product, design, and backend teams to deliver seamless user experiences, shipping 15+ features on schedule and boosting user engagement metrics by 20%.',
      'Implemented responsive, accessibility-first design principles across the platform, optimizing experience across 5+ device form factors and lifting mobile usability scores by 30%.',
      'Optimized NestJS REST APIs and introduced multi-layer caching on AWS (ElastiCache + RDS), lowering average response time by 30% and increasing request throughput by ~45% under peak load.',
      'Streamlined CI/CD pipelines using Docker, GitHub Actions, and AWS ECS, reducing deployment cycles by 40% and standardizing build environments across 3+ distributed teams.',
      'Designed a Cypress + Vitest testing framework covering unit, integration, and E2E flows, sustaining 90%+ test coverage and cutting post-release defects by 50%.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Byts India',
    location: 'Remote, India',
    date: 'Jan 2023 — Jun 2023',
    color: 'var(--accent-strong)',
    description: [
      'Developed 15+ RESTful APIs and backend microservices in FastAPI and PostgreSQL for internal automation tools, improving task turnaround time by 20% and eliminating ~30% of manual steps.',
      'Built reusable React.js dashboard components that surfaced project analytics and performance metrics, boosting client-side visibility and reducing report-generation effort by 40%.',
      'Collaborated with QA and DevOps to debug CI/CD pipeline issues and optimize Docker build times by 35%, improving release reliability and developer productivity.',
      'Drove code reviews and modularization efforts that raised test coverage from 55% to 85%, improving long-term maintainability and reducing regression bugs by 25%.',
    ],
  },
];

function JobCard({ job, index }: { job: Job; index: number }) {
  const ref = useReveal(0.1);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} className={`reveal ${index === 1 ? 'delay-200' : ''}`} style={{ position: 'relative' }}>
      {/* Timeline dot */}
      <div
        className="timeline-dot"
        style={{
          position: 'absolute',
          left: '-2.45rem',
          top: '2rem',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: job.color,
          border: '3px solid var(--dot-border)',
          zIndex: 2,
        }}
      />

      <div
        className="glass-card spotlight-card rounded-2xl overflow-hidden"
        onMouseMove={handleMove}
        style={{ position: 'relative' }}
      >
        {/* Glow accent */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, color-mix(in srgb, ${job.color} 6%, transparent) 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        <div style={{ padding: '1.75rem 2rem' }}>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <h3 className="font-bold mb-1" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                {job.title}
              </h3>
              <div className="flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
                <span style={{ color: job.color, fontWeight: 600 }}>{job.company}</span>
                {job.location && (
                  <>
                    <span style={{ color: 'var(--text-faint)' }}>·</span>
                    <span style={{ color: 'var(--text-muted)' }}>{job.location}</span>
                  </>
                )}
              </div>
            </div>

            <span
              className="font-medium rounded-lg flex-shrink-0"
              style={{
                padding: '0.3rem 0.85rem',
                fontSize: '0.75rem',
                background: `color-mix(in srgb, ${job.color} 9%, transparent)`,
                border: `1px solid color-mix(in srgb, ${job.color} 20%, transparent)`,
                color: job.color,
              }}
            >
              {job.date}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2.5">
            {job.description.map((point, idx) => (
              <li key={idx} className="flex gap-3" style={{ fontSize: '0.875rem' }}>
                <div
                  className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: job.color, boxShadow: `0 0 6px ${job.color}` }}
                />
                <span style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Experience: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Scroll-linked: the gradient line "draws" itself as the section crosses the viewport
  useEffect(() => {
    const onScroll = () => {
      const rail = railRef.current;
      const fill = fillRef.current;
      if (!rail || !fill) return;
      const r = rail.getBoundingClientRect();
      const viewAnchor = window.innerHeight * 0.65;
      const progress = Math.min(Math.max((viewAnchor - r.top) / r.height, 0), 1);
      fill.style.height = `${(progress * 100).toFixed(1)}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
      {/* Rail */}
      <div
        ref={railRef}
        style={{
          position: 'absolute',
          left: '6px',
          top: '0.5rem',
          bottom: '0.5rem',
          width: '2px',
          background: 'var(--glass-mid)',
          borderRadius: '2px',
        }}
      >
        {/* Scroll-drawn fill */}
        <div
          ref={fillRef}
          style={{
            width: '100%',
            height: '0%',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-strong), var(--accent-soft))',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(var(--accent-rgb),0.5)',
            transition: 'height 0.15s ease-out',
          }}
        />
      </div>

      <div className="space-y-8">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
