

import React, { useState, useEffect } from "react";
import "./Banner.css";
import ban1 from "../assets/ban3.jpg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/ban1.jpg";
import ban4 from "../assets/ban4.jpg";
import { FaHome, FaHotel, FaClock, FaSchool } from "react-icons/fa";

const banners = [ban1, ban2, ban3, ban4];

const texts = [
  {
    title: "30forty",
    slogan:
      "Explore dream properties with smart search tools. Find your perfect home faster than ever before.",
    icon: <FaHome className="banner-icon" />,
  },
  {
    title: "Stay Finder",
    slogan:
      "Book trusted stays worldwide with confidence. Comfort and convenience are always just a click away.",
    icon: <FaHotel className="banner-icon" />,
  },
  {
    title: "NETWORKX",
    slogan:
      "Turn your time into new opportunities. Connect, collaborate, and earn while doing what you love.",
    icon: <FaClock className="banner-icon" />,
  },
  {
    title: "Masterji",
    slogan:
      "An online learning hub where users can access diverse courses, develop new skills, and accelerate personal and professional growth.",
    icon: <FaSchool className="banner-icon" />,
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${banners[index]})` }}
    >
      <div className="banner-overlay">
        <div className="banner-icon-wrap">{texts[index].icon}</div>
        <h1 key={texts[index].title} className="banner-title">
          {texts[index].title}
        </h1>
        <p key={texts[index].slogan} className="banner-slogan">
          {texts[index].slogan}
        </p>
      </div>
    </section>
  );
}
