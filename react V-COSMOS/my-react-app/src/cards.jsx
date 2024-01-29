import React from 'react';
import './CarouselComponent.css'; // Make sure to create this CSS file
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
// Define the users array directly in this file
const users = [
  {
    name: 'Gaining Insights',
    image: img1 // Replace with actual image path
  },
  {
    name: 'Latest',
    image: img2 // Replace with actual image path
  },
  {
    name: 'Community',
    image: img3 // Replace with actual image path
  },
  {
    name: 'Your Contribution',
    image: img4 // Replace with actual image path
  },
 
  // ... you can add more user objects here renewable energy 
];

const card1 = () => {
  return (
    <div className="card-container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img className="card-image" src={user.image} alt={user.name} />
          <div className="card-info">
            <h3 className="card-name">{user.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default card1;