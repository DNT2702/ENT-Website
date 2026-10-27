import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Ear,
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SymptomsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ear' | 'vertigo' | 'nose' | 'throat' | 'pediatric'>('all');

  const triggerAura = () => {
    const btn = document.getElementById('aura-assistant-btn');
    if (btn) btn.click();
  };

  const symptomData = [
    {
      id: 'bppv-vertigo',
      category: 'vertigo',
      categoryLabel: 'Vertigo & Balance',
      symptom: 'Room spins violently when turning in bed or looking up',
      condition: 'Benign Paroxysmal Positional Vertigo (BPPV)',
      urgency: 'Elective / Priority',
      badgeColor: '#0284C7',
      diagnosticTest: 'Dix-Hallpike positional testing & Video Nystagmography (VNG)',
      treatment: 'Canalith Repositioning (Epley Maneuver) — often resolved in 1–2 clinic sessions without medications.',
      specialist: 'Dr. Pradeep Vundavalli (Neurotology & Balance)'
    },
    {
      id: 'ear-discharge',
      category: 'ear',
      categoryLabel: 'Ear & Otology',
      symptom: 'Recurrent foul-smelling ear discharge, ear blockage, or known hole in the eardrum',
      condition: 'Chronic Suppurative Otitis Media (CSOM) / Tympanic Perforation',
      urgency: 'Priority',
      badgeColor: '#2563EB',
      diagnosticTest: 'High-definition Otomicroscopy & Pure Tone Audiogram',
      treatment: 'Daycare Tympanoplasty (microsurgical eardrum graft) to seal perforation and restore conductive hearing.',
      specialist: 'Gold Medalist Microsurgeon'
    },
    {
      id: 'sudden-hearing-loss',
      category: 'ear',
      categoryLabel: 'Ear & Otology',
      symptom: 'Sudden, unexplained drop in hearing in one ear, often noticed upon waking up',
      condition: 'Sudden Sensorineural Hearing Loss (SSNHL)',
      urgency: 'Medical Emergency (Treat within 72 hrs)',
      badgeColor: '#DC2626',
      diagnosticTest: 'Emergency Pure Tone Audiometry & High-Resolution MRI IAC',
      treatment: 'Immediate high-dose systemic corticosteroid therapy ± intratympanic steroid injections for inner ear rescue.',
      specialist: 'Acute ENT Triage'
    },
    {
      id: 'hearing-loss',
      category: 'ear',
      categoryLabel: 'Ear & Otology',
      symptom: 'Struggling to follow conversations in noisy rooms, turning TV volume excessively high, ringing in ears (tinnitus)',
      condition: 'Sensorineural or Conductive Hearing Impairment / Otosclerosis',
      urgency: 'Elective',
      badgeColor: '#0284C7',
      diagnosticTest: 'Soundproof Booth Pure Tone Audiometry, Tympanometry & Speech Audiometry',
      treatment: 'Stapedotomy with Teflon piston, advanced digital hearing reconstruction, or Cochlear Implantation evaluation.',
      specialist: 'Otology & Audiology Team'
    },
    {
      id: 'chronic-sinusitis',
      category: 'nose',
      categoryLabel: 'Nose & Sinus',
      symptom: 'Continuous nasal blockage, facial heaviness around eyes/cheeks, yellow/green discharge, reduced sense of smell (>12 weeks)',
      condition: 'Chronic Rhinosinusitis with or without Nasal Polyps / Deviated Septum (DNS)',
      urgency: 'Elective',
      badgeColor: '#0D9488',
      diagnosticTest: '4K Diagnostic Nasal Endoscopy (DNE) & CT Paranasal Sinuses (PNS)',
      treatment: 'Functional Endoscopic Sinus Surgery (FESS) and Daycare Septoplasty using cold micro-debrider.',
      specialist: 'Rhinology & Sinus Clinic'
    },
    {
      id: 'persistent-hoarseness',
      category: 'throat',
      categoryLabel: 'Throat & Voice',
      symptom: 'Rough, husky, or strained voice lasting longer than 3 weeks without improvement',
      condition: 'Vocal Cord Polyp, Nodule, Cyst, or Laryngeal Lesion',
      urgency: 'Priority',
      badgeColor: '#D97706',
      diagnosticTest: 'Flexible Video Laryngoscopy & Digital Stroboscopy',
      treatment: 'Microlaryngeal surgery (MLS) for vocal cord preservation and structured voice therapy rehabilitation.',
      specialist: 'Laryngology & Voice Suite'
    },
    {
      id: 'pediatric-snoring',
      category: 'pediatric',
      categoryLabel: 'Pediatric ENT',
      symptom: 'Child mouth-breathes continuously, snores heavily, wakes up choking, or suffers frequent ear infections',
      condition: 'Adenoid & Tonsillar Hypertrophy / Glue Ear (Otitis Media with Effusion)',
      urgency: 'Priority',
      badgeColor: '#7C3AED',
      diagnosticTest: 'Pediatric Flexible Fiberoptic Endoscopy & Tympanometry',
      treatment: 'Sub-total Coblation Adenotonsillectomy (at 40°C–70°C, virtually bloodless) ± Grommet insertion for instant ventilation.',
      specialist: 'Pediatric ENT Clinic'
    },
    {
      id: 'vestibular-migraine',
      category: 'vertigo',
      categoryLabel: 'Vertigo & Balance',
      symptom: 'Episodic unsteadiness accompanied by light sensitivity, sound sensitivity, or throbbing headache',
      condition: 'Vestibular Migraine / Meniere\'s Disease',
      urgency: 'Elective',
      badgeColor: '#0284C7',
      diagnosticTest: 'Comprehensive Vestibular Function Testing & Audiological battery',
      treatment: 'Dietary trigger modification, neurotological prophylaxis, and vestibular rehabilitation therapy (VRT).',
      specialist: 'Neurotology Clinic'
    }
  ];

  const filteredSymptoms = selectedCategory === 'all'
    ? symptomData
    : symptomData.filter((item) => item.category === selectedCategory);

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
          <Breadcrumbs items={[{ label: 'Symptoms & Clinical Care Triage' }]} />

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
            <Activity size={15} />
            <span>Symptom-To-Care Triage</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)'
          }}>
            What symptoms are you experiencing?
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#CBD5E1',
            maxWidth: '740px',
            lineHeight: 1.65,
            marginBottom: '2rem'
          }}>
            Match your symptoms to precise clinical conditions, recommended diagnostic tests, and proven treatment pathways under <strong>Dr. Pradeep Vundavalli</strong> at Asian Superspeciality ENT Hospital, Visakhapatnam.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Symptoms' },
              { id: 'ear', label: 'Ear & Hearing' },
              { id: 'vertigo', label: 'Vertigo & Balance' },
              { id: 'nose', label: 'Nose & Sinus' },
              { id: 'throat', label: 'Throat & Voice' },
              { id: 'pediatric', label: 'Pediatric ENT' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                style={{
                  padding: '0.6rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: selectedCategory === cat.id ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: selectedCategory === cat.id ? '#38BDF8' : 'rgba(255, 255, 255, 0.08)',
                  color: selectedCategory === cat.id ? '#0A192F' : '#E2E8F0',
                  boxShadow: selectedCategory === cat.id ? '0 4px 14px rgba(56, 189, 248, 0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Red Flag Notice Strip */}
      <div style={{ backgroundColor: '#FEF2F2', borderBottom: '1px solid #FECACA', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#EF4444',
              color: '#FFFFFF',
              flexShrink: 0
            }}>
              <ShieldAlert size={20} />
            </div>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#991B1B' }}>
                When is it an ENT Emergency?
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#B91C1C', lineHeight: 1.5 }}>
                Sudden hearing loss in one ear (within 72h), acute foreign body in ear/nose/throat, severe nosebleed, or stridor/breathing distress require immediate acute triage.
              </div>
            </div>
            <a
              href="tel:+919705033133"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.15rem',
                backgroundColor: '#DC2626',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Phone size={14} />
              <span>24/7 Hotline: +91 97050 33133</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Symptoms Grid */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredSymptoms.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px -4px rgba(10, 25, 47, 0.05)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div>
                {/* Category & Urgency Badges */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0284C7',
                    backgroundColor: '#F0F9FF',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '6px',
                    border: '1px solid #BAE6FD'
                  }}>
                    {item.categoryLabel}
                  </span>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: item.urgency.includes('Emergency') ? '#DC2626' : '#64748B',
                    backgroundColor: item.urgency.includes('Emergency') ? '#FEE2E2' : '#F1F5F9',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px'
                  }}>
                    {item.urgency}
                  </span>
                </div>

                {/* Symptom Presentation */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0A192F',
                  lineHeight: 1.35,
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  "{item.symptom}"
                </h3>

                {/* Probable Condition */}
                <div style={{
                  padding: '0.85rem 1rem',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    PROBABLE CLINICAL CONDITION
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
                    {item.condition}
                  </div>
                </div>

                {/* Diagnostic Test & Treatment Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                  <div>
                    <strong style={{ color: '#0A192F' }}>Diagnostic Gold Standard: </strong>
                    <span style={{ color: '#475569' }}>{item.diagnosticTest}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#0A192F' }}>Specialist Pathway: </strong>
                    <span style={{ color: '#475569' }}>{item.treatment}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid #F1F5F9',
                display: 'flex',
                gap: '0.65rem',
                alignItems: 'center'
              }}>
                <a
                  href={`https://wa.me/919705033133?text=${encodeURIComponent(`Hello Asian ENT Hospital, I am experiencing: ${item.symptom}. Please guide me with an appointment slot with Dr. Pradeep Vundavalli.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.65rem 1rem',
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                  }}
                >
                  <MessageCircle size={15} />
                  <span>Book for this Symptom</span>
                </a>

                <Link
                  to="/book-appointment"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.65rem 0.95rem',
                    backgroundColor: '#F1F5F9',
                    color: '#0A192F',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>OPD Slot</span>
                  <ArrowRight size={13} style={{ marginLeft: '0.3rem' }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with AI Assistant Aura */}
        <div style={{
          marginTop: '4rem',
          backgroundColor: '#0A192F',
          borderRadius: '24px',
          padding: '2.5rem',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#38BDF8', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <Sparkles size={16} />
              <span>Unsure which specialty fits your symptom?</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Ask Aura, our clinical ENT assistant.
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Type your symptoms in natural language, and Aura will instantly help match the right diagnostic test, surgeon slot, and hospital preparation checklist.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={triggerAura}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.85rem 1.6rem',
                backgroundColor: '#38BDF8',
                color: '#0A192F',
                borderRadius: '9999px',
                fontSize: '0.9375rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 8px 24px rgba(56, 189, 248, 0.35)'
              }}
            >
              <Sparkles size={17} />
              <span>Launch Aura Assistant</span>
            </button>

            <Link
              to="/your-visit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.85rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textDecoration: 'none'
              }}
            >
              <span>Plan Your Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
