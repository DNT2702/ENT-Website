import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '5rem' }}>
      <section style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem'
      }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy & Terms' }]} />
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Privacy Policy &amp; Terms of Service
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Patient data privacy practices at Asian Superspeciality ENT Hospital, Visakhapatnam.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '3.5rem', maxWidth: '840px' }}>
        <div style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
            1. Patient Information Collection &amp; Use
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Asian Superspeciality ENT Hospital collects personal information (such as patient name, contact number, email address, and clinical appointment preferences) solely for the purpose of outpatient scheduling, medical registration, clinical coordination, and emergency contact. We do not sell, rent, or trade patient personal details to any commercial third parties.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
            2. Medical Responsibility &amp; Teleconsultation Disclaimers
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            The content provided on this website is for general educational awareness regarding ENT, otology, and neurotology conditions. It does not replace an in-person medical consultation, clinical otomicroscopy, or individual medical diagnosis by a qualified doctor.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
            3. Data Security &amp; Access Controls
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            All appointment enquiries and submitted patient data are processed using industry-standard transport encryption (HTTPS) and restricted access controls. Hospital staff access patient records solely to facilitate medical care and insurance processing.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
            4. Contacting the Hospital Regarding Your Records
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            If you have questions regarding your medical records or data preferences, please contact our hospital reception at:
            <br />
            <strong>Asian Superspeciality ENT Hospital</strong>
            <br />
            Opp. Bhashyam School, Prism College Road, Seethammapeta, Visakhapatnam 530016
            <br />
            Telephone: +91 97050 33133 | Email: contact@asianenthospital.com
          </p>
        </div>
      </div>
    </div>
  );
};
