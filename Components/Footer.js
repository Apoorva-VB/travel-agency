import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <ul className="footer-links">
          <li>
            <a href="#home" className="footer-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer-copy">
        &copy; 2025 Travel Agency. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
