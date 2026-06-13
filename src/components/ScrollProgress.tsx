import React, { useEffect, useRef } from 'react';

/** Thin gradient bar at the very top showing reading progress. */
const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`;
      }
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
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 60,
        background: 'var(--glass-bg)',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '100%',
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, var(--accent), var(--accent-strong), var(--accent-soft))',
          boxShadow: '0 0 12px rgba(var(--accent-rgb),0.6)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
