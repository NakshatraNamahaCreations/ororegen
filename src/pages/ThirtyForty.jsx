import React from "react";
import "./ThirtyForty.css";
import propertyImg from "../assets/30forty.png";

const ThirtyForty = () => {
  return (
    <section className="thirtyforty">
      <div className="tf-heading">
        <h1 className="tf-main-title">Explore the Oro-Regen Universe</h1>
        <p className="tf-main-subtitle">
          30Forty, Stay Finder, SellMyTime, and Masterji — four powerful apps
          under one umbrella, built to shape the future of how we live, work,
          and learn.
        </p>
      </div>

      <div className="tf-content">
        <div className="thirtyforty-left">
          <img src={propertyImg} alt="30Forty Property" />
        </div>

        <div className="thirtyforty-right">
          <h2 className="tf-title">
            30Forty – <span>Smart Real Estate & Property Marketplace</span>
          </h2>

          <p className="tf-description">
            30Forty is a modern property discovery platform that simplifies the
            way people buy, sell, and rent properties. Designed for today’s
            fast-paced real estate market, 30Forty connects property owners,
            agents, and seekers with ease and transparency.
          </p>

          <div className="tf-card">
            <h3 className="tf-subtitle">🔑 Key Highlights</h3>
            <ul className="tf-list">
              <li>
                <strong>Smart Property Listings</strong> – Discover verified
                properties, from plots and apartments to villas and commercial spaces.
              </li>
              <li>
                <strong>Location Intelligence</strong> – Advanced filters and maps
                make it easy to explore neighborhoods and compare properties.
              </li>
              <li>
                <strong>Seamless Transactions</strong> – Smooth booking and
                inquiry process with built-in communication tools.
              </li>
              <li>
                <strong>Transparent Information</strong> – Get complete details —
                pricing, amenities, and legal information — at your fingertips.
              </li>
              <li>
                <strong>Trust & Security</strong> – Verified listings and trusted
                agents to ensure safe property dealings.
              </li>
            </ul>
          </div>

          <div className="tf-card vision">
            {/* <h3 className="tf-subtitle">🌟 Vision</h3>
            <p className="tf-description">
              30Forty redefines property discovery by making it smarter, faster,
              and more transparent. It creates a trusted digital marketplace
              where every seeker finds their perfect space and every owner
              connects with genuine buyers or tenants.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirtyForty;
