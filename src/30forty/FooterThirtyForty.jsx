// import React from "react";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
// import logo from "../assets/30fortylogo.webp"; // ✅ update path to your logo

// const FooterThirtyForty = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#f8f9fc",
//         padding: "50px 20px 20px",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#333",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "2fr 1fr 1fr",
//           gap: "40px",
//         }}
//       >
//         {/* Left Section */}
//         <div>
//           <img
//             src={logo}
//             alt="30Forty Logo"
//             style={{ height: "80px", marginBottom: "15px" }}
//           />
//           <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
//             30Forty is a modern real estate platform that makes searching,
//             buying, and managing properties effortless through smart,
//             app-driven solutions.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}>
//             QUICK LINKS
//           </h3>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {["Home", "About", "Why Us", "FAQ", "Contact"].map((link, i) => (
//               <li key={i} style={{ marginBottom: "10px" }}>
//                 <a
//                   href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
//                   style={{
//                     textDecoration: "none",
//                     color: "#333",
//                     fontSize: "14px",
//                     transition: "color 0.3s",
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#d1001f")}
//                   onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}>
//             CONTACT US
//           </h3>
//           <p
//             style={{
//               fontSize: "14px",
//               marginBottom: "10px",
//               display: "flex",
//               alignItems: "flex-start",
//               color: "#555",
//             }}
//           >
//             <FaMapMarkerAlt style={{ marginRight: "10px", color: "#d1001f" }} />{" "}
//             #336/A, 20th Main Road, D Block, Nachanally, JP Nagar, Mysore,
//             Karnataka - 570008
//           </p>
//           <p
//             style={{
//               fontSize: "14px",
//               marginBottom: "10px",
//               display: "flex",
//               alignItems: "center",
//               color: "#555",
//             }}
//           >
//             <FaPhone style={{ marginRight: "10px", color: "#d1001f" }} /> +91
//             73495 79436
//           </p>
//           <p
//             style={{
//               fontSize: "14px",
//               display: "flex",
//               alignItems: "center",
//               color: "#555",
//             }}
//           >
//             <FaEnvelope style={{ marginRight: "10px", color: "#d1001f" }} />{" "}
//             support@30forty.in
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div
//         style={{
//           borderTop: "1px solid #ddd",
//           marginTop: "30px",
//           paddingTop: "15px",
//           textAlign: "center",
//           fontSize: "13px",
//           color: "#555",
//         }}
//       >
//         <div style={{ marginBottom: "8px" }}>
//           <a
//             href="/30forty/terms-and-conditions"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Terms & Conditions
//           </a>
//           |
//           <a
//             href="/30forty/privacy-policy"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Privacy Policy
//           </a>
//           |
//           <a
//             href="/30forty/refund-policy"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Refund Policy
//           </a>
//         </div>
//         <p>© 2025 30FORTY. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default FooterThirtyForty;
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // ✅ smooth scroll
import logo from "../assets/30fortylogo.webp";

const FooterThirtyForty = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fc",
        padding: "50px 20px 20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "40px",
        }}
      >
        {/* ✅ Left Section */}
        <div>
          <img
            src={logo}
            alt="30Forty Logo"
            style={{ height: "80px", marginBottom: "15px" }}
          />
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555" }}>
            30Forty is a modern real estate platform that makes searching,
            buying, and managing properties effortless through smart,
            app-driven solutions.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            QUICK LINKS
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { name: "Home", target: "home" },
              { name: "About", target: "about" },
              { name: "Why Us", target: "whyus" },
              { name: "FAQ", target: "faq" },
              { name: "Contact", target: "contact" },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                <ScrollLink
                  to={item.target}
                  smooth={true}
                  duration={700}
                  offset={-80} // adjust if sticky header overlaps
                  spy={true}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#d1001f")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            CONTACT US
          </h3>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "flex-start",
              color: "#555",
            }}
          >
            <FaMapMarkerAlt style={{ marginRight: "10px", color: "#d1001f" }} />{" "}
           #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
          </p>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              color: "#555",
            }}
          >
            <FaPhone style={{ marginRight: "10px", color: "#d1001f" }} />
           +91 78291 25869
          </p>
          <p
            style={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              color: "#555",
            }}
          >
            <FaEnvelope style={{ marginRight: "10px", color: "#d1001f" }} />{" "}
            support@30forty.in
          </p>
        </div>
      </div>

      {/* ✅ Bottom Section */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "13px",
          color: "#555",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <a
            href="/30forty/terms-and-conditions"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Terms & Conditions
          </a>
          |
          <a
            href="/30forty/privacy-policy"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          |
          <a
            href="/30forty/refund-policy"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Refund Policy
          </a>
        </div>
        <p>© 2025 30FORTY. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterThirtyForty;
