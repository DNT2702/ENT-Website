import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Calendar,
  Check,
  FileText,
  Clock,
  MapPin,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS, FAQS } from '../data/hospitalData';

export const HomePage: React.FC = () => {
  const leadDoctor = DOCTORS[0];

  // Interactive Symptom-to-Care state (as seen in video)
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState(0);

  // FAQ Accordion state (first open by default as seen in video)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // WhatsApp Booking Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    slot: 'Morning (10 AM – 2 PM)',
    speciality: 'Vertigo & Balance',
    symptoms: ''
  });

  const symptomsList = [
    {
      label: 'Room spins when I turn in bed or look up',
      condition: 'BPPV',
      speciality: 'Vertigo & Balance Disorders',
      test: 'Dix-Hallpike positional test & Epley Maneuver'
    },
    {
      label: 'Recurrent ear discharge or a known hole in the eardrum',
      condition: 'Tympanic Perforation / CSOM',
      speciality: 'Advanced Ear Surgery & Otology',
      test: 'High-definition Otomicroscopy & Audiogram'
    },
    {
      label: 'Struggling to hear in noisy places or on the phone',
      condition: 'Sensorineural / Conductive Hearing Loss',
      speciality: 'Hearing Reconstruction & Implants',
      test: 'Soundproof booth Pure Tone Audiometry & Tympanometry'
    },
    {
      label: 'Facial pressure, blocked nose, loss of smell (>12 weeks)',
      condition: 'Chronic Sinusitis / Nasal Polyps',
      speciality: 'Sinus, Nose & Rhinoplasty',
      test: 'Diagnostic 4K Nasal Endoscopy (DNE) & CT PNS'
    },
    {
      label: 'Hoarse or rough voice lasting more than 3 weeks',
      condition: 'Vocal Cord Polyp / Nodule',
      speciality: 'Coblation Tonsils, Adenoids & Voice',
      test: 'Video Laryngoscopy / Stroboscopy vocal exam'
    },
    {
      label: 'My child mouth-breathes, snores loudly, sleeps restlessly',
      condition: 'Adenotonsillar Hypertrophy',
      speciality: 'Coblation Tonsils, Adenoids & Voice',
      test: 'Flexible Endoscopy & Lateral Neck Radiography'
    }
  ];

  const currentSymptom = symptomsList[selectedSymptomIdx];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = HOSPITAL_INFO.contacts.phone.replace(/[^0-9]/g, '');
    const message = `Hello Asian ENT Hospital, I would like to book an appointment with Dr. Pradeep Vundavalli.%0A%0A• Patient Name: ${encodeURIComponent(formData.name || 'Not provided')}%0A• Phone: ${encodeURIComponent(formData.phone || 'Not provided')}%0A• Preferred Date: ${encodeURIComponent(formData.date || 'Earliest available')}%0A• Preferred Slot: ${encodeURIComponent(formData.slot)}%0A• Speciality: ${encodeURIComponent(formData.speciality)}%0A• Symptoms: ${encodeURIComponent(formData.symptoms || 'General consultation')}`;
    window.open(`https://wa.me/91${cleanPhone.slice(-10)}?text=${message}`, '_blank');
  };

  const triggerAura = () => {
    const btn = document.getElementById('aura-assistant-btn');
    if (btn) btn.click();
  };

  const scrollToBooking = (specialityName?: string) => {
    if (specialityName) {
      setFormData(prev => ({ ...prev, speciality: specialityName }));
    }
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0F172A', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO SECTION (Exact video typography & layout)
          ========================================================================= */}
      <section style={{
        position: 'relative',
        minHeight: '640px',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        background: `linear-gradient(to right, rgba(10, 25, 47, 0.96) 0%, rgba(10, 25, 47, 0.88) 45%, rgba(10, 25, 47, 0.50) 75%, rgba(10, 25, 47, 0.20) 100%), url('/images/hero.jpg') center right / cover no-repeat`,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            {/* Eyebrow badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#38BDF8',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.28)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38BDF8', display: 'inline-block' }} />
              <span>ENT • OTOLOGY • NEUROTOLOGY • SKULL BASE</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.15rem, 6.2vw, 4.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Hear clearly.<br />
              Breathe freely.<br />
              Stand <span style={{ color: '#38BDF8', textShadow: '0 0 30px rgba(56, 189, 248, 0.45)' }}>steady.</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
              color: '#CBD5E1',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '580px'
            }}>
              Asian Superspeciality ENT Hospital, Visakhapatnam — advanced ENT, otology, neurotology &amp; skull base care led by <strong style={{ color: '#FFFFFF' }}>Dr. Pradeep Vundavalli</strong>, Gold Medalist with lateral skull base training in France.
            </p>

            {/* 3 Pills Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToBooking();
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.85rem 1.6rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={17} />
                <span>Book on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={triggerAura}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.85rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Sparkles size={16} color="#38BDF8" />
                <span>Ask Aura, our assistant</span>
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                borderRadius: '9999px',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                backdropFilter: 'blur(8px)',
                color: '#F1F5F9',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                <div className="pulse-red-dot" />
                <span>24/7 Acute ENT Triage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TIMINGS STRIP & LARGE INFINITE ROTATING MARQUEE
          ========================================================================= */}
      {/* 4 Timings Columns */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '1.5rem 0'
      }}>
        <div className="container">
          <div className="timings-grid">
            <div>
              <div style={{ color: '#64748B', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                MON–SAT
              </div>
              <div style={{ fontWeight: 700, color: '#0A192F', marginTop: '0.2rem' }}>
                10:00AM – 2:00PM, 5:00PM – 8:00PM
              </div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                SUNDAY
              </div>
              <div style={{ fontWeight: 700, color: '#0A192F', marginTop: '0.2rem' }}>
                Emergency &amp; prior booking
              </div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                TRAUMA TRIAGE
              </div>
              <div style={{ fontWeight: 700, color: '#0A192F', marginTop: '0.2rem' }}>
                24/7 on-call
              </div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                SEETHAMMAPETA
              </div>
              <div style={{ fontWeight: 700, color: '#0A192F', marginTop: '0.2rem' }}>
                Visakhapatnam 530016
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Continuous Marquee with Equipment */}
      <div className="marquee-ticker-wrap">
        <div className="marquee-ticker-content">
          {[1, 2].map((loop) => (
            <React.Fragment key={loop}>
              <div className="marquee-ticker-text">
                <span className="marquee-plus">+</span>
                <span>Carl Zeiss Operating Microscope</span>
                <span className="marquee-plus">+</span>
                <span>Karl Storz 4K Endoscopy</span>
                <span className="marquee-plus">+</span>
                <span>Smith &amp; Nephew Coblation II</span>
                <span className="marquee-plus">+</span>
                <span>ANSI Soundproof Audiometry Booth</span>
                <span className="marquee-plus">+</span>
                <span>Infrared Video Nystagmography (VNG)</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. SIX CLINICAL PILLARS (BENTO GRID - Exact video layout)
          ========================================================================= */}
      <section id="specialities" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              SIX CLINICAL PILLARS
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '-0.025em',
              marginBottom: '0.65rem',
              fontFamily: 'var(--font-heading)'
            }}>
              One hospital. Every passage of the ear, nose &amp; throat.
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              Tap a pillar to see the diagnostics, procedures and conditions we manage.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {/* Bento Card 1 (Span 6): Vertigo & Balance */}
            <div
              className="bento-card bento-span-6"
              style={{
                minHeight: '260px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: 'linear-gradient(to top, rgba(10, 25, 47, 0.88) 0%, rgba(10, 25, 47, 0.4) 100%), url(/images/audiology-lab.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', opacity: 0.8 }}>
                01 / 06
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Vertigo &amp; Balance
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#E2E8F0', margin: 0 }}>
                  Peripheral vs central — measured, not guessed.
                </p>
              </div>
            </div>

            {/* Bento Card 2 (Span 6): Advanced Ear Surgery & Otology */}
            <div
              className="bento-card bento-span-6"
              style={{
                minHeight: '260px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: 'linear-gradient(to top, rgba(10, 25, 47, 0.88) 0%, rgba(10, 25, 47, 0.4) 100%), url(/images/hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', opacity: 0.8 }}>
                02 / 06
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Advanced Ear Surgery &amp; Otology
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#E2E8F0', margin: 0 }}>
                  Microscopic repair for perforation, discharge &amp; cholesteatoma.
                </p>
              </div>
            </div>

            {/* Bento Card 3 (Span 4): Hearing Reconstruction & Implants */}
            <div
              className="bento-card bento-span-4"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                backgroundColor: '#F8FAFC'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#64748B' }}>
                03 / 06
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A192F', marginBottom: '0.4rem' }}>
                  Hearing Reconstruction &amp; Implants
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                  From ossiculoplasty to cochlear implants.
                </p>
              </div>
            </div>

            {/* Bento Card 4 (Span 4 - Big Blue Center Accent Card in Video!): Coblation Tonsils */}
            <div
              className="bento-card bento-span-4"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                backgroundColor: '#0F396B',
                backgroundImage: 'linear-gradient(145deg, #0A2540 0%, #1D4ED8 100%)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', opacity: 0.8 }}>
                04 / 06
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  color: '#FFFFFF'
                }}>
                  40–70°C
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  Coblation Tonsils, Adenoids &amp; Voice
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#E2E8F0', margin: 0 }}>
                  40–70°C cold coblation. Soft diet in 2–4 days.
                </p>
              </div>
            </div>

            {/* Bento Card 5 (Span 4): Sinus, Nose & Rhinoplasty with 4K badge */}
            <div
              className="bento-card bento-span-4"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                backgroundColor: '#F8FAFC'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#64748B' }}>
                05 / 06
              </div>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  color: '#0284C7'
                }}>
                  4K
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0A192F', marginBottom: '0.35rem' }}>
                  Sinus, Nose &amp; Rhinoplasty
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                  4K endoscopic mucosal-preserving FESS.
                </p>
              </div>
            </div>

            {/* Bento Card 6 (Span 12 - Full Width Bottom): Allergy, Snoring & Sleep Airway */}
            <div
              className="bento-card bento-span-12"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '240px',
                backgroundImage: 'linear-gradient(to top, rgba(10, 25, 47, 0.92) 0%, rgba(10, 25, 47, 0.5) 100%), url(/images/microsurgery-ot.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', opacity: 0.8 }}>
                06 / 06
              </div>
              <div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Allergy, Snoring &amp; Sleep Airway
                </h3>
                <p style={{ fontSize: '0.9375rem', color: '#E2E8F0', margin: 0, maxWidth: '640px' }}>
                  Multi-level airway evaluation for snoring and OSA, plus allergy immunotherapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE SYMPTOM-TO-CARE TRIAGE (Exact video interactive widget)
          ========================================================================= */}
      <section id="symptoms" style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              SYMPTOM-TO-CARE
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '-0.025em',
              marginBottom: '0.65rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Tell us what you feel. We'll show you the path.
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              Choose the symptom closest to yours. This is guidance, not a diagnosis — a consultation confirms it.
            </p>
          </div>

          {/* 2-Column Interactive Widget */}
          <div className="grid-2col-split">
            {/* Left Column: List of Selectable Symptoms */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {symptomsList.map((item, idx) => {
                const isActive = selectedSymptomIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSymptomIdx(idx)}
                    className={`symptom-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} style={{ opacity: isActive ? 1 : 0.4, flexShrink: 0 }} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Diagnosis & Action Card (Elevated white card in video) */}
            <div
              className="responsive-card-padded"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 15px 35px -5px rgba(10, 25, 47, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  LIKELY CONDITION
                </div>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#0A192F',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2,
                  marginBottom: '1.75rem'
                }}>
                  {currentSymptom.condition}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem'
                  }}>
                    SPECIALITY
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0F172A' }}>
                    {currentSymptom.speciality}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem'
                  }}>
                    RECOMMENDED TEST
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: '#475569' }}>
                    {currentSymptom.test}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => scrollToBooking(currentSymptom.speciality)}
                  className="pill-dark"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Book an evaluation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SURGEON SPOTLIGHT: DR. PRADEEP VUNDAVALLI (Exact video layout)
          ========================================================================= */}
      <section id="surgeon" style={{
        backgroundColor: '#071A32',
        color: '#FFFFFF',
        padding: '5.5rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div className="grid-surgeon">
            {/* Left: Surgeon Operating Photo with Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <img
                  src={leadDoctor.image}
                  alt="Dr. Pradeep Vundavalli performing microscopic surgery"
                  style={{ width: '100%', height: 'auto', maxHeight: '440px', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Bottom Badge: Zeiss optics • nerve monitoring */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(10, 25, 47, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#E2E8F0'
              }}>
                Zeiss optics • nerve monitoring
              </div>
            </div>

            {/* Right: Surgeon Profile & Quote */}
            <div>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#38BDF8',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                CHIEF ENT, OTOLOGY &amp; LATERAL SKULL BASE SURGEON
              </div>

              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {leadDoctor.name}
              </h2>

              <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '1.75rem' }}>
                MBBS • MS (ENT) • Fellowship in Otology • Skull Base Training (France)
              </div>

              {/* Big Quote Box from Video */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: '#FFFFFF',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  &ldquo;We perform only the investigations that answer a clinical question, and recommend surgery only when evidence clearly supports superior recovery.&rdquo;
                </p>
              </div>

              {/* 3 Grid Credential Cards */}
              <div className="grid-auto-180" style={{ marginBottom: '1.75rem' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                    Fellowship in Otology
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Vijaya ENT Hospital, Bangalore • 2009
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                    Lateral Skull Base Surgery
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Champeux Clinic, Béziers, France • 2012
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                    Gold Medalist, MS ENT
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                    Andhra Medical College
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                15+ years of dedicated clinical &amp; microsurgical practice • Advanced cochlear implant surgical training • Author of clinical research on CSOM &amp; vertigo assessment • Invited faculty at National ENT &amp; Skull Base workshops
              </p>

              {/* Society Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['AOI', 'Indian Society of Otology', 'Cochlear Implant Group of India', 'Skull Base Society of India', 'Politzer Society', 'EAOHNS', 'Indian Association of Sleep Surgeons'].map((soc, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px'
                    }}
                  >
                    {soc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INFRASTRUCTURE ("Instruments chosen for what they reveal.")
          ========================================================================= */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              INFRASTRUCTURE
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '-0.025em',
              marginBottom: '0.65rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Instruments chosen for what they reveal.
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              Three spaces, built around the precision a millimeter-scale anatomy demands.
            </p>
          </div>

          <div className="grid-cards-3">
            {/* Card A */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src="/images/audiology-lab.jpg"
                  alt="Audiology sound lab with patient"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#0A192F',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  A
                </div>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#0A192F', marginBottom: '1rem', fontWeight: 800 }}>
                  Audiology &amp; Vestibular Sound Lab
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: '#64748B' }}>
                  <div>• ANSI-compliant double-walled acoustic booth</div>
                  <div>• Dual-channel Pure Tone Audiometry</div>
                  <div>• Impedance Tympanometry</div>
                  <div>• High-frame-rate infrared VNG</div>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src="/images/hero.jpg"
                  alt="Precision consultation suites"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#0A192F',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  B
                </div>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#0A192F', marginBottom: '1rem', fontWeight: 800 }}>
                  Precision Consultation Suites
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: '#64748B' }}>
                  <div>• Ergonomic tilt / elevation exam chairs</div>
                  <div>• Zeiss examination microscopes</div>
                  <div>• Karl Storz HD endoscopes</div>
                  <div>• Dual live patient monitors</div>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src="/images/microsurgery-ot.jpg"
                  alt="Modular microsurgical theatre"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  color: '#0A192F',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  C
                </div>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#0A192F', marginBottom: '1rem', fontWeight: 800 }}>
                  Modular Microsurgical Theatre
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: '#64748B' }}>
                  <div>• Sterile laminar airflow OT</div>
                  <div>• Carl Zeiss microscope with HD beam splitter</div>
                  <div>• Karl Storz 4K sinus endoscopy tower</div>
                  <div>• Smith &amp; Nephew Coblation II • facial nerve monitor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. "FOUR STEPS. NO UNNECESSARY TESTS." & "WHAT TO BRING"
          ========================================================================= */}
      <section id="your-visit" style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#64748B',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              YOUR VISIT • STEP BY STEP
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 800,
              color: '#0A192F',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-heading)'
            }}>
              Four steps. No unnecessary tests.
            </h2>
          </div>

          {/* 4 Steps Row */}
          <div className="grid-cards-4" style={{ marginBottom: '3rem' }}>
            {[
              { num: '01', title: 'Listen & look', desc: 'Thorough clinical history with video otoscopy / endoscopy on a live screen — you see what we see.' },
              { num: '02', title: 'Evidence-led diagnostics', desc: 'Only the investigations that answer a clinical question.' },
              { num: '03', title: 'Tailored pathway', desc: 'Conservative medical therapy prioritized before surgery.' },
              { num: '04', title: 'Recovery & follow-up', desc: 'Dedicated recovery, vestibular rehabilitation or post-op follow-up.' }
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#0284C7',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '1rem'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0A192F', marginBottom: '0.5rem', fontWeight: 800 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* What to bring Container */}
          <div
            className="responsive-card-padded"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <FileText size={20} color="#0284C7" />
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#0A192F', fontWeight: 800, margin: 0 }}>
                  What to bring
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  Help us avoid repeating tests you've already had
                </span>
              </div>
            </div>

            <div className="grid-auto-240" style={{ fontSize: '0.875rem', color: '#334155' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 800 }}>01</span>
                <span>Previous ENT prescriptions, ear drops, discharge cards</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 800 }}>02</span>
                <span>Prior audiograms, tympanometry graphs, BERA reports</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 800 }}>03</span>
                <span>CT / MRI scan films and reports</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 800 }}>04</span>
                <span>Current medication list — especially blood thinners (Aspirin, Clopidogrel)</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 800 }}>05</span>
                <span>Government photo ID &amp; health insurance e-card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TWO CARDS: "Insurance, handled at our desk." & "Keep it dry. Keep it calm."
          ========================================================================= */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2col">
            {/* Left Card: Cashless Mediclaim */}
            <div
              className="responsive-card-padded"
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#64748B',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  CASHLESS MEDICLAIM
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', marginBottom: '0.75rem' }}>
                  Insurance, handled at our desk.
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Supported across major insurers &amp; TPAs for planned surgeries — Tympanoplasty, Mastoidectomy, FESS, Septoplasty, Coblation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { num: '1', title: 'Consult & estimate', desc: 'Clinical consultation and admission estimate.' },
                    { num: '2', title: 'Documents to TPA', desc: 'Reception desk submits documents to your insurer / TPA.' },
                    { num: '3', title: 'Pre-authorization', desc: 'TPA issues approval letter prior to planned surgery.' },
                    { num: '4', title: 'Cashless discharge', desc: 'Discharge summary and final cashless billing settlement.' }
                  ].map((step) => (
                    <div key={step.num} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E2E8F0',
                        color: '#0A192F',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        {step.num}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A192F' }}>{step.title}</div>
                        <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Dark Blue Card - After Ear Surgery */}
            <div
              className="responsive-card-padded"
              style={{
                backgroundColor: '#0F2A4A',
                backgroundImage: 'linear-gradient(145deg, #0A192F 0%, #16365C 100%)',
                borderRadius: '24px',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#38BDF8',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  AFTER EAR SURGERY
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '2rem' }}>
                  Keep it dry. Keep it calm.
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    'Keep the operative ear strictly dry for 4–6 weeks.',
                    'Coat a cotton ball with Vaseline to block water during hair wash / bathing.',
                    'Do not blow your nose forcefully; sneeze with your mouth open.',
                    'Avoid air travel, heavy lifting and swimming for 3–4 weeks post-tympanoplasty.'
                  ].map((rule, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.875rem' }}>
                        0{idx + 1}
                      </span>
                      <span style={{ fontSize: '0.9375rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FAQ ACCORDION ("Questions patients ask us most.")
          ========================================================================= */}
      <section id="faq" style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="grid-2col-split">
            {/* Left Column: Heading & Patient Care Picture */}
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                FAQ
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
                fontWeight: 800,
                color: '#0A192F',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                fontFamily: 'var(--font-heading)',
                marginBottom: '1rem'
              }}>
                Questions patients ask us most.
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#64748B',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                Clear, transparent answers about appointments, daycare microsurgeries, balance assessments, and cashless insurance coverage.
              </p>

              {/* Patient Care Picture Card */}
              <div style={{
                borderRadius: '22px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 16px 36px -8px rgba(10, 25, 47, 0.08)'
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

                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#0A192F',
                    marginBottom: '0.4rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    Have a specific question not answered here?
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    Our patient care coordinators are on-site to assist with OPD slots, pre-surgical counseling, and insurance claims.
                  </p>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a
                      href="https://wa.me/919705033133?text=Hello%20Asian%20ENT%20Hospital,%20I%20have%20a%20question%20regarding%20treatment"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.65rem 1.15rem',
                        backgroundColor: '#25D366',
                        color: '#FFFFFF',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>Chat with Desk</span>
                    </a>

                    <button
                      type="button"
                      onClick={triggerAura}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.65rem 1.15rem',
                        backgroundColor: '#F0F9FF',
                        color: '#0284C7',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid #BAE6FD',
                        cursor: 'pointer'
                      }}
                    >
                      <Sparkles size={15} />
                      <span>Ask Aura</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion Items */}
            <div>
              {[
                {
                  q: 'How do I book an appointment with Dr. Pradeep Vundavalli?',
                  a: 'Use the WhatsApp booking form on this page or call +91 97050 33133. The desk confirms morning (10 AM - 2 PM) or evening (5 PM - 8 PM) slots.'
                },
                {
                  q: 'Is Tympanoplasty performed as a daycare surgery?',
                  a: 'Yes. In the majority of straightforward tympanoplasty procedures performed by Dr. Pradeep Vundavalli, modern microsurgical techniques allow patients to be admitted in the morning and discharged safely on the same evening with clear home-care instructions.'
                },
                {
                  q: 'What is the difference between dizziness and true vertigo?',
                  a: 'True vertigo is the false sensation that you or your surroundings are spinning or whirling, commonly caused by inner ear conditions like BPPV or Meniere\'s disease. General dizziness may feel like faintness or unsteadiness. Our vestibular evaluation differentiates between these causes.'
                },
                {
                  q: 'What is the recovery time after Coblation adenoid / tonsil surgery?',
                  a: 'Because cold Coblation operates at 40°C–70°C rather than the 400°C–600°C of conventional electrocautery, thermal injury is minimal. Children and adults experience significantly less throat discomfort and typically resume normal soft diets within 2 to 4 days.'
                },
                {
                  q: 'When is a Cochlear Implant recommended?',
                  a: 'A Cochlear Implant is indicated when sensorineural hearing loss is severe-to-profound and conventional digital hearing aids can no longer amplify sound clearly enough for speech comprehension.'
                },
                {
                  q: 'Does the hospital support cashless insurance?',
                  a: 'We assist patients with cashless mediclaim approvals and reimbursement documentation across major insurance providers and Third-Party Administrators (TPAs) for planned surgical procedures.'
                }
              ].map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="faq-row">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: isOpen ? '#0284C7' : '#0A192F',
                        cursor: 'pointer',
                        padding: '0.5rem 0'
                      }}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div style={{
                        paddingTop: '0.75rem',
                        paddingBottom: '0.5rem',
                        fontSize: '0.9375rem',
                        color: '#64748B',
                        lineHeight: 1.65
                      }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. "BOOK IN ONE MESSAGE." (Interactive WhatsApp Appointment Form)
          ========================================================================= */}
      <section id="booking" style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2col-split">
            {/* Left Column: Heading & Details */}
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                APPOINTMENTS
              </div>

              <h2 style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                fontWeight: 800,
                color: '#0A192F',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Book in one message.
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '440px'
              }}>
                Fill this in and WhatsApp opens with your request ready to send. Our desk confirms a morning or evening slot.
              </p>

              <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                <div><strong>Mon–Sat:</strong> 10:00 AM – 2:00 PM, 5:00 PM – 8:00 PM</div>
                <div style={{ marginTop: '0.25rem' }}><strong>Sunday:</strong> Emergency &amp; prior booking only</div>
              </div>
            </div>

            {/* Right Column: Form Fields */}
            <form
              onSubmit={handleWhatsAppBooking}
              className="responsive-card-padded"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 15px 35px -5px rgba(10, 25, 47, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* Row 1: Name & Phone */}
              <div className="form-2col">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    width: '100%'
                  }}
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    width: '100%'
                  }}
                />
              </div>

              {/* Row 2: Date & Slot */}
              <div className="form-2col">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    color: '#334155',
                    width: '100%'
                  }}
                />

                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#334155',
                    width: '100%'
                  }}
                >
                  <option value="Morning (10 AM – 2 PM)">Morning (10 AM – 2 PM)</option>
                  <option value="Evening (5 PM – 8 PM)">Evening (5 PM – 8 PM)</option>
                </select>
              </div>

              {/* Speciality Select */}
              <select
                value={formData.speciality}
                onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#334155',
                  width: '100%'
                }}
              >
                <option value="Vertigo & Balance">Vertigo &amp; Balance</option>
                <option value="Advanced Ear Surgery & Otology">Advanced Ear Surgery &amp; Otology</option>
                <option value="Hearing Reconstruction & Implants">Hearing Reconstruction &amp; Implants</option>
                <option value="Coblation Tonsils, Adenoids & Voice">Coblation Tonsils, Adenoids &amp; Voice</option>
                <option value="Sinus, Nose & Rhinoplasty">Sinus, Nose &amp; Rhinoplasty</option>
                <option value="Allergy, Snoring & Sleep Airway">Allergy, Snoring &amp; Sleep Airway</option>
              </select>

              {/* Symptoms Optional */}
              <textarea
                rows={3}
                placeholder="Briefly describe your symptoms (optional)"
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  resize: 'none',
                  width: '100%'
                }}
              />

              {/* Submit via WhatsApp */}
              <button
                type="submit"
                className="pill-dark"
                style={{
                  backgroundColor: '#0A192F',
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.95rem'
                }}
              >
                <MessageCircle size={18} />
                <span>Send on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
