import React, { useState, useEffect } from 'react';
import { Check, ArrowUpRight, Sparkles, Award } from 'lucide-react';
import { EVENT_DATA } from '../../data/event';
import { fetchEarlyBirdStats } from '../../services/registrationService';

export const PassesSection = ({ onRegisterClick }) => {
  const { pass } = EVENT_DATA;
  const [stats, setStats] = useState({
    verifiedCount: 6,
    spotsRemaining: 194,
    offerActive: true,
  });

  useEffect(() => {
    fetchEarlyBirdStats().then((data) => {
      if (data) setStats(data);
    });
  }, []);

  const isEarlyBirdActive = stats.offerActive && stats.spotsRemaining > 0;

  return (
    <section id="passes" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-badge" style={{ marginBottom: '20px' }}>
            <Award size={13} />
            <span>All-Inclusive Pass</span>
          </div>
          <h2
            className="section-title"
            style={{ marginBottom: '14px' }}
          >
            {isEarlyBirdActive ? 'Select Your Experience' : 'Foundrix 2026 Pass'}
          </h2>
          <p className="section-subtitle">
            {isEarlyBirdActive
              ? 'Flat ₹799 per head all-inclusive pass. First 200 receive an E-Cell IIT Mumbai certificate.'
              : 'Flat ₹799 per head all-inclusive pass for the 2-day flagship summit.'}
          </p>
        </div>

        {/* Sold out notice */}
        {!isEarlyBirdActive && (
          <div
            className="reveal-on-scroll"
            style={{
              maxWidth: '520px',
              margin: '0 auto 28px auto',
              padding: '12px 16px',
              backgroundColor: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 'var(--radius-sm)',
              color: '#f87171',
              fontSize: '0.85rem',
              fontWeight: '600',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Sparkles size={15} />
            <span>First 200 Early Bird Passes (IIT Mumbai Perk) are fully claimed.</span>
          </div>
        )}

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isEarlyBirdActive ? 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' : '1fr',
            gap: '20px',
            maxWidth: isEarlyBirdActive ? '880px' : '480px',
            margin: '0 auto',
            alignItems: 'stretch',
          }}
        >
          {/* Standard Pass Card */}
          <div
            className="reveal-from-left"
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 4vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                ALL-INCLUSIVE PASS
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '28px', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                    fontWeight: '800',
                    color: '#ffffff',
                    lineHeight: '0.9',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ₹799
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    marginLeft: '6px',
                  }}
                >
                  / per head
                </span>
              </div>

              {/* Features list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {[
                  'Full Entry to 2-Day In-Person Workshop at Raghu Engg College',
                  'Entry to Online Hackathon (Form 3–4 Member Team)',
                  'Live Pitch & Demo on Day 1 (9 Oct) Before Startup Jury',
                  'Official Foundrix Swags & Merch Kit',
                  'Campus Delegate Networking & Startup Lounge Access',
                  'Official Certificate of Participation',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--accent-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} color="#ffffff" strokeWidth={3} />
                    </div>
                    <span style={{ color: 'var(--text-highlight)', fontSize: '0.88rem', lineHeight: '1.45' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onRegisterClick}
              className="btn-border-beam"
              style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
            >
              <span>RESERVE PASS — ₹799</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Early Bird Card */}
          {isEarlyBirdActive && (
            <div
              className="reveal-from-right"
              style={{
                background: 'linear-gradient(180deg, var(--accent-blue) 0%, #0d57c9 100%)',
                border: '1px solid rgba(0, 229, 255, 0.4)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 48px rgba(22, 119, 255, 0.3), 0 0 24px rgba(0, 229, 255, 0.15)',
                position: 'relative',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  backgroundColor: '#ffffff',
                  color: 'var(--accent-blue)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.68rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
              >
                FIRST 200 • {stats.spotsRemaining} LEFT
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 0.9)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={14} />
                  <span>EARLY BIRD EXPERIENCE</span>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '28px', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                      fontWeight: '800',
                      color: '#ffffff',
                      lineHeight: '0.9',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    ₹799
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginLeft: '6px',
                      fontWeight: '600',
                    }}
                  >
                    + IIT Mumbai Certificate
                  </span>
                </div>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {[
                    'Official Certificate from E-Cell, IIT Mumbai (First 200 Only)',
                    'Full Entry to 2-Day In-Person Workshop at Raghu Engg College',
                    'Entry to Online Hackathon (Form 3–4 Member Team)',
                    'Priority Pitch Slot on Day 1 (9 Oct) Before Startup Jury',
                    'Official Foundrix Swags & Merch Kit',
                    'Campus Delegate Networking & Verified Certificates',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={12} color="var(--accent-blue)" strokeWidth={3} />
                      </div>
                      <span style={{ color: '#ffffff', fontSize: '0.88rem', lineHeight: '1.45', fontWeight: i === 0 ? '700' : '400' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onRegisterClick}
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px',
                  color: 'var(--accent-blue)',
                  fontSize: '0.88rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span>CLAIM EARLY BIRD PASS</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PassesSection;
