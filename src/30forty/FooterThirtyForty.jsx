// import React, { useEffect, useState } from "react";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll"; // smooth scroll
// import logo from "../assets/30fortylogo.webp";

// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
//   );
//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [breakpoint]);
//   return isMobile;
// }

// const FooterThirtyForty = () => {
//   const isMobile = useIsMobile(768);

//   const cardify = (extra = {}) =>
//     isMobile
//       ? {
//           background: "#fff",
//           borderRadius: 12,
//           boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//           padding: 16,
//           ...extra,
//         }
//       : extra;

//   return (
//     <footer
//       style={{
//         backgroundColor: "#f8f9fc",
//         padding: isMobile ? "40px 16px 18px" : "50px 20px 20px",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#333",
//       }}
//     >
//       {/* Accent line */}
//       <div
//         style={{
//           height: 4,
//           width: "100%",
//           background:
//             "linear-gradient(90deg, #ff4d4d 0%, #d1001f 40%, #ff6a6a 100%)",
//           borderRadius: 4,
//           marginBottom: isMobile ? 18 : 24,
//           opacity: 0.9,
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
//           gap: isMobile ? 16 : 40,
//           alignItems: "start",
//         }}
//       >
//         {/* ✅ Left Section */}
//         <div style={cardify()}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 12,
//               marginBottom: 10,
//               justifyContent: isMobile ? "center" : "flex-start",
//             }}
//           >
//             <img
//               src={logo}
//               alt="30Forty Logo"
//               style={{
//                 height: isMobile ? 90 : 130,
//                 objectFit: "contain",
//                 display: "block",
//               }}
//             />
//           </div>
//           <p
//             style={{
//               fontSize: 14,
//               lineHeight: 1.7,
//               color: "#555",
//               textAlign: isMobile ? "center" : "left",
//               margin: 0,
//             }}
//           >
//             30Forty is a modern real estate platform that makes searching,
//             buying, and managing properties effortless through smart,
//             app-driven solutions.
//           </p>
//         </div>

//         {/* ✅ Quick Links */}
//         <div style={cardify()}>
//           <h3
//             style={{
//               fontSize: 16,
//               fontWeight: 700,
//               marginBottom: 12,
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             QUICK LINKS
//           </h3>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "grid",
//               gap: isMobile ? 10 : 8,
//               justifyItems: isMobile ? "center" : "start",
//             }}
//           >
//             {[
//               { name: "Home", target: "home" },
//               { name: "About", target: "about" },
//               { name: "Why Us", target: "whyus" },
//               { name: "FAQ", target: "faq" },
//               { name: "Contact", target: "contact" },
//             ].map((item, i) => (
//               <li key={i}>
//                 <ScrollLink
//                   to={item.target}
//                   smooth={true}
//                   duration={700}
//                   offset={-80}
//                   spy={true}
//                   style={{
//                     textDecoration: "none",
//                     color: "#333",
//                     fontSize: 14,
//                     cursor: "pointer",
//                     padding: "6px 10px",
//                     borderRadius: 8,
//                     display: "inline-block",
//                     transition: "all .25s ease",
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.color = "#d1001f";
//                     e.currentTarget.style.background = "rgba(209,0,31,0.06)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.color = "#333";
//                     e.currentTarget.style.background = "transparent";
//                   }}
//                 >
//                   {item.name}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ Contact Info */}
//         <div style={cardify()}>
//           <h3
//             style={{
//               fontSize: 16,
//               fontWeight: 700,
//               marginBottom: 12,
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             CONTACT US
//           </h3>

//           <div
//             style={{
//               display: "grid",
//               gap: 10,
//               justifyItems: isMobile ? "center" : "start",
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: 14,
//                 margin: 0,
//                 color: "#555",
//                 display: "flex",
//                 gap: 10,
//                 alignItems: "flex-start",
//                 justifyContent: isMobile ? "center" : "flex-start",
//                 maxWidth: 360,
//               }}
//             >
//               <span
//                 style={{
//                   width: 28,
//                   height: 28,
//                   borderRadius: 8,
//                   background:
//                     "linear-gradient(135deg, #ff4d4d, #d1001f)",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                   flex: "0 0 28px",
//                 }}
//               >
//                 <FaMapMarkerAlt size={14} />
//               </span>
//               #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
//             </p>

//             <p
//               style={{
//                 fontSize: 14,
//                 margin: 0,
//                 color: "#555",
//                 display: "flex",
//                 gap: 10,
//                 alignItems: "center",
//                 justifyContent: isMobile ? "center" : "flex-start",
//               }}
//             >
//               <span
//                 style={{
//                   width: 28,
//                   height: 28,
//                   borderRadius: 8,
//                   background:
//                     "linear-gradient(135deg, #ff4d4d, #d1001f)",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                 }}
//               >
//                 <FaPhone size={14} />
//               </span>
//               <a
//                 href="tel:+917829125869"
//                 style={{ color: "#333", textDecoration: "none" }}
//               >
//                 +91 78291 25869
//               </a>
//             </p>

//             <p
//               style={{
//                 fontSize: 14,
//                 margin: 0,
//                 color: "#555",
//                 display: "flex",
//                 gap: 10,
//                 alignItems: "center",
//                 justifyContent: isMobile ? "center" : "flex-start",
//               }}
//             >
//               <span
//                 style={{
//                   width: 28,
//                   height: 28,
//                   borderRadius: 8,
//                   background:
//                     "linear-gradient(135deg, #ff4d4d, #d1001f)",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                 }}
//               >
//                 <FaEnvelope size={14} />
//               </span>
//               <a
//                 href="mailto:support@30forty.in"
//                 style={{ color: "#333", textDecoration: "none" }}
//               >
//                 support@30forty.in
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Bottom Section */}
//       <div
//         style={{
//           borderTop: "1px solid #ddd",
//           marginTop: isMobile ? 22 : 30,
//           paddingTop: 14,
//           textAlign: "center",
//           fontSize: 13,
//           color: "#555",
//         }}
//       >
//         <div style={{ marginBottom: 8 }}>
//           <a
//             href="/30forty/terms-and-conditions"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Terms & Conditions
//           </a>
//           <span style={{ opacity: 0.5 }}> | </span>
//           <a
//             href="/30forty/privacy-policy"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Privacy Policy
//           </a>
//         </div>
//         <div style={{ marginBottom: 8 }}>
//           <a
//             href="/30forty/refund-policy"
//             style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
//           >
//             Refund Policy
//           </a>
//         </div>
//         <p style={{ margin: 0 }}>© 2025 30FORTY. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default FooterThirtyForty;
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/30fortylogo.webp";

/* ---------- Responsive Hook ---------- */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

/* ---------- Component ---------- */
const FooterThirtyForty = () => {
  const isMobile = useIsMobile(768);

  const cardify = (extra = {}) =>
    isMobile
      ? {
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          padding: "20px 18px",
          textAlign: "center",
          ...extra,
        }
      : extra;

  return (
    <footer
      style={{
        backgroundColor: "#f8f9fc",
        padding: isMobile ? "40px 18px 20px" : "60px 20px 30px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        overflow: "hidden",
      }}
    >
      {/* Accent line */}
      <div
        style={{
          height: 4,
          width: "100%",
          background:
            "linear-gradient(90deg, #ff4d4d 0%, #d1001f 40%, #ff6a6a 100%)",
          borderRadius: 4,
          marginBottom: isMobile ? 24 : 30,
          opacity: 0.9,
        }}
      />

      {/* Content Grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
          gap: isMobile ? 24 : 40,
          alignItems: "start",
        }}
      >
        {/* ---------- Left Section ---------- */}
        <div style={cardify()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: 14,
            }}
          >
            <img
              src={logo}
              alt="30Forty Logo"
              style={{
                height: isMobile ? 90 : 130,
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "#555",
              textAlign: isMobile ? "center" : "left",
              margin: 0,
              maxWidth: 420,
            }}
          >
            30Forty is a modern real estate platform that makes searching,
            buying, and managing properties effortless through smart,
            app-driven solutions.
          </p>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div style={cardify()}>
          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 14,
              textAlign: isMobile ? "center" : "left",
              color: "#000",
            }}
          >
            QUICK LINKS
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: isMobile ? 12 : 10,
              justifyItems: isMobile ? "center" : "start",
            }}
          >
            {[
              { name: "Home", target: "home" },
              { name: "About", target: "about" },
              { name: "Why Us", target: "whyus" },
              { name: "FAQ", target: "faq" },
              { name: "Contact", target: "contact" },
            ].map((item, i) => (
              <li key={i}>
                <ScrollLink
                  to={item.target}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: 15,
                    cursor: "pointer",
                    padding: "6px 10px",
                    borderRadius: 8,
                    display: "inline-block",
                    transition: "all .25s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#d1001f";
                    e.currentTarget.style.background = "rgba(209,0,31,0.06)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Contact Info ---------- */}
        <div style={cardify()}>
          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 14,
              textAlign: isMobile ? "center" : "left",
              color: "#000",
            }}
          >
            CONTACT US
          </h3>

          <div
            style={{
              display: "grid",
              gap: 14,
              justifyItems: isMobile ? "center" : "start",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {/* Address */}
            <p
              style={{
                fontSize: 15,
                margin: 0,
                color: "#555",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                justifyContent: isMobile ? "center" : "flex-start",
                maxWidth: 360,
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #ff4d4d, #d1001f)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flex: "0 0 30px",
                }}
              >
                <FaMapMarkerAlt size={14} />
              </span>
              #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
            </p>

            {/* Phone */}
            <p
              style={{
                fontSize: 15,
                margin: 0,
                color: "#555",
                display: "flex",
                gap: 12,
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #ff4d4d, #d1001f)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <FaPhone size={14} />
              </span>
              <a
                href="tel:+917829125869"
                style={{
                  color: "#333",
                  textDecoration: "none",
                  transition: "color .25s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#d1001f")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
              >
                +91 78291 25869
              </a>
            </p>

            {/* Email */}
            <p
              style={{
                fontSize: 15,
                margin: 0,
                color: "#555",
                display: "flex",
                gap: 12,
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #ff4d4d, #d1001f)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <FaEnvelope size={14} />
              </span>
              <a
                href="mailto:support@30forty.in"
                style={{
                  color: "#333",
                  textDecoration: "none",
                  transition: "color .25s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#d1001f")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
              >
                support@30forty.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: isMobile ? 28 : 40,
          paddingTop: 16,
          textAlign: "center",
          fontSize: 14,
          color: "#555",
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <a
            href="/30forty/terms-and-conditions"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Terms & Conditions
          </a>
          <span style={{ opacity: 0.5 }}> | </span>
          <a
            href="/30forty/privacy-policy"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
        <div style={{ marginBottom: 8 }}>
          <a
            href="/30forty/refund-policy"
            style={{ margin: "0 10px", color: "#333", textDecoration: "none" }}
          >
            Refund Policy
          </a>
        </div>
        <p style={{ margin: 0, fontSize: 13 }}>
          © 2025 <strong>30FORTY.  </strong> This App is managed by Oro Regen Companies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterThirtyForty;
