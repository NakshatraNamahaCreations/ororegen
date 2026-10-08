

// // import React, { useState, useEffect } from "react";
// // const logo = "/SellMyTimeLogo.png";
// // import { FaBars, FaTimes } from "react-icons/fa";

// // const Headersellmytime = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 900);
// //       if (window.innerWidth >= 900) setMenuOpen(false);
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const navItems = [
// //     { name: "Home", link: "https://ororegencompanies.in/", external: true },
// //     { name: "About Us", link: "#about" },
// //     { name: "Why Choose Us", link: "#why-choose-us" },
// //     { name: "FAQ", link: "#faq" },
// //     { name: "Contact Us", link: "#contact" },
// //   ];

// //   const handleSmoothScroll = (e, link) => {
// //     if (link.startsWith("#")) {
// //       e.preventDefault();
// //       const target = document.querySelector(link);
// //       if (target) {
// //         window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
// //         setMenuOpen(false);
// //       }
// //     }
// //   };

// //   return (
// //     <header className="smt-header">
// //       {/* 🔸 Logo */}
// //       <div className="smt-logo" onClick={() => (window.location.href = "https://ororegencompanies.in/")}>
// //         <img src={logo} alt="SellMyTime Logo" />
// //       </div>

// //       {/* 🔸 Desktop Navigation */}
// //       {!isMobile ? (
// //         <>
// //           <nav className="smt-nav">
// //             <ul>
// //               {navItems.map((item, i) => (
// //                 <li key={i}>
// //                   <a
// //                     href={item.link}
// //                     target={item.external ? "_blank" : "_self"}
// //                     rel="noopener noreferrer"
// //                     onClick={(e) => handleSmoothScroll(e, item.link)}
// //                   >
// //                     {item.name}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>

// //           {/* CTA Button */}
// //           <a href="#download" onClick={(e) => handleSmoothScroll(e, "#download")} className="smt-btn">
// //             Download the App
// //           </a>
// //         </>
// //       ) : (
// //         <>
// //           {/* 🔸 Mobile Hamburger Icon */}
// //           <div className="smt-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
// //             {menuOpen ? <FaTimes /> : <FaBars />}
// //           </div>

// //           {/* 🔸 Mobile Menu Dropdown */}
// //           {menuOpen && (
// //             <div className="smt-mobile-menu">
// //               {navItems.map((item, i) => (
// //                 <a
// //                   key={i}
// //                   href={item.link}
// //                   target={item.external ? "_blank" : "_self"}
// //                   rel="noopener noreferrer"
// //                   onClick={(e) => handleSmoothScroll(e, item.link)}
// //                 >
// //                   {item.name}
// //                 </a>
// //               ))}
// //               <a
// //                 href="#download"
// //                 onClick={(e) => handleSmoothScroll(e, "#download")}
// //                 className="smt-btn-mobile"
// //               >
// //                 Download the App
// //               </a>
// //             </div>
// //           )}
// //         </>
// //       )}

// //       {/* 🔹 CSS Inline Styling */}
// //       <style>{`
// //         .smt-header {
// //           width: 100%;
// //           background: #fff;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           padding: 12px 30px;
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           z-index: 9999;
// //           box-shadow: 0 2px 6px rgba(0,0,0,0.08);
// //           font-family: 'Poppins', sans-serif;
// //         }

// //         .smt-logo img {
// //           height: 70px;
// //           cursor: pointer;
// //         }

// //         /* Desktop Nav */
// //         .smt-nav ul {
// //           list-style: none;
// //           display: flex;
// //           gap: 35px;
// //           margin: 0;
// //           padding: 0;
// //         }
// //         .smt-nav ul li a {
// //           text-decoration: none;
// //           color: #000;
// //           font-weight: 500;
// //           font-size: 15px;
// //           transition: color 0.3s;
// //         }
// //         .smt-nav ul li a:hover {
// //           color: #24428B;
// //         }

// //         .smt-btn {
// //           background-color: #24428B;
// //           color: #fff;
// //           padding: 8px 20px;
// //           border-radius: 5px;
// //           font-weight: 600;
// //           text-decoration: none;
// //           font-size: 14px;
// //           transition: background 0.3s;
// //           margin-right: 40px;
// //         }
// //         .smt-btn:hover {
// //           background-color: #24428B;
// //         }

// //         /* 🔸 Mobile */
// //         .smt-menu-icon {
// //           font-size: 26px;
// //           color: #000;
// //           cursor: pointer;
// //           z-index: 1001;
// //         }

// //         .smt-mobile-menu {
// //           position: absolute;
// //           top: 85px;
// //           left: 0;
// //           width: 100%;
// //           background: #fff;
// //           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 18px;
// //           padding: 25px 20px 30px;
// //           animation: slideDown 0.3s ease;
// //         }

// //         .smt-mobile-menu a {
// //           text-decoration: none;
// //           color: #000;
// //           font-weight: 500;
// //           font-size: 16px;
// //           transition: color 0.3s;
// //         }
// //         .smt-mobile-menu a:hover {
// //           color: #24428B;
// //         }

// //         .smt-btn-mobile {
// //           background: #24428B;
// //           color: #fff;
// //           padding: 10px 25px;
// //           border-radius: 6px;
// //           font-weight: 600;
// //           text-align: center;
// //           display: inline-block;
// //           margin-top: 10px;
// //         }

// //         @keyframes slideDown {
// //           from { opacity: 0; transform: translateY(-10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         /* ✅ Responsive */
// //         @media (max-width: 900px) {
// //           .smt-btn {
// //             display: none;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .smt-header {
// //             padding: 10px 20px;
// //           }
// //           .smt-logo img {
// //             height: 60px;
// //           }
// //           .smt-mobile-menu a {
// //             font-size: 15px;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .smt-logo img {
// //             height: 55px;
// //           }
// //           .smt-mobile-menu {
// //             gap: 15px;
// //           }
// //           .smt-btn-mobile {
// //             font-size: 14px;
// //           }
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default Headersellmytime;
// import React, { useState, useEffect, useRef } from "react";
// const logo = "/SellMyTimeLogo.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Headersellmytime = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth < 900 : false
//   );
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 900;
//       setIsMobile(mobile);
//       if (!mobile) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (!isMobile) return;
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen, isMobile]);

//   const navItems = [
//     { name: "Home", link: "https://ororegencompanies.in/", external: true },
//     { name: "About Us", link: "#about" },
//     { name: "Why Choose Us", link: "#why-choose-us" },
//     { name: "FAQ", link: "#faq" },
//     { name: "Contact Us", link: "#contact" },
//   ];

//   const handleSmoothScroll = (e, link) => {
//     if (link.startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(link);
//       if (target && headerRef.current) {
//         const headerH = headerRef.current.offsetHeight || 80;
//         const top = target.getBoundingClientRect().top + window.scrollY - headerH;
//         window.scrollTo({ top, behavior: "smooth" });
//         setMenuOpen(false);
//       }
//     }
//   };

//   return (
//     <header className="smt-header" ref={headerRef}>
//       {/* Logo */}
//       <div
//         className="smt-logo"
//         onClick={() => (window.location.href = "https://ororegencompanies.in/")}
//         aria-label="Go to homepage"
//       >
//         <img src={logo} alt="NetworkX Logo" />
//       </div>

//       {/* Desktop Nav (unchanged) */}
//       {!isMobile ? (
//         <>
//           <nav className="smt-nav" aria-label="Primary">
//             <ul>
//               {navItems.map((item, i) => (
//                 <li key={i}>
//                   <a
//                     href={item.link}
//                     target={item.external ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                     onClick={(e) => handleSmoothScroll(e, item.link)}
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <a
//             href="#download"
//             onClick={(e) => handleSmoothScroll(e, "#download")}
//             className="smt-btn"
//           >
//             Download the App
//           </a>
//         </>
//       ) : (
//         <>
//           {/* Mobile hamburger */}
//           <button
//             className="smt-menu-icon"
//             onClick={() => setMenuOpen((v) => !v)}
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//             aria-controls="smt-mobile-menu"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Overlay */}
//           {menuOpen && (
//             <div
//               className="smt-overlay"
//               onClick={() => setMenuOpen(false)}
//               aria-hidden="true"
//             />
//           )}

//           {/* Mobile Menu */}
//           <nav
//             id="smt-mobile-menu"
//             className={`smt-mobile-menu ${menuOpen ? "open" : ""}`}
//             aria-label="Mobile"
//           >
//             <div className="smt-mobile-inner">
//               {navItems.map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.link}
//                   target={item.external ? "_blank" : "_self"}
//                   rel="noopener noreferrer"
//                   onClick={(e) => handleSmoothScroll(e, item.link)}
//                   className="smt-mobile-link"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <div className="smt-mobile-divider" />
//               <a
//                 href="#download"
//                 onClick={(e) => handleSmoothScroll(e, "#download")}
//                 className="smt-btn-mobile"
//               >
//                 Download the App
//               </a>
//             </div>
//           </nav>
//         </>
//       )}

//       {/* Styles */}
//       <style>{`
//         .smt-header {
//           --shadow: 0 2px 6px rgba(0,0,0,0.08);
//           width: 100%;
//           background: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 12px 30px;
//           position: fixed;
//           top: 0;
//           left: 0;
//           z-index: 9999;
//           box-shadow: var(--shadow);
//           font-family: 'Poppins', sans-serif;
//           transition: background .25s ease, box-shadow .25s ease;
//         }

//         .smt-logo img {
//           height: 70px;
//           cursor: pointer;
//           display: block;
//         }

//         /* Desktop Nav (unchanged) */
//         .smt-nav ul {
//           list-style: none;
//           display: flex;
//           gap: 35px;
//           margin: 0;
//           padding: 0;
//         }
//         .smt-nav ul li a {
//           text-decoration: none;
//           color: #000;
//           font-weight: 500;
//           font-size: 15px;
//           transition: color 0.3s;
//         }
//         .smt-nav ul li a:hover {
//           color: #24428B;
//         }

//         .smt-btn {
//           background-color: #24428B;
//           color: #fff;
//           padding: 8px 20px;
//           border-radius: 5px;
//           font-weight: 600;
//           text-decoration: none;
//           font-size: 14px;
//           transition: transform .15s ease, box-shadow .15s ease;
//           margin-right: 40px;
//           box-shadow: 0 8px 16px rgba(36,66,139,.15);
//         }
//         .smt-btn:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 10px 18px rgba(36,66,139,.2);
//         }

//         /* Mobile */
//         .smt-menu-icon {
//           font-size: 26px;
//           color: #000;
//           cursor: pointer;
//           z-index: 1001;
//           background: transparent;
//           border: 0;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 6px;
//           border-radius: 8px;
//           transition: background .2s ease;
//         }
//         .smt-menu-icon:active { background: rgba(0,0,0,.06); }

//         /* Glass header on small screens */
//         @media (max-width: 900px) {
//           .smt-header {
//             background: rgba(255,255,255,0.9);
//             backdrop-filter: saturate(180%) blur(8px);
//             -webkit-backdrop-filter: saturate(180%) blur(8px);
//             border-bottom: 1px solid rgba(0,0,0,0.06);
//           }
//         }

//         .smt-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,.35);
//           z-index: 9998;
//           animation: fadeIn .2s ease forwards;
//         }

//         .smt-mobile-menu {
//           position: absolute;
//           left: 0;
//           width: 100%;
//           top: 82px; /* matches header height */
//           transform: translateY(-12px);
//           opacity: 0;
//           pointer-events: none;
//           transition: transform .25s ease, opacity .25s ease;
//           z-index: 9999;
//         }
//         .smt-mobile-menu.open {
//           transform: translateY(0);
//           opacity: 1;
//           pointer-events: auto;
//         }

//         .smt-mobile-inner {
//           margin: 0 12px;
//           background: linear-gradient(180deg, #ffffff 0%, #f6f8ff 100%);
//           border: 1px solid rgba(0,0,0,0.06);
//           border-radius: 14px;
//           box-shadow: 0 18px 40px rgba(0,0,0,0.12);
//           padding: 18px 16px 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: stretch;
//           gap: 12px;
//           animation: slideDown .25s ease;
//         }

//         .smt-mobile-link {
//           text-decoration: none;
//           color: #111;
//           font-weight: 600;
//           font-size: 16px;
//           padding: 12px 10px;
//           border-radius: 10px;
//           transition: background .2s ease, color .2s ease, transform .05s ease;
//         }
//         .smt-mobile-link:active {
//           transform: scale(.99);
//         }
//         .smt-mobile-link:hover {
//           background: rgba(36,66,139,.08);
//           color: #24428B;
//         }

//         .smt-mobile-divider {
//           height: 1px;
//           background: rgba(0,0,0,.08);
//           margin: 6px 2px 2px;
//         }

//         .smt-btn-mobile {
//           background: linear-gradient(90deg, #24428B 0%, #2e4aa1 100%);
//           color: #fff;
//           padding: 12px 16px;
//           border-radius: 10px;
//           font-weight: 700;
//           text-align: center;
//           text-decoration: none;
//           box-shadow: 0 12px 24px rgba(36,66,139,.25);
//           transition: transform .15s ease, box-shadow .15s ease;
//         }
//         .smt-btn-mobile:active {
//           transform: translateY(1px);
//           box-shadow: 0 8px 18px rgba(36,66,139,.2);
//         }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         /* Responsive tweaks */
//         @media (max-width: 900px) {
//           .smt-btn { display: none; }
//         }
//         @media (max-width: 768px) {
//           .smt-header { padding: 10px 18px; }
//           .smt-logo img { height: 68px; } /* a touch bigger for brand presence */
//           .smt-mobile-menu { top: 76px; }
//         }
//         @media (max-width: 480px) {
//           .smt-logo img { height: 64px; }
//           .smt-mobile-inner { padding: 16px 14px 18px; }
//           .smt-mobile-link { font-size: 15px; padding: 11px 10px; }
//           .smt-btn-mobile { font-size: 15px; padding: 11px 14px; }
//         }
//       `}</style>
//     </header>

//   );
// };

// export default Headersellmytime;
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
const logo = "/SellMyTimeLogo.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bizmats&hl=en_IN";

const Headersellmytime = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 900 : false
  );
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? window.scrollY > 10 : false
  );
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stronger glass + shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  // Close on ESC
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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
      if (target && headerRef.current) {
        const headerH = headerRef.current.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className={`smt-header${scrolled ? " is-scrolled" : ""}`} ref={headerRef}>
      {/* Logo */}
      <div
        className="smt-logo"
        onClick={() => (window.location.href = "https://ororegencompanies.in/")}
        aria-label="Go to homepage"
      >
        <img src={logo} alt="Sell My Time Logo" />
      </div>

      {/* Desktop Nav */}
      {!isMobile ? (
        <>
          <nav className="smt-nav" aria-label="Primary">
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

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="smt-btn"
          >
            Download the App <FaArrowRight aria-hidden="true" className="smt-btn-arrow" />
          </a>
        </>
      ) : (
        <>
          {/* Mobile hamburger */}
          <button
            className="smt-menu-icon"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="smt-mobile-drawer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Overlay */}
          {menuOpen && (
            <div
              className="smt-overlay"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Mobile Drawer (slides from left) */}
          <nav
            id="smt-mobile-drawer"
            className={`smt-mobile-drawer ${menuOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="smt-drawer-header">
              <img src={logo} alt="Sell My Time Logo" />
              <button
                className="smt-drawer-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="smt-drawer-scroll">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={(e) => handleSmoothScroll(e, item.link)}
                  className="smt-mobile-link"
                >
                  {item.name}
                </a>
              ))}

              <div className="smt-mobile-divider" />

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="smt-btn-mobile"
              >
                Download the App
              </a>
            </div>
          </nav>
        </>
      )}

      {/* Styles */}
      <style>{`
        .smt-header {
          box-sizing: border-box;
          width: 100%;
          background: rgba(255,255,255,0.78);
          backdrop-filter: saturate(180%) blur(14px);
          -webkit-backdrop-filter: saturate(180%) blur(14px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 10px 40px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000; /* below overlay/drawer */
          border-bottom: 1px solid rgba(139,31,192,0.08);
          font-family: 'Poppins', sans-serif;
          transition: background .3s ease, box-shadow .3s ease, padding .3s ease;
        }
        .smt-header::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -1px;
          height: 2px;
          background: linear-gradient(90deg, #8B1FC0, #F45A63, #F39C45);
          opacity: 0;
          transition: opacity .3s ease;
        }
        .smt-header.is-scrolled {
          background: rgba(255,255,255,0.92);
          box-shadow: 0 10px 30px -12px rgba(13,6,48,0.18);
        }
        .smt-header.is-scrolled::after { opacity: .9; }

        .smt-logo img {
          height: 64px;
          cursor: pointer;
          display: block;
          border-radius: 14px;
          transition: transform .3s ease;
        }
        .smt-logo img:hover { transform: scale(1.04) rotate(-2deg); }

        /* Desktop Nav */
        .smt-nav ul {
          list-style: none;
          display: flex;
          gap: 6px;
          margin: 0;
          padding: 6px;
          background: rgba(139,31,192,0.05);
          border: 1px solid rgba(139,31,192,0.08);
          border-radius: 999px;
        }
        .smt-nav ul li a {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #0D0630;
          font-weight: 500;
          font-size: 14.5px;
          padding: 8px 16px;
          border-radius: 999px;
          transition: color .25s ease, background .25s ease;
        }
        .smt-nav ul li a:hover,
        .smt-nav ul li a:focus-visible {
          color: #8B1FC0;
          background: #fff;
          box-shadow: 0 4px 14px -6px rgba(139,31,192,.35);
          outline: none;
        }

        .smt-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #8B1FC0 0%, #F45A63 60%, #F39C45 100%);
          background-size: 160% 100%;
          background-position: 0% 0;
          color: #fff;
          padding: 11px 22px;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          white-space: nowrap;
          transition: transform .2s ease, box-shadow .2s ease, background-position .4s ease;
          box-shadow: 0 12px 24px -10px rgba(244,90,99,.65);
        }
        .smt-btn:hover {
          transform: translateY(-2px);
          background-position: 100% 0;
          box-shadow: 0 16px 30px -10px rgba(139,31,192,.6);
        }
        .smt-btn-arrow { font-size: 12px; transition: transform .2s ease; }
        .smt-btn:hover .smt-btn-arrow { transform: translateX(3px); }

        /* Mobile base */
        .smt-menu-icon {
          font-size: 20px;
          color: #fff;
          cursor: pointer;
          z-index: 1202;
          background: linear-gradient(135deg, #8B1FC0, #F45A63);
          border: 0;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          box-shadow: 0 10px 20px -8px rgba(139,31,192,.6);
          transition: transform .2s ease;
        }
        .smt-menu-icon:active { transform: scale(.95); }

        /* Overlay above header, below drawer */
        .smt-overlay {
          position: fixed;
          inset: 0;
          background: rgba(13,6,48,.55);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 1100;
          animation: smtFadeIn .2s ease forwards;
        }

        /* Left Drawer */
        .smt-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 82%;
          max-width: 360px;
          background:
            radial-gradient(320px 240px at 0% 0%, rgba(139,31,192,.12), transparent 70%),
            radial-gradient(280px 220px at 100% 100%, rgba(243,156,69,.12), transparent 70%),
            #fff;
          box-shadow: 18px 0 40px rgba(13,6,48,0.25);
          z-index: 1200;
          transform: translateX(-100%);
          opacity: 0;
          pointer-events: none;
          transition: transform .3s cubic-bezier(.2,.7,.2,1), opacity .2s ease;
          display: flex;
          flex-direction: column;
        }
        .smt-mobile-drawer.open {
          transform: translateX(0);
          opacity: 1;
          pointer-events: auto;
        }

        .smt-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(139,31,192,0.1);
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .smt-drawer-header img {
          height: 46px;
          border-radius: 10px;
        }
        .smt-drawer-close {
          background: #F8EEFD;
          color: #8B1FC0;
          border: none;
          font-size: 18px;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          cursor: pointer;
        }
        .smt-drawer-close:active { background: #F1E2FB; }

        .smt-drawer-scroll {
          padding: 16px;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .smt-mobile-link {
          text-decoration: none;
          color: #0D0630;
          font-weight: 600;
          font-size: 16px;
          padding: 13px 14px;
          border-radius: 12px;
          border-left: 3px solid transparent;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .smt-mobile-link:active { transform: scale(.99); }
        .smt-mobile-link:hover {
          background: rgba(139,31,192,.07);
          color: #8B1FC0;
          border-left-color: #F45A63;
        }

        .smt-mobile-divider {
          height: 1px;
          background: rgba(139,31,192,.12);
          margin: 10px 2px 10px;
        }

        .smt-btn-mobile {
          background: linear-gradient(135deg, #8B1FC0 0%, #F45A63 60%, #F39C45 100%);
          color: #fff;
          padding: 14px 16px;
          border-radius: 14px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 14px 28px -12px rgba(244,90,99,.7);
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .smt-btn-mobile:active {
          transform: translateY(1px);
          box-shadow: 0 8px 18px rgba(139,31,192,.2);
        }

        @keyframes smtFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive tweaks */
        @media (max-width: 1100px) {
          .smt-header { padding: 10px 24px; }
          .smt-nav ul li a { padding: 8px 11px; font-size: 14px; }
        }
        @media (max-width: 900px) {
          .smt-btn { display: none; }
        }
        @media (max-width: 768px) {
          .smt-header { padding: 10px 18px; }
          .smt-logo img { height: 60px; }
        }
        @media (max-width: 480px) {
          .smt-header { padding: 10px 14px; }
          .smt-logo img { height: 50px; border-radius: 11px; }
          .smt-mobile-link { font-size: 15px; padding: 12px 12px; }
          .smt-btn-mobile { font-size: 15px; padding: 13px 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .smt-header, .smt-header * { transition: none !important; animation: none !important; }
        }

        html, body {
          overflow-x: hidden;
        }
      `}</style>
    </header>
  );
};

export default Headersellmytime;
