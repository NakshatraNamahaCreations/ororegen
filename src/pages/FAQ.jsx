

import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "1. What is Oro Regen Company?",
    answer:
      "Oro Regen Company is a technology-driven firm creating innovative mobile apps across hospitality, real estate, consultancy, and education sectors.",
  },
  {
    question: "2. What apps does Oro Regen offer?",
    answer:
      "We currently have four apps under our umbrella: StayFindr – A travel & stay booking app like Airbnb, 30forty – A real estate discovery & property management app, Networkx – A consultancy & expert marketplace app, Masterji – A learning & courses platform.",
  },
  {
    question: "3. How are Oro Regen apps different from others?",
    answer:
      "Each of our apps is designed with a user-first approach, focusing on simplicity, trust, and real-world problem-solving.",
  },
  {
    question: "4. Is Stay Findr available worldwide?",
    answer:
      "Currently, Stay Findr is expanding city by city. Our goal is to scale across India first and then move to international markets.",
  },
  {
    question: "5. Can I list my property on the 30forty app?",
    answer:
      "Yes! Property owners, developers, and brokers can list properties directly on the app for greater visibility and seamless management.",
  },
  {
    question: "6. How does Networkx work?",
    answer:
      "Networkx connects consultants and experts with individuals or businesses seeking guidance. You can register, list your expertise, and start monetizing your time.",
  },
  {
    question: "7. Are the courses on Masterji certified?",
    answer:
      "Yes, Masterji provides both skill-based and professional courses. Selected programs also offer certificates upon completion.",
  },
  {
    question: "8. Are Oro Regen apps secure?",
    answer:
      "Absolutely. We prioritize data privacy and security with encrypted transactions, verified listings, and transparent systems.",
  },
  {
    question: "9. How can I contact customer support?",
    answer: "You can reach us anytime at support@ororegen.com.",
  },
  {
    question: "10. How do I stay updated about new features?",
    answer:
      "Follow our official website and social media pages for updates on launches, features, and offers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="faq-subtitle">ASK SOMETHING</p>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
