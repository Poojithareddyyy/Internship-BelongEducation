import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './frontend/Home';
import About from './frontend/About';
import OurTeam from './frontend/OurTeam';
import OurImpact from './frontend/OurImpact';
import FAQs from './frontend/FAQs';
import LensConcept from './frontend/LensConcept';
import Contact from './frontend/Contact';
import LoginSignup from './components/LoginSignup';
import Sample from './components/Sample'
import WhereWeWork from './frontend/WhereWeWork';
import { AuthProvider,useAuth } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import ProductList from './frontend/ProductList';
import CartContainer from './frontend/CartContainer';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated}
      {children}
    </>
  );
};

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on initial render
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to cart function
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If product already exists, update quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Else, add new product
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AuthProvider>
    <Router>
    <ScrollToTop />
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Layout>
      <Routes>
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/our-team" element={<PrivateRoute><OurTeam /></PrivateRoute>} />
        <Route path="/our-impact" element={<PrivateRoute><OurImpact /></PrivateRoute>} /> 
        <Route path="/wherewework" element={<PrivateRoute><WhereWeWork/></PrivateRoute>}/>      
        <Route path="/faqs" element={<PrivateRoute><FAQs /></PrivateRoute>} />
        <Route path="/lens-concept" element={<PrivateRoute><LensConcept /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><ProductList addToCart={handleAddToCart} /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><CartContainer cartItems={cartItems} setCartItems={setCartItems} /></PrivateRoute>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/" element={<Sample/>}/>
      </Routes>
      </Layout>
    </Router>
    </AuthProvider>
  );
}

export default App;
