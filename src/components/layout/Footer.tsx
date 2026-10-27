import React from 'react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#071E3D',
      color: '#FFFFFF',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        {/* Brand Headline */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          marginBottom: '3rem'
        }}>
          Asian ENT.
        </div>

        {/* 3 Columns Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          {/* Col 1: VISIT */}
          <div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              VISIT
            </div>
            <p style={{
              fontSize: '0.9375rem',
              color: '#CBD5E1',
              lineHeight: 1.6,
              margin: 0
            }}>
              Asian ENT Hospital Building, Opp. Bhashyam School, Prism College Road, Rajendra Nagar, Seethammapeta, Visakhapatnam, AP 530016
            </p>
          </div>

          {/* Col 2: CONTACT */}
          <div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              CONTACT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9375rem', color: '#CBD5E1' }}>
              <div>
                <a href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`} style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                  {HOSPITAL_INFO.contacts.phone}
                </a>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}> • 24/7 triage</span>
              </div>
              <div>
                <a href="tel:08912555500" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                  0891-2555500
                </a>
              </div>
              <div>
                <a href={`mailto:${HOSPITAL_INFO.contacts.appointmentsEmail}`} style={{ color: '#38BDF8', textDecoration: 'none' }}>
                  {HOSPITAL_INFO.contacts.appointmentsEmail}
                </a>
              </div>
              <div>
                <a href={`mailto:${HOSPITAL_INFO.contacts.email}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                  {HOSPITAL_INFO.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: GETTING HERE */}
          <div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              GETTING HERE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Railway Station (VSKP)</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>~3.8 km • 12 min</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Dwaraka Bus Station</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>~2.2 km • 7 min</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#E2E8F0', fontWeight: 500 }}>Vizag Airport (VTZ)</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>~11.5 km • 25 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: 'rgba(255, 255, 255, 0.55)'
        }}>
          <div>
            &copy; 2026 Asian Superspeciality ENT Hospital, Visakhapatnam
          </div>
          <div>
            Information on this site is general guidance and not a substitute for a clinical consultation.
          </div>
        </div>
      </div>
    </footer>
  );
};
