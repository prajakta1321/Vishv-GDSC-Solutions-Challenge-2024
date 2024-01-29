// CarouselCard.js
import React from 'react';
import './css/CarouselCard.css'; // Assuming you have a separate CSS file for CarouselCard

const CarouselCard = ({ sectionName, location }) => {
  return (
    <div className="carousel-card">
      <div className="media-section">
        {/* Upload Button */}
        <button className="upload-button">Upload Image/Video</button>

        <div className="media-info">
          <p>{sectionName}</p>
          <p>{location}</p>
        </div>
        <div className="media-controls">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className="text-section">
        <textarea placeholder="Your text here..."></textarea>
      </div>
    </div>
  );
};

export default CarouselCard;
