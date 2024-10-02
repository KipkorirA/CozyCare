import { useState } from 'react';
import './styles/subscribePage.css'; // Custom CSS for styling

const SubscribePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredContact, setPreferredContact] = useState('email'); // Default to email
  const [interests, setInterests] = useState([]); // Store selected interests
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscription = async (e) => {
    e.preventDefault();

    if (email && validateEmail(email)) {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch('http://localhost:5000/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            preferredContact,
            interests,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage(data.message);
          setErrorMessage('');
          setFirstName(''); // Clear the first name input
          setLastName(''); // Clear the last name input
          setEmail(''); // Clear the email input
          setPhoneNumber(''); // Clear the phone number input
          setInterests([]); // Clear selected interests
        } else {
          setErrorMessage(data.message || 'Something went wrong.');
          setSuccessMessage('');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Failed to subscribe. Please try again later.');
        setSuccessMessage('');
      } finally {
        setIsLoading(false); // End loading
      }
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
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          aria-label="First Name"
        />
        
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          aria-label="Last Name"
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Enter your phone number (optional)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          aria-label="Phone Number"
        />

        <label htmlFor="preferredContact">Preferred Contact Method:</label>
        <select
          id="preferredContact"
          value={preferredContact}
          onChange={(e) => setPreferredContact(e.target.value)}
          aria-label="Preferred Contact Method"
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>

        <label>Interests:</label>
        <div className="interests-checkboxes">
          <label>
            <input
              type="checkbox"
              value="healthTips"
              checked={interests.includes('healthTips')}
              onChange={(e) => {
                const value = e.target.value;
                setInterests(prev => 
                  prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
                );
              }}
            />
            Health Tips
          </label>
          <label>
            <input
              type="checkbox"
              value="productOffers"
              checked={interests.includes('productOffers')}
              onChange={(e) => {
                const value = e.target.value;
                setInterests(prev => 
                  prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
                );
              }}
            />
            Product Offers
          </label>
          {/* Add more interest options as needed */}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button> {/* Disable when loading */}
      </form>

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {isLoading && <p className="loading-message">Loading...</p>} {/* Loading Message */}
    </div>
  );
};

export default SubscribePage;
