import React, { useState } from "react";
import "./EnquiryForm.css";
import enquiryImg from "../assets/enquirycontact.jpg"; 
import dotted from "../assets/dotted.png";
import dotted1 from "../assets/dotted1.png";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Brevo email integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key":process.env.ACCESS-KEY
            ,
        },
        body: JSON.stringify({
          sender: {
            email: "ororegencompanies@gmail.com", // ✅ must be verified in Brevo
            name: "Oro Regen Website",
          },
          to: [
            {
              email: "ororegencompanies@gmail.com", // ✅ receiver (your inbox)
              name: "Oro Regen Admin",
            },
          ],
          replyTo: {
            email: formData.email,
            name: formData.name,
          },
          subject: `📩 New Enquiry from ${formData.name}`,
          htmlContent: `
            <div style="font-family:Poppins, sans-serif; color:#333;">
              <h2 style="color:#000;">New Enquiry Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Subject:</strong> ${formData.subject || "N/A"}</p>
              <p><strong>Message:</strong><br>${formData.message}</p>
              <br/>
              <p>📨 Submitted via Oro Regen website enquiry form.</p>
            </div>
          `,
        }),
      });

      const data = await response.json();
      console.log("📬 Brevo Response:", data);

      if (response.ok) {
        alert("✅ Your enquiry has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("❌ Brevo Error:", data);
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("❌ Network error occurred while sending your enquiry.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      {/* Heading */}
      <div className="contact-heading">
        <p className="contact-now">Contact Now</p>
        <h2>
          Have a Question? <br /> Write a Message
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

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="contact-right">
          <div className="image-container">
            <img src={enquiryImg} alt="Contact" className="contact-image" />
            <img src={dotted} alt="Dotted overlay" className="dotted-overlay" />
            <img
              src={dotted1}
              alt="Dotted overlay 2"
              className="dotted-overlay2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
