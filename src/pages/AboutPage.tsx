import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle2, HeartPulse, Building2, Calendar, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const AboutPage: React.FC = () => {
  const leadDoctor = DOCTORS[0];

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '4rem' }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem'
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Hospital' }]} />
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
            <span>Dedicated ENT Superspeciality Care</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            About Asian Superspeciality ENT Hospital
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Serving Visakhapatnam and coastal Andhra Pradesh with focused clinical expertise in advanced ear microsurgery, vertigo and balance disorders, hearing reconstruction, and 4K endoscopic sinus surgery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* Hospital Mission & Philosophy */}
        <div className="grid-2col-split" style={{ alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <span className="section-badge">Our Mission &amp; Purpose</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', marginBottom: '1.25rem' }}>
              Precision Diagnostics Before Surgical Intervention.
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1rem' }}>
              Asian Superspeciality ENT Hospital was founded on a singular conviction: that disorders of the ear, nose, throat, and skull base require specialized diagnostic equipment and meticulous surgical discipline rather than superficial treatment.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Located in Seethammapeta, Visakhapatnam, our hospital brings together calibrated audiometry sound booths, high-frame-rate video nystagmography (VNG), Carl Zeiss surgical operating microscopes, and cold coblation technology under one coordinated roof.
            </p>

            <div style={{
              backgroundColor: 'var(--bg-surface-subtle)',
              borderLeft: '4px solid var(--color-primary-teal)',
              padding: '1.25rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0'
            }}>
              <p style={{ fontStyle: 'italic', color: 'var(--color-primary-navy)', fontSize: '0.9375rem', margin: 0 }}>
                &ldquo;Our pledge to every patient is complete diagnostic clarity. We perform only the investigations that answer a clinical question, and we recommend surgical treatment only when evidence clearly supports superior patient recovery.&rdquo;
              </p>
              <div style={{ marginTop: '0.5rem', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)' }}>
                — Dr. Pradeep Vundavalli, Chief ENT Surgeon
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/hero.jpg"
              alt="Asian Superspeciality ENT Hospital Reception and Clinical Examination Suite"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)'
              }}
            />
          </div>
        </div>

        {/* Core Pillars of Care */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-title-wrap">
            <span className="section-badge">Core Principles</span>
            <h2 className="section-title">The Cornerstones of Our Practice</h2>
          </div>

          <div className="grid-cards-3">
            <div className="card">
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-teal-soft)',
                color: 'var(--color-primary-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Shield size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                Clinical Trust &amp; Ethics
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Every clinical recommendation is discussed thoroughly with the patient. Transparent surgical indications, honest counseling, and no unnecessary diagnostic tests.
              </p>
            </div>

            <div className="card">
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-teal-soft)',
                color: 'var(--color-primary-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                Specialized Surgical Training
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Advanced fellowship training in Otology from Bangalore and lateral skull base surgery training in Béziers, France, bringing global surgical protocols to Visakhapatnam.
              </p>
            </div>

            <div className="card">
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-teal-soft)',
                color: 'var(--color-primary-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <HeartPulse size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                Patient-Centered Comfort
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Minimally invasive approaches including cold coblation for adenoids and tonsils, reducing post-operative pain and enabling rapid return to normal nutrition.
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Team Section */}
        <div style={{
          backgroundColor: 'var(--bg-surface-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          border: '1px solid var(--border-subtle)',
          marginBottom: '3rem'
        }}>
          <div className="grid-surgeon" style={{ gap: '2.5rem' }}>
            <div>
              <img
                src={leadDoctor.image}
                alt={leadDoctor.name}
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)'
                }}
              />
            </div>
            <div>
              <span className="section-badge">Surgical Director</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                {leadDoctor.name}
              </h2>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-primary-teal)', fontWeight: 600, marginBottom: '1rem' }}>
                {leadDoctor.designation}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                {leadDoctor.qualifications}
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {leadDoctor.bio}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/doctors" className="btn btn-navy">
                  <span>View Clinical Credentials &amp; Timetable</span>
                </Link>
                <Link to="/book-appointment" className="btn btn-primary">
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
