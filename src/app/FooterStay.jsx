// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaGooglePlusG,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";
// import logo from "../assets/stay.png";
// import footerBg from "../assets/footer.jpeg"; // ✅ make sure the path is correct

// const FooterStay = () => {
//   return (
//     <footer
//       style={{
//         fontFamily: "sans-serif",
//         position: "relative",
//         marginRight: "-10px",
//         marginLeft: "-10px",
//       }}
//     >
//       {/* Top Arc Shape */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-60px",
//           left: 0,
//           width: "100%",
//           overflow: "hidden",
//           lineHeight: 0,
//           zIndex: 2,
//         }}
//       >
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           style={{ display: "block", width: "100%", height: "60px" }}
//         >
//           <path
//             d="M0,0 C300,100 900,-100 1200,0 L1200,120 L0,120 Z"
//             fill="url(#footerGradient)"
//           ></path>
//         </svg>
//       </div>

//       {/* Main Footer */}
//       <div
//         style={{
//           backgroundImage: `url(${footerBg})`, // ✅ your background image
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           color: "#fff",
//           padding: "100px 60px 50px",
//           position: "relative",
//           zIndex: 1,
//           overflow: "hidden",
//         }}
//       >
//         {/* Dark overlay for readability */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background:
//               "linear-gradient(90deg, #ffffffff, rgba(255,155,212,0.85))",
//             zIndex: 0,
//           }}
//         ></div>

//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//             gap: "40px",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           {/* Brand Section */}
//           <div>
//             <img
//               src={logo}
//               alt="Logo"
//               style={{
//                 height: "120px",
//                 objectFit: "contain",
//               }}
//             />
//             <p style={{ fontSize: "14px", lineHeight: "1.8", color: "black" }}>
//               Discover unique stays and unforgettable experiences. Book your
//               perfect getaway with Indianhotels.
//             </p>
//             <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
//               {[FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG].map(
//                 (Icon, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     style={{
//                       color: "#000000ff",
//                       fontSize: "18px",
//                       width: "40px",
//                       height: "40px",
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       background: "rgba(255,255,255,0.2)",
//                       transition: "0.3s",
//                     }}
//                     onMouseOver={(e) => {
//                       e.currentTarget.style.background = "#fff";
//                       e.currentTarget.style.color = "#f107a3";
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.style.background =
//                         "rgba(255,255,255,0.2)";
//                       e.currentTarget.style.color = "#fff";
//                     }}
//                   >
//                     <Icon />
//                   </a>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h3
//               style={{
//                 marginBottom: "16px",
//                 fontWeight: "800",
//                 fontSize: "18px",
//                 borderBottom: "2px solid #fff",
//                 display: "inline-block",
//                 paddingBottom: "5px",
//                 color: "black",
//               }}
//             >
//               QUICK LINKS
//             </h3>
//             <ul
//               style={{
//                 listStyle: "none",
//                 padding: 0,
//                 margin: 0,
//                 fontSize: "14px",
//                 color: "black",
//               }}
//             >
//               {["Home", "About Us", "Why Choose Us", "Faq's", "Contact Us"].map(
//                 (item, idx) => (
//                   <li key={idx} style={{ marginBottom: "10px" }}>
//                     <a
//                       href="#"
//                       style={{
//                         color: "#000000ff",
//                         textDecoration: "none",
//                         transition: "0.3s",
//                         fontSize: 16,
//                         fontWeight: 600,
//                       }}
//                       onMouseOver={(e) =>
//                         (e.currentTarget.style.color = "#000000ff")
//                       }
//                       onMouseOut={(e) =>
//                         (e.currentTarget.style.color = "#000000ff")
//                       }
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3
//               style={{
//                 marginBottom: "16px",
//                 fontWeight: "900",
//                 fontSize: "19px",
//                 borderBottom: "2px solid #fff",
//                 display: "inline-block",
//                 paddingBottom: "5px",
//                 color: "black",
//               }}
//             >
//               CONTACT US
//             </h3>
//             <div
//               style={{
//                 marginBottom: "12px",
//                 fontSize: "14px",
//                 color: "black",
//                 fontWeight: 600,
//               }}
//             >
//               <FaPhoneAlt style={{ marginRight: "10px", color: "black" }} />{" "}
//              +91 63669 21746
//             </div>

//             <div
//               style={{
//                 marginBottom: "12px",
//                 fontSize: "16px",
//                 fontWeight: 500,
//                 color: "black",
//                 fontWeight: 600,
//               }}
//             >
//               <FaEnvelope
//                 style={{
//                   marginRight: "10px",
//                   fontSize: "16px",
//                   fontWeight: 600,
//                 }}
//               />
//              support@stayfindr.com
//             </div>

//             <div
//               style={{
//                 marginTop: "15px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 color: "black",
//               }}
//             >
//            #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
//               <br />
         
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div
//           style={{
//             textAlign: "center",
//             marginTop: "40px",
//             paddingTop: "20px",
//             borderTop: "1px solid rgba(0, 0, 0, 1)",
//             fontSize: "16px",
//             position: "relative",
//             zIndex: 1,
//             fontWeight: 600,
//             color: "#000",
//           }}
//         >
//           {/* Policy Links */}
//           <div style={{ marginBottom: "15px" }}>
//             <a
//               href="/privacy-policy"
//               style={{
//                 margin: "0 15px",
//                 color: "#02B538",
//                 textDecoration: "none",
//                 fontSize: "14px",
//                 fontWeight: 600,
//               }}
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="/refund-policy"
//               style={{
//                 margin: "0 15px",
//                 color: "#02B538",
//                 textDecoration: "none",
//                 fontSize: "14px",
//                 fontWeight: 600,
//               }}
//             >
//               Refund Policy
//             </a>
//             <a
//               href="/terms-and-conditions"
//               style={{
//                 margin: "0 15px",
//                 color: "#02B538",
//                 textDecoration: "none",
//                 fontSize: "14px",
//                 fontWeight: 600,
//               }}
//             >
//               Terms & Conditions
//             </a>
//           </div>

//           © {new Date().getFullYear()} Indianhotels. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterStay;
import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./StayFinderPage.css";
const logo = "/IndianHotelsLogo.png";
import footerBg from "../assets/footer.jpeg";

const FooterStay = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="ih-footer">
        {/* Top wave */}
        <div className="ih-footer-wave" aria-hidden>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#053B17" />
                <stop offset="100%" stopColor="#064a1d" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C300,100 900,-100 1200,0 L1200,120 L0,120 Z"
              fill="url(#footerGradient)"
            />
          </svg>
        </div>

        {/* Main Footer */}
        <div className="ih-footer-main" style={{ backgroundImage: `url(${footerBg})` }}>
          <div className="ih-footer-grid">
            {/* Brand / About */}
            <div>
              <div className="ih-footer-logo">
                <img src={logo} alt="Indianhotels" />
                <span>Indianhotels</span>
              </div>
              <p className="ih-footer-about">
                Discover unique stays and unforgettable experiences. Book your perfect getaway with
                Indianhotels.
              </p>

              <div className="ih-socials">
                {[
                  { Icon: FaFacebookF, href: "#", label: "Facebook" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                  { Icon: FaGooglePlusG, href: "#", label: "Google Plus" },
                  {
                    Icon: FaWhatsapp,
                    href: "https://wa.me/916366921746",
                    label: "WhatsApp",
                  },
                ].map((social, idx) => {
                  const { href, label } = social;
                  return (
                  <a
                    key={idx}
                    className="ih-social"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                  >
                    <social.Icon />
                  </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3>QUICK LINKS</h3>
              <ul className="ih-footer-links">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Why Choose Us", href: "#whychooseus" },
                  { label: "FAQ's", href: "#faq" },
                  { label: "Contact Us", href: "#contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3>CONTACT US</h3>

              <a className="ih-contact" href="tel:+916366921746">
                <span className="ih-contact-icon">
                  <FaPhoneAlt aria-hidden />
                </span>
                +91 63669 21746
              </a>

              <a className="ih-contact" href="mailto:support@indianhotels.com">
                <span className="ih-contact-icon">
                  <FaEnvelope aria-hidden />
                </span>
                support@indianhotels.com
              </a>

              <p className="ih-address">
                <span className="ih-contact-icon">
                  <FaMapMarkerAlt aria-hidden />
                </span>
                <span>
                  #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE,
                  <br />
                  SRINAGARA, MYSORE-570008
                </span>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="ih-footer-bottom">
            <div className="ih-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <span>•</span>
              <a href="/refund-policy">Refund Policy</a>
              <span>•</span>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </div>

            <p className="ih-copy">
              © 2025<strong> Indianhotels. </strong> This App is managed by Oro Regen Companies.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        className="ih-fab ih-fab--wa"
        href="https://wa.me/916366921746"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Floating Back-to-top button */}
      <button
        className="ih-fab ih-fab--top"
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{ display: showTop ? "flex" : "none" }}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default FooterStay;
