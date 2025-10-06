import React from "react";
import "./WhyChooseUs.css";
import { FaLayerGroup, FaCheckCircle, FaUserFriends, FaRocket } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLayerGroup />,
      title: "All-in-One Solutions",
      desc: "We bring multiple apps under one umbrella — travel, real estate, learning, and professional services.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Trusted Expertise",
      desc: "Each app is built with domain-specific knowledge, ensuring reliability and high-quality service.",
    },
    {
      icon: <FaUserFriends />,
      title: "User-Friendly",
      desc: "Simple, modern, and intuitive designs make it easy for anyone to book, learn, or connect effortlessly.",
    },
    {
      icon: <FaRocket />,
      title: "Customer-Centric",
      desc: "Your satisfaction drives us — we listen, adapt, and evolve based on your real-world needs.",
    },
  ];

  return (
    <section className="whychoose">
      <p className="feature-subtitle">Feature List</p>
      <h2 className="whychoose-title">Oro-Regen Providing You Best Features</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
