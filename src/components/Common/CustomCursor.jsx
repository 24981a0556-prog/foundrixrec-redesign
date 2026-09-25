import React, { useState, useEffect, useRef } from 'react';

/**
 * Subtle cursor-reactive background glow for desktop.
 * Not a custom cursor replacement — just a subtle radial glow that follows the mouse.
 * Disabled on touch devices and when prefers-reduced-motion is enabled.
 */
export const CustomCursor = () => {
  const glowRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) return;

    setIsActive(true);

    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isActive) return null;

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(22, 119, 255, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',
        transition: 'opacity 0.3s ease',
      }}
    />
  );
};

export default CustomCursor;
