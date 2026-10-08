

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
//           href="tel:+916366921746"
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
//           <img src={logo} alt="Sell My Time" style={{ height: "60px", marginBottom: "15px" }} />
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
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
const logo = "/SellMyTimeLogo.png";

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
        <div className="smt-support-text">
          <h3>Need Support?</h3>
          <p>Have questions or need help? We’re here for you 24/7.</p>
        </div>
        <a href="tel:+916366921746">
          <FaPhone /> Call us now
        </a>
      </div>

      {/* 🔸 Main Footer */}
      <div className="smt-footer-main">
        {/* Logo + About */}
        <div className="footer-section footer-about">
          <img src={logo} alt="Sell My Time" className="footer-logo" />
          <p>
          Our platform transforms traditional consulting into flexible, on-demand opportunities that fit every schedule.
Whether you’re a coach, mentor, or freelancer — we help you share your knowledge, grow your network, and earn effortlessly.
          </p>
          <div className="store-buttons">
            <button type="button" title="App Store (Coming Soon)"><FaApple aria-hidden="true" /> App Store</button>
            <a
              href="https://play.google.com/store/apps/details?id=com.bizmats&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Sell My Time on Google Play"
            >
              <FaGooglePlay aria-hidden="true" /> Google Play
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
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
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p>
            <span className="fc-ic"><FaPhone /></span>
            <a href="tel:+916366921746" style={{ color: "inherit", textDecoration: "none" }}>
              +91 63669 21746
            </a>
          </p>
          <p>
            <span className="fc-ic"><FaEnvelope /></span>support@networkx.com
          </p>
          <p>
            <span className="fc-ic"><FaMapMarkerAlt /></span>#36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
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
        <p>© 2025 Sell My Time. This App is managed by Oro Regen Companies. All Rights Reserved.</p>
        <div>
          <a href="/sellmytime/privacy-policy">Privacy Policy</a>
          <a href="/sellmytime/terms-and-conditions">Terms & Conditions</a>
          <a href="/sellmytime/refund-policy">Refund Policy</a>
        </div>
      </div>

      {/* 🔹 CSS */}
      <style>{`
        .smt-footer {
          position: relative;
          font-family: 'Poppins', sans-serif;
          color: #fff;
          padding-top: 40px;
          isolation: isolate;
        }
        .smt-footer *, .smt-footer *::before, .smt-footer *::after { box-sizing: border-box; }
        /* Dark body starts halfway down the support bar so the bar straddles the edge */
        .smt-footer::before {
          content: "";
          position: absolute;
          left: 0; right: 0; top: 110px; bottom: 0;
          z-index: -1;
          background:
            radial-gradient(700px 360px at 10% 0%, rgba(139,31,192,.28), transparent 70%),
            radial-gradient(600px 320px at 100% 100%, rgba(243,156,69,.14), transparent 70%),
            #0D0630;
          border-top: 3px solid #F45A63;
          border-image: linear-gradient(90deg, #8B1FC0, #F45A63, #F39C45) 1;
        }

        /* Support bar (overlaps the section above) */
        .smt-support-bar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: linear-gradient(135deg, #8B1FC0 0%, #F45A63 60%, #F39C45 100%);
          color: #fff;
          padding: 34px 44px;
          border-radius: 26px;
          max-width: 1100px;
          width: calc(100% - 48px);
          margin: 0 auto;
          box-shadow: 0 30px 60px -24px rgba(139,31,192,.6);
          overflow: hidden;
          z-index: 1;
        }
        .smt-support-bar::after {
          content: "";
          position: absolute;
          right: -60px; top: -80px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          pointer-events: none;
        }
        .smt-support-text { position: relative; }
        .smt-support-bar h3 {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin: 0 0 6px;
        }
        .smt-support-bar p {
          font-size: 15px;
          margin: 0;
          opacity: .92;
        }
        .smt-support-bar a {
          position: relative;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #0D0630;
          padding: 13px 26px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 12px 24px -10px rgba(13,6,48,.5);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .smt-support-bar a svg { color: #8B1FC0; }
        .smt-support-bar a:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 30px -12px rgba(13,6,48,.6);
        }

        /* Footer main */
        .smt-footer-main {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1.2fr;
          gap: 56px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 56px;
        }

        .footer-section { text-align: left; }
        .footer-logo {
          height: 72px;
          margin-bottom: 18px;
          border-radius: 16px;
          box-shadow: 0 12px 28px -10px rgba(244,90,99,.45);
        }
        .footer-section h4 {
          position: relative;
          font-size: 16px;
          font-weight: 700;
          margin: 6px 0 22px;
          padding-bottom: 12px;
          color: #fff;
        }
        .footer-section h4::after {
          content: "";
          position: absolute;
          left: 0; bottom: 0;
          width: 36px; height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #8B1FC0, #F45A63, #F39C45);
        }
        .footer-section p {
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 14px;
          color: rgba(255,255,255,.68);
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section ul li { margin-bottom: 12px; }
        .footer-section ul li a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: rgba(255,255,255,.75);
          font-size: 14px;
          transition: color .25s ease, transform .25s ease;
        }
        .footer-section ul li a::before {
          content: "";
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F45A63, #F39C45);
          opacity: .6;
          transition: opacity .25s ease;
        }
        .footer-section ul li a:hover {
          color: #fff;
          transform: translateX(4px);
        }
        .footer-section ul li a:hover::before { opacity: 1; }

        .footer-contact p {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .fc-ic {
          flex: 0 0 auto;
          width: 32px; height: 32px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: #fff;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          margin-top: -3px;
        }
        .fc-ic svg { color: #F39C45; }

        .store-buttons { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
        .store-buttons button,
        .store-buttons a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          background: rgba(255,255,255,.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background .25s ease, border-color .25s ease, transform .25s ease;
        }
        .store-buttons button:hover,
        .store-buttons a:hover {
          background: linear-gradient(135deg, #8B1FC0, #F45A63);
          border-color: transparent;
          color: #fff;
          transform: translateY(-2px);
        }

        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 15px;
          font-size: 18px;
          color: #F45A63;
        }

        /* Bottom bar */
        .smt-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 40px 26px;
          border-top: 1px solid rgba(255,255,255,.1);
          font-size: 13.5px;
          flex-wrap: wrap;
          color: rgba(255,255,255,.6);
        }
        .smt-footer-bottom p { margin: 0; }
        .smt-footer-bottom div { display: flex; flex-wrap: wrap; gap: 6px 20px; }
        .smt-footer-bottom a {
          color: rgba(255,255,255,.72);
          text-decoration: none;
          transition: color .25s ease;
        }
        .smt-footer-bottom a:hover { color: #F39C45; }

        /* 🔹 Responsive */
        @media (max-width: 992px) {
          .smt-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 56px 28px 40px;
          }
          .footer-about { grid-column: 1 / -1; }
        }

        @media (max-width: 640px) {
          .smt-footer::before { top: 150px; }
          .smt-support-bar {
            flex-direction: column;
            text-align: center;
            padding: 30px 22px;
            width: calc(100% - 32px);
            border-radius: 22px;
            gap: 18px;
          }
          .smt-support-bar h3 { font-size: 22px; }
          .smt-footer-main {
            grid-template-columns: 1fr;
            gap: 34px;
            padding: 48px 22px 32px;
          }
          .smt-footer-bottom {
            flex-direction: column;
            text-align: center;
            padding: 20px 22px 24px;
            font-size: 12.5px;
          }
          .smt-footer-bottom div { justify-content: center; }
          .store-buttons button { font-size: 13px; padding: 9px 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .smt-footer * { transition: none !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footersellmytime;
