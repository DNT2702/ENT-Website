import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem',
      backgroundColor: 'var(--bg-page)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '540px' }}>
        <div style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          color: 'var(--color-primary-navy)',
          fontFamily: 'var(--font-heading)',
          lineHeight: 1,
          marginBottom: '1rem'
        }}>
          404
        </div>
        <h1 style={{ fontSize: '1.75rem', color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          The page you are looking for may have been moved or updated. Use the links below to navigate back to the Asian Superspeciality ENT Hospital main sections:
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/book-appointment" className="btn btn-navy">
            <Calendar size={16} />
            <span>Book Consultation</span>
          </Link>
          <a href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`} className="btn btn-outline">
            <Phone size={16} />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </div>
  );
};
