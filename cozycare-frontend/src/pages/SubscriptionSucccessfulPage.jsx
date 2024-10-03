
import './styles/subscriptionSuccessfulPage.css'; 

const SubscriptionSuccessfulPage = () => {
  return (
    <div className="subscription-successful-page">
      <h1>Subscription Successful!</h1>
      {/* Add celebration GIF */}
      <img 
        src="https://media.tenor.com/hCh_8LULEk4AAAAj/thank-you.gif" 
        alt="Celebration" 
        className="celebration-gif" 
      />
      <p>Thank you for subscribing to CozyCare. You will now receive our latest health tips, services, and offers.</p>
      <p>We appreciate your interest!</p>
      {/* Optionally, add a button to return to the homepage */}
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
};

export default SubscriptionSuccessfulPage;
