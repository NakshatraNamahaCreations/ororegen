import React from "react";

const TermsAndConditions = () => {
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
        Stay Findr – Terms & Conditions
      </h1>
      <p>
        <strong>Effective Date:</strong> [October: 06-10-2025]
      </p>
      <p>
        Welcome to Stay Findr. By accessing or using our services, you agree to
        the following Terms & Conditions.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li>
          <strong>“Platform”</strong> refers to the StayFindr mobile app/website.
        </li>
        <li>
          <strong>“User”</strong> means anyone using the platform, including Guests
          and Hosts.
        </li>
        <li>
          <strong>“Host”</strong> means an individual or company listing their property.
        </li>
        <li>
          <strong>“Guest”</strong> means an individual booking a property through
          StayFindr.
        </li>
      </ul>

      <h2>2. User Obligations</h2>
      <ul>
        <li>Provide accurate information during registration and booking.</li>
        <li>Use the platform lawfully and not for fraudulent or harmful activities.</li>
        <li>Respect the property rules set by hosts.</li>
      </ul>

      <h2>3. Booking & Payments</h2>
      <ul>
        <li>All bookings must be made through the StayFindr platform.</li>
        <li>Payment is processed via secure third-party gateways.</li>
        <li>
          Prices are displayed in local currency and include applicable taxes
          (unless specified otherwise).
        </li>
      </ul>

      <h2>4. Host Responsibilities</h2>
      <ul>
        <li>
          Hosts must ensure their listings are accurate, legal, and safe for guests.
        </li>
        <li>
          Hosts are responsible for maintaining the property and fulfilling confirmed
          bookings.
        </li>
      </ul>

      <h2>5. Guest Responsibilities</h2>
      <ul>
        <li>Guests must comply with host rules and local laws.</li>
        <li>Any damages caused during the stay are the guest’s liability.</li>
      </ul>

      <h2>6. Cancellations & Refunds</h2>
      <p>
        Cancellation and refund terms are governed by our{" "}
        <a href="/refund-policy">Refund & Cancellation Policy</a>.
      </p>
      <p>
        Refunds are processed to the original payment method within{" "}
        <strong>7–14 business days</strong>.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        StayFindr is a facilitator and does not own/manage listed properties.
        We are not responsible for disputes, damages, or losses arising between
        hosts and guests.
      </p>

      <h2>8. Dispute Resolution</h2>
      <p>
        Disputes must first be addressed through our support team. If unresolved,
        matters will be subject to the jurisdiction of courts in{" "}
        <strong>[City, Country]</strong>.
      </p>

      <h2>9. Termination</h2>
      <p>
        StayFindr reserves the right to suspend or terminate accounts violating
        these terms.
      </p>
    </div>
  );
};

export default TermsAndConditions;
