import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  FileText,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const YourVisitPage: React.FC = () => {
  const triggerAura = () => {
    const btn = document.getElementById('aura-assistant-btn');
    if (btn) btn.click();
  };

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
          <Breadcrumbs items={[{ label: 'Your Hospital Visit' }]} />

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
            <Calendar size={15} />
            <span>Patient Consultation Guide</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)'
          }}>
            Planning Your Visit to Asian ENT
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#CBD5E1',
            maxWidth: '740px',
            lineHeight: 1.65,
            marginBottom: '2rem'
          }}>
            Everything you need for a smooth, unhurried consultation with <strong>Dr. Pradeep Vundavalli</strong> — OPD consultation timings, diagnostic testing flow, insurance cashless approvals, and what to bring.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/book-appointment"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.8rem 1.5rem',
                backgroundColor: '#38BDF8',
                color: '#0A192F',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(56, 189, 248, 0.35)'
              }}
            >
              <Calendar size={16} />
              <span>Book OPD Appointment</span>
            </Link>

            <a
              href="https://wa.me/919705033133?text=Hello%20Asian%20ENT%20Hospital,%20I%20am%20planning%20my%20visit%20and%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.8rem 1.5rem',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Reception</span>
            </a>
          </div>
        </div>
      </section>

      {/* OPD Schedule & Timings Card Grid */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="grid-cards-3" style={{ marginBottom: '3.5rem' }}>
          {/* Morning Clinic */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 6px 20px -4px rgba(10, 25, 47, 0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#F0F9FF',
                color: '#0284C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  MORNING OPD CLINIC
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)' }}>
                  10:00 AM – 2:00 PM
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
              Monday through Saturday. Ideal for new clinical assessments, audiology testing, and pre-op reviews.
            </p>
          </div>

          {/* Evening Clinic */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 6px 20px -4px rgba(10, 25, 47, 0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#EFF6FF',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  EVENING OPD CLINIC
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)' }}>
                  5:00 PM – 8:00 PM
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
              Monday through Saturday. Convenient evening consultation slots for working professionals and families.
            </p>
          </div>

          {/* 24/7 Acute Triage */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid #FEE2E2',
            boxShadow: '0 6px 20px -4px rgba(239, 68, 68, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FEF2F2',
                color: '#EF4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#DC2626', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  24/7 ACUTE ENT TRIAGE
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)' }}>
                  Round-The-Clock
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
              Foreign body removal, sudden hearing loss, epistaxis (nosebleeds), and acute trauma support.
            </p>
          </div>
        </div>

        {/* 4-Step Patient Journey Section */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid #E2E8F0',
          marginBottom: '3.5rem',
          boxShadow: '0 8px 30px -4px rgba(10, 25, 47, 0.05)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              STEP-BY-STEP
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)' }}>
              Your 4-Stage Consultation Journey
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.5rem' }}>
              We respect your time. Our streamlined clinical intake ensures thorough diagnosis without unnecessary waiting.
            </p>
          </div>

          <div className="grid-cards-4">
            {[
              {
                step: '01',
                title: 'Check-in & Registration',
                desc: 'Arrive 15 minutes prior to your slot. Reception registers your vitals and opens your confidential digital ENT health record.'
              },
              {
                step: '02',
                title: 'Diagnostic Workup',
                desc: 'If required, in-house high-definition otomicroscopy, soundproof pure tone audiometry, or video endoscopy is completed on-site.'
              },
              {
                step: '03',
                title: 'Consult with Dr. Pradeep',
                desc: 'Thorough, unhurried clinical examination. Dr. Pradeep explains your condition, visual findings on monitor, and treatment options.'
              },
              {
                step: '04',
                title: 'Prescription & Care Plan',
                desc: 'Clear medication regimen, dietary advice, follow-up schedule, or daycare surgical coordination with insurance desk if needed.'
              }
            ].map((s) => (
              <div key={s.step} style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#E2E8F0',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.5rem'
                }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A192F', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: What to Bring & Cashless Insurance */}
        <div className="grid-2col" style={{ marginBottom: '3.5rem' }}>
          {/* Left: What to Bring Checklist */}
          <div
            className="responsive-card-padded"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px -4px rgba(10, 25, 47, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#F0F9FF',
                color: '#0284C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)' }}>
                What to Bring with You
              </h3>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Please bring the following documents to assist our clinical team in reviewing your medical history:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Any previous hearing test charts (Audiograms / Tympanograms).',
                'Recent CT PNS, MRI Brain / IAC, or Neck X-Rays if already performed.',
                'List of regular medications (especially blood thinners, hypertension, or diabetes).',
                'Government-issued Photo ID (Aadhaar / Voter ID / Passport).',
                'Health Insurance / TPA card if planning cashless surgical admission.'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#0284C7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cashless Mediclaim & Insurance */}
          <div
            className="responsive-card-padded"
            style={{
              backgroundColor: '#0F2A4A',
              backgroundImage: 'linear-gradient(145deg, #0A192F 0%, #16365C 100%)',
              borderRadius: '24px',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 8px 30px -4px rgba(10, 25, 47, 0.2)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CreditCard size={20} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  Cashless Insurance Desk
                </h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We support hassle-free cashless hospitalization across major Third-Party Administrators (TPAs) and leading private health insurance networks for planned daycare surgeries (Tympanoplasty, Mastoidectomy, FESS, Septoplasty, Coblation).
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Submit your policy card and doctor’s admission advice to our desk.',
                  'Pre-authorization forms are completed and transmitted to your TPA.',
                  'Cashless approval confirmation received prior to scheduled procedure.',
                  'Zero paperwork stress upon discharge.'
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(56, 189, 248, 0.2)',
                      color: '#38BDF8',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                Insurance queries? Speak to our billing coordinator:
              </span>
              <a
                href="tel:+919705033133"
                style={{
                  color: '#38BDF8',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none'
                }}
              >
                <span>+91 97050 33133</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Directions Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 8px 24px -4px rgba(10, 25, 47, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#0284C7', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              <MapPin size={16} />
              <span>HOSPITAL LOCATION &amp; ACCESS</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A192F', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
              Seethammapeta, Visakhapatnam, Andhra Pradesh
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#64748B', maxWidth: '580px', lineHeight: 1.6 }}>
              Centrally accessible from all parts of Vizag with dedicated parking, wheelchair access, and an elevator-equipped outpatient wing.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=Asian+ENT+Hospital+Seethammapeta+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.8rem 1.45rem',
                backgroundColor: '#0A192F',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={15} />
              <span>Open in Google Maps</span>
            </a>

            <a
              href="tel:+919705033133"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.8rem 1.45rem',
                backgroundColor: '#F1F5F9',
                color: '#0A192F',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <Phone size={15} />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
