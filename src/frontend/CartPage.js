import React, { useState } from 'react';
import '../styles/CartPage.css';
import logo from '../assets/logo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartPage = ({
  cartItems = [],
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setShowModal(true);
  };

  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );

  return (
    <>
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="cart-description">{item.description}</p>
                  <p className="cart-price">₹{Number(item.price).toFixed(2)}</p>

                  <div className="quantity-control">
                    <button
                      className="decrement-btn"
                      onClick={() => decrementQuantity(item.id)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="cart-quantity">{item.quantity}</span>
                    <button
                      className="increment-btn"
                      onClick={() => incrementQuantity(item.id)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-total">
                    Total: ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Grand Total: ₹{getTotalPrice().toFixed(2)}</h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal">
                  <p>Proceeding to checkout...</p>
                  <div className="modal-buttons">
                    <button
                      className="back-button"
                      onClick={() => navigate('/home')}
                    >
                      Back to Home
                    </button>
                    <button
                      className="close-button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
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
              <a href="https://www.facebook.com/dotglasses/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://x.com/dotglasses" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/dotglasses_international/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://ke.linkedin.com/company/dotglasses" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default CartPage;
