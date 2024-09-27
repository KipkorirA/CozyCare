/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import './Feedback.css'; // Import the Feedback section styling

const Feedback = () => {
    return (
        <section className="feedback-section">
            {/* Full-width background image */}
            <div className="feedback-banner">
                <img src="https://plus.unsplash.com/premium_photo-1688822013956-f50369f76b26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Feedback Banner" />
            </div>

            <div className="feedback-content">
                {/* Left: Main Heading */}
                <div className="feedback-heading">
                    <h1>
                        HEAR WHAT OUR <br></br> <span>PATIENTS</span> HAVE TO SAY <span><br></br>ABOUT US</span>
                    </h1>
                    <hr className="feedback-divider" />
                </div>

                {/* Right: Paragraph Text */}
                <div className="feedback-description">
                    <p>
                    CozyCare leads one of the regions’ largest home care network with the most advanced care platform. We’re revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                    </p>
                </div>
            </div>

            {/* Feedback comments */}
            <div className="feedback-cards">
                {/* First feedback card */}
                <div className="feedback-card">
                    <p>"The service was excellent. I felt truly cared for, and the staff was incredibly kind."</p>
                    <div className="feedback-person">
                        <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="Person 1" />
                        <h6>Aron Bii</h6>
                        <hr className="person-divider" />
                    </div>
                </div>

                {/* Second feedback card */}
                <div className="feedback-card">
                    <p>"I received all the medical attention I needed right at home. CozyCare exceeded my expectations!"</p>
                    <div className="feedback-person">
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="Person 2" />
                        <h6>Esther Kini</h6>
                        <hr className="person-divider" />
                    </div>
                </div>

                {/* Third feedback card */}
                <div className="feedback-card">
                    <p>"A friendly team that offers top-notch care. I couldn't be more satisfied with the service provided."</p>
                    <div className="feedback-person">
                        <img src="https://images.unsplash.com/photo-1518809595274-1471d16319b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBmYWNlfGVufDB8fDB8fHww" alt="Person 3" />
                        <h6>Abdimajid Aman</h6>
                        <hr className="person-divider" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
