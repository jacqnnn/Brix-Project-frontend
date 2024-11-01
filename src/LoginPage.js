import { Link, useNavigate} from "react-router-dom";
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

function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const userLogin = async(userName, userpwd) => {
      //implement this
      //define backend url
      const url = "http://localhost:5000/api/login";

      const headers = {
        'Content-Type': 'application/json'
      }

      const params = {
        name: userName,
        password: userpwd
      }

      try{
        //call from axios. check axios docs. user axios.post
        const result = await axios.post(url, params, {headers});
        console.log(result);
//when clicking on logo top left, need to re-login. 1. save userid in local storage 2. access token
        if (result.status == 200) {
          setError('');
          navigate('/user'); 
        } else {
          setError('Invalid credentials, please try again');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setError(error.response?.data?.message || 'An error occurred. Please try again.');
      }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // need to send a request
    // use axios
    await userLogin(name, password);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>LOGIN</h1>
        {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function LoginSocial() {
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

export default function LoginPage() {
    return (
        <div>
          <Menu />
          <Login />
          <LoginSocial />
        </div>
      );
}
