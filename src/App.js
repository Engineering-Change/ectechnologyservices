import React from 'react';
import './App.css';
import Footer from './Footer';
import logo from './logo.jpg';

const App = () => {

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <a href="https://github.com/Engineering-Change" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <div className="header-text">
            <h1 className="gradient-text slide-in">EC, Technology Services</h1>
          </div>
        </div>
      </header>
      <div className='minors'>
        <div className='minors-content'>
          <h1 className='minor'> Creating the future, <br />
          one line of code at a time!</h1>
        </div>
      </div>
      <div className='majors'>
        <div className='majors-content'>
          <h1 className='major'> Our team prioritizes usability, <br />
          performance, and reliability in all aspects of our work.</h1>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default App;
