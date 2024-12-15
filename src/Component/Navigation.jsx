import React from 'react';
import  {useTheme} from './ThemeContext';
import './Navigation.css';

function Navigation() {
  const {toggleTheme} =useTheme();
  return (
    <div className="header">
    <nav className="navbar navbar-expand-lg navbar-dark ">
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
          <button className="btn btn-outline-light" onClick={toggleTheme}>
              Toggle Theme
            </button>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navigation;
