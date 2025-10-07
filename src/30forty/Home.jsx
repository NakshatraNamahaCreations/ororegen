

import React, { useState } from "react";
import FooterThirtyForty from "./FooterThirtyForty";
import HeaderThirtyForty from "../30forty/HeaderThirtyForty";
import bannerImg from "../assets/thirtybanner.webp";
import girl from "../assets/thirtgirl.webp";
import {
  FaBullseye,
  FaFlagCheckered,
  FaListAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import phoneMockup from "../assets/thirtybannerone.webp";
import contactImg from "../assets/contactthirty.webp";
import downloadBg from "../assets/contactthirtydownload.webp";
import appStore from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Home() {
  const points = [
    {
      number: "1",
      title: "Expertise You Can Trust",
      text: "With years of real estate experience, 30Forty brings unmatched industry knowledge and a network of reliable professionals.",
    },
    {
      number: "2",
      title: "Personalized Property Matches",
      text: "Your dream property is unique — and so is our approach. We use smart filters to tailor every recommendation to your preferences.",
    },
    {
      number: "3",
      title: "Seamless End-to-End Process",
      text: "Real estate shouldn’t be stressful — with 30Forty, we simplify every step from search to possession.",
    },
    {
      number: "4",
      title: "Strong Local Network",
      text: "We know your neighborhood better than anyone — connecting you to genuine listings and trusted agents.",
    },
  ];

  const faqs = [
    {
      question: "How do I find properties listed on 30Forty?",
      answer:
        "Simply use our smart filters, location search, and verified listings to find your ideal property.",
    },
    {
      question: "How do I start using 30Forty?",
      answer:
        "Download the app from Play Store or App Store, sign up, and start exploring instantly.",
    },
    {
      question: "Does 30Forty ensure data security?",
      answer:
        "Yes, we use enterprise-grade encryption and privacy controls to keep your data safe.",
    },
    {
      question: "Can I use 30Forty with a team?",
      answer:
        "Absolutely! You can collaborate with team members, share listings, and manage deals together.",
    },
    {
      question: "Who can I contact for support or queries?",
      answer:
        "Reach us via the Help section, email, or the contact form below for personalized support.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // ===== Contact form state =====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot (bot trap)
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (status.type) setStatus({ type: "", msg: "" });
    } catch (err) {
      console.error("handleChange error:", err);
    }
  };

  const validate = () => {
    try {
      if (!formData.name.trim()) return "Please enter your full name.";
      if (!/^\S+@\S+\.\S+$/.test(formData.email))
        return "Please enter a valid email address.";
      if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone))
        return "Please enter a valid phone number.";
      if (!formData.message.trim()) return "Please write a brief message.";
      if (formData.company) return "Spam detected.";
      return "";
    } catch (err) {
      console.error("validate error:", err);
      return "Validation failed. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const errMsg = validate();
    if (errMsg) {
      setStatus({ type: "error", msg: errMsg });
      return;
    }

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
            email: "ororegencompanies@gmail.com", // must be verified in Brevo
            name: "Oro Regen Website",
          },
          to: [
            {
              email: "ororegencompanies@gmail.com",
              name: "Oro Regen Admin",
            },
          ],
          replyTo: {
            email: formData.email,
            name: formData.name,
          },
          subject: `📩 New Enquiry from ${formData.name}${
            formData.subject ? " - " + formData.subject : ""
          }`,
          htmlContent: `
            <div style="font-family:Poppins, sans-serif; color:#333;">
              <h2 style="color:#000; margin:0 0 12px;">New Enquiry Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Message:</strong><br>${(formData.message || "").replace(/\n/g, "<br/>")}</p>
              <br/>
              <p>📨 Submitted via Oro Regen website enquiry form.</p>
            </div>
          `,
        }),
      });

      const data = await response.json();
      console.log("📬 Brevo Response:", data);

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Your enquiry has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        console.error("❌ Brevo Error:", data);
        setStatus({
          type: "error",
          msg: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus({
        type: "error",
        msg: "Network error occurred while sending your enquiry.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <HeaderThirtyForty />

      {/* ✅ Hero Section */}
      <section
        id="home"
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
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Smart Homes for <br /> Smarter Living.
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#f1f1f1",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Find your dream home effortlessly with <strong>30Forty</strong> —
            where technology meets comfort.
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        style={{
          position: "relative",
          padding: "80px 60px",
          backgroundColor: "#fff",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.8fr",
            gap: "50px",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          <div>
            <h4 style={{ color: "#d1001f", fontWeight: "700", fontFamily: '"Poppins", sans-serif' }}>
              About Us
            </h4>
            <h2 style={{ fontSize: "28px", fontWeight: "700", fontFamily: '"Poppins", sans-serif' }}>
              Redefining Real Estate
            </h2>
            <p
              style={{
                color: "#444",
                fontSize: "16px",
                lineHeight: "1.8",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              At 30Forty, we’re redefining how people discover, buy, and sell
              properties — integrating digital solutions with expert guidance to
              make your real estate journey stress-free.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {[
              {
                icon: <FaBullseye size={32} color="#d1001f" />,
                title: "Our Vision",
                text: "Transforming real estate into a seamless digital experience.",
              },
              {
                icon: <FaFlagCheckered size={32} color="#d1001f" />,
                title: "Our Mission",
                text: "Bridging the gap between seekers and sellers securely.",
              },
              {
                icon: <FaListAlt size={32} color="#d1001f" />,
                title: "What We Offer",
                text: "Smart listings, verified details, virtual tours, and support.",
              },
              {
                icon: <FaHandshake size={32} color="#d1001f" />,
                title: "Our Commitment",
                text: "Building trust with every client through transparency.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={girl}
          alt="Illustration"
          style={{
            position: "absolute",
            bottom: "0",
            right: "30px",
            height: "200px",
            fontFamily: '"Poppins", sans-serif',
          }}
        />
      </section>

      {/* ✅ Why Choose Us Section */}
      <section
        id="whyus"
        style={{
          backgroundImage: `url(${phoneMockup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          <div></div>
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              padding: "30px",
              borderRadius: "10px",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            <h2
              style={{
                color: "#d1001f",
                fontWeight: "800",
                marginBottom: "25px",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Why Choose Us
            </h2>
            {points.map((p, i) => (
              <div key={i} style={{ display: "flex", marginBottom: "20px" }}>
                <div
                  style={{
                    fontWeight: "700",
                    color: "#d1001f",
                    marginRight: "15px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {p.number}
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section
        id="faq"
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#111356",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              style={{
                padding: "18px 22px",
                border: openIndex === i ? "1px solid #d1001f" : "1px solid #eee",
                marginBottom: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s ease",
                background: "#fafafa",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              <h3
                style={{
                  marginBottom: openIndex === i ? "10px" : 0,
                  color: "#111",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {faq.question}
              </h3>
              {openIndex === i && (
                <p style={{ color: "#555", lineHeight: "1.6" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Contact Section (wired to Brevo) */}
      <section
        id="contact"
        style={{
          position: "relative",
          padding: "100px 60px",
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#000",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.9)",
            zIndex: 1,
            fontFamily: '"Poppins", sans-serif',
          }}
        ></div>

        {/* Contact Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            maxWidth: "1200px",
            margin: "0 auto",
            alignItems: "center",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {/* Left Info */}
          <div>
            <h3 style={{ color: "#d1001f", fontWeight: 700, fontFamily: '"Poppins", sans-serif' }}>
              📍 Address
            </h3>
            <p>#36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008</p>

            <h3
              style={{
                color: "#d1001f",
                fontWeight: 700,
                marginTop: "20px",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              📞 Call
            </h3>
            <p>+91 73495 79436</p>

            <h3
              style={{
                color: "#d1001f",
                fontWeight: 700,
                marginTop: "20px",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              ✉ Mail
            </h3>
            <p>support@30forty.in</p>
          </div>

          {/* Right Form */}
          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            <h2
              style={{
                color: "#111356",
                fontWeight: "800",
                marginBottom: "20px",
                fontSize: "1.8rem",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Send Us a Message
            </h2>

            {/* Status message */}
            {status.msg ? (
              <div
                role="alert"
                style={{
                  marginBottom: 16,
                  padding: "12px 14px",
                  borderRadius: 8,
                  background:
                    status.type === "success"
                      ? "rgba(0,180,0,0.08)"
                      : "rgba(220,0,0,0.08)",
                  border:
                    status.type === "success"
                      ? "1px solid rgba(0,180,0,0.3)"
                      : "1px solid rgba(220,0,0,0.3)",
                  color: status.type === "success" ? "#05650a" : "#7a1111",
                  fontSize: 14,
                }}
              >
                {status.msg}
              </div>
            ) : null}

            <form style={{ display: "grid", gap: "20px" }} onSubmit={handleSubmit}>
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                style={{ display: "none" }}
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Mail *"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
              <textarea
                name="message"
                placeholder="Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  resize: "none",
                  fontSize: "1rem",
                  fontFamily: '"Poppins", sans-serif',
                }}
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                style={{
                  background: loading
                    ? "linear-gradient(90deg, #bbb, #999)"
                    : "linear-gradient(90deg, #ff4d4d, #d1001f)",
                  color: "#fff",
                  padding: "14px",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.3s ease",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {loading ? "Sending..." : "✉ Send Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Download Section */}
      <section
        id="download"
        style={{
          backgroundImage: `url(${downloadBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 60px",
          color: "#fff",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "800" }}>
            Apps Available for All Devices
          </h2>
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            <a href="#">
              <img src={appStore} alt="App Store" style={{ height: "50px" }} />
            </a>
            <a href="#">
              <img src={playStore} alt="Google Play" style={{ height: "50px" }} />
            </a>
          </div>
        </div>
      </section>

      <FooterThirtyForty />
    </div>
  );
}

export default Home;
