import React from 'react';
import '../styles/OurImpact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const cards = [
  {
    
    img: require('../assets/impact-1.jpg'),
    title: "Good Health and Well-Being",
    desc: "We provide access to basic vision care for everyone, everywhere.",
  },
  {
    img: require('../assets/impact-2.jpg'),
    title: "Decent Work and Economic Growth",
    desc: "We support micro-enterprise creation and enable people to work to their capabilities.",
  },
  {
    img: require('../assets/impact-3.jpg'),
    title: "No Poverty",
    desc: "We increase productivity and earnings of low income people.",
  },
  {
    img: require('../assets/impact-4.jpg'),
    title: "Reduced Inequalities",
    desc: "100% of our end customers are Bottom of the Pyramid people.",
  },
  {
    img: require('../assets/impact-5.jpg'),
    title: "Gender Equality",
    desc: "60% of people with uncorrected poor vision are women and girls.",
  },
  {
    img: require('../assets/impact-6.jpeg'),
    title: "Quality Education",
    desc: "We help children improve school performance and adults to read.",
  },
];

const hands = {
  left: require('../assets/hands-left.jpg'),
  right: require('../assets/hands-right.jpg'),
};
function OurImpact() {
  return (
    <><div className="imp-sec">
      <h2 className="imp-tit">Our Impact</h2>

      <div className="imp-grid">
        {cards.map((card, index) => (
          <div className="imp-car" key={index}>
            <img src={card.img} alt={card.title} className="imp-img" />
            <div className="imp-text">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* New Section Below the Cards */}
      <div className="impact-highlight-section">

        <img src={hands.left} alt="Hands Left" className="hands-img left" />

        <div className="highlight-content">
          <h3 className="highlight-title">Leading the Way to a Brighter Future</h3>
          <p className="highlight-desc">
            We at Dot Glasses are committed to the <strong>highest social, environmental and governance standards</strong> according to universally accepted conventions.
            100% of our end users are people designated as low income.
          </p>

          <div className="highlight-stats">
            <div className="stat-card">
              <div className="stat-value">+30%</div>
              <div className="stat-desc">Glasses impact on worker productivity</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">+20%</div>
              <div className="stat-desc">Glasses impact on monthly income</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">+$25</div>
              <div className="stat-desc">Economic impact of $1 invested into glasses</div>
            </div>
          </div>
        </div>

        <img src={hands.right} alt="Hands Right" className="hands-img right" />

      </div>
      <div className="impact-values-section">
        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h3>Partnerships</h3>
          <p>
            We cooperate with trusted organizations and governments to support
            everyone’s right for decent living.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">💰</div>
          <h3>Livelihoods</h3>
          <p>
            We bring good vision for work productivity and protect fair conditions
            for young entrepreneurs to sell affordable eyeglasses to their communities.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">🚻</div>
          <h3>Equality</h3>
          <p>
            Everyone should have the same opportunities for health, education, work
            and family life and good vision is an important part of those values.
          </p>
        </div>
      </div>

    </div><footer className="footer">
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
              <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
        </div>
      </footer></>
  );
}


export default OurImpact;
