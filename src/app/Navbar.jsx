

// import React, { useEffect, useState } from "react";
// import logo from "../assets/stay.png"; // ensure path is correct

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll handler for internal sections
//   const handleScrollToSection = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <nav
//       style={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "15px 60px",
//         backgroundColor: scrolled ? "#fff" : "transparent",
//         boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         transition: "background-color 0.3s ease, box-shadow 0.3s ease",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", marginTop: -50 }}>
//         <img
//           src={logo}
//           alt="Logo"
//           style={{
//             height: "120px",
//             objectFit: "contain",
//           }}
//         />
//       </div>

//       {/* Menu */}
//       <ul
//         style={{
//           listStyle: "none",
//           display: "flex",
//           gap: "35px",
//           padding: 0,
//           position: "absolute",
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       >
//         {[
//           { label: "Home", href: "https://ororegencompanies.in/", external: true },
//           { label: "About Us", id: "about" },
//           { label: "Why Choose Us", id: "whychooseus" },
//           { label: "FAQ", id: "faq" },
//           { label: "Contact Us", id: "contact" },
//         ].map((item, index) => (
//           <li key={index}>
//             {item.external ? (
//               <a
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   textDecoration: "none",
//                   color: "#111",
//                   fontSize: "17px",
//                   fontWeight: "700",
//                   transition: "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
//                 onMouseLeave={(e) => (e.target.style.color = "#111")}
//               >
//                 {item.label}
//               </a>
//             ) : (
//               <a
//                 href={`#${item.id}`}
//                 onClick={(e) => handleScrollToSection(e, item.id)}
//                 style={{
//                   textDecoration: "none",
//                   color: "#111",
//                   fontSize: "17px",
//                   fontWeight: "700",
//                   transition: "color 0.2s ease",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
//                 onMouseLeave={(e) => (e.target.style.color = "#111")}
//               >
//                 {item.label}
//               </a>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Button */}
//       <div>
//         <button
//           onClick={() =>
//             window.open(
//               "https://play.google.com/store/apps/details?id=com.yourapp",
//               "_blank"
//             )
//           }
//           style={{
//             padding: "12px 24px",
//             background: "#000",
//             color: "#fff",
//             fontSize: "16px",
//             fontWeight: "600",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             marginRight: 100,
//             transition: "background 0.3s ease",
//           }}
//           onMouseEnter={(e) => (e.target.style.background = "#FF385C")}
//           onMouseLeave={(e) => (e.target.style.background = "#000")}
//         >
//           Download the App
//         </button>
//       </div>
//     </nav>
//   );
// }
import React, { useEffect, useState } from "react";
import logo from "../assets/stay.png"; // ensure path is correct

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for sections
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 60px",
        backgroundColor: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", marginTop: -50 }}>
        <img src={logo} alt="Logo" style={{ height: "120px", objectFit: "contain" }} />
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "35px",
          padding: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Home → External */}
        <li>
          <a
            href="https://ororegencompanies.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.color = "#111")}
          >
            Home
          </a>
        </li>

        {/* Internal links */}
        <li>
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "about")}
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.color = "#111")}
          >
            About Us
          </a>
        </li>

        <li>
          <a
            href="#whychooseus"
            onClick={(e) => handleScrollToSection(e, "whychooseus")}
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.color = "#111")}
          >
            Why Choose Us
          </a>
        </li>

        <li>
          <a
            href="#faq"
            onClick={(e) => handleScrollToSection(e, "faq")}
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.color = "#111")}
          >
            FAQ
          </a>
        </li>

        <li>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#111",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.color = "#111")}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Download Button */}
      <div>
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.yourapp",
              "_blank"
            )
          }
          style={{
            padding: "12px 24px",
            background: "#000",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: 100,
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#FF385C")}
          onMouseLeave={(e) => (e.target.style.background = "#000")}
        >
          Download the App
        </button>
      </div>
    </nav>
  );
}
