import React from 'react';
import { Award, Users, CheckCircle, Star, ShieldCheck } from 'lucide-react';

export const StatsCounterBar: React.FC = () => {
  const stats = [
    {
      value: '15+',
      label: 'Years Surgical Practice',
      subtext: 'Specialist Clinical Leadership',
      icon: Award,
      color: '#2563EB'
    },
    {
      value: '10,000+',
      label: 'Micro-Surgeries Performed',
      subtext: 'Ear, Sinus & Pediatric Procedures',
      icon: CheckCircle,
      color: '#0284C7'
    },
    {
      value: '99.2%',
      label: 'Tympanic Graft Success',
      subtext: 'Microscopic Cartilage Reconstruction',
      icon: ShieldCheck,
      color: '#10B981'
    },
    {
      value: '4.9 ★',
      label: 'Google Patient Rating',
      subtext: '850+ Verified Google Reviews',
      icon: Star,
      color: '#F59E0B'
    },
    {
      value: '6 Pillars',
      label: 'Focused ENT Divisions',
      subtext: 'Coordinated Specialist Pathways',
      icon: Users,
      color: '#6366F1'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: '2.5rem 1.5rem',
      boxShadow: '0 20px 40px -15px rgba(10, 37, 64, 0.08)',
      marginTop: '-2.5rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        alignItems: 'center'
      }}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              borderRight: idx !== stats.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              transition: 'transform 0.2s'
            }}
            className="stat-box"
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: stat.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.75rem auto',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <stat.icon size={22} />
            </div>

            <div style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.1,
              marginBottom: '0.35rem',
              letterSpacing: '-0.02em'
            }}>
              {stat.value}
            </div>

            <div style={{
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.2rem'
            }}>
              {stat.label}
            </div>

            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-subtle)'
            }}>
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stat-box {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 1.25rem;
          }
          .stat-box:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
};
