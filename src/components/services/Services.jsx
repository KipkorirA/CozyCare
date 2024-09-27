// import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import the Service section styling

const Service = () => {
    return (
        <section className="service-section">
            {/* Section Title */}
            <h1>
                OUR IN-HOME CARE <span className="service-title">SERVICE</span>
            </h1>
            <hr className="service-divider" />

            {/* Service Cards */}
            <div className="service-cards">
                {/* Service 1 */}
                <div className="service-card">
                    <img src="public/images/Untitled design (2)-Photoroom.png" alt="Service 1" className="service-icon" />
                    <h2 className="service-heading">Personal Care</h2>
                    <ul>
                        <li>Assistance with bathing</li>
                        <li>Grooming and dressing</li>
                        <li>Medication reminders</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="service-card">
                    <img src="public/images/Untitled design (3)-Photoroom.png" alt="Service 2" className="service-icon" />
                    <h2 className="service-heading">Skilled Nursing</h2>
                    <ul>
                        <li>Medication administration</li>
                        <li>Wound care</li>
                        <li>Post-operative care</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="service-card">
                    <img src="public/images/Untitled design (4)-Photoroom.png" alt="Service 3" className="service-icon" />
                    <h2 className="service-heading">Therapy Services</h2>
                    <ul>
                        <li>Physical therapy</li>
                        <li>Occupational therapy</li>
                        <li>Speech therapy</li>
                    </ul>
                </div>
            </div>

            {/* Learn More Button Container */}
            <div className="learn-more-container">
                <Link to="/services" className="learn-more-btn">
                    LEARN MORE <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};

export default Service;
