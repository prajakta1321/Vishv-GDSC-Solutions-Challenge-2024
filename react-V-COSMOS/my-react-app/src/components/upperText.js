import React, { useState } from 'react';
import './css/upperText.css'; 
const UpperText = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [trackerType, setTrackerType] = useState('');
  const [environmentalAction, setEnvironmentalAction] = useState('');
  const [resourceSaved, setResourceSaved] = useState('');
  const [resourceUnit, setResourceUnit] = useState('');
  const [frequency, setFrequency] = useState('');
  const [trackedActions, setTrackedActions] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleTrackerTypeChange = (event) => {
    setTrackerType(event.target.value);
  };

  const handleEnvironmentalActionChange = (event) => {
    setEnvironmentalAction(event.target.value);
  };

  const handleResourceSavedChange = (event) => {
    setResourceSaved(event.target.value);
  };

  const handleResourceUnitChange = (event) => {
    setResourceUnit(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAction = {
      trackerType,
      environmentalAction,
      resourceSaved: `${resourceSaved} ${resourceUnit}`,
      frequency,
      date: new Date().toLocaleString()
    };
    setTrackedActions([...trackedActions, newAction]);
    // Reset form after submission
    setEnvironmentalAction('');
    setResourceSaved('');
    setResourceUnit('');
    setFrequency('Basic');
  };

  return (
    <>
    <div className="welcome-container">
    <h2>Your daily contribution towards a more resilient planet!</h2>
      <p>
        "Track your daily eco-footprint, monitor monthly progress, 
        and celebrate annual milestones with our Environmental 
        Contribution Tracker - making every action count towards a 
        greener tomorrow!"
      </p>
    </div>
    <div className="container">
      <div className="tracker-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>How consistently do you engage in the environmental actions you've listed?</label>
            <select value={trackerType} onChange={handleTrackerTypeChange}>
            <option value="" disabled>Select</option>
            <option value="Day">Day</option>
              <option value="Month">Month</option>
              <option value="Annual">Annual</option>
            </select>
          </div>

          <div className="form-group">
              <label>Select Date:</label>
              <input 
                type="date" 
                value={selectedDate} 
                onChange={handleDateChange} 
              />
            </div>

          <div className="form-group">
            <label>What type of environmental action do you want to take?</label>
            <input 
              type="text" 
              value={environmentalAction} 
              onChange={handleEnvironmentalActionChange} 
            />
          </div>
          <div className="form-group">
            <label>Resources Saved:</label>
            <input 
              type="number" 
              value={resourceSaved} 
              onChange={handleResourceSavedChange} 
            />
            <input 
              type="text" 
              value={resourceUnit} 
              onChange={handleResourceUnitChange} 
              placeholder="Unit of Value" 
            />
          </div>

          <div className="form-group">
            <label>Are you involved in any local environmental initiatives or groups?</label>
            <input 
              type="text" 
              value={environmentalAction} 
              onChange={handleEnvironmentalActionChange} 
            />
          </div>
          
          <div className="form-group">
            <label>On days you don't perform a tracked action, what are the reasons?</label>
            <input 
              type="text" 
              value={environmentalAction} 
              onChange={handleEnvironmentalActionChange} 
            />
          </div>

          <div className="form-group">
            <label>On a scale of 1-5, share the frequency of the action taken:</label>
            <select value={frequency} onChange={handleFrequencyChange}>
            <option value="" disabled>Select</option>
            <option value="Basic">Basic</option>
              <option value="Good">Good</option>
              <option value="Better">Better</option>
              <option value="Best">Best</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>

          <div className="form-group">
            <label>Are there any eco-friendly practices you plan to adopt in the near future?</label>
            <input 
              type="text" 
              value={environmentalAction} 
              onChange={handleEnvironmentalActionChange} 
            />
          </div>

          <button type="submit">Set</button>
          <button type="button">Edit</button>
        </form>
      </div>



      {/* Tracked actions display */}
    </div>
    </>
  );
};  

export default UpperText;
