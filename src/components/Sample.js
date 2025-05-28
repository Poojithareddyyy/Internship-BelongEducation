import React from 'react';
import { Link } from 'react-router-dom';
import Pic1 from '../assets/Pic1.jpg';

const Sample = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        <div className="hero-text">
          <span className="tagline">Revolutionary Eyecare</span>
          <h1>
            Revolutionizing access to <span className="highlight">Eyecare.</span>
          </h1>
          <p className="subtext">
            <em>Innovative, Quality, and Affordable Eyecare Solutions</em>
          </p>
          <p className="description">
            1 billion people around the world struggle with poor eyesight because they can’t afford glasses or don’t have access to eye care services. That’s where we come in.
          </p>
          <Link to="/login" className="login-button">Login / Signup</Link>
        </div>
        <div className="hero-image">
          <img src={Pic1} alt="Eyecare woman" />
        </div>
      </div>
    </div>
  );
}

export default Sample;