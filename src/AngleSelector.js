import React, { useState } from 'react';
import './AngleSelector.css'; // Import the CSS styles

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = e.target.value;
    
    // Replace leading zero if the input is not just "0"
    if (value.length > 1 && value.startsWith('0')) {
        value = value.slice(1);
    }

    // Convert value to a number and handle bounds
    let numericValue = parseInt(value, 10);
    if (isNaN(numericValue) || numericValue < 0) numericValue = 0;
    if (numericValue > 360) numericValue = 360;
    
    setAngle(numericValue);
};

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div className="container">
      <h1>Angle Selector</h1>
      <div className="controls">
        <input
          type="number"
          id="angleInput"
          value={angle}
          min="0"
          max="360"
          onChange={handleInputChange}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          id="angleSlider"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
      </div>
      <div className="controls radio-group">
        {[0, 45, 60, 90, 180].map((val) => (
          <label key={val}>
            <input
              type="radio"
              name="preset"
              value={val}
              checked={angle === val}
              onChange={handleRadioChange}
            />{' '}
            {val}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
