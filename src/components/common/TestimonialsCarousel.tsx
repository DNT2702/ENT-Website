import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, User } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  review: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'S. Appa Rao',
    location: 'MVP Colony, Visakhapatnam',
    treatment: 'BPPV Vertigo & Balance Clinic',
    rating: 5,
    date: 'September 2026',
    review: 'I had been suffering from severe room-spinning dizziness whenever I lay down or turned my head for 3 months. Other clinics gave me regular pills with no relief. Dr. Pradeep Vundavalli tested my vestibular eye movements and performed the Epley maneuver right in the clinic. Within 48 hours, the spinning stopped completely. Very grateful for the accurate diagnosis!'
  },
  {
    id: 'rev-2',
    name: 'Lakshmi Kalyani',
    location: 'Seethammapeta, Visakhapatnam',
    treatment: 'Microscopic Tympanoplasty (Daycare)',
    rating: 5,
    date: 'August 2026',
    review: 'Had a long-standing hole in my left eardrum with recurrent discharge. Dr. Pradeep explained the cartilage grafting procedure on the monitor using the Zeiss microscope. The surgery was done in the morning and I was discharged the same evening. My eardrum has healed completely and my hearing is much clearer.'
  },
  {
    id: 'rev-3',
    name: 'Rajesh Varma',
    location: 'Gajuwaka, Visakhapatnam',
    treatment: '4K Endoscopic Sinus Surgery (FESS)',
    rating: 5,
    date: 'July 2026',
    review: 'Severe sinus headaches, blocked nose, and loss of smell for over 2 years. Dr. Pradeep performed FESS using Karl Storz 4K endoscopy with microdebrider. No facial swelling, minimal pain, and I can breathe effortlessly through both nostrils now. Highly recommended hospital for sinus conditions.'
  },
  {
    id: 'rev-4',
    name: 'Dr. Srinivas & Sowmya (Parents of Master Aarav, 6 yrs)',
    location: 'Dwaraka Nagar, Visakhapatnam',
    treatment: 'Cold Coblation Adenoidectomy',
    rating: 5,
    date: 'October 2026',
    review: 'Our 6-year-old son was snoring loudly, breathing through his mouth all night, and struggling in school. We were worried about traditional surgery pain. Dr. Pradeep recommended Coblation technology. Aarav was drinking juice within 3 hours after surgery and eating soft food the next morning with negligible discomfort. His nighttime breathing is completely silent now.'
  },
  {
    id: 'rev-5',
    name: 'Venkat Raman Murthy',
    location: 'Anakapalle / Vizag',
    treatment: 'Hearing Reconstruction & Audiology Lab',
    rating: 5,
    date: 'June 2026',
    review: 'Tested in their double-walled sound booth. Dr. Pradeep performed ossiculoplasty reconstructive surgery for my eroded hearing bone. The difference in my hearing comprehension at meetings is remarkable. Truly superspeciality standard in Visakhapatnam.'
  }
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: '3rem 2rem',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background quote motif */}
      <Quote
        size={140}
        color="#F1F5F9"
        style={{ position: 'absolute', top: '10px', right: '20px', zIndex: 0, opacity: 0.7 }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              color: '#F59E0B'
            }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" />
              ))}
            </div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
              5.0 / 5.0 Clinical Rating
            </span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: '#ECFDF5',
            color: '#065F46',
            fontSize: '0.75rem',
            fontWeight: 700
          }}>
            <CheckCircle2 size={14} color="#059669" />
            <span>Verified Patient Feedback</span>
          </div>
        </div>

        {/* Testimonial Quote */}
        <p style={{
          fontSize: '1.1875rem',
          color: 'var(--color-primary-navy)',
          lineHeight: 1.7,
          fontStyle: 'normal',
          marginBottom: '2rem',
          minHeight: '110px'
        }}>
          &ldquo;{current.review}&rdquo;
        </p>

        {/* Patient Author and Treatment Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1D4ED8 0%, #0284C7 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>
              <User size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                {current.name}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                {current.location} • <span style={{ color: 'var(--color-primary-teal)', fontWeight: 600 }}>{current.treatment}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.35rem', marginRight: '0.5rem' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: idx === currentIndex ? 'var(--color-primary-teal)' : 'var(--border-medium)',
                    transition: 'all 0.25s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-navy)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-teal)';
                e.currentTarget.style.color = 'var(--color-primary-teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.color = 'var(--color-primary-navy)';
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-navy)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-teal)';
                e.currentTarget.style.color = 'var(--color-primary-teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.color = 'var(--color-primary-navy)';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
