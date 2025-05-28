import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn, 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const ProductCard = ({ product, addToCart }) => {
  const renderStars = () => {
    const stars = [];
    const rating = product.rating || 4; // default rating if not available

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? '#f5a623' : '#ddd'}
          size={14}
        />
      );
    }
    return stars;
  };

  return (
    <><div className="product-card">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="rating">{renderStars()}</div>
      <strong>₹{product.price.toFixed(2)}</strong>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
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
              <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
        </div>
      </footer></>
  );
};

export default ProductCard;
