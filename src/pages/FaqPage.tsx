import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Phone,
  Calendar,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { FAQS, HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'appointments' | 'surgeries' | 'hearing' | 'vertigo' | 'insurance'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const triggerAura = () => {
    const btn = document.getElementById('aura-assistant-btn');
    if (btn) btn.click();
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'appointments', label: 'Appointments & OPD' },
    { id: 'surgeries', label: 'Daycare Surgeries' },
    { id: 'hearing', label: 'Hearing & Audiology' },
    { id: 'vertigo', label: 'Vertigo & Balance' },
    { id: 'insurance', label: 'Cashless Insurance' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch = faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#F8FAFC', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: '#0A192F',
        backgroundImage: 'linear-gradient(135deg, #0A192F 0%, #16365C 100%)',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38BDF8',
            fontSize: '0.8125rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <HelpCircle size={15} />
            <span>Patient Knowledge Hub</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)'
          }}>
            Frequently Asked Questions
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#CBD5E1',
            maxWidth: '740px',
            lineHeight: 1.65,
            marginBottom: '2rem'
          }}>
            Find immediate answers on doctor appointments, daycare tympanoplasty, vertigo rehabilitation, cold coblation tonsil surgery, and cashless mediclaim approvals.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '520px', position: 'relative', marginBottom: '1.75rem' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by topic (e.g., Tympanoplasty, Vertigo, Insurance, OPD slots)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 3rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                outline: 'none',
                backdropFilter: 'blur(8px)'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: selectedCategory === cat.id ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: selectedCategory === cat.id ? '#38BDF8' : 'rgba(255, 255, 255, 0.08)',
                  color: selectedCategory === cat.id ? '#0A192F' : '#E2E8F0'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Picture Card & Direct Inquiry */}
          <div>
            <div style={{
              borderRadius: '22px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 16px 36px -8px rgba(10, 25, 47, 0.08)',
              position: 'sticky',
              top: '90px'
            }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/images/audiology-lab.jpg"
                  alt="ENT Clinical Diagnostics and Patient Care Desk"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(10, 25, 47, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#38BDF8',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  Patient Care &amp; Consultation Desk
                </div>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0A192F',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Have a specific question not covered here?
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Our patient care coordinators are on-site in Seethammapeta to assist with OPD slots, surgical estimates, and TPA pre-authorizations.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href="https://wa.me/919705033133?text=Hello%20Asian%20ENT%20Hospital,%20I%20have%20a%20question%20regarding%20treatment"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                    }}
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Clinical Coordinator</span>
                  </a>

                  <button
                    type="button"
                    onClick={triggerAura}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      backgroundColor: '#F0F9FF',
                      color: '#0284C7',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      border: '1px solid #BAE6FD',
                      cursor: 'pointer'
                    }}
                  >
                    <Sparkles size={16} />
                    <span>Ask Aura Assistant</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Rows */}
          <div>
            {filteredFaqs.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0'
              }}>
                <HelpCircle size={40} color="#94A3B8" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.15rem', color: '#0A192F', marginBottom: '0.5rem' }}>
                  No matching questions found
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.25rem' }}>
                  Try another keyword or chat with our desk directly on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: '9999px',
                    backgroundColor: '#0A192F',
                    color: '#FFFFFF',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '1.5rem',
                boxShadow: '0 8px 24px -4px rgba(10, 25, 47, 0.05)'
              }}>
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      style={{
                        borderBottom: idx === filteredFaqs.length - 1 ? 'none' : '1px solid #F1F5F9',
                        padding: '1.25rem 0'
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0
                        }}
                      >
                        <span style={{
                          fontSize: '1.0625rem',
                          fontWeight: 700,
                          color: isOpen ? '#0284C7' : '#0A192F',
                          fontFamily: 'var(--font-heading)',
                          transition: 'color 0.2s ease'
                        }}>
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={18}
                          color={isOpen ? '#0284C7' : '#64748B'}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0
                          }}
                        />
                      </button>

                      {isOpen && (
                        <div style={{
                          marginTop: '0.85rem',
                          fontSize: '0.9375rem',
                          color: '#475569',
                          lineHeight: 1.65
                        }}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
