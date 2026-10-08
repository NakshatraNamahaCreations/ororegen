import React from "react";
import "./StayFinder.css";
import stayImg from "../assets/indianhotels-section.webp";
import { FaGooglePlay, FaArrowRight } from "react-icons/fa";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ororegencompanies.stayfindr&hl=en_IN";

const StayFinder = () => {
  return (
    <section className="stayfinder">
      <div className="stayfinder-content">
        {/* Left Text */}
        <div className="stayfinder-left">
          <h2 className="sf-title">
            Indianhotels – <span>Travel & Short-Stay Rental App</span>
          </h2>
          <p className="sf-description">
            Indianhotels is a next-gen travel and accommodation app that connects
            explorers with hosts offering unique stays. Whether it’s a cozy
            apartment, a luxury villa, or a budget-friendly homestay, Indianhotels
            makes booking the right space effortless.
          </p>

          <h3 className="sf-subtitle">🔑 Key Highlights</h3>
          <ul className="sf-list">
            <li>
              <strong>Diverse Stays</strong> – From urban getaways and
              countryside cottages to premium villas and budget hostels.
            </li>
            <li>
              <strong>Instant Booking</strong> – Easy reservation system with
              secure payment gateways.
            </li>
            <li>
              <strong>Personalized Search</strong> – Filters for location,
              budget, amenities, and property type to match every traveler’s
              needs.
            </li>
            <li>
              <strong>Host Empowerment</strong> – Simple listing process for
              hosts to share their spaces and earn effortlessly.
            </li>
            <li>
              <strong>Secure & Reliable</strong> – Verified hosts, guest reviews,
              and 24/7 support ensure a worry-free experience.
            </li>
          </ul>

          <div className="sf-actions">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sf-download-btn"
            >
              <FaGooglePlay className="sf-btn-icon" />
              <span>Download on Google Play</span>
            </a>
            <a href="/apps/indianhotels" className="sf-explore-btn">
              Explore Indianhotels <FaArrowRight />
            </a>
          </div>

          {/* <h3 className="sf-subtitle">🌟 Vision</h3>
          <p className="sf-description">
            Indianhotels envisions building a community-driven travel ecosystem
            where stays are more than just accommodation—they’re experiences. By
            connecting hosts and travelers, it makes every journey unique,
            personal, and memorable.
          </p> */}
        </div>

        {/* Right Image */}
        <div className="stayfinder-right">
          <img src={stayImg} alt="Indianhotels" />
        </div>
      </div>
    </section>
  );
};

export default StayFinder;
