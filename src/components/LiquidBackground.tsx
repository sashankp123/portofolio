import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Blob 1 — indigo, top-left */}
      <div
        className="absolute liquid-blob"
        style={{
          width: '700px',
          height: '700px',
          top: '-15%',
          left: '-10%',
          background:
            'radial-gradient(circle, rgba(var(--accent-rgb),0.14) 0%, rgba(var(--accent-rgb),0.06) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Blob 2 — violet, center-right */}
      <div
        className="absolute liquid-blob-alt"
        style={{
          width: '550px',
          height: '550px',
          top: '25%',
          right: '-8%',
          background:
            'radial-gradient(circle, rgba(var(--accent-rgb),0.12) 0%, rgba(var(--accent-rgb),0.05) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Blob 3 — cyan, bottom-left */}
      <div
        className="absolute liquid-blob"
        style={{
          width: '450px',
          height: '450px',
          bottom: '5%',
          left: '15%',
          background:
            'radial-gradient(circle, rgba(var(--accent-rgb),0.08) 0%, rgba(var(--accent-rgb),0.03) 45%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '4s',
        }}
      />

      {/* Blob 4 — rose accent, bottom-right */}
      <div
        className="absolute liquid-blob-alt"
        style={{
          width: '350px',
          height: '350px',
          bottom: '20%',
          right: '10%',
          background:
            'radial-gradient(circle, rgba(var(--accent-rgb),0.07) 0%, rgba(var(--accent-rgb),0.02) 45%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '7s',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--accent-rgb),0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--accent-rgb),0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default LiquidBackground;
