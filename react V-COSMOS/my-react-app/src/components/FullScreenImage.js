// FullScreenImage.js
import React from 'react';
import './css/FullScreenImage.css';

const FullScreenImage = ({ imageUrl, text }) => {
  return (
    <div className="full-screen-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="dark-overlay">
        <p className="image-text">{text}</p>
      </div>
    </div>
  );
};

export default FullScreenImage;
