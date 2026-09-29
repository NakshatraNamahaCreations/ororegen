import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/ororegen-logo-960.webp";
import logoSmall from "../assets/ororegen-logo-480.webp";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header
      className={`header ${isHome ? "header--overlay" : ""} ${
        scrolled ? "header--scrolled" : ""
      }`}
    >
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a
            href="https://ororegencompanies.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              srcSet={`${logoSmall} 480w, ${logo} 960w`}
              sizes="(max-width: 900px) 160px, 220px"
              alt="Oro Regen Companies"
            />
          </a>
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
                Sell My Time
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
