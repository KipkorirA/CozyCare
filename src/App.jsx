// import React from 'react';
import Footer from './components/footer/Footer';
import HomeSection from './components/home/Home';
import AboutSection from './components/about/About';
import ServicesSection from './components/services/Services';
import PricingSection from './components/pricing/Pricing';
import CareersSection from './components/careers/Careers';
import FeedbackSection from './components/feedback/Feedback';
import ContactSection from './components/contact/ContactForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar at the top */}


        {/* Routes for each section */}
        <main>
          <section id="all-sections">
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <FeedbackSection />
            <PricingSection />
            <CareersSection />
            <ContactSection />
          </section>
        </main>
        
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
