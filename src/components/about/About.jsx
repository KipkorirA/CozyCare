// import React and necessary libraries
// import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './AboutUs.css'; // Custom CSS for the About Us section

const AboutUs = () => {
    return (
        <section className="about-us-section">
            <div className="about-us-carousel">
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={1} // Show one slide at a time
                    pagination={{ clickable: true }} // Enable pagination bullets
                    grabCursor={true} // Enable grab cursor for mouse drag
                    loop={true} // Infinite loop mode
                >
                    {/* First slide */}
                    
                    <SwiperSlide>
                    <div className="cloud-text" style={{ left: '62%', top: '70%' }}>
                                <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br></br>
                                <a><u>Learn more</u></a></p>
                            </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__6_-removebg-preview.png" alt="CozyCare Slide 1" />
                        </div>
                    </SwiperSlide>
                    

                    {/* Second slide */}
                    <SwiperSlide>
                    <div className="cloud-text" style={{ left: '30%', top: '75%' }}>
                                <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br></br>
                                <a><u>Learn more</u></a></p>
                            </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__5_-removebg-preview.png" alt="CozyCare Slide 2" />
                        </div>
                    </SwiperSlide>

                    {/* Third slide */}
                    <SwiperSlide>
                    <div className="cloud-text" style={{ left: '25%', top: '75%' }}>
                                <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br></br>
                                <a><u>Learn more</u></a></p>
                            </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__4_-removebg-preview.png" alt="CozyCare Slide 3" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="about-us-text">
                <h1>WHAT IS COZYCARE</h1>
                <hr />
                <h2>Comprehensive Health Services</h2>
                <p>
                    CozyCare is a holistic health service provider offering tailored care solutions in the comfort of your home.
                    From everyday healthcare needs to specialized services, we ensure you receive the best care at affordable prices.
                </p>
                <div className="contact-container">
                    <Link to="/contact" className="contact-us-link">Contact Us</Link>
                    <div className="phone-icon-container">
                        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
