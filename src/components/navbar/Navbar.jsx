import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import throttle from 'lodash.throttle'; // Import throttle function
import './Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }, 200); // Throttle every 200ms

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img src="public/images/logo.png" alt="Logo" className="logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li className="navbar-subscribe">
                <Link to="/subscribe">
                    <i className="fas fa-user-circle subscribe-icon"></i>
                </Link>
            </li>
            </ul>
        </nav>
    );
};

export default Navbar;
