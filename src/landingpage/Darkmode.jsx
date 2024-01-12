import React, { useState, useEffect } from 'react';
import './Darkmode.css'; 

const Darkmode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
  }, []);

  // Update dark mode preference and localStorage when toggled
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="toggle-container">
        <span className="toggle-label">Dark Mode:</span>
        <label className="toggle-slider-label" htmlFor="darkModeToggle">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="toggle-checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="toggle-slider"></div>
        </label>
      </div>

      {/* The rest of your application content goes here */}
      <h1>Your App Content</h1>
    </div>
  );
};

export default Darkmode;
