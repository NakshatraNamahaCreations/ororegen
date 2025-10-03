import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/stay.png";
import footerBg from "../assets/footer.jpeg"; // ✅ make sure the path is correct

const FooterStay = () => {
  return (
    <footer
      style={{
        fontFamily: "sans-serif",
        position: "relative",
        marginRight: "-10px",
        marginLeft: "-10px",
      }}
    >
      {/* Top Arc Shape */}
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
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "60px" }}
        >
          <path
            d="M0,0 C300,100 900,-100 1200,0 L1200,120 L0,120 Z"
            fill="url(#footerGradient)"
          ></path>
        </svg>
      </div>

      {/* Main Footer */}
      <div
        style={{
          backgroundImage: `url(${footerBg})`, // ✅ your background image
          backgroundSize: "contain",
          backgroundPosition: "center",
          color: "#fff",
          padding: "100px 60px 50px",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, #ffffffff, rgba(255,155,212,0.85))",
            zIndex: 0,
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand Section */}
          <div>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "120px",
                objectFit: "contain",
              }}
            />
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "black" }}>
              Discover unique stays and unforgettable experiences. Book your
              perfect getaway with StayFindr.
            </p>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    style={{
                      color: "#000000ff",
                      fontSize: "18px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.2)",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#f107a3";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3
              style={{
                marginBottom: "16px",
                fontWeight: "800",
                fontSize: "18px",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                paddingBottom: "5px",
                color: "black",
              }}
            >
              QUICK LINKS
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "14px",
                color: "black",
              }}
            >
              {["Home", "About Us", "Why Choose Us", "Faq's", "Contact Us"].map(
                (item, idx) => (
                  <li key={idx} style={{ marginBottom: "10px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#000000ff",
                        textDecoration: "none",
                        transition: "0.3s",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#000000ff")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#000000ff")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3
              style={{
                marginBottom: "16px",
                fontWeight: "900",
                fontSize: "19px",
                borderBottom: "2px solid #fff",
                display: "inline-block",
                paddingBottom: "5px",
                color: "black",
              }}
            >
              CONTACT US
            </h3>
            <div
              style={{
                marginBottom: "12px",
                fontSize: "14px",
                color: "black",
                fontWeight: 600,
              }}
            >
              <FaPhoneAlt style={{ marginRight: "10px", color: "black" }} />{" "}
              +91 78291 25869
            </div>

            <div
              style={{
                marginBottom: "12px",
                fontSize: "16px",
                fontWeight: 500,
                color: "black",
                fontWeight: 600,
              }}
            >
              <FaEnvelope
                style={{
                  marginRight: "10px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              />
             
            </div>

            <div
              style={{
                marginTop: "15px",
                fontSize: "16px",
                fontWeight: 600,
                color: "black",
              }}
            >
            #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, 
              <br />
             SRINAGARA, MYSORE-570008
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(0, 0, 0, 1)",
            fontSize: "16px",
            position: "relative",
            zIndex: 1,
            fontWeight: 600,
            color: "#000",
          }}
        >
          {/* Policy Links */}
          <div style={{ marginBottom: "15px" }}>
            <a
              href="/privacy-policy"
              style={{
                margin: "0 15px",
                color: "#FF385C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/refund-policy"
              style={{
                margin: "0 15px",
                color: "#FF385C",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Refund Policy
            </a>
            <a
              href="/terms-and-conditions"
              style={{
                margin: "0 15px",
                color: "#FF385C",
                textDecoration: "none",
                fontSize: "14px",
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
