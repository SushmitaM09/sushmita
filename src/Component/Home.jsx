import React from 'react';
import './Home.css';
import profile from '../Image/profile.jpg';

function Home() {
  return (
    <div className="hero">
      <div className="container text-center">
        <div className="row align-items-center">
        
          <div className="col-md-6 mb-4">
          <img 
            src={profile} 
            alt="Your Profile" 
            className="img-fluid shadow"
            />
          </div>
          
          <div className="col-md-6">
            <h1 className="display-3">Hi, I'm  Sushmita</h1>
            <p className="lead">Frontend Developer | UI/UX Designer</p>
            <a href="#projects" className="btn hero-btn btn-lg mt-3">View My Work</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
