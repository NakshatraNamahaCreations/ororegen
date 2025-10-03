import React, { useState } from "react";
import FooterThirtyForty from './FooterThirtyForty'
import HeaderThirtyForty from '../30forty/HeaderThirtyForty'
import bannerImg from "../assets/thirtybanner.webp"; // ✅ background banner image
import girl from "../assets/thirtgirl.webp"; // ✅ make sure path is correct
import { FaBullseye, FaFlagCheckered, FaListAlt, FaHandshake } from "react-icons/fa";
import phoneMockup from "../assets/thirtybannerone.webp"; // ✅ make sure path is correct
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/contactthirty.webp"; // 
import downloadBg from "../assets/contactthirtydownload.webp"; // ✅ background image
import appStore from "../assets/appstore.webp"; // update path
import playStore from "../assets/playstore.webp"; // update path
function Home() {
      const points = [
    {
      number: "1",
      title: "Expertise You Can Trust",
      text: "With years of real estate experience, 30Forty brings unmatched industry knowledge to the table. Our team understands market trends and buyer needs deeply. We guide you with confidence and complete transparency.",
    },
    {
      number: "2",
      title: "Personalized Property Matches",
      text: "Your dream property is unique—so is our approach. We use smart filters and expert insights to match you with the right home. Forget endless scrolling; we bring you handpicked options that fit.",
    },
    {
      number: "3",
      title: "Seamless End-to-End Process",
      text: "Real estate shouldn’t be stressful—and with 30Forty, it isn’t. From search to paperwork, we manage the entire process for you. Expect timely updates, full support, and smooth transactions.",
    },
    {
      number: "4",
      title: "Strong Local Network",
      text: "We know your neighborhood better than anyone. Our strong local presence unlocks exclusive listings and top deals. Whether buying or selling, we connect you with the right people.",
    },
  ];
    const faqs = [
    {
      question: "How do I find properties listed on 30Forty?",
      answer:
        "Simply use our search filters to find properties by location, type, price, and more. We show verified listings to help you find your perfect match faster.",
    },
    {
      question: "How do I start using ThirtyFourty?",
      answer:
        "Simply download the app from Google Play or App Store, sign up, and start creating and managing your daily tasks instantly.",
    },
    {
      question: "Does ThirtyFourty ensure data security?",
      answer:
        "Yes, we use enterprise-level encryption and secure storage to ensure that all your data remains private and safe.",
    },
    {
      question: "Can I use ThirtyFourty with a team?",
      answer:
        "Absolutely! ThirtyFourty allows you to collaborate with your team members, assign tasks, and track project progress together.",
    },
    {
      question: "Who can I contact for support or queries?",
      answer:
        "You can reach out to our support team via the Help section in the app or email us directly for quick assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
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
    <div>
        <HeaderThirtyForty />
<section
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: " 50px",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Overlay (optional for dark effect) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        
          zIndex: 1,
        }}
      ></div>

      {/* Left Content */}
      <div
        style={{
          maxWidth: "600px",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "1.2",
             fontFamily: "'Poppins', sans-serif",
          }}
        >
          Smart Homes for <br /> Smarter Living.
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: "400",
            color: "#f1f1f1",
             fontFamily: "'Poppins', sans-serif",
          }}
        >
          Find your dream home effortlessly with <strong>30Forty</strong> —
          where technology meets comfort.
        </p>
      </div>

   
    </section>
<section
      style={{
        position: "relative",
        padding: "80px 60px",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1.8fr",
          gap: "50px",
          alignItems: "start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Content */}
        <div>
          <h4 style={{ color: "#d1001f", fontWeight: "700", marginBottom: "10px" }}>
            About Us
          </h4>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
            Redefining Real Estate, One Smart Move at a Time.
          </h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.8" }}>
            At 30Forty, we’re redefining the way people discover, buy, sell, and
            manage properties. Our innovative real estate platform makes property
            transactions smarter, faster, and hassle-free. Whether you’re searching
            for your dream home or looking for a profitable investment, we bring
            you the best properties with the power of technology.
          </p>
        </div>

        {/* Right Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Vision */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <FaBullseye size={32} color="#d1001f" style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
              Our Vision
            </h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              Transforming real estate into a seamless, transparent experience with
              cutting-edge digital tools.
            </p>
          </div>

          {/* Mission */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <FaFlagCheckered
              size={32}
              color="#d1001f"
              style={{ marginBottom: "15px" }}
            />
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
              Our Mission
            </h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              Bridging the gap between property seekers and sellers with a secure
              and user-friendly platform.
            </p>
          </div>

          {/* Offer */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <FaListAlt size={32} color="#d1001f" style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
              What We Offer
            </h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              Smart property listings, verified details, virtual tours, and complete
              end-to-end support.
            </p>
          </div>

          {/* Commitment */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <FaHandshake size={32} color="#d1001f" style={{ marginBottom: "15px" }} />
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
              Our Commitment
            </h3>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
              Building trust and transparency with every client, ensuring full
              support throughout the journey.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Girl Image */}
      <img
        src={girl}
        alt="Girl Illustration"
        style={{
          position: "absolute",
          bottom: "0",
          right: "30px",
          height: "200px",
        }}
      />
    </section>
     <section
      style={{
        backgroundImage: `url(${phoneMockup})`, // ✅ banner as background
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 60px",
        fontFamily: "Poppins, sans-serif",
        color: "#000",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Side (Phone Image) */}
        <div style={{ textAlign: "center" }}>
        
        </div>

        {/* Right Side (Content) */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)", // ✅ white overlay to make text visible
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              color: "#d1001f",
              fontWeight: "800",
              marginBottom: "25px",
              fontSize: "24px",
              textTransform: "uppercase",
            }}
          >
            Why Choose Us!
          </h2>

          {points.map((point, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "1px solid #ddd",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#d1001f",
                  marginRight: "15px",
                }}
              >
                {point.number}
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", margin: 0 }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#555", marginTop: "6px" }}>
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section
      style={{
        backgroundColor: "#fff",
        padding: "80px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p style={{ color: "#d1001f", fontWeight: "600", fontSize: "14px" }}>
          ASK SOMETHING
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#111356",
          }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            onClick={() => toggleFAQ(idx)}
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "18px 22px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: openIndex === idx ? "1px solid #d1001f" : "1px solid #eee",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: 0,
                  color: "#000",
                }}
              >
                {faq.question}
              </h3>
              <span style={{ fontSize: "18px", color: "#d1001f" }}>
                {openIndex === idx ? "−" : "→"}
              </span>
            </div>
            {openIndex === idx && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
      <section
      style={{
        padding: "80px 60px",
        fontFamily: "Poppins, sans-serif",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left Info Box with Image beside */}
        <div style={{ position: "relative" }}>
          {/* Blob Background with Contact Info */}
          <div
            style={{
              padding: "70px 40px",
              position: "relative",
              zIndex: 2,
              marginRight:'40px',
              marginLeft:'40px',
              marginTop:'-40px',
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "25px", color: "#111" }}>
              <FaMapMarkerAlt
                style={{ color: "#d1001f", marginRight: "10px" }}
              />
              <strong>Our head office address:</strong>
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#444",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              #336/A, 20th Main Road, D Block, Nachanally, JP Nagar, Mysore,
              Karnataka - 570008
            </p>

            <h3
              style={{ fontSize: "18px", marginBottom: "10px", color: "#111" }}
            >
              <FaPhoneAlt style={{ color: "#d1001f", marginRight: "10px" }} />
              <strong>Call for help:</strong>
            </h3>
            <p style={{ fontSize: "14px", color: "#444", marginBottom: "30px" }}>
              +91 73495 79436
            </p>

            <h3
              style={{ fontSize: "18px", marginBottom: "10px", color: "#111" }}
            >
              <FaEnvelope style={{ color: "#d1001f", marginRight: "10px" }} />
              <strong>Mail us:</strong>
            </h3>
            <p style={{ fontSize: "14px", color: "#444" }}>
              support@30forty.in
            </p>
          </div>

          {/* Illustration beside blob */}
          <img
            src={contactImg}
            alt="Contact Illustration"
            style={{
              position: "absolute",
              right: "-50px", // adjust overlap
              bottom: "-40px",
              width: "680px",
              height: "auto",
              zIndex: 1,
              top:'-180px'
            }}
          />
        </div>

        {/* Right Form */}
        <div>
          <h4
            style={{
              color: "#d1001f",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </h4>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "800",
              marginBottom: "30px",
              color: "#111356",
            }}
          >
            Send Us a Message
          </h2>

          <form style={{ display: "grid", gap: "20px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <input type="text" placeholder="Full Name *" style={inputStyle} />
              <input type="text" placeholder="Last Name *" style={inputStyle} />
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <input type="email" placeholder="Your mail *" style={inputStyle} />
              <input
                type="text"
                placeholder="Phone number *"
                style={inputStyle}
              />
            </div>

            <textarea
              placeholder="Message..."
              rows="5"
              style={{
                ...inputStyle,
                resize: "none",
                width: "100%",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #ff4d4d, #d1001f)",
                color: "#fff",
                padding: "14px",
                border: "none",
                borderRadius: "5px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "16px",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #d1001f, #a30018)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #ff4d4d, #d1001f)")
              }
            >
              ✉ Send now
            </button>
          </form>
        </div>
      </div>
    </section>
      <section
      style={{
        backgroundColor: "#d1001f", // fallback red
        backgroundImage: `url(${downloadBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        padding: "150px 60px",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        color: "#fff",
        marginTop:'60px',
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Content */}
        <div>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "20px",
              lineHeight: "1.3",
            }}
          >
            Apps available <br /> For all Devices
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "30px",
              color: "#f5f5f5",
            }}
          >
            Access 30Forty anywhere, anytime – on mobile, tablet, or desktop. 
            Our apps are built to perform across all platforms. Stay connected 
            to your property journey wherever you go.
          </p>

          {/* Store Buttons */}
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#appstore">
              <img
                src={appStore}
                alt="Download on App Store"
                style={{ height: "50px", cursor: "pointer" }}
              />
            </a>
            <a href="#playstore">
              <img
                src={playStore}
                alt="Get it on Google Play"
                style={{ height: "50px", cursor: "pointer" }}
              />
            </a>
          </div>
        </div>

        {/* Right Side is just background image */}
        <div></div>
      </div>
    </section>
      <FooterThirtyForty />
    </div>
  )
}

export default Home
