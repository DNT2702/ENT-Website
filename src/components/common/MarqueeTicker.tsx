import React from 'react';
import { Award, ShieldCheck, Star, Activity, Sparkles, Clock, MapPin, Zap } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: 'Dr. Pradeep Vundavalli (Andhra Medical College Alumnus & Otology Fellow)', icon: Award },
    { text: '15+ Years of Dedicated ENT Surgical Excellence', icon: ShieldCheck },
    { text: 'Carl Zeiss High-Definition Operating Microscopes', icon: Sparkles },
    { text: 'Karl Storz 4K Endoscopic Sinus Surgery (FESS)', icon: Zap },
    { text: 'ANSI Double-Walled Soundproof Audiometry Lab', icon: Activity },
    { text: 'Cold Coblation Gentle Pediatric Tonsil & Adenoid Surgery', icon: Star },
    { text: 'Video Nystagmography (VNG) Vertigo & Balance Clinic', icon: Activity },
    { text: 'Opp. Bhashyam School, Prism College Road, Seethammapeta, Vizag', icon: MapPin },
    { text: '24/7 Acute Foreign Body & Trauma Emergency Triage', icon: Clock }
  ];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, idx) => (
          <div key={`a-${idx}`} className="marquee-item">
            <item.icon size={15} color="#2DD4BF" />
            <span>{item.text}</span>
            <span style={{ color: '#38BDF8', marginLeft: '1rem', marginRight: '1rem' }}>✦</span>
          </div>
        ))}
        {/* Duplicate track for seamless infinite scroll */}
        {items.map((item, idx) => (
          <div key={`b-${idx}`} className="marquee-item">
            <item.icon size={15} color="#2DD4BF" />
            <span>{item.text}</span>
            <span style={{ color: '#38BDF8', marginLeft: '1rem', marginRight: '1rem' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
