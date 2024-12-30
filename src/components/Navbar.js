import React, { useState } from 'react';
import "../style/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCustomerSupportVisible, setCustomerSupportVisible] = useState(false);
  const [isOurProductsVisible, setOurProductsVisible] = useState(false);
  const [isNewsroomVisible, setNewsroomVisible] = useState(false); // State for Newsroom dropdown

  return (
    <div>
      <header>
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">ABC</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          {/* Our Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setOurProductsVisible(true)}
            onMouseLeave={() => setOurProductsVisible(false)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <a href="#" className="dropdown-toggle">
              Our Products
            </a>
            {isOurProductsVisible && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  zIndex: 10,
                  padding: "10px",
                  width: "250px",
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li style={{ marginBottom: "10px", fontWeight: "bold" }}>Urban Finance</li>
                  <ul style={{ listStyle: "none", marginLeft: "10px", marginBottom: "10px" }}>
                    <li>Housing Finance</li>
                    <li>Personal Loans</li>
                    <li>Two-Wheeler Finance</li>
                  </ul>
                  <li style={{ marginBottom: "10px", fontWeight: "bold" }}>Farmer Finance</li>
                  <ul style={{ listStyle: "none", marginLeft: "10px", marginBottom: "10px" }}>
                    <li>Farm Equipment Finance</li>
                  </ul>
                  <li style={{ marginBottom: "10px", fontWeight: "bold" }}>SME Finance</li>
                  <ul style={{ listStyle: "none", marginLeft: "10px", marginBottom: "10px" }}>
                    <li>SME Loans</li>
                  </ul>
                  <li style={{ marginBottom: "10px", fontWeight: "bold" }}>Rural Business Finance</li>
                  <ul style={{ listStyle: "none", marginLeft: "10px" }}>
                    <li>Micro Loans</li>
                  </ul>
                </ul>
              </div>
            )}
          </div>

          {/* Customer Support Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setCustomerSupportVisible(true)}
            onMouseLeave={() => setCustomerSupportVisible(false)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <a href="#" className="dropdown-toggle">
              Customer Support
            </a>
            {isCustomerSupportVisible && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  zIndex: 10,
                  padding: "10px",
                  width: "250px",
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Customer Servicing</span>
                    <ul style={{ listStyle: "none", marginLeft: "10px" }}>
                      <li>Home Loans</li>
                      <li>Two-Wheeler, Farm Equipment Finance, Personal & Micro Loans</li>
                      <li>SME Finance</li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Newsroom Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setNewsroomVisible(true)}
            onMouseLeave={() => setNewsroomVisible(false)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <a href="#" className="dropdown-toggle">
              Newsroom
            </a>
            {isNewsroomVisible && (
              <div
                className="dropdown-content"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  zIndex: 10,
                  padding: "10px",
                  width: "250px",
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li>
                    <a href="/news/press-releases" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a href="/news/events" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="/news/media-coverage" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Media Coverage
                    </a>
                  </li>
                  <li>
                    <a href="/news/blogs" style={{ textDecoration: "none", color: "#0078D7" }}>
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/about">About Us</Link>
        </nav>

        {/* Buttons Section */}
        <div className="top-buttons">
          <Link to="/login">
            <button>Quick Pay</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
