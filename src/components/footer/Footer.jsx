// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the Footer styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© 2024 CozyCare. All Rights Reserved</p>
            </div>
                {/* Quick Links */}
                <div className="footer-section quick-links">
                    <ul>
                        <li>
                            <Link to="/">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy and Cookie Policy</Link>
                        </li>
                        <li>
                            <Link to="/">Sitemap</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
