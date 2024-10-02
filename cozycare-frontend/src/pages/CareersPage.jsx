// import React from 'react';
import './styles/CareersPage.css'; // Ensure you have this CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="careers-content">
        {/* Left Side - Headings and Text */}
        <div className="careers-left">
          <h1>Current Openings at CozyMore</h1>
          <hr className="careers-divider" />
          <h2><b>CozyCare exists to expand <br /> the world's capacity to care</b></h2>
          <p>
            Caring for others starts with caring for our employees. Join a team that <br />
            makes people’s lives better.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="careers-right">
          <img src='cozycare-frontend/public/images/careers1.png' alt="CozyCare Careers" className="careers-image" />
        </div>
      </div>

      {/* Search Section */}
      <div className="careers-search">
        <div className="search-left">
          <h3>Keywords</h3>
          <div className="search-box">
            <input type="text" placeholder="Search..." className="keyword-input" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>

        {/* Filters Section */}
        <div className="search-filters">
          <div className="filters-row">
            <div className="filter-location">
              <h4>Location</h4>
              <div className="dropdown">
                <select className="dropdown-select">
                  <option>Select a region</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
              </div>
            </div>
            <div className="filter-department">
              <h4>Department</h4>
              <div className="dropdown">
                <select className="dropdown-select">
                  <option>Select a department</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
              </div>
            </div>
          </div>
          <div className="filters-actions">
            <button className="clear-btn">Clear Search</button>
            <button className="search-btn">Search</button>
          </div>
        </div>

        

        {/* Last Section */}

      </div>
      
      {/* Job Listings Section */}
        <div className="corporate">
          <h3>Corporate/HQ</h3>
          <div className="first-job">
            <p className="type">Remote</p>
            <div>
              <h4>Social Media and Content Manager</h4>
              <p>We are seeking a dynamic and experienced Social Media Content Manager to lead our social media and content strategy. This role requires a creative thinker with a passion for storytelling, a deep...</p>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="first-job">
            <p className="type">Remote</p>
            <div>
              <h4>Senior Counsel</h4>
              <p>Our legal team is a key driver of this transformation, working as a high-performing, collaborative force that partners closely with business and operations teams. Together, we navigate the dynamic...</p>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>        
      <div className="last-section">
          <h3>Get to know us better</h3>
          <p><i>CozyCare is the region’s largest home care network revolutionizing how society cares for older adults and Care Professionals. Learn why and how we’re changing aging.</i></p>
          <button className="learn-btn">Read our story</button>
        </div>
    </div>
  );
};

export default CareersPage;
