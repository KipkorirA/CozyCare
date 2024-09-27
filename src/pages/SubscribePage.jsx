// src/components/pages/SubscribePage.jsx
import { useState } from 'react';
// import './SubscribePage.css'; // Assuming you'll add custom CSS for styling

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();

    if (email) {
      // Simulate a successful subscription process
      setSuccessMessage('Thank you for subscribing to CozyCare!');
      setErrorMessage('');
      setEmail(''); // Clear the email input after subscribing
    } else {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="subscribe-page">
      <h1>Subscribe to CozyCare</h1>
      <p>
        Stay updated with our latest health tips, services, and offers. Join our newsletter today!
      </p>

      {/* Subscription Form */}
      <form className="subscribe-form" onSubmit={handleSubscription}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SubscribePage;
