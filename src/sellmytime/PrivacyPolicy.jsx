import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1000px",
        margin: "100px auto",
        padding: "30px",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#ff4500" }}>
       NetworkX – Privacy Policy
      </h1>
      <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
        Effective Date: <strong>[August 5, 2025]</strong>
      </p>

      <p>
        At <strong>NetworkX</strong>, we value your privacy and are committed
        to safeguarding your personal information. This Privacy Policy outlines
        how we collect, use, and protect data when you use our platform.
      </p>

      <h2 style={{ color: "#000", marginTop: "30px" }}>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email, phone number,
          payment details, professional verification documents.
        </li>
        <li>
          <strong>Usage Data:</strong> Device info, IP address, geolocation, app
          activity.
        </li>
        <li>
          <strong>Booking Information:</strong> Session dates, consultant
          profiles, payment history, and communication between users.
        </li>
      </ul>

      <h2 style={{ color: "#000", marginTop: "30px" }}>2. How We Use Information</h2>
      <ul>
        <li>To enable booking of consultancy services and process payments.</li>
        <li>To verify consultants and maintain a safe marketplace.</li>
        <li>To improve our services, provide support, and send updates/offers.</li>
        <li>To resolve disputes, monitor fraud, and enforce platform policies.</li>
      </ul>

      <h2 style={{ color: "#000", marginTop: "30px" }}>3. Sharing of Data</h2>
      <p>We may share information:</p>
      <ul>
        <li>With consultants/clients to complete bookings.</li>
        <li>With trusted third parties (payment gateways, verification tools).</li>
        <li>When required by law, court order, or government authority.</li>
      </ul>

      <h2 style={{ color: "#000", marginTop: "30px" }}>4. Data Security</h2>
      <p>
        We apply encryption and access controls. However, no system can guarantee{" "}
        <strong>100% security</strong>.
      </p>

      <h2 style={{ color: "#000", marginTop: "30px" }}>5. Your Rights</h2>
      <ul>
        <li>Access, modify, or delete your personal data.</li>
        <li>Opt out of marketing emails.</li>
        <li>Request data export or withdraw consent.</li>
      </ul>

      <h2 style={{ color: "#000", marginTop: "30px" }}>6. Cookies & Tracking</h2>
      <p>
        We use cookies for analytics, personalization, and fraud prevention.
      </p>

      <h2 style={{ color: "#000", marginTop: "30px" }}>7. Updates to Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. Changes will be notified
        within the app.
      </p>

      <p style={{ marginTop: "40px", fontStyle: "italic" }}>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:support@networkx.com" style={{ color: "#ff4500" }}>
          support@networkx.com
        </a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
