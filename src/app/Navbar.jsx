

// import React, { useEffect, useState, useCallback } from "react";
// import logo from "../assets/stay.png"; // ensure path is correct

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // scroll style
//   useEffect(() => {
//     try {
//       const handleScroll = () => setScrolled(window.scrollY > 50);
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     } catch {}
//   }, []);

//   // responsive breakpoint (<= 992px)
//   useEffect(() => {
//     try {
//       const compute = () => {
//         if (typeof window === "undefined") return;
//         setIsMobile(window.innerWidth <= 992);
//       };
//       compute();
//       window.addEventListener("resize", compute);
//       return () => window.removeEventListener("resize", compute);
//     } catch {}
//   }, []);

//   // lock body scroll when mobile menu open
//   useEffect(() => {
//     try {
//       if (!isMobile) return;
//       const prevOverflow = document.body.style.overflow;
//       document.body.style.overflow = menuOpen ? "hidden" : "";
//       return () => {
//         document.body.style.overflow = prevOverflow || "";
//       };
//     } catch {}
//   }, [menuOpen, isMobile]);

//   // close on ESC
//   useEffect(() => {
//     try {
//       if (!menuOpen) return;
//       const onKey = (e) => {
//         if (e.key === "Escape") setMenuOpen(false);
//       };
//       document.addEventListener("keydown", onKey);
//       return () => document.removeEventListener("keydown", onKey);
//     } catch {}
//   }, [menuOpen]);

//   // Smooth scroll for sections (internal links only)
//   const handleScrollToSection = useCallback((e, id) => {
//     try {
//       e.preventDefault();
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//         setMenuOpen(false);
//       }
//     } catch (err) {
//       try { console.error(err); } catch {}
//     }
//   }, []);

//   // shared link style
//   const linkBase = {
//     textDecoration: "none",
//     color: "#111",
//     fontSize: "17px",
//     fontWeight: 700,
//     fontFamily: "'Poppins', sans-serif",
//     transition: "color .2s ease",
//     display: "inline-block",
//   };

//   const hoverIn = (e) => (e.target.style.color = "#FF385C");
//   const hoverOut = (e) => (e.target.style.color = "#111");

//   // desktop links (kept same)
//   const DesktopLinks = () => (
//     <ul
//       style={{
//         listStyle: "none",
//         display: "flex",
//         gap: "35px",
//         padding: 0,
//         position: "absolute",
//         left: "50%",
//         transform: "translateX(-50%)",
//         fontFamily: "'Poppins', sans-serif",
//         alignItems: "center",
//         margin: 0,
//       }}
//     >
//       <li>
//         <a
//           href="https://ororegencompanies.in/"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={linkBase}
//           onMouseEnter={hoverIn}
//           onMouseLeave={hoverOut}
//         >
//           Home
//         </a>
//       </li>
//       <li>
//         <a
//           href="#about"
//           onClick={(e) => handleScrollToSection(e, "about")}
//           style={linkBase}
//           onMouseEnter={hoverIn}
//           onMouseLeave={hoverOut}
//         >
//           About Us
//         </a>
//       </li>
//       <li>
//         <a
//           href="#whychooseus"
//           onClick={(e) => handleScrollToSection(e, "whychooseus")}
//           style={linkBase}
//           onMouseEnter={hoverIn}
//           onMouseLeave={hoverOut}
//         >
//           Why Choose Us
//         </a>
//       </li>
//       <li>
//         <a
//           href="#faq"
//           onClick={(e) => handleScrollToSection(e, "faq")}
//           style={linkBase}
//           onMouseEnter={hoverIn}
//           onMouseLeave={hoverOut}
//         >
//           FAQ
//         </a>
//       </li>
//       <li>
//         <a
//           href="#contact"
//           onClick={(e) => handleScrollToSection(e, "contact")}
//           style={linkBase}
//           onMouseEnter={hoverIn}
//           onMouseLeave={hoverOut}
//         >
//           Contact Us
//         </a>
//       </li>
//     </ul>
//   );

//   // menu icon (SVG)
//   const MenuIcon = ({ open }) => (
//     <svg
//       width="26"
//       height="26"
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       style={{ transition: "transform .25s ease", transform: open ? "rotate(90deg)" : "none" }}
//     >
//       {open ? (
//         <path
//           d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.3 19.7 5.71 21.11 12 14.82 18.29 21.11 19.7 19.7 13.41 13.41 19.71 7.11z"
//           fill="#111"
//         />
//       ) : (
//         <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#111" />
//       )}
//     </svg>
//   );

//   // left drawer (mobile)
//   const drawerWidth = Math.min(340, typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320);

//   const MobileDrawer = () => (
//     <>
//       {/* dim background */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: "rgba(0,0,0,0.35)",
//           opacity: menuOpen ? 1 : 0,
//           pointerEvents: menuOpen ? "auto" : "none",
//           transition: "opacity .25s ease",
//           zIndex: 998,
//         }}
//         aria-hidden={!menuOpen}
//       />
//       {/* drawer panel */}
//       <aside
//         id="primary-drawer"
//         role="dialog"
//         aria-modal="true"
//         aria-label="Navigation"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           height: "100vh",
//           width: drawerWidth,
//           maxWidth: "92vw",
//           background: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
//           transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
//           transition: "transform .28s ease",
//           zIndex: 999,
//           padding: "16px 18px 18px",
//           display: "flex",
//           flexDirection: "column",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         {/* drawer header */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <img src={logo} alt="Logo" style={{ height: 40, objectFit: "contain" }} />
//             <span style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>Menu</span>
//           </div>
//           <button
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close menu"
//             style={{
//               width: 40,
//               height: 40,
//               display: "grid",
//               placeItems: "center",
//               borderRadius: 10,
//               border: "1px solid rgba(0,0,0,0.12)",
//               background: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             <MenuIcon open />
//           </button>
//         </div>

//         <nav style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
//           <a
//             href="https://ororegencompanies.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//             onClick={(e) => handleScrollToSection(e, "about")}
//           >
//             About Us
//           </a>
//           <a
//             href="#whychooseus"
//             style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//             onClick={(e) => handleScrollToSection(e, "whychooseus")}
//           >
//             Why Choose Us
//           </a>
//           <a
//             href="#faq"
//             style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//             onClick={(e) => handleScrollToSection(e, "faq")}
//           >
//             FAQ
//           </a>
//           <a
//             href="#contact"
//             style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//             onClick={(e) => handleScrollToSection(e, "contact")}
//           >
//             Contact Us
//           </a>
//         </nav>

//         <div style={{ marginTop: "auto" }}>
//           <button
//             onClick={() => {
//               try {
//                 window.open(
//                   "https://play.google.com/store/apps/details?id=com.yourapp",
//                   "_blank"
//                 );
//               } catch {}
//               setMenuOpen(false);
//             }}
//             style={{
//               width: "100%",
//               padding: "14px 16px",
//               background: "#111",
//               color: "#fff",
//               fontSize: 16,
//               fontWeight: 600,
//               border: "none",
//               borderRadius: 10,
//               cursor: "pointer",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Download the App
//           </button>
//           <p style={{ fontSize: 12, color: "#666", marginTop: 10, lineHeight: 1.3 }}>
//             By continuing, you agree to our Terms and acknowledge our Privacy Policy.
//           </p>
//         </div>
//       </aside>
//     </>
//   );

//   return (
//     <nav
//       style={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: isMobile ? "10px 16px" : "15px 60px",
//         backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
//         boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         transition: "background-color 0.3s ease, box-shadow 0.3s ease, padding .2s ease",
//         fontFamily: "'Poppins', sans-serif",
//         backdropFilter: scrolled ? "saturate(180%) blur(8px)" : "none",
//       }}
//       aria-label="Primary"
//     >
//       {/* Logo */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginTop: isMobile ? 0 : -50, // keep big-screen look same as your original
//           zIndex: 1001,
//         }}
//       >
//         <img
//           src={logo}
//           alt="Logo"
//           style={{
//             height: isMobile ? 56 : 120, // slightly tuned for mobile
//             objectFit: "contain",
//           }}
//         />
//       </div>

//       {/* Desktop Links + CTA (unchanged) */}
//       {!isMobile && <DesktopLinks />}

//       {!isMobile && (
//         <div>
//           <button
//             onClick={() => {
//               try {
//                 window.open(
//                   "https://play.google.com/store/apps/details?id=com.yourapp",
//                   "_blank"
//                 );
//               } catch {}
//             }}
//             style={{
//               padding: "12px 24px",
//               background: "#000",
//               color: "#fff",
//               fontSize: 16,
//               fontWeight: 600,
//               border: "none",
//               borderRadius: 8,
//               cursor: "pointer",
//               marginRight: 100,
//               transition: "background .3s ease",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//             onMouseEnter={(e) => (e.target.style.background = "#FF385C")}
//             onMouseLeave={(e) => (e.target.style.background = "#000")}
//           >
//             Download the App
//           </button>
//         </div>
//       )}

//       {/* Mobile menu button */}
//       {isMobile && (
//         <button
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//           aria-controls="primary-drawer"
//           onClick={() => setMenuOpen((v) => !v)}
//           style={{
//             width: 44,
//             height: 44,
//             display: "grid",
//             placeItems: "center",
//             borderRadius: 10,
//             border: "1px solid rgba(0,0,0,0.12)",
//             background: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           <MenuIcon open={menuOpen} />
//         </button>
//       )}

//       {/* Mobile left drawer */}
//       {isMobile && <MobileDrawer />}
//     </nav>
//   );
// }
import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/stay.png"; // ensure path is correct

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll style
  useEffect(() => {
    try {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } catch {}
  }, []);

  // responsive breakpoint (<= 992px)
  useEffect(() => {
    try {
      const compute = () => {
        if (typeof window === "undefined") return;
        setIsMobile(window.innerWidth <= 992);
      };
      compute();
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    } catch {}
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    try {
      if (!isMobile) return;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = menuOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = prevOverflow || "";
      };
    } catch {}
  }, [menuOpen, isMobile]);

  // close on ESC
  useEffect(() => {
    try {
      if (!menuOpen) return;
      const onKey = (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    } catch {}
  }, [menuOpen]);

  // Smooth scroll for sections (internal links only)
  const handleScrollToSection = useCallback((e, id) => {
    try {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    } catch (err) {
      try { console.error(err); } catch {}
    }
  }, []);

  // shared link style
  const linkBase = {
    textDecoration: "none",
    color: "#111",
    fontSize: "17px",
    fontWeight: 700,
    fontFamily: "'Poppins', sans-serif",
    transition: "color .2s ease",
    display: "inline-block",
  };

  const hoverIn = (e) => (e.target.style.color = "#FF385C");
  const hoverOut = (e) => (e.target.style.color = "#111");

  // desktop links (kept same)
  const DesktopLinks = () => (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "35px",
        padding: 0,
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Poppins', sans-serif",
        alignItems: "center",
        margin: 0,
      }}
    >
      <li>
        <a
          href="https://ororegencompanies.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkBase}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={(e) => handleScrollToSection(e, "about")}
          style={linkBase}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#whychooseus"
          onClick={(e) => handleScrollToSection(e, "whychooseus")}
          style={linkBase}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Why Choose Us
        </a>
      </li>
      <li>
        <a
          href="#faq"
          onClick={(e) => handleScrollToSection(e, "faq")}
          style={linkBase}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          FAQ
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={(e) => handleScrollToSection(e, "contact")}
          style={linkBase}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Contact Us
        </a>
      </li>
    </ul>
  );

  // menu icon (SVG)
  const MenuIcon = ({ open }) => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ transition: "transform .25s ease", transform: open ? "rotate(90deg)" : "none" }}
    >
      {open ? (
        <path
          d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.3 19.7 5.71 21.11 12 14.82 18.29 21.11 19.7 19.7 13.41 13.41 19.71 7.11z"
          fill="#111"
        />
      ) : (
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#111" />
      )}
    </svg>
  );

  // left drawer (mobile)
  const drawerWidth = Math.min(340, typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320);

  const MobileDrawer = () => (
    <>
      {/* dim background */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .25s ease",
          zIndex: 998,
        }}
        aria-hidden={!menuOpen}
      />
      {/* drawer panel */}
      <aside
        id="primary-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: drawerWidth,
          maxWidth: "92vw",
          background: "#fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .28s ease",
          zIndex: 999,
          padding: "16px 18px 18px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="Logo" style={{ height: 40, objectFit: "contain" }} />
            <span style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>Menu</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: 40,
              height: 40,
              display: "grid",
              placeItems: "center",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <MenuIcon open />
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
          <a
            href="https://ororegencompanies.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
            onClick={(e) => handleScrollToSection(e, "about")}
          >
            About Us
          </a>
          <a
            href="#whychooseus"
            style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
            onClick={(e) => handleScrollToSection(e, "whychooseus")}
          >
            Why Choose Us
          </a>
          <a
            href="#faq"
            style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
            onClick={(e) => handleScrollToSection(e, "faq")}
          >
            FAQ
          </a>
          <a
            href="#contact"
            style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
            onClick={(e) => handleScrollToSection(e, "contact")}
          >
            Contact Us
          </a>
        </nav>

        <div style={{ marginTop: "auto" }}>
          <button
            onClick={() => {
              try {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.yourapp",
                  "_blank"
                );
              } catch {}
              setMenuOpen(false);
            }}
            style={{
              width: "100%",
              padding: "14px 16px",
              background: "#111",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Download the App
          </button>
          <p style={{ fontSize: 12, color: "#666", marginTop: 10, lineHeight: 1.3 }}>
            By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>
      </aside>
    </>
  );

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "10px 16px" : "15px 60px",
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease, padding .2s ease",
        fontFamily: "'Poppins', sans-serif",
        backdropFilter: scrolled ? "saturate(180%) blur(8px)" : "none",
      }}
      aria-label="Primary"
    >
      {/* Logo (now clickable link) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: isMobile ? 0 : -50, // keep big-screen look same as your original
          zIndex: 1001,
        }}
      >
        <a
          href="https://ororegencompanies.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Oro Regen Companies - Home"
          title="Oro Regen Companies"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? 56 : 120, // slightly tuned for mobile
              objectFit: "contain",
            }}
          />
        </a>
      </div>

      {/* Desktop Links + CTA (unchanged) */}
      {!isMobile && <DesktopLinks />}

      {!isMobile && (
        <div>
          <button
            onClick={() => {
              try {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.yourapp",
                  "_blank"
                );
              } catch {}
            }}
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              marginRight: 100,
              transition: "background .3s ease",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#FF385C")}
            onMouseLeave={(e) => (e.target.style.background = "#000")}
          >
            Download the App
          </button>
        </div>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-drawer"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: 44,
            height: 44,
            display: "grid",
            placeItems: "center",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      )}

      {/* Mobile left drawer */}
      {isMobile && <MobileDrawer />}
    </nav>
  );
}
