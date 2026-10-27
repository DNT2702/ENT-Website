import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    path?: string;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
      <ol style={{
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.4rem',
        fontSize: '0.8125rem',
        color: 'var(--text-subtle)'
      }}>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'var(--text-subtle)',
              transition: 'color 0.15s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-teal)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-subtle)'}
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ChevronRight size={13} color="var(--border-medium)" />
              {isLast || !item.path ? (
                <span style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  style={{ color: 'var(--text-subtle)', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-teal)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-subtle)'}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
