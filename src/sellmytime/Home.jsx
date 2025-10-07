
import React, { useState } from "react";
import Footersellmytime from "./Footersellmytime";
import Headersellmytime from "./Headersellmytime";
import bannerImg from "../assets/network.jpg";
import aboutImage from "../assets/networkmobile.jpg";
import appStore from "../assets/appstore.webp";
import googlePlay from "../assets/playstore.webp";
import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
import contactImg from "../assets/enquirycontact.jpg";
import bannerImgs from "../assets/networkxdownload.png";
import appStores from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Brevo Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_KEY,
        },
        body: JSON.stringify({
          sender: {
            email: "ororegencompanies@gmail.com",
            name: "NetworkX Website",
          },
          to: [
            {
              email: "ororegencompanies@gmail.com",
              name: "Oro Regen Admin",
            },
          ],
          subject: `📩 New Enquiry from ${formData.name}`,
          htmlContent: `
            <h3>New Contact Form Submission</h3>
            <p><b>Name:</b> ${formData.name}</p>
            <p><b>Email:</b> ${formData.email}</p>
            <p><b>Phone:</b> ${formData.phone}</p>
            <p><b>Message:</b> ${formData.message}</p>
          `,
        }),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const err = await response.json();
        console.error("Brevo Error:", err);
        alert("❌ Failed to send message. Check console for details.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("❌ Network error occurred while sending message.");
    }
    setLoading(false);
  };

  const features = [
    {
      id: "01",
      icon: <FaLightbulb />,
      title: "Unique Concept",
      text: "Unlike traditional apps, we let users offer and book time. It’s authentic, time-based connection.",
    },
    {
      id: "02",
      icon: <FaDollarSign />,
      title: "Empower Yourself",
      text: "Set your own hourly rate. Meet people who value you — and your time.",
    },
    {
      id: "03",
      icon: <FaShieldAlt />,
      title: "Verified Users Only",
      text: "All users go through identity and background checks to ensure safety.",
    },
    {
      id: "04",
      icon: <FaGlobe />,
      title: "Local & Global Reach",
      text: "Find companions in your city or explore connections while you travel.",
    },
  ];

  const faqs = [
    {
      question: "1. What is NetworkX?",
      answer:
        "NetworkX is a digital platform that allows professionals to offer their time and expertise to clients on an hourly basis.",
    },
    {
      question: "2. How do I become a consultant or expert?",
      answer:
        "Register on the app, create your profile, set hourly rates, and get verified. Clients can book you directly.",
    },
    {
      question: "3. How do users book sessions?",
      answer:
        "Users can browse experts, select a service, and book sessions instantly using our scheduling system.",
    },
    {
      question: "4. Who can join NetworkX?",
      answer:
        "Anyone with valuable skills — business mentors, teachers, fitness trainers, designers, and more.",
    },
    {
      question: "5. How are payments handled?",
      answer:
        "All payments are secure and processed via the app. Experts get payouts after each session.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const inputStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Headersellmytime />

      {/* ✅ Hero Section */}
      <section
        id="home"
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div style={{ flex: 1, maxWidth: "50%", color: "#000" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Book Time. Share Knowledge.{" "}
            <span style={{ color: "#24428B" }}>Grow Together.</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "30px",
              color: "#333",
            }}
          >
            From mentors to creators, NetworkX makes it effortless to connect, collaborate, and grow through time-based services.
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#playStore">
              <img src={googlePlay} alt="Google Play" style={{ height: "55px" }} />
            </a>
            <a href="#appstore">
              <img src={appStore} alt="App Store" style={{ height: "55px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "50px",
          padding: "80px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
          
        }}
      >
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px",  fontFamily: '"Poppins", sans-serif',}}>
            Turn Your Expertise <span style={{ color: "#24428B",  fontFamily: '"Poppins", sans-serif', }}>Into Income.</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "20px",  fontFamily: '"Poppins", sans-serif', }}>
            NetworkX is built on a simple idea — time is the most valuable currency. We connect professionals, creators, and learners through a seamless platform that values every moment shared.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our mission is to make knowledge accessible, flexible, and rewarding for everyone.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={aboutImage} alt="About" style={{ width: "100%", maxWidth: "600px" }} />
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section
        id="why-choose-us"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Why Choose Us</h2>
        <div
       style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "0 auto",
  fontFamily: '"Poppins", sans-serif',
}}

        >
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                background: "#111",
                padding: "40px 25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#24428B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  margin: "0 auto 20px",
                    fontFamily: '"Poppins", sans-serif',
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700" }}>{feature.title}</h3>
              <p style={{ fontSize: "14px", color: "#ccc" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section
        id="faq"
        style={{
          background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
          padding: "80px 20px",
          textAlign: "center",
            fontFamily: '"Poppins", sans-serif',
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              style={{
                background: "#fff",
                borderRadius: "8px",
                marginBottom: "15px",
                padding: "18px 20px",
                border: "1px solid #f7d58c",
                cursor: "pointer",
                  fontFamily: '"Poppins", sans-serif',
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between",  fontFamily: '"Poppins", sans-serif', }}>
                {faq.question}
                <span style={{ color: "#24428B" ,  fontFamily: '"Poppins", sans-serif',}}>{activeIndex === idx ? "▲" : "▼"}</span>
              </div>
              {activeIndex === idx && (
                <p style={{ marginTop: "10px", fontSize: "14px" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>


         <section
        id="download"
        style={{
          backgroundImage: `url(${bannerImgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 60px",
          marginBottom: "100px",
          marginTop:'70px',
          borderRadius:'30px',
            fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div style={{ color: "#000", paddingLeft: "140px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "700", lineHeight: "1.3" }}>
              Download app to start <br />
              <span style={{ color: "#fff" }}>meaningful</span>{" "}
              <span style={{ color: "#24428B" }}>connections</span>
            </h2>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <a href="#appstore">
                <img src={appStores} alt="App Store" style={{ height: "50px" }} />
              </a>
              <a href="#playstore">
                <img src={playStore} alt="Google Play" style={{ height: "50px" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section with Brevo Integration */}
      <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
              fontFamily: '"Poppins", sans-serif',
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={contactImg} alt="Contact" style={{ maxWidth: "100%" }} />
          </div>

          <div>
            <h2 style={{ color: "#24428B", fontSize: "28px", fontWeight: "700",  fontFamily: '"Poppins", sans-serif', }}>
              Get In Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "none" }}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(to right, #24428B, #24428B)",
                  color: "#fff",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                    fontFamily: '"Poppins", sans-serif',
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Download Section */}
   

      <Footersellmytime />
    </div>
  );
}

export default Home;
