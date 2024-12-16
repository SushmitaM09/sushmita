import React from 'react';
import './Footer.css';

function Footer({ isDarkMode }) {
  return (
    <footer className={isDarkMode ? 'dark' : 'light'}>
      <p>&copy; 2024 Sushmita, 2024</p>
    </footer>
  );
}

export default Footer;
