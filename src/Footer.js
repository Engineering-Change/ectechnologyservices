import React from 'react';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? '' : 'light-mode'}`}>
      <p className="footer-text">Copyright ©2023 <a href="mailto:info@ectechnologyservices.com">EC, Technology Services 714-419-9160</a></p>
    </footer>
  );
};

export default Footer;
