// import React from "react";
// import "./StayFinder.css";
// import stayImg from "../assets/stayfinder.png"; // replace with your image

// const StayFinder = () => {
//   return (
//     <section className="stayfinder">
//       <div className="stayfinder-content">
//         {/* Left Text */}
//         <div className="stayfinder-left">
//           <h2 className="sf-title">
//             Stay Finder – <span>Travel & Short-Stay Rental App</span>
//           </h2>
//           <p className="sf-description">
//             Stay Finder is a next-gen travel and accommodation app that connects explorers with 
//             hosts offering unique stays. Whether it’s a cozy apartment, a luxury villa, or a 
//             budget-friendly homestay, Stay Finder makes booking the right space effortless.
//           </p>

//           <h3 className="sf-subtitle">🔑 Key Highlights</h3>
//           <ul className="sf-list">
//             <li><strong>Diverse Stays</strong> – From urban getaways and countryside cottages to premium villas and budget hostels.</li>
//             <li><strong>Instant Booking</strong> – Easy reservation system with secure payment gateways.</li>
//             <li><strong>Personalized Search</strong> – Filters for location, budget, amenities, and property type to match every traveler’s needs.</li>
//             <li><strong>Host Empowerment</strong> – Simple listing process for hosts to share their spaces and earn effortlessly.</li>
//             <li><strong>Secure & Reliable</strong> – Verified hosts, guest reviews, and 24/7 support ensure a worry-free experience.</li>
//           </ul>

//           <h3 className="sf-subtitle">🌟 Vision</h3>
//           <p className="sf-description">
//             Stay Finder envisions building a community-driven travel ecosystem where stays are more 
//             than just accommodation—they’re experiences. By connecting hosts and travelers, it makes 
//             every journey unique, personal, and memorable.
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="stayfinder-right">
//           <img src={stayImg} alt="Stay Finder" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StayFinder;
import React from "react";
import "./StayFinder.css";
import stayImg from "../assets/stayfinder.png"; // replace with your image

const StayFinder = () => {
  return (
    <div>
      {/* Each section now has an ID for navigation */}
      <section id="about" className="stayfinder" style={{ paddingTop: "120px" }}>
        <div className="stayfinder-content">
          {/* Left Text */}
          <div className="stayfinder-left">
            <h2 className="sf-title">
              Stay Finder – <span>Travel & Short-Stay Rental App</span>
            </h2>
            <p className="sf-description">
              Stay Finder is a next-gen travel and accommodation app that connects explorers
              with hosts offering unique stays. Whether it’s a cozy apartment, a luxury villa,
              or a budget-friendly homestay, Stay Finder makes booking the right space effortless.
            </p>
          </div>

          {/* Right Image */}
          <div className="stayfinder-right">
            <img src={stayImg} alt="Stay Finder" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="sf-features">
        <div className="sf-container">
          <h3 className="sf-subtitle">🔑 Key Highlights</h3>
          <ul className="sf-list">
            <li>
              <strong>Diverse Stays</strong> – From urban getaways and countryside cottages
              to premium villas and budget hostels.
            </li>
            <li>
              <strong>Instant Booking</strong> – Easy reservation system with secure payment gateways.
            </li>
            <li>
              <strong>Personalized Search</strong> – Filters for location, budget, amenities,
              and property type to match every traveler’s needs.
            </li>
            <li>
              <strong>Host Empowerment</strong> – Simple listing process for hosts to share
              their spaces and earn effortlessly.
            </li>
            <li>
              <strong>Secure & Reliable</strong> – Verified hosts, guest reviews, and 24/7
              support ensure a worry-free experience.
            </li>
          </ul>
        </div>
      </section>

      {/* VISION SECTION */}
      <section id="vision" className="sf-vision">
        <div className="sf-container">
          <h3 className="sf-subtitle">🌟 Vision</h3>
          <p className="sf-description">
            Stay Finder envisions building a community-driven travel ecosystem where stays are
            more than just accommodation—they’re experiences. By connecting hosts and travelers,
            it makes every journey unique, personal, and memorable.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="sf-contact">
        <div className="sf-container">
          <h3 className="sf-subtitle">📞 Contact Us</h3>
          <p className="sf-description">
            Have questions or feedback? Get in touch with us — we’re happy to help you start
            your Stay Finder journey!
          </p>

          <form className="sf-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default StayFinder;
