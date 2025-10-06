import React from "react";
import "./WhoWeAre.css";
import teamImg from "../assets/img2.png";

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        {/* Left Illustration */}
        <div className="who-image">
          <img src={teamImg} alt="Team" />
        </div>

        {/* Right Content */}
        <div className="who-content">
          <h2 className="who-title">WHO WE ARE</h2>
          <h2 className="who-subtitle">
            Ideas to Impact, One Platform at a Time.
          </h2>
          <p>
            Oro Regen Company is a next-generation technology firm committed to
            building platforms that solve real-world challenges. Our focus is on
            innovation, accessibility, and trust, creating solutions that bridge
            gaps between people, services, and opportunities.
          </p>
          <p>
            With expertise in digital ecosystems, we aim to deliver scalable,
            user-friendly, and future-ready platforms that bring businesses and
            individuals closer than ever before.
          </p>
          <p>
            We believe in the power of ideas—and our apps are designed to bring
            those ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
