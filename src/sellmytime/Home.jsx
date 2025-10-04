

import React, { useState } from "react";
import Footersellmytime from './Footersellmytime'
import Headersellmytime from './Headersellmytime'
import bannerImg from "../assets/sellmytimebanner.jpg";
import aboutImage from "../assets/sellmytimeabout.png";
import appStore from "../assets/appstore.webp";
import googlePlay from "../assets/playstore.webp";
import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import contactImg from "../assets/sellmytimecontact.png";
import bannerImgs from "../assets/sellmytimecontactdownload.png";
import appStores from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Home() {
  const items = [
    "🕒 Book Meaningful Time in Mysore",
    "💡 Quality Connections, Not Endless Swipes",
    "🛡 Safe & Verified Dating in Mysore",
    "🌍 Meet People Who Value Your Time",
  ];

  const features = [
    {
      id: "01",
      icon: <FaLightbulb />,
      title: "Unique Concept",
      text: "Unlike traditional dating apps, we let users offer and book time. It’s authentic, time-based connection.",
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

  const testimonials = [
    {
      img: client1,
      name: "Sophia Lee",
      role: "Verified Member",
      roleColor: "#d1001f",
      quote:
        "I love how transparent and safe Sell Your Time feels. It’s not about endless swiping, it’s about meaningful moments.",
    },
    {
      img: client2,
      name: "Ethan Patel",
      role: "Premium User",
      roleColor: "#ff6600",
      quote:
        "Finally, a dating app that respects my time. I’ve met genuine people for coffee, dinners, and even mentoring sessions!",
    },
    {
      img: client3,
      name: "Isabella Gomez",
      role: "Long-term User",
      roleColor: "#ff9900",
      quote:
        "The ability to book or offer time is brilliant. It keeps everything clear and respectful. Highly recommend!",
    },
  ];

  const inputStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  };

  const faqs = [
    {
      question: "How does “Sell Your Time” work?",
      answer:
        "You list your availability, set your hourly rate, and interested users can book you for a date, talk, or activity.",
    },
    {
      question: "Is this like escorting or paid dating?",
      answer:
        "Absolutely not. We are a connection-first platform. Users meet for companionship, conversation, mentorship, or dating — with mutual respect and consent.",
    },
    {
      question: "Can I book someone for friendship only?",
      answer:
        "Yes! Whether it's friendship, mentorship, or romance — you define the purpose when booking.",
    },
    {
      question: "Is my profile public?",
      answer:
        "Only basic details are shown publicly. Your full info is only visible to verified users after mutual interest or booking.",
    },
    {
      question: "Is there any commission?",
      answer:
        "We take a small platform fee to ensure quality and safety. The rest goes directly to you.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Headersellmytime />

      {/* Hero Section */}
      <section id="home"
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
          position: "relative",
        }}
      >
        <div style={{ flex: 1, maxWidth: "50%", color: "#000" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "700", lineHeight: "1.2", marginBottom: "20px" }}>
            Love Meets <span style={{ color: "#ff4500" }}>Time:</span>{" "}
            <span style={{ color: "#ff4500" }}>Book</span> Moments That Matter
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "30px", color: "#333" }}>
            Turn your time into connections. Whether you're looking to meet someone
            special or earn by spending time, our app lets you set your terms and
            build real relationships.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#playStore"><img src={googlePlay} alt="Google Play" style={{ height: "55px" }} /></a>
            <a href="#appstore"><img src={appStore} alt="App Store" style={{ height: "55px" }} /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "50px",
          padding: "80px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", color: "#000" }}>
            We’re not just another <span style={{ color: "#ff6600" }}>dating app.</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
            We believe that time is the most valuable currency. Our platform helps
            individuals connect with like-minded people by selling or booking
            meaningful time together.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333" }}>
            This isn’t about swiping endlessly — it’s about choosing quality over
            quantity. A safe, respectful, and transparent space where everyone
            knows the value of their time.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={aboutImage} alt="SellMyTime About" style={{ width: "100%", maxWidth: "420px", objectFit: "contain" }} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "80px 40px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <span style={{
            backgroundColor: "#ff6600", color: "#fff", padding: "6px 14px",
            borderRadius: "20px", fontSize: "13px", fontWeight: "600", letterSpacing: "1px",
          }}>WHY USE SELL MY TIME</span>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px" }}>Why choose us</h2>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px", maxWidth: "1100px", margin: "0 auto",
        }}>
          {features.map((feature) => (
            <div key={feature.id} style={{
              background: "#111", padding: "40px 25px", borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)", transition: "transform 0.3s",
            }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#ff6600",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px",
                margin: "0 auto 20px",
              }}>{feature.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>{feature.title}</h3>
              <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "20px" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq"
        style={{
          background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
          padding: "80px 20px", textAlign: "center", fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px", color: "#000" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} onClick={() => toggleFAQ(idx)} style={{
              background: "#fff", borderRadius: "8px", marginBottom: "15px",
              padding: "18px 20px", cursor: "pointer", border: "1px solid #f7d58c",
              boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
                {faq.question}
                <span style={{ color: "#ff6600" }}>{activeIndex === idx ? "▲" : "▼"}</span>
              </div>
              {activeIndex === idx && <p style={{ marginTop: "12px", fontSize: "14px", color: "#555" }}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center",
          gap: "60px", maxWidth: "1100px", margin: "0 auto",
        }}>
          <div style={{ textAlign: "center" }}><img src={contactImg} alt="Contact" style={{ maxWidth: "100%" }} /></div>
          <div>
            <h2 style={{ color: "#ff6600", fontSize: "28px", fontWeight: "700" }}>Get In Touch</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input type="text" placeholder="Name" style={inputStyle} required />
              <input type="email" placeholder="Email" style={inputStyle} required />
              <input type="tel" placeholder="Phone" style={inputStyle} required />
              <textarea placeholder="Message" rows="4" style={{ ...inputStyle, resize: "none" }}></textarea>
              <button type="submit" style={{
                background: "linear-gradient(to right, #ff6600, #ff4b5c)", color: "#fff",
                padding: "12px 20px", border: "none", borderRadius: "6px", fontWeight: "600",
              }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download"
        style={{
          backgroundImage: `url(${bannerImgs})`, backgroundSize: "cover",
          backgroundPosition: "center", padding: "100px 60px", borderRadius: "12px",
          maxWidth: "1500px", margin: "0 auto",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div style={{ color: "#000", paddingLeft: "140px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "700", lineHeight: "1.3" }}>
              Download app to start <br />
              <span style={{ color: "#fff" }}>meaningful</span>{" "}
              <span style={{ color: "#ff6600" }}>connections</span>
            </h2>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <a href="#appstore"><img src={appStores} alt="App Store" style={{ height: "50px" }} /></a>
              <a href="#playstore"><img src={playStore} alt="Google Play" style={{ height: "50px" }} /></a>
            </div>
          </div>
        </div>
      </section>

      <Footersellmytime />
    </div>
  )
}

export default Home;
