import React from 'react';
import './css/CarouselComponent.css';
import img1 from './img/img1.jpg';
import img2 from './img/login card.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

const users = [
  {
    name: 'Gaining Insights',
    image: img1,
    link: '/insights' // Add your desired path
  },
  {
    name: 'Latest',
    image: img3,
    link: '/latest'
  },
  {
    name: 'Your Contribution',
    image: img4,
    link: '/contribution'
  },
  {
    name: 'Login',
    image: img2,
    link: '/login'
  },

  // ... more users
];

const Card1 = () => {
  return (
    <div className="card-container">
      {users.map((user, index) => (
        <a href={user.link} className="card" key={index}> {/* Use Link component if using React Router */}
          <img className="card-image" src={user.image} alt={user.name} />
          <div className="card-info">
            <h3 className="card-name">{user.name}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card1;
