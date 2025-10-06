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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", website: "" });
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
                <h1 style={{color:'white'}}>CONTACT US</h1>
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

              <button type="submit" className="submit-btn">
                Submit Now
              </button>
            </form>
          </div>

          {/* Right Column — Contact Info (No Heading) */}
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
                  <p>+91 78291 25869</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>E-Mail</h4>
                  <p>ororegencompanies@gmail.com</p>
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
