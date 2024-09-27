// import React from 'react';
import { Link } from 'react-router-dom';
import './Careers.css'; // Import the Careers section styling

const Careers = () => {
    return (
        <section className="careers-section">
            {/* Left Division: Title and Earth Image */}
            <div className="careers-left">
                <h1>CAREERS</h1>
                <hr className="careers-divider" />
                <img src="public/images/Pirateship.webp" alt="Earth" className="earth-image" />
            </div>

            {/* Right Division: Information and Links */}
            <div className="careers-right">
                <h2>Join Our Team</h2>
                <p>At CozyCare, we are committed to providing top-notch care and support. We are always looking for passionate professionals to join our growing team.</p>
                <p>If you are driven, compassionate, and want to make a difference, we would love to hear from you.</p>

                {/* Link to Careers Page */}
                <Link to="/careers" className="careers-button">
                    Explore Careers...
                </Link>

                {/* Small Paragraph Link */}
                <Link to="/careers" className="small-paragraph-link">
                    Learn more about our career opportunities and how you can contribute to CozyCare.
                </Link>
            </div>
        </section>
    );
};

export default Careers;
