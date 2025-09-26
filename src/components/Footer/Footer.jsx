import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-links">
          <a href="#">Jobs</a>
          <a href="#">Log In</a>
          <a href="#">Pricing</a>
          <a href="#">Services</a>
          <a href="#">About</a>
        </nav>

        <p className="developer">
          Developed by <span>Avishka Chamod</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
