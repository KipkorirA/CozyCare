import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './Feedback.css'; // Import the Feedback section styling

const Feedback = () => {
    const [testimonials, setTestimonials] = useState([]); // Renamed for clarity

    // Fetch testimonials from backend
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/testimonials');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestimonials(data); // Set the testimonials data
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section className="feedback-section">
            {/* Full-width background image (if needed) */}
            <div className="feedback-banner">
                {/* You can add a background image here if required */}
                <img src="/src/components/feedback/Medicine.webp" alt="Feedback Banner" />
            </div>

            <div className="feedback-content">
                {/* Left: Main Heading */}
                <div className="feedback-heading">
                    <h1>
                        HEAR WHAT OUR <br />
                        <span>PATIENTS</span> HAVE TO SAY <span><br />ABOUT US</span>
                    </h1>
                    <hr className="feedback-divider" />
                </div>

                {/* Right: Paragraph Text */}
                <div className="feedback-description">
                    <p>
                        CozyCare leads one of the regions’ largest home care networks with the most advanced care platform. We’re revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                    </p>
                </div>
            </div>

            {/* Feedback comments */}
            <div className="feedback-cards">
                {testimonials.length > 0 ? (
                    testimonials.slice(0, 3).map((testimonial, index) => ( // Limit to the first 3 testimonials
                        <div className="feedback-card" key={index}>
                            <p>"{testimonial.text}"</p>
                            <div className="feedback-person">
                                {/* Display the client's image if available */}
                                {testimonial.image_url && (
                                    <img
                                        src={`http://localhost:5000${testimonial.image_url}`} // Use the API URL
                                        alt={testimonial.author || "Anonymous"}
                                        className="client-image"
                                    />
                                )}
                                <h6>{testimonial.author || "Anonymous"}</h6> {/* Default to "Anonymous" if no name provided */}
                                <hr className="person-divider" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No testimonials available.</p>
                )}
            </div>

            {/* Link to FeedbackPage */}
            <div className="feedback-link">
                <Link to="/feedback" className="feedback-link-button">
                    Leave Your Own Feedback
                </Link>
            </div>
        </section>
    );
};

export default Feedback;
