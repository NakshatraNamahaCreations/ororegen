import React, { useEffect, useState, useCallback } from "react";
import logo from "../assets/30fortylogo.webp";

const HeaderThirtyForty = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "https://ororegencompanies.in/", external: true },
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#whyus" },
    { name: "FAQ's", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  // Detect screen size
  useEffect(() => {
    const compute = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 992);
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (!isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [menuOpen, isMobile]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Smooth scrolling for internal links
  const handleSmoothScroll = useCallback(
    (e, link) => {
      if (!link.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        const headerOffset = isMobile ? 72 : 100;
        const y =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMenuOpen(false);
      }
    },
    [isMobile]
  );

  // Hamburger / Close icon
  const MenuIcon = ({ open }) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      style={{
        transition: "transform .25s ease",
        transform: open ? "rotate(90deg)" : "none",
      }}
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
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    transition: "color 0.3s ease",
    cursor: "pointer",
    position: "relative",
  };

  // Drawer width
  const drawerWidth = Math.min(
    340,
    typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320
  );

  const MobileDrawer = () => (
    <>
      {/* Overlay */}
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
      />
      {/* Drawer */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: drawerWidth,
          background: "#101010",
          color: "#fff",
          boxShadow: "4px 0 25px rgba(0,0,0,0.4)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .3s ease",
          zIndex: 1002,
          padding: "22px 20px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={logo}
              alt="30Forty Logo"
              style={{ height: 40, objectFit: "contain" }}
            />
            <span style={{ fontWeight: 600, fontSize: 17 }}>Menu</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              cursor: "pointer",
            }}
          >
            <MenuIcon open />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
          {navItems.map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkBase, padding: "12px 0" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffcbcb")}
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
                style={{ ...linkBase, padding: "12px 0" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffcbcb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
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
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#a30018")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#d1001f")
            }
          >
            Download App
          </a>
          <p
            style={{
              fontSize: 12,
              color: "#bbb",
              marginTop: 10,
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </aside>
    </>
  );

  return (
    <header
      style={{
        width: "100%",
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: isMobile ? "max(16px, env(safe-area-inset-left))" : "60px",
        paddingRight: isMobile ? "max(16px, env(safe-area-inset-right))" : "60px",
        paddingTop: isMobile ? 8 : 14,
        paddingBottom: isMobile ? 8 : 14,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: "0 1 auto",
        }}
      >
        <img
          src={logo}
          alt="30Forty Logo"
          style={{
            height: isMobile ? 56 : 90,
            cursor: "pointer",
            objectFit: "contain",
            transition: "transform .3s ease",
          }}
          onClick={() => (window.location.href = "https://ororegencompanies.in/")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "36px",
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
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffcbcb")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.link}
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                    style={linkBase}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffcbcb")}
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
      padding: "12px 24px",
      borderRadius: "6px",
      fontWeight: 600,
      textDecoration: "none",
      marginLeft: 16, // ⬅️ moved slightly left (was 30)
      transition: "background 0.3s ease",
          marginRight: 85,
    }}
    onMouseOver={(e) =>
      (e.currentTarget.style.backgroundColor = "#a30018")
    }
    onMouseOut={(e) =>
      (e.currentTarget.style.backgroundColor = "#d1001f")
    }
  >
    Download App
  </a>
)}


      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            width: 48,
            height: 48,
            display: "grid",
            placeItems: "center",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            cursor: "pointer",
          }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      )}

      {isMobile && <MobileDrawer />}
    </header>
  );
};

export default HeaderThirtyForty;
