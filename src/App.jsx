// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import CareersPage from './pages/CareersPage';
import './styles/App.css'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/careers" element={<CareersPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
