import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import RaghuLogo from '../Common/RaghuLogo';
import { CONFIG } from '../../config/environment';

export const Footer = ({ onRegisterClick, onOpenHackathonHub }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#040608',
        borderTop: '1px solid rgba(148, 163, 184, 0.06)',
        padding: '60px 0 28px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20V8H8V11H18V15H8V20H4V4Z" fill="#ffffff" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}
              >
                FOUNDRIX 2026
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '14px' }}>
              Flagship Startup & Tech Ecosystem Event organized by the students of Raghu Engineering College.
            </p>

            <div style={{ marginBottom: '14px' }}>
              <RaghuLogo size="small" showWordmark={true} />
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                padding: '5px 10px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(148, 163, 184, 0.06)',
                letterSpacing: '0.04em',
              }}
            >
              <span>Dakamarri, Visakhapatnam, AP</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                marginBottom: '16px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Event Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li><a href="#events" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>The 2 Pillars</a></li>
              <li><a href="#venue" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Campus Venue</a></li>
              <li><a href="#passes" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>All-in-One Pass (₹799)</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>FAQs & Guidelines</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Coordinator Helplines</a></li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h5
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                marginBottom: '16px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Participant Hub
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={onRegisterClick}
                className="btn-border-beam"
                style={{ width: '100%', padding: '11px', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <span>GET PASS — ₹799</span>
              </button>

              <button
                onClick={onOpenHackathonHub}
                className="btn-ghost-cyan"
                style={{ width: '100%', padding: '11px', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <span>HACKATHON TEAM HUB</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(148, 163, 184, 0.06)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>© 2026 FOUNDRIX • Raghu Engineering College</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Visakhapatnam, AP</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                color: 'var(--accent-cyan)',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
              }}
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
