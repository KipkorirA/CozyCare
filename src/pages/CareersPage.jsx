/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import './styles/CareersPage.css'; // Ensure you have this CSS file for styles

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
            Caring for others starts with caring for our employees. Join a team that <br></br>
            makes people’s lives better.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="careers-right">
          <img src="public/images/careers1.png" alt="CozyCare Careers" className="careers-image" />
        </div>
      </div>

      {/* Search Section */}
      <div className="careers-search">
        <div className="search-left">
          <h3>Keywords</h3>
          <div className="search-box">
            <input type="text" placeholder="Search..." className="keyword-input" />
            <i className="fas fa-search search-icon"></i>
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
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </div>
            </div>
            <div className="filter-department">
              <h4>Department</h4>
              <div className="dropdown">
                <select className="dropdown-select">
                  <option>Select a department</option>
                </select>
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </div>
            </div>
          </div>
          <div className="filters-actions">
            <button className="clear-btn">Clear Search</button>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
