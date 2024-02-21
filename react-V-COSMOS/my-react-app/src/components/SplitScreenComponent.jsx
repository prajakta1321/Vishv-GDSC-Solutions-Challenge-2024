import React, { useState, useEffect } from 'react';
import './css/SplitScreenComponent.css'; 
import leafs from './img/whitemount.jpg';
import paint_hand from './img/paint-hand.jpg';
import windmill from './img/windmill.jpg';
import hrg from './img/hourglass.jpg';
import { translateText } from './api/translate'; 
import { useLanguage } from '../contexts/LanguageContext';

const SplitScreenComponent = () => {
  const { language } = useLanguage(); 
  const [translatedTexts, setTranslatedTexts] = useState([]);

  useEffect(() => {
    const texts = [
      'We are dedicated and responsible individuals committed to observe the environmental changes and passionate about its impact all over the planet.',
      'Our goal is to deliver insights to alterations happening in the ecosystem and make individuals realize the significance of the Habitat and earthly life forms.',
      'At Vishv, we bring together the diverse factors affecting the Ecosystem related to the Locale from climate, temperature, energy, aquatic life, oceanic changes, Biota on land as well as flora and fauna of the earth.',
      'We also encourage individuals to trail their own contribution through various activities and realise them on their significance to the Realm. Various Learning Content as well as updates on current changes in the ecosystem are encouraged.'
    ];

    Promise.all(texts.map(text => translateText(text, language))) 
      .then(translated => setTranslatedTexts(translated));
  }, [language]); 
  
  return (
    <div>
      <div className="container full-width-video">
        <div className="video-container">
          <img src={leafs} alt="Environmental Changes" draggable="false" />
          <div className="text-overlay">
            <p>{translatedTexts[0]}</p>
          </div>
        </div>
      </div>

      <div className="container full-width-video">
        <div className="video-container">
          <img src={paint_hand} alt="Ecosystem Insights" draggable="false" />
          <div className="text-overlay">
            <p>{translatedTexts[1]}</p>
          </div>
        </div>
      </div>

      <div className="container full-width-video">
        <div className="video-container">
          <img src={windmill} alt="Ecosystem Diversity" draggable="false" />
          <div className="text-overlay">
            <p>{translatedTexts[2]}</p>
          </div>
        </div>
      </div>

      <div className="container full-width-video">
        <div className="video-container">
          <img src={hrg} alt="Individual Contribution" draggable="false" />
          <div className="text-overlay">
            <p>{translatedTexts[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenComponent;
