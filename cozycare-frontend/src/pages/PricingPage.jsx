import './styles/PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Top Section */}
      <div className="top-section">
        <h1>Our Pricing</h1>
        <div className="divider"></div>

        {/* Pricing Section */}
        <div className="pricing-page-section">

          {/* First Block - Text Left, Image Right */}
          <div className="pricing-block text-left">
            <div className="text-section">
              <h3>Care Where You Reside</h3>
              <p>
                CozyCare offers flexible pricing options to suit your budget and needs. Our rates are based on the specific
                services you require and the frequency of care. Our goal is to help you maintain your independence and
                quality of life while receiving the support you require.
              </p>
              <h3>Subscription Plans:</h3>
              <ul>
                <li>Hourly Plans: Pay for care on an hourly basis.</li>
                <li>Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                <li>Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
              </ul>
            </div>
            <img className="pricing-image" src="/images/pricing1.png" alt="Pricing details for subscription plans" />
          </div>

          {/* Second Block - Image Left, Text Right */}
          <div className="pricing-block text-left">
            <img className="pricing-image" src="/images/pricing2.png" alt="Pay per service details" />
            <div className="text-section">
              <h3>Pay-Per-Service</h3>
              <ul>
                <li>One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
              </ul>
            </div>
          </div>

          {/* Third Block - Text Left, Image Right */}
          <div className="pricing-block text-left">
            <div className="text-section">
              <h3>Factors that may affect our pricing include:</h3>
              <ul>
                <li>One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                <li>The frequency of care you need.</li>
                <li>The type of services required (personal care, medical care, etc.).</li>
                <li>Your location and specific caregiving needs.</li>
              </ul>
              <p>
                To get a personalized quote, please contact us at <span>[Phone Number]</span> or{' '}
                <span>support@cozycare.com</span>. We are happy to discuss your specific needs and provide you with a tailored
                pricing estimate. <br />
                <strong>Note:</strong> Prices are subject to change. Please contact us for the most up-to-date pricing
                information.
              </p>
            </div>
            <img className="pricing-image" src="/images/pricing3.png" alt="Factors that affect pricing" />
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="pricing-contact">
        <h1>FIND HOME CARE TODAY</h1>
        <p>
          Get Started with Primary Care at Home
          <br />
          <br />
          Ready to experience the CozyCare difference? Contact us today to learn more about our home-based primary care
          services. Our experienced team is here to answer any questions you may have and help you take the first step
          toward receiving the high-quality care you deserve.
          <br />
          <br />
          Don’t wait – let us show you how we can support your health and well-being today!
        </p>

        <h6>
          Whether you have questions, need assistance, or want to schedule an appointment, our team is here to help.
        </h6>

        {/* Contact Form */}
        <form className="pricing-form">
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea className="message" name="message" placeholder="Message" rows="4" required></textarea>
          
          <div className="recaptcha">
            <div className="recaptcha-logo"></div>
            <input type="checkbox" id="not-a-robot" />
            <label htmlFor="not-a-robot" className="recaptcha-text">I am not a robot</label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PricingPage;
