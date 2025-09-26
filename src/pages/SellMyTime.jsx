import React from "react";
import "./SellMyTime.css";
import sellImg from "../assets/mobile2.png"; // replace with your actual image

const SellMyTime = () => {
  return (
    <section className="sellmytime">
      <div className="sellmytime-content">
        {/* Left Image */}
        <div className="sellmytime-left">
          <img src={sellImg} alt="SellMyTime App" />
        </div>

        {/* Right Text */}
        <div className="sellmytime-right">
          <h2 className="smt-title">🕒 SellMyTime – <span>Consultancy & Expert Marketplace App</span></h2>
          <p className="smt-description">
            SellMyTime is a unique platform where individuals and professionals can share their time, 
            skills, and expertise with those who need them. Instead of traditional job models, 
            SellMyTime focuses on time-based services, making it easy for anyone to book, connect, 
            and learn from experts across different fields.
          </p>

          <h3 className="smt-subtitle">🔑 Key Highlights</h3>
          <ul className="smt-list">
            <li><strong>Time as Value</strong> – Professionals list their availability by the hour, and users can instantly book their time.</li>
            <li><strong>Diverse Expertise</strong> – From consultants and business mentors to fitness coaches and creative experts, a wide range of services is available.</li>
            <li><strong>Seamless Booking</strong> – Built-in scheduling ensures smooth time management for both users and providers.</li>
            <li><strong>Transparent Pricing</strong> – Pay only for the time you book—simple, flexible, and fair.</li>
            <li><strong>Trust & Security</strong> – Verified profiles, ratings, and reviews help users choose the right expert.</li>
          </ul>

          <h3 className="smt-subtitle">🌟 Vision</h3>
          <p className="smt-description">
            SellMyTime bridges the gap between those who need guidance and those willing to share their 
            expertise, creating a flexible, on-demand knowledge economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellMyTime;
