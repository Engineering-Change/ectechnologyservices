import React, { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import OutboxIcon from '@mui/icons-material/Outbox';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isNightMode, setIsNightMode] = useState(true);

  useEffect(() => {
    // Simulating loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleModeToggle = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  if (loading) {
    return <div class="loading-screen"><span>Welcome</span></div>
  }

  return (
    <div className={`App ${loading ? 'loading' : ''} ${isNightMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="mode-toggle" onClick={handleModeToggle}>
          {isNightMode ? <Brightness7Icon style={{color: "rgb(117, 117, 117)"}}/> : <Brightness4Icon />}
        </div>
        <h1 className={`gradient-text ${isNightMode ? 'dark-gradient' : ''} slide-in`}>EC, Technology Services</h1>
        <h2 className="engineering-change">Engineering Change</h2>
        <p className="loading-text">Website under Construction, pardon us in the meantime.</p>
        <div className="icon-container">
          <a href="https://github.com/Engineering-Change" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" className={`github-icon ${isNightMode ? 'dark-mode' : ''}`} />
          </a>
          <a href="mailto:info@ectechnologyservices.com">
            <OutboxIcon fontSize="large" className={`email-icon ${isNightMode ? 'dark-mode' : ''}`} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
