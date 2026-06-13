import React, { useEffect, useRef, useState } from 'react';
import TypeWriter from './TypeWriter';

interface WelcomePageProps {
  onToggle: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onToggle }) => {
  const [mounted, setMounted] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  /* ── Canvas liquid animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', onResize);

    const blobs = [
      { x: w * 0.2, y: h * 0.3, r: 220, vx: 0.35, vy: 0.25, hue: 130 },  // pine
      { x: w * 0.7, y: h * 0.5, r: 280, vx: -0.3, vy: 0.4,  hue: 145 },  // forest
      { x: w * 0.5, y: h * 0.75, r: 200, vx: 0.4, vy: -0.3, hue: 110 },  // sage leaf
      { x: w * 0.85, y: h * 0.2, r: 180, vx: -0.45, vy: 0.2, hue: 80 },  // dry grass
      { x: w * 0.1, y: h * 0.8, r: 160, vx: 0.3, vy: -0.35, hue: 152 },  // moss
    ];

    let animId: number;
    let t = 0;

    const draw = () => {
      // Canvas can't parse CSS vars — resolve the theme background each frame
      const styles = getComputedStyle(document.documentElement);
      ctx.fillStyle = styles.getPropertyValue('--bg').trim() || '#2c3a30';
      ctx.fillRect(0, 0, w, h);
      const isDark = document.documentElement.classList.contains('dark');

      t += 0.004;
      blobs.forEach((b) => {
        b.x += b.vx + Math.sin(t + b.hue * 0.05) * 0.5;
        b.y += b.vy + Math.cos(t + b.hue * 0.03) * 0.4;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        // Muted botanical mist — lighter wisps at night, deeper sage by day
        const light = isDark ? 72 : 38;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `hsla(${b.hue},22%,${light}%,0.16)`);
        g.addColorStop(0.45, `hsla(${b.hue},20%,${light - 6}%,0.07)`);
        g.addColorStop(1, `hsla(${b.hue},18%,${light - 12}%,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(onToggle, 650);
  };

  // "Scroll to explore" must actually work: wheel, swipe, or key enters the portfolio
  useEffect(() => {
    let entered = false;
    const enter = () => {
      if (entered) return;
      entered = true;
      onToggle();
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 12) enter();
    };
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 36) enter();
    };
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) enter();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKey);
    };
  }, [onToggle]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.025, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* Status badge */}
        <div
          className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{
            background: 'rgba(var(--accent-rgb),0.12)',
            border: '1px solid rgba(var(--accent-rgb),0.3)',
            color: 'var(--link)',
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--accent)' }} />
          Open to new opportunities
        </div>

        {/* Name */}
        <h1
          className="font-black tracking-tight mb-3 leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          <span className="gradient-text block">Sashank</span>
          <span style={{ color: 'var(--text-primary)' }}>Punyamurthy</span>
        </h1>

        {/* Typewriter */}
        <div
          className="mb-5 font-medium"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-secondary)',
            minHeight: '2rem',
          }}
        >
          <TypeWriter
            texts={[
              'Full Stack Software Engineer',
              'React & TypeScript Specialist',
              'AI / LLM Integration Engineer',
              'AWS Cloud & DevOps Engineer',
              'Turning ideas into elegant code.',
            ]}
            typingSpeed={55}
            deletingSpeed={32}
            delayBetweenTexts={2200}
          />
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '0.95rem' }}>
          Software Engineer at{' '}
          <span style={{ color: 'var(--link)', fontWeight: 600 }}>Experian</span>{' '}
          &nbsp;·&nbsp; Houston, TX
        </p>

        {/* CTA */}
        <button
          onClick={handleEnter}
          className="relative overflow-hidden font-semibold rounded-full transition-all duration-300"
          style={{
            color: 'var(--btn-text)',
            padding: '1rem 2.5rem',
            fontSize: '1.05rem',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 50%, var(--accent-soft) 100%)',
            backgroundSize: '200% auto',
            boxShadow: '0 0 40px rgba(var(--accent-rgb),0.4), 0 8px 32px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundPosition = 'right center';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(var(--accent-rgb),0.6), 0 12px 40px rgba(0,0,0,0.4)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundPosition = 'left center';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(var(--accent-rgb),0.4), 0 8px 32px rgba(0,0,0,0.3)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          {ripple && (
            <span
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0,
                opacity: 0.25,
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.65s ease-out forwards',
              }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            Enter Portfolio
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Scroll hint */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{ opacity: 0.35 }}
        >
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
          <div
            className="animate-float"
            style={{
              width: '1px',
              height: '2.5rem',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          to { width: 500px; height: 500px; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;
