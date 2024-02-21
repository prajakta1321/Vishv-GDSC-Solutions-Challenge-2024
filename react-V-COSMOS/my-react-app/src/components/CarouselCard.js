import React from 'react';
import './css/CarouselCard.css'; 

const CarouselCard = ({ sectionName, location }) => {
  return (
    <div className="carousel-card">
      <div className="media-section">
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
