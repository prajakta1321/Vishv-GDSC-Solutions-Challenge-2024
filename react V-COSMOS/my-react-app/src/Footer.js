// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5>ABOUT</h5>
        <p>Our Story</p>
      </div>
      <div className="footer-section">
        <h5>CONTACT</h5>
        <p>Phone: +1-234-567-8900</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-section">
        <h5>POLICIES</h5>
        <ul>
          <li><a href="#privacy">Privacy & Security</a></li>
          <li><a href="#cookie">Cookie Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>HELP</h5>
        <ul>
          <li><a href="#help">Customer Support</a></li>
        </ul>
      </div>
      <div className="footer-copy">
        © 2024 Climatescope. <a href="#license">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
