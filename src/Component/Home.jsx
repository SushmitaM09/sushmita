import React from 'react';
import './Home.css';
import profile from '../Image/profile.jpg'

function Home({ isDarkMode }) {
  return (
    <section className={`home-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="home-content">
          <div className="profile-photo-container">
            <img src={profile} alt="Sushmita" className="profile-photo" />
          </div>
          <div className="text-content">
            <h1>Welcome to Sushmita's Portfolio</h1>
            <p>Here you can learn more about me, my projects, and skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
