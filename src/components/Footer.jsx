

import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/ororegen.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Left Section --- */}
        <div className="footer-about">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div className="logo-text">
              <h2>ORO-REGEN</h2>
            </div>
          </div>
          <p>
            At Oro Regen Company, innovation meets convenience. We create powerful
            digital solutions that simplify lives and empower businesses across
            industries. From hospitality and real estate to consultancy and
            learning, our apps are designed to redefine everyday experiences.
          </p>
        </div>

        {/* --- Useful Links --- */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
       <ul>
  <li>
    <a href="/" style={{ color: "white", textDecoration: "none" }}>
      HOME
    </a>
  </li>
  <li>
    <a href="/about" style={{ color: "white", textDecoration: "none" }}>
      ABOUT US
    </a>
  </li>
  <li>
    <a href="/apps" style={{ color: "white", textDecoration: "none" }}>
      OUR APP
    </a>
  </li>
  <li>
    <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
      CONTACT US
    </a>
  </li>
</ul>

        </div>

        {/* --- Company Apps --- */}
        <div className="footer-links">
          <h3>OUR APP</h3>
         <ul>
  <li>
    <a href="/apps/30forty" style={{ color: "white", textDecoration: "none" }}>
      30forty
    </a>
  </li>
  <li>
    <a href="/apps/stayfinder" style={{ color: "white", textDecoration: "none" }}>
      Stay Finder
    </a>
  </li>
  <li>
    <a href="/apps/sellmytime" style={{ color: "white", textDecoration: "none" }}>
      SellMyTime
    </a>
  </li>
  <li>
    <a href="#" style={{ color: "white", textDecoration: "none" }}>
      Masterji
    </a>
  </li>
</ul>

        </div>

        {/* --- Contact Us --- */}
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p><FaPhone className="icon" /> +91 78291 25869</p>
          <p><FaEnvelope className="icon" /> ororegencompanies@gmail.com</p>
          <p>
            <FaMapMarkerAlt className="icon" /> #36 A-WING, 2ND MAIN,
            SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
          </p>
        </div>
      </div>

      {/* --- Bottom Section with Policies --- */}
      <div className="footer-bottom">
        <div className="footer-policies">
          <a href="/ororegen/pricavy-policy">Privacy Policy</a> |{" "}
        
          <a href="/ororegen/terms-and-conditions">Terms & Conditions</a>
        </div>
        <p>© 2025 ORO-REGEN. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
