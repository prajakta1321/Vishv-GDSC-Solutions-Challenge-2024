import React from 'react';
import './SplitScreenComponent.css'; // Importing the CSS file
import vid1 from './vid3.mp4';
import vid2 from './vid4.mp4';
import vid3 from './vid5.mp4';
import vid4 from './vid6.mp4';
const SplitScreenComponent = () => {
  return (
    <div>
      <div className="container">
        <div className="video-container">
          <video autoPlay loop muted width="100%">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <p>We are dedicated and responsible individuals committed to observe the environmental changes and passionate about its impact all over the planet.</p>
        </div>
      </div>

      <div className="container">
        <div className="text-container">
          <p>We are dedicated and responsible individuals committed to observe the environmental changes and passionate about its impact all over the planet.</p>
        </div>
        <div className="video-container">
          <video autoPlay loop muted width="100%">
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="container">
        <div className="video-container">
          <video autoPlay loop muted width="100%">
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <p>At (website name ), we bring  together the diverse factors affecting the Ecosystem related
to the Locale from climate, temperature, energy, aquatic life, oceanic changes, Biota on land  
as well as flora and fauna of the earth.
</p>
        </div>
      </div>

      <div className="container">
        <div className="text-container">
          <p>We also encourage individuals to trail their own contribution through various activities and
realise them on their significance to the Realm.

Various Learning Content as well as updates on current changes in the ecosystem are encouraged.
</p>
        </div>
        <div className="video-container">
          <video autoPlay loop muted width="100%">
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      
    </div>
  );
};

export default SplitScreenComponent;
