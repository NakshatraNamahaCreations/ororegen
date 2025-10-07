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
//               perfect getaway with StayFindr.
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
//              +91 78291 25869
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
//                 color: "#FF385C",
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
//                 color: "#FF385C",
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
//                 color: "#FF385C",
//                 textDecoration: "none",
//                 fontSize: "14px",
//                 fontWeight: 600,
//               }}
//             >
//               Terms & Conditions
//             </a>
//           </div>

//           © {new Date().getFullYear()} StayFindr. All Rights Reserved.
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
} from "react-icons/fa";
import logo from "../assets/stay.png";
import footerBg from "../assets/footer.jpeg";

function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= bp : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= bp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return isMobile;
}

const FooterStay = () => {
  const isMobile = useIsMobile(768);

  const wrap = (style) => ({
    ...style,
    // shared small-screen tweaks
    ...(isMobile
      ? {
          textAlign: "center",
        }
      : {}),
  });

  return (
    <footer
      style={wrap({
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        // remove negative margins that caused horizontal scrolling on phones
        margin: 0,
      })}
    >
      {/* Top Arc (with real gradient definition) */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 2,
        }}
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "60px" }}
        >
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFB4D6" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C300,100 900,-100 1200,0 L1200,120 L0,120 Z"
            fill="url(#footerGradient)"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div
        style={wrap({
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#000",
          padding: isMobile ? "70px 18px 28px" : "100px 60px 50px",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        })}
      >
        {/* Soft overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9))",
            zIndex: 0,
          }}
        />

        <div
          style={wrap({
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 22 : 40,
            position: "relative",
            zIndex: 1,
            alignItems: "start",
          })}
        >
          {/* Brand / About */}
          <div>
            <img
              src={logo}
              alt="StayFindr"
              style={{
                height: isMobile ? 80 : 120,
                objectFit: "contain",
                marginBottom: isMobile ? 8 : 12,
              }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#111",
                maxWidth: isMobile ? "100%" : 420,
                margin: isMobile ? "6px auto 0" : "6px 0 0",
              }}
            >
              Discover unique stays and unforgettable experiences. Book your
              perfect getaway with StayFindr.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 16,
                justifyContent: isMobile ? "center" : "flex-start",
                flexWrap: "wrap",
              }}
            >
              {[FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label="Social link"
                    style={{
                      color: "#111",
                      fontSize: 18,
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.06)",
                      transition: "transform .2s ease, background .2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#FF385C";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.color = "#111";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                marginBottom: 12,
                fontWeight: 800,
                fontSize: 18,
                display: "inline-block",
                paddingBottom: 4,
                borderBottom: "2px solid #FF385C",
                color: "#111",
              }}
            >
              QUICK LINKS
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: isMobile ? "6px auto 0" : "6px 0 0",
                fontSize: 15,
                color: "#111",
                display: "grid",
                gap: 8,
                justifyContent: isMobile ? "center" : "start",
              }}
            >
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Why Choose Us", href: "#whychooseus" },
                { label: "FAQ's", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      color: "#111",
                      textDecoration: "none",
                      fontWeight: 600,
                      padding: "6px 8px",
                      display: "inline-block",
                      borderRadius: 8,
                      transition: "background .2s ease, color .2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(255,56,92,0.12)";
                      e.currentTarget.style.color = "#FF385C";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#111";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                marginBottom: 12,
                fontWeight: 900,
                fontSize: 19,
                display: "inline-block",
                paddingBottom: 4,
                borderBottom: "2px solid #FF385C",
                color: "#111",
              }}
            >
              CONTACT US
            </h3>

            <a
              href="tel:+917829125869"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 8,
                color: "#111",
                textDecoration: "none",
                fontWeight: 600,
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <FaPhoneAlt aria-hidden />
              +91 78291 25869
            </a>

            <a
              href="mailto:support@stayfindr.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 10,
                color: "#111",
                textDecoration: "none",
                fontWeight: 600,
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <FaEnvelope aria-hidden />
              support@stayfindr.com
            </a>

            <p
              style={{
                marginTop: 12,
                color: "#111",
                fontWeight: 600,
                lineHeight: 1.6,
              }}
            >
              #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE,
              <br />
              SRINAGARA, MYSORE-570008
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={wrap({
            marginTop: isMobile ? 24 : 40,
            paddingTop: 16,
            borderTop: "1px solid rgba(0,0,0,0.18)",
            fontSize: 14,
            position: "relative",
            zIndex: 1,
            color: "#111",
          })}
        >
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "center",
              marginBottom: 10,
            }}
          >
            <a
              href="/privacy-policy"
              style={{
                color: "#FF385C",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a
              href="/refund-policy"
              style={{
                color: "#FF385C",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Refund Policy
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a
              href="/terms-and-conditions"
              style={{
                color: "#FF385C",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Terms & Conditions
            </a>
          </div>

          © {new Date().getFullYear()} StayFindr. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterStay;
