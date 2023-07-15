import React, { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css';
import Footer from './Footer';
import image1 from "../src/assets/image1.png";
import image2 from "../src/assets/image2.png";
import image3 from "../src/assets/image3.png";
import image4 from "../src/assets/image4.png";

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
    return <div className="loading-screen"><span>Welcome</span></div>;
  }

  return (
    <div className={`App ${loading ? 'loading' : ''} ${isNightMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="mode-toggle" onClick={handleModeToggle}>
          {isNightMode ? <Brightness7Icon style={{color: "rgb(117, 117, 117)"}}/> : <Brightness4Icon />}
        </div>
        <h1 className={`gradient-text ${isNightMode ? 'dark-gradient' : ''} slide-in`}>EC, Technology Services</h1>
        <h2 className="engineering-change">
          <a href="https://github.com/Engineering-Change" target="_blank" rel="noopener noreferrer">
            Engineering Change
          </a>
        </h2>
      </header>
      <main>
        <p className="title">Web design links below</p>
        <div className="image-grid">
        <a href="https://gitcommands.live/" target="_blank" rel="noopener noreferrer">
        <img src={image1} alt="" className="grid-image" />
        </a>
        <a href="https://aichat-bot.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={image2} alt="" className="grid-image" />
        </a>
        <a href="https://jeremyescobar.live" target="_blank" rel="noopener noreferrer">
        <img src={image3} alt="" className="grid-image" />
        </a>
        <a href="https://jeremyescobar.live" target="_blank" rel="noopener noreferrer">
        <img src={image4} alt="" className="grid-image" />
        </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
