import React from 'react';
import './Footer.css';
import { useTheme } from './ThemeContext';


function Footer() {
  const {theme} = useTheme;
  return (
   
<footer className={`footer footer-${theme} bg-primary text-white text-center py-3`}>
      <p>&copy; 2024 Sushmita Magar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
