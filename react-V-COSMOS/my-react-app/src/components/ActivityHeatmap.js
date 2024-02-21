import React, { useRef } from 'react';
import './css/ActivityHeatmap.css';

const ActivityHeatmap = () => {
  const heatmapRef = useRef(null); // Reference for the heatmap container

  // Function to scroll the heatmap to the left
  const scrollLeft = () => {
    if (heatmapRef.current) {
      heatmapRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to scroll the heatmap to the right
  const scrollRight = () => {
    if (heatmapRef.current) {
      heatmapRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Simulated activity data for 12 months
  const activityData = [
    { name: 'Jan', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Feb', days: Array(28).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Mar', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Apr', days: Array(30).fill(false).map(() => Math.random() > 0.5) },
    { name: 'May', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Jun', days: Array(30).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Jul', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Aug', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Sep', days: Array(30).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Oct', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Nov', days: Array(30).fill(false).map(() => Math.random() > 0.5) },
    { name: 'Dec', days: Array(31).fill(false).map(() => Math.random() > 0.5) },
  ];

  return (
    <div className="heatmap-container">
      {/* Scroll buttons */}
      <div className="year-change-buttons">
        <button onClick={scrollLeft}>&lt; Left</button>
        <button onClick={scrollRight}>Right &gt;</button>
      </div>

      {/* Heatmap display */}
      <div className="heatmap" ref={heatmapRef}>
        {activityData.map((monthData, index) => (
          <div key={index} className="month">
            {monthData.days.map((active, dayIndex) => (
              <div key={dayIndex} className={`day ${active ? 'active' : ''}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityHeatmap;
