// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/careers">Careers</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
