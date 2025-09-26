import React from 'react';
import './Header.css';
import Logo from '../../assets/images/header/ico.png';
const Header = () => {
  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">
          <a href="#">
            <img src={Logo} alt="SkillMatcher Logo" className="logo-image" />
            <p>SkillMacther</p>
          </a>
        </div>


        <nav className="nav-links">
          <a href="#">Jobs</a>
          <a href="#">Log In</a>
          <a href="#">Pricing</a>
          <a href="#">Services</a>
          <a href="#">About</a>
        </nav>


        <div className="mobile-menu">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
