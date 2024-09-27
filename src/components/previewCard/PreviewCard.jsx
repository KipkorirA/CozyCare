// import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewCard.css'; // Import the styling for the PreviewCard

const PreviewCard = ({ image, title, description, link }) => {
    return (
        <div className="preview-card">
            <div className="preview-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="preview-card-content">
                <h3 className="preview-card-title">{title}</h3>
                <p className="preview-card-description">{description}</p>
                <Link to={link} className="preview-card-link">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default PreviewCard;
