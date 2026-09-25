import React from 'react';
import { ArrowUpRight, Users, Calendar, MapPin } from 'lucide-react';
import { EVENT_DATA } from '../../data/event';
import FlipClock from '../Common/FlipClock';

export const Hero = ({ onRegisterClick, onOpenHackathonHub }) => {
  const { hero } = EVENT_DATA;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '40px',
        overflow: 'hidden',
        background: '#05070A',
      }}
    >
      {/* Background image with cinematic overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg,
              rgba(5, 7, 10, 0.6) 0%,
              rgba(5, 7, 10, 0.3) 30%,
              rgba(5, 7, 10, 0.5) 65%,
              #05070A 100%
            ),
            url('/assets/hero-bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* Atmospheric blue glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          maxWidth: '100%',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(22, 119, 255, 0.2) 0%, rgba(0, 229, 255, 0.08) 40%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '28px',
        }}
      >
        {/* Association badge */}
        <div
          className="pill-badge"
          style={{
            borderColor: 'rgba(22, 119, 255, 0.3)',
            boxShadow: '0 0 16px rgba(22, 119, 255, 0.15)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <span
            style={{
              color: 'var(--accent-cyan)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              fontWeight: '600',
            }}
          >
            Presented by Students of Raghu Engineering College
          </span>
        </div>

        {/* Main headline */}
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              fontWeight: '800',
              lineHeight: '0.95',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
              textShadow: '0 4px 40px rgba(0, 0, 0, 0.8)',
            }}
          >
            FOUNDRIX 2026
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 3vw, 2rem)',
              fontWeight: '600',
              lineHeight: '1.2',
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              marginTop: '12px',
              textTransform: 'uppercase',
            }}
          >
            Entrepreneurship & Tech Summit
          </div>
        </div>

        {/* Date & Location pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
            }}
          >
            <Calendar size={13} color="var(--accent-cyan)" />
            <span>{hero.dates}</span>
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
            }}
          >
            <MapPin size={13} color="var(--accent-cyan)" />
            <span>Raghu Engineering College, Visakhapatnam</span>
          </div>
        </div>

        {/* Countdown */}
        <FlipClock targetDate={hero.targetDate} />

        {/* CTA Buttons */}
        <div
          className="hero-cta-group"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            width: '100%',
          }}
        >
          <button
            onClick={onRegisterClick}
            className="btn-border-beam"
            style={{
              padding: '14px 32px',
              fontSize: '0.9rem',
            }}
          >
            <span>Register Now</span>
            <ArrowUpRight size={18} />
          </button>

          <button
            onClick={onOpenHackathonHub}
            className="btn-ghost-cyan"
            style={{
              padding: '14px 28px',
              fontSize: '0.88rem',
            }}
          >
            <Users size={17} color="var(--accent-cyan)" />
            <span>Login</span>
          </button>
        </div>

        {/* Micro info */}
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
          }}
        >
          ₹799 ALL-INCLUSIVE PASS • WORKSHOP + HACKATHON + SWAGS + CERTIFICATES
        </p>
      </div>

      {/* Bottom preview cards */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 'auto',
          paddingTop: '32px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '12px',
          }}
        >
          {/* Hackathon card */}
          <div
            onClick={onOpenHackathonHub}
            className="glass-card"
            style={{
              padding: '18px 20px',
              cursor: 'pointer',
              borderColor: 'rgba(22, 119, 255, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.4)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.2)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>
                Online Hackathon
              </span>
              <ArrowUpRight size={14} color="var(--accent-cyan)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: '1.4', margin: 0 }}>
              Build sprint • 3–4 members • Pitch live on Day 1
            </p>
          </div>

          {/* Workshop card */}
          <div
            onClick={onRegisterClick}
            className="glass-card"
            style={{
              padding: '18px 20px',
              cursor: 'pointer',
              borderColor: 'rgba(0, 229, 255, 0.15)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.15)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>
                2-Day Workshop
              </span>
              <ArrowUpRight size={14} color="var(--accent-blue)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: '1.4', margin: 0 }}>
              Hands-on startup & tech masterclasses at REC campus
            </p>
          </div>

          {/* Pass card */}
          <div
            onClick={onRegisterClick}
            className="glass-card"
            style={{
              padding: '18px 20px',
              cursor: 'pointer',
              borderColor: 'rgba(22, 119, 255, 0.15)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 119, 255, 0.15)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>
                All-In-One Pass — ₹799
              </span>
              <ArrowUpRight size={14} color="var(--accent-blue)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: '1.4', margin: 0 }}>
              Workshop + Hackathon + Swags + Certificates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
