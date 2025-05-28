import React, { useState } from "react";
import "../styles/LensConcept.css";
import Pic9 from '../assets/Pic9.jpeg';
import Pic10 from '../assets/Pic10.jpeg';
import Pic11 from '../assets/Pic11.jpg';
import Pic12 from '../assets/Pic12.png';
import Pic13 from '../assets/Pic13.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';
const data = [
  {
    left: {
      title: "Radical",
      description: "Experience faster, tech-driven diagnosis from home. Get multiple therapies and prescriptions online.",
      color: "#ff5b00",
      image: Pic9,
      message: "No Optomestric Needed. Avg Diopter Variance: +/- 0.375 diopters. Max Diopter Variance: +/- 0.75 diopters. Typical Partners - Entrepreneurs, Commercial Networks, and Charities / NGOs"
    },
    right: {
      title: "Classical",
      description: "Traditional care with optometrist involvement. In-person visits may follow video consultations.",
      color: "#063d12",
      image: Pic10,
      message: "Optometrist involved. Avg Diopter Variance: +/- 0.125 diopters. Max Diopter Variance: +/- 0.25 diopters. Typical Partners - Government, Exisiting Eye Care Networks"
    }
  },
  {
    left: {
      title: "Radical Concept",
      description: "All-in-one care solution. Virtual-first with a focus on accessibility. Streamlined tech. Low overhead.",
      color: "#ff5b00",
      icon: "🧠",
      message: "The vision concept simplifies the testing and lens selection process, reducing the need for expensive equipment and trained professionals. By addressing basic refractive errors, it makes vision correction more affordable and accessible. The limited lens approach allows widespread distribution through existing healthcare channels, lowering inventory costs and making eye care more accessible to a larger population."
    },
    right: {
      title: "Classical Concept",
      description: "Where professionals handle care end-to-end. In-person visits required. Higher operating costs.",
      color: "#063d12",
      icon: "🏥",
      message: "The process of providing eyeglasses is simplified by their low cost and quick turnaround, with glasses ready shortly after an eye exam. This eliminates issues such as complicated logistics, lost orders, shipping delays, difficulties in locating customers, and high inventory costs."
    }
  }
];

const LensConcept = () => {
  const [message, setMessage] = useState("");
  const [showBox, setShowBox] = useState(false);

  const handleClick = (msg) => {
    setMessage(msg);
    setShowBox(true);
  };

  const closeBox = () => {
    setShowBox(false);
    setMessage("");
  };

  return (
    <><div className="radical-classical">
          <div className="grid-container">
              {data.map((row, index) => (
                  <React.Fragment key={index}>
                      <div
                          className="column"
                          style={{ backgroundColor: row.left.color }}
                          onClick={() => handleClick(row.left.message)}
                      >
                          <div className="content left-content">
                              {row.left.image && (
                                  <img src={row.left.image} alt={row.left.title} className="icon-image" />
                              )}
                              <div className="icon">{row.left.icon}</div>
                              <h2>{row.left.title}</h2>
                              <p>{row.left.description}</p>
                          </div>
                      </div>

                      <div
                          className="column"
                          style={{ backgroundColor: row.right.color }}
                          onClick={() => handleClick(row.right.message)}
                      >
                          <div className="content right-content">
                              {row.right.image && (
                                  <img src={row.right.image} alt={row.right.title} className="icon-image" />
                              )}
                              <div className="icon">{row.right.icon}</div>
                              <h2>{row.right.title}</h2>
                              <p>{row.right.description}</p>
                          </div>
                      </div>
                  </React.Fragment>
              ))}
          </div>

          {showBox && (
              <div className="message-box">
                  <span className="close" onClick={closeBox}>
                      &times;
                  </span>
                  <div className="message-content">
                      <ul>
                          {message
                              .split(/(?<=\w)\. (?=[A-Z])/)
                              .map((line) => line.trim())
                              .filter(Boolean)
                              .map((point, idx) => (
                                  <li key={idx}>{point}.</li>
                              ))}
                      </ul>
                  </div>
              </div>
          )}

          <div className="vision-eye-divider">
              <svg
                  viewBox="0 0 1440 100"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#ffffff" />
              </svg>
          </div>

          <section className="vision-section">
              <div className="vision-container">
                  <h2 className="vision-title">Simplified Vision Testing</h2>
                  <p className="vision-description">
                      A set of vision testers included in every vision kit provides access to improved vision for people in even the most remote areas,
                      without the need for eye doctors. The set includes two testers – one for reading lenses, one for seeing far, a pupil distance
                      measurement tool and vision charts.
                  </p>
                  <div className="vision-images">
                      <img src={Pic11} alt="Lens tester 1" />
                      <img src={Pic12} alt="Pupil tool" />
                      <img src={Pic13} alt="Vision tool in use" />
                  </div>
              </div>
          </section>
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

export default LensConcept;
