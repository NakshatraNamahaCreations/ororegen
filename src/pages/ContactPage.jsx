import React, { useState } from "react";
import "./ContactPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bannerImg from "../assets/bannercontact.jpg"; // banner image

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Brevo (Sendinblue) email integration
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       "api-key":process.env.ACCESS-KEY
      },
      body: JSON.stringify({
        sender: {
          email: "ororegencompanies@gmail.com", // ✅ verified sender (must match Brevo verification)
          name: "Oro Regen Website",
        },
        to: [
          {
            email: "ororegencompanies@gmail.com", // ✅ your inbox
            name: "Oro Regen Admin",
          },
        ],
        replyTo: {
          email: formData.email, // user’s email
          name: formData.name,
        },
        subject: `📩 New Contact Form Submission from ${formData.name}`,
        htmlContent: `
          <div style="font-family: Poppins, sans-serif; color: #333;">
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Website:</strong> ${formData.website}</p>
            <p>Submitted via Oro Regen Website Contact Form.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();
    console.log("📬 Brevo response:", data);

    if (response.ok) {
      alert("✅ Email sent successfully! Check your Gmail inbox.");
      setFormData({ name: "", email: "", phone: "", website: "" });
    } else {
      console.error("❌ Brevo Error:", data);
      alert("❌ Failed to send message. Please verify sender email in Brevo.");
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("❌ Network error occurred while sending the message.");
  }

  setLoading(false);
};


  return (
    <>
      <Header />

      {/* Banner Section */}
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1 style={{ color: "white" }}>CONTACT US</h1>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          {/* Left Column — Contact Form */}
          <div className="contact-left">
            <h4 className="section-label">Contact Us</h4>
            <h2 className="section-title">Get every single update here</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email*"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website*"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>

          {/* Right Column — Contact Info */}
          <div className="contact-right">
            <div className="info-box">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Address</h4>
                  <p>
                    #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA,
                    MYSORE-570008
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+917829125869" style={{ color: "#000" }}>
                      +91 78291 25869
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>E-Mail</h4>
                  <p>
                    <a
                      href="mailto:ororegencompanies@gmail.com"
                      style={{ color: "#000" }}
                    >
                      ororegencompanies@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
