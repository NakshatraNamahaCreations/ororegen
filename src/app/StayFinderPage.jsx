import React, { useState } from "react";
import bannerImage from "../assets/fs.png"; // ✅ use this import for banner background
import aboutImage from "../assets/abtstay.png";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import { FaListAlt, FaCheckCircle, FaHeadset, FaTag } from "react-icons/fa";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

import Slider from "react-slick";
import googlePlayImg from "../assets/googplay.png";
import appStoreImg from "../assets/app.png";
import scr1 from "../assets/scr1.jpeg";
import scr2 from "../assets/scr2.jpeg";
import scr3 from "../assets/scr3.jpeg";
import scr4 from "../assets/scr4.jpeg";
import scr5 from "../assets/scr5.jpeg";
import scr7 from "../assets/scr7.jpeg";
import scr8 from "../assets/scr8.jpeg";
import scr9 from "../assets/scr9.jpeg";
import scr10 from "../assets/scr10.jpeg";
// Phone frame mockup (PNG with transparent screen area)
import phoneFrame from "../assets/phone-frame.png";
import ctbanner from "../assets/ctbanner.png";
import {
  FaHotel,
  FaHome,
  FaBed,
  FaBuilding,
  FaCity,
  FaUmbrellaBeach,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../src/app/Navbar";
import FooterStay from "./FooterStay";
const Home = () => {
  const screenshots = [scr1, scr2, scr3, scr4, scr5, scr7, scr8, scr9, scr10];
  const roomIcons = [
    { icon: <FaHotel size={60} color="#FF385C" />, label: "Hotels" },
    { icon: <FaHome size={60} color="#FF385C" />, label: "Apartments" },
    { icon: <FaBed size={60} color="#FF385C" />, label: "Hostels" },
    { icon: <FaBuilding size={60} color="#FF385C" />, label: "PGs" },
    { icon: <FaCity size={60} color="#FF385C" />, label: "City Stays" },
    { icon: <FaUmbrellaBeach size={60} color="#FF385C" />, label: "Villas" },
  ];
  // ===== Banner Styles =====
  const bannerSectionStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bannerImage})`, // ✅ fixed
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    marginTop: "200px",
  };

  const bannerOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const bannerContentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    padding: "20px",
  };

  const bannerHeadingStyle = {
    fontSize: "48px",
    fontWeight: "900",
    color: "#ff385c",
    marginBottom: "20px",
    marginTop: "-400px",
  };

  const bannerParagraphStyle = {
    fontSize: "18px",
    color: "#000000ff",
    marginBottom: "20px",
    fontWeight: 600,
    lineHeight: "0.4",
  };

  const offerTextStyle = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#000000ff",
    marginBottom: "30px",
  };

  const storeButtonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  };

  const storeLinkStyle = {
    display: "inline-block",
  };

  const storeImageStyle = {
    height: "40px",
    cursor: "pointer",
    background: "black",
    width: "150px",
    padding: 10,
    borderRadius: 10,
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginTop: "20px",
  };

  const primaryButtonStyle = {
    padding: "12px 28px",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    background: "#ff385c",
    color: "#fff",
    transition: "all 0.3s ease",
  };

  const secondaryButtonStyle = {
    padding: "12px 28px",
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    background: "#fff",
    color: "#ff385c",
    transition: "all 0.3s ease",
  };

  // ===== About Us =====
  const aboutSectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 40px",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const aboutImageWrapperStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  };

  const aboutImgStyle = {
    width: "150%",
    maxWidth: "700px",
  };

  const aboutContentStyle = {
    flex: "1",
    textAlign: "left",
  };

  const aboutParagraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#444",
  };

  // ===== Why Choose Us =====
  const sectionStyle = {
    padding: "60px 20px",
    textAlign: "center",
    background: "#fff",
    marginTop: -60,
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#FF385C",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    color: "#1d1d1dff",
    marginBottom: "50px",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontWeight: 500,
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: 30,
  };

  const cardStyle = {
    flex: "1 1 300px",
    maxWidth: "350px",
    background: "#fff",
    padding: "30px 20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  };

  const imgStyle = {
    width: "80px",
    margin: "0 auto 20px auto",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#111",
  };

  const descStyle = {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#2c2c2cff",
    marginBottom: "25px",
  };

  const numberCircleStyle = (active) => ({
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    borderRadius: "50%",
    display: "inline-block",
    fontWeight: "600",
    fontSize: "1rem",
    color: active ? "#fff" : "#ff385c",
    background: active
      ? "linear-gradient(135deg, #ff385c, #ff6f91)"
      : "transparent",
    border: active ? "none" : "2px solid #ff385c",
    boxShadow: active ? "0 4px 15px rgba(255,56,92,0.4)" : "none",
    transition: "all 0.3s ease",
  });

  const reasons = [
    {
      img: img1,
      title: "Wide Selection",
      text: "From budget rooms to premium stays, find accommodations that match your lifestyle and budget.",
      active: true,
      num: 1,
    },
    {
      img: img2,
      title: "Verified Listings",
      text: "Every stay is checked for quality and reliability before it goes live on our platform.",
      active: false,
      num: 2,
    },
    {
      img: img3,
      title: "24/7 Support",
      text: "Our customer support team is always ready to help you with bookings and queries.",
      active: false,
      num: 3,
    },
  ];

  // ===== Testimonials =====
  const testimonials = [
    {
      name: "Riya, Bangalore",

      text: "I booked my weekend trip through StayFind and loved the easy process. The room was exactly as shown.",
      img: p1,
    },
    {
      name: "Arjun, Hyderabad",

      text: "Great platform! Found affordable stays quickly, and the booking experience was smooth.",
      img: p2,
    },
    {
      name: "Priya, Delhi",

      text: "I liked the transparent pricing — no surprises at checkout. Definitely using StayFind again!",
      img: p3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // ===== FAQs =====
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do I book a room on StayFind?",
      a: "Simply search your destination, choose from available stays, and confirm your booking online.",
    },
    {
      q: "Are there hidden charges?",
      a: "No, we maintain transparent pricing with all taxes and fees shown upfront.",
    },
    {
      q: "Can I cancel or modify my booking?",
      a: "Yes, depending on the property’s cancellation policy. You’ll see details before booking.",
    },
    {
      q: "Is payment secure?",
      a: "Absolutely. We use encrypted payment gateways for your safety.",
    },
    {
      q: "Do you offer customer support?",
      a: "Yes, our support team is available 24/7 to help you with bookings, cancellations, and queries.",
    },
  ];

  const faqSectionStyle = {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const faqHeadingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#222",
  };

  const faqItemStyle = {
    marginBottom: "15px",
    padding: "20px",
    borderRadius: "8px",
    background: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const faqQuestionStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#ff385c",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const faqAnswerStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444",
    marginTop: "10px",
  };

  return (
    <>
    <Navbar />
      {/* Banner Section */}
      <section style={bannerSectionStyle}>
        <div style={bannerOverlayStyle}></div>
        <div style={bannerContentStyle}>
          <h1 style={bannerHeadingStyle}>Book Your Stay. Anywhere, Anytime.</h1>
          <p style={bannerParagraphStyle}>
            Find comfortable rooms, trusted stays, and hassle-free bookings
          </p>
          <p style={bannerParagraphStyle}>at the best prices with StayFind.</p>
          <p style={offerTextStyle}>Free booking for first 5 stays!</p>

          {/* Store Buttons */}
          <div style={storeButtonContainerStyle}>
            <a href="#" style={storeLinkStyle}>
              <img
                src={googlePlayImg}
                alt="Get it on Google Play"
                style={storeImageStyle}
              />
            </a>
            <a href="#" style={storeLinkStyle}>
              <img
                src={appStoreImg}
                alt="Download on the App Store"
                style={storeImageStyle}
              />
            </a>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #F7A7AB, #FF385C)",
          padding: "30px 30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "0px",
          marginRight: "-10px",
          marginLeft: "-px",
        }}
      >
        {/* Feature Cards */}
        {[
          {
            title: "Affordable Prices 💸",
            desc: "Compare and book stays that fit your budget.",
          },
          // {
          //   title: "Prime Locations 📍",
          //   desc: "Stay close to landmarks, transport & nightlife.",
          // },
          {
            title: "Comfort Guaranteed 🛏️",
            desc: "From cozy rooms to premium suites.",
          },
          {
            title: "Support Anytime 📞",
            desc: "24/7 chat and phone support for hassle-free travel.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 250px",
              maxWidth: "280px",
              background: "rgba(255, 255, 255, 0.15)",
              padding: "10px 20px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </section>
      {/* About Us Section */}
      <section style={aboutSectionStyle}>
        <div style={aboutImageWrapperStyle}>
          <img src={aboutImage} alt="About StayFind" style={aboutImgStyle} />
        </div>
        <div style={aboutContentStyle}>
          <h3 style={{ color: "#FF385C" }}>ABOUT US</h3>
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            <span style={{ color: "black", fontSize: 35, fontWeight: 800 }}>
              Rooms you can{" "}
            </span>
            <span style={{ color: "hotpink", fontSize: 35, fontWeight: 800 }}>
              trust,
            </span>
            <br />
            <span style={{ color: "hotpink", fontSize: 35, fontWeight: 800 }}>
              bookings{" "}
            </span>
            <span style={{ color: "black", fontSize: 35, fontWeight: 800 }}>
              you’ll love.
            </span>
          </h1>
          <p style={aboutParagraphStyle}>
            At StayFindr, we make travel easy and affordable. Whether you need a
            cozy room for a weekend getaway, a business trip, or a long
            vacation, our platform helps you discover verified stays with just a
            few clicks. We’re committed to transparent pricing, safe bookings,
            and a seamless experience — so you can focus on your journey while
            we take care of your stay.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: "100px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#FF385C",
            marginTop: "-70px",
          }}
        >
          Why Choose Us
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "50px",
            maxWidth: "700px",
            margin: "0 auto",
            marginBottom: "70px",
          }}
        >
          StayFind makes travel simple, safe, and affordable. Here’s why
          travelers trust us.
        </p>

        {/* Main container with phone in center */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Left Features */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            {[
              {
                title: "Wide Selection",
                text: "From budget rooms to premium stays, find accommodations that match your lifestyle and budget.",
                icon: <FaListAlt />,
              },
              {
                title: "Verified Listings",
                text: "Every stay is checked for quality and reliability before it goes live on our platform.",
                icon: <FaCheckCircle />,
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "25px",
                  marginBottom: "30px",
                  textAlign: "left",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    color: "#FF385C",
                    marginBottom: "15px",
                  }}
                >
                  {reason.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#111",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

          {/* Phone mockup in center */}
          <div
            style={{
              flex: "1",
              minWidth: "350px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Phone frame */}
            <img
              src={phoneFrame}
              alt="Phone Frame"
              style={{
                height: "600px",
                margin: "0 auto",
                zIndex: 2,
                position: "relative",
              }}
            />

            {/* Screenshot inside phone */}
            <img
              src={scr4}
              alt="StayFind App Screenshot"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "470px",
                borderRadius: "30px",
                zIndex: 1,
              }}
            />
          </div>

          {/* Right Features */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            {[
              {
                title: "24/7 Support",
                text: "Our customer support team is always ready to help you with bookings and queries.",
                icon: <FaHeadset />,
              },
              {
                title: "Best Price Guarantee",
                text: "Book confidently with transparent pricing and exclusive discounts for loyal users.",
                icon: <FaTag />,
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "25px",
                  marginBottom: "30px",
                  textAlign: "left",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    color: "#FF385C",
                    marginBottom: "15px",
                  }}
                >
                  {reason.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#111",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "100px 20px",
          background: "#fffafc",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <span
          style={{
            background: "#ffe6ef",
            color: "#FF385C",
            padding: "6px 16px",
            fontWeight: "600",
            fontSize: "13px",
            borderRadius: "20px",
            display: "inline-block",
            marginBottom: "15px",
          }}
        >
          POPULAR STAYS
        </span>

        {/* Heading */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "15px",
            color: "#111",
          }}
        >
          Access 1000+ stays <br /> with just a tap
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "50px",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          From cozy hostels to premium villas, StayFindr helps you discover
          verified stays across India. Book instantly and travel worry-free.
        </p>

        {/* Carousel */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 40px" }}>
          <Slider {...settings}>
            {roomIcons.map((room, i) => (
              <div key={i} style={{ padding: "0 10px" }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    padding: "20px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    width: "160px",
                    height: "160px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {room.icon}
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    {room.label}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Offer */}
        <p
          style={{
            fontWeight: "600",
            color: "#111",
            marginBottom: "20px",
          }}
        >
          🎉 Free booking fee for your first 5 stays!
        </p>

        {/* Store Buttons */}
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a href="#">
            <img
              src={googlePlayImg}
              alt="Google Play"
              style={{
                height: "45px",
                width: "160px",
                background: "black",
                padding: "10px",
                borderRadius: 10,
              }}
            />
          </a>
          <a href="#">
            <img
              src={appStoreImg}
              alt="App Store"
              style={{
                height: "45px",
                width: "160px",
                background: "black",
                padding: "10px",
                borderRadius: 10,
              }}
            />
          </a>
        </div>
      </section>
      {/*download section*/}

      <section
        style={{
          backgroundImage: `url(${ctbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: "70px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "60px auto",
          maxWidth: "1500px",
          color: "#fff",
          height: "500px",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1", minWidth: "300px", paddingLeft: "40px" }}>
          <span
            style={{
              background: "#fff",
              color: "#FF385C",
              fontWeight: "600",
              fontSize: "13px",
              padding: "16px 18px",
              borderRadius: "30px",
              display: "inline-block",
              marginBottom: "20px",
              paddingRight: "20px",
            }}
          >
            DOWNLOAD
          </span>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Download StayFindr
            <br />
            for hassle-free <span style={{ color: "#ffe066" }}>bookings</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.6",
              marginBottom: "30px",
              maxWidth: "400px",
              color: "#fff",
            }}
          >
            Find cozy rooms, premium stays, and verified listings across India.
            StayFindr makes travel easy, affordable, and secure.
          </p>

          {/* Store Buttons */}
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="#">
              <img
                src={googlePlayImg}
                alt="Google Play"
                style={{
                  height: "40px",
                  width: "160px",
                  background: "black",
                  padding: "10px",
                  borderRadius: 10,
                }}
              />
            </a>
            <a href="#">
              <img
                src={appStoreImg}
                alt="App Store"
                style={{
                  height: "40px",
                  width: "160px",
                  background: "black",
                  padding: "10px",
                  borderRadius: 10,
                }}
              />
            </a>
          </div>
        </div>

        {/* Right Content (Phones) */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        ></div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "100px 20px", background: "#fff" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#FF385C",
          }}
        >
          💬 What Our Clients Say
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "50px",
            maxWidth: "700px",
            margin: "0 auto 50px",
          }}
        >
          Trusted by thousands of happy travelers across India
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "20px" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  padding: "40px 25px 60px",
                  textAlign: "center",
                  minHeight: "320px",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                {/* Profile Image */}
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    margin: "0 auto 15px",
                    border: "4px solid #ff385c",
                    objectFit: "cover",
                  }}
                />

                {/* Name */}
                <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>
                  {t.name}
                </h4>

                {/* Testimonial Text */}
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#444",
                    lineHeight: "1.6",
                    fontStyle: "italic",
                  }}
                >
                  <span style={{ fontSize: "2rem", color: "#ff385c" }}>“</span>
                  {t.text}
                  <span style={{ fontSize: "2rem", color: "#ff385c" }}>”</span>
                </p>

                {/* Quote Icon Bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "2rem",
                    color: "#ff385c33",
                  }}
                >
                  ❝
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/*corosel*/}

      {/* ✅ App Screenshots Section */}
      <section
        style={{
          padding: "0px 20px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ff385c",
          }}
        >
          Our App Screenshots
        </h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 50px", color: "#666" }}>
          Explore how StayFindr makes booking simple, fast, and secure. From
          search to checkout, every screen is designed for a smooth experience.
        </p>

        <div
          style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}
        >
          {/* Background carousel */}
          <Slider
            dots={false}
            infinite={true}
            speed={800}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2500}
            arrows={true} // ✅ enable arrows
            centerMode={true}
            centerPadding="0"
            nextArrow={<div className="slick-next" />}
            prevArrow={<div className="slick-prev" />}
          >
            {screenshots.map((s, i) => (
              <div key={i}>
                <img
                  src={s}
                  alt={`Screenshot ${i + 1}`}
                  style={{
                    width: "200px",
                    height: "400px",
                    margin: "0 auto",
                    borderRadius: "20px",
                    objectFit: "cover",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            ))}
          </Slider>

          {/* Foreground phone frame */}
          <img
            src={phoneFrame}
            alt="Phone Frame"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "480px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      {/* FAQs */}
      <section style={faqSectionStyle}>
        <h2 style={faqHeadingStyle}>❓ FAQs</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={faqItemStyle}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div style={faqQuestionStyle}>
              {faq.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p style={faqAnswerStyle}>{faq.a}</p>}
          </div>
        ))}
      </section>
     <FooterStay />
    </>
  );
};

export default Home;
