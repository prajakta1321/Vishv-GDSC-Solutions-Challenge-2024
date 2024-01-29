import React, { useState } from 'react';
import './css/ActivityHeatmap.css'; // Make sure to update this CSS file as per the styles below

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const generateMonthGrid = (days, monthIndex) => {
  const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay();
  const padding = Array.from({ length: firstDay }, () => false);
  const daysArray = [...padding, ...Array.from({ length: days }, () => Math.random() > 0.5)];
  return daysArray;
};

const ActivityHeatmap = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [userInput, setUserInput] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const activityData = months.map((month, index) => ({
    name: month,
    days: generateMonthGrid(daysInMonth[index], index)
  }));

  return (
    <div className="heatmap-container">
      <div className="heatmap-header">
        {isEditing ? (
          <>
            <div className="question">What do you want to change?</div>
            <input
              className="elegant-input"
              type="text"
              value={userInput}
              onChange={handleInputChange}
            />
            <input
              className="elegant-input"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <button className="elegant-button" onClick={handleSave}>Save</button>
          </>
        ) : (
          <button className="elegant-button" onClick={handleEdit}>Edit</button>
        )}
      </div>
      <div className="heatmap">
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
