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
                
                <p>At CozyCare, we offer competitive pricing for our in-home care services. Our rates are flexible to suit the specific services you require and the frequency of care.</p>
                
                <h2>Subscription Plans</h2>
                <ul>
                    <li>Hourly Plans: Pay for care on an hourly basis.</li>
                    <li>Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                    <li>Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
                </ul>

                <h2>Pay-Per-Service</h2>
                <ul>
                    <li>One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                </ul>
            </div>

            {/* Right Side: Image and Additional Info */}
            <div className="pricing-image-content">
                {/* Big image with surrounding text */}
                <div className="image-with-text">
                    <img src="public/images/CozyCare__7_-Photoroom-removebg-preview.png" alt="Pricing Visual" className="pricing-image-box" />
                    
                    {/* Text inside the image */}
                    <div className="image-text">
                        <h3>Factors that may affect pricing include:</h3>
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
                    <a href="tel:+254700697430" className="contact-link"> [+254 700 697 430]</a> or 
                    <a href="mailto:support@cozycare.com" className="contact-link"> support@cozycare.com</a>. 
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
