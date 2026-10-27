import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Ear,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Eye,
  Sparkles
} from 'lucide-react';

interface PathwayItem {
  id: string;
  tabLabel: string;
  conditionName: string;
  specialtySlug: string;
  specialtyTitle: string;
  symptoms: string[];
  clinicalExamination: string[];
  treatmentPathway: string[];
  patientRecoveryOutcome: string;
}

const PATHWAYS: PathwayItem[] = [
  {
    id: 'pathway-vertigo',
    tabLabel: 'Vertigo & Dizziness',
    conditionName: 'Positional Vertigo (BPPV) & Vestibular Disorders',
    specialtySlug: 'vertigo-balance',
    specialtyTitle: 'Vertigo & Balance Disorders',
    symptoms: [
      'Violent room-spinning sensation when turning head in bed',
      'Loss of balance when walking or bending down',
      'Nausea or unsteadiness triggered by rapid posture changes'
    ],
    clinicalExamination: [
      'Infrared Video Nystagmography (VNG) eye-tracking',
      'Frenzel goggle bedside Dix-Hallpike positional testing',
      'Vestibular Ocular Reflex (VOR) and dynamic visual acuity'
    ],
    treatmentPathway: [
      'Canalith Particle Repositioning (Epley / Semont Maneuvers in clinic)',
      'Specific vestibular balance rehabilitation exercises',
      'Targeted medication only during acute vestibular crises'
    ],
    patientRecoveryOutcome: 'Over 92% of true canal BPPV cases achieve symptom resolution within 1 to 2 sessions without prolonged medication dependence.'
  },
  {
    id: 'pathway-ear',
    tabLabel: 'Eardrum Hole & Discharge',
    conditionName: 'Chronic Eardrum Perforation & Otitis Media',
    specialtySlug: 'ear-surgery-otology',
    specialtyTitle: 'Advanced Ear Surgery & Otology',
    symptoms: [
      'Persistent or recurrent thin/white ear discharge',
      'Muffled hearing or sound feeling distant in affected ear',
      'Fear of water entering the ear during head bath'
    ],
    clinicalExamination: [
      'Carl Zeiss high-definition diagnostic otomicroscopy',
      'Pure Tone Audiometry (air-bone gap assessment in sound booth)',
      'Digital video photographic recording of tympanic perforation'
    ],
    treatmentPathway: [
      'Aural toilet & culture-guided targeted medical therapy',
      'Minimally invasive Microscopic Tympanoplasty (same-day daycare)',
      'Temporalis fascia or tragal cartilage autograft grafting'
    ],
    patientRecoveryOutcome: 'Dry ear and intact eardrum restoration with over 98% graft take rate; sound transmission restored.'
  },
  {
    id: 'pathway-sinus',
    tabLabel: 'Sinus Block & Headaches',
    conditionName: 'Chronic Rhinosinusitis & Nasal Polyps',
    specialtySlug: 'sinus-nose-rhinoplasty',
    specialtyTitle: 'Sinus, Nose & Rhinoplasty',
    symptoms: [
      'Constant nasal congestion or inability to breathe freely',
      'Facial heaviness over cheeks and forehead with morning headache',
      'Loss or reduction of smell and thick post-nasal drip'
    ],
    clinicalExamination: [
      'Karl Storz 4K Diagnostic Nasal Endoscopy (0° / 30° / 70° optics)',
      'Coronal & axial high-resolution CT Paranasal Sinus review',
      'Airway patency assessment and allergy correlation'
    ],
    treatmentPathway: [
      'Functional Endoscopic Sinus Surgery (FESS) with mucosal preservation',
      'Microdebrider polyp clearance without external incisions',
      'Post-operative hypertonic saline sinus irrigations'
    ],
    patientRecoveryOutcome: 'Clear nasal breathing restored, pressure headaches eliminated, and normal sinus drainage re-established.'
  },
  {
    id: 'pathway-child',
    tabLabel: 'Child Snoring & Mouth Breathing',
    conditionName: 'Pediatric Adenoid & Tonsillar Hypertrophy',
    specialtySlug: 'coblation-tonsils-voice',
    specialtyTitle: 'Coblation Tonsils, Adenoid & Voice',
    symptoms: [
      'Child sleeps with mouth wide open and snores audibly',
      'Restless tossing in sleep or pauses in breathing (apnea)',
      'Frequent colds, ear blockages, or daytime hyperactivity'
    ],
    clinicalExamination: [
      'Gentle pediatric fiberoptic nasal endoscopy or lateral soft tissue X-ray',
      'Tonsillar grading (Friedman 1 to 4 scale)',
      'Eustachian tube function and tympanometric screening'
    ],
    treatmentPathway: [
      'Low-temperature radiofrequency Cold Coblation Adenoidectomy',
      'Tonsillotomy / Coblation intracapsular tonsil reduction',
      'Daycare procedure with return home on same evening'
    ],
    patientRecoveryOutcome: 'Minimal post-operative throat pain. Children eat soft food the next morning and breathe silently through the nose.'
  },
  {
    id: 'pathway-voice',
    tabLabel: 'Hoarseness & Voice Fatigue',
    conditionName: 'Vocal Cord Polyps, Nodules & Laryngeal Lesions',
    specialtySlug: 'coblation-tonsils-voice',
    specialtyTitle: 'Coblation Tonsils, Adenoid & Voice',
    symptoms: [
      'Hoarse, raspy, or breathy voice persisting for more than 3 weeks',
      'Throat strain or vocal fatigue after talking or teaching',
      'Loss of vocal range, pitch control, or sudden voice cracks'
    ],
    clinicalExamination: [
      'Video Laryngoscopy and Vocal Fold Stroboscopy',
      'Acoustic mucosal wave dynamic evaluation',
      'High-definition mucosal photography with patient review'
    ],
    treatmentPathway: [
      'Targeted voice rest and professional speech therapy protocols',
      'Microlaryngeal Surgery (MLS) with cold micro-instruments',
      'Anti-reflux management for underlying laryngopharyngeal reflux'
    ],
    patientRecoveryOutcome: 'Clear vocal timbre and effortless speaking voice restored without damaging delicate vocal fold layers.'
  }
];

export const InteractiveSelfCheck: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PATHWAYS[0].id);

  const current = PATHWAYS.find((p) => p.id === activeTab) || PATHWAYS[0];

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-xl)',
      border: '1.5px solid var(--border-subtle)',
      padding: '2.5rem',
      boxShadow: 'var(--shadow-md)',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: 'var(--color-teal-soft)',
          color: 'var(--color-primary-teal)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Sparkles size={20} />
        </div>
        <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-teal)', letterSpacing: '0.06em' }}>
          Interactive Care Pathway Explorer
        </span>
      </div>

      <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
        Explore Your Condition &amp; Exact Treatment Journey
      </h2>
      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
        Select your symptom category to see how Dr. Pradeep Vundavalli diagnoses the root cause and coordinates treatment:
      </p>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '1rem'
      }}>
        {PATHWAYS.map((p) => {
          const isActive = p.id === activeTab;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--color-primary-navy)' : 'var(--bg-surface-subtle)',
                color: isActive ? '#FFFFFF' : 'var(--text-main)',
                border: isActive ? '1px solid var(--color-primary-navy)' : '1px solid var(--border-medium)',
                boxShadow: isActive ? '0 4px 12px rgba(10, 37, 64, 0.25)' : 'none',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>{p.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Pathway Content Grid */}
      <div
        className="responsive-card-padded"
        style={{
          backgroundColor: 'var(--bg-surface-subtle)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-teal)' }}>
              Clinical Specialty Division
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginTop: '0.2rem' }}>
              {current.conditionName}
            </h3>
          </div>

          <Link
            to={`/specialities/${current.specialtySlug}`}
            className="btn btn-outline"
            style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
          >
            <span>Explore {current.specialtyTitle}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3-Column Clinical Comparison Card */}
        <div className="grid-auto-240" style={{ marginBottom: '1.5rem' }}>
          {/* Col 1: Symptoms */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.65rem' }}>
              <AlertTriangle size={16} />
              <span>What You Experience:</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem' }}>
              {current.symptoms.map((s, idx) => (
                <li key={idx} style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#DC2626', marginTop: '6px', flexShrink: 0 }} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Hospital Assessment */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0284C7', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.65rem' }}>
              <Eye size={16} />
              <span>How We Assess It:</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem' }}>
              {current.clinicalExamination.map((e, idx) => (
                <li key={idx} style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0284C7', marginTop: '6px', flexShrink: 0 }} />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatment */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary-teal)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.65rem' }}>
              <CheckCircle2 size={16} />
              <span>Tailored Treatment:</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8125rem' }}>
              {current.treatmentPathway.map((t, idx) => (
                <li key={idx} style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary-teal)', marginTop: '6px', flexShrink: 0 }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expected Recovery Outcome */}
        <div style={{
          backgroundColor: '#F0FDFA',
          border: '1.5px solid var(--color-teal-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.15rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
              Expected Clinical Outcome:
            </span>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-primary-navy)', fontWeight: 600, marginTop: '0.2rem' }}>
              {current.patientRecoveryOutcome}
            </div>
          </div>

          <Link
            to={`/book-appointment?speciality=${encodeURIComponent(current.specialtyTitle)}`}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem', flexShrink: 0 }}
          >
            <span>Book Consultation for This Issue</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
