// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for the Home section
import Navbar from '../navbar/Navbar';

const Home = () => {
    return (
        <section className="home-section">
            <Navbar />
            <div className="home-content">
                {/* Left side: Text content */}
                <div className="home-text">
                    <h1>Making Health Accessible and Affordable</h1>
                    <h2>Your Home, Your Comfort, Our Care</h2>
                    <Link to="/services" className="services-btn">List of Services</Link>
                    <div className="social-icons">
                        {/* Social Media Icons */}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                {/* Right side: Image */}
                <div className="home-image">
                    <img src="public/images/width_800.jpeg" alt="Healthcare" />
                </div>
            </div>
        </section>
    );
};

export default Home;
