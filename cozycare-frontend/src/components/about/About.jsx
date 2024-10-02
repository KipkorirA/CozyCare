import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { useState } from 'react'; // React hook for state
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './AboutUs.css'; // Custom CSS for the About Us section

const AboutUs = () => {
    const [progress, setProgress] = useState(0); // State to track the progress

    const updateProgress = (swiper) => {
        const totalSlides = swiper.slides.length;
        const currentSlideIndex = swiper.realIndex + 1;
        const progressPercentage = (currentSlideIndex / totalSlides) * 100;
        setProgress(progressPercentage); // Update progress bar based on slide position
    };

    return (
        <section className="about-us-section">
            <div className="about-us-carousel">
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={1} // Show one slide at a time
                    loop={true} // Enable infinite loop
                    onSlideChange={updateProgress} // Update progress when the slide changes
                    pagination={{ clickable: true }} // Enable pagination bullets (optional, can be removed)
                    grabCursor={true} // Enable grab cursor for mouse drag
                >
                    {/* First slide */}
                    <SwiperSlide>
                        <div className="cloud-text-1" style={{ left: '50%', top: '50%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/about" className='cloud-text-link'><u>Learn more</u></Link>
                            </p>
                        </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__6_-removebg-preview.png" alt="CozyCare Slide 1" />
                        </div>
                    </SwiperSlide>

                    {/* Second slide */}
                    <SwiperSlide>
                        <div className="cloud-text-2" style={{ left: '10%', top: '75%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/learn-more" className='cloud-text-link'><u>Learn more</u></Link>
                            </p>
                        </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__5_-removebg-preview.png" alt="CozyCare Slide 2" />
                        </div>
                    </SwiperSlide>

                    {/* Third slide */}
                    <SwiperSlide>
                        <div className="cloud-text-3" style={{ left: '4%', top: '69%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/learn-more" className='cloud-text-link'><u>Learn more</u></Link>
                            </p>
                        </div>
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__4_-removebg-preview.png" alt="CozyCare Slide 3" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
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
