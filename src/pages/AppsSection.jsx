import React from "react";
import "./AppsSection.css";
import { FaClock, FaChalkboardTeacher } from "react-icons/fa";

const AppsSection = () => {
  return (
    <section className="apps-section">
      <div className="apps-container">
        <h2 className="apps-title">Welcome to ORO-REGEN</h2>
        <p className="apps-subtitle">
          Explore our suite of powerful applications designed to simplify your life.
          From property search to education, services, and beyond — we’ve got you covered.
        </p>

        <div className="apps-grid">
          <div className="app-card">
            <img src="/30FortyLogo.png" alt="30Forty" className="app-logo" />
            <h3>30Forty</h3>
            <p>Find and explore properties with ease using our smart real-estate solution.</p>
          </div>

          <div className="app-card">
            <img src="/IndianHotelsLogo.png" alt="Indianhotels" className="app-logo" />
            <h3>Indianhotels</h3>
            <p>Discover and book your perfect stay with trusted hosts worldwide.</p>
          </div>

          <div className="app-card">
            <FaClock className="app-icon" />
            <h3>NetworkX</h3>
            <p>Connect, collaborate, and monetize your time effectively.</p>
          </div>

          <div className="app-card">
            <FaChalkboardTeacher className="app-icon" />
            <h3>Masterji</h3>
            <p>Empowering education through personalized teaching and learning tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
