

// import React from "react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaInstagram,
//   FaFacebook,
//   FaYoutube,
//   FaTwitter,
// } from "react-icons/fa";
// import logo from "../assets/sellmytime.png";

// const Footersellmytime = () => {
//   // Smooth scroll handler
//   const handleSmoothScroll = (e, link) => {
//     if (link.startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(link);
//       if (target) {
//         window.scrollTo({
//           top: target.offsetTop - 90,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   const footerLinks = [
//     { name: "Home", link: "https://ororegencompanies.in/", external: true },
//     { name: "About Us", link: "#about" },
//     { name: "Why Choose Us", link: "#why-choose-us" },
//     { name: "FAQs", link: "#faq" },
//     { name: "Contact Us", link: "#contact" },
//   ];

//   return (
//     <footer style={{ fontFamily: "'Poppins', sans-serif" }}>
//       {/* 🔹 Top Support Bar */}
//       <div
//         style={{
//           backgroundColor: "#ff4c00",
//           color: "#fff",
//           padding: "30px",
//           borderRadius: "10px",
//           textAlign: "center",
//           maxWidth: "1100px",
//           margin: "0 auto",
//           transform: "translateY(-40px)",
//           marginTop: "140px",
//           marginBottom: "-70px",
//         }}
//       >
//         <h3 style={{ marginBottom: "10px", fontSize: "22px", fontWeight: "700" }}>
//           Need Support?
//         </h3>
//         <p style={{ marginBottom: "20px", fontSize: "14px" }}>
//           Have questions or need help? We’re here for you 24/7.
//         </p>
//         <a
//           href="tel:+919876543210"
//           style={{
//             backgroundColor: "#fff",
//             color: "#000",
//             padding: "10px 20px",
//             borderRadius: "25px",
//             fontWeight: "600",
//             textDecoration: "none",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           <FaPhone /> Call us now
//         </a>
//       </div>

//       {/* 🔹 Main Footer */}
//       <div
//         style={{
//           backgroundColor: "#fff3e0",
//           padding: "60px 40px 30px",
//           display: "grid",
//           gridTemplateColumns: "1.2fr 1fr 1fr",
//           gap: "40px",
//           maxWidth: "1500px",
//           margin: "0 auto",
//           borderTop: "1px solid #eee",
//         }}
//       >
//         {/* Logo + About */}
//         <div>
//           <img src={logo} alt="Sell Your Time" style={{ height: "60px", marginBottom: "15px" }} />
//           <p style={{ fontSize: "14px", color: "#333", marginBottom: "20px" }}>
//             Connect, collaborate, and earn through meaningful interactions. Sell your time — your way.
//           </p>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <button style={{ backgroundColor: "#000", color: "#fff", padding: "8px 15px", border: "none", borderRadius: "6px" }}>
//                App Store
//             </button>
//             <button style={{ backgroundColor: "#000", color: "#fff", padding: "8px 15px", border: "none", borderRadius: "6px" }}>
//               ▶ Google Play
//             </button>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}>Quick Links</h4>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {footerLinks.map((item, i) => (
//               <li key={i} style={{ marginBottom: "10px" }}>
//                 <a
//                   href={item.link}
//                   onClick={(e) => !item.external && handleSmoothScroll(e, item.link)}
//                   target={item.external ? "_blank" : undefined}
//                   rel={item.external ? "noopener noreferrer" : undefined}
//                   style={{
//                     textDecoration: "none",
//                     color: "#000",
//                     fontSize: "14px",
//                     transition: "color 0.3s",
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ff4c00")}
//                   onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Us */}
//         <div>
//           <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}>Contact Us</h4>
//           <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
//             <FaPhone /> +91 98765 43210
//           </p>
//           <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
//             <FaEnvelope /> support@sellyourtime.com
//           </p>
//           <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <FaMapMarkerAlt /> #374, Dwaraka Nagar, Bengaluru, India
//           </p>
//           <div style={{ display: "flex", gap: "12px", marginTop: "15px", fontSize: "18px", color: "#ff4c00" }}>
//             <FaInstagram />
//             <FaFacebook />
//             <FaYoutube />
//             <FaTwitter />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Policies */}
//       <div
//         style={{
//           backgroundColor: "#fff3e0",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "15px 40px",
//           borderTop: "1px solid #ddd",
//           fontSize: "14px",
//         }}
//       >
//         <p style={{ margin: 0 }}>© 2025 Sell Your Time. All rights reserved.</p>
//         <div>
//           <a href="/sellmytime/privacy-policy" style={{ marginRight: "15px", color: "#000", textDecoration: "none" }}>
//             Privacy Policy
//           </a>
//           <a href="/sellmytime/terms-and-conditions" style={{ marginRight: "15px", color: "#000", textDecoration: "none" }}>
//             Terms & Conditions
//           </a>
//           <a href="/sellmytime/refund-policy" style={{ color: "#000", textDecoration: "none" }}>
//             Refund Policy
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footersellmytime;
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/networkzlogo.png";

const Footersellmytime = () => {
  const footerLinks = [
    { name: "Home", link: "https://ororegencompanies.in/", external: true },
    { name: "About Us", link: "#about" },
    { name: "Why Choose Us", link: "#why-choose-us" },
    { name: "FAQs", link: "#faq" },
    { name: "Contact Us", link: "#contact" },
  ];

  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="smt-footer">
      {/* 🔸 Support Bar */}
      <div className="smt-support-bar">
        <h3>Need Support?</h3>
        <p>Have questions or need help? We’re here for you 24/7.</p>
        <a href="tel:+919876543210">
          <FaPhone /> Call us now
        </a>
      </div>

      {/* 🔸 Main Footer */}
      <div className="smt-footer-main">
        {/* Logo + About */}
        <div className="footer-section">
          <img src={logo} alt="Sell Your Time" className="footer-logo" />
          <p>
          Our platform transforms traditional consulting into flexible, on-demand opportunities that fit every schedule.
Whether you’re a coach, mentor, or freelancer — we help you share your knowledge, grow your network, and earn effortlessly.
          </p>
          <div className="store-buttons">
            <button> App Store</button>
            <button>▶ Google Play</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section" style={{marginRight:'-40px'}}>
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={(e) =>
                    !item.external && handleSmoothScroll(e, item.link)
                  }
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <FaPhone />+91 78291 25869
          </p>
          <p>
            <FaEnvelope /> support@networkx.com
          </p>
          <p>
            <FaMapMarkerAlt />#36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
          </p>
          {/* <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
          </div> */}
        </div>
      </div>

      {/* 🔸 Bottom Bar */}
      <div className="smt-footer-bottom">
        <p>© 2025 Networkx. This App is managed by Oro Regen Companies. All Rights Reserved.</p>
        <div>
          <a href="/sellmytime/privacy-policy">Privacy Policy</a>
          <a href="/sellmytime/terms-and-conditions">Terms & Conditions</a>
          <a href="/sellmytime/refund-policy">Refund Policy</a>
        </div>
      </div>

      {/* 🔹 CSS */}
      <style>{`
        .smt-footer {
          font-family: 'Poppins', sans-serif;
          background: #edeff8ff;
          color: #000;
        }

        /* Support bar */
        .smt-support-bar {
          background: #24428B;
          color: #fff;
          text-align: center;
          padding: 40px 20px;
          border-radius: 10px;
          max-width: 1100px;
          margin: 0 auto;
          transform: translateY(-40px);
        }
        .smt-support-bar h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .smt-support-bar p {
          font-size: 14px;
          margin-bottom: 15px;
        }
        .smt-support-bar a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #000;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          text-decoration: none;
        }

        /* Footer main */
        .smt-footer-main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 60px;
          background: #edeff8ff;
        }

        .footer-section {
          text-align: left;
        }
        .footer-logo {
          height: 65px;
          margin-bottom: 15px;
        }
        .footer-section h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .footer-section p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
          color: #333;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        .footer-section ul li a {
          text-decoration: none;
          color: #000;
          font-size: 14px;
          transition: color 0.3s;
        }
        .footer-section ul li a:hover {
          color: #24428B;
        }

        .store-buttons button {
          background: #000;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 8px 15px;
          margin-right: 8px;
          font-size: 14px;
          cursor: pointer;
        }

        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 15px;
          font-size: 18px;
          color: #24428B;
        }

        /* Bottom bar */
        .smt-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          border-top: 1px solid #ddd;
          background: #fff3e0;
          font-size: 14px;
          flex-wrap: wrap;
        }
        .smt-footer-bottom a {
          color: #000;
          text-decoration: none;
          margin-right: 15px;
        }
        .smt-footer-bottom a:hover {
          color: #24428B;
        }

        /* 🔹 Responsive */
        @media (max-width: 992px) {
          .smt-footer-main {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 50px 30px;
          }

          .footer-section {
            margin-bottom: 40px;
          }

          .footer-section ul li {
            margin-bottom: 10px;
          }

          .social-icons {
            justify-content: center;
          }

          .smt-footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .smt-support-bar {
            transform: none;
            border-radius: 0;
            margin-top: 100px;
          }
        }

        @media (max-width: 600px) {
          .smt-footer-main {
            padding: 40px 20px;
          }

          .smt-support-bar h3 {
            font-size: 20px;
          }

          .smt-footer-bottom {
            font-size: 13px;
          }

          .store-buttons button {
            font-size: 12px;
            padding: 6px 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footersellmytime;
