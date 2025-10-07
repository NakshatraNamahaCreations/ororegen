import React from "react";
import HeaderThirtyForty from "./HeaderThirtyForty";

const TermsAndConditions = () => {
  return (
    <>
   
    <div
      style={{
        maxWidth: "1000px",
        margin: "80px auto",
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        lineHeight: "1.7",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "800" }}>
        Terms & Conditions
      </h1>

      <p>
        <strong>Effective Date:</strong> August 5, 2025
      </p>
      <p>
        <strong>Company Name:</strong> 30Forty
      </p>
      <p>
        <strong>Website:</strong> <a href="https://www.30forty.in">www.30forty.in</a>
      </p>

      <p>
        Welcome to <strong>30Forty</strong> (“Company,” “we,” “our,” or “us”).
        These Terms and Conditions govern your use of our platform accessible at{" "}
        <a href="https://www.30forty.in">www.30forty.in</a>, including our mobile
        application (collectively referred to as the “Platform”).
      </p>
      <p>
        By accessing or using our Platform, you agree to these Terms and Conditions.
      </p>

      <h2>1. Platform Purpose</h2>
      <p>
        30Forty is a real estate listing and aggregator platform. We allow users
        to list, explore, and discover properties and PG (Paying Guest)
        accommodations. We act solely as an aggregator and are not involved in any
        financial transactions, legal procedures, or facility management services.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Provide accurate, lawful, and complete information.</li>
        <li>Do not misuse the platform for illegal, fraudulent, or misleading purposes.</li>
        <li>Contact information is shared only upon mutual consent.</li>
      </ul>

      <h2>3. Financial Disclaimer</h2>
      <p>
        We do not facilitate or store any rent collection, fund transfers, or payment
        gateway processes. All transactions between users are outside our scope.
      </p>

      <h2>4. No Legal or Facility Services</h2>
      <p>
        We do not provide legal consultation, compliance support, documentation
        assistance, or facility/property management services.
      </p>

      <h2>5. Fees and Charges</h2>
      <p>
        We charge service-based fees for listings and promotions. These are
        non-refundable once live unless stated otherwise.
      </p>

      <h2>6. Privacy & Consent</h2>
      <p>
        Contact and personal data is never shared without explicit user consent.
      </p>

      <h2>7. Termination of Access</h2>
      <p>
        We may suspend or terminate accounts for misuse, fraudulent listings, or
        violations of these terms.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms are governed by the laws of India, with jurisdiction in{" "}
        <strong>Karnataka</strong>.
      </p>
    </div>
    </>
  );
};

export default TermsAndConditions;
