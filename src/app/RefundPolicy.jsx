import React from "react";

const RefundPolicy = () => {
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
        StayFindr – Refund & Cancellation Policy
      </h1>
      <p>
        <strong>Effective Date:</strong> [October: 06-10-2025]
      </p>

      <h2>1. Guest Cancellations</h2>
      <ul>
        <li>
          <strong>Flexible:</strong> Full refund if canceled{" "}
          <strong>48 hours</strong> before check-in.
        </li>
        <li>
          <strong>Moderate:</strong> 50% refund if canceled{" "}
          <strong>24 hours</strong> before check-in.
        </li>
        <li>
          <strong>Strict:</strong> No refund for cancellations within{" "}
          <strong>24 hours</strong> of check-in.
        </li>
      </ul>
      <p>
        (Hosts can choose which cancellation policy applies to their property.
        It will be displayed before booking.)
      </p>

      <h2>2. Host Cancellations</h2>
      <p>
        If a host cancels a confirmed booking, guests receive a{" "}
        <strong>100% refund</strong>.
      </p>
      <p>Frequent host cancellations may result in account suspension.</p>

      <h2>3. No-Shows</h2>
      <p>
        Guests who fail to check in without notice are{" "}
        <strong>not eligible</strong> for refunds.
      </p>

      <h2>4. Refund Processing</h2>
      <p>
        Refunds will be processed within{" "}
        <strong>7–14 business days</strong> via the original payment method.
      </p>

      <h2>5. Exceptional Circumstances</h2>
      <p>Full refunds may be granted in cases of:</p>
      <ul>
        <li>Natural disasters or emergencies preventing the stay.</li>
        <li>Fraudulent or misleading property listings.</li>
        <li>
          Safety or health hazards reported by the guest (verified by Stay
          Finder team).
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicy;
