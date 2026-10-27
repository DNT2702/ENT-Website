export interface Doctor {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
  fellowships: string[];
  memberships: string[];
  awards: string[];
  opdSchedule: {
    morning: string;
    evening: string;
    days: string;
    emergency: string;
  };
}

export interface ConditionDetail {
  name: string;
  slug: string;
  summary: string;
  symptoms: string[];
  diagnostics: string[];
  treatments: string[];
}

export interface Specialty {
  id: string;
  slug: string;
  pillarNumber: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  conditions: ConditionDetail[];
  clinicalHighlights: string[];
  diagnosticTechnologies: string[];
  patientGuidance: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'appointments' | 'surgeries' | 'hearing' | 'vertigo' | 'insurance';
}

export interface AppointmentEnquiry {
  fullName: string;
  phoneNumber: string;
  email?: string;
  preferredSpeciality: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTimeSlot: string;
  symptomsDescription?: string;
  hasPriorRecords: boolean;
  privacyConsent: boolean;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}
