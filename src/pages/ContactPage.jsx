// src/components/pages/ContactPage.jsx
// import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you. Get in touch with us today!
      </p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
        <br />
        <label>Message:</label>
        <textarea rows="4" cols="50" placeholder="Your message"></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
