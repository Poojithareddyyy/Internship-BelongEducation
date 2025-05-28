import React from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import Pic1 from '../assets/Pic1.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../assets/logo.jpg';
import Team1 from '../assets/Team1.jpg';
import Team2 from '../assets/Team2.jpg';
import Team3 from '../assets/Team3.png';
import Team4 from '../assets/Team4.jpg';
import Pic3 from '../assets/Pic3.jpg'; // Key Features image
import Pic4 from '../assets/Pic4.png'; // Lens Options image
import Pic2 from '../assets/Pic2.jpg'; // Lens Options image
import Pic5 from '../assets/Pic5.jpg';
import Pic6 from '../assets/Pic6.jpg';
import Pic7 from '../assets/Pic7.jpg';
import Part1 from '../assets/Part1.png';
import Part2 from '../assets/Part2.png';
import Part3 from '../assets/Part3.png';
import Part4 from '../assets/Part4.png';
import Part5 from '../assets/Part5.png';
import Part6 from '../assets/Part6.png';
const Home = () => {
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
            1 billion people around the world struggle with poor eyesight because they can’t afford glasses or don’t have access
            to eye care services. That’s where we come in.
          </p>
          <a href='/about'>
          <button className="cta-button">Explore Here</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={Pic1} alt="Eyecare woman" />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="about-section">
        <h2 className="about-heading">
          Who we are<span className="dot">.</span>
        </h2>
        <p className="about-subheading">Improving lives with Innovative patented and Adjustable Eyeglasses.</p>

        <p className="about-text">
          Dot Glasses is a <strong>global social enterprise on a mission to revolutionize access to eye care worldwide</strong>.
          Currently operating in <strong>8 countries</strong>, we address the global vision crisis by providing scalable and
          cost-effective distribution models. Using patented adjustable frames and lens technology to ensure a perfect fit for
          any face, making clear sight accessible to everyone. We have developed an easy, simple yet effective eye test
          methodology that doesn’t require an eye specialist on the ground.
        </p>

        <p className="about-text">
          Whether it’s a student struggling to see the blackboard, a worker needing clear vision for their job, or an
          organization seeking to improve eye care access to its community.
        </p>

        <p className="about-text">
          At Dot Glasses, we believe that everyone has the right to see well without breaking the bank. That’s why we partner
          with governments, NGOs, companies, healthcare facilities, religious institutions, both public and private entities to
          increase access to eye testing and affordable eyeglasses for everyone, everywhere, without relying on subsidies.
          Through these partnerships we provide vision screenings, distribute glasses at a low-cost, and raise awareness about
          eye health. Our goal is to ensure that eyecare is accessible to everyone, regardless of location or financial status,
          ultimately improving education, productivity, and quality of life.
        </p>

        <p className="about-highlight">
          <strong>Dot Glasses provides a simple and life–changing solution.</strong>
        </p>
      </div>

      {/* Image Carousel Section */}
      <div className="carousel-wrapper" style={{ maxWidth: '600px', margin: '40px auto' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={Team1} alt="Eyecare 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Team2} alt="Eyecare 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Team3} alt="Eyecare 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={Team4} alt="Eyecare 4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </div>

      <div className="features-container">
      {/* LEFT CARD - Key Features */}
      <div className="feature-card">
        <h2 className="feature-heading">Key Features</h2>
        <img src={Pic3} alt="Key Features" className="feature-image" />
        <ul className="feature-list">
          <li>
            <span className="bullet-icon">🟠</span>
            <strong>Patented Adjustable Glasses:</strong> A single, smart design that fits all face shapes comfortably and ensures precise vision correction.
          </li>
          <li>
            <span className="bullet-icon">🟠</span>
            <strong>Durable & Resilient:</strong> Scratch-resistant, impact-resistant, and built to withstand different environments.
          </li>
          <li>
            <span className="bullet-icon">🟠</span>
            <strong>Easy-to-Use Kit:</strong> A quick and effective way to determine the right prescription without heavy machinery.
          </li>
          <li>
            <span className="bullet-icon">🟠</span>
            <strong>Ultra–Affordable & High–Quality:</strong> Bringing vision correction to those who need it at a fraction of the traditional cost.
          </li>
        </ul>
      </div>

      {/* RIGHT CARD - Lens Options */}
      <div className="feature-card">
        <h2 className="feature-heading">Customizable Lens Options for Every Need</h2>
        <img src={Pic4} alt="Lens Options" className="feature-image" />
        
        <p className="feature-description">
          Dot Glasses ensures that wearers receive the best lenses tailored to their vision needs. Our lenses are durable; impact and scratch resistant:
        </p>
        <ul className="feature-list">
          <li><span className="bullet-icon">🔴</span><strong>Single Vision Lenses:</strong> Perfect for near or distance correction.</li>
          <li><span className="bullet-icon">🔴</span><strong>Photochromic Lenses:</strong> Adapting to sunlight so you only need one pair for indoors and outdoors.</li>
          <li><span className="bullet-icon">🔴</span><strong>Bifocal Lenses:</strong> One pair for both near and distance vision.</li>
          <li><span className="bullet-icon">🔴</span><strong>Blue Light Blocking Lenses:</strong> Ideal for screen users to reduce eye strain.</li>
        </ul>
      </div>
      
     </div>
     
    {/* Partner With Us Section */}
      <div className="partner-section" style={{ backgroundColor: '#fef4ef', padding: '40px 20px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center'
          }}
        >
          {/* Text Content */}
          <div style={{ flex: '1 1 500px', paddingRight: '20px' }}>
            <span
              style={{
                backgroundColor: '#1d3b30',
                color: 'white',
                fontSize: '25px',
                fontWeight: 'bold',
                padding: '4px 10px',
                borderRadius: '4px'
              }}
            >
              Best solutions
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0 10px' }}>
              Partner with us.
            </h2>
            <p style={{ color: '#92d12b', fontWeight: 'bold' ,fontSize:'20px'}}>
              Partner with Dot Glasses to Bring Affordable Eyewear to More People While Growing Your Business.
            </p>
            
            <hr style={{ borderTop: '2px solid rgb(245, 94, 39)', width: '60px', margin: '20px 0' }} />

            <ul style={{fontSize:'20px', listStyle: 'none', padding: 0, marginBottom: '20px',width:'800px' }}>
              {[
                {
                  title: 'Join a Growing Network',
                  desc: 'Be part of a growing network improving access to eyecare worldwide.'
                },
                {
                  title: 'Maximize Your Earnings',
                  desc: 'Enjoy competitive margins with a profitable business model.'
                },
                {
                  title: 'Attract More Customers',
                  desc: 'Offer a unique service that increases footfall and brand recognition.'
                },
                {
                  title: 'Receive Comprehensive Expert Training',
                  desc: 'Get the knowledge and support you need to succeed.'
                },
                {
                  title: 'Access Marketing Support',
                  desc: 'Benefit from our proven strategies to grow your business.'
                },
                {
                  title: 'Sell High–Quality Glasses',
                  desc: 'Provide durable, low-cost glasses that make a tangible difference to lives.'
                }
              ].map((item, index) => (
                <li key={index} style={{ display: 'flex', marginBottom: '15px' }}>
                  <span
                    style={{
                      color: '#ff6b00',
                      fontWeight: 'bold',
                      marginRight: '10px',
                      fontSize: '18px'
                    }}
                  >
                    ●
                  </span>
                  <div>
                    <strong>{item.title}:</strong> <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul><br></br>
      
            <a href='/contact'>
            <button
              style={{
                backgroundColor: '#063d12',
                color: 'white',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                
              }}
            >
              Become a distributor
            </button></a>
          </div>

          {/* Image */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', marginTop: '20px',width:'50px',height:'150px' ,marginRight:'0px' ,marginLeft:'10px'}}>
            <img
              src={Pic2}
              alt="Partner"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>
            {/* Our Impact Section */}
      <div className="impact-section">
        <p className="impact-subtitle">Guaranteed Accountability</p>
        <h2 className="impact-title">Our Impact</h2>

        <div className="impact-card">
          <div className="impact-stat">+22%</div>
          <div className="impact-info">
            <p className="impact-label">Glasses impact on worker productivity</p>
            <p className="impact-quote">
              “Glasses improve vision, leading to fewer errors, faster task completion, and increased focus, boosting overall productivity.”
            </p>
            <div className="impact-author">
              
              <span>Bradley Heslop</span>
            </div>
          </div>
        </div>

        <hr className="impact-divider" />

        <div className="impact-card">
          <div className="impact-stat">+35%</div>
          <div className="impact-info">
            <p className="impact-label">Glasses impact on monthly income</p>
            <p className="impact-quote">
              “By offering stylish, functional glasses at low prices, Dot Glasses empowers workers to earn more through improved job performance and confidence.”
            </p>
            <div className="impact-author">
              
              <span>Adam Boxer</span>
            </div>
          </div>
        </div>

        <hr className="impact-divider" />

        <div className="impact-card">
          <div className="impact-stat">+25%</div>
          <div className="impact-info">
            <p className="impact-label">Economic impact of $1 invested into glasses</p>
            <p className="impact-quote">
              “Every 1 spent on Dot Glasses creates ripple effects, enabling workers to contribute more to the economy and improving overall financial well-being.”
            </p>
            <div className="impact-author">
              
              <span>Kate Kuper</span>
            </div>
          </div>
        </div>
      </div>
    {/* Visual Resources Section */}
<section className="visual-resources">
  <div className="resources-header">
    <div>
      <p className="resources-label">Visual resources</p>
      <h2 className="resources-title">
        Valuable resources for people looking to partner with <span className="dot-highlight">Dot Glasses.</span>
      </h2>
    </div>
    <a href="https://www.dotglasses.org" target="_blank" rel="noopener noreferrer">
    <button className="resources-button">View all articles</button>
    </a>
  </div>

  <div className="resources-grid">
    <div className="resource-card">
      <img src={Pic5} alt="Article 1" />
      <p className="resource-tag">dotglasses</p>
      <h3 className="resource-heading">How Dot Glasses Are Changing Lives with Clear Vision</h3>
      
    </div>

    <div className="resource-card">
      <img src={Pic6} alt="Article 2" />
      <p className="resource-tag">dotglasses</p>
      <h3 className="resource-heading">How Dot Glasses Work</h3>
      
    </div>

    <div className="resource-card">
      <img src={Pic7} alt="Article 3" />
      <p className="resource-tag">dotglasses</p>
      <h3 className="resource-heading">Bringing Clear Vision to Those Who Need It Most</h3>
      
    </div>
  </div>
</section>
{/* Our Partners Section */}
<section className="our-partners">
  <h2 className="partners-title">Our Partners</h2>
  <div className="partners-logos">
    <img src={Part1} alt="Partner 1" />
    <img src={Part2} alt="Partner 2" />
    <img src={Part3} alt="Partner 3" />
    <img src={Part4} alt="Partner 4" />
    <img src={Part5} alt="Partner 5" />
    <img src={Part6} alt="Partner 6" />
  </div>
</section>
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
    </footer>

    
  </div>
    
  );
};

export default Home;
