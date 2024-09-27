// src/components/pages/FeedbackPage.jsx
import React from 'react';

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h1>We Value Your Feedback</h1>
      <p>
        Your feedback helps us improve. Let us know how we can serve you better.
      </p>
      <form>
        <label>Your Feedback:</label>
        <textarea rows="4" cols="50" placeholder="Write your feedback here..."></textarea>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
