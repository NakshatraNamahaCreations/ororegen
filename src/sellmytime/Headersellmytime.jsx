

// import React from "react";
// import logo from "../assets/sellmytime.png";

// const Headersellmytime = () => {
//   const navItems = [
//     { name: "Home", link: "https://ororegencompanies.in/", external: true },
//     { name: "About Us", link: "#about" },
//     { name: "Why Choose Us", link: "#why-choose-us" },
//     { name: "FAQ", link: "#faq" },
//     { name: "Contact Us", link: "#contact" },
//   ];

//   // Smooth scroll handler
//   const handleSmoothScroll = (e, link) => {
//     if (link.startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(link);
//       if (target) {
//         window.scrollTo({
//           top: target.offsetTop - 90, // adjust for sticky header height
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   return (
//     <header
//       style={{
//         width: "100%",
//         backgroundColor: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "10px 50px",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
//         <img
//           src={logo}
//           alt="SellMyTime Logo"
//           style={{ height: "75px" }}
//           onClick={() => (window.location.href = "https://ororegencompanies.in/")}
//         />
//       </div>

//       {/* Navigation */}
//       <nav>
//         <ul
//           style={{
//             listStyle: "none",
//             display: "flex",
//             margin: 0,
//             padding: 0,
//             gap: "35px",
//           }}
//         >
//           {navItems.map((item, i) => (
//             <li key={i}>
//               {item.external ? (
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     textDecoration: "none",
//                     color: "#000",
//                     fontWeight: "500",
//                     fontSize: "15px",
//                     transition: "color 0.3s",
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")}
//                   onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
//                 >
//                   {item.name}
//                 </a>
//               ) : (
//                 <a
//                   href={item.link}
//                   onClick={(e) => handleSmoothScroll(e, item.link)}
//                   style={{
//                     textDecoration: "none",
//                     color: "#000",
//                     fontWeight: "500",
//                     fontSize: "15px",
//                     transition: "color 0.3s",
//                     cursor: "pointer",
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")}
//                   onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
//                 >
//                   {item.name}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Download Button */}
//       <a
//         href="#download"
//         onClick={(e) => handleSmoothScroll(e, "#download")}
//         style={{
//           backgroundColor: "#ff4500",
//           color: "#fff",
//           padding: "8px 20px",
//           borderRadius: "5px",
//           fontWeight: "600",
//           textDecoration: "none",
//           fontSize: "14px",
//           transition: "background 0.3s",
//           marginRight: "70px",
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e03e00")}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff4500")}
//       >
//         Download the App
//       </a>
//     </header>
//   );
// };

// export default Headersellmytime;
import React, { useState, useEffect } from "react";
import logo from "../assets/sellmytime.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Headersellmytime = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", link: "https://ororegencompanies.in/", external: true },
    { name: "About Us", link: "#about" },
    { name: "Why Choose Us", link: "#why-choose-us" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact Us", link: "#contact" },
  ];

  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className="smt-header">
      {/* 🔸 Logo */}
      <div className="smt-logo" onClick={() => (window.location.href = "https://ororegencompanies.in/")}>
        <img src={logo} alt="SellMyTime Logo" />
      </div>

      {/* 🔸 Desktop Navigation */}
      {!isMobile ? (
        <>
          <nav className="smt-nav">
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    target={item.external ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <a href="#download" onClick={(e) => handleSmoothScroll(e, "#download")} className="smt-btn">
            Download the App
          </a>
        </>
      ) : (
        <>
          {/* 🔸 Mobile Hamburger Icon */}
          <div className="smt-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* 🔸 Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="smt-mobile-menu">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={(e) => handleSmoothScroll(e, item.link)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#download"
                onClick={(e) => handleSmoothScroll(e, "#download")}
                className="smt-btn-mobile"
              >
                Download the App
              </a>
            </div>
          )}
        </>
      )}

      {/* 🔹 CSS Inline Styling */}
      <style>{`
        .smt-header {
          width: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 30px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          font-family: 'Poppins', sans-serif;
        }

        .smt-logo img {
          height: 70px;
          cursor: pointer;
        }

        /* Desktop Nav */
        .smt-nav ul {
          list-style: none;
          display: flex;
          gap: 35px;
          margin: 0;
          padding: 0;
        }
        .smt-nav ul li a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s;
        }
        .smt-nav ul li a:hover {
          color: #ff4500;
        }

        .smt-btn {
          background-color: #ff4500;
          color: #fff;
          padding: 8px 20px;
          border-radius: 5px;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          transition: background 0.3s;
          margin-right: 40px;
        }
        .smt-btn:hover {
          background-color: #e03e00;
        }

        /* 🔸 Mobile */
        .smt-menu-icon {
          font-size: 26px;
          color: #000;
          cursor: pointer;
          z-index: 1001;
        }

        .smt-mobile-menu {
          position: absolute;
          top: 85px;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          padding: 25px 20px 30px;
          animation: slideDown 0.3s ease;
        }

        .smt-mobile-menu a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s;
        }
        .smt-mobile-menu a:hover {
          color: #ff4500;
        }

        .smt-btn-mobile {
          background: #ff4500;
          color: #fff;
          padding: 10px 25px;
          border-radius: 6px;
          font-weight: 600;
          text-align: center;
          display: inline-block;
          margin-top: 10px;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ✅ Responsive */
        @media (max-width: 900px) {
          .smt-btn {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .smt-header {
            padding: 10px 20px;
          }
          .smt-logo img {
            height: 60px;
          }
          .smt-mobile-menu a {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .smt-logo img {
            height: 55px;
          }
          .smt-mobile-menu {
            gap: 15px;
          }
          .smt-btn-mobile {
            font-size: 14px;
          }
        }
      `}</style>
    </header>
  );
};

export default Headersellmytime;
