import React from 'react';
import './css/Latest.css'; 
import img1 from './img/latest1.jpg'
import img2 from './img/latest4.jpg'
import img3 from './img/latest6.jpg'
import Button from '../components/button'; 
import CarouselCard from '../components/CarouselCard';

const Insights = () => {
  return (
    <>
      <Button />
      <div className="insights-container">
        <div className="left-side">
          <div className="image-container image1">
            <img src={img1} className="overlapping-image" alt="First" />
          </div>
          <div className="image-container image2">
            <img src={img2} className="overlapping-image" alt="Second" />
          </div>
          <div className="image-container image3">
            <img src={img3} className="overlapping-image" alt="Third" />
          </div>
        </div>
        <div className="right-side">
          <div className="carousel-container">
            <CarouselCard sectionName="Section 1" location="Location 1" />
            <CarouselCard sectionName="Section 2" location="Location 2" />
            <CarouselCard sectionName="Section 3" location="Location 3" />

          </div>
          <div className='btn-ctn'>
            <button>Post</button>
            <button>Group</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
