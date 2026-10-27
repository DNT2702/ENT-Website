import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, CheckCircle, Activity, Ear, Stethoscope, ShieldCheck } from 'lucide-react';
import { SPECIALTIES } from '../../data/hospitalData';

interface SymptomOption {
  id: string;
  label: string;
  category: 'ear' | 'balance' | 'nose' | 'throat' | 'sleep';
  specialtySlug: string;
  specialtyName: string;
  recommendedEvaluation: string;
}

const SYMPTOMS: SymptomOption[] = [
  {
    id: 'sym-bppv',
    label: 'Room spinning when turning in bed or looking up',
    category: 'balance',
    specialtySlug: 'vertigo-balance',
    specialtyName: 'Vertigo & Balance Disorders',
    recommendedEvaluation: 'Bedside Dix-Hallpike positional testing & Epley Maneuver'
  },
  {
    id: 'sym-discharge',
    label: 'Recurrent ear discharge or known eardrum hole',
    category: 'ear',
    specialtySlug: 'ear-surgery-otology',
    specialtyName: 'Advanced Ear Surgery & Otology',
    recommendedEvaluation: 'High-definition Otomicroscopy & Pure Tone Audiogram'
  },
  {
    id: 'sym-hearing',
    label: 'Struggling to hear in noisy places or on phone calls',
    category: 'ear',
    specialtySlug: 'hearing-reconstruction-implants',
    specialtyName: 'Hearing Reconstruction & Implants',
    recommendedEvaluation: 'Soundproof booth Audiometry & Tympanometry evaluation'
  },
  {
    id: 'sym-sinus',
    label: 'Chronic facial pressure, nose block, or loss of smell',
    category: 'nose',
    specialtySlug: 'sinus-nose-rhinoplasty',
    specialtyName: 'Sinus, Nose & Rhinoplasty',
    recommendedEvaluation: 'Diagnostic 4K Nasal Endoscopy (DNE) & CT PNS'
  },
  {
    id: 'sym-voice',
    label: 'Voice hoarseness or roughness lasting > 3 weeks',
    category: 'throat',
    specialtySlug: 'coblation-tonsils-voice',
    specialtyName: 'Coblation Tonsils, Adenoid & Voice',
    recommendedEvaluation: 'Video Laryngoscopy / Stroboscopy vocal cord exam'
  },
  {
    id: 'sym-child-snore',
    label: 'Child mouth breathing, snoring, and restless sleep',
    category: 'sleep',
    specialtySlug: 'coblation-tonsils-voice',
    specialtyName: 'Coblation Tonsils, Adenoid & Voice',
    recommendedEvaluation: 'Gentle pediatric endoscopic examination & sleep assessment'
  },
  {
    id: 'sym-adult-apnea',
    label: 'Loud habitual snoring with gasping or daytime fatigue',
    category: 'sleep',
    specialtySlug: 'allergy-snoring-sleep',
    specialtyName: 'Allergy, Snoring & Sleep Airway',
    recommendedEvaluation: 'Comprehensive Airway Endoscopy & Overnight Sleep Study'
  }
];

export const SymptomChecker: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomOption>(SYMPTOMS[0]);

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: '2rem',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: 'var(--color-teal-soft)',
          color: 'var(--color-teal-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <HelpCircle size={18} />
        </div>
        <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal-dark)', letterSpacing: '0.05em' }}>
          Interactive Patient Triage
        </span>
      </div>

      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
        What symptoms are you experiencing?
      </h3>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Select your primary concern to view the corresponding clinical pathway and recommended diagnostic assessment:
      </p>

      {/* Symptom Selection Pills Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.65rem',
        marginBottom: '1.75rem'
      }}>
        {SYMPTOMS.map((sym) => {
          const isSelected = selectedSymptom.id === sym.id;
          return (
            <button
              key={sym.id}
              onClick={() => setSelectedSymptom(sym)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: isSelected ? 700 : 500,
                backgroundColor: isSelected ? 'var(--color-primary-navy)' : 'var(--bg-surface-subtle)',
                color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                border: isSelected ? '1px solid var(--color-primary-navy)' : '1px solid var(--border-medium)',
                transition: 'all 0.15s ease'
              }}
            >
              {isSelected && <CheckCircle size={14} color="#38BDF8" />}
              <span>{sym.label}</span>
            </button>
          );
        })}
      </div>

      {/* Recommended Care Pathway Result Card */}
      <div style={{
        backgroundColor: '#F0FDFA',
        border: '1.5px solid var(--color-teal-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal-dark)' }}>
              Recommended Clinical Specialty
            </span>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginTop: '0.15rem' }}>
              {selectedSymptom.specialtyName}
            </h4>
          </div>

          <Link
            to={`/specialities/${selectedSymptom.specialtySlug}`}
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          >
            <span>Explore Specialty</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          border: '1px solid #CCFBF1'
        }}>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', fontWeight: 600, marginBottom: '0.25rem' }}>
            Initial Diagnostic Recommendation:
          </div>
          <div style={{ fontSize: '0.9375rem', color: 'var(--text-main)', fontWeight: 600 }}>
            {selectedSymptom.recommendedEvaluation}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
            Every pathway begins with a focused clinical history and examination with Dr. Pradeep Vundavalli.
          </p>
          <Link
            to="/book-appointment"
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--color-teal-dark)',
              textDecoration: 'underline'
            }}
          >
            Schedule Consultation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
