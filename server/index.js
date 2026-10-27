import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory + file persistence for appointment enquiries
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

function readData(filePath, defaultData = []) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultData;
}

function writeData(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    hospital: 'Asian Superspeciality ENT Hospital',
    location: 'Visakhapatnam, Andhra Pradesh',
    timestamp: new Date().toISOString()
  });
});

// Appointment Enquiry Endpoint
app.post('/api/appointments', (req, res) => {
  const {
    fullName,
    phoneNumber,
    email,
    preferredSpeciality,
    preferredDoctor,
    preferredDate,
    preferredTimeSlot,
    symptomsDescription,
    hasPriorRecords,
    privacyConsent
  } = req.body;

  // Validation
  const errors = [];
  if (!fullName || fullName.trim().length < 2) {
    errors.push('Full name is required (minimum 2 characters).');
  }
  if (!phoneNumber || !/^[0-9+ -]{10,15}$/.test(phoneNumber.trim())) {
    errors.push('Valid 10-digit mobile number is required.');
  }
  if (!preferredDate) {
    errors.push('Preferred appointment date is required.');
  }
  if (!privacyConsent) {
    errors.push('Consent to the patient privacy policy is required.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Generate Reference ID
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `ASIAN-ENT-${dateStr}-${randomSuffix}`;

  const appointmentRecord = {
    id: referenceId,
    createdAt: new Date().toISOString(),
    status: 'PENDING_CONFIRMATION',
    fullName: fullName.trim(),
    phoneNumber: phoneNumber.trim(),
    email: email ? email.trim() : null,
    preferredSpeciality: preferredSpeciality || 'General ENT Consultation',
    preferredDoctor: preferredDoctor || 'Dr. Pradeep Vundavalli',
    preferredDate,
    preferredTimeSlot: preferredTimeSlot || 'Morning (10:00 AM - 1:00 PM)',
    symptomsDescription: symptomsDescription ? symptomsDescription.trim() : '',
    hasPriorRecords: !!hasPriorRecords,
    notes: 'Enquiry received. Reception desk will call to confirm slot availability.'
  };

  const allAppointments = readData(APPOINTMENTS_FILE);
  allAppointments.unshift(appointmentRecord);
  writeData(APPOINTMENTS_FILE, allAppointments);

  console.log(`[Appointment Enquiry Created] Ref: ${referenceId} for ${fullName} (${phoneNumber})`);

  return res.status(201).json({
    success: true,
    message: 'Your consultation enquiry has been recorded successfully. Our hospital coordination desk will contact you via phone/WhatsApp to confirm your final consultation time slot.',
    referenceId,
    details: {
      patientName: appointmentRecord.fullName,
      preferredDate: appointmentRecord.preferredDate,
      timeSlot: appointmentRecord.preferredTimeSlot,
      doctor: appointmentRecord.preferredDoctor,
      speciality: appointmentRecord.preferredSpeciality,
      status: 'Enquiry Received - Coordination Pending'
    }
  });
});

// Contact / General Enquiry Endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone number, and enquiry message are required.'
    });
  }

  const contactRecord = {
    id: `MSG-${Date.now()}`,
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    phone: phone.trim(),
    email: email ? email.trim() : null,
    subject: subject || 'General Patient Enquiry',
    message: message.trim()
  };

  const contacts = readData(CONTACTS_FILE);
  contacts.unshift(contactRecord);
  writeData(CONTACTS_FILE, contacts);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out to Asian Superspeciality ENT Hospital. Our patient care team will get back to you shortly.'
  });
});

// Doctors API
app.get('/api/doctors', (req, res) => {
  res.json({
    success: true,
    doctors: [
      {
        id: 'dr-pradeep-vundavalli',
        name: 'Dr. Pradeep Vundavalli',
        title: 'Chief ENT, Otology & Lateral Skull Base Surgeon',
        qualifications: 'MBBS (AMC), MS (ENT), Fellowship in Otology (Bangalore), Lateral Skull Base Surgery Training (Béziers, France)',
        experienceYears: '15+',
        opdTimings: {
          morning: '10:00 AM - 02:00 PM',
          evening: '05:00 PM - 08:00 PM',
          days: 'Monday to Saturday (Sunday Emergency Only)'
        },
        specialties: [
          'Advanced Ear Surgery & Tympanoplasty',
          'Vertigo & Balance Disorders (VNG)',
          'Cochlear Implantation & Hearing Reconstruction',
          'Lateral Skull Base Surgery',
          'Endoscopic Sinus Surgery (FESS)',
          'Coblation Tonsil, Adenoid & Voice Care'
        ],
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
    ]
  });
});

// Serve static in production
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Asian Superspeciality ENT Hospital Server running on port ${PORT}`);
});
