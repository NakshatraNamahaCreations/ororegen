import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaYelp,
} from "react-icons/fa";

import logo from "../assets/sellmytime.png"; // ✅ update path to your logo

const Footersellmytime = () => {
  return (
    <footer style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* 🔹 Top Orange Support Bar */}
      <div
        style={{
          backgroundColor: "#ff4c00",
          color: "#fff",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          transform: "translateY(-40px)",
          marginTop: "140px",
          marginBottom: "-70px",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", fontSize: "22px", fontWeight: "700" }}>
          Need support?
        </h3>
        <p style={{ marginBottom: "20px", fontSize: "14px" }}>
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a
            href="tel:+919876543210"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "600",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaPhone /> Call us now
          </a>
        </div>
      </div>

      {/* 🔹 Main Footer */}
      <div
        style={{
          backgroundColor: "#fff3e0",
          padding: "60px 40px 30px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "40px",
          maxWidth: "1500px",
          margin: "0 auto",
          borderTop: "1px solid #eee",
        }}
      >
        {/* Column 1: Logo + About */}
        <div>
          <img
            src={logo}
            alt="Sell Your Time"
            style={{ height: "60px", marginBottom: "15px" }}
          />
          <p style={{ fontSize: "14px", color: "#333", marginBottom: "20px" }}>
            Whether you're looking to meet someone special or earn by spending
            time, our app lets you set your terms and build real relationships.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
               App Store
            </button>
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4
            style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}
          >
            Quick Links
          </h4>
          <ul
            style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px" }}
          >
            {[
              "Home",
              "About Us",
              "Why Choose Us",
              "FAQs",
              "Testimonials",
              "Contact Us",
            ].map((link, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ff4c00")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h4
            style={{ fontSize: "16px", fontWeight: "700", marginBottom: "15px" }}
          >
            Contact Us
          </h4>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaPhone /> +91 98765 43210
          </p>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaEnvelope /> support@sellyourtime.com
          </p>
          <p
            style={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaMapMarkerAlt /> #374, Dwaraka Nagar, Bengaluru, India
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "15px",
              fontSize: "18px",
              color: "#ff4c00",
            }}
          >
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
        
          </div>
        </div>
      </div>

      {/* 🔹 Copyright with Policies */}
      <div
        style={{
          backgroundColor: "#fff3e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          borderTop: "1px solid #ddd",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0 }}>© 2025 Sell Your Time. All rights reserved.</p>

        <div>
          <a
            href="/sellmytime/privacy-policy"
            style={{
              marginRight: "15px",
              textDecoration: "none",
              color: "#000",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ff4c00")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
          >
            Privacy Policy
          </a>
          <a
            href="/sellmytime/terms-and-conditions"
            style={{
              marginRight: "15px",
              textDecoration: "none",
              color: "#000",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ff4c00")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
          >
            Terms & Conditions
          </a>
          <a
            href="/sellmytime/refund-policy"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ff4c00")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footersellmytime;
