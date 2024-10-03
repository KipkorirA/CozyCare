// Importing necessary modules and components
import { Link } from 'react-router-dom';  // For navigation between pages using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // FontAwesome for icons
import { faPhone } from '@fortawesome/free-solid-svg-icons';  // Specific icon (phone icon)
import { Swiper, SwiperSlide } from 'swiper/react';  // Swiper components for carousel/slider functionality
import { useState } from 'react';  // React Hook for managing component state
import 'swiper/swiper-bundle.css';  // Import Swiper's CSS styles
import './AboutUs.css';  // Custom styles for the AboutUs component

const AboutUs = () => {
    // Defining state for progress bar, which is updated based on the slide index
    const [progress, setProgress] = useState(0);

    // Function to update the progress bar percentage based on the current slide
    const updateProgress = (swiper) => {
        const totalSlides = swiper.slides.length;  // Total number of slides
        const currentSlideIndex = swiper.realIndex + 1;  // Index of the currently active slide (1-based)
        const progressPercentage = (currentSlideIndex / totalSlides) * 100;  // Calculate progress percentage
        setProgress(progressPercentage);  // Update progress state
    };

    return (
        <section className="about-us-section">
            {/* Carousel for displaying slides */}
            <div className="about-us-carousel">
                <Swiper
                    spaceBetween={50}  // Space between slides
                    slidesPerView={1}  // Only one slide visible at a time
                    loop={true}  // Enable infinite looping of slides
                    onSlideChange={updateProgress}  // Update progress bar when the slide changes
                    pagination={{ clickable: true }}  // Enable clickable pagination bullets
                    grabCursor={true}  // Enable grabbing cursor during slide dragging
                >
                    {/* First slide */}
                    <SwiperSlide>
                        {/* Text element on the slide, positioned absolutely with inline styles */}
                        <div className="cloud-text-1" style={{ left: '50%', top: '50%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                {/* Link to the "about" page */}
                                <Link to="/about" className='cloud-text-link' aria-label="Learn more about CozyCare"><u>Learn more</u></Link>
                            </p>
                        </div>
                        {/* Image for the first slide */}
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__6_-removebg-preview.png" 
                                 alt="Woman receiving care at home through CozyCare services" 
                                 loading="lazy" />  {/* Lazy loading image for performance */}
                        </div>
                    </SwiperSlide>

                    {/* Second slide */}
                    <SwiperSlide>
                        <div className="cloud-text-2" style={{ left: '10%', top: '75%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                {/* Link to the "learn-more" page */}
                                <Link to="/learn-more" className='cloud-text-link' aria-label="Learn more about home healthcare services"><u>Learn more</u></Link>
                            </p>
                        </div>
                        {/* Image for the second slide */}
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__5_-removebg-preview.png" 
                                 alt="Healthcare professional assisting a patient at home with CozyCare" 
                                 loading="lazy" />  {/* Lazy loading image */}
                        </div>
                    </SwiperSlide>

                    {/* Third slide */}
                    <SwiperSlide>
                        <div className="cloud-text-3" style={{ left: '4%', top: '69%', zIndex: 2 }}>
                            <p>Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                {/* Link to the "learn-more" page */}
                                <Link to="/learn-more" className='cloud-text-link' aria-label="Learn more about personalized care at home"><u>Learn more</u></Link>
                            </p>
                        </div>
                        {/* Image for the third slide */}
                        <div className="seed-shaped">
                            <img src="public/images/CozyCare__4_-removebg-preview.png" 
                                 alt="Elderly person receiving home care service by CozyCare" 
                                 loading="lazy" />  {/* Lazy loading image */}
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Progress bar to visually indicate slide progress */}
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            {/* Section for CozyCare description and contact information */}
            <div className="about-us-text">
                <h1>WHAT IS COZYCARE</h1>
                <hr />
                <h2>Comprehensive Health Services</h2>
                <p>
                    CozyCare is a holistic health service provider offering tailored care solutions in the comfort of your home.
                    From everyday healthcare needs to specialized services, we ensure you receive the best care at affordable prices.
                </p>
                {/* Contact section with a link and phone icon */}
                <div className="contact-container">
                    <Link to="/contact" className="contact-us-link" aria-label="Go to CozyCare contact page">Contact Us</Link>
                    <div className="phone-icon-container">
                        {/* Phone icon with ARIA label for screen readers */}
                        <FontAwesomeIcon icon={faPhone} className="phone-icon" aria-label="Phone icon to contact CozyCare" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
