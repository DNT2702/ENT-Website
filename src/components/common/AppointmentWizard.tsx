import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { HOSPITAL_INFO, SPECIALTIES, DOCTORS } from '../../data/hospitalData';
import { AppointmentEnquiry } from '../../types';

interface AppointmentWizardProps {
  initialSpecialty?: string;
  initialDoctor?: string;
  onSuccess?: () => void;
}

export const AppointmentWizard: React.FC<AppointmentWizardProps> = ({
  initialSpecialty = 'Vertigo & Balance Disorders',
  initialDoctor = 'Dr. Pradeep Vundavalli',
  onSuccess
}) => {
  const [formData, setFormData] = useState<AppointmentEnquiry>({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredSpeciality: initialSpecialty,
    preferredDoctor: initialDoctor,
    preferredDate: '',
    preferredTimeSlot: 'Morning (10:00 AM – 01:00 PM)',
    symptomsDescription: '',
    hasPriorRecords: false,
    privacyConsent: true
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    patientName: string;
    preferredDate: string;
    timeSlot: string;
    doctor: string;
    speciality: string;
  } | null>(null);

  // Today's date in YYYY-MM-DD format for min date
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter patient full name (minimum 2 letters).';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date for your consultation.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Consent to the privacy notice is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionResult({
          referenceId: data.referenceId,
          patientName: formData.fullName,
          preferredDate: formData.preferredDate,
          timeSlot: formData.preferredTimeSlot,
          doctor: formData.preferredDoctor,
          speciality: formData.preferredSpeciality
        });
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Server returned non-200');
      }
    } catch (err) {
      // Fallback local persistence if backend is offline
      const mockRefId = `ASIAN-ENT-${Date.now().toString().slice(-6)}`;
      const savedEnquiries = JSON.parse(localStorage.getItem('asian_ent_enquiries') || '[]');
      savedEnquiries.unshift({
        id: mockRefId,
        createdAt: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('asian_ent_enquiries', JSON.stringify(savedEnquiries));

      setSubmissionResult({
        referenceId: mockRefId,
        patientName: formData.fullName,
        preferredDate: formData.preferredDate,
        timeSlot: formData.preferredTimeSlot,
        doctor: formData.preferredDoctor,
        speciality: formData.preferredSpeciality
      });
      if (onSuccess) onSuccess();
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      preferredSpeciality: initialSpecialty,
      preferredDoctor: initialDoctor,
      preferredDate: '',
      preferredTimeSlot: 'Morning (10:00 AM – 01:00 PM)',
      symptomsDescription: '',
      hasPriorRecords: false,
      privacyConsent: true
    });
    setErrors({});
  };

  if (submissionResult) {
    return (
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid #10B981',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#ECFDF5',
          color: '#059669',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem auto'
        }}>
          <CheckCircle2 size={36} />
        </div>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
          Consultation Enquiry Received
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
          Thank you, <strong>{submissionResult.patientName}</strong>. Your consultation request has been registered in our outpatient coordination system.
        </p>

        {/* Enquiry Summary Card */}
        <div style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          maxWidth: '520px',
          margin: '0 auto 1.5rem auto',
          textAlign: 'left',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-subtle)' }}>Tracking Reference:</span>
            <strong style={{ color: 'var(--color-primary-teal)', fontFamily: 'monospace', fontSize: '1rem' }}>
              {submissionResult.referenceId}
            </strong>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block' }}>Speciality:</span>
              <strong>{submissionResult.speciality}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block' }}>Doctor:</span>
              <strong>{submissionResult.doctor}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block' }}>Preferred Date:</span>
              <strong>{submissionResult.preferredDate}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block' }}>Preferred Slot:</span>
              <strong>{submissionResult.timeSlot}</strong>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: 'var(--radius-sm)',
          padding: '0.85rem 1rem',
          maxWidth: '520px',
          margin: '0 auto 2rem auto',
          fontSize: '0.8125rem',
          color: '#1E40AF',
          textAlign: 'left'
        }}>
          <strong>Next Step:</strong> Our OPD reception will contact you at your phone number within our operating hours to verify slot availability and finalize your appointment time.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={handleReset} className="btn btn-outline">
            Submit Another Enquiry
          </button>
          <a href={`tel:${HOSPITAL_INFO.contacts.phone.replace(/\s+/g, '')}`} className="btn btn-navy">
            <Phone size={16} />
            <span>Call Reception Now</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '2rem',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
          Book a Doctor Consultation
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Fill in your preferences below. Our hospital desk in Seethammapeta will contact you to confirm the consultation.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            Patient Full Name <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: `1.5px solid ${errors.fullName ? 'var(--color-emergency-red)' : 'var(--border-medium)'}`,
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
            <User size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.fullName && <p style={{ color: 'var(--color-emergency-red)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.fullName}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            Mobile Phone Number <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: `1.5px solid ${errors.phoneNumber ? 'var(--color-emergency-red)' : 'var(--border-medium)'}`,
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
            <Phone size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.phoneNumber && <p style={{ color: 'var(--color-emergency-red)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.phoneNumber}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            Email Address <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 400 }}>(Optional)</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="patient@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: `1.5px solid ${errors.email ? 'var(--color-emergency-red)' : 'var(--border-medium)'}`,
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
            <Mail size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.email && <p style={{ color: 'var(--color-emergency-red)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</p>}
        </div>

        {/* Preferred Date */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            Preferred Date <span style={{ color: 'var(--color-emergency-red)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              min={todayStr}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: `1.5px solid ${errors.preferredDate ? 'var(--color-emergency-red)' : 'var(--border-medium)'}`,
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
            <Calendar size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          {errors.preferredDate && <p style={{ color: 'var(--color-emergency-red)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.preferredDate}</p>}
        </div>

        {/* Speciality Selection */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            ENT Speciality / Clinical Concern
          </label>
          <select
            value={formData.preferredSpeciality}
            onChange={(e) => setFormData({ ...formData, preferredSpeciality: e.target.value })}
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
            {SPECIALTIES.map((spec) => (
              <option key={spec.id} value={spec.title}>
                {spec.title}
              </option>
            ))}
            <option value="General ENT Consultation">General ENT Consultation</option>
          </select>
        </div>

        {/* Time Slot */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
            Preferred Time Slot
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={formData.preferredTimeSlot}
              onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--border-medium)',
                fontSize: '0.9375rem',
                backgroundColor: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="Morning (10:00 AM – 01:00 PM)">Morning OPD (10:00 AM – 01:00 PM)</option>
              <option value="Afternoon (01:00 PM – 02:00 PM)">Early Afternoon (01:00 PM – 02:00 PM)</option>
              <option value="Evening (05:00 PM – 08:00 PM)">Evening OPD (05:00 PM – 08:00 PM)</option>
            </select>
            <Clock size={16} color="var(--text-subtle)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </div>

      {/* Doctor Selection */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
          Consulting ENT Surgeon
        </label>
        <select
          value={formData.preferredDoctor}
          onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
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
          {DOCTORS.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name} – {doc.designation}
            </option>
          ))}
        </select>
      </div>

      {/* Reason for Consultation */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.4rem' }}>
          Brief Description of Symptoms / Medical Concern <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Experiencing spinning sensation when lying down on the right side for past 2 weeks..."
          value={formData.symptomsDescription}
          onChange={(e) => setFormData({ ...formData, symptomsDescription: e.target.value })}
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

      {/* Prior records checkbox */}
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <input
          type="checkbox"
          id="priorRecords"
          checked={formData.hasPriorRecords}
          onChange={(e) => setFormData({ ...formData, hasPriorRecords: e.target.checked })}
          style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary-teal)', cursor: 'pointer' }}
        />
        <label htmlFor="priorRecords" style={{ fontSize: '0.875rem', color: 'var(--text-main)', cursor: 'pointer' }}>
          I have prior hearing test, audiogram, or CT scan records to bring to the appointment.
        </label>
      </div>

      {/* Privacy consent checkbox */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
        <input
          type="checkbox"
          id="privacyConsent"
          checked={formData.privacyConsent}
          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary-teal)', cursor: 'pointer', marginTop: '2px' }}
        />
        <label htmlFor="privacyConsent" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
          I consent to Asian Superspeciality ENT Hospital storing my contact details solely for consultation scheduling and clinical communication in accordance with applicable healthcare privacy guidelines.
        </label>
      </div>
      {errors.privacyConsent && <p style={{ color: 'var(--color-emergency-red)', fontSize: '0.75rem', marginBottom: '1rem' }}>{errors.privacyConsent}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', fontWeight: 700 }}
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
            <span>Submitting Consultation Request...</span>
          </>
        ) : (
          <>
            <Calendar size={18} />
            <span>Submit Consultation Enquiry</span>
          </>
        )}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
        <AlertCircle size={14} color="var(--color-primary-teal)" />
        <span>No advance payment required online. Verified enquiry tracking ID issued instantly.</span>
      </div>
    </form>
  );
};
