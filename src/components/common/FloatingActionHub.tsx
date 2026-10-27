import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS, FAQS } from '../../data/hospitalData';

export const FloatingActionHub: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'aura'; text: string }>>([
    {
      sender: 'aura',
      text: 'Hello! I am Aura, your virtual assistant for Asian Superspeciality ENT Hospital. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    'OPD Timings',
    'Dr. Pradeep Profile',
    'Book Appointment',
    'Cashless Insurance',
    'Vertigo Treatment'
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { sender: 'user' as const, text: query };
    let reply = "Our reception desk is available at +91 97050 33133. Would you like to schedule an appointment with Dr. Pradeep Vundavalli?";

    const lower = query.toLowerCase();
    if (lower.includes('timing') || lower.includes('hour') || lower.includes('time') || lower.includes('opd')) {
      reply = "Dr. Pradeep Vundavalli's OPD hours are Monday through Saturday: Morning 10:00 AM – 2:00 PM and Evening 5:00 PM – 8:00 PM. Sundays are reserved for emergencies & prior bookings.";
    } else if (lower.includes('doctor') || lower.includes('pradeep') || lower.includes('surgeon')) {
      reply = "Dr. Pradeep Vundavalli is our Chief ENT & Lateral Skull Base Surgeon with 15+ years of experience, fellowship in Otology from Bangalore, and lateral skull base training from Béziers, France.";
    } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('visit')) {
      reply = "You can book directly by filling the WhatsApp form on this page or calling +91 97050 33133. Our reception will confirm your morning or evening slot.";
    } else if (lower.includes('insurance') || lower.includes('cashless') || lower.includes('mediclaim') || lower.includes('tpa')) {
      reply = "Yes! We support cashless mediclaim across major insurance providers and TPAs for surgeries like Tympanoplasty, Mastoidectomy, FESS Sinus Surgery, Septoplasty, and Coblation Adenotonsillectomy.";
    } else if (lower.includes('vertigo') || lower.includes('dizziness') || lower.includes('bppv') || lower.includes('spinning')) {
      reply = "We offer a dedicated Vertigo & Balance Clinic equipped with Video Nystagmography (VNG), Dix-Hallpike testing, and targeted Epley maneuvers for BPPV.";
    } else if (lower.includes('ear') || lower.includes('discharge') || lower.includes('hole') || lower.includes('tympanoplasty')) {
      reply = "We specialize in microscopic ear surgery and tympanoplasty performed under Carl Zeiss operating microscopes, often as daycare procedures.";
    }

    setMessages((prev) => [...prev, userMsg, { sender: 'aura', text: reply }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Pill Button at Bottom Right (as seen in video) */}
      <button
        onClick={() => setIsOpen(true)}
        className="pill-dark floating-aura-btn"
        id="aura-assistant-btn"
      >
        <Sparkles size={16} color="#38BDF8" />
        <span>Ask Aura<span className="aura-full-text">, our assistant</span></span>
      </button>

      {/* Aura Assistant Dialog Modal */}
      {isOpen && (
        <div className="aura-modal-backdrop">
          <div className="aura-modal-content">
            {/* Header */}
            <div style={{
              backgroundColor: '#0A192F',
              color: '#FFFFFF',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={18} color="#38BDF8" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Aura</div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Hospital Assistant • Asian ENT</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#94A3B8',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Close Aura assistant"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div style={{
              flex: 1,
              padding: '1.25rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              backgroundColor: '#F8FAFC'
            }}>
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '0.75rem 1rem',
                    borderRadius: m.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    backgroundColor: m.sender === 'user' ? '#0A192F' : '#FFFFFF',
                    color: m.sender === 'user' ? '#FFFFFF' : '#1E293B',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    border: m.sender === 'aura' ? '1px solid #E2E8F0' : 'none',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div style={{
              padding: '0.65rem 1rem',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              gap: '0.4rem',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: '#F1F5F9',
                    color: '#334155',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: '1px solid #E2E8F0',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <input
                type="text"
                placeholder="Ask about doctors, timings, treatments..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.6rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="pill-dark"
                style={{ padding: '0.6rem 1rem', borderRadius: '12px' }}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
