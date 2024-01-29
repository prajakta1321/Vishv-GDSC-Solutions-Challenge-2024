import React from 'react';
import Button from '../components/button'; 
import FullScreenImage from '../components/FullScreenImage1';
import img2 from './img/contri-1.jpg' ; 
import img1 from './img/contri-2.jpg' ; 
import ActivityHeatmap from '../components/ActivityHeatmap'
const Contribution = () => {
  return (
    <>
    <Button />
    <FullScreenImage 
        imageUrl= {img1} 
        text="Your contribution, no matter how small,
         is a vital piece in the mosaic of positive change for our planet.
          Every action you take towards sustainability counts in building a brighter and greener future." 
      />
      <ActivityHeatmap />
          <FullScreenImage 
        imageUrl= {img2} 
        text="Your contribution, no matter how modest, 
        is a powerful catalyst for positive change in the journey towards a sustainable future." 
      />
    </>
  );
};

export default Contribution;
