import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  AlertCircle,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Calendar,
  Phone,
  ShieldCheck,
  Ear
} from 'lucide-react';
import { FAQS, HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SymptomChecker } from '../components/common/SymptomChecker';

export const PatientInfoPage: React.FC = () => {
  const [activeFaqCategory, setActiveFaqCategory] = useState<'all' | 'appointments' | 'surgeries' | 'hearing' | 'vertigo' | 'insurance'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const filteredFaqs = activeFaqCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeFaqCategory);

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
          <Breadcrumbs items={[{ label: 'Patient Information & Guides' }]} />
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
            <FileText size={15} />
            <span>Patient Resources &amp; Preparation</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Patient Information &amp; Clinical Guides
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Everything you need to know before visiting Asian Superspeciality ENT Hospital. Preparing for your consultation, diagnostic testing guidelines, cashless insurance, and post-operative ear care.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* Section 1: What to Bring & Test Preparation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {/* Card 1: Checklist */}
          <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
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
              <CheckCircle2 size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
              What to Bring to Your Consultation
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              To help Dr. Pradeep Vundavalli understand your medical history accurately, please carry:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Any previous ENT prescriptions, ear drops, or discharge summaries.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Prior Audiograms, Tympanometry test graphs, or BERA reports.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>CT Temporal Bone / CT PNS scan films and radiological reports.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Valid Government Photo ID (Aadhaar / Voter ID / Passport) for registration.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Health insurance e-card or policy document if seeking cashless TPA approval.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Test Preparation Rules */}
          <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: '#FEF2F2',
              color: 'var(--color-emergency-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <AlertCircle size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
              Diagnostic Testing Guidelines
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Certain medications can suppress vestibular reflexes or skin sensitivity:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.2rem' }}>
                  Vertigo / VNG Testing:
                </strong>
                <span style={{ color: 'var(--text-muted)' }}>
                  Avoid vestibular suppressant tablets (like Cinnarizine or Betahistine) for 24 hours prior to testing (unless advised otherwise by your doctor), so inner ear responses are measurable.
                </span>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.2rem' }}>
                  Skin Prick Allergy Testing:
                </strong>
                <span style={{ color: 'var(--text-muted)' }}>
                  Discontinue oral antihistamines (e.g. Cetirizine, Levocetirizine, Fexofenadine) 3–5 days prior to skin prick testing.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Cashless Insurance & TPA */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-subtle)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '3.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'var(--color-teal-soft)',
              color: 'var(--color-primary-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CreditCard size={22} />
            </div>
            <div>
              <span className="section-badge" style={{ marginBottom: 0 }}>Financial Guidance</span>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary-navy)' }}>
                Cashless Mediclaim &amp; Insurance Assistance
              </h2>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '820px' }}>
            Asian Superspeciality ENT Hospital assists patients with documentation for cashless pre-authorization and reimbursement claims across major health insurance providers and Third-Party Administrators (TPAs) for planned surgical procedures (Tympanoplasty, Mastoidectomy, FESS Sinus Surgery, Septoplasty, and Coblation Adenotonsillectomy).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            backgroundColor: 'var(--bg-surface-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Step 1: Consultation
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                Surgeon assesses condition and issues clinical admission advice.
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Step 2: Pre-Authorization
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                Reception submits estimate &amp; clinical notes to your TPA/insurer.
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Step 3: Approval
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                TPA issues initial approval letter before planned surgical procedure.
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Step 4: Discharge &amp; Claim
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                Complete discharge summary &amp; bills shared for final cashless settlement.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
              *Subject to policy terms, waiting periods, and insurer pre-authorization guidelines.
            </div>
            <a href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`} className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
              <Phone size={15} />
              <span>Contact TPA Helpdesk</span>
            </a>
          </div>
        </div>

        {/* Section 3: Post-Operative Ear Precautions */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3.5rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
            Post-Operative Ear Surgery Instructions (Tympanoplasty / Mastoid)
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Essential home precautions following eardrum or mastoid surgery to protect your healing graft:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
                1. Strict Water Precautions
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Do NOT allow water to enter the operated ear while bathing or washing hair. Coat a cotton ball with vaseline or petroleum jelly and place it gently at the ear opening.
              </p>
            </div>

            <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
                2. Do Not Blow Your Nose
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Vigorous nose-blowing creates positive pressure across the Eustachian tube, which can displace the newly placed eardrum graft. Sneeze with your mouth open.
              </p>
            </div>

            <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
                3. Avoid Heavy Straining
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Refrain from lifting heavy objects, vigorous gym workouts, and swimming for 4 to 6 weeks until the surgeon confirms complete graft integration.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Interactive Symptom Checker & Triage */}
        <div id="symptom-checker" style={{ marginBottom: '4rem' }}>
          <div className="section-title-wrap">
            <span className="section-badge">Self Assessment</span>
            <h2 className="section-title">Online ENT Symptom Triage</h2>
            <p className="section-lead">
              Identify your primary symptoms to view recommended diagnostic pathways and specialist care.
            </p>
          </div>
          <SymptomChecker />
        </div>

        {/* Section 5: Comprehensive FAQs */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-title-wrap">
            <span className="section-badge">Comprehensive Answers</span>
            <h2 className="section-title">Patient Frequently Asked Questions</h2>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}>
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'appointments', label: 'Appointments' },
              { id: 'surgeries', label: 'Surgeries' },
              { id: 'vertigo', label: 'Vertigo' },
              { id: 'hearing', label: 'Hearing Implants' },
              { id: 'insurance', label: 'Insurance' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFaqCategory(cat.id as any)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: activeFaqCategory === cat.id ? 700 : 500,
                  backgroundColor: activeFaqCategory === cat.id ? 'var(--color-primary-teal)' : '#FFFFFF',
                  color: activeFaqCategory === cat.id ? '#FFFFFF' : 'var(--text-main)',
                  border: '1px solid var(--border-medium)',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: isOpen ? 'var(--color-primary-teal)' : 'var(--color-primary-navy)'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
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
                      padding: '0 1.25rem 1.25rem 1.25rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-subtle)'
                    }}>
                      <div style={{ paddingTop: '0.85rem' }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/book-appointment" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              <Calendar size={18} />
              <span>Book Doctor Consultation Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
