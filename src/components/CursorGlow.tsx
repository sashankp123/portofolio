import React, { useEffect, useRef } from 'react';

/**
 * Custom cursor: a bright dot at the pointer, a springy ring trailing it,
 * and a large ambient glow that lights the page under the mouse.
 * Activates only on fine pointers (desktop); body keeps native cursor on touch.
 */
const CursorGlow: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.body.classList.add('has-custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;   // ring (springy)
    let gx = x, gy = y;   // glow (slower)
    let raf = 0;

    // Park everything at center until the first real mousemove
    if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    if (ringRef.current) ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
    if (glowRef.current) glowRef.current.style.transform = `translate(${x}px, ${y}px)`;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      gx += (x - gx) * 0.07;
      gy += (y - gy) * 0.07;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx}px, ${gy}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest(
        'a, button, [role="button"], input, textarea, select, label'
      );
      ringRef.current?.classList.toggle('cursor-ring-active', !!interactive);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CursorGlow;
