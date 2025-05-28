import React ,{useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../styles/Navbar.css';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; 
import { BsCart4 } from 'react-icons/bs';
import { useAuth } from '../AuthContext';
import { MdLogin, MdLogout } from "react-icons/md";

const Navbar = ({ cartItems = [],setCartItems }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const pages = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Our Impact', path: '/our-impact' },
    { name: 'Where We Work', path: '/wherewework' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Lens Concept', path: '/lens-concept' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' },
  ];

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.trim()) {
      const matches = pages.filter((p) =>
        p.name.toLowerCase().includes(input.toLowerCase())
      );
      setFiltered(matches);
      setShowDropdown(true);
    } else {
      setFiltered([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setShowDropdown(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filtered.length > 0) {
      navigate(filtered[0].path); // Navigate to first match
    } else if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
    setShowDropdown(false);
  };

  const handleLogoutClick = () => setShowLogoutConfirm(true);

  const confirmLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    if (typeof setCartItems === 'function') {
    setCartItems([]); // clear cart in state
  }
    setShowLogoutConfirm(false);
    navigate('/');
    window.location.reload();
  };
  const cancelLogout = () => setShowLogoutConfirm(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Dot Glasses Logo" className="logo" />
      </div>

      <div className="navbar-center">
        {/* Search form to allow submit on Enter */}
        <form onSubmit={handleSearchSubmit} className="search-form">
  <input
    type="text"
    placeholder="Search..."
    className="search-bar"
    value={query}
    onChange={handleChange}
    aria-label="Search"
  />
  <button type="submit" className="search-button" aria-label="Submit search">
    <FaSearch />
  </button>

  {/* 👇 This is what you were missing */}
  {showDropdown && filtered.length > 0 && (
    <ul className="dropdown-list">
      {filtered.map((item, index) => (
        <li
          key={index}
          className="dropdown-item"
          onClick={() => handleSelect(item.path)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )}
</form>
      </div>

      <div className="navbar-right">
        <div className='nav-items'>
        <Link to="/home">Home</Link>
      <div className="dropdown">
          <Link to="/about">About &#9662;</Link>
          <div className="dropdown-content">
            <Link to="/our-team">Our Team</Link>
            <Link to="/our-impact">Our Impact</Link>
            <Link to="/wherewework">Where We Work</Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="nav-link" onClick={(e) => e.preventDefault()}>
            Solution &#9662;</span>
          <div className="dropdown-content">
            <Link to="/faqs">FAQs</Link>
            <Link to="/lens-concept">Lens Concept</Link>
          </div>
        </div>
        
        <Link to="/products">Product</Link>
        <Link to="/contact">Contact</Link>

        <li>
       <Link to="/cart" className="cart-icon">
         <BsCart4 size={22} />
         {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
         
       </Link>
      </li>
      </div>
       {isLoggedIn ? (
  <>
    <button className="navbar-button" onClick={handleLogoutClick}>
      <MdLogout /> Logout
    </button>

    {showLogoutConfirm && (
      <div className="logout-modal">
        <div className="logout-modal-content">
          <p>Are you sure you want to logout?</p>
          <div className="modal-buttons">
            <button onClick={confirmLogout} className="confirm-btn">Yes, Logout</button>
            <button onClick={cancelLogout} className="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    )}
  </>
) : (
  <Link className="navbar-button" to="/login">
    <MdLogin /> Login
  </Link>
)}

      </div>
    </nav>
  );
};

export default Navbar;
