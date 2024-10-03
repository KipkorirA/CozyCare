import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/subscribePage.css'; // Custom CSS for styling

const SubscribePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredContact, setPreferredContact] = useState('email'); // Default to email
  const [interests, setInterests] = useState([]); // Store selected interests
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Initialize useNavigate
  const navigate = useNavigate();

  // Define the API base URL using environment variable
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9-+\s()]*$/; // Simple regex to allow numbers, spaces, dashes, parentheses, and plus sign
    return phone === '' || re.test(phone); // Allow empty for optional field
  };

  const validateForm = () => {
    if (firstName.length < 2) {
      setErrorMessage('First name must be at least 2 characters long.');
      return false;
    }
    if (lastName.length < 2) {
      setErrorMessage('Last name must be at least 2 characters long.');
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number.');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setInterests([]);
  };

  const handleSubscription = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch(`${API_BASE_URL}/subscribe`, {
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
          resetForm(); // Clear the form fields
          navigate('/subscription-successful'); // Redirect to the subscription successful page
        } else {
          setErrorMessage(data.message || 'Something went wrong.');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Failed to subscribe. Please try again later.');
      } finally {
        setIsLoading(false); // End loading
      }
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

      {/* Error Message */}
      {errorMessage && <p className="error-message" aria-live="polite">{errorMessage}</p>}
      {isLoading && <p className="loading-message">Loading...</p>} {/* Loading Message */}
    </div>
  );
};

export default SubscribePage;
