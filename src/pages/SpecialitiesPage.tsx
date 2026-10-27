import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Search, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SPECIALTIES } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const SpecialitiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = SPECIALTIES.filter((spec) => {
    const term = searchTerm.toLowerCase();
    const matchesTitle = spec.title.toLowerCase().includes(term);
    const matchesDesc = spec.shortDescription.toLowerCase().includes(term);
    const matchesCondition = spec.conditions.some((c) => c.name.toLowerCase().includes(term));
    return matchesTitle || matchesDesc || matchesCondition;
  });

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
          <Breadcrumbs items={[{ label: 'Specialities & Clinical Pillars' }]} />
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
            <ShieldCheck size={15} />
            <span>Structured ENT Treatment Pathways</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            ENT Specialities &amp; Treatments
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Explore our six specialized clinical divisions in Seethammapeta, Visakhapatnam. Each specialty integrates thorough clinical diagnosis with tailored surgical and conservative management.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '480px', marginTop: '1.75rem', position: 'relative' }}>
            <input
              type="text"
              placeholder="Search by condition (e.g. Vertigo, Tympanoplasty, Sinus, Adenoids)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                outline: 'none',
                backdropFilter: 'blur(8px)'
              }}
            />
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </section>

      {/* Specialty Cards Grid */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {filteredSpecialties.length === 0 ? (
          <div style={{
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            padding: '3rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
              No matching specialities found
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Try searching for general terms like &quot;Ear&quot;, &quot;Hearing&quot;, &quot;Nose&quot;, or &quot;Snoring&quot;.
            </p>
            <button onClick={() => setSearchTerm('')} className="btn btn-navy">
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem'
          }}>
            {filteredSpecialties.map((spec) => (
              <div
                key={spec.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-primary-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Activity size={24} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                      {spec.pillarNumber}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '0.65rem' }}>
                    {spec.title}
                  </h2>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {spec.shortDescription}
                  </p>

                  {/* Conditions List */}
                  <div style={{
                    backgroundColor: 'var(--bg-surface-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      Key Pathologies Treated:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {spec.conditions.map((cond) => (
                        <li key={cond.slug} style={{ fontSize: '0.8125rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary-teal)' }} />
                          <strong>{cond.name}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clinical Highlights */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Diagnostic Focus:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {spec.diagnosticTechnologies.slice(0, 3).map((diag, i) => (
                        <span key={i} className="badge badge-navy">
                          {diag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    to={`/specialities/${spec.slug}`}
                    className="btn btn-outline"
                    style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                  >
                    <span>Full Specialty Guide</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to={`/book-appointment?speciality=${encodeURIComponent(spec.title)}`}
                    style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-teal)' }}
                  >
                    Consult Doctor &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
