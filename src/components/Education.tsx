import React from 'react';
import { useReveal } from '../hooks/useReveal';

const schools = [
  {
    school: 'University of Cincinnati',
    degree: 'Master of Science — Information Technology',
    location: 'Cincinnati, OH',
    date: 'Expected 2026',
    gpa: null,
    color: 'var(--accent)',
    icon: '🎓',
  },
  {
    school: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology — Information Technology',
    location: 'Vellore, India',
    date: '2023',
    gpa: null,
    color: 'var(--accent-strong)',
    icon: '🏛️',
  },
];

const Education: React.FC = () => {
  const ref = useReveal(0.1);

  return (
    <div ref={ref} className="reveal space-y-4">
      {schools.map((s, i) => (
        <div
          key={i}
          className="glass-card rounded-2xl overflow-hidden"
          style={{ position: 'relative' }}
        >
          {/* Gradient left border */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: `linear-gradient(to bottom, ${s.color}, color-mix(in srgb, ${s.color} 27%, transparent))`,
              borderRadius: '4px 0 0 4px',
            }}
          />

          <div style={{ padding: '1.25rem 1.5rem 1.25rem 2rem' }}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                  <h3
                    className="font-bold"
                    style={{ fontSize: '1rem', color: s.color }}
                  >
                    {s.school}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {s.degree}
                </p>
                {s.gpa && (
                  <p
                    className="mt-1 inline-flex items-center gap-1.5 rounded-lg"
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.65rem',
                      background: `color-mix(in srgb, ${s.color} 8%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${s.color} 19%, transparent)`,
                      color: s.color,
                      fontWeight: 600,
                    }}
                  >
                    GPA: {s.gpa}
                  </p>
                )}
              </div>

              <div className="text-right flex-shrink-0">
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  {s.location}
                </p>
                <p
                  className="font-semibold"
                  style={{ fontSize: '0.8rem', color: s.color }}
                >
                  {s.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* IEEE Membership */}
      <div
        className="glass-card rounded-2xl overflow-hidden"
        style={{ position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(to bottom, var(--accent-soft), transparent)',
            borderRadius: '4px 0 0 4px',
          }}
        />
        <div style={{ padding: '1.25rem 1.5rem 1.25rem 2rem' }}>
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '1.2rem' }}>🏅</span>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                Professional Membership
              </p>
              <h3 className="font-semibold" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Active Member, IEEE Technology and Engineering Management Society (IEEE TEMS)
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Contributed to technical events &amp; workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
