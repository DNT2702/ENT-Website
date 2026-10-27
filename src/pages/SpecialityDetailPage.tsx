import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Activity,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileCheck,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { SPECIALTIES, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SpecialityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const specialty = SPECIALTIES.find((s) => s.slug === slug);

  if (!specialty) {
    return <Navigate to="/specialities" replace />;
  }

  const leadDoctor = DOCTORS[0];

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
          <Breadcrumbs items={[
            { label: 'Specialities', path: '/specialities' },
            { label: specialty.title }
          ]} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(13, 148, 136, 0.25)',
            color: '#2DD4BF',
            fontSize: '0.8125rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.85rem'
          }}>
            <ShieldCheck size={16} />
            <span>{specialty.pillarNumber}</span>
          </div>

          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>
            {specialty.title}
          </h1>

          <p style={{ fontSize: '1.125rem', color: '#CBD5E1', maxWidth: '780px', lineHeight: 1.6 }}>
            {specialty.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="grid-2col-split">
          {/* Left Column: Deep Clinical Information */}
          <div style={{ minWidth: 0 }}>
            {/* Overview Section */}
            <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#FFFFFF' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
                Clinical Approach &amp; Overview
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                {specialty.fullDescription}
              </p>

              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                Division Highlights:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {specialty.clinicalHighlights.map((highlight, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Capabilities */}
            <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                Diagnostic Investigations in Seethammapeta
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                We utilize verified objective diagnostic technologies so that treatment decisions are supported by measurable clinical evidence:
              </p>
              <div className="grid-auto-240" style={{ gap: '0.75rem' }}>
                {specialty.diagnosticTechnologies.map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-primary-navy)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <FileCheck size={16} color="var(--color-primary-teal)" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Managed Breakdown */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '1.25rem' }}>
                Conditions Evaluated &amp; Treated
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {specialty.conditions.map((cond) => (
                  <div
                    key={cond.slug}
                    className="card"
                    style={{ backgroundColor: '#FFFFFF', borderLeft: '4px solid var(--color-primary-teal)' }}
                  >
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                      {cond.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {cond.summary}
                    </p>

                    <div className="grid-auto-180" style={{
                      gap: '1rem',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-navy)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                          Frequent Symptoms:
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {cond.symptoms.map((s, idx) => (
                            <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F87171' }} />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-navy)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                          Treatments &amp; Procedures:
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {cond.treatments.map((t, idx) => (
                            <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-primary-teal)' }} />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Preparation Guidance Alert */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <AlertCircle size={20} color="#1E40AF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E40AF', marginBottom: '0.25rem' }}>
                  Patient Clinical Guidance for {specialty.title}:
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#1E3A8A', lineHeight: 1.5 }}>
                  {specialty.patientGuidance}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Card & Consultation CTA */}
          <div style={{ minWidth: 0 }}>
            {/* Quick Consultation Booking Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-md)',
              position: 'sticky',
              top: '90px'
            }}>
              <span className="section-badge" style={{ marginBottom: '0.5rem' }}>
                Consultation Pathway
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                Consult for {specialty.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Submit an appointment enquiry with Dr. Pradeep Vundavalli. Our hospital desk will contact you to verify your slot.
              </p>

              {/* Doctor snippet */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem',
                backgroundColor: 'var(--bg-surface-subtle)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem'
              }}>
                <img
                  src={leadDoctor.image}
                  alt={leadDoctor.name}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    {leadDoctor.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-teal)', fontWeight: 600 }}>
                    {leadDoctor.designation}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                    {leadDoctor.experience}
                  </div>
                </div>
              </div>

              {/* OPD Schedule Snippet */}
              <div style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1rem'
              }}>
                <div style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                  Hospital OPD Timings:
                </div>
                <div>Morning: {leadDoctor.opdSchedule.morning}</div>
                <div>Evening: {leadDoctor.opdSchedule.evening}</div>
                <div style={{ color: 'var(--text-subtle)' }}>{leadDoctor.opdSchedule.days}</div>
              </div>

              <Link
                to={`/book-appointment?speciality=${encodeURIComponent(specialty.title)}`}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginBottom: '0.75rem' }}
              >
                <Calendar size={18} />
                <span>Book This Specialty</span>
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`}
                className="btn btn-navy"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.875rem' }}
              >
                <span>Call Hotline ({HOSPITAL_INFO.contacts.phone})</span>
              </a>

              {/* Other Specialties Nav */}
              <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.65rem' }}>
                  Other ENT Specialties:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {SPECIALTIES.filter((s) => s.id !== specialty.id).map((other) => (
                    <Link
                      key={other.id}
                      to={`/specialities/${other.slug}`}
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                        padding: '0.3rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-teal)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <span>{other.title}</span>
                      <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
