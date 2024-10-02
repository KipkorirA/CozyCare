// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the Footer styling

const Footer = () => {
    return (
        <footer className="footer">

                {/* Copyright Section */}
                <p className="footer-bottom"> © 2024 CozyCare. All Rights Reserved</p>

                {/* Quick Links */}
                <ul className="footer-quick-links">
                    <li>
                        <Link to="/terms-of-use">Terms of Use</Link> {/* Link to Terms of Use page */}
                    </li>
                    <li>
                        <Link to="/privacy-policy">Privacy and Cookie Policy</Link>
                    </li>
                    <li>
                        <Link to="/">Sitemap</Link>
                    </li>
                </ul>

        </footer>
    );
};

export default Footer;
