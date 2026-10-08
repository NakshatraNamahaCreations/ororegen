import React, { useEffect, useState, useCallback } from "react";
const logo = "/30FortyLogo.png";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ororegencompanies.thirtyforty&hl=en_IN";

const headerStyles = `
.tfh-bar {
  width: 100%; position: fixed; top: 0; left: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, rgba(10,22,5,.82), rgba(14,30,8,.70));
  backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%);
  border-bottom: 1px solid rgba(167,224,12,.16);
  box-shadow: 0 10px 30px -12px rgba(0,0,0,.45);
  transition: padding .3s ease, background .3s ease;
}
.tfh-bar::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
  background: linear-gradient(90deg, transparent, #5DBB1F 20%, #83E011 50%, #FEFD03 80%, transparent);
  opacity: .55; pointer-events: none;
}
.tfh-bar.tfh-scrolled { background: linear-gradient(180deg, rgba(10,22,5,.94), rgba(14,30,8,.90)); }
.tfh-logo { display: flex; align-items: center; gap: 12px; cursor: pointer; text-decoration: none; }
.tfh-logo img { object-fit: contain; transition: transform .3s ease; border-radius: 14px; }
.tfh-logo:hover img { transform: scale(1.05) rotate(-2deg); }
.tfh-brand { color: #fff; font-weight: 700; font-size: 19px; letter-spacing: -.01em; line-height: 1.1; }
.tfh-brand span { display: block; font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: #CFF58A; margin-top: 3px; }
.tfh-nav ul {
  list-style: none; display: flex; gap: 4px; margin: 0; padding: 6px;
  border-radius: 999px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09);
}
.tfh-link {
  position: relative; display: inline-block; padding: 9px 18px; border-radius: 999px;
  color: rgba(255,255,255,.82); text-decoration: none; font-weight: 500; font-size: 15px;
  transition: color .25s ease, background .25s ease;
}
.tfh-link:hover, .tfh-link:focus-visible { color: #fff; background: rgba(255,255,255,.09); outline: none; }
.tfh-link.tfh-active {
  color: #12260A; font-weight: 600;
  background: linear-gradient(90deg, #5DBB1F, #A7E00C);
  box-shadow: 0 6px 16px -6px rgba(131,224,17,.8);
}
.tfh-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 14px; font-weight: 700; font-size: 15px; text-decoration: none;
  color: #12260A; background: linear-gradient(90deg, #5DBB1F, #83E011, #FEFD03, #83E011);
  background-size: 200% 100%; background-position: 0 0;
  box-shadow: 0 10px 24px -10px rgba(131,224,17,.85), inset 0 1px 0 rgba(255,255,255,.4);
  transition: transform .25s ease, background-position .4s ease, box-shadow .25s ease;
  white-space: nowrap;
}
.tfh-cta:hover, .tfh-cta:focus-visible { transform: translateY(-2px); background-position: 100% 0; box-shadow: 0 16px 30px -12px rgba(131,224,17,.95); outline: none; }
.tfh-cta svg { transition: transform .25s ease; }
.tfh-cta:hover svg { transform: translateY(2px); }
.tfh-burger {
  width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; cursor: pointer;
  border: 1px solid rgba(167,224,12,.35); background: rgba(255,255,255,.07);
  transition: background .25s ease;
}
.tfh-burger:active { background: rgba(167,224,12,.2); }
.tfh-overlay { position: fixed; inset: 0; background: rgba(5,12,2,.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); transition: opacity .25s ease; z-index: 1001; }
.tfh-drawer {
  position: fixed; top: 0; left: 0; height: 100vh; color: #fff; z-index: 1002;
  padding: 22px 20px 24px; display: flex; flex-direction: column;
  background: radial-gradient(120% 60% at 100% 100%, rgba(93,187,31,.35), transparent 60%), linear-gradient(170deg, #0E1D08, #12260A 60%, #1C3F0B);
  border-right: 1px solid rgba(167,224,12,.18);
  box-shadow: 8px 0 40px rgba(0,0,0,.5); transition: transform .3s cubic-bezier(.2,.7,.2,1);
  font-family: 'Poppins', sans-serif;
}
.tfh-drawer-link {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; margin-bottom: 6px; border-radius: 14px; text-decoration: none;
  color: rgba(255,255,255,.88); font-size: 16px; font-weight: 500;
  border: 1px solid transparent; transition: background .25s ease, color .25s ease, border-color .25s ease;
}
.tfh-drawer-link::after { content: "\\203A"; font-size: 20px; opacity: .45; }
.tfh-drawer-link:hover, .tfh-drawer-link:active { background: rgba(255,255,255,.07); color: #fff; border-color: rgba(167,224,12,.25); }
.tfh-drawer-link.tfh-active { background: rgba(93,187,31,.18); color: #E8FFC2; border-color: rgba(167,224,12,.4); }
@media (prefers-reduced-motion: reduce) {
  .tfh-bar *, .tfh-bar *::before, .tfh-bar *::after, .tfh-drawer, .tfh-overlay { transition: none !important; animation: none !important; }
}
`;

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v11m0 0l-4.5-4.5M12 14l4.5-4.5M5 19h14" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Hamburger / Close icon
const MenuIcon = ({ open }) => (
  <svg
    width="26"
    height="26"
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
      <path d="M3 6h18v2H3V6zm0 5h12v2H3v-2zm0 5h18v2H3v-2z" fill="#fff" />
    )}
  </svg>
);

const HeaderThirtyForty = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = ["about", "whyus", "faq", "contact"];
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const probe = window.innerHeight * 0.35;
      let current = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = `#${id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // Drawer width
  const drawerWidth = Math.min(
    340,
    typeof window !== "undefined" ? Math.round(window.innerWidth * 0.82) : 320
  );

  const MobileDrawer = () => (
    <>
      {/* Overlay */}
      <div
        className="tfh-overlay"
        onClick={() => setMenuOpen(false)}
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />
      {/* Drawer */}
      <aside
        className="tfh-drawer"
        style={{
          width: drawerWidth,
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
            paddingBottom: 18,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={logo}
              alt="Thirty Forty Logo"
              style={{ height: 42, objectFit: "contain", borderRadius: 10 }}
            />
            <span style={{ fontWeight: 700, fontSize: 17 }}>Menu</span>
          </div>
          <button
            className="tfh-burger"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ width: 44, height: 44 }}
          >
            <MenuIcon open />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navItems.map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tfh-drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <a
                key={i}
                href={item.link}
                onClick={(e) => handleSmoothScroll(e, item.link)}
                className={`tfh-drawer-link${active === item.link ? " tfh-active" : ""}`}
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tfh-cta"
          style={{ marginTop: "auto", justifyContent: "center", padding: "15px 20px", fontSize: 16 }}
          onClick={() => setMenuOpen(false)}
        >
          <DownloadIcon /> Download App
        </a>
      </aside>
    </>
  );

  return (
    <>
    <header
      className={`tfh-bar${scrolled ? " tfh-scrolled" : ""}`}
      style={{
        paddingLeft: isMobile ? "max(16px, env(safe-area-inset-left))" : "60px",
        paddingRight: isMobile ? "max(16px, env(safe-area-inset-right))" : "60px",
        paddingTop: isMobile ? 8 : 12,
        paddingBottom: isMobile ? 8 : 12,
      }}
    >
      <style>{headerStyles}</style>

      {/* Logo */}
      <div
        className="tfh-logo"
        onClick={() => (window.location.href = "https://ororegencompanies.in/")}
        style={{ flex: "0 1 auto" }}
      >
        <img
          src={logo}
          alt="Thirty Forty Logo"
          style={{ height: isMobile ? 48 : 64 }}
        />
        <div className="tfh-brand">
          Thirty Forty
          <span>Real Estate</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="tfh-nav">
          <ul>
            {navItems.map((item, i) => (
              <li key={i}>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tfh-link"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.link}
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                    className={`tfh-link${active === item.link ? " tfh-active" : ""}`}
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
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tfh-cta"
        >
          <DownloadIcon /> Download App
        </a>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          className="tfh-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>
      )}
    </header>
    {/* Drawer lives outside the header so the header's backdrop-filter
        doesn't become the containing block for the fixed overlay */}
    {isMobile && <MobileDrawer />}
    </>
  );
};

export default HeaderThirtyForty;
