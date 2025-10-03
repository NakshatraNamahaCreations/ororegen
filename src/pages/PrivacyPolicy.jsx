import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        lineHeight: "1.6",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Oro Regen – Privacy Policy
      </h1>
      <p>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p>
        At Oro Regen Pvt. Ltd., we respect your privacy and are committed to
        protecting your personal data across our website and apps (Stay Finder,
        30Forty, SellMyTime, and Masterji).
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email, phone number,
          payment details, government ID (for verification, if required).
        </li>
        <li>
          <strong>Usage Data:</strong> Device info, IP address, geolocation,
          browsing patterns.
        </li>
        <li>
          <strong>Platform-Specific Data:</strong> Booking details, session
          history, course enrollments, and transaction records.
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>To provide access to our apps and services.</li>
        <li>To process bookings, payments, and course enrollments.</li>
        <li>To improve platform features and personalize user experience.</li>
        <li>
          To send service updates, offers, and promotional material (opt-out
          available).
        </li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          Third-party service providers (payment processors, cloud storage,
          verification services).
        </li>
        <li>
          Hosts, consultants, or tutors, for the purpose of fulfilling
          bookings.
        </li>
        <li>Legal/government authorities when required by law.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We use encryption and secure storage methods to safeguard data. However,
        no online system is completely immune from breaches.
      </p>

      <h2>5. User Rights</h2>
      <ul>
        <li>Access, correct, or delete your personal data.</li>
        <li>
          Request restriction of processing or opt out of marketing
          communications.
        </li>
        <li>Request data portability where applicable.</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Our website and apps use cookies and tracking tools to improve user
        experience and gather analytics.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our platforms may contain links to external sites. Oro Regen is not
        responsible for the privacy practices of these third parties.
      </p>

      <h2>8. Updates to Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Users will be notified
        of major changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
