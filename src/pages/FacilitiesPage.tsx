import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Building2, Calendar, Activity } from 'lucide-react';
import { FACILITIES } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const FacilitiesPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-page)', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem'
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Hospital Facilities & Labs' }]} />
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(13, 148, 136, 0.2)',
            color: '#2DD4BF',
            fontSize: '0.8125rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            <Building2 size={15} />
            <span>Advanced Clinical Infrastructure</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Diagnostic Facilities &amp; Surgical Theatres
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Inside Asian Superspeciality ENT Hospital in Seethammapeta, Visakhapatnam. Discover the precision technology that powers our ear microsurgery, vestibular balance testing, and endoscopic sinus procedures.
          </p>
        </div>
      </section>

      {/* Facilities Showcase */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {FACILITIES.map((fac, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={fac.id}
                className="grid-2col"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  alignItems: 'center'
                }}
              >
                <div style={{ order: isReversed ? 2 : 1, width: '100%', height: 'auto', minHeight: '260px', maxHeight: '360px', aspectRatio: '16/10' }}>
                  <img
                    src={fac.image}
                    alt={fac.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="responsive-card-padded" style={{ order: isReversed ? 1 : 2 }}>
                  <span className="section-badge">{fac.category}</span>
                  <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
                    {fac.title}
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {fac.description}
                  </p>

                  <div style={{
                    backgroundColor: 'var(--bg-surface-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                      Diagnostic / Technical Specifications:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {fac.specs.map((spec, i) => (
                        <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2 size={16} color="var(--color-primary-teal)" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/book-appointment"
                    className="btn btn-outline"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
                  >
                    <Calendar size={15} />
                    <span>Book Evaluation at This Unit</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sterility & Daycare Protocol Note */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--color-teal-border)',
          padding: '2rem',
          marginTop: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'var(--color-teal-soft)',
            color: 'var(--color-primary-teal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Shield size={26} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
              Daycare Surgery &amp; Infection Control Protocols
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              All surgical suites utilize strict surgical sterilization standards and micro-instrument autoclave cycling. Our daycare unit enables patients undergoing tympanoplasty, septoplasty, or coblation adenoidectomy to recover comfortably and return home on the same day.
            </p>
          </div>
          <Link to="/book-appointment" className="btn btn-primary" style={{ flexShrink: 0 }}>
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
