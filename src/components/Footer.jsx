import React from "react";
import { FaFacebookF,FaYoutube, FaInstagram, FaGooglePlusG, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
         At Oro Regen Company, innovation meets convenience. We create powerful digital solutions that simplify lives and empower businesses across industries. From hospitality and real estate to consultancy and learning, our apps are designed to redefine everyday experiences.
          </p>
          {/* <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div> */}
        </div>
    {/* --- Useful Links --- */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>OUR APP</li>
            <li>CONTACT US</li>
          
          </ul>
        </div>
        {/* --- Company News --- */}
        <div className="footer-links">
          <h3>OUR APP</h3>
          <ul>
            <li>30forty</li>
            <li>Stay Finder</li>
            <li>SellMyTime</li>
            <li>Masterji</li>
        
          </ul>
        </div>

    

        {/* --- Contact Us --- */}
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p><FaPhone className="icon" /> +91 78291 25869</p>
          <p><FaEnvelope className="icon" /> ororegencompanies@gmail.com</p>
          <p><FaMapMarkerAlt className="icon" /> #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 @ All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
