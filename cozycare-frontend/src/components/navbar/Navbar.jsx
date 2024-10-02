import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import throttle from 'lodash.throttle';
import './Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation(); // Get current location

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }, 200);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Function to determine the navbar class based on the current path
    const getNavbarClass = () => {
        let navbarClass = 'navbar '; // Base class

        switch (location.pathname) {
            case '/about':
                navbarClass += 'navbar-about';
                break;
            case '/pricing':
                navbarClass += 'navbar-pricing';
                break;
            case '/careers':
                navbarClass += 'navbar-careers';
                break;
            case '/contact':
                navbarClass += 'navbar-contact';
                break;
            case '/subscribe':
                navbarClass += 'navbar-subscribe';
                break;
            default:
                navbarClass += 'navbar-home'; // Default for home
        }

        return navbarClass;
    };

    return (
        <nav className={`${getNavbarClass()} ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img src="public/images/logo.png" alt="CozyCare Logo" className="logo" />
                </Link>
            </div>
            <div className="navbar-links-container">
                <ul className="navbar-links">
                    <li>
                        <Link to="/about">
                            <i className="fas fa-home navbar-icon"></i>
                            <span className="navbar-text">COZYCARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing">
                            <i className="fas fa-dollar-sign navbar-icon"></i>
                            <span className="navbar-text">PRICING</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/careers">
                            <i className="fas fa-briefcase navbar-icon"></i>
                            <span className="navbar-text">CAREERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <i className="fas fa-envelope navbar-icon"></i>
                            <span className="navbar-text">CONTACT US</span>
                        </Link>
                    </li>
                </ul>
                <div className="navbar-subscribe">
                    <Link to="/subscribe">
                        <i className="fas fa-user-circle subscribe-icon"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
