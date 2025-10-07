

// // import React from "react";
// // import logo from "../assets/30fortylogo.webp";

// // const HeaderThirtyForty = () => {
// //   const navItems = [
// //     { name: "Home", link: "https://ororegencompanies.in/", external: true },
// //     { name: "About", link: "#about" },
// //     { name: "Why Us", link: "#whyus" }, // ✅ corrected ID
// //     { name: "FAQ's", link: "#faq" },    // ✅ corrected ID
// //     { name: "Contact", link: "#contact" },
// //   ];

// //   // ✅ Smooth scroll for internal links
// //   const handleSmoothScroll = (e, link) => {
// //     if (link.startsWith("#")) {
// //       e.preventDefault();
// //       const target = document.querySelector(link);
// //       if (target) {
// //         window.scrollTo({
// //           top: target.offsetTop - 100, // offset for sticky header
// //           behavior: "smooth",
// //         });
// //       }
// //     }
// //   };

// //   return (
// //     <header
// //       style={{
// //         width: "100%",
// //         backgroundColor: "black",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //         padding: "10px 50px",
// //         position: "fixed",
// //         top: 0,
// //         left: 0,
// //         zIndex: 1000,
// //         boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
// //       }}
// //     >
// //       {/* ✅ Logo */}
// //       <div>
// //         <img
// //           src={logo}
// //           alt="30Forty Logo"
// //           style={{ height: "100px", cursor: "pointer" }}
// //           onClick={() => (window.location.href = "https://ororegencompanies.in/")}
// //         />
// //       </div>

// //       {/* ✅ Navigation */}
// //       <nav>
// //         <ul
// //           style={{
// //             listStyle: "none",
// //             display: "flex",
// //             gap: "30px",
// //             margin: 0,
// //             padding: 0,
// //           }}
// //         >
// //           {navItems.map((item, i) => (
// //             <li key={i}>
// //               {item.external ? (
// //                 <a
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={{
// //                     textDecoration: "none",
// //                     color: "#fff",
// //                     fontWeight: "600",
// //                     fontSize: "15px",
// //                     fontFamily: "'Poppins', sans-serif",
// //                     transition: "color 0.3s",
// //                   }}
// //                   onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
// //                   onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
// //                 >
// //                   {item.name}
// //                 </a>
// //               ) : (
// //                 <a
// //                   href={item.link}
// //                   onClick={(e) => handleSmoothScroll(e, item.link)}
// //                   style={{
// //                     textDecoration: "none",
// //                     color: "#fff",
// //                     fontWeight: "600",
// //                     fontSize: "15px",
// //                     fontFamily: "'Poppins', sans-serif",
// //                     transition: "color 0.3s",
// //                     cursor: "pointer",
// //                   }}
// //                   onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
// //                   onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
// //                 >
// //                   {item.name}
// //                 </a>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>

// //       {/* ✅ Download Button */}
// //       <a
// //         href="#download"
// //         onClick={(e) => handleSmoothScroll(e, "#download")}
// //         style={{
// //           backgroundColor: "#d1001f",
// //           color: "#fff",
// //           padding: "10px 22px",
// //           borderRadius: "5px",
// //           fontWeight: "600",
// //           textDecoration: "none",
// //           marginRight: "70px",
// //           transition: "background 0.3s ease",
// //         }}
// //         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
// //         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
// //       >
// //         Download App
// //       </a>
// //     </header>
// //   );
// // };

// // export default HeaderThirtyForty;
// import React, { useEffect, useState, useCallback } from "react";
// import logo from "../assets/30fortylogo.webp";

// const HeaderThirtyForty = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", link: "https://ororegencompanies.in/", external: true },
//     { name: "About", link: "#about" },
//     { name: "Why Us", link: "#whyus" }, // ✅ corrected ID
//     { name: "FAQ's", link: "#faq" },    // ✅ corrected ID
//     { name: "Contact", link: "#contact" },
//   ];

//   // Breakpoint: <= 992px is mobile layout
//   useEffect(() => {
//     const compute = () => setIsMobile(typeof window !== "undefined" && window.innerWidth <= 992);
//     compute();
//     window.addEventListener("resize", compute);
//     return () => window.removeEventListener("resize", compute);
//   }, []);

//   // Lock body scroll when the drawer is open
//   useEffect(() => {
//     if (!isMobile) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = prev || "";
//     };
//   }, [menuOpen, isMobile]);

//   // Close drawer on Esc
//   useEffect(() => {
//     if (!menuOpen) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [menuOpen]);

//   // Smooth scroll for internal links
//   const handleSmoothScroll = useCallback((e, link) => {
//     if (!link.startsWith("#")) return;
//     e.preventDefault();
//     const target = document.querySelector(link);
//     if (target) {
//       const headerOffset = isMobile ? 72 : 100; // sticky header offset
//       const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   }, [isMobile]);

//   // Menu icon
//   const MenuIcon = ({ open }) => (
//     <svg
//       width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"
//       style={{ transition: "transform .25s ease", transform: open ? "rotate(90deg)" : "none" }}
//     >
//       {open ? (
//         <path d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.3 19.7 5.71 21.11 12 14.82 18.29 21.11 19.7 19.7 13.41 13.41 19.71 7.11z" fill="#fff" />
//       ) : (
//         <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#fff" />
//       )}
//     </svg>
//   );

//   const linkBase = {
//     textDecoration: "none",
//     color: "#fff",
//     fontWeight: 600,
//     fontSize: 15,
//     fontFamily: "'Poppins', sans-serif",
//     transition: "color .3s",
//     cursor: "pointer",
//   };

//   // Drawer width (responsive)
//   const drawerWidth = Math.min(
//     340,
//     typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320
//   );

//   const MobileDrawer = () => (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: "rgba(0,0,0,0.35)",
//           opacity: menuOpen ? 1 : 0,
//           pointerEvents: menuOpen ? "auto" : "none",
//           transition: "opacity .25s ease",
//           zIndex: 999,
//         }}
//         aria-hidden={!menuOpen}
//       />
//       {/* Left Drawer */}
//       <aside
//         id="mobile-drawer"
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
//           background: "#111",
//           color: "#fff",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
//           transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
//           transition: "transform .28s ease",
//           zIndex: 1000,
//           padding: "16px 18px 18px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* Drawer Header */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <img src={logo} alt="30Forty Logo" style={{ height: 40, objectFit: "contain" }} />
//             <span style={{ fontWeight: 700, fontSize: 16 }}>Menu</span>
//           </div>
//           <button
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close menu"
//             style={{
//               width: 40, height: 40, display: "grid", placeItems: "center",
//               borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
//               background: "transparent", cursor: "pointer"
//             }}
//           >
//             <MenuIcon open />
//           </button>
//         </div>

//         {/* Drawer Nav */}
//         <nav style={{ display: "flex", flexDirection: "column", marginTop: 6 }}>
//           {navItems.map((item, i) => (
//             item.external ? (
//               <a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//                 onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
//                 onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ) : (
//               <a
//                 key={i}
//                 href={item.link}
//                 onClick={(e) => handleSmoothScroll(e, item.link)}
//                 style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
//                 onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
//                 onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
//               >
//                 {item.name}
//               </a>
//             )
//           ))}
//         </nav>

//         {/* Drawer CTA */}
//         <div style={{ marginTop: "auto" }}>
//           <a
//             href="#download"
//             onClick={(e) => handleSmoothScroll(e, "#download")}
//             style={{
//               display: "inline-block",
//               width: "100%",
//               textAlign: "center",
//               backgroundColor: "#d1001f",
//               color: "#fff",
//               padding: "12px 16px",
//               borderRadius: 10,
//               fontWeight: 700,
//               textDecoration: "none",
//               transition: "background .3s ease",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
//           >
//             Download App
//           </a>
//           <p style={{ fontSize: 12, color: "#bbb", marginTop: 10, lineHeight: 1.3 }}>
//             By continuing, you agree to our Terms and acknowledge our Privacy Policy.
//           </p>
//         </div>
//       </aside>
//     </>
//   );

//   return (
//     <header
//       style={{
//         width: "100%",
//         backgroundColor: "black",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: isMobile ? "8px 16px" : "10px 50px", // mobile-friendly padding
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img
//           src={logo}
//           alt="30Forty Logo"
//           style={{ height: isMobile ? 64 : 100, cursor: "pointer", objectFit: "contain" }}
//           onClick={() => (window.location.href = "https://ororegencompanies.in/")}
//         />
//       </div>

//       {/* Desktop Nav */}
//       {!isMobile && (
//         <nav>
//           <ul
//             style={{
//               listStyle: "none",
//               display: "flex",
//               gap: "30px",
//               margin: 0,
//               padding: 0,
//             }}
//           >
//             {navItems.map((item, i) => (
//               <li key={i}>
//                 {item.external ? (
//                   <a
//                     href={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={linkBase}
//                     onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
//                     onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <a
//                     href={item.link}
//                     onClick={(e) => handleSmoothScroll(e, item.link)}
//                     style={linkBase}
//                     onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
//                     onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
//                   >
//                     {item.name}
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}

//       {/* Desktop CTA */}
//       {!isMobile && (
//         <a
//           href="#download"
//           onClick={(e) => handleSmoothScroll(e, "#download")}
//           style={{
//             backgroundColor: "#d1001f",
//             color: "#fff",
//             padding: "10px 22px",
//             borderRadius: "5px",
//             fontWeight: 600,
//             textDecoration: "none",
//             marginRight: "70px",
//             transition: "background 0.3s ease",
//             whiteSpace: "nowrap",
//           }}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
//         >
//           Download App
//         </a>
//       )}

//       {/* Mobile Menu Button */}
//       {isMobile && (
//         <button
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//           aria-controls="mobile-drawer"
//           onClick={() => setMenuOpen((v) => !v)}
//           style={{
//             width: 44,
//             height: 44,
//             display: "grid",
//             placeItems: "center",
//             borderRadius: 10,
//             border: "1px solid rgba(255,255,255,0.2)",
//             background: "transparent",
//             cursor: "pointer",
//           }}
//         >
//           <MenuIcon open={menuOpen} />
//         </button>
//       )}

//       {/* Mobile Left Drawer */}
//       {isMobile && <MobileDrawer />}
//     </header>
//   );
// };

// export default HeaderThirtyForty;
import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/30fortylogo.webp";

const HeaderThirtyForty = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "https://ororegencompanies.in/", external: true },
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#whyus" }, // ✅ corrected ID
    { name: "FAQ's", link: "#faq" },    // ✅ corrected ID
    { name: "Contact", link: "#contact" },
  ];

  // Breakpoint: <= 992px is mobile layout
  useEffect(() => {
    const compute = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 992);
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Lock body scroll when the drawer is open
  useEffect(() => {
    if (!isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [menuOpen, isMobile]);

  // Close drawer on Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Smooth scroll for internal links
  const handleSmoothScroll = useCallback(
    (e, link) => {
      if (!link.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        const headerOffset = isMobile ? 72 : 100; // sticky header offset
        const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMenuOpen(false);
      }
    },
    [isMobile]
  );

  // Menu icon
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
          fill="#fff"
        />
      ) : (
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#fff" />
      )}
    </svg>
  );

  const linkBase = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: 15,
    fontFamily: "'Poppins', sans-serif",
    transition: "color .3s",
    cursor: "pointer",
  };

  // Drawer width (responsive)
  const drawerWidth = Math.min(
    340,
    typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320
  );

  const MobileDrawer = () => (
    <>
      {/* Overlay (above header when open) */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .25s ease",
          zIndex: 1001,
        }}
        aria-hidden={!menuOpen}
      />
      {/* Left Drawer */}
      <aside
        id="mobile-drawer"
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
          background: "#111",
          color: "#fff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .28s ease",
          zIndex: 1002,
          padding: "16px 18px 18px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="30Forty Logo" style={{ height: 40, objectFit: "contain" }} />
            <span style={{ fontWeight: 700, fontSize: 16 }}>Menu</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              cursor: "pointer",
            }}
          >
            <MenuIcon open />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav style={{ display: "flex", flexDirection: "column", marginTop: 6 }}>
          {navItems.map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <a
                key={i}
                href={item.link}
                onClick={(e) => handleSmoothScroll(e, item.link)}
                style={{ ...linkBase, padding: "12px 6px", borderRadius: 8 }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Drawer CTA */}
        <div style={{ marginTop: "auto" }}>
          <a
            href="#download"
            onClick={(e) => handleSmoothScroll(e, "#download")}
            style={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              backgroundColor: "#d1001f",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background .3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
          >
            Download App
          </a>
          <p style={{ fontSize: 12, color: "#bbb", marginTop: 10, lineHeight: 1.3 }}>
            By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>
      </aside>
    </>
  );

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // Safe-area aware padding on mobile so the hamburger doesn’t hug/clip the corner
        paddingLeft: isMobile ? "max(16px, env(safe-area-inset-left))" : "50px",
        paddingRight: isMobile ? "max(16px, env(safe-area-inset-right))" : "50px",
        paddingTop: isMobile ? 8 : 10,
        paddingBottom: isMobile ? 8 : 10,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
      }}
    >
      {/* Logo (won't push the hamburger off-screen) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: 0,       // allows shrinking
          maxWidth: isMobile ? "70vw" : "auto", // avoid pushing the button out
          overflow: "hidden",
          flex: "0 1 auto",
        }}
      >
        <img
          src={logo}
          alt="30Forty Logo"
          style={{
            display: "block",
            height: isMobile ? 64 : 100,
            width: "auto",
            cursor: "pointer",
            objectFit: "contain",
          }}
          onClick={() => (window.location.href = "https://ororegencompanies.in/")}
        />
      </div>

      {/* Desktop Nav */}
      {!isMobile && (
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "30px",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkBase}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.link}
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                    style={linkBase}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop CTA */}
      {!isMobile && (
        <a
          href="#download"
          onClick={(e) => handleSmoothScroll(e, "#download")}
          style={{
            backgroundColor: "#d1001f",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "5px",
            fontWeight: 600,
            textDecoration: "none",
            marginLeft: 24,
            transition: "background 0.3s ease",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
        >
          Download App
        </a>
      )}

      {/* Mobile Menu Button (bigger, padded, always visible) */}
      {isMobile && (
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            flex: "0 0 auto",
            width: 48,
            height: 48,
            display: "grid",
            placeItems: "center",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            cursor: "pointer",
            // ensure it’s not clipped even on devices with notches
            marginRight: "calc(env(safe-area-inset-right, 0px) / 2)",
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      )}

      {/* Mobile Left Drawer */}
      {isMobile && <MobileDrawer />}
    </header>
  );
};

export default HeaderThirtyForty;
