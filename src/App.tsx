import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActionHub } from './components/common/FloatingActionHub';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SpecialitiesPage } from './pages/SpecialitiesPage';
import { SpecialityDetailPage } from './pages/SpecialityDetailPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { SymptomsPage } from './pages/SymptomsPage';
import { YourVisitPage } from './pages/YourVisitPage';
import { FaqPage } from './pages/FaqPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/specialities" element={<SpecialitiesPage />} />
          <Route path="/specialities/:slug" element={<SpecialityDetailPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/surgeon" element={<DoctorsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/patient-info" element={<PatientInfoPage />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          <Route path="/your-visit" element={<YourVisitPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/book-appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      {/* Global Floating Action Hub: WhatsApp + Emergency Hotline + Quick Assistant */}
      <FloatingActionHub />
    </div>
  );
};

export default App;
