import React, { useEffect, useState } from "react";
import bannerImage from "../assets/fs.png";
import aboutImage from "../assets/abtstay.png";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const compute = () => setIsMobile(window.innerWidth <= 768);
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const screenshots = [scr1, scr2, scr3, scr4, scr5, scr7, scr8, scr9, scr10];
  const roomIcons = [
    { icon: <FaHotel size={60} color="#FF385C" />, label: "Hotels" },
    { icon: <FaHome size={60} color="#FF385C" />, label: "Apartments" },
    { icon: <FaBed size={60} color="#FF385C" />, label: "Hostels" },
    { icon: <FaBuilding size={60} color="#FF385C" />, label: "PGs" },
    { icon: <FaCity size={60} color="#FF385C" />, label: "City Stays" },
    { icon: <FaUmbrellaBeach size={60} color="#FF385C" />, label: "Villas" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do I book a room on StayFindr?", a: "Simply search your destination, choose from available stays, and confirm your booking online." },
    { q: "Are there hidden charges?", a: "No, we maintain transparent pricing with all taxes and fees shown upfront." },
    { q: "Can I cancel or modify my booking?", a: "Yes, depending on the property’s cancellation policy. You’ll see details before booking." },
    { q: "Is payment secure?", a: "Absolutely. We use encrypted payment gateways for your safety." },
    { q: "Do you offer customer support?", a: "Yes, our support team is available 24/7 to help you with bookings, cancellations, and queries." },
  ];

  const testimonials = [
    { name: "Riya, Bangalore", text: "I booked my weekend trip through StayFind and loved the easy process. The room was exactly as shown.", img: p1 },
    { name: "Arjun, Hyderabad", text: "Great platform! Found affordable stays quickly, and the booking experience was smooth.", img: p2 },
    { name: "Priya, Delhi", text: "I liked the transparent pricing — no surprises at checkout. Definitely using StayFind again!", img: p3 },
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

  return (
    <>
      <Navbar />

      {/* ===== Banner Section ===== */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "auto" : "100vh",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: isMobile ? "90px" : "200px",
          padding: isMobile ? "90px 16px 60px" : "0px",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {/* subtle gradient veil to make text pop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              isMobile
                ? "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.6))"
                : "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            padding: isMobile ? "0" : "20px",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "34px" : "48px",
              fontWeight: "900",
              color: "#ff385c",
              marginBottom: "16px",
              marginTop: isMobile ? "0" : "-400px",
              lineHeight: 1.2,
              letterSpacing: isMobile ? "0.2px" : "0",
            }}
          >
            Book Your Stay. Anywhere, Anytime.
          </h1>
          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              color: "#000",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            Find comfortable rooms, trusted stays, and hassle-free bookings
          </p>
          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              color: "#000",
              marginBottom: "18px",
              fontWeight: 600,
            }}
          >
            at the best prices with StayFind.
          </p>
          <p
            style={{
              fontSize: isMobile ? "14px" : "15px",
              fontWeight: "700",
              marginBottom: "22px",
              color: "#111",
            }}
          >
            Free booking for first 5 stays!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a href="#">
              <img
                src={googlePlayImg}
                alt="Google Play"
                style={{
                  height: isMobile ? "44px" : "40px",
                  width: isMobile ? "170px" : "150px",
                  background: "#000",
                  padding: "10px",
                  borderRadius: "12px",
                  boxShadow: isMobile ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
                }}
              />
            </a>
            <a href="#">
              <img
                src={appStoreImg}
                alt="App Store"
                style={{
                  height: isMobile ? "44px" : "40px",
                  width: isMobile ? "170px" : "150px",
                  background: "#000",
                  padding: "10px",
                  borderRadius: "12px",
                  boxShadow: isMobile ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, #F7A7AB, #FF385C)",
          padding: isMobile ? "28px 16px" : "30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[
          { title: "Affordable Prices 💸", desc: "Compare and book stays that fit your budget." },
          { title: "Comfort Guaranteed 🛏️", desc: "From cozy rooms to premium suites." },
          { title: "Support Anytime 📞", desc: "24/7 chat and phone support for hassle-free travel." },
        ].map((feature, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 250px",
              maxWidth: isMobile ? "100%" : "280px",
              background: "rgba(255,255,255,0.15)",
              padding: isMobile ? "18px" : "20px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              color: "#fff",
              backdropFilter: "blur(3px)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "8px" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "0.98rem", lineHeight: 1.6 }}>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* ===== About Us ===== */}
      <section
        id="about"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "40px 16px" : "60px 40px",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: '"Poppins", sans-serif',
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={aboutImage}
            alt="About StayFind"
            style={{ width: isMobile ? "100%" : "150%", maxWidth: "700px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "#FF385C" ,fontFamily: '"Poppins", sans-serif',}}>ABOUT US</h3>
          <h1 style={{ fontSize: isMobile ? 28 : 35, fontWeight: 800, lineHeight: 1.5 }}>
            Rooms you can <span style={{ color: "hotpink" }}>trust,</span>
            <br />
            <span style={{ color: "hotpink" }}>bookings</span> you’ll love.
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.1rem", lineHeight: 1.6, color: "#444" }}>
            At StayFindr, we make travel easy and affordable. Whether you need a
            cozy room for a weekend getaway, a business trip, or a long vacation,
            our platform helps you discover verified stays with just a few clicks.
          </p>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section id="whychooseus" style={{ padding: isMobile ? "60px 16px" : "100px 20px", background: "#fff", textAlign: "center",fontFamily: '"Poppins", sans-serif', }}>
        <h2 style={{ fontSize: isMobile ? "2rem" : "2.5rem", fontWeight: "bold", marginBottom: "12px", color: "#FF385C" ,fontFamily: '"Poppins", sans-serif',}}>
          Why Choose Us
        </h2>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#666",
            marginBottom: isMobile ? "40px" : "70px",
            maxWidth: "700px",
            margin: "0 auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          StayFind makes travel simple, safe, and affordable. Here’s why travelers trust us.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {/* Left */}
          <div style={{ flex: 1, minWidth: 250 }}>
            {[
              { title: "Wide Selection", text: "From budget rooms to premium stays.", icon: <FaListAlt /> },
              { title: "Verified Listings", text: "Every stay is checked for quality.", icon: <FaCheckCircle /> },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: isMobile ? "18px" : "25px",
                  marginBottom: "24px",
                  textAlign: "left",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                <div style={{ fontSize: isMobile ? 34 : 40, color: "#FF385C", marginBottom: 12,fontFamily: '"Poppins", sans-serif', }}>{r.icon}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{r.title}</h3>
                <p style={{ color: "#555" }}>{r.text}</p>
              </div>
            ))}
          </div>

          {/* Center */}
          <div style={{ flex: 1, minWidth: 320, position: "relative", textAlign: "center",fontFamily: '"Poppins", sans-serif', }}>
            <img
              src={phoneFrame}
              alt="Phone Frame"
              style={{
                height: isMobile ? "480px" : "600px",
                margin: "0 auto",
                position: "relative",
                zIndex: 2,
                fontFamily: '"Poppins", sans-serif',
              }}
            />
            <img
              src={scr4}
              alt="StayFind App"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: isMobile ? "380px" : "470px",
                borderRadius: "30px",
                zIndex: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            />
          </div>

          {/* Right */}
          <div style={{ flex: 1, minWidth: 250 }}>
            {[
              { title: "24/7 Support", text: "Our team is always ready to help.", icon: <FaHeadset /> },
              { title: "Best Price Guarantee", text: "Transparent pricing and discounts.", icon: <FaTag /> },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: isMobile ? "18px" : "25px",
                  marginBottom: "24px",
                  textAlign: "left",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                <div style={{ fontSize: isMobile ? 34 : 40, color: "#FF385C", marginBottom: 12 ,fontFamily: '"Poppins", sans-serif',}}>{r.icon}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{r.title}</h3>
                <p style={{ color: "#555" }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Popular Stays + Carousel of icons ===== */}
      <section
        style={{
          padding: isMobile ? "60px 16px" : "100px 20px",
          background: "#fffafc",
          textAlign: "center",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <span
          style={{
            background: "#ffe6ef",
            color: "#FF385C",
            padding: "6px 16px",
            fontWeight: 600,
            fontSize: 13,
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 12,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          POPULAR STAYS
        </span>

        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: 800,
            marginBottom: "12px",
            color: "#111",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Access 1000+ stays <br /> with just a tap
        </h2>

        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#666",
            marginBottom: isMobile ? "40px" : "50px",
            maxWidth: 700,
            margin: "0 auto 40px",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          From cozy hostels to premium villas, StayFindr helps you discover
          verified stays across India. Book instantly and travel worry-free.
        </p>

        <div style={{ maxWidth: "1200px", margin: "0 auto 40px" }}>
          <Slider {...settings}>
            {roomIcons.map((room, i) => (
              <div key={i} style={{ padding: "0 10px",fontFamily: '"Poppins", sans-serif', }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    padding: "20px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    width: isMobile ? "140px" : "160px",
                    height: isMobile ? "140px" : "160px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {room.icon}
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{room.label}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <p style={{ fontWeight: 600, color: "#111", marginBottom: 20,fontFamily: '"Poppins", sans-serif', }}>
          🎉 Free booking fee for your first 5 stays!
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" ,fontFamily: '"Poppins", sans-serif',}}>
          <a href="#">
            <img
              src={googlePlayImg}
              alt="Google Play"
              style={{
                height: "44px",
                width: "170px",
                background: "#000",
                padding: "10px",
                borderRadius: 12,
                fontFamily: '"Poppins", sans-serif',
              }}
            />
          </a>
          <a href="#">
            <img
              src={appStoreImg}
              alt="App Store"
              style={{
                height: "44px",
                width: "170px",
                background: "#000",
                padding: "10px",
                borderRadius: 12,
                fontFamily: '"Poppins", sans-serif',
              }}
            />
          </a>
        </div>
      </section>

      {/* ===== Download CTA ===== */}
      <section
        style={{
          backgroundImage: `url(${ctbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: isMobile ? "30px 20px" : "70px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "60px auto",
          maxWidth: "1500px",
          color: "#fff",
          height: isMobile ? "auto" : "500px",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1", minWidth: "280px", paddingLeft: isMobile ? 0 : "40px" }}>
          <span
            style={{
              background: "#fff",
              color: "#FF385C",
              fontWeight: 600,
              fontSize: 13,
              padding: "12px 16px",
              borderRadius: 30,
              display: "inline-block",
              marginBottom: 16,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            DOWNLOAD
          </span>
          <h2
            style={{
              fontSize: isMobile ? "28px" : "36px",
              fontWeight: 800,
              marginBottom: 12,
              color: "#fff",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Download StayFindr
            <br />
            for hassle-free <span style={{ color: "#ffe066",fontFamily: '"Poppins", sans-serif', }}>bookings</span>
          </h2>
          <p
            style={{
              fontSize: isMobile ? "0.98rem" : "15px",
              lineHeight: 1.6,
              marginBottom: 22,
              maxWidth: isMobile ? "100%" : "400px",
              color: "#fff",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Find cozy rooms, premium stays, and verified listings across India.
            StayFindr makes travel easy, affordable, and secure.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#">
              <img
                src={googlePlayImg}
                alt="Google Play"
                style={{
                  height: "44px",
                  width: "170px",
                  background: "black",
                  padding: "10px",
                  borderRadius: 12,
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
            </a>
            <a href="#">
              <img
                src={appStoreImg}
                alt="App Store"
                style={{
                  height: "44px",
                  width: "170px",
                  background: "black",
                  padding: "10px",
                  borderRadius: 12,
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
            </a>
          </div>
        </div>

        {/* Right Content (kept empty for now) */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginTop: isMobile ? "20px" : "0",
            fontFamily: '"Poppins", sans-serif',
          }}
        />
      </section>

      {/* ===== Testimonials Section ===== */}
      <section style={{ padding: isMobile ? "60px 16px" : "100px 20px", background: "#fff" ,fontFamily: '"Poppins", sans-serif',}}>
        <h2
          style={{
            textAlign: "center",
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            marginBottom: 12,
            color: "#FF385C",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          💬 What Our Clients Say
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: isMobile ? "36px" : "50px",
            maxWidth: 700,
            margin: "0 auto",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Trusted by thousands of happy travelers across India
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: isMobile ? "12px" : "20px" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  padding: isMobile ? "26px 18px 42px" : "40px 25px 60px",
                  textAlign: "center",
                  minHeight: isMobile ? "280px" : "320px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  fontFamily: '"Poppins", sans-serif',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: isMobile ? "80px" : "90px",
                    height: isMobile ? "80px" : "90px",
                    borderRadius: "50%",
                    margin: "0 auto 12px",
                    border: "4px solid #ff385c",
                    objectFit: "cover",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                />
                <h4 style={{ fontWeight: 700, marginBottom: 12 }}>{t.name}</h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#444",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  <span style={{ fontSize: "2rem", color: "#ff385c",fontFamily: '"Poppins", sans-serif', }}>“</span>
                  {t.text}
                  <span style={{ fontSize: "2rem", color: "#ff385c",fontFamily: '"Poppins", sans-serif',}}>”</span>
                </p>

                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "2rem",
                    color: "#ff385c33",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  ❝
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ✅ App Screenshots Section */}
      <section style={{ padding: isMobile ? "40px 16px" : "0px 20px", textAlign: "center", position: "relative",fontFamily: '"Poppins", sans-serif', }}>
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            marginBottom: 10,
            color: "#ff385c",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Our App Screenshots
        </h2>
        <p style={{ maxWidth: 700, margin: "0 auto 40px", color: "#666",fontFamily: '"Poppins", sans-serif', }}>
          Explore how StayFindr makes booking simple, fast, and secure. From
          search to checkout, every screen is designed for a smooth experience.
        </p>

        <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }}>
          <Slider
            dots={false}
            infinite={true}
            speed={800}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2500}
            arrows={true}
            centerMode={true}
            centerPadding="0"
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {screenshots.map((s, i) => (
              <div key={i}>
                <img
                  src={s}
                  alt={`Screenshot ${i + 1}`}
                  style={{
                    width: isMobile ? "180px" : "200px",
                    height: isMobile ? "360px" : "400px",
                    margin: "0 auto",
                    borderRadius: 20,
                    objectFit: "cover",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    fontFamily: '"Poppins", sans-serif',
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
              height: isMobile ? "430px" : "480px",
              zIndex: 2,
              pointerEvents: "none",
              fontFamily: '"Poppins", sans-serif',
            }}
          />
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faq" style={{ padding: isMobile ? "50px 16px" : "60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: isMobile ? "30px" : "40px",
            color: "#222",
          }}
        >
          ❓ FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: 15,
              padding: isMobile ? 16 : 20,
              borderRadius: 10,
              background: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: '"Poppins", sans-serif',
            }}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div
              style={{
                fontSize: isMobile ? "1.05rem" : "1.2rem",
                fontWeight: 600,
                color: "#ff385c",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {faq.q} <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p style={{ marginTop: 10, color: "#444" ,fontFamily: '"Poppins", sans-serif',}}>{faq.a}</p>
            )}
          </div>
        ))}
      </section>

      {/* ===== Footer / Contact Section ===== */}
      <section id="contact">
        <FooterStay />
      </section>
    </>
  );
};

export default Home;
