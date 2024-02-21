import React from 'react';
import './css/cards.css';
import img1 from './img/forests.jpg';
import img2 from './img/animals.jpg';
import img3 from './img/birds.jpg';
import img4 from './img/temperarure.jpg';
import img5 from './img/air.jpg';
import img6 from './img/oceans.jpg';
import img7 from './img/soil.jpg';
import img8 from './img/health.jpg';
import img9 from './img/transport.jpg';
import img10 from './img/food.jpg';
import img11 from './img/travel.jpg';
import img12 from './img/climate.jpg';
import img13 from './img/energy.jpg';

const users = [
  {
    name: 'Forests',
    image: img1,
    link: '/'
  },
  {
    name: 'Animals',
    image: img2,
    link: '/'
  },
  {
    name: 'Birds',
    image: img3,
    link: '/'
  },
  {
    name: 'Temperature',
    image: img4,
    link: '/contribution'
  },
  {
    name: 'Air',
    image: img5,
    link: '/' 
  },
  {
    name: 'Oceans',
    image: img6,
    link: '/'
  },
  {
    name: 'Soil',
    image: img7,
    link: '/'
  },
  {
    name: 'Health',
    image: img8,
    link: '/contribution'
  },

  {
    name: 'Transportation',
    image: img9,
    link: '/'
  },
  {
    name: 'Food',
    image: img10,
    link: '/contribution'
  },
  {
    name: 'Travel',
    image: img11,
    link: '/' 
  },
  {
    name: 'Climate',
    image: img12,
    link: '/'
  },
  {
    name: 'Energy',
    image: img13,
    link: '/'
  },

];

const Card1 = () => {
  return (
    <div className="card-container">
      {users.map((user, index) => (
        <a href={user.link} className="card" key={index}> 
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
