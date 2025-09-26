import React from "react";
import "./Masterji.css";
import masterjiImg from "../assets/masterji.png"; // replace with your actual image

const Masterji = () => {
  return (
    <section className="masterji">
      <div className="masterji-content">
        {/* Left Text */}
        <div className="masterji-left">
          <h2 className="mj-title">📚 Masterji – <span>Learning & Courses App</span></h2>
          <p className="mj-description">
            Masterji is an interactive learning platform where experts and teachers share their
            knowledge through structured courses, live classes, and workshops. It is built to make
            learning accessible, flexible, and skill-driven.
          </p>

          <h3 className="mj-subtitle">🔑 Key Highlights</h3>
          <ul className="mj-list">
            <li><strong>Wide Course Library</strong> – From academic tutoring and coding to design, fitness, and personal development.</li>
            <li><strong>Live & Recorded Sessions</strong> – Learn at your own pace or join live classes for real-time interaction.</li>
            <li><strong>Expert Tutors</strong> – Verified professionals and educators with proven expertise.</li>
            <li><strong>Flexible Learning</strong> – Course access anytime, anywhere—on mobile or web.</li>
            <li><strong>Progress Tracking</strong> – Assignments, quizzes, and certification to ensure measurable growth.</li>
          </ul>

          <h3 className="mj-subtitle">🌟 Vision</h3>
          <p className="mj-description">
            Masterji aims to democratize learning by connecting learners with the right mentors and
            resources. Its mission is to create a global knowledge-sharing community where education
            goes beyond classrooms and empowers every individual to achieve more.
          </p>
        </div>

        {/* Right Image */}
        <div className="masterji-right">
          <img src={masterjiImg} alt="Masterji App" />
        </div>
      </div>
    </section>
  );
};

export default Masterji;
