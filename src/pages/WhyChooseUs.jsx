import React from "react";
import "./WhyChooseUs.css";
import phoneMockup from "../assets/mobile.png"; // replace with your phone mockup image
import { FaLayerGroup, FaCheckCircle, FaUserFriends, FaRocket, FaHeart } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="whychoose">
      <h2 className="whychoose-title">Why Choose Us</h2>
      <p className="whychoose-subtitle">
        Oro-Regen delivers apps designed for travel, real estate, learning, and services — all built with trust and innovation.
      </p>

      <div className="whychoose-container">
        {/* Left Side */}
        <div className="whychoose-left">
          <div className="whychoose-card">
            <FaLayerGroup className="why-icon" />
            <h3>All-in-One Solutions</h3>
            <p>We bring multiple apps under one umbrella, covering travel, real estate, learning, and professional services.</p>
          </div>

          <div className="whychoose-card">
            <FaCheckCircle className="why-icon" />
            <h3>Trusted Expertise</h3>
            <p>Each app is built with domain-specific knowledge, ensuring you get reliable and high-quality services.</p>
          </div>
        </div>

        {/* Phone Image */}
        <div className="whychoose-center">
          <img src={phoneMockup} alt="Why Choose Us" />
        </div>

        {/* Right Side */}
        <div className="whychoose-right">
          <div className="whychoose-card">
            <FaUserFriends className="why-icon" />
            <h3>User-Friendly Experience</h3>
            <p>Simple, intuitive, and modern designs make it easy for anyone to book, learn, or connect.</p>
          </div>

        

          <div className="whychoose-card">
            <FaHeart className="why-icon" />
            <h3>Customer-Centric Approach</h3>
            <p>Your satisfaction is at the heart of what we do — we listen, adapt, and improve based on your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
