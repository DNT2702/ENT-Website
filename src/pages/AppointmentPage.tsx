import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Phone, Clock, MapPin, AlertCircle, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { AppointmentWizard } from '../components/common/AppointmentWizard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const AppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSpecialty = searchParams.get('speciality') || 'General ENT Consultation';
  const initialDoctor = searchParams.get('doctor') || 'Dr. Pradeep Vundavalli';

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
          <Breadcrumbs items={[{ label: 'Book Consultation' }]} />
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
            <Calendar size={15} />
            <span>Outpatient Appointment Enquiry</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Book a Doctor Consultation
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Schedule your appointment with Dr. Pradeep Vundavalli at Asian Superspeciality ENT Hospital in Seethammapeta, Visakhapatnam.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="grid-2col-split">
          {/* Left Form Column */}
          <div style={{ minWidth: 0 }}>
            <AppointmentWizard
              initialSpecialty={initialSpecialty}
              initialDoctor={initialDoctor}
            />
          </div>

          {/* Right Information & Triage Sidebar */}
          <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Hospital Timings Card */}
            <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <Clock size={20} color="var(--color-primary-teal)" />
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-navy)', margin: 0 }}>
                  OPD Consultation Schedule
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Morning OPD:</span>
                  <strong>10:00 AM – 02:00 PM</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Evening OPD:</span>
                  <strong>05:00 PM – 08:00 PM</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Working Days:</span>
                  <strong>Monday through Saturday</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Sunday:</span>
                  <span style={{ color: 'var(--color-emergency-red)', fontWeight: 600 }}>Emergency &amp; Prior Appt Only</span>
                </div>
              </div>
            </div>

            {/* Acute Emergency Hotline */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FCA5A5',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#991B1B', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <AlertCircle size={18} color="#DC2626" />
                <span>Acute Emergency ENT Notice</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#7F1D1D', lineHeight: 1.5, marginBottom: '1rem' }}>
                If you or your child have inhaled a foreign body (e.g., peanut, battery, plastic toy) or are experiencing acute stridor, severe ear trauma, or uncontrollable nosebleed (epistaxis), please proceed directly to the hospital or call our 24/7 hotline immediately:
              </p>
              <a
                href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`}
                className="btn btn-emergency"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9375rem' }}
              >
                <Phone size={16} />
                <span>Call Emergency Triage ({HOSPITAL_INFO.contacts.phone})</span>
              </a>
            </div>

            {/* Hospital Location Pin Card */}
            <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={22} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                    Hospital Address
                  </h4>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Asian ENT Hospital Building,<br />
                    Opp. Bhashyam School, Prism College Road,<br />
                    Rajendra Nagar, Seethammapeta,<br />
                    Visakhapatnam, AP 530016
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
