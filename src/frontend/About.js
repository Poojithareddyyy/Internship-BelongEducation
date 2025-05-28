import React from "react";
import "../styles/About.css";
import philip from "../assets/teams/philip.jpeg";
import Pic13 from '../assets/Pic13.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn, 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const About = () => {
  return (
    <div>
      {/* Section 1: Why Dot Glasses Exists */}
      <div className="why-section">
        <div className="why-image">
          <img src={philip} alt="Founder" />
        </div>

        <div className="why-content">
          <span className="why-tag">How Dot Glasses Was Born</span>
          <h2 className="why-title">
            Why Dot Glasses Exists<span className="dot">.</span>
          </h2>
          <p>
            I’ve had very poor eyesight from the age of 9, so I’m extremely aware how poor
            vision can impact someone’s life.
          </p>
          <p>
            Without glasses, I wouldn’t have been able to succeed in school, and I wouldn’t have
            lived up to my career potential. But when I found out that more than 1 billion people
            don’t benefit from a simple 700-year-old technology – I realized that something needed
            to change.
          </p>
          <p>A complete rethink was required. Dot Glasses became that answer.</p>
          <hr />

          <table className="why-table">
  <tbody>
    <tr>
      <td className="dot-cell"><span className="dot-icon"></span></td>
      <td className="bold-text">Bridging the Gap</td>
      <td className="dash">–</td>
      <td>Over 1 billion people lack access to glasses, and we are committed to changing that.</td>
    </tr>
    <tr>
      <td className="dot-cell"><span className="dot-icon"></span></td>
      <td className="bold-text">Affordable, High-Quality Eyewear</td>
      <td className="dash">–</td>
      <td>We believe no one should struggle with vision due to cost constraints.</td>
    </tr>
    <tr>
      <td className="dot-cell"><span className="dot-icon"></span></td>
      <td className="bold-text">Empowering Lives Through Vision</td>
      <td className="dash">–</td>
      <td>Clear eyesight transforms education, career opportunities, and overall well-being.</td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    <div className="solution-container">
  <div className="solution-content">
    <div className="solution-tag">Best solutions</div>
    <h2 className="solution-title">
      Our Solution: The Dot Glasses Approach
    </h2>
    <p className="solution-text">
      At Dot Glasses, we’ve designed a simple yet revolutionary approach to eyewear—
      affordable, high-quality glasses that anyone can access.
    </p>
    <p className="solution-text">
      By streamlining production, reducing unnecessary costs, and focusing on accessibility,
      we ensure that more people can experience clear vision without financial strain.
    </p>
    <hr className="solution-underline" />
    <div className="solution-stats">
      <div className="solution-stat">
        <p className="solution-stat-number">160+</p>
        <p className="solution-stat-label">Distribution Points</p>
      </div>
      <div className="solution-stat">
        <p className="solution-stat-number">98%</p>
        <p className="solution-stat-label">Satisfaction from our glasses</p>
      </div>
    </div>
  </div>

  <div className="solution-image">
    <img
      src={Pic13}
      alt="Dot Glasses Distribution"
      className="solution-img"
    />
  </div>
</div>
  <footer className="footer">
              <div className="footer-content">
                  <div className="footer-left">
                      <img src={logo} alt="Dot Glasses Logo" className="footer-logo" />
                      <p>Empowering vision for all.</p>
                  </div>

                  <div className="footer-center">
                      <h4>Navigation</h4>
                      <ul>
                          <li><a href="/home">Home</a></li>
                          <li><a href="/about">About</a></li>
                          <li><a href="/products">Product</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/our-team">Our Team</a></li>
                          <li><a href="/our-impact">Our Impact</a></li>
                          <li><a href="/wherewework">Where We Work</a></li>
                          <li><a href="/faqs">Faqs</a></li>
                          <li><a href="/lens-concept">Lens Concept</a></li>
                      </ul>
                  </div>

                  <div className="footer-right">
                      <h4>Connect With Us</h4>
                      <div className="social-icons">
                          <a href="https://www.facebook.com/dotglasses/"><FontAwesomeIcon icon={faFacebookF} /></a>
                          <a href="https://x.com/dotglasses"><FontAwesomeIcon icon={faTwitter} /></a>
                          <a href="https://www.instagram.com/dotglasses_international/"><FontAwesomeIcon icon={faInstagram} /></a>
                          <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                      </div>
                  </div>
              </div>

              <div className="footer-bottom">
                  <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
              </div>
          </footer>

     </div>
  );
};

export default About;
