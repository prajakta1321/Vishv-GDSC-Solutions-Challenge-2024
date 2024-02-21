import React from 'react';
import './css/SplitScreenComponent.css'; // Importing the CSS file
import leafs from './img/whitemount.jpg';
import paint_hand from './img/paint-hand.jpg'
import windmill from './img/windmill.jpg'
import hrg from './img/hourglass.jpg'
const SplitScreenComponent = () => {
  return (
    <div>
      <div className="container full-width-video">
        <div className="video-container">
        <img src={leafs} alt='img' ondragstart="return false;"></img>
          <div className="text-overlay"  >
          <p>We are dedicated and responsible individuals committed to observe the environmental changes and passionate about its impact all over the planet.</p>
          </div>
        </div>
      </div>


      <div className="container full-width-video">
        <div className="video-container">
        <img src={paint_hand} alt='img' ondragstart="return false;"></img>
          <div className="text-overlay">
          <p>Our goal is to deliver insights to alterations happening in the ecosystem and make individuals
realize the significance of the Habitat and earthly life forms.</p>
          </div>
        </div>
      </div>
      <div className="container full-width-video">
        <div className="video-container">
        <img src={windmill} alt='img' ondragstart="return false;"></img>
          <div className="text-overlay">
          <p>At (website name ), we bring  together the diverse factors affecting the Ecosystem related
to the Locale from climate, temperature, energy, aquatic life, oceanic changes, Biota on land  
as well as flora and fauna of the earth.
</p>
          </div>
        </div>
      </div>

      <div className="container full-width-video">
        <div className="video-container">
        <img src={hrg} alt='img' ondragstart="return false;"></img>
          <div className="text-overlay">
          <p>We also encourage individuals to trail their own contribution through various activities and
realise them on their significance to the Realm.

Various Learning Content as well as updates on current changes in the ecosystem are encouraged.
</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SplitScreenComponent;
