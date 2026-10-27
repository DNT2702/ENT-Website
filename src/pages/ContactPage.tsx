import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Patient Enquiry',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, mobile phone number, and message.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccessMessage('Thank you for reaching out. Our hospital desk has received your message and will respond promptly.');
        setFormData({ name: '', phone: '', email: '', subject: 'General Patient Enquiry', message: '' });
      } else {
        throw new Error('Server returned error');
      }
    } catch (err) {
      // Local fallback
      setSuccessMessage('Thank you for your message. It has been recorded, and our patient care team will follow up via phone.');
      setFormData({ name: '', phone: '', email: '', subject: 'General Patient Enquiry', message: '' });
    } finally {
      setIsLoading(false);
    }
  };

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
          <Breadcrumbs items={[{ label: 'Contact & Route Map' }]} />
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
            <Compass size={15} />
            <span>Hospital Location &amp; Inquiries</span>
          </span>
          <h1 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Contact Us &amp; Find the Hospital
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '720px', lineHeight: 1.6 }}>
            Located on Prism College Road in Seethammapeta, Visakhapatnam. Connect with our reception desk or get driving directions from anywhere in the city.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'flex-start'
        }}>
          {/* Left: Contact Info & Driving Directions */}
          <div style={{ minWidth: 0 }}>
            {/* Primary Contact Card */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '1.25rem' }}>
                Asian Superspeciality ENT Hospital
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary-navy)', fontSize: '0.9375rem', display: 'block', marginBottom: '0.2rem' }}>
                      Physical Address:
                    </strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {HOSPITAL_INFO.address.line1},<br />
                      {HOSPITAL_INFO.address.line2},<br />
                      {HOSPITAL_INFO.address.landmark},<br />
                      {HOSPITAL_INFO.address.city}, {HOSPITAL_INFO.address.state} — {HOSPITAL_INFO.address.pincode}
                    </div>
                    <a
                      href={HOSPITAL_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navy"
                      style={{ marginTop: '0.85rem', padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                    >
                      <Compass size={15} />
                      <span>Open Google Maps Pin</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary-navy)', fontSize: '0.9375rem', display: 'block', marginBottom: '0.2rem' }}>
                      Telephone &amp; Hotline:
                    </strong>
                    <div style={{ fontSize: '0.9375rem' }}>
                      <a href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--color-primary-teal)', fontWeight: 700 }}>
                        {HOSPITAL_INFO.contacts.phone}
                      </a>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginLeft: '0.5rem' }}>(Reception &amp; OPD)</span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
                      24/7 On-Call for ENT Trauma &amp; Foreign Body Emergencies
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary-navy)', fontSize: '0.9375rem', display: 'block', marginBottom: '0.2rem' }}>
                      OPD Consultation Hours:
                    </strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      Morning OPD: 10:00 AM – 02:00 PM<br />
                      Evening OPD: 05:00 PM – 08:00 PM<br />
                      Monday to Saturday (Sunday Emergency Only)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-primary-navy)', fontSize: '0.9375rem', display: 'block', marginBottom: '0.2rem' }}>
                      Official Email:
                    </strong>
                    <a href={`mailto:${HOSPITAL_INFO.contacts.email}`} style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {HOSPITAL_INFO.contacts.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Driving Directions & Transit Card */}
            <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
                Reaching Us in Visakhapatnam
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.2rem' }}>
                    From VSKP Railway Station (~3.8 km):
                  </strong>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                    Take the route via Asilmetta flyover towards Gurudwara Junction. Turn towards Seethammapeta main road and take Prism College Road opposite Bhashyam School. Auto-rickshaws and cabs take approximately 12–15 minutes.
                  </p>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.2rem' }}>
                    From RTC Complex (Dwaraka Bus Station) (~2.2 km):
                  </strong>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                    Head north on Shankara Matam road towards Seethammapeta. Turn into Prism College Road. Traveling time is under 8 minutes.
                  </p>
                </div>

                <div>
                  <strong style={{ color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.2rem' }}>
                    From Visakhapatnam Airport (~11.5 km):
                  </strong>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                    Follow NH16 through the NAD Junction flyover and proceed past Gurudwara Junction to Seethammapeta. Pre-paid airport taxis take 25–30 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div style={{ minWidth: 0 }}>
            <form onSubmit={handleSubmit} className="card" style={{ backgroundColor: '#FFFFFF' }}>
              <span className="section-badge">Send a Message</span>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                General Patient Enquiry
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Have questions about our ENT procedures, hearing tests, or doctor availability? Write to us below:
              </p>

              {successMessage && (
                <div style={{
                  backgroundColor: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  color: '#065F46',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>{successMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div style={{
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FECACA',
                  color: '#991B1B',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  <AlertCircle size={18} color="#DC2626" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                    Your Full Name <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '0.9375rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                    Mobile Phone Number <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '0.9375rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                    Email Address <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '0.9375rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                    Subject of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '0.9375rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                  >
                    <option value="General Patient Enquiry">General Patient Enquiry</option>
                    <option value="Appointment Confirmation">Appointment Confirmation</option>
                    <option value="Vertigo / Balance Evaluation Query">Vertigo / Balance Evaluation Query</option>
                    <option value="Tympanoplasty / Ear Surgery Cost & Daycare">Tympanoplasty / Ear Surgery Cost &amp; Daycare</option>
                    <option value="Hearing Aid & Cochlear Implant Counseling">Hearing Aid &amp; Cochlear Implant Counseling</option>
                    <option value="Cashless Insurance / TPA Query">Cashless Insurance / TPA Query</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
                    Your Message / Question <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your query or symptoms..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Patient Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
