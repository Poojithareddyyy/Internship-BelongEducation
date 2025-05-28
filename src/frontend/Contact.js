import React from 'react';
import '../styles/Contact.css';

import contact from'../assets/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const Contact = () => {
  return (
    <><div className="contact-container">
          <div className="contact-left">
              <img
                  src={contact}
                  alt="Support"
                  className="contact-image" />
              <div className="contact-info">
                  <h3>Working hours</h3>
                  <p>Open – Mon–Fri 8–4<br />Closed – Sat–Sun and Public Holidays</p>
                  <p><a href="mailto:info@dotglasses.org">info@dotglasses.org</a></p>
                  <p>
                      If you have concerns about unethical behavior, fraud, or misconduct,
                      you can report them confidentially:<br />
                      <a href="mailto:whistleblower@dotglasses.org" className="whistleblower">whistleblower@dotglasses.org</a>
                  </p>

                  <h3>Our location</h3>
                  <p>
                      Dot Glasses HQ<br />
                      Parklands Road<br />
                      Pax Mayfair suites, Westlands<br />
                      Nairobi, Kenya
                  </p>
                  <p>
                      Dot Glasses International<br />
                      Unit 2 Eastman Way<br />
                      Hemel Hempstead<br />
                      HP2 7DU<br />
                      United Kingdom
                  </p>

                  <h3>Social profiles</h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/dotglasses/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href = "https://x.com/dotglasses" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href = "https://www.instagram.com/dotglasses_international/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href = "https://ke.linkedin.com/company/dotglasses" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href = "https://www.youtube.com/channel/UCcHycdXJ5u6m1dUzILGctWQ" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
              </div>
          </div>

          <div className="contact-right">
              <h1>Let’s collaborate!</h1>
              <p>Contact us to learn how to become our distribution partner and bring good vision to your communities!</p>

              <form className="contact-form">
                  <div className="input-row">
                      <input type="text" placeholder="John *" required />
                      <input type="text" placeholder="Doe *" required />
                  </div>
                  <input type="email" placeholder="johndoe@company.com *" required />
                  <textarea placeholder="Your message" rows="4"></textarea>
                  <button type="submit" className="send-btn">Send enquiry</button>
              </form>
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
};

export default Contact;
