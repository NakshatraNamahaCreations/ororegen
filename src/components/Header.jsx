import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/ororegen.jpg";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

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

        {/* Mobile overlay (tap outside to close) */}
        {menuOpen && (
          <div className="nav-overlay" onClick={closeAll} aria-hidden="true" />
        )}

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={closeAll}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={closeAll}
          >
            ABOUT US
          </Link>

          <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <div className="dropdown-trigger">
              <Link
                to="/apps"
                className={location.pathname.startsWith("/apps") ? "active" : ""}
                onClick={closeAll}
              >
                OUR APP
              </Link>
              <button
                type="button"
                className="dropdown-caret"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-label="Toggle Our App menu"
              >
                ▾
              </button>
            </div>
            <div className="dropdown-menu">
              <Link to="/apps/sellmytime" onClick={closeAll}>
                Networkx
              </Link>
              <Link to="/apps/30forty" onClick={closeAll}>
                30Forty
              </Link>
              <Link to="/apps/indianhotels" onClick={closeAll}>
                Indianhotels
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={closeAll}
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
