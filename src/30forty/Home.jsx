import React, { useState } from "react";
import FooterThirtyForty from './FooterThirtyForty'
import HeaderThirtyForty from '../30forty/HeaderThirtyForty'
import bannerImg from "../assets/thirtybanner.webp";
import girl from "../assets/thirtgirl.webp";
import { FaBullseye, FaFlagCheckered, FaListAlt, FaHandshake } from "react-icons/fa";
import phoneMockup from "../assets/thirtybannerone.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/contactthirty.webp";
import downloadBg from "../assets/contactthirtydownload.webp";
import appStore from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Home() {
  const points = [
    {
      number: "1",
      title: "Expertise You Can Trust",
      text: "With years of real estate experience, 30Forty brings unmatched industry knowledge...",
    },
    {
      number: "2",
      title: "Personalized Property Matches",
      text: "Your dream property is unique—so is our approach. We use smart filters...",
    },
    {
      number: "3",
      title: "Seamless End-to-End Process",
      text: "Real estate shouldn’t be stressful—and with 30Forty, it isn’t...",
    },
    {
      number: "4",
      title: "Strong Local Network",
      text: "We know your neighborhood better than anyone...",
    },
  ];

  const faqs = [
    { question: "How do I find properties listed on 30Forty?", answer: "Simply use our search filters..." },
    { question: "How do I start using ThirtyFourty?", answer: "Download the app and sign up..." },
    { question: "Does ThirtyFourty ensure data security?", answer: "Yes, we use enterprise-level encryption..." },
    { question: "Can I use ThirtyFourty with a team?", answer: "Absolutely! You can collaborate with team members..." },
    { question: "Who can I contact for support or queries?", answer: "You can reach us via Help section or email..." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const inputStyle = {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#f7faff",
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <HeaderThirtyForty />

      {/* Hero */}
      <section
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "50px",
          color: "#fff",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "600px", zIndex: 2 }}>
          <h1 style={{ fontSize: "52px", fontWeight: "700", marginBottom: "20px" }}>
            Smart Homes for <br /> Smarter Living.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#f1f1f1" }}>
            Find your dream home effortlessly with <strong>30Forty</strong> — where technology meets comfort.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about"
        style={{ position: "relative", padding: "80px 60px", backgroundColor: "#fff" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "50px", maxWidth: "1200px", margin: "0 auto" }}>
          <div>
            <h4 style={{ color: "#d1001f", fontWeight: "700" }}>About Us</h4>
            <h2 style={{ fontSize: "28px", fontWeight: "700" }}>Redefining Real Estate...</h2>
            <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.8" }}>
              At 30Forty, we’re redefining the way people discover, buy, sell...
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <FaBullseye size={32} color="#d1001f" />
              <h3>Our Vision</h3>
              <p>Transforming real estate into seamless digital experience.</p>
            </div>
            <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <FaFlagCheckered size={32} color="#d1001f" />
              <h3>Our Mission</h3>
              <p>Bridging the gap between seekers and sellers securely.</p>
            </div>
            <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <FaListAlt size={32} color="#d1001f" />
              <h3>What We Offer</h3>
              <p>Smart listings, verified details, virtual tours, and support.</p>
            </div>
            <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <FaHandshake size={32} color="#d1001f" />
              <h3>Our Commitment</h3>
              <p>Building trust with every client through transparency.</p>
            </div>
          </div>
        </div>
        <img src={girl} alt="Girl Illustration" style={{ position: "absolute", bottom: "0", right: "30px", height: "200px" }} />
      </section>

      {/* Why Us */}
      <section id="why-us"
        style={{ backgroundImage: `url(${phoneMockup})`, backgroundSize: "cover", padding: "80px 60px" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "1200px", margin: "0 auto" }}>
          <div></div>
          <div style={{ background: "rgba(255,255,255,0.9)", padding: "30px", borderRadius: "10px" }}>
            <h2 style={{ color: "#d1001f", fontWeight: "800", marginBottom: "25px" }}>Why Choose Us!</h2>
            {points.map((p, i) => (
              <div key={i} style={{ display: "flex", marginBottom: "20px" }}>
                <div style={{ fontWeight: "700", color: "#d1001f", marginRight: "15px" }}>{p.number}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#111356" }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={i} onClick={() => toggleFAQ(i)} style={{
              padding: "18px 22px", border: openIndex === i ? "1px solid #d1001f" : "1px solid #eee",
              marginBottom: "10px", borderRadius: "8px", cursor: "pointer"
            }}>
              <h3>{faq.question}</h3>
              {openIndex === i && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 60px", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", maxWidth: "1200px", margin: "0 auto" }}>
          <div>
            <h3><FaMapMarkerAlt /> Our head office address:</h3>
            <p>#336/A, 20th Main Road, Nachanally, JP Nagar, Mysore</p>
            <h3><FaPhoneAlt /> Call for help:</h3>
            <p>+91 73495 79436</p>
            <h3><FaEnvelope /> Mail us:</h3>
            <p>support@30forty.in</p>
            <img src={contactImg} alt="Contact Illustration" style={{ marginTop: "20px", width: "100%" }} />
          </div>
          <div>
            <h2 style={{ color: "#111356", fontWeight: "800" }}>Send Us a Message</h2>
            <form style={{ display: "grid", gap: "20px" }}>
              <input type="text" placeholder="Full Name *" style={inputStyle} />
              <input type="email" placeholder="Your mail *" style={inputStyle} />
              <textarea placeholder="Message..." rows="5" style={{ ...inputStyle, resize: "none" }}></textarea>
              <button type="submit" style={{ background: "linear-gradient(90deg, #ff4d4d, #d1001f)", color: "#fff", padding: "14px", border: "none", borderRadius: "5px" }}>
                ✉ Send now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download"
        style={{ backgroundImage: `url(${downloadBg})`, backgroundSize: "cover", padding: "150px 60px", color: "#fff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800" }}>Apps available For all Devices</h2>
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <a href="#appstore"><img src={appStore} alt="App Store" style={{ height: "50px" }} /></a>
            <a href="#playstore"><img src={playStore} alt="Google Play" style={{ height: "50px" }} /></a>
          </div>
        </div>
      </section>

      <FooterThirtyForty />
    </div>
  );
}

export default Home;
