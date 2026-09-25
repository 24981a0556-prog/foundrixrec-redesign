import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Final registration CTA section before footer
 * Uses actual Foundrix event information only.
 */
export const FinalCTA = ({ onRegisterClick }) => {
  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(22, 119, 255, 0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container reveal-on-scroll"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: '800',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            maxWidth: '600px',
          }}
        >
          Ready to Build Something Real?
        </h2>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            maxWidth: '480px',
            lineHeight: '1.6',
          }}
        >
          Join students, innovators, and founders at Raghu Engineering College this October. ₹799 all-inclusive.
        </p>

        <button
          onClick={onRegisterClick}
          className="btn-border-beam"
          style={{
            padding: '16px 36px',
            fontSize: '0.92rem',
            marginTop: '8px',
          }}
        >
          <span>Register Now</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
