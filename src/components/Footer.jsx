// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaPinterestP,
// } from "react-icons/fa";
// import logo from "../assets/ororegen.jpg";
// import "./Footer.css";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // add at the top
// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* 🔹 Subscribe / Register Section */}
//       <div className="newsletter-section">
//         <div className="newsletter-container">
//           <div className="newsletter-icon">
//             <div className="icon-circle">
//               <i className="fa fa-envelope"></i>
//             </div>
//           </div>
//           <input
//             type="email"
//             className="newsletter-input"
//             placeholder="Enter your email address"
//           />
//           <button className="newsletter-btn">Register Now</button>
//         </div>
//       </div>

//       {/* 🔹 Main Footer Area */}
//       <div className="footer-main">
//         <div className="footer-about">
//           <div className="footer-logo">
//             <img src={logo} alt="ORO-REGEN" />
//             <h3>ORO-REGEN</h3>
//           </div>
//           <p>
//             At ORO-REGEN, innovation meets convenience. We create powerful
//             digital solutions that simplify lives and empower businesses across
//             industries.
//           </p>
//         </div>

//         <div className="footer-column">
//           <h4>QUICK LINKS</h4>
//           <ul>
//             <li><a href="/about">Home</a></li>
//             <li><a href="/team">About Us</a></li>
//             <li><a href="/contact">Our Apps</a></li>
//             <li><a href="/services">Contact Us</a></li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>OUR APPS</h4>
//           <ul>
//             <li><a href="/news">30Forty</a></li>
//             <li><a href="/features">Stayfindr</a></li>
//             <li><a href="/download"> Networkx</a></li>
//             <li><a href="/free-trial">Masterji</a></li>
//           </ul>
//         </div>

//        <div className="footer-column">
//   <h4>CONTACT US</h4>
//   <ul className="contact-list">
//     <li>
//       <FaPhone className="contact-icon" />
//       <a href="tel:+917829125869">+91 78291 25869</a>
//     </li>
//     <li>
//       <FaEnvelope className="contact-icon" />
//       <a href="mailto:ororegencompanies@gmail.com">
//       ororegencompanies@gmail.com
//       </a>
//     </li>
//     <li>
//       <FaMapMarkerAlt className="contact-icon" />
//       <span>
//         #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
//       </span>
//     </li>
//   </ul>
// </div>
//       </div>

//       {/* 🔹 Bottom Section */}
//       <div className="footer-bottom">
//         <div className="social-icons">
//           <FaFacebookF />
//           <FaTwitter />
//           <FaInstagram />
//           <FaPinterestP />
//         </div>

//         <p className="footer-legal">
//           <a href="/ororegen/pricavy-policy">Privacy Policy</a> |{" "}
//           <a href="/ororegen/terms-and-conditions">Terms & Conditions</a> {" "}
         
//         </p>

//         <p>© Copyright 2025 ORO-REGEN. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useEffect, useState } from "react";
import logo from "../assets/ororegen-logo-480.webp";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const RING_RADIUS = 26;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setScrollProgress(scrollable > 0 ? Math.min(y / scrollable, 1) : 0);
      setShowTop(y > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {/* 🔹 Subscribe / Register Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-icon">
            <div className="icon-circle">
              <i className="fa fa-envelope"></i>
            </div>
          </div>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
          />
          <button className="newsletter-btn">Register Now</button>
        </div>
      </div>

      {/* 🔹 Main Footer Area */}
      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-logo">
            <img src={logo} alt="Oro Regen Companies" />
          </div>
          <p>
            At ORO-REGEN, innovation meets convenience. We create powerful
            digital solutions that simplify lives and empower businesses across
            industries.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <a href="https://ororegencompanies.in/">Home</a>
            </li>
            <li>
              <a href="https://ororegencompanies.in/about">About Us</a>
            </li>
            <li>
              <a href="https://ororegencompanies.in/apps">Our Apps</a>
            </li>
            <li>
              <a href="https://ororegencompanies.in/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Our Apps */}
        <div className="footer-column">
          <h4>OUR APPS</h4>
          <ul>
            <li>
              <a href="https://ororegencompanies.in/apps/sellmytime">
                Sell My Time
              </a>
            </li>
            <li>
              <a href="https://ororegencompanies.in/apps/30forty">30Forty</a>
            </li>
            <li>
              <a href="https://ororegencompanies.in/apps/indianhotels">
                Indianhotels
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul className="contact-list">
            <li>
              <FaPhone className="contact-icon" />
              <a href="tel:+917829125869">+91 78291 25869</a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:ororegencompanies@gmail.com">
                ororegencompanies@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA,
                MYSORE-570008
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="footer-bottom">

        <p className="footer-legal">
          <a href="/ororegen/pricavy-policy">Privacy Policy</a> |{" "}
          <a href="/ororegen/terms-and-conditions">Terms &amp; Conditions</a>
        </p>

        <p>© Copyright 2025 ORO-REGEN. All Rights Reserved.</p>
      </div>

      {/* 🔹 Back to Top */}
      <button
        type="button"
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg className="btt-ring" viewBox="0 0 60 60" aria-hidden="true">
          <circle className="btt-ring-track" cx="30" cy="30" r={RING_RADIUS} />
          <circle
            className="btt-ring-progress"
            cx="30"
            cy="30"
            r={RING_RADIUS}
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={RING_CIRCUMFERENCE * (1 - scrollProgress)}
          />
        </svg>
        <span className="btt-core">
          <FaArrowUp className="btt-arrow" />
        </span>
      </button>
    </footer>
  );
};

export default Footer;
