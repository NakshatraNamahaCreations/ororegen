
// import React, { useState, useEffect } from "react";
// import Footersellmytime from "./Footersellmytime";
// import Headersellmytime from "./Headersellmytime";

// import bannerImg from "../assets/network.jpg";
// import aboutImage from "../assets/networkmobile.jpg";

// import appStoreImg from "../assets/appstore.webp";
// import googlePlayImg from "../assets/playstore.webp";

// import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
// import contactImg from "../assets/enquirycontact.jpg";
// import downloadBanner from "../assets/networkxdownload.png";

// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
//   );
//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [breakpoint]);
//   return isMobile;
// }

// function Home() {
//   const isMobile = useIsMobile(768);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   // ✅ Brevo Integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch("https://api.brevo.com/v3/smtp/email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "api-key": import.meta.env.VITE_BREVO_KEY,
//         },
//         body: JSON.stringify({
//           sender: { email: "ororegencompanies@gmail.com", name: "NetworkX Website" },
//           to: [{ email: "ororegencompanies@gmail.com", name: "Oro Regen Admin" }],
//           subject: `📩 New Enquiry from ${formData.name}`,
//           htmlContent: `
//             <h3>New Contact Form Submission</h3>
//             <p><b>Name:</b> ${formData.name}</p>
//             <p><b>Email:</b> ${formData.email}</p>
//             <p><b>Phone:</b> ${formData.phone}</p>
//             <p><b>Message:</b> ${formData.message}</p>
//           `,
//         }),
//       });

//       if (response.ok) {
//         alert("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         const err = await response.json();
//         console.error("Brevo Error:", err);
//         alert("❌ Failed to send message. Check console for details.");
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       alert("❌ Network error occurred while sending message.");
//     }
//     setLoading(false);
//   };

//   const features = [
//     {
//       id: "01",
//       icon: <FaLightbulb />,
//       title: "Unique Concept",
//       text: "Unlike traditional apps, we let users offer and book time. It’s authentic, time-based connection.",
//     },
//     {
//       id: "02",
//       icon: <FaDollarSign />,
//       title: "Empower Yourself",
//       text: "Set your own hourly rate. Meet people who value you — and your time.",
//     },
//     {
//       id: "03",
//       icon: <FaShieldAlt />,
//       title: "Verified Users Only",
//       text: "All users go through identity and background checks to ensure safety.",
//     },
//     {
//       id: "04",
//       icon: <FaGlobe />,
//       title: "Local & Global Reach",
//       text: "Find companions in your city or explore connections while you travel.",
//     },
//   ];

//   const faqs = [
//     {
//       question: "1. What is NetworkX?",
//       answer:
//         "NetworkX is a digital platform that allows professionals to offer their time and expertise to clients on an hourly basis.",
//     },
//     {
//       question: "2. How do I become a consultant or expert?",
//       answer:
//         "Register on the app, create your profile, set hourly rates, and get verified. Clients can book you directly.",
//     },
//     {
//       question: "3. How do users book sessions?",
//       answer:
//         "Users can browse experts, select a service, and book sessions instantly using our scheduling system.",
//     },
//     {
//       question: "4. Who can join NetworkX?",
//       answer:
//         "Anyone with valuable skills — business mentors, teachers, fitness trainers, designers, and more.",
//     },
//     {
//       question: "5. How are payments handled?",
//       answer:
//         "All payments are secure and processed via the app. Experts get payouts after each session.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
//   const toggleFAQ = (index) =>
//     setActiveIndex(activeIndex === index ? null : index);

//   const inputStyle = {
//     padding: "12px 15px",
//     border: "1px solid #ddd",
//     borderRadius: "6px",
//     fontSize: "14px",
//     outline: "none",
//   };

//   return (
//     <div style={{ scrollBehavior: "smooth", fontFamily: "'Poppins', sans-serif" }}>
//       <Headersellmytime />

//       {/* ✅ Hero / Banner */}
//       <section
//         id="home"
//         style={{
//           width: "100%",
//           minHeight: isMobile ? "68vh" : "100vh",
//           backgroundImage: `url(${bannerImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: isMobile ? "flex-end" : "center",
//           justifyContent: isMobile ? "center" : "space-between",
//           padding: isMobile ? "120px 18px 70px" : "80px 100px",
//           position: "relative",
//           color: "#000",
//         }}
//       >
//         {/* subtle overlay only on mobile for readability */}
//         {isMobile && (
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.85) 70%)",
//             }}
//           />
//         )}

//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             flex: 1,
//             maxWidth: isMobile ? "100%" : "50%",
//             textAlign: isMobile ? "center" : "left",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: isMobile ? "34px" : "48px",
//               fontWeight: 700,
//               lineHeight: isMobile ? 1.25 : 1.2,
//               marginBottom: isMobile ? "14px" : "20px",
//               textShadow: isMobile ? "0 2px 8px rgba(0,0,0,.12)" : "none",
//             }}
//           >
//             Book Time. Share Knowledge.{" "}
//             <span style={{ color: "#24428B" }}>Grow Together.</span>
//           </h1>

//           <p
//             style={{
//               fontSize: isMobile ? "15px" : "16px",
//               lineHeight: 1.7,
//               marginBottom: isMobile ? "22px" : "30px",
//               color: "#333",
//               background: isMobile ? "rgba(255,255,255,.75)" : "transparent",
//               display: "inline-block",
//               padding: isMobile ? "8px 10px" : 0,
//               borderRadius: isMobile ? 8 : 0,
//             }}
//           >
//             From mentors to creators, NetworkX makes it effortless to connect,
//             collaborate, and grow through time-based services.
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "14px",
//               flexWrap: "wrap",
//               justifyContent: isMobile ? "center" : "flex-start",
//             }}
//           >
//             <a href="#playStore" aria-label="Get it on Google Play">
//               <img src={googlePlayImg} alt="Google Play" style={{ height: isMobile ? 48 : 55 }} />
//             </a>
//             <a href="#appstore" aria-label="Download on the App Store">
//               <img src={appStoreImg} alt="App Store" style={{ height: isMobile ? 48 : 55 }} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ✅ About Section */}
//       <section
//         id="about"
//         style={{
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//           alignItems: "center",
//           gap: isMobile ? "28px" : "50px",
//           padding: isMobile ? "50px 20px" : "80px 60px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <div>
//           <h2
//             style={{
//               fontSize: isMobile ? "26px" : "32px",
//               fontWeight: 700,
//               marginBottom: "14px",
//             }}
//           >
//             Turn Your Expertise{" "}
//             <span style={{ color: "#24428B" }}>Into Income.</span>
//           </h2>
//           <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8, marginBottom: 14 }}>
//             NetworkX is built on a simple idea — time is the most valuable
//             currency. We connect professionals, creators, and learners through a
//             seamless platform that values every moment shared.
//           </p>
//           <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8 }}>
//             Our mission is to make knowledge accessible, flexible, and rewarding
//             for everyone.
//           </p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img
//             src={aboutImage}
//             alt="About NetworkX"
//             style={{
//               width: "100%",
//               maxWidth: isMobile ? "520px" : "600px",
//               borderRadius: isMobile ? 12 : 0,
//               boxShadow: isMobile ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
//             }}
//           />
//         </div>
//       </section>

//       {/* ✅ Why Choose Us */}
//       <section
//         id="why-choose-us"
//         style={{
//           backgroundColor: "#000",
//           color: "#fff",
//           padding: isMobile ? "56px 18px" : "80px 40px",
//           textAlign: "center",
//               fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <h2 style={{ fontSize: isMobile ? "26px" : "32px", marginBottom: isMobile ? 26 : 40 ,    fontFamily: "'Poppins', sans-serif",}}>
//           Why Choose Us
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: isMobile ? "18px" : "25px",
//             maxWidth: "1100px",
//             margin: "0 auto",
//           }}
//         >
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               style={{
//                 background: "#111",
//                 padding: isMobile ? "24px 18px" : "40px 25px",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
//                     fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               <div
//                 style={{
//                   width: isMobile ? 54 : 60,
//                   height: isMobile ? 54 : 60,
//                   borderRadius: "50%",
//                   backgroundColor: "#24428B",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: isMobile ? 20 : 22,
//                   margin: "0 auto 16px",
//                       fontFamily: "'Poppins', sans-serif",
//                 }}
//               >
//                 {feature.icon}
//               </div>
//               <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
//                 {feature.title}
//               </h3>
//               <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.6 }}>
//                 {feature.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ FAQ Section */}
//       <section
//         id="faq"
//         style={{
//           background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
//           padding: isMobile ? "56px 16px" : "80px 20px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ fontSize: isMobile ? "26px" : "32px", marginBottom: isMobile ? 26 : 40 }}>
//           Frequently Asked Questions
//         </h2>

//         <div
//           style={{
//             maxWidth: "800px",
//             margin: "0 auto",
//             textAlign: "left",
//           }}
//         >
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               onClick={() => toggleFAQ(idx)}
//               style={{
//                 background: "#fff",
//                 borderRadius: 10,
//                 marginBottom: 14,
//                 padding: isMobile ? "14px 16px" : "18px 20px",
//                 border: "1px solid #f7d58c",
//                 cursor: "pointer",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   fontWeight: 600,
//                 }}
//               >
//                 {faq.question}
//                 <span style={{ color: "#24428B" }}>
//                   {activeIndex === idx ? "▲" : "▼"}
//                 </span>
//               </div>
//               {activeIndex === idx && (
//                 <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>
//                   {faq.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Download CTA (banner) */}
//       <section
//         id="download"
//         style={{
//           backgroundImage: `url(${downloadBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: isMobile ? "72px 18px" : "150px 60px",
//           margin: isMobile ? "40px 16px 80px" : "70px auto 100px",
//           borderRadius: 30,
//           maxWidth: 1500,
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               color: "#000",
//               paddingLeft: isMobile ? 0 : 140,
//               textAlign: isMobile ? "center" : "left",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: isMobile ? 24 : 30,
//                 fontWeight: 700,
//                 lineHeight: 1.35,
//               }}
//             >
//               Download app to start <br />
//               <span style={{ color: "#fff" }}>meaningful</span>{" "}
//               <span style={{ color: "#24428B" }}>connections</span>
//             </h2>
//             <div
//               style={{
//                 display: "flex",
//                 gap: 12,
//                 marginTop: 18,
//                 justifyContent: isMobile ? "center" : "flex-start",
//                 flexWrap: "wrap",
//               }}
//             >
//               <a href="#appstore" aria-label="Download on the App Store">
//                 <img src={appStoreImg} alt="App Store" style={{ height: isMobile ? 46 : 50 }} />
//               </a>
//               <a href="#playstore" aria-label="Get it on Google Play">
//                 <img src={googlePlayImg} alt="Google Play" style={{ height: isMobile ? 46 : 50 }} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Contact Section */}
//       <section
//         id="contact"
//         style={{
//           padding: isMobile ? "56px 18px" : "80px 40px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//             alignItems: "center",
//             gap: isMobile ? 28 : 60,
//             maxWidth: 1100,
//             margin: "0 auto",
//           }}
//         >
//           {/* Put the form first on mobile for quicker action */}
//           <div style={{ order: isMobile ? 1 : 0 }}>
//             <h2 style={{ color: "#24428B", fontSize: isMobile ? 24 : 28, fontWeight: 700 }}>
//               Get In Touch
//             </h2>
//             <form
//               onSubmit={handleSubmit}
//               style={{ display: "flex", flexDirection: "column", gap: 15 }}
//             >
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows={isMobile ? 4 : 4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={{ ...inputStyle, resize: "none" }}
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={{
//                   background: "linear-gradient(to right, #24428B, #24428B)",
//                   color: "#fff",
//                   padding: "12px 20px",
//                   border: "none",
//                   borderRadius: 6,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   opacity: loading ? 0.8 : 1,
//                 }}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>

//           <div style={{ textAlign: "center", order: isMobile ? 2 : 1 }}>
//             <img
//               src={contactImg}
//               alt="Contact"
//               style={{
//                 maxWidth: "100%",
//                 borderRadius: isMobile ? 12 : 8,
//                 boxShadow: isMobile ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       <Footersellmytime />
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import Footersellmytime from "./Footersellmytime";
import Headersellmytime from "./Headersellmytime";

import bannerImg from "../assets/network.jpg";          // <- used for both desktop + mobile hero now
import aboutImage from "../assets/networkmobile.jpg";   // (kept import in case you want it elsewhere)

import appStoreImg from "../assets/appstore.webp";
import googlePlayImg from "../assets/playstore.webp";

import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
import contactImg from "../assets/enquirycontact.jpg";
import downloadBanner from "../assets/networkxdownload.png";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

function Home() {
  const isMobile = useIsMobile(768);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_KEY,
        },
        body: JSON.stringify({
          sender: { email: "ororegencompanies@gmail.com", name: "NetworkX Website" },
          to: [{ email: "ororegencompanies@gmail.com", name: "Oro Regen Admin" }],
          subject: `📩 New Enquiry from ${formData.name}`,
          htmlContent: `
            <h3>New Contact Form Submission</h3>
            <p><b>Name:</b> ${formData.name}</p>
            <p><b>Email:</b> ${formData.email}</p>
            <p><b>Phone:</b> ${formData.phone}</p>
            <p><b>Message:</b> ${formData.message}</p>
          `,
        }),
      });
      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const err = await response.json();
        console.error("Brevo Error:", err);
        alert("❌ Failed to send message. Check console for details.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("❌ Network error occurred while sending message.");
    }
    setLoading(false);
  };

  const features = [
    { id: "01", icon: <FaLightbulb />, title: "Unique Concept", text: "Unlike traditional apps, we let users offer and book time. It’s authentic, time-based connection." },
    { id: "02", icon: <FaDollarSign />, title: "Empower Yourself", text: "Set your own hourly rate. Meet people who value you — and your time." },
    { id: "03", icon: <FaShieldAlt />, title: "Verified Users Only", text: "All users go through identity and background checks to ensure safety." },
    { id: "04", icon: <FaGlobe />, title: "Local & Global Reach", text: "Find companions in your city or explore connections while you travel." },
  ];

  const faqs = [
    { question: "1. What is NetworkX?", answer: "NetworkX is a digital platform that allows professionals to offer their time and expertise to clients on an hourly basis." },
    { question: "2. How do I become a consultant or expert?", answer: "Register on the app, create your profile, set hourly rates, and get verified. Clients can book you directly." },
    { question: "3. How do users book sessions?", answer: "Users can browse experts, select a service, and book sessions instantly using our scheduling system." },
    { question: "4. Who can join NetworkX?", answer: "Anyone with valuable skills — business mentors, teachers, fitness trainers, designers, and more." },
    { question: "5. How are payments handled?", answer: "All payments are secure and processed via the app. Experts get payouts after each session." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const inputStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={{ scrollBehavior: "smooth", fontFamily: "'Poppins', sans-serif" }}>
      <Headersellmytime />

      {/* ===== Hero / Banner ===== */}
      {!isMobile ? (
        // Desktop: full-bleed background hero (unchanged)
        <section
          id="home"
          style={{
            width: "100%",
            minHeight: "100vh",
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "80px 100px",
            color: "#000",
          }}
        >
          <div style={{ flex: 1, maxWidth: "50%" }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>
              Book Time. Share Knowledge. <span style={{ color: "#24428B" }}>Grow Together.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 30, color: "#333" }}>
              From mentors to creators, NetworkX makes it effortless to connect, collaborate, and grow through time-based services.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#playStore" aria-label="Get it on Google Play">
                <img src={googlePlayImg} alt="Google Play" style={{ height: 55 }} />
              </a>
              <a href="#appstore" aria-label="Download on the App Store">
                <img src={appStoreImg} alt="App Store" style={{ height: 55 }} />
              </a>
            </div>
          </div>
        </section>
      ) : (
        // Mobile: show the image FIRST (from bannerImg), then the text
        <section id="home" style={{ width: "100%", padding: "110px 18px 28px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <img
              src={bannerImg}           // <-- force using bannerImg on mobile so it never "misses"
              alt="NetworkX banner"
              loading="eager"
              decoding="async"
              style={{
                width: "92%",
                maxWidth: 560,
                height: 220,            // reduced height for mobile
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                margin: "0 auto 16px",
                borderRadius: 14,
                boxShadow: "0 10px 24px rgba(0,0,0,.12)",
              }}
            />

            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.25, marginBottom: 12 }}>
                Book Time. Share Knowledge. <span style={{ color: "#24428B" }}>Grow Together.</span>
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: "0 auto 18px",
                  color: "#333",
                  background: "rgba(0,0,0,.03)",
                  padding: "10px 12px",
                  borderRadius: 8,
                  maxWidth: 640,
                }}
              >
                From mentors to creators, NetworkX makes it effortless to connect,
                collaborate, and grow through time-based services.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href="#playStore" aria-label="Get it on Google Play">
                  <img src={googlePlayImg} alt="Google Play" style={{ height: 48 }} />
                </a>
                <a href="#appstore" aria-label="Download on the App Store">
                  <img src={appStoreImg} alt="App Store" style={{ height: 48 }} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== About ===== */}
      <section
        id="about"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          alignItems: "center",
          gap: isMobile ? "28px" : "50px",
          padding: isMobile ? "40px 18px" : "80px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <h2 style={{ fontSize: isMobile ? 26 : 32, fontWeight: 700, marginBottom: 14 }}>
            Turn Your Expertise <span style={{ color: "#24428B" }}>Into Income.</span>
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8, marginBottom: 14 }}>
            NetworkX is built on a simple idea — time is the most valuable currency. We connect professionals,
            creators, and learners through a seamless platform that values every moment shared.
          </p>
          <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.8 }}>
            Our mission is to make knowledge accessible, flexible, and rewarding for everyone.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={aboutImage}
            alt="About NetworkX"
            style={{
              width: "100%",
              maxWidth: isMobile ? 520 : 600,
              borderRadius: isMobile ? 12 : 0,
              boxShadow: isMobile ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
            }}
          />
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section
        id="why-choose-us"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: isMobile ? "56px 18px" : "80px 40px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2 style={{ fontSize: isMobile ? 26 : 32, marginBottom: isMobile ? 26 : 40 }}>Why Choose Us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? "18px" : "25px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {features.map((f) => (
            <div
              key={f.id}
              style={{
                background: "#111",
                padding: isMobile ? "24px 18px" : "40px 25px",
                borderRadius: 12,
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  width: isMobile ? 54 : 60,
                  height: isMobile ? 54 : 60,
                  borderRadius: "50%",
                  backgroundColor: "#24428B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? 20 : 22,
                  margin: "0 auto 16px",
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.6 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        style={{
          background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
          padding: isMobile ? "56px 16px" : "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: isMobile ? 26 : 32, marginBottom: isMobile ? 26 : 40 }}>
          Frequently Asked Questions
        </h2>

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "left" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              style={{
                background: "#fff",
                borderRadius: 10,
                marginBottom: 14,
                padding: isMobile ? "14px 16px" : "18px 20px",
                border: "1px solid #f7d58c",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                {faq.question}
                <span style={{ color: "#24428B" }}>{activeIndex === idx ? "▲" : "▼"}</span>
              </div>
              {activeIndex === idx && (
                <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Download CTA (reduced width on small screens) ===== */}
      <section
        id="download"
        style={{
          backgroundImage: `url(${downloadBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: isMobile ? "48px 16px" : "150px 60px",
          margin: isMobile ? "40px auto 80px" : "70px auto 100px",
          borderRadius: 24,
          maxWidth: isMobile ? 680 : 1500,
          width: isMobile ? "92vw" : "100%",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", alignItems: "center" }}>
          <div style={{ color: "#000", paddingLeft: isMobile ? 0 : 140, textAlign: isMobile ? "center" : "left" }}>
            <h2 style={{ fontSize: isMobile ? 22 : 30, fontWeight: 700, lineHeight: 1.35 }}>
              Download app to start <br />
              <span style={{ color: "#fff" }}>meaningful</span>{" "}
              <span style={{ color: "#24428B" }}>connections</span>
            </h2>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 16,
                justifyContent: isMobile ? "center" : "flex-start",
                flexWrap: "wrap",
              }}
            >
              <a href="#appstore" aria-label="Download on the App Store">
                <img src={appStoreImg} alt="App Store" style={{ height: isMobile ? 42 : 50 }} />
              </a>
              <a href="#playstore" aria-label="Get it on Google Play">
                <img src={googlePlayImg} alt="Google Play" style={{ height: isMobile ? 42 : 50 }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" style={{ padding: isMobile ? "56px 18px" : "80px 40px", backgroundColor: "#fff" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            alignItems: "center",
            gap: isMobile ? 28 : 60,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div style={{ order: isMobile ? 1 : 0 }}>
            <h2 style={{ color: "#24428B", fontSize: isMobile ? 24 : 28, fontWeight: 700 }}>Get In Touch</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={inputStyle} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={inputStyle} required />
              <textarea name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "none" }} required />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(to right, #24428B, #24428B)",
                  color: "#fff",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div style={{ textAlign: "center", order: isMobile ? 2 : 1 }}>
            <img
              src={contactImg}
              alt="Contact"
              style={{
                maxWidth: "100%",
                borderRadius: isMobile ? 12 : 8,
                boxShadow: isMobile ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
              }}
            />
          </div>
        </div>
      </section>

      <Footersellmytime />
    </div>
  );
}

export default Home;
