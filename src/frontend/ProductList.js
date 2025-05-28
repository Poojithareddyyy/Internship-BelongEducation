import React, { useEffect, useState } from 'react';
import '../styles/ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn, 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Error fetching products:", err);
        alert("Failed to load products.");
      });
  }, []);

  return (
    <><div className="product-container">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>₹{product.price}</strong>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
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

export default ProductList;
