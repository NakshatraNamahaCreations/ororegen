import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/ororegen.jpg";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a
            href="https://ororegencompanies.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Logo" />
          </a>
          <div className="logo-text">
            <h2>
              <a
                href="https://ororegencompanies.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                ORO-REGEN
              </a>
            </h2>
          </div>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            HOME
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            ABOUT US
          </Link>

          <div className="dropdown">
            <Link
              to="/apps"
              className={location.pathname.startsWith("/apps") ? "active" : ""}
            >
              OUR APP ▾
            </Link>
            <div className="dropdown-menu">
              <Link to="/apps/sellmytime">Networkx</Link>
              <Link to="/apps/30forty">30Forty</Link>
              <Link to="/apps/stayfinder">StayFindr</Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="contact-info">
          <FaPhone className="phone-icon" />
          <div>
            <small>Have any Questions?</small>
            <p>
              <strong>
                <a
                  href="tel:+917829125869"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  +91 78291 25869
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
