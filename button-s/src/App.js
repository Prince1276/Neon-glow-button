import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="app-container">
      <button
        className={`neon-button ${isHovered ? 'neon-button-hover' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me!
        <div className="neon-lights"></div>
      </button>
    </div>
  );
};

export default App;
