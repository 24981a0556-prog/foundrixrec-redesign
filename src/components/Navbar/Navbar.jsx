import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Users } from 'lucide-react';
import RaghuLogo from '../Common/RaghuLogo';

export const Navbar = ({ onRegisterClick, onOpenHackathonHub }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Passes', href: '#passes' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '8px 16px' : '12px 16px',
          transition: 'padding 0.3s ease',
        }}
      >
        <nav
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            background: scrolled
              ? 'rgba(5, 7, 10, 0.85)'
              : 'rgba(5, 7, 10, 0.4)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            border: `1px solid ${scrolled ? 'rgba(22, 119, 255, 0.12)' : 'rgba(148, 163, 184, 0.08)'}`,
            borderRadius: '12px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 1px rgba(22, 119, 255, 0.1)'
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.35s ease',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(22, 119, 255, 0.4)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20V8H8V11H18V15H8V20H4V4Z" fill="#ffffff" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                  color: '#ffffff',
                }}
              >
                FOUNDRIX
              </span>
            </a>

            {/* Divider + REC Logo (desktop only) */}
            <div
              style={{
                width: '1px',
                height: '20px',
                backgroundColor: 'rgba(148, 163, 184, 0.15)',
              }}
              className="nav-desktop-only"
            />
            <div className="nav-desktop-only">
              <RaghuLogo size="small" showWordmark={true} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: '500',
                  letterSpacing: '0.02em',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-xs)',
                  transition: 'color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Desktop Login */}
            <button
              onClick={onOpenHackathonHub}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                color: 'var(--text-primary)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.02em',
                marginLeft: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.4)';
                e.currentTarget.style.backgroundColor = 'rgba(22, 119, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              Login
            </button>

            {/* Desktop Register CTA */}
            <button
              onClick={onRegisterClick}
              style={{
                backgroundColor: 'var(--accent-blue)',
                border: 'none',
                borderRadius: 'var(--radius-xs)',
                padding: '8px 18px',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: '700',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.02em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 2px 12px rgba(22, 119, 255, 0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-blue-bright)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(22, 119, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(22, 119, 255, 0.35)';
              }}
            >
              <span>Register</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile: Hamburger only */}
          <div className="nav-mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setMobileMenuOpen(true)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                color: '#ffffff',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Open navigation menu"
            >
              <Menu size={18} strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(5, 7, 10, 0.6)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn 0.2s ease-out forwards',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ── Mobile Drawer Panel ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 101,
          backgroundColor: '#07111F',
          borderLeft: '1px solid rgba(22, 119, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: mobileMenuOpen ? '-8px 0 40px rgba(0, 0, 0, 0.5)' : 'none',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffffff',
            }}
          >
            FOUNDRIX
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              color: '#ffffff',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* REC Logo */}
        <div style={{ padding: '12px 20px' }}>
          <RaghuLogo size="small" showWordmark={true} />
        </div>

        {/* Navigation links */}
        <div style={{ padding: '8px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: '600',
                letterSpacing: '0.01em',
                padding: '14px 0',
                borderBottom: '1px solid rgba(148, 163, 184, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'color 0.2s ease',
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} color="var(--text-muted)" />
            </a>
          ))}
        </div>

        {/* Bottom actions */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(148, 163, 184, 0.06)' }}>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenHackathonHub(); }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              color: 'var(--text-primary)',
              padding: '13px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: '600',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Users size={16} />
            <span>Login / Dashboard</span>
          </button>

          <button
            onClick={() => { setMobileMenuOpen(false); onRegisterClick(); }}
            style={{
              backgroundColor: 'var(--accent-blue)',
              border: 'none',
              boxShadow: '0 4px 16px rgba(22, 119, 255, 0.4)',
              color: '#ffffff',
              borderRadius: 'var(--radius-sm)',
              padding: '14px',
              fontSize: '0.88rem',
              fontWeight: '700',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>Register for Summit</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .nav-desktop-only { display: none !important; }
        .nav-mobile-only { display: flex !important; }

        @media (min-width: 960px) {
          .nav-desktop-only { display: flex !important; }
          .nav-mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
