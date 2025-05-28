import React, { useState } from 'react';
import { FaApple, FaGoogle, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';
import { useAuth } from '../AuthContext'; // Auth context import

// Replace `fullName`, `email`, `password` with your form state
const handleSignup = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, password }),
    });
    const data = await response.json();
    alert(data.message || data.error);
  } catch (err) {
    alert('Signup failed');
  }
};

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Login successful');
      // Optional: Set user in context or localStorage
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert('Login failed');
  }
};

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // login function from context

  // Toggle between login and signup forms
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  // Form validation function
  const validate = () => {
  const newErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!formData.email) {
    newErrors.email = 'Email is required.';
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address.';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required.';
  } else if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
  }

  if (!isLogin) {
    if (!formData.name) newErrors.name = 'Full name is required.';
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
  }

  return newErrors;
};

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const doAuth = async () => {
  if (isLogin) {
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      const data = await response.json();
      if (response.ok) {
          if (isLogin) {
            alert('Login successful!');
          } else {
            alert('Signup successful! Redirecting to home...');
          }
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        login(); // update context state
        navigate('/home');
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('Login failed');
    }
  } else {
    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: formData.name, email: formData.email, password: formData.password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup successful! Redirecting to home...');
        login(); // set context
        navigate('/home');
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('Signup failed');
    }
  }
};
doAuth();

    
  };

  // Handle input changes and clear errors for that field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="top-bar">
          <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        </div>
        <h2>{isLogin ? 'Login to Your Account' : 'Create Your Account'}</h2>

        <form onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          {!isLogin && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="divider">or</div>

        <div className="oauth-buttons">
          <button className="oauth apple"><FaApple /> Continue with Apple</button>
          <button className="oauth google"><FaGoogle /> Continue with Google</button>
        </div>

        <p className="switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={handleToggle} className="switch-link">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;