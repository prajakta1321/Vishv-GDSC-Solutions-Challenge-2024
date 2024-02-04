/* global google */
import './css/globe.css'
import React, { useEffect,useState } from 'react';

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
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  useEffect(() => {
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCISFRnQRk-SNhVv-0CUVh25MaY0jYLlsU&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => console.error('Google Maps script failed to load.');
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    // No specific cleanup is defined here, but consider removing event listeners or global variables if not needed anymore
  }, []);

  // Define the function to zoom into India
  const exploreLocation = () => {
    if (selectedCountry === 'India') {
      window.myMap.setCenter({ lat: 20.5937, lng: 78.9629 });
      window.myMap.setZoom(5);
    }
    // You can add more conditions or a switch case for other countries
  };
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
      </div>

    </div>
  );
};

export default MyGlobe;

