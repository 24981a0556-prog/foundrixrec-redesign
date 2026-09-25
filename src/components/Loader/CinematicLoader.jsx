import React, { useState, useEffect } from 'react';

/**
 * Premium Cinematic Preloader for FOUNDRIX 2026
 * Phases: Fast word cycling → Lock on FOUNDRIX → Slide-up reveal
 * All event content from actual data, no invented info.
 */
export const CinematicLoader = ({ onComplete }) => {
  const cyclingWords = [
    'INNOVATE',
    'BUILD SPRINT',
    'REC CAMPUS',
    'LIVE PITCH',
    'FOUNDRIX',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let intervalId;
    let wordIndex = 0;

    intervalId = setInterval(() => {
      wordIndex += 1;
      if (wordIndex < cyclingWords.length) {
        setCurrentIndex(wordIndex);
      } else {
        clearInterval(intervalId);
        setIsLocked(true);

        const exitTimer = setTimeout(() => {
          setIsExiting(true);
          const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
          }, 700);
          return () => clearTimeout(completeTimer);
        }, 800);

        return () => clearTimeout(exitTimer);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  const currentDisplayWord = cyclingWords[currentIndex];

  return (
    <div
      onClick={handleSkip}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#05070A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(20px, 4vw, 48px)',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)',
        willChange: 'transform',
      }}
    >
      {/* Atmospheric glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(22, 119, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          opacity: isLocked ? 1 : 0.4,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Top header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          opacity: isExiting ? 0 : 1,
          transition: 'opacity 0.2s ease',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-cyan)',
              boxShadow: '0 0 8px rgba(0, 229, 255, 0.6)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
            }}
          >
            RAGHU ENGINEERING COLLEGE
          </span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            color: 'var(--text-secondary)',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}
        >
          2026
        </div>
      </div>

      {/* Center: Wordmark */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          margin: 'auto',
          zIndex: 2,
          transform: isExiting ? 'translateY(-20px) scale(0.97)' : 'translateY(0) scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.35s ease',
          opacity: isExiting ? 0 : 1,
        }}
      >
        <h1
          key={currentDisplayWord}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: currentDisplayWord === 'FOUNDRIX'
              ? 'clamp(3.5rem, 14vw, 10rem)'
              : 'clamp(2.8rem, 10vw, 7rem)',
            fontWeight: '800',
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            textTransform: 'uppercase',
            margin: 0,
            textAlign: 'center',
            userSelect: 'none',
            animation: 'loaderWordReveal 0.2s ease-out forwards',
          }}
        >
          {currentDisplayWord}
        </h1>

        {/* Subtitle - visible when locked */}
        <div
          style={{
            marginTop: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.65rem, 1.4vw, 0.9rem)',
            fontWeight: '500',
            letterSpacing: '0.18em',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            opacity: isLocked ? 1 : 0,
            transform: isLocked ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease 0.1s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          }}
        >
          <span>ENTREPRENEURSHIP & TECH SUMMIT</span>
        </div>
      </div>

      {/* Bottom footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          opacity: isExiting ? 0 : 1,
          transition: 'opacity 0.2s ease',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          9–10 OCTOBER • VISAKHAPATNAM
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            transition: 'all 0.2s ease',
          }}
        >
          CLICK TO ENTER →
        </div>
      </div>

      <style>{`
        @keyframes loaderWordReveal {
          0% { opacity: 0.2; transform: scale(0.98); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
      `}</style>
    </div>
  );
};

export default CinematicLoader;
