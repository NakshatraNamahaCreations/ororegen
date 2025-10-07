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
      fontFamily: "'Poppins', sans-serif", // ✅ Added Poppins font
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        StayFindr – Privacy Policy
      </h1>
      <p>
        <strong>Effective Date:</strong> [October: 06-10-2025]
      </p>
      <p>
        StayFindr (“we,” “our,” “us”) respects your privacy and is committed
        to protecting the personal information you share with us when using our
        platform, mobile application, or website.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, payment details, and ID verification documents (where
          required).
        </li>
        <li>
          <strong>Usage Data:</strong> Device type, IP address, location, and
          browsing activity on our platform.
        </li>
        <li>
          <strong>Booking Information:</strong> Property details, stay dates,
          payment history, and communication between hosts and guests.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To facilitate bookings and payments between hosts and guests.</li>
        <li>To verify user and host identities and enhance platform security.</li>
        <li>To provide customer support and resolve disputes.</li>
        <li>
          To improve platform features, personalize your experience, and send
          updates or promotional offers.
        </li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We may share information:</p>
      <ul>
        <li>With hosts/guests to complete bookings.</li>
        <li>
          With third-party service providers (payment gateways, verification
          services).
        </li>
        <li>If required by law, regulation, or government authorities.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement strict measures to protect your data. However, no platform
        can guarantee 100% security.
      </p>

      <h2>5. Your Rights</h2>
      <ul>
        <li>Access, update, or delete your personal data.</li>
        <li>Opt out of marketing communications.</li>
        <li>Request data portability or withdrawal of consent.</li>
      </ul>

      <h2>6. Cookies & Tracking</h2>
      <p>
        StayFindr uses cookies and similar technologies for analytics and
        improving user experience.
      </p>

      <h2>7. Updates to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        notified on the platform.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
