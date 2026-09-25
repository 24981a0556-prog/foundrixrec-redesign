import React, { useState, useEffect, useRef } from 'react';

/**
 * Single Countdown Unit
 */
const CountdownUnit = ({ value, label }) => {
  const [displayVal, setDisplayVal] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (value !== prevRef.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayVal(value);
        setIsAnimating(false);
        prevRef.current = value;
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: 'clamp(56px, 12vw, 80px)',
          height: 'clamp(56px, 12vw, 80px)',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'rgba(11, 18, 32, 0.9)',
          border: '1px solid rgba(22, 119, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: '700',
          color: '#ffffff',
          letterSpacing: '-0.02em',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Subtle top glow line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent)',
          }}
        />
        <span
          style={{
            transform: isAnimating ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
            opacity: isAnimating ? 0.6 : 1,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {displayVal}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          fontWeight: '600',
          letterSpacing: '0.15em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  );
};

/**
 * Separator between countdown units
 */
const Separator = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '24px',
    }}
  >
    <div
      style={{
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'rgba(22, 119, 255, 0.5)',
      }}
    />
    <div
      style={{
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'rgba(22, 119, 255, 0.5)',
      }}
    />
  </div>
);

/**
 * Premium Countdown Clock
 * Uses actual live countdown logic from targetDate prop
 */
export const FlipClock = ({ targetDate = '2026-10-09T09:00:00+05:30' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      {/* Live indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-cyan)',
            boxShadow: '0 0 6px rgba(0, 229, 255, 0.5)',
            animation: 'pulseGlow 2s ease-in-out infinite alternate',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            fontWeight: '600',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          EVENT COUNTDOWN
        </span>
      </div>

      {/* Countdown units */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 16px)',
        }}
      >
        <CountdownUnit value={timeLeft.days} label="Days" />
        <Separator />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <CountdownUnit value={timeLeft.minutes} label="Mins" />
        <Separator />
        <CountdownUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default FlipClock;
