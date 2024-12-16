import React from 'react';
import './Navigation.css';
import { FaMoon, FaSun } from 'react-icons/fa'; 

function Navigation({ toggleTheme, isDarkMode }) {
  return (
    <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="container">
          <a className="navbar-brand" href="/">My Portfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
            </ul>
            
            <button className={`btn ms-3 ${isDarkMode ? 'btn-dark' : 'btn-light'}`} onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />} 
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
