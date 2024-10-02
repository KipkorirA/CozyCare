import { useEffect } from 'react';
import './styles/AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
    useEffect(() => {
        const adjustMargin = () => {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            document.querySelector('.about-page').style.marginTop = `${navbarHeight}px`;
        };

        // Adjust margin initially and on window resize
        adjustMargin();
        window.addEventListener('resize', adjustMargin);

        return () => {
            window.removeEventListener('resize', adjustMargin);
        };
    }, []);

    return (
        <div className="about-page">
            {/* First Section */}
            <section className="about-section">
                <div className="about-content">
                    <img src="public/images/Untitled_design__6_-removebg-preview.png" alt="Description 1" className="about-image" />
                    <div className="about-text">
                        <h2>About CozyCare</h2>
                        <div className="divider"></div>
                        <p>
                            At Cozycare, we believe that everyone deserves to feel at home, even when circumstances require additional support. 
                            We are dedicated to delivering exceptional health & care services that prioritize the well-being and comfort of our patients and liege. 
                            With a commitment to personalized care, our highly skilled and compassionate team provides a continuum-of-care approach, 
                            ranging from primary care to palliative care. 
                            We are honored to provide compassionate care that truly makes a difference in the lives of those we serve.
                        </p>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="about-section">
                <div className="about-content reverse">
                    <div className="about-text">
                        <h2>What we’re doing about it</h2>
                        <div className="divider"></div>
                        <p>
                            CozyCare leads one of the regions’ largest home care network with the most advanced care platform. 
                            We’re revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                        </p>
                        <br />
                        <p>
                            <strong>Our Mission:</strong><i>Caring for Your Family, Just Like Our Own</i>
                        </p>
                    </div>
                    <img src="public/images/Untitled_design__10_-removebg-preview.png" alt="Description 2" className="about-image" />
                </div>
            </section>

            {/* Third Section */}
            <section className="about-section">
                <div className="about-content">
                    <img src="public/images/Untitled design (9).png" alt="Description 3" className="about-image" />
                    <div className="about-text">
                        <h2>Our Services</h2>
                        <div className="divider"></div>
                        <p>We are dedicated to:</p>
                        <ul className="about-bullets">
                            <li><strong>Personalized Care Plans:</strong> Tailoring our services to meet the unique needs and preferences of each client.</li>
                            <li><strong>Compassionate Caregivers:</strong> Employing caring and experienced professionals who are committed to providing the highest level of care.</li>
                            <li><strong>Safe and Comfortable Environments:</strong> Ensuring that our clients' homes are safe, clean, and conducive to their well-being.</li>
                            <li><strong>Continuous Improvement:</strong> Striving to stay up-to-date with the latest industry standards and best practices.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className='cozycare-family-contact'>
                <p>
                    Join the Cozycare Family<br />
                    If you or a loved one requires home-based care services, we invite you to 
                    <a href="tel:+1234567890" style={{ textDecoration: 'underline', color: 'red' }}> contact us</a> 
                    to learn more about how we can help.
                </p>
            </div>

            {/* New Section: Why Choose CozyCare */}
            <section className="about-section why-choose-cozycare" style={{ marginBottom: "0", paddingBottom: "20px" }}>
                <div className="about-content">
                    <div className="left-column">
                        <h2 className="why-choose-heading">Why Choose CozyCare</h2>
                        <div className="divider"></div>
                        <div className="personalized-care">
                            <h3><strong>Personalized Care Plans:</strong></h3>
                            <p> Our care plans are tailored to meet your individual needs and preferences.</p>
                        </div>
                        <div className="expertise">
                            <h3><strong>Experienced Caregivers:</strong></h3>
                            <p>Our caregivers are carefully selected and trained to provide the highest quality of care.</p>
                        </div>
                        <div className="flexibility">
                            <h3><strong>Flexible Scheduling:</strong></h3>
                            <p>We offer flexible scheduling options to accommodate your lifestyle.</p>
                        </div>
                        <div className="affordability">
                            <h3><strong>Affordable Rates:</strong></h3>
                            <p>We provide competitive rates for our services.</p>
                        </div>
                        <div className="supportiveness">
                            <h3><strong>24/7 Support:</strong></h3>
                            <p>Our team is available to assist you around the clock.</p>
                        </div>
                        <img src="public/images/Untitled_design__11_-removebg-preview.png" alt="Responsive" className="small-image" />
                        <div className="responsiveness">
                            <p>
                                <b>Responsive</b> <br />
                                Serving as your trusted advisor while providing regular communication and 24/7 on-call support to ensure your needs are taken care of.
                            </p>
                        </div>
                    </div>

                    <div className="right-column">
                        <img src="public/images/Untitled_design__13_-removebg-preview.png" alt="Quality" className="small-image" />
                        <div className="responsiveness">
                            <p>
                                <b> Quality</b> <br />
                                Dedicated to delivering the highest quality care to all our patients and their loved ones.
                            </p>
                        </div>

                        <img src="public/images/Untitled_design__12_-removebg-preview.png" alt="Compassionate" className="small-image" />
                        <div className="responsiveness">
                            <p>
                                <b>Compassionate</b> <br />
                                Prioritizing patients’ dignity and quality of life, while offering unwavering support to them and their families.
                            </p>
                        </div>

                        <div className="explore-services">
                            <span>&#8594;&#93;</span>
                            <span className='text'><b>EXPLORE SERVICES</b></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
