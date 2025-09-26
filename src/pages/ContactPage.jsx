import React, { useState } from "react";
import "./ContactPage.css";
import contactImg from "../assets/contact.png";
import bannerImg from "../assets/bannercontact.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const sendMail = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "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", // Replace with your valid API key
      },
     body: JSON.stringify({
  sender: { 
    email: "ororegencompanies@gmail.com", // ✅ must stay your verified email
    name: `${formData.name} (${formData.email})` // ✅ shows user details as sender name
  },
  to: [{ email: "ororegencompanies@gmail.com", name: "Oro Regen Support" }],
  subject: "New Contact Form Submission",
  htmlContent: `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Message:</strong> ${formData.message}</p>
  `,
}),

    });

    const data = await response.json();
    console.log("API Response:", data); // Log the full response for debugging

    if (response.ok) {
      alert("✅ Email sent successfully!");
      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      console.error("API Error:", data);
      alert(`❌ Failed to send email: ${data.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("❌ Failed to send email: Network or server error");
  }
};


  return (
    <>
      <Header />

      {/* Banner Section */}
      <div className="contact-banner">
        <img src={bannerImg} alt="Contact Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 style={{ color: "white" }}>Contact Us</h1>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="card-icon" />
          <h4>Address</h4>
          <p>#36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="card-icon" />
          <h4>Email</h4>
          <p>ororegencompanies@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="card-icon" />
          <h4>Phone</h4>
          <p>+91 78291 25869</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-container">
        <div className="contact-left">
          <img src={contactImg} alt="Contact" />
        </div>

        <div className="contact-right">
          <h2>Get in Touch</h2>
          <form onSubmit={sendMail}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;




