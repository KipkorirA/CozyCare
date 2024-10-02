// import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/home/Home';
import AboutSection from './components/about/About';
import ServicesSection from './components/services/Services';
import PricingSection from './components/pricing/Pricing';
import CareersSection from './components/careers/Careers';
import FeedbackSection from './components/feedback/Feedback';
import ContactSection from './components/contact/ContactForm';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import CareersPage from './pages/CareersPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import SubscribePage from './pages/SubscribePage'; // Import the SubscribePage
import TermsOfUsePage from './pages/TermsOfUsePage'; // Import the TermsOfUsePage
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar at the top */}
        <Navbar />

        {/* Routes for each section and page */}
        <main>
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={
              <>
                <HomeSection />
                <AboutSection />
                <ServicesSection />
                <FeedbackSection />
                <PricingSection />
                <CareersSection />
                <ContactSection />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/subscribe" element={<SubscribePage />} /> {/* Add SubscribePage route */}
            <Route path="/terms-of-use" element={<TermsOfUsePage />} /> {/* Add TermsOfUsePage route */}
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
