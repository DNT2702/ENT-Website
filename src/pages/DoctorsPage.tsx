import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const DoctorsPage: React.FC = () => {
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
          <Breadcrumbs items={[{ label: 'Medical Team & Specialists' }]} />
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
            <Stethoscope size={15} />
            <span>Surgical Leadership</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Doctor Credentials &amp; Faculty
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Consult with our specialist ENT surgeon in Seethammapeta, Visakhapatnam. Verified qualifications, extensive surgical experience, and international fellowship training.
          </p>
        </div>
      </section>

      {/* Main Profile Section */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Left: Doctor Portrait & Quick Info */}
            <div style={{ position: 'relative' }}>
              <img
                src={leadDoctor.image}
                alt={leadDoctor.name}
                style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(10, 37, 64, 0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.8125rem', color: '#2DD4BF', fontWeight: 600 }}>
                  Clinical Leadership
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                  {leadDoctor.experience}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                  Andhra Medical College Alumnus &amp; Fellow
                </div>
              </div>
            </div>

            {/* Right: Detailed Credentials */}
            <div style={{ padding: '2.5rem 2.5rem 2.5rem 0' }}>
              <span className="section-badge">Lead Surgeon</span>
              <h2 style={{ fontSize: '2.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                {leadDoctor.name}
              </h2>
              <div style={{ fontSize: '1rem', color: 'var(--color-primary-teal)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {leadDoctor.designation}
              </div>

              {/* Degrees Badge */}
              <div style={{
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-navy)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Verified Qualifications:
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {leadDoctor.qualifications}
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {leadDoctor.bio}
              </p>

              {/* Fellowships */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={18} color="var(--color-primary-teal)" />
                  <span>Advanced Fellowships &amp; International Training</span>
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {leadDoctor.fellowships.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={15} color="var(--color-primary-teal)" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Globe size={18} color="var(--color-primary-teal)" />
                  <span>Professional Society Memberships</span>
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {leadDoctor.memberships.map((m, i) => (
                    <span key={i} className="badge badge-navy" style={{ padding: '0.35rem 0.65rem' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* OPD Timings Table Card */}
              <div style={{
                backgroundColor: 'var(--color-teal-soft)',
                border: '1.5px solid var(--color-teal-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-teal-dark)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  <Clock size={16} />
                  <span>Consultation Timetable (Seethammapeta OPD)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-subtle)', display: 'block', fontSize: '0.75rem' }}>Morning OPD:</span>
                    <strong>{leadDoctor.opdSchedule.morning}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)', display: 'block', fontSize: '0.75rem' }}>Evening OPD:</span>
                    <strong>{leadDoctor.opdSchedule.evening}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)', display: 'block', fontSize: '0.75rem' }}>Working Days:</span>
                    <strong>{leadDoctor.opdSchedule.days}</strong>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to={`/book-appointment?doctor=${encodeURIComponent(leadDoctor.name)}`}
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 1.5rem' }}
                >
                  <Calendar size={18} />
                  <span>Schedule Consultation</span>
                </Link>
                <a
                  href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`}
                  className="btn btn-navy"
                  style={{ padding: '0.85rem 1.5rem' }}
                >
                  <Phone size={18} />
                  <span>Call Hospital Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Guarantee Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            backgroundColor: 'var(--color-teal-soft)',
            color: 'var(--color-primary-teal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <ShieldCheck size={28} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
              Responsible Healthcare &amp; Direct Specialist Access
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              At Asian Superspeciality ENT Hospital, all surgical consultations, otomicroscopic assessments, and procedure plans are reviewed directly by Dr. Pradeep Vundavalli, ensuring consistent clinical quality and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
