import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const FAQSection = () => {
  const { faqs } = EVENT_DATA;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-badge">
            <HelpCircle size={13} />
            <span>Clarity & Guidance</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about the ₹799 all-inclusive pass, hackathon team rules, campus venue, and event flow.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="stagger-container"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="reveal-on-scroll"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen
                    ? '1px solid rgba(22, 119, 255, 0.25)'
                    : '1px solid rgba(148, 163, 184, 0.06)',
                  backgroundColor: isOpen
                    ? 'rgba(11, 18, 32, 0.9)'
                    : 'rgba(11, 18, 32, 0.4)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                    lineHeight: '1.4',
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      color: isOpen ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 22px 20px 22px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(148, 163, 184, 0.06)',
                      paddingTop: '14px',
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
