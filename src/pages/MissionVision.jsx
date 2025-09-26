import React from "react";
import "./MissionVision.css";
import { FaBullseye, FaEye, FaLightbulb, FaHandshake, FaUsers, FaStar, FaChartLine } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        {/* Mission & Vision */}
        <h2 className="mv-title">🎯 Mission & Vision</h2>
        <div className="mv-grid">
          <div className="mv-card">
            <FaBullseye className="mv-icon" />
            <h3>Our Mission</h3>
            <p>
              To design and deliver smart digital platforms that empower people
              to live, learn, and grow seamlessly.
            </p>
          </div>
          <div className="mv-card">
            <FaEye className="mv-icon" />
            <h3>Our Vision</h3>
            <p>
              To be a global leader in innovative app ecosystems, creating
              impactful solutions that transform industries and enhance everyday life.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="mv-title">💎 Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h4>Innovation First</h4>
            <p>Constantly pushing boundaries with creative solutions.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h4>Trust & Transparency</h4>
            <p>Building reliable platforms with integrity.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h4>User-Centric Design</h4>
            <p>Every feature crafted for real people and real needs.</p>
          </div>
          <div className="value-card">
            <FaStar className="value-icon" />
            <h4>Excellence in Execution</h4>
            <p>Quality, performance, and reliability in every product.</p>
          </div>
          <div className="value-card">
            <FaChartLine className="value-icon" />
            <h4>Growth Mindset</h4>
            <p>Helping individuals and businesses scale to new heights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
