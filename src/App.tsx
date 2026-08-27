import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { DoorToDoorPage } from './pages/DoorToDoorPage';
import { OpenTransportPage } from './pages/OpenTransportPage';
import { EnclosedTransportPage } from './pages/EnclosedTransportPage';
import { MotorcycleShippingPage } from './pages/MotorcycleShippingPage';
import { CarShippingCostPage } from './pages/CarShippingCostPage';
import { PersonalItemsPage } from './pages/PersonalItemsPage';
import { ShipCarAcrossCountryPage } from './pages/ShipCarAcrossCountryPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* About Routes */}
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-reyzen-logistics" element={<AboutPage />} />
            <Route path="/about-agility-global" element={<AboutPage />} />

            {/* Why Choose Us */}
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/why-reyzen-logistics" element={<WhyChooseUsPage />} />
            <Route path="/why-agility-global" element={<WhyChooseUsPage />} />

            {/* Services */}
            <Route path="/door-to-door-auto-transport" element={<DoorToDoorPage />} />
            <Route path="/open-auto-transport" element={<OpenTransportPage />} />
            <Route path="/enclosed-auto-transport" element={<EnclosedTransportPage />} />
            <Route path="/motorcycle-shipping" element={<MotorcycleShippingPage />} />

            {/* How It Works & Guides */}
            <Route path="/car-shipping-cost" element={<CarShippingCostPage />} />
            <Route path="/personal-items-in-car-shipping" element={<PersonalItemsPage />} />
            <Route path="/ship-car-across-country" element={<ShipCarAcrossCountryPage />} />

            {/* Contact & Legal */}
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
