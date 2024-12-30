import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <Link to="/">ABC</Link>
        </div>
        <nav className="nav">
          <a href="#">Company Website</a>
          <a href="#">Locate Us</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <select className="language-selector">
            <option>Language-English</option>
          </select>
        </nav>
      </header>

      <main className="main">
        <div className="login-container">
          <img
            className="illustration"
            src="https://via.placeholder.com/150"
            alt="Illustration"
          />
          <h2>Welcome!</h2>
          <p>Login to start using our services</p>
          <form className="login-form">
            <label>
              Enter your Mobile Number
              <input
                type="text"
                placeholder="Enter mobile number"
                className="input-field"
              />
            </label>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="quick-pay">
            <p>
              <strong>Quick Pay</strong>
            </p>
            <p>Pay EMI using Loan Account Number</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
