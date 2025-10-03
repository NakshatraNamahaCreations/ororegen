import React from "react";

const RefundPolicy = () => {
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
        Refund & Cancellation Policy
      </h1>

      <p>
        <strong>Effective Date:</strong> August 5, 2025
      </p>
      <p>
        <strong>Company Name:</strong> Thirty Forty
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href="https://www.30forty.in" target="_blank" rel="noopener noreferrer">
          www.30forty.in
        </a>
      </p>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>1. Non-Refundable Services</h2>
      <p>
        All listing fees, promotional upgrades, and service charges are{" "}
        <strong>non-refundable</strong> once listings are activated.
      </p>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>2. Cancellation Before Listing</h2>
      <ul>
        <li>Refunds may be issued before listings go live.</li>
        <li>Processing charges will be deducted from the refund amount.</li>
        <li>All cancellations are subject to approval.</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>3. No Guarantee of Deal Closure</h2>
      <ul>
        <li>We are not liable for unsuccessful responses or deal closures.</li>
        <li>No refunds will be issued for unsuccessful deals.</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>4. Refund Process</h2>
      <ul>
        <li>Approved refunds will be processed within <strong>7–10 business days</strong>.</li>
        <li>Refunds will be made via the original payment method used during the transaction.</li>
      </ul>

      <h2 style={{ color: "#d1001f", marginTop: "30px" }}>5. How to Request a Refund</h2>
      <p>
        Email your refund request to{" "}
        <a href="mailto:info@30forty.in" style={{ color: "#d1001f", fontWeight: "600" }}>
          info@30forty.in
        </a>
        .
      </p>
      <p>
        Please include the following details:
        <ul>
          <li>Your full name</li>
          <li>Listing ID</li>
          <li>Payment reference</li>
          <li>Reason for the refund request</li>
        </ul>
      </p>
    </div>
  );
};

export default RefundPolicy;
