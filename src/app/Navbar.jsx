import React, { useEffect, useState } from "react";
import logo from "../assets/stay.png"; // make sure selogo.png is in src/assets/

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        marginTop: 0,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", marginTop: -50 }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "120px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Menu Center */}
    <ul
  style={{
    listStyle: "none",
    display: "flex",
    gap: "30px",
    padding: 0,
    position: "absolute",
    left: "45%",
    transform: "translateX(-50%)",
  }}
>
  {["Home", "About Us", "Why Choose Us", "FAQ", "Contact Us"].map(
    (item, index) => (
      <li key={index}>
        <a
          href={
            item === "Home"
              ? "https://ororegencompanies.in/"
              : `#${item.replace(/\s+/g, "").toLowerCase()}`
          }
          style={{
            textDecoration: "none",
            color: "#111", // Always black
            fontSize: "17px",
            fontWeight: "700",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#000000ff")}
          onMouseLeave={(e) => (e.target.style.color = "#111")}
          target={item === "Home" ? "_blank" : "_self"} // open in new tab for external link
          rel={item === "Home" ? "noopener noreferrer" : undefined}
        >
          {item}
        </a>
      </li>
    )
  )}
</ul>


      {/* Right Button */}
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
            background: "#000000ff",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: 100,
          }}
        >
          Download the App
        </button>
      </div>
    </nav>
  );
}
