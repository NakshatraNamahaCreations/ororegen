import React from "react";
import "./Header.css";
import sellLogo from "../assets/sell.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-area">
          <img src={sellLogo} alt="Sell Your Time" className="logo" />
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#why">Why Choose Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* CTA Button */}
        <div className="cta">
          <a href="#download" className="download-btn">
            Download the App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
