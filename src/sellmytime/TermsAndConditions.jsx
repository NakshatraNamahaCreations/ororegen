import React from "react";

const TermsAndConditions = () => {
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
        NetworkX – Terms & Conditions
      </h1>
      <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
        Effective Date: <strong>[August 5, 2025]</strong>
      </p>

      <p>
        Welcome to <strong>NetworkX</strong>. By using our platform, you agree
        to these Terms & Conditions.
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>1. Definitions</h2>
      <ul>
        <li><strong>Platform</strong> – The NetworkX app/website.</li>
        <li><strong>User</strong> – Any registered individual (Consultant or Client).</li>
        <li><strong>Consultant/Expert</strong> – Professionals offering their time/skills on the platform.</li>
        <li><strong>Client</strong> – Users booking consultant sessions.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>2. User Obligations</h2>
      <ul>
        <li>Provide accurate details during registration.</li>
        <li>Use the platform legally and ethically.</li>
        <li>Respect session timings and agreements.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>3. Bookings & Payments</h2>
      <ul>
        <li>All bookings must be completed through NetworkX.</li>
        <li>Payment is processed securely via third-party gateways.</li>
        <li>Platform service fees may apply (displayed before booking).</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>4. Consultant Responsibilities</h2>
      <ul>
        <li>Maintain accurate profile information and hourly availability.</li>
        <li>Provide genuine expertise and honor booked sessions.</li>
        <li>Refrain from soliciting off-platform transactions.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>5. Client Responsibilities</h2>
      <ul>
        <li>Provide clear requirements when booking.</li>
        <li>Attend scheduled sessions on time.</li>
        <li>Not misuse consultant advice for illegal purposes.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>6. Cancellations & Refunds</h2>
      <p>
        Governed by the <a href="/refund-policy" style={{ color: "#ff4500" }}>Refund & Cancellation Policy</a>.
      </p>
      <p>Refunds are processed to the original payment method.</p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>7. Limitation of Liability</h2>
      <p>
        NetworkX is a facilitator. We are not responsible for the quality of
        consultant advice, nor for disputes between users.
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>8. Dispute Resolution</h2>
      <p>
        Users must first reach out to our support team. If unresolved, disputes
        are subject to <strong>[City, Country]</strong> jurisdiction.
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>9. Termination</h2>
      <p>
        We reserve the right to suspend accounts violating these terms.
      </p>
    </div>
  );
};

export default TermsAndConditions;
