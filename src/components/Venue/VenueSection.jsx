import React from 'react';
import { MapPin, CheckCircle2, ExternalLink, Building2 } from 'lucide-react';
import RaghuLogo from '../Common/RaghuLogo';
import { EVENT_DATA } from '../../data/event';

export const VenueSection = () => {
  const { venueInfo } = EVENT_DATA;

  return (
    <section id="venue" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <Building2 size={13} />
            <span>Campus Venue</span>
          </div>
          <h2 className="section-title">Summit Venue & Campus</h2>
          <p className="section-subtitle">
            {venueInfo.subtitle}
          </p>
        </div>

        {/* Venue Card */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="glass-card reveal-on-scroll"
            style={{
              padding: 'clamp(24px, 4vw, 40px)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(22, 119, 255, 0.15)',
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent)',
              }}
            />

            <div>
              {/* Official venue label */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                <MapPin size={14} />
                <span>OFFICIAL VENUE</span>
              </div>

              {/* REC Logo */}
              <div style={{ marginBottom: '16px' }}>
                <RaghuLogo size="large" />
              </div>

              {/* College Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {venueInfo.collegeName}
              </h3>

              {/* Accreditation badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(22, 119, 255, 0.08)',
                  border: '1px solid rgba(22, 119, 255, 0.15)',
                  borderRadius: 'var(--radius-full)',
                  padding: '5px 12px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  marginBottom: '16px',
                  letterSpacing: '0.04em',
                }}
              >
                <span>AUTONOMOUS</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>NBA RE-ACCREDITED</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>NAAC A+ GRADE</span>
              </div>

              {/* Address */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                {venueInfo.address}
              </p>

              {/* Facilities */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                {venueInfo.facilities.map((fac, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-highlight)', fontSize: '0.88rem' }}>
                    <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              {venueInfo.note && (
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                    lineHeight: '1.5',
                    marginBottom: '24px',
                    fontStyle: 'italic',
                  }}
                >
                  {venueInfo.note}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <a
                href="https://raghuenggcollege.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-border-beam"
                style={{
                  padding: '12px 18px',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <span>Visit REC Website</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://maps.google.com/?q=Raghu+Engineering+College+Visakhapatnam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-cyan"
                style={{
                  padding: '12px 18px',
                  fontSize: '0.82rem',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <MapPin size={14} />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
