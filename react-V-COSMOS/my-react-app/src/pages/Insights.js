import React from 'react';
import FullScreenImage from '../components/FullScreenImage';
import Button from '../components/button'; 
import leafs from './img/leafs.jpg' ; 
import Card1 from '../components/cards1';
import lower from './img/lower-img.jpg'
import './css/Insights.css';
const Latest = () => {
  return (
    <>
      <Button />
      
      <FullScreenImage 
        imageUrl= {leafs} 
        text="Explore climate knowledge and be a force for a greener, healthier Earth." 
      />
<div className='space'></div>
    <Card1/>
    <div className='space'></div>
    <FullScreenImage 
        imageUrl= {lower} 
        text="Learning about climate change helps us protect our planet for a better tomorrow" 
      />
      <div className='space'></div>
    </>
  );
};

export default Latest;
