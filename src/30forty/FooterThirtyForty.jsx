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
//             "linear-gradient(90deg, #5DBB1F 0%, #83E011 40%, #FEFD03 100%)",
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
//                     e.currentTarget.style.color = "#5DBB1F";
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
//                     "linear-gradient(135deg, #5DBB1F, #FEFD03)",
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
//                     "linear-gradient(135deg, #5DBB1F, #FEFD03)",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#fff",
//                 }}
//               >
//                 <FaPhone size={14} />
//               </span>
//               <a
//                 href="tel:+916366921746"
//                 style={{ color: "#333", textDecoration: "none" }}
//               >
//                 +91 63669 21746
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
//                     "linear-gradient(135deg, #5DBB1F, #FEFD03)",
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
const logo = "/30FortyLogo.png";

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

const footerStyles = `
.tff {
  position: relative; overflow: hidden; color: rgba(255,255,255,.78);
  font-family: 'Poppins', sans-serif;
  background:
    radial-gradient(50% 70% at 100% 0%, rgba(93,187,31,.22), transparent 60%),
    radial-gradient(40% 60% at 0% 100%, rgba(167,224,12,.12), transparent 60%),
    linear-gradient(180deg, #0E1D08 0%, #0A1606 100%);
}
.tff::before {
  content: ""; position: absolute; left: 0; right: 0; top: 0; height: 4px;
  background: linear-gradient(90deg, #5DBB1F 0%, #83E011 40%, #FEFD03 100%);
}
.tff-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.6fr 1fr 1.3fr; gap: 48px; align-items: start; position: relative; }
.tff-col { min-width: 0; }
.tff-logo { height: 96px; object-fit: contain; border-radius: 22px; box-shadow: 0 18px 40px -16px rgba(131,224,17,.55); }
.tff-about { font-size: 15px; line-height: 1.8; color: rgba(255,255,255,.72); margin: 20px 0 0; max-width: 420px; }
.tff-h {
  font-size: 13px; font-weight: 700; letter-spacing: .14em; color: #fff; margin: 6px 0 20px;
  display: inline-flex; flex-direction: column; gap: 10px;
}
.tff-h::after { content: ""; width: 36px; height: 3px; border-radius: 3px; background: linear-gradient(90deg, #5DBB1F, #FEFD03); }
.tff-links { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
.tff-link {
  display: inline-flex; align-items: center; gap: 10px; color: rgba(255,255,255,.75); font-size: 15px;
  cursor: pointer; padding: 6px 12px 6px 0; border-radius: 10px; text-decoration: none;
  transition: color .25s ease, transform .25s ease;
}
.tff-link::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: rgba(167,224,12,.5); transition: background .25s ease, box-shadow .25s ease; }
.tff-link:hover { color: #E8FFC2; transform: translateX(4px); }
.tff-link:hover::before { background: #FEFD03; box-shadow: 0 0 0 4px rgba(254,253,3,.15); }
.tff-contact { display: grid; gap: 14px; }
.tff-row { display: flex; gap: 14px; align-items: flex-start; font-size: 15px; line-height: 1.6; margin: 0; color: rgba(255,255,255,.75); }
.tff-ico {
  width: 38px; height: 38px; flex: 0 0 38px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
  color: #12260A; background: linear-gradient(135deg, #43E01A, #88E011 55%, #A7E00C);
  box-shadow: 0 8px 18px -8px rgba(131,224,17,.7);
}
.tff-row a { color: #fff; text-decoration: none; transition: color .25s ease; align-self: center; }
.tff-row a:hover { color: #FEFD03; }
.tff-row .tff-addr { padding-top: 7px; }
.tff-bottom {
  max-width: 1200px; margin: 48px auto 0; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.1);
  display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; font-size: 13.5px; position: relative;
}
.tff-legal { display: flex; flex-wrap: wrap; gap: 6px; }
.tff-legal a {
  color: rgba(255,255,255,.75); text-decoration: none; padding: 6px 12px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12); transition: all .25s ease;
}
.tff-legal a:hover { color: #12260A; background: linear-gradient(90deg, #5DBB1F, #A7E00C); border-color: transparent; }
.tff-copy { margin: 0; color: rgba(255,255,255,.6); }
.tff-copy strong { color: #fff; }
@media (max-width: 768px) {
  .tff-grid { grid-template-columns: 1fr; gap: 16px; }
  .tff-col {
    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 20px;
    padding: 22px 18px; text-align: center;
  }
  .tff-about { margin: 16px auto 0; font-size: 14.5px; }
  .tff-logo { height: 84px; }
  .tff-links { justify-items: center; }
  .tff-link { padding-right: 0; }
  .tff-contact { justify-items: center; }
  .tff-row { flex-direction: column; align-items: center; gap: 8px; text-align: center; }
  .tff-row .tff-addr { padding-top: 0; }
  .tff-row a { align-self: auto; }
  .tff-bottom { flex-direction: column; text-align: center; margin-top: 26px; }
  .tff-legal { justify-content: center; }
}
@media (prefers-reduced-motion: reduce) {
  .tff *, .tff *::before { transition: none !important; }
}
`;

/* ---------- Component ---------- */
const FooterThirtyForty = () => {
  const isMobile = useIsMobile(768);

  return (
    <footer
      className="tff"
      style={{ padding: isMobile ? "44px 16px 24px" : "72px 40px 30px" }}
    >
      <style>{footerStyles}</style>

      {/* Content Grid */}
      <div className="tff-grid">
        {/* ---------- Left Section ---------- */}
        <div className="tff-col">
          <img src={logo} alt="Thirty Forty Logo" className="tff-logo" />
          <p className="tff-about">
            Thirty Forty is a modern real estate platform that makes searching,
            buying, and managing properties effortless through smart,
            app-driven solutions.
          </p>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div className="tff-col">
          <h3 className="tff-h">QUICK LINKS</h3>
          <ul className="tff-links">
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
                  className="tff-link"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Contact Info ---------- */}
        <div className="tff-col">
          <h3 className="tff-h">CONTACT US</h3>

          <div className="tff-contact">
            {/* Address */}
            <p className="tff-row">
              <span className="tff-ico">
                <FaMapMarkerAlt size={15} />
              </span>
              <span className="tff-addr">
                #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
              </span>
            </p>

            {/* Phone */}
            <p className="tff-row">
              <span className="tff-ico">
                <FaPhone size={14} />
              </span>
              <a href="tel:+916366921746">+91 63669 21746</a>
            </p>

            {/* Email */}
            <p className="tff-row">
              <span className="tff-ico">
                <FaEnvelope size={14} />
              </span>
              <a href="mailto:support@30forty.in">support@30forty.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="tff-bottom">
        <p className="tff-copy">
          © 2025 <strong>THIRTY FORTY. </strong> This App is managed by Oro Regen Companies. All Rights Reserved.
        </p>
        <div className="tff-legal">
          <a href="/30forty/terms-and-conditions">Terms & Conditions</a>
          <a href="/30forty/privacy-policy">Privacy Policy</a>
          <a href="/30forty/refund-policy">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterThirtyForty;
