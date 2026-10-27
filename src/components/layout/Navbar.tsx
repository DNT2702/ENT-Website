import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ear, Calendar, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const triggerAura = () => {
    const btn = document.getElementById('aura-assistant-btn');
    if (btn) btn.click();
  };

  const navLinks = [
    { label: 'Specialities', path: '/specialities' },
    { label: 'Symptoms', path: '/symptoms' },
    { label: 'Surgeon', path: '/surgeon' },
    { label: 'Your visit', path: '/your-visit' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.97)' : '#FFFFFF',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid #E2E8F0',
      boxShadow: isScrolled ? '0 4px 20px -2px rgba(10, 25, 47, 0.08)' : 'none',
      transition: 'all 0.25s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem',
        minHeight: '72px',
        gap: '0.75rem'
      }}>
        {/* Hospital Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0A192F 0%, #1D4ED8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)'
          }}>
            <Ear size={22} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#0A192F',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap'
            }}>
              Asian ENT
            </div>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: '#64748B',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              SUPERSPECIALITY • VIZAG
            </div>
          </div>
        </Link>

        {/* Center Desktop Navigation Pill Buttons */}
        <nav className="desktop-nav" style={{ alignItems: 'center', gap: '0.35rem', flexWrap: 'nowrap' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`nav-pill-btn ${isActive ? 'active' : ''}`}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          {/* Desktop-only action buttons */}
          <div className="desktop-action-btns" style={{ alignItems: 'center', gap: '0.55rem', flexWrap: 'nowrap' }}>
            {/* Ask Aura Assistant Button */}
            <button
              type="button"
              onClick={triggerAura}
              className="btn-nav-aura"
              title="Ask AI Assistant Aura"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              <Sparkles size={14} color="#0284C7" />
              <span>Ask Aura</span>
            </button>
          </div>

          {/* Primary CTA Book Visit Button (Routes to dedicated appointment booking page) */}
          <Link
            to="/book-appointment"
            className="btn-nav-book"
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            <Calendar size={15} />
            <span>Book Visit</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              color: 'var(--color-primary-navy)',
              backgroundColor: '#F8FAFC'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Full Buttons */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 12px 30px rgba(10, 25, 47, 0.1)'
        }}>
          {/* Nav Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: isActive ? '#0284C7' : '#0A192F',
                    backgroundColor: isActive ? '#F0F9FF' : 'transparent',
                    padding: '0.65rem 0.75rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0284C7' }} />}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons in Mobile Drawer */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            paddingTop: '1rem',
            borderTop: '1px solid #E2E8F0'
          }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerAura();
              }}
              className="btn-nav-aura"
              style={{ justifyContent: 'center', padding: '0.75rem' }}
            >
              <Sparkles size={15} color="#0284C7" />
              <span>Ask Aura, our assistant</span>
            </button>

            <Link
              to="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-nav-book"
              style={{ justifyContent: 'center', padding: '0.85rem' }}
            >
              <Calendar size={16} />
              <span>Book Consultation Visit</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
