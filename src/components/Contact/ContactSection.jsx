import React from 'react';
import { Phone, MessageSquare, Headphones, ShieldCheck } from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const ContactSection = () => {
  const { coordinators } = EVENT_DATA;

  return (
    <section id="contact" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Headphones size={13} />
            <span>Organizer Desk</span>
          </div>
          <h2 className="section-title">Event Coordinators</h2>
          <p className="section-subtitle">
            Have questions regarding passes, UPI verification, campus venue, or hackathon team rules? Reach out directly!
          </p>
        </div>

        {/* Coordinators */}
        <div
          className="stagger-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          {coordinators.map((coordinator, idx) => (
            <div
              key={idx}
              className="reveal-scale"
              style={{
                padding: '28px',
                textAlign: 'center',
                border: '1px solid rgba(22, 119, 255, 0.15)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.15)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Avatar circle with initial */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(22, 119, 255, 0.2) 0%, rgba(0, 229, 255, 0.12) 100%)',
                  border: '1px solid rgba(22, 119, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'var(--accent-cyan)',
                }}
              >
                {coordinator.name.charAt(0).toUpperCase()}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em',
                }}
              >
                {coordinator.name}
              </h4>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-cyan)',
                  marginBottom: '12px',
                  letterSpacing: '0.06em',
                }}
              >
                {coordinator.role}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontWeight: '600',
                  marginBottom: '20px',
                }}
              >
                {coordinator.phone}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={`tel:${coordinator.phone}`}
                  className="btn-ghost-cyan"
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    fontSize: '0.8rem',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>

                <a
                  href={`https://wa.me/${coordinator.cleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border-beam"
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    fontSize: '0.8rem',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div
          className="reveal-on-scroll"
          style={{
            maxWidth: '640px',
            margin: '28px auto 0 auto',
            textAlign: 'center',
            padding: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(148, 163, 184, 0.06)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <ShieldCheck size={16} color="var(--accent-cyan)" />
          <span>
            Payment verifications are processed within 12 hours. If urgent, WhatsApp our coordinators with your UTR!
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
