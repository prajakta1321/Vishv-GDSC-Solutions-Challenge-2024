import React from 'react';
import Globe from 'react-globe.gl';

const MyGlobe = () => {
  const earthTextureUrl = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  return (
    <div style={{ width: '75%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', minHeight: '500px' }}>
      <Globe
        width={400} // Set a specific width for the globe
        height={400} // Set a specific height for the globe
        globeImageUrl={earthTextureUrl}
        // Add more props as needed for customization
      />
    </div>
  );
};

export default MyGlobe;
