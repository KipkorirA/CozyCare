import { useEffect, useState } from "react";
import "./styles/FeedbackPage.css";

const StarRating = ({ rating, setRating }) => {
    const stars = [1, 2, 3, 4, 5]; // Array representing the star ratings

    return (
        <div className="star-rating">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`star ${rating >= star ? "filled" : ""}`}
                    onClick={() => setRating(star)} // Set the rating when a star is clicked
                    role="button"
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const Testimonials = ({ testimonials, loading, currentPage, testimonialsPerPage }) => {
    if (loading) return <p>Loading testimonials...</p>; // Loading indicator
    if (testimonials.length === 0) return <p>No testimonials available.</p>;

    // Calculate the index of the first and last testimonial for the current page
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const displayedTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    return (
        <div className="testimonial-grid">
            {displayedTestimonials.map((testimonial, index) => (
                <div key={index} className="feedback-page-item">
                    <p>{testimonial.text}</p>
                    {testimonial.image_url && (
                        <img
                            src={`http://localhost:5000${testimonial.image_url}`} // Use the API URL for images
                            alt={`Image of ${testimonial.author}`}
                            className="client-image"
                        />
                    )}
                    <p>- {testimonial.author || "Anonymous"}</p>
                </div>
            ))}
        </div>
    );
};

const FeedbackPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0); // Initialize rating as 0
    const [feedback, setFeedback] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");
    const [testimonials, setTestimonials] = useState([]); // State for storing testimonials
    const [loading, setLoading] = useState(false); // Add loading state
    const [currentPage, setCurrentPage] = useState(1); // Current page for testimonials
    const testimonialsPerPage = 6; // Number of testimonials to show per page

    useEffect(() => {
        fetchTestimonials();
    }, []); // Empty dependency array to run only on component mount

    const fetchTestimonials = async () => {
        setLoading(true); // Set loading state to true
        try {
            const response = await fetch("http://localhost:5000/api/testimonials");
            if (response.ok) {
                const data = await response.json();
                setTestimonials(data); // Update state with fetched testimonials
            } else {
                setMessage("Failed to load testimonials.");
            }
        } catch (error) {
            setMessage("Error fetching testimonials. Please try again.");
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 2 * 1024 * 1024) { // 2MB limit
                setMessage("File size exceeds 2MB.");
                return;
            }

            // Allowed file extensions
            const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
            if (!allowedExtensions.includes(selectedFile.type)) {
                setMessage("File type is not allowed!");
                return;
            }

            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!email.includes('@') || !feedback) { // Basic validation checks
            setMessage("Please provide a valid email and feedback.");
            return;
        }

        setLoading(true); // Start loading when submitting
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("rating", rating);
        formData.append("feedback", feedback);

        if (file) {
            formData.append("file", file); // Ensure the file is correctly added
        }

        try {
            const response = await fetch("http://localhost:5000/api/feedback", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                // Reset form fields
                resetForm();
                fetchTestimonials(); // Refetch testimonials to include the new one
            } else {
                const errorData = await response.json();
                setMessage(errorData.message); // Show error message from backend
            }
        } catch (error) {
            setMessage("Error submitting feedback. Please try again.");
        } finally {
            setLoading(false); // Stop loading after submission
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setRating(0); // Reset rating to 0
        setFeedback("");
        setFile(null);
        setFileName("");
    };

    // Pagination Controls
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber); // Change to the clicked page
    };

    return (
        <div className="feedback-page">
            <div className="feedback-page-top">
                <h3>COZYCARE NEWS</h3>
                <div className="divider"></div>
                <div className="feedback-page-heading">
                    <div className="feedback-page-heading-text">
                        <h1><strong>“Hear What Our Clients Have to Say”</strong></h1>
                        <p><b>Our Mission:</b> Caring for Your Family, Just Like Our Own</p>
                    </div>
                    <div>
                        <img src="/images/quote-feedback.png" alt="Client feedback quote illustration" className="feedback-page-heading-image"/> {/* Updated image path */}
                    </div>
                </div>
                
                {/* Testimonials Section */}
                <div className="testimonials-section">
                    <div className="feedback-container">
                        <Testimonials 
                            testimonials={testimonials} 
                            loading={loading} 
                            currentPage={currentPage} 
                            testimonialsPerPage={testimonialsPerPage}
                        />
                    </div>
                </div>
                
                {/* Pagination Controls with Numbered Pages */}
                <div className="pagination-controls">
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index}
                            className="pagination-number"
                            onClick={() => handlePageClick(index + 1)}
                        >
                            <span>{index + 1}</span> {/* Wrapping number in a span */}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Feedback Form Section */}
            <div className="feedback-form-section">
                <h1>We Value Your Feedback</h1>
                <p>Your feedback helps us improve. Let us know how we can serve you better.</p>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <label htmlFor="name">Your Name (optional):</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* Email Field */}
                    <label htmlFor="email">Your Email (optional):</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Rating Field */}
                    <label htmlFor="rating">Rate Your Experience:</label>
                    <StarRating rating={rating} setRating={setRating} />

                    {/* Feedback Textarea */}
                    <label htmlFor="feedback">Your Feedback:</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        rows="4"
                        cols="50"
                        placeholder="Write your feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>

                    {/* File Upload Button */}
                    <label htmlFor="file" className="custom-file-upload">
                        Upload a file (optional):
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*" // Specify accepted file types
                        onChange={handleFileChange}
                    />
                    {fileName && <p className="file-name">Selected file: {fileName}</p>} {/* Show selected file name */}
                    
                    <br />
                    <button type="submit" disabled={loading}>Submit Feedback</button> {/* Disable button while loading */}
                </form>

                {message && <p className="feedback-message">{message}</p>} {/* Display message */}
            </div>
        </div>
    );
};

export default FeedbackPage;
