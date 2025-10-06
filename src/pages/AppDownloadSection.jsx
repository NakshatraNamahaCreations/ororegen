import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./AppDownloadSection.css";

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <div className="app-download-content">
        <h2>
          Download our App Today & <br />
          Experience Endless Possibilities
        </h2>
        <p>and get started with a free 1 month trial for your business</p>

        <div className="app-buttons">
          <a
            href="#"
            className="store-btn google-play"
            aria-label="Get in Google Play"
          >
            <FaGooglePlay className="store-icon" />
            <div className="store-text">
              <small>Get in</small>
              <span>Google Play</span>
            </div>
          </a>

          <a
            href="#"
            className="store-btn apple-store"
            aria-label="Get in Apple Store"
          >
            <FaApple className="store-icon" />
            <div className="store-text">
              <small>Get in</small>
              <span>Apple Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
