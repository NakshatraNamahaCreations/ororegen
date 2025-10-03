import React from "react";

const RefundPolicy = () => {
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
        SellMyTime – Refund & Cancellation Policy
      </h1>
      <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
        Effective Date: <strong>[August 5, 2025]</strong>
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>1. Client Cancellations</h2>
      <ul>
        <li>More than 24 hours before session – <strong>Full refund</strong>.</li>
        <li>Within 24 hours of session – <strong>50% refund</strong>.</li>
        <li>After session start/no-show – <strong>No refund</strong>.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>2. Consultant Cancellations</h2>
      <ul>
        <li>If a consultant cancels, the client receives a <strong>100% refund</strong>.</li>
        <li>Repeated cancellations may result in consultant account suspension.</li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#000" }}>3. Session Rescheduling</h2>
      <p>
        Clients and consultants may reschedule by mutual agreement (before the booked time).
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>4. Refund Processing</h2>
      <p>
        Refunds will be processed within <strong>7–14 business days</strong> via the
        original payment method.
      </p>

      <h2 style={{ marginTop: "30px", color: "#000" }}>5. Exceptional Circumstances</h2>
      <p>Full refunds may be granted if:</p>
      <ul>
        <li>Fraudulent or misrepresented consultant profiles.</li>
        <li>Platform technical issues preventing the session.</li>
        <li>Verified emergencies (medical, natural disasters, etc.).</li>
      </ul>
    </div>
  );
};

export default RefundPolicy;
