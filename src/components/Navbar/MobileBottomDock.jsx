import React, { useState, useEffect } from 'react';
import { Users, ArrowUpRight } from 'lucide-react';

export const MobileBottomDock = ({ onRegisterClick, onOpenHackathonHub }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="mobile-bottom-dock"
      style={{
        position: 'fixed',
        bottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
        left: '12px',
        right: '12px',
        maxWidth: '420px',
        margin: '0 auto',
        zIndex: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 14px',
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(7, 17, 31, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(22, 119, 255, 0.15)',
        boxShadow: '0 8px 28px rgba(0, 0, 0, 0.6)',
        animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flexShrink: 1, paddingRight: '8px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', lineHeight: '1' }}>
          ₹799 <small style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/ HEAD</small>
        </div>
        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '0.04em' }}>
          WORKSHOP + HACKATHON
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        <button
          onClick={onOpenHackathonHub}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            color: '#ffffff',
            padding: '8px 11px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.7rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <Users size={12} />
          <span>LOGIN</span>
        </button>

        <button
          onClick={onRegisterClick}
          className="btn-border-beam"
          style={{
            padding: '8px 14px',
            fontSize: '0.72rem',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <span>REGISTER</span>
          <ArrowUpRight size={13} />
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-dock {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileBottomDock;
