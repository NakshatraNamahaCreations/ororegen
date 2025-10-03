import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#d1001f" }}>
        Privacy Policy
      </h1>
      <p>
        <strong>Effective Date:</strong> August 5, 2025
      </p>
      <p>
        <strong>Company Name:</strong> Thirty Forty
      </p>
      <p>
        <strong>Website:</strong> <a href="https://www.30forty.in">www.30forty.in</a>
      </p>

      <p>
        Your privacy is important to us. This Privacy Policy explains how Thirty
        Forty collects, uses, and protects your information.
      </p>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>1. What We Collect</h2>
      <ul>
        <li>Name, email, and phone number (voluntarily submitted)</li>
        <li>Listing details and location (if enabled)</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>2. What We Don’t Collect</h2>
      <ul>
        <li>
          We do not store or process payment details, card numbers, UPI IDs, or
          banking information.
        </li>
        <li>No contact data is stored without explicit consent.</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>3. How We Use Your Data</h2>
      <ul>
        <li>To allow posting and searching of listings</li>
        <li>To send service-related communication (with consent)</li>
        <li>To improve overall user experience</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>4. Data Sharing</h2>
      <ul>
        <li>We do not sell or share data for third-party marketing.</li>
        <li>Contact details are shared only with mutual consent.</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>5. Data Security</h2>
      <p>
        We implement industry-standard security measures and encryption
        technologies to protect your data.
      </p>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>6. Your Rights</h2>
      <ul>
        <li>You can request data deletion at any time.</li>
        <li>Opt-out of location tracking and marketing communication.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
