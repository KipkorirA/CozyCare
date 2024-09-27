// import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'; // Import the Pricing section styling

const Pricing = () => {
    return (
        <section className="pricing-section">
            {/* Left Side: Pricing Information */}
            <div className="pricing-info">
                <h1>PRICING</h1>
                <hr className="pricing-divider" />
                
                <p>At Cozycare, we offer competitive pricing for our in-home care services. Our rates are flexible to suit the specific services you require and the frequency of care.</p>
                
                <p>Subscription Plans</p>
                <ul>
                    <li>Hourly Plans: Pay for care on an hourly basis.</li>
                    <li>Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                    <li>Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
                </ul>

                <p>Pay-Per-Service</p>
                <ul>
                    <li>One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                </ul>
            </div>

            {/* Right Side: Image and Additional Info */}
            <div className="pricing-image-content">
                {/* Big image with surrounding text */}
                <div className="image-with-text">
                    <img src="public/images/CozyCare__7_-Photoroom-removebg-preview.png" alt="Pricing Visual" className="pricing-image" />
                    
                    {/* Text inside the image */}
                    <div className="image-text">
                        Factors that may affect pricing include:
                        <ul>
                            <li>Level of care: The intensity and complexity of the care required.</li>
                            <li>Frequency of care: The number of hours of care needed per week.</li>
                            <li>Location: Geographic location may influence pricing.</li>
                            <li>Additional services: Any additional services requested, such as meal delivery or transportation.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Paragraph below the image */}
                <p>
                    To get a personalized quote, please contact us at 
                    <a href="tel:[+254 700 697 430]" style={{ color: 'red', textDecoration: 'underline' }}> [Phone Number]</a> or 
                    <a href="mailto:support@cozycare.com" style={{ color: 'red', textDecoration: 'underline' }}> support@cozycare.com</a>. 
                    We are happy to discuss your specific needs and provide you with a tailored pricing estimate.
                    Note: Prices are subject to change. Please contact us for the most up-to-date pricing information.
                </p>

                {/* Link to Contact Us Page */}
                <Link to="/contact" className="contact-link">
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default Pricing;
