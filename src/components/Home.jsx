// import React from 'react';
import PreviewCard from './PreviewCard';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Our Website</h1>
            <section>
                <h2>About Us</h2>
                <PreviewCard title="About Us" link="/about" />
            </section>
            <section>
                <h2>Services</h2>
                <PreviewCard title="Our Services" link="/services" />
            </section>
            <section>
                <h2>Feedback</h2>
                <PreviewCard title="Feedback" link="/feedback" />
            </section>
            <section>
                <h2>Contact</h2>
                <PreviewCard title="Contact Us" link="/contact" />
            </section>
            <section>
                <h2>Pricing</h2>
                <PreviewCard title="Pricing" link="/pricing" />
            </section>
            <section>
                <h2>Careers</h2>
                <PreviewCard title="Careers" link="/careers" />
            </section>
        </div>
    );
};

export default Home;
