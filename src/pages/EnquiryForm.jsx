import React, { useState } from "react";
import "./EnquiryForm.css";
import contactImg from "../assets/enquiry.png";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
          "api-key":
            "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", // ⚠️ Replace with your actual key (keep this in .env, don’t hardcode in production!)
        },
        body: JSON.stringify({
          sender: {
            email: "ororegencompanies@gmail.com", // ✅ must be a verified sender in Brevo
            name: `${formData.name} (${formData.email})`, // ✅ display user details in sender name
          },
          to: [
            {
              email: "ororegencompanies@gmail.com",
              name: "Oro Regen Support",
            },
          ],
          subject: "New Enquiry Form Submission",
          htmlContent: `
            <h2>New Enquiry Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        alert("✅ Enquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(`❌ Failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Network or server error.");
    }
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">
        {/* Left Illustration */}
        <div className="enquiry-image">
          <img src={contactImg} alt="Contact Illustration" />
        </div>

        {/* Right Form */}
        <div className="enquiry-form">
          <h2>Get In Touch</h2>
          <p>
            Have questions or need assistance? Our team is here to help you with
            any queries. Reach out today and we’ll respond as quickly as
            possible.
          </p>

          <form onSubmit={sendMail}>
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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write comments"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
