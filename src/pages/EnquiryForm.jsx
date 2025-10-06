import React, { useState } from "react";
import "./EnquiryForm.css";
import enquiryImg from "../assets/enquirycontact.jpg"; // ✅ main image
import dotted from "../../src/assets/dotted.png"; // ✅ top gradient dots
import dotted1 from "../../src/assets/dotted1.png"; // ✅ small dotted shape

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      {/* Heading */}
      <div className="contact-heading">
        <p className="contact-now">Contact Now</p>
        <h2>
          Have Question? <br /> Write a Message
        </h2>
      </div>

      <div className="contact-wrapper">
        {/* Left Form */}
        <div className="contact-left">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
           
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Write Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="contact-right">
          <div className="image-container">
            <img src={enquiryImg} alt="Contact" className="contact-image" />
            {/* Dotted overlays */}
            <img src={dotted} alt="Dotted overlay" className="dotted-overlay" />
            <img src={dotted1} alt="Dotted overlay 2" className="dotted-overlay2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
