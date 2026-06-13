import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';

const featured = {
  badge: 'Key Project · AI / LLM',
  title: 'AI-Powered Document Intelligence Assistant (RAG)',
  description:
    'An end-to-end Retrieval-Augmented Generation platform that ingests unstructured documents and answers natural-language queries with 92%+ contextual accuracy.',
  highlights: [
    'Embedding pipeline with OpenAI + Pinecone vector DB — answer retrieval latency under 1.2s, cutting manual document search time by 70%.',
    'FastAPI micro-backend with JWT auth, role-based access, and streaming responses, scaling to 500+ concurrent users on AWS (Lambda + S3 + CloudFront).',
    'React.js chat UI with real-time streaming responses for a fluid conversational experience.',
    'LangChain-powered evaluation, prompt versioning, and guardrails — improving response quality by 35% and reducing hallucinations by 45%.',
  ],
  technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI GPT-4', 'Pinecone', 'React.js', 'AWS Lambda', 'S3', 'CloudFront'],
  metrics: [
    { value: '92%+', label: 'Contextual Accuracy' },
    { value: '<1.2s', label: 'Retrieval Latency' },
    { value: '500+', label: 'Concurrent Users' },
    { value: '-45%', label: 'Hallucinations' },
  ],
};

const Projects: React.FC = () => {
  const ref = useReveal(0.08);
  const tiltRef = useTilt(3.5);

  return (
    <div ref={ref} className="reveal">
      <div
        ref={tiltRef}
        className="gradient-border-card spotlight-card rounded-3xl overflow-hidden"
        style={{ position: 'relative', willChange: 'transform' }}
      >

        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none liquid-blob"
          style={{
            width: '400px',
            height: '400px',
            top: '-100px',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(var(--accent-rgb),0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full mb-5"
            style={{
              padding: '0.35rem 1rem',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'rgba(var(--accent-rgb),0.15)',
              border: '1px solid rgba(var(--accent-rgb),0.35)',
              color: 'var(--link)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: 'var(--accent)' }} />
            {featured.badge}
          </div>

          {/* Title */}
          <h3
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: 'var(--text-primary)',
              lineHeight: '1.25',
            }}
          >
            {featured.title}
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.75',
              maxWidth: '46rem',
              marginBottom: '2rem',
            }}
          >
            {featured.description}
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {featured.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl text-center"
                style={{
                  padding: '1.1rem 0.75rem',
                  background: 'rgba(var(--accent-rgb),0.07)',
                  border: '1px solid rgba(var(--accent-rgb),0.18)',
                }}
              >
                <div className="gradient-text font-black" style={{ fontSize: '1.5rem' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.2rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-8">
            {featured.highlights.map((point, idx) => (
              <li key={idx} className="flex gap-3" style={{ fontSize: '0.875rem' }}>
                <div
                  className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent-strong)', boxShadow: '0 0 6px var(--accent-strong)' }}
                />
                <span style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {featured.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg font-medium"
                style={{
                  padding: '0.25rem 0.7rem',
                  fontSize: '0.75rem',
                  background: 'rgba(var(--accent-rgb),0.12)',
                  border: '1px solid rgba(var(--accent-rgb),0.28)',
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
  );
};

export default Projects;
