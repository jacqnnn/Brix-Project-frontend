import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const user = {
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/300x300/1700de73b60f411ad6bfb0c6332aed38.jpg",
  imageSize: 45,
};

function Menu() {
  /* TODO: Add slide bar effect later */
  return (
    <nav className="menu">
      <Link to="/register">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      </Link>
      <ul className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <div className="search-icon">🔍</div>
    </nav>
  );
}

function RegisterSec1() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const userRegister = async(userName, userpwd) => {
    //implement this
    //define backend url
    try {
      const url = "http://localhost:5000/api/register";

      const headers = {
        'Content-Type': 'application/json'
      }

      const params = {
        name: userName,
        password: userpwd
      }

      const result = await axios.post(url, params, {headers});
      console.log(result);

      if (result.status == 201) {
        setError('');
        navigate('/login'); 
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registration:', error);
      setError(error.response?.data?.message);
    }
  }

  const handleRegister = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      await userRegister(name, password);
    };

  const handleNavigateToLogin = () => {
      navigate('/login');
  };

  return (
      <div className="register-sec1">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      {/* after clicking register, go to login page */}
      <form className="register-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required/>
        <input type="password" placeholder="Confirm Password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <button type="submit">Register</button>
        <p>Already have an account?</p>
        <button type="button" onClick={handleNavigateToLogin}>Login</button>
      </form>
      </div>
  );
}

function RegisterSec2() {
    return (
        <div className="reg-section2">
          <div className="reg-sec2-txt">
            <h2>Title</h2>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="reg-sec2-divider"></div>
          <div className="reg-sec2-social">
            <h2>Social</h2>
            <div className="social-icons">
              <span>🦋</span>
              <span>🐕</span>
              <span>(●'◡'●)</span>
              <span>🍃</span>
            </div>
          </div>
        </div>
      );
}

export default function RegisterPage() {
    return (
        <div>
          <Menu />
          <RegisterSec1 />
          <RegisterSec2 />
        </div>
      );
}