import { Doctor, Specialty, Facility, FAQ } from '../types';

export const HOSPITAL_INFO = {
  name: 'Asian Superspeciality ENT Hospital',
  shortName: 'Asian ENT Hospital',
  tagline: 'Advanced ENT, Otology, Neurotology & Skull Base Care',
  address: {
    line1: 'Asian ENT Hospital Building',
    line2: 'Opposite Bhashyam School, Prism College Road',
    landmark: 'Rajendra Nagar, Seethammapeta',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530016',
    country: 'India'
  },
  contacts: {
    phone: '+91 97050 33133',
    phoneFormatted: '+91 97050 33133',
    landline: '0891-2555500',
    emergency: '+91 97050 33133',
    email: 'contact@asianenthospital.com',
    appointmentsEmail: 'appointments@asianenthospital.com'
  },
  timings: {
    opd: 'Monday - Saturday: 9:00 AM - 8:00 PM',
    morningSlot: '10:00 AM - 2:00 PM',
    eveningSlot: '5:00 PM - 8:00 PM',
    sunday: 'Emergency & Prior Appointment Only',
    emergency: '24/7 Acute Triage & Foreign Body Care'
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Asian+Superspeciality+ENT+Hospital+Visakhapatnam'
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-pradeep-vundavalli',
    name: 'Dr. Pradeep Vundavalli',
    designation: 'Chief ENT, Otology & Lateral Skull Base Surgeon',
    qualifications: 'MBBS, MS (ENT), Fellowship in Otology, Trained in Lateral Skull Base Surgery (France)',
    experience: '15+ Years of Dedicated Clinical & Surgical Experience',
    specialties: [
      'Advanced Ear Microsurgery & Tympanoplasty',
      'Neurotology & Vestibular Disorders (Vertigo)',
      'Cochlear Implants & Hearing Reconstruction',
      'Lateral Skull Base Surgery & Acoustic Neuroma',
      'Endoscopic Sinus Surgery (FESS)',
      'Coblation Adenotonsillectomy & Voice Surgery'
    ],
    bio: 'Dr. Pradeep Vundavalli is a distinguished ENT surgeon with advanced fellowship training in Otology from Vijaya ENT Hospital, Bangalore, and specialized international training in Lateral Skull Base Surgery at the renowned Champeux Clinic in Béziers, France. He leads Asian Superspeciality ENT Hospital with a patient-centric, evidence-based approach, combining state-of-the-art diagnostic technology with surgical precision.',
    image: '/images/dr-pradeep.jpg',
    fellowships: [
      'Fellowship in Otology – Vijaya ENT Hospital, Bangalore (2009)',
      'Advanced Lateral Skull Base Surgery Training – Champeux Clinic, Béziers, France (2012)',
      'Advanced Cochlear Implant Surgical Training'
    ],
    memberships: [
      'Association of Otolaryngologists of India (AOI)',
      'Indian Society of Otology (ISO)',
      'Cochlear Implant Group of India (CIGI)',
      'Skull Base Society of India (SBSI)',
      'Politzer Society (International Otology Society, Europe)',
      'European Academy of Otorhinolaryngology - Head & Neck Surgery (EAOHNS)',
      'Indian Association of Sleep Surgeons (IASS)'
    ],
    awards: [
      'Gold Medalist in MS Otorhinolaryngology, Andhra Medical College',
      'Author of clinical papers on Chronic Suppurative Otitis Media & Vertigo assessment',
      'Invited Faculty at National ENT & Skull Base Workshops'
    ],
    opdSchedule: {
      morning: '10:00 AM – 02:00 PM',
      evening: '05:00 PM – 08:00 PM',
      days: 'Monday through Saturday',
      emergency: '24/7 On-Call for ENT Trauma & Airway Foreign Bodies'
    }
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'vertigo-balance',
    slug: 'vertigo-balance',
    pillarNumber: 'Pillar One',
    title: 'Vertigo & Balance Disorders',
    shortDescription: 'Structured clinical evaluation of spinning sensations, BPPV, Meniere’s disease, vestibular migraine, and unsteadiness.',
    fullDescription: 'Balance disorders are frequently misunderstood and treated with generic tablets. At Asian Superspeciality ENT Hospital, our Vertigo & Vestibular Clinic adopts a structured, physiological approach. By differentiating peripheral inner-ear causes from central vestibular issues, we deliver precision diagnostic assessments and targeted canalith repositioning therapy.',
    iconName: 'Activity',
    clinicalHighlights: [
      'Detailed Vestibular Ocular Reflex (VOR) assessment',
      'Bedside positional testing with Frenzel / Video goggles',
      'Epley, Semont, and Barbecue canalith repositioning maneuvers for BPPV',
      'Dietary, lifestyle, and pharmacological management of Meniere’s disease & Vestibular Migraine',
      'Customized Vestibular Rehabilitation Therapy (VRT) protocols'
    ],
    diagnosticTechnologies: [
      'Video Nystagmography (VNG)',
      'Pure Tone Audiometry (PTA) for hearing-balance correlation',
      'Impedance Tympanometry',
      'Vestibular Evoked Myogenic Potentials (VEMP) referral guidance'
    ],
    patientGuidance: 'Please do not consume vestibular sedative medications 24 hours prior to your vertigo evaluation (unless critically advised by your physician), as this allows for accurate diagnostic tracking.',
    conditions: [
      {
        name: 'Benign Paroxysmal Positional Vertigo (BPPV)',
        slug: 'bppv',
        summary: 'Brief, intense episodes of spinning triggered by head position changes (lying down, turning in bed, looking up).',
        symptoms: ['Rotational dizziness lasting 30-60 seconds', 'Nausea on head turn', 'Imbalance when standing up'],
        diagnostics: ['Dix-Hallpike Test', 'Supine Roll Test'],
        treatments: ['Epley Particle Repositioning', 'Semont Maneuver', 'Brandt-Daroff home exercises']
      },
      {
        name: 'Meniere’s Disease',
        slug: 'menieres-disease',
        summary: 'Inner ear fluid buildup causing fluctuating hearing loss, episodic vertigo attacks, and ear fullness.',
        symptoms: ['Episodic vertigo lasting hours', 'Fluctuating low-frequency hearing loss', 'Tinnitus (roaring noise)', 'Aural fullness'],
        diagnostics: ['Pure Tone Audiogram', 'Electrocochleography review', 'MRI IAM protocol'],
        treatments: ['Low-sodium dietary regimen', 'Medical diuretic therapy', 'Intratympanic dexamethasone / gentamicin injections', 'Endolymphatic sac surgery']
      },
      {
        name: 'Vestibular Migraine',
        slug: 'vestibular-migraine',
        summary: 'Dizziness and balance disruption linked to migraine pathways, with or without typical headaches.',
        symptoms: ['Motion sensitivity', 'Unsteadiness lasting minutes to days', 'Photophobia or phonophobia', 'Lightheadedness'],
        diagnostics: ['Clinical neurological-otological examination', 'Trigger mapping'],
        treatments: ['Migraine prophylactic protocols', 'Sleep and dietary trigger management', 'Vestibular rehabilitation']
      }
    ]
  },
  {
    id: 'ear-surgery-otology',
    slug: 'ear-surgery-otology',
    pillarNumber: 'Pillar Two',
    title: 'Advanced Ear Surgery & Otology',
    shortDescription: 'High-precision microscopic microsurgery for eardrum perforations, chronic ear discharge, cholesteatoma, and facial nerve disorders.',
    fullDescription: 'Using advanced Carl Zeiss surgical operating microscopes and delicate micro-instruments, Dr. Pradeep Vundavalli performs reconstructive ear surgeries designed to eradicate infection, prevent intracranial complications, and restore acoustic conduction.',
    iconName: 'ScanLine',
    clinicalHighlights: [
      'Minimally invasive permeatal and post-aural surgical approaches',
      'Autologous temporalis fascia and tragal cartilage grafting',
      'Canal Wall Down (CWD) and Canal Wall Up (CWU) mastoidectomy for cholesteatoma',
      'Facial nerve monitoring during complex mastoid surgery',
      'Stapedotomy for otosclerosis hearing restoration'
    ],
    diagnosticTechnologies: [
      'High-Resolution CT Temporal Bone (HRCT) analysis',
      'Diagnostic Otomicroscopy with HD camera recording',
      'Pre- and Post-operative Pure Tone Audiometry'
    ],
    patientGuidance: 'Keep the affected ear strictly dry before and after surgical procedures. Avoid blowing the nose vigorously if you have an active eardrum perforation.',
    conditions: [
      {
        name: 'Eardrum Perforation (Chronic Otitis Media)',
        slug: 'tympanoplasty',
        summary: 'Hole in the tympanic membrane resulting in recurrent ear discharge and conductive hearing deficit.',
        symptoms: ['Persistent or intermittent ear discharge', 'Decreased hearing', 'Ear fullness'],
        diagnostics: ['Otomicroscopy', 'Audiogram', 'EAC swab culture'],
        treatments: ['Microscopic Tympanoplasty', 'Cartilage tympanoplasty', 'Medical aural toilet']
      },
      {
        name: 'Cholesteatoma',
        slug: 'cholesteatoma',
        summary: 'Destructive skin-lined cyst in the middle ear and mastoid bone that can erode hearing bones and inner ear structures.',
        symptoms: ['Foul-smelling ear discharge', 'Progressive hearing loss', 'Ear pain or deep mastoid ache'],
        diagnostics: ['HRCT Temporal Bone', 'Diagnostic Otomicroscopy'],
        treatments: ['Cortical & Radical Mastoidectomy', 'Middle ear reconstruction', 'Regular cavity surveillance']
      },
      {
        name: 'Otosclerosis',
        slug: 'otosclerosis',
        summary: 'Abnormal bone growth around the stapes bone causing stiffened sound conduction in young and middle-aged adults.',
        symptoms: ['Gradual bilateral conductive hearing loss', 'Better hearing in noisy environments (Paracusis Willisii)', 'Low-pitched tinnitus'],
        diagnostics: ['Audiometry with Carhart notch', 'Impedance testing (As curve)'],
        treatments: ['Micro-Stapedotomy with Teflon piston prosthesis', 'Hearing aid amplification']
      }
    ]
  },
  {
    id: 'hearing-reconstruction-implants',
    slug: 'hearing-reconstruction-implants',
    pillarNumber: 'Pillar Three',
    title: 'Hearing Reconstruction & Implants',
    shortDescription: 'Comprehensive hearing restoration pathways including ossiculoplasty, cochlear implantation, and bone conduction devices.',
    fullDescription: 'Asian Superspeciality ENT Hospital offers dedicated hearing rehabilitation for children and adults experiencing moderate, severe, or profound hearing loss. From reconstructive middle ear ossiculoplasty to surgical cochlear implantation, our multidisciplinary team coordinates surgical placement, post-operative mapping, and auditory rehabilitation.',
    iconName: 'Ear',
    clinicalHighlights: [
      'Total and Partial Ossicular Replacement Prostheses (TORP / PORP)',
      'Pediatric and adult Cochlear Implant evaluations',
      'Surgical minimally invasive cochleostomy and round window insertion',
      'Bone Anchored Hearing Solutions (BAHA / Bone conduction)',
      'Acoustic soundproof booth audiometry screening'
    ],
    diagnosticTechnologies: [
      'Calibrated Pure Tone Audiometry (PTA)',
      'Speech Audiometry & Discrimination Scores',
      'Brainstem Evoked Response Audiometry (BERA / ABR)',
      'Otoacoustic Emissions (OAE) newborn hearing screen'
    ],
    patientGuidance: 'Early identification of pediatric hearing loss is crucial for natural speech development. Any child with delayed speech or responsiveness should be screened promptly.',
    conditions: [
      {
        name: 'Severe to Profound Sensorineural Hearing Loss',
        slug: 'sensorineural-hearing-loss',
        summary: 'Damage to inner ear hair cells or auditory nerve preventing conventional hearing aid effectiveness.',
        symptoms: ['Inability to understand speech', 'Severe struggle on telephone', 'Isolation or social withdrawal'],
        diagnostics: ['BERA / ABR', 'OAE', 'High-Resolution MRI Inner Ear'],
        treatments: ['Multi-channel Cochlear Implantation', 'Digital high-power hearing aids', 'Auditory-Verbal Therapy']
      },
      {
        name: 'Ossicular Chain Discontinuity',
        slug: 'ossiculoplasty',
        summary: 'Erosion or disconnection of the delicate middle ear bones (malleus, incus, stapes) due to infection or trauma.',
        symptoms: ['Significant conductive hearing loss with intact or repaired eardrum', 'Distorted sound perception'],
        diagnostics: ['High-resolution CT scanning', 'Air-bone gap audiometry'],
        treatments: ['Ossiculoplasty with titanium / Teflon prostheses', 'Cartilage autograft interposition']
      }
    ]
  },
  {
    id: 'coblation-tonsils-voice',
    slug: 'coblation-tonsils-voice',
    pillarNumber: 'Pillar Four',
    title: 'Coblation Tonsil, Adenoid & Voice Surgery',
    shortDescription: 'Gentle, low-temperature coblation technology for painless pediatric adenotonsillar care and precision microlaryngeal voice surgery.',
    fullDescription: 'We specialize in advanced controlled-ablation (Coblation) surgical technology. Unlike traditional electrosurgery, coblation uses low-temperature radiofrequency energy to dissolve hypertrophic tissue with minimal thermal damage to surrounding healthy tissue, resulting in dramatically reduced post-operative pain and rapid recovery.',
    iconName: 'Stethoscope',
    clinicalHighlights: [
      'Cold Coblation Adenoidectomy and Tonsillectomy',
      'Significantly lower post-op pain scores and faster return to normal diet',
      'Microlaryngeal Surgery (MLS) for vocal cord polyps, nodules, and cysts',
      'Rigid and flexible laryngoscopic video stroboscopy',
      'Professional voice care for singers, teachers, and public speakers'
    ],
    diagnosticTechnologies: [
      'High-Definition Video Laryngoscopy (70° / 90° Storz endoscopes)',
      'Flexible Fiberoptic Nasopharyngolaryngoscopy',
      'Lateral neck soft tissue radiography'
    ],
    patientGuidance: 'If your child breathes through their mouth, snores, or pauses breathing during sleep, an adenoid evaluation is strongly recommended to protect dental development and daytime alertness.',
    conditions: [
      {
        name: 'Pediatric Adenotonsillar Hypertrophy',
        slug: 'adenoids-tonsils',
        summary: 'Enlarged tonsils and adenoids causing chronic mouth breathing, sleep-disordered breathing, and frequent ear infections.',
        symptoms: ['Mouth breathing', 'Restless sleep & snoring', 'Frequent throat infections', 'Eustachian tube block'],
        diagnostics: ['Flexible endoscopy', 'Lateral X-ray nasopharynx'],
        treatments: ['Coblation Adenotonsillectomy', 'Medical allergy therapy']
      },
      {
        name: 'Vocal Cord Polyps & Nodules',
        slug: 'vocal-cord-lesions',
        summary: 'Benign growths on the vocal fold mucosa caused by vocal overuse or trauma.',
        symptoms: ['Persistent hoarseness lasting >3 weeks', 'Vocal fatigue', 'Loss of vocal pitch range'],
        diagnostics: ['Video Stroboscopy', 'Acoustic voice analysis'],
        treatments: ['Microlaryngeal cold instrument excision', 'Speech & Voice therapy']
      }
    ]
  },
  {
    id: 'sinus-nose-rhinoplasty',
    slug: 'sinus-nose-rhinoplasty',
    pillarNumber: 'Pillar Five',
    title: 'Sinus, Nose & Rhinoplasty',
    shortDescription: '4K endoscopic sinus surgery (FESS), septoplasty, nasal polyposis treatment, and functional cosmetic rhinoplasty.',
    fullDescription: 'The Rhinology division at Asian Superspeciality ENT Hospital addresses complex nasal airway obstruction, recurrent acute and chronic rhinosinusitis, nasal polyps, and structural nasal deformities. We utilize Karl Storz 4K wide-angle endoscopes and microdebriders to clear obstructed sinus drainage pathways while preserving normal mucosa.',
    iconName: 'ShieldCheck',
    clinicalHighlights: [
      'Functional Endoscopic Sinus Surgery (FESS) with mucosal preservation',
      'Endoscopic sinus microdebrider technology for rapid polyp clearance',
      'Correction of Deviated Nasal Septum (Septoplasty) without external incision',
      'Turbinoplasty for chronic nasal congestion and turbinate hypertrophy',
      'Functional and aesthetic Rhinoplasty for nasal breathing and external contour'
    ],
    diagnosticTechnologies: [
      'Diagnostic Nasal Endoscopy (DNE) with live patient monitor display',
      'Coronal and Axial CT Paranasal Sinuses (PNS)',
      'Acoustic rhinometry & allergy testing correlation'
    ],
    patientGuidance: 'Chronic facial pressure or nasal blockage lasting more than 12 weeks requires thorough endoscopic visualization rather than repeated antibiotic courses.',
    conditions: [
      {
        name: 'Chronic Rhinosinusitis & Nasal Polyps',
        slug: 'chronic-sinusitis',
        summary: 'Long-standing inflammation of sinus cavities with polypoid tissue obstructing natural drainage ostia.',
        symptoms: ['Nasal congestion', 'Facial heaviness & headache', 'Loss of smell (anosmia)', 'Post-nasal drip'],
        diagnostics: ['Diagnostic Nasal Endoscopy', 'CT PNS 0.6mm slice scan'],
        treatments: ['FESS with polyp clearance', 'Steroid nasal irrigations', 'Allergy immunotherapy']
      },
      {
        name: 'Deviated Nasal Septum (DNS)',
        slug: 'deviated-septum',
        summary: 'Crooked central nasal cartilage and bone creating unilateral or alternating nasal airflow restriction.',
        symptoms: ['One-sided nasal blockage', 'Noisy breathing during sleep', 'Frequent crusting or epistaxis (nosebleeds)'],
        diagnostics: ['Anterior rhinoscopy', 'Nasal endoscopy'],
        treatments: ['Endoscopic Septoplasty', 'Radiofrequency turbinate reduction']
      }
    ]
  },
  {
    id: 'allergy-snoring-sleep',
    slug: 'allergy-snoring-sleep',
    pillarNumber: 'Pillar Six',
    title: 'Allergy, Snoring & Sleep Airway',
    shortDescription: 'Targeted skin allergy evaluation, medical immunotherapy, and comprehensive diagnosis-led treatment for snoring and obstructive sleep apnea.',
    fullDescription: 'Snoring is not merely a social annoyance; it can be an outward sign of obstructive sleep apnea (OSA) leading to cardiovascular strain, morning exhaustion, and daytime somnolence. Our multi-stage airway evaluation maps whether the obstruction arises in the nose, soft palate, base of tongue, or lateral pharyngeal walls.',
    iconName: 'Activity',
    clinicalHighlights: [
      'Comprehensive upper airway Muller maneuver & flexible endoscopy',
      'Level 1/2 Polysomnography (Sleep Study) referral and interpretation',
      'Uvulopalatopharyngoplasty (UPPP) and palate coblation channeling',
      'Skin Prick Testing (SPT) for environmental and food allergens',
      'Sublingual (SLIT) and subcutaneous allergy immunotherapy guidance'
    ],
    diagnosticTechnologies: [
      'Overnight diagnostic sleep study (Polysomnography)',
      'Drug-Induced Sleep Endoscopy (DISE) planning',
      'Skin Prick Allergy Test panel'
    ],
    patientGuidance: 'If you or your spouse observe breathing pauses followed by gasping or choking during sleep, a formal airway and sleep evaluation is essential.',
    conditions: [
      {
        name: 'Allergic Rhinitis',
        slug: 'allergic-rhinitis',
        summary: 'IgE-mediated inflammatory reaction to airborne allergens such as dust mites, pollen, and molds.',
        symptoms: ['Paroxysmal sneezing bouts', 'Watery rhinorrhea', 'Itchy eyes, nose and throat', 'Chronic nasal block'],
        diagnostics: ['Skin Prick Test (SPT)', 'Serum total & specific IgE'],
        treatments: ['Targeted allergen avoidance protocols', 'Nasal steroid sprays & antihistamines', 'Specific Immunotherapy']
      },
      {
        name: 'Obstructive Sleep Apnea (OSA) & Heavy Snoring',
        slug: 'sleep-apnea',
        summary: 'Repetitive collapse of upper airway during sleep causing oxygen desaturations and micro-arousals.',
        symptoms: ['Loud habitual snoring', 'Observed breathing pauses', 'Morning headache and dry mouth', 'Daytime sleepiness'],
        diagnostics: ['Epworth Sleepiness Scale', 'Diagnostic Polysomnography (AHI calculation)'],
        treatments: ['CPAP therapy titration', 'Coblation palatoplasty / UPPP', 'Weight management & positional therapy']
      }
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'audiology-vestibular-suite',
    title: 'Advanced Audiology & Vestibular Sound Lab',
    category: 'Diagnostic Diagnostics',
    description: 'A purpose-built, double-walled soundproof testing enclosure paired with calibrated clinical audiometry and Video Nystagmography (VNG) for precise hearing threshold and balance reflex measurement.',
    specs: [
      'ANSI-compliant double-walled acoustic isolation booth',
      'Dual-channel Pure Tone & Speech Audiometer',
      'Tympanometry & Acoustic Reflex decay testing',
      'High-frame-rate infrared Video Nystagmography (VNG) system'
    ],
    image: '/images/audiology-lab.jpg'
  },
  {
    id: 'otology-consulting-suite',
    title: 'Precision ENT Consultation & Examination Suites',
    category: 'Outpatient Care',
    description: 'Designed for patient comfort and thorough diagnostic evaluation. Each room is equipped with dedicated Zeiss examination microscopes and Karl Storz high-definition video endoscopes.',
    specs: [
      'Ergonomic clinical examination chair with tilt and elevation controls',
      'Otomicroscopic suction clearance and foreign body management system',
      'Dual HD monitors allowing patients and family to view diagnostic findings in real time'
    ],
    image: '/images/hero.jpg'
  },
  {
    id: 'modular-microsurgical-ot',
    title: 'Advanced ENT & Skull Base Microsurgical Theatre',
    category: 'Surgical Infrastructure',
    description: 'A sterile laminar airflow operation theatre engineered specifically for delicate microsurgical otology, cochlear implants, and endoscopic skull base procedures.',
    specs: [
      'Carl Zeiss Surgical Microscope with integrated high-definition beam splitter',
      'Karl Storz 4K Ultra-HD Sinus & Skull Base Endoscopy Tower',
      'ArthroCare / Smith & Nephew Coblation II radiofrequency surgical generator',
      'Continuous intraoperative facial nerve integrity monitoring'
    ],
    image: '/images/microsurgery-ot.jpg'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'appointments',
    question: 'How do I book a consultation with Dr. Pradeep Vundavalli?',
    answer: 'You can submit an appointment enquiry directly through our online booking form on this website or call our reception desk at +91 97050 33133. Our patient coordination team will confirm your preferred morning (10 AM - 2 PM) or evening (5 PM - 8 PM) time slot.'
  },
  {
    id: 'faq-2',
    category: 'appointments',
    question: 'What documents or records should I bring to my first appointment?',
    answer: 'Please bring any prior ENT consultation prescriptions, recent Audiograms, CT/MRI scan films and reports, a list of current medications, and a valid government photo ID.'
  },
  {
    id: 'faq-3',
    category: 'vertigo',
    question: 'What is the difference between dizziness and true vertigo?',
    answer: 'True vertigo is the false sensation that you or your surroundings are spinning or whirling, commonly caused by inner ear conditions like BPPV or Meniere\'s disease. General dizziness may feel like faintness, lightheadedness, or floating imbalance. Our specialized vestibular evaluation differentiates between inner-ear, neurological, and systemic causes.'
  },
  {
    id: 'faq-4',
    category: 'surgeries',
    question: 'Is Tympanoplasty (eardrum repair) performed as a daycare surgery?',
    answer: 'Yes. In the majority of straightforward tympanoplasty procedures performed by Dr. Pradeep Vundavalli, modern microsurgical techniques allow patients to be admitted in the morning and discharged safely on the same evening with clear home-care instructions.'
  },
  {
    id: 'faq-5',
    category: 'surgeries',
    question: 'What is the recovery time after Coblation Adenoid / Tonsil surgery?',
    answer: 'Because cold Coblation operates at 40°C–70°C rather than the 400°C–600°C of conventional electrocautery, thermal injury is minimal. Children and adults experience significantly less throat discomfort and typically resume normal soft diets within 2 to 4 days.'
  },
  {
    id: 'faq-6',
    category: 'hearing',
    question: 'When is a Cochlear Implant recommended instead of a conventional hearing aid?',
    answer: 'A Cochlear Implant is indicated when sensorineural hearing loss is severe-to-profound and conventional digital hearing aids can no longer amplify sound clearly enough for speech comprehension. Our audiology team conducts comprehensive candidate assessments.'
  },
  {
    id: 'faq-7',
    category: 'insurance',
    question: 'Does Asian Superspeciality ENT Hospital support cashless insurance and TPA?',
    answer: 'We assist patients with cashless mediclaim approvals and reimbursement documentation across major insurance providers and Third-Party Administrators (TPAs). Please share your policy e-card at the hospital reception for prior authorization assistance.'
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Thorough Specialist Consultation',
    description: 'Dr. Pradeep Vundavalli conducts an in-depth clinical history, followed by high-definition video otoscopy and endoscopic inspection with live monitor display so you can visualize the exact condition.'
  },
  {
    step: '02',
    title: 'Evidence-Led Diagnostics',
    description: 'Only required investigations are ordered — from soundproof booth pure-tone audiometry and impedance testing to video nystagmography (VNG) balance assessments and targeted temporal bone CT reviews.'
  },
  {
    step: '03',
    title: 'Tailored Treatment Pathway',
    description: 'We prioritize conservative, medical, and procedural therapies first. When surgery is necessary, procedures are planned with microscopic and coblation precision.'
  },
  {
    step: '04',
    title: 'Recovery & Long-Term Follow-up',
    description: 'Dedicated post-operative care, vestibular rehabilitation exercises, hearing aid tuning, or allergy maintenance to ensure lasting health and quality of life.'
  }
];
