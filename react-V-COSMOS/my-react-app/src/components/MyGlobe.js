/* global google */
import './css/globe.css'
import React, { useEffect,useState } from 'react';
import { translateText } from './api/translate'; // Adjust the import path as necessary
import { useLanguage } from '../contexts/LanguageContext';

const continents = {
  'Asia': ['India', 'China', 'Japan'],
  'Europe': ['Germany', 'France', 'Italy'],
  // ... other continents
};

const continentCoords = {
  'Asia': { lat: 34.0479, lng: 100.6197, zoom: 3 },
  'Europe': { lat: 54.5260, lng: 15.2551, zoom: 4 },
  // ... coordinates for other continents
};
// Ensure initMap is available globally
window.initMap = function() {
  setTimeout(() => {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map container not found.');
      return;
    }

    // Initialize the map and store it on window for global access
    const map = new google.maps.Map(mapElement, {
      zoom: 2,
      center: { lat: 0, lng: 0 },
      mapTypeId: 'satellite',
    });

    // Assign the map object to window for access from other functions
    window.myMap = map;
  }, 100);
};

const MyGlobe = () => {
  const renderSpeedometer = () => {
    if (PM25Value === null) {
      return null;
    }
  
    const maxPM25Value = 300; // Maximum value for PM2.5 scale
    const angleRange = 180; // Speedometer covers 180 degrees
    const valueRatio = PM25Value / maxPM25Value;
    const needleAngle = angleRange * valueRatio - 90; // Offset by 90 degrees for the correct start position
  
    // Calculate needle end position using simple trigonometry
    const radius = 40; // Radius of the circle part of the speedometer
    const svgWidth = 200;
    const svgHeight = 110;
    const needleLength = 55; // Length of the needle from center to end
  
    // Center point of the semi-circle
    const centerX = svgWidth / 2;
    const centerY = svgHeight - 30;
  
    // End point of the needle
    const endX = centerX + needleLength * Math.cos(Math.PI * needleAngle / 180);
    const endY = centerY + needleLength * Math.sin(Math.PI * needleAngle / 180);
  
    return (
      <svg width={svgWidth} height={svgHeight}>
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="black" strokeWidth="2" />
        <line x1={centerX} y1={centerY} x2={endX} y2={endY} stroke="red" strokeWidth="2" />
        {/* Center circle for the needle */}
        <circle cx={centerX} cy={centerY} r="3" fill="red" />
        {/* Optionally, add more elements like labels or ticks */}
      </svg>
    );
  };
  
  
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [PM25Value, setPM25Value] = useState(null);
  const { language } = useLanguage(); // Use the current language state
  const [translatedTexts, setTranslatedTexts] = useState([]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // getMonth() is zero-indexed
  const day = currentDate.getDate();
  const renderPM25Value = () => {
    const PM25Value1 = Number(PM25Value).toFixed(2);
    if (PM25Value) {
      let description;
      if (PM25Value1 > 0 && PM25Value <= 12) {
        description = translatedTexts[0] ;
      } else if (PM25Value > 12 && PM25Value <= 35.4) {
        description = translatedTexts[1];
      } else if (PM25Value > 35.4 && PM25Value <= 55.4) {
        description = translatedTexts[2];
      } else if (PM25Value > 55.4 && PM25Value <= 150.4) {
        description = translatedTexts[3];
      } else if (PM25Value > 150.4 && PM25Value <= 250.4) {
        description = translatedTexts[4];
      } else {
        description = translatedTexts[5];
      }
  
      return <p className="pm25-display">{translatedTexts[6]} {PM25Value1} {translatedTexts[7]} <br></br> {description}</p>;
    } else {
      return <p className="pm25-display"></p>;
    }
  };
  

  useEffect(() => {
    const texts = [
      'Good - Air quality is considered satisfactory, and air pollution poses little or no risk.',
      'Moderate - Air quality is acceptable; however, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
      'Unhealthy for Sensitive Groups - Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
      'Unhealthy - Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
      'Very Unhealthy - Health alert: everyone may experience more serious health effects.',
      'Hazardous - Health warnings of emergency conditions. The entire population is more likely to be affected.',
      'The PM2.5 is:',
      'µg/m³.'
      

    ];
    Promise.all(texts.map(text => translateText(text, language))) // Use the language state
    .then(translated => setTranslatedTexts(translated));
    
    const scriptId = 'google-maps-script';

    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        window.initMap();
        return;
      }

      if (document.getElementById(scriptId)) {
        return;
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=redacted&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => console.error('Google Maps script failed to load.');
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    // No specific cleanup is defined here, but consider removing event listeners or global variables if not needed anymore
  }, [language]);

  // Define the function to zoom into India
  const exploreLocation = () => {
    const countryCoords = {
      'India': { lat: 20.5937, lng: 78.9629, zoom: 5 },
      'Indonesia': { lat: -0.7893, lng: 113.9213, zoom: 5 },
      'Bangladesh': { lat: 23.8103, lng: 90.4125, zoom: 7 },
      'United Kingdom': { lat: 51.5074, lng: -0.1278, zoom: 10 },
    };
  
    if (countryCoords[selectedCountry]) {
      const { lat, lng, zoom } = countryCoords[selectedCountry];
      window.myMap.setCenter({ lat, lng });
      window.myMap.setZoom(zoom);
  
      // Use the current date for the request
      const data = {
        YEAR: year,
        MONTH: month,
        DAY: day,
        CATEGORY: selectedCountry.toLowerCase(),
      };
  
      // Send the POST request
      fetch('https://coral-smoke-411614.uc.r.appspot.com/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        setPM25Value(data.data[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };
  
  const continents = {
    'Asia': ['India','Indonesia', 'Bangladesh'],
    'Europe': [ 'United Kingdom'],
    'North America': [],
    'South America': [],
    'Africa': [],
    'Australia': [], // Australia is both a country and a continent
    'Antarctica': [] // No countries, Antarctica is not divided into countries
  };
  
  const continentCoords = {
    'Asia': { lat: 34.0479, lng: 100.6197, zoom: 3 },
    'Europe': { lat: 54.5260, lng: 15.2551, zoom: 4 },
    'North America': { lat: 54.5260, lng: -105.2551, zoom: 3 },
    'South America': { lat: -8.7832, lng: -55.4915, zoom: 3 },
    'Africa': { lat: 1.6508, lng: 27.6662, zoom: 3 },
    'Australia': { lat: -25.2744, lng: 133.7751, zoom: 3 },
    'Antarctica': { lat: -82.8628, lng: 135.0000, zoom: 3 } // Coordinates are approximate
  };
  

  const handleContinentChange = (event) => {
    const continent = event.target.value;
    setSelectedContinent(continent);
    setSelectedCountry(''); // Reset country selection when continent changes

    if (continent && continentCoords[continent]) {
      const { lat, lng, zoom } = continentCoords[continent];
      window.myMap.setCenter({ lat, lng });
      window.myMap.setZoom(zoom);
    }
  };


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container1">
      <div className="globe-container">
        <div id="map" style={{ height: '100%', width: '100%' }}></div>
      </div>
      <div className="other-components">
      <select 
          value={selectedContinent} 
          onChange={handleContinentChange} 
          className="dropdown"
        >
          <option value="">Select Continent</option>
          {Object.keys(continents).map((continent) => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>
        
        {selectedContinent && (
          <select 
            value={selectedCountry} 
            onChange={handleCountryChange} 
            className="dropdown"
            disabled={!selectedContinent}
          >
            <option value="">Select Country</option>
            {continents[selectedContinent].map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        )}

        <button onClick={exploreLocation} className="explore-button">
          
          Explore
        </button>
        {renderSpeedometer()}
        {renderPM25Value()}
      </div>

    </div>
  );
};

export default MyGlobe;

