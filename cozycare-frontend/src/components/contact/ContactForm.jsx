import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactForm.css'; // Import the Contact Form styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [captchaValue, setCaptchaValue] = useState(null); // State for reCAPTCHA value
    const [isCaptchaValid, setIsCaptchaValid] = useState(false); // To validate reCAPTCHA
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [errorMessage, setErrorMessage] = useState(''); // Error message state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptcha = (value) => {
        setCaptchaValue(value);
        setIsCaptchaValid(true); // When captcha is successfully completed
        console.log("Captcha value:", value); // Log the reCAPTCHA token value
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCaptchaValid) {
            setIsLoading(true); // Start loading state
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...formData, captchaValue }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                alert("Your message has been sent successfully!");
                setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
                setIsCaptchaValid(false);
                setCaptchaValue(null); // Reset captcha value
            } catch (error) {
                setErrorMessage("There was a problem sending your message: " + error.message);
            } finally {
                setIsLoading(false); // End loading state
            }
        } else {
            alert("Please complete the reCAPTCHA.");
        }
    };

    return (
        <section className="contact-section">
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="form-row">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className="input-box"
                        required 
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className="input-box"
                        required 
                    />
                </div>

                {/* Phone and Email */}
                <div className="form-row">
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="input-box"
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="input-box"
                        required 
                    />
                </div>

                {/* Message */}
                <div className="form-row">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="message-box"
                        required
                    ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="recaptcha-box">
                    <ReCAPTCHA
                        sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" // Replace with your site key
                        onChange={handleCaptcha}
                    />
                </div>

                {/* Error Message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
