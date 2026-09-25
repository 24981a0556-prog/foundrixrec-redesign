import React from 'react';
import { Terminal, Lightbulb, CheckCircle2, ArrowRight, Users, Trophy } from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const EventsSection = ({ onRegisterClick, onOpenHackathonHub }) => {
  const { events } = EVENT_DATA;

  return (
    <section id="events" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Trophy size={13} />
            <span>2 Flagship Experiences • 1 Pass</span>
          </div>
          <h2 className="section-title">The 2 Core Pillars</h2>
          <p className="section-subtitle">
            Your single ₹799 registration unlocks complete access to both the Online Hackathon and the 2-Day In-Person Workshop.
          </p>
        </div>

        {/* Cards */}
        <div className="horizontal-snap-container stagger-container">
          {events.map((item) => {
            const isHackathon = item.id === 'hackathon';
            const accentColor = isHackathon ? 'var(--accent-blue)' : 'var(--accent-cyan)';

            return (
              <div
                key={item.id}
                className="horizontal-snap-item reveal-scale"
                style={{
                  padding: 'clamp(24px, 4vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: `1px solid ${isHackathon ? 'rgba(22, 119, 255, 0.2)' : 'rgba(0, 229, 255, 0.15)'}`,
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = isHackathon
                    ? 'rgba(22, 119, 255, 0.5)'
                    : 'rgba(0, 229, 255, 0.4)';
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0, 0, 0, 0.4), 0 0 24px ${isHackathon ? 'rgba(22, 119, 255, 0.15)' : 'rgba(0, 229, 255, 0.1)'}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = isHackathon
                    ? 'rgba(22, 119, 255, 0.2)'
                    : 'rgba(0, 229, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '10%',
                    right: '10%',
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                <div>
                  {/* Badge + Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: '600',
                        color: accentColor,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isHackathon ? 'rgba(22, 119, 255, 0.15)' : 'rgba(0, 229, 255, 0.12)'}`,
                      }}
                    >
                      {item.badge}
                    </span>

                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: accentColor,
                        border: '1px solid rgba(148, 163, 184, 0.06)',
                      }}
                    >
                      {isHackathon ? <Terminal size={22} /> : <Lightbulb size={22} />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '12px',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.1',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    {item.summary}
                  </p>

                  {/* Perks */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {item.perks.map((perk, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.88rem',
                          color: 'var(--text-highlight)',
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color={accentColor}
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(148, 163, 184, 0.06)' }}>
                  {isHackathon ? (
                    <button
                      onClick={onOpenHackathonHub}
                      className="btn-ghost-cyan"
                      style={{ width: '100%', padding: '13px 20px', justifyContent: 'center', fontWeight: '600' }}
                    >
                      <Users size={16} />
                      <span>{item.ctaText}</span>
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={onRegisterClick}
                      className="btn-border-beam"
                      style={{ width: '100%', padding: '13px 20px', justifyContent: 'center' }}
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile swipe hint */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '16px',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
          }}
          className="mobile-swipe-hint"
        >
          <span>← SWIPE TO EXPLORE →</span>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .mobile-swipe-hint { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default EventsSection;
