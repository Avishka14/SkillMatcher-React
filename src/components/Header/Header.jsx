import React from "react";
import "./Header.css";
import Logo from "../../assets/images/header/ico.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SkillMatcher Logo" className="logo-image" />
            <p>SkillMacther</p>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/account">Account</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="mobile-menu">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="menu-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
