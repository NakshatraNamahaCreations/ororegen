import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import ban1 from "../assets/ban3.jpg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/sellmytime-hero.jpg";
import ban4 from "../assets/masterjinew.jpg";
import {
  FaSchool,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const SLIDE_DURATION = 6000;

const slides = [
  {
    image: ban1,
    tag: "Real Estate",
    title: "Thirty Forty",
    slogan:
      "Explore dream properties with smart search tools. Find your perfect home faster than ever before.",
    icon: <img src="/30FortyLogo.png" alt="Thirty Forty" className="banner-logo" />,
    link: "/apps/30forty",
  },
  {
    image: ban2,
    tag: "Hotels & Stays",
    title: "Indianhotels",
    slogan:
      "Book trusted stays worldwide with confidence. Comfort and convenience are always just a click away.",
    icon: (
      <img
        src="/IndianHotelsLogo.png"
        alt="Indianhotels"
        className="banner-logo"
      />
    ),
    link: "/apps/indianhotels",
  },
  {
    image: ban3,
    tag: "Professional Network",
    title: "Sell My Time",
    slogan:
      "Turn your time into new opportunities. Connect, collaborate, and earn while doing what you love.",
    icon: (
      <img
        src="/SellMyTimeLogo.png"
        alt="Sell My Time"
        className="banner-logo"
      />
    ),
    link: "/apps/sellmytime",
  },
  {
    image: ban4,
    tag: "Online Learning",
    title: "Masterji",
    slogan:
      "An online learning hub where users can access diverse courses, develop new skills, and accelerate personal and professional growth.",
    icon: <FaSchool className="banner-icon" />,
    link: "/apps",
  },
];

// Fixed positions so the sparkles don't jump on every render
const sparkles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${8 + (i % 5) * 2}s`,
  size: `${3 + (i % 3) * 2}px`,
}));

export default function Banner() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i) => setIndex((i + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => goTo(index + 1), SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, goTo]);

  const slide = slides[index];

  return (
    <section className="banner">
      {/* Background slides (cross-fade + slow zoom) */}
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`banner-bg ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}
      <div className="banner-shade" aria-hidden="true" />

      {/* Floating gold sparkles */}
      <div className="banner-sparkles" aria-hidden="true">
        {sparkles.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="banner-content" key={slide.title}>
        <span className="banner-eyebrow">
          <span className="banner-eyebrow-line" />
          Oro Regen Companies · {slide.tag}
        </span>

        <div className="banner-heading">
          <div className="banner-icon-wrap">{slide.icon}</div>
          <h1 className="banner-title">{slide.title}</h1>
        </div>

        <p className="banner-slogan">{slide.slogan}</p>

        <div className="banner-actions">
          <Link to={slide.link} className="banner-btn banner-btn--primary">
            Explore App <FaArrowRight />
          </Link>
          <Link to="/contact" className="banner-btn banner-btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        className="banner-arrow banner-arrow--prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        type="button"
        className="banner-arrow banner-arrow--next"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="banner-dots">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            className={`banner-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Show ${s.title}`}
          >
            <span className="banner-dot-label">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="banner-dot-bar">
              <span
                className="banner-dot-fill"
                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
              />
            </span>
          </button>
        ))}
      </div>

      <div className="banner-scroll" aria-hidden="true">
        <span className="banner-scroll-mouse" />
      </div>
    </section>
  );
}
