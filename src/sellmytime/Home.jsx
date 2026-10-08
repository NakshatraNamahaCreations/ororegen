
// import React, { useState, useEffect } from "react";
// import Footersellmytime from "./Footersellmytime";
// import Headersellmytime from "./Headersellmytime";

// import bannerImg from "../assets/network.jpg";
// import aboutImage from "../assets/sellmytime-about.jpg";

// import appStoreImg from "../assets/appstore.webp";
// import googlePlayImg from "../assets/playstore.webp";

// import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
// import contactImg from "../assets/enquirycontact.jpg";
// import downloadBanner from "../assets/sellmytime-download.png";

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
//                   background: "linear-gradient(to right, #8B1FC0, #F45A63)",
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
import React, { useState, useEffect, useRef } from "react";
import Footersellmytime from "./Footersellmytime";
import Headersellmytime from "./Headersellmytime";

import bannerImg from "../assets/sellmytime-hero.jpg";          // <- used for both desktop + mobile hero now

import appStoreImg from "../assets/appstore.webp";
import googlePlayImg from "../assets/playstore.webp";

import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe, FaChevronDown, FaPaperPlane, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import contactImg from "../assets/enquirycontact.jpg";
import scrWelcome from "../assets/sellmytime-scr-welcome.webp";
import scrChoosePath from "../assets/sellmytime-scr-choose-path.webp";
import scrHome from "../assets/sellmytime-scr-home.webp";
import scrAllProfiles from "../assets/sellmytime-scr-all-profiles.webp";
import scrFilters from "../assets/sellmytime-scr-filters.webp";
import scrProfile from "../assets/sellmytime-scr-profile.webp";
import scrPickDate from "../assets/sellmytime-scr-pick-date.webp";
import scrPickTime from "../assets/sellmytime-scr-pick-time.webp";
import scrFavourites from "../assets/sellmytime-scr-favourites.webp";
import scrSettings from "../assets/sellmytime-scr-settings.webp";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bizmats&hl=en_IN";

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

/* ===== Page styles (all classes prefixed "smh-" to stay scoped to this page) ===== */
const pageCss = `
.smh-page {
  --smh-navy: #0D0630;
  --smh-navy-2: #1A1045;
  --smh-purple: #8B1FC0;
  --smh-pink: #F45A63;
  --smh-orange: #F39C45;
  --smh-grad: linear-gradient(135deg, #8B1FC0 0%, #F45A63 55%, #F39C45 100%);
  --smh-tint: #FAF5FF;
  --smh-tint-2: #F8EEFD;
  --smh-tint-3: #F1E2FB;
  --smh-text: #2A2346;
  --smh-muted: #5E5878;
  font-family: 'Poppins', sans-serif;
  color: var(--smh-text);
  overflow-x: clip;
}
.smh-page *, .smh-page *::before, .smh-page *::after { box-sizing: border-box; }

.smh-grad-text {
  background: var(--smh-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/* ---------- Section head (eyebrow + heading + sub) ---------- */
.smh-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--smh-purple);
  background: rgba(139,31,192,.08);
  border: 1px solid rgba(139,31,192,.18);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.smh-eyebrow::before {
  content: "";
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--smh-grad);
}
.smh-eyebrow.on-dark {
  color: #F7C9F0;
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.14);
}
.smh-h2 {
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--smh-navy);
  margin: 0 0 14px;
}
.smh-h2.on-dark { color: #fff; }
.smh-sub {
  font-size: 16px;
  line-height: 1.75;
  color: var(--smh-muted);
  margin: 0;
}
.smh-head-center { text-align: center; max-width: 680px; margin: 0 auto 48px; }

/* ---------- Store badges ---------- */
.smh-stores { display: flex; gap: 14px; flex-wrap: wrap; }
.smh-store {
  display: inline-flex;
  border-radius: 12px;
  transition: transform .25s ease, box-shadow .25s ease;
  box-shadow: 0 10px 24px -10px rgba(13,6,48,.45);
}
.smh-store img { height: 54px; display: block; border-radius: 10px; }
.smh-store:hover { transform: translateY(-3px); box-shadow: 0 16px 30px -10px rgba(139,31,192,.55); }

/* ---------- Hero ---------- */
.smh-hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 100px 80px;
  background-color: #fff;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  isolation: isolate;
}
.smh-hero::before {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.94) 34%, rgba(255,255,255,0) 56%);
  z-index: -1;
}
.smh-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: .45;
  z-index: -1;
  pointer-events: none;
}
.smh-blob.b1 { width: 420px; height: 420px; background: #8B1FC0; top: -120px; left: -120px; opacity: .22; }
.smh-blob.b2 { width: 340px; height: 340px; background: #F45A63; bottom: -80px; left: 22%; opacity: .18; }
.smh-blob.b3 { width: 260px; height: 260px; background: #F39C45; top: 30%; left: 36%; opacity: .14; }

.smh-hero-content { position: relative; max-width: 600px; animation: smhFadeUp .8s ease both; }
.smh-hero h1 {
  font-size: clamp(40px, 4.4vw, 62px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--smh-navy);
  margin: 0 0 22px;
}
.smh-hero h1 .smh-grad-text { display: inline-block; padding-bottom: 4px; }
.smh-hero-lead {
  font-size: 17.5px;
  line-height: 1.75;
  color: var(--smh-muted);
  margin: 0 0 32px;
  max-width: 520px;
}
.smh-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
.smh-chip {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 600;
  color: var(--smh-navy);
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(139,31,192,.16);
  box-shadow: 0 6px 18px -8px rgba(13,6,48,.18);
  padding: 8px 14px 8px 8px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
}
.smh-chip-ic {
  width: 26px; height: 26px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--smh-grad); color: #fff; font-size: 12px;
}

/* Mobile hero */
.smh-hero-m {
  position: relative;
  width: 100%;
  padding: 104px 18px 44px;
  background: linear-gradient(180deg, #fff 0%, var(--smh-tint) 100%);
  overflow: hidden;
  isolation: isolate;
}
.smh-hero-m .smh-blob.b1 { width: 260px; height: 260px; top: 60px; left: -110px; }
.smh-hero-m .smh-blob.b2 { width: 220px; height: 220px; bottom: 40px; left: auto; right: -90px; }
.smh-hero-m-img {
  position: relative;
  max-width: 560px;
  margin: 0 auto 26px;
  padding: 3px;
  border-radius: 22px;
  background: var(--smh-grad);
  box-shadow: 0 22px 44px -18px rgba(139,31,192,.55);
  animation: smhFadeUp .7s ease both;
}
.smh-hero-m-img img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: 100% center;
  display: block;
  border-radius: 19px;
  background: #fff;
}
.smh-hero-m-text { text-align: center; animation: smhFadeUp .8s .1s ease both; }
.smh-hero-m-text h1 {
  font-size: 34px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--smh-navy);
  margin: 0 0 14px;
}
.smh-hero-m-text .smh-hero-lead { font-size: 15.5px; margin: 0 auto 24px; }
.smh-hero-m-text .smh-stores, .smh-hero-m-text .smh-chips { justify-content: center; }
.smh-hero-m-text .smh-store img { height: 48px; }

/* ---------- About ---------- */
.smh-about-wrap { position: relative; padding: 110px 60px; background: #fff; }
.smh-about {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 70px;
  max-width: 1200px;
  margin: 0 auto;
}
.smh-about p.smh-sub { margin-bottom: 18px; }
.smh-mission {
  position: relative;
  margin-top: 26px;
  padding: 20px 22px 20px 26px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--smh-tint) 0%, var(--smh-tint-2) 100%);
  border: 1px solid var(--smh-tint-3);
  color: var(--smh-navy);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
  overflow: hidden;
}
.smh-mission::before {
  content: "";
  position: absolute; left: 0; top: 0; bottom: 0; width: 5px;
  background: var(--smh-grad);
}
.smh-about-visual {
  position: relative;
  display: flex; justify-content: center; align-items: center;
}
.smh-about-visual::before {
  content: "";
  position: absolute;
  width: 82%; aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(244,90,99,.22), rgba(139,31,192,.16) 50%, rgba(243,156,69,0) 72%);
  filter: blur(10px);
}
.smh-about-visual img {
  position: relative;
  width: 100%;
  max-width: 560px;
  display: block;
}

/* ---------- Why choose us ---------- */
.smh-why {
  position: relative;
  background: radial-gradient(1000px 500px at 85% -10%, rgba(139,31,192,.35), transparent 60%),
              radial-gradient(800px 420px at 5% 110%, rgba(244,90,99,.22), transparent 60%),
              var(--smh-navy);
  color: #fff;
  padding: 110px 40px;
  overflow: hidden;
}
.smh-why .smh-sub { color: rgba(255,255,255,.7); }
.smh-why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.smh-card {
  position: relative;
  padding: 34px 26px 30px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,.025) 100%);
  border: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 1px 0 rgba(255,255,255,.06) inset, 0 20px 40px -24px rgba(0,0,0,.6);
  transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease, background .35s ease;
  overflow: hidden;
  text-align: left;
}
.smh-card::after {
  content: "";
  position: absolute; left: 0; right: 0; top: 0; height: 3px;
  background: var(--smh-grad);
  opacity: 0;
  transition: opacity .35s ease;
}
.smh-card:hover {
  transform: translateY(-8px);
  border-color: rgba(244,90,99,.4);
  background: linear-gradient(180deg, rgba(139,31,192,.18) 0%, rgba(255,255,255,.03) 100%);
  box-shadow: 0 30px 60px -24px rgba(139,31,192,.6);
}
.smh-card:hover::after { opacity: 1; }
.smh-card-num {
  position: absolute; top: 20px; right: 22px;
  font-size: 40px; font-weight: 800; line-height: 1;
  color: rgba(255,255,255,.06);
  letter-spacing: -0.02em;
}
.smh-card-ic {
  width: 58px; height: 58px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; color: #fff;
  background: var(--smh-grad);
  box-shadow: 0 12px 26px -10px rgba(244,90,99,.7);
  margin-bottom: 22px;
}
.smh-card h3 { font-size: 19px; font-weight: 700; margin: 0 0 10px; color: #fff; }
.smh-card p { font-size: 14.5px; color: rgba(255,255,255,.72); line-height: 1.7; margin: 0; }

/* ---------- FAQ ---------- */
.smh-faq {
  position: relative;
  background: linear-gradient(180deg, var(--smh-tint) 0%, var(--smh-tint-3) 100%);
  padding: 110px 20px;
  overflow: hidden;
}
.smh-faq-list { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
.smh-faq-item {
  position: relative;
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(139,31,192,.12);
  box-shadow: 0 10px 30px -18px rgba(13,6,48,.25);
  cursor: pointer;
  transition: box-shadow .3s ease, border-color .3s ease, transform .3s ease;
  overflow: hidden;
}
.smh-faq-item::before {
  content: "";
  position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: var(--smh-grad);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform .35s ease;
}
.smh-faq-item:hover { border-color: rgba(139,31,192,.3); transform: translateY(-2px); }
.smh-faq-item.active {
  border-color: rgba(139,31,192,.35);
  box-shadow: 0 22px 44px -22px rgba(139,31,192,.45);
}
.smh-faq-item.active::before { transform: scaleY(1); }
.smh-faq-q {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 22px 24px 22px 28px;
  background: transparent; border: 0;
  font-family: inherit; font-size: 16.5px; font-weight: 600;
  color: var(--smh-navy);
  text-align: left;
  cursor: pointer;
}
.smh-faq-q:focus-visible { outline: 2px solid var(--smh-purple); outline-offset: -2px; border-radius: 18px; }
.smh-faq-toggle {
  flex: 0 0 auto;
  width: 34px; height: 34px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 13px;
  color: var(--smh-purple);
  background: var(--smh-tint-2);
  transition: transform .35s ease, background .35s ease, color .35s ease;
}
.smh-faq-item.active .smh-faq-toggle { transform: rotate(180deg); background: var(--smh-grad); color: #fff; }
.smh-faq-a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .35s ease;
}
.smh-faq-item.active .smh-faq-a { grid-template-rows: 1fr; }
.smh-faq-a > div { overflow: hidden; }
.smh-faq-a p {
  margin: 0;
  padding: 0 28px 22px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--smh-muted);
}

/* ---------- Download CTA ---------- */
.smh-dl-outer { padding: 100px 24px 40px; background: #fff; }
.smh-download {
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  border-radius: 32px;
  padding: 64px 64px;
  background:
    radial-gradient(600px 300px at 0% 0%, rgba(139,31,192,.55), transparent 70%),
    radial-gradient(520px 320px at 100% 100%, rgba(243,156,69,.35), transparent 70%),
    radial-gradient(500px 300px at 60% 0%, rgba(244,90,99,.3), transparent 70%),
    var(--smh-navy);
  color: #fff;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  align-items: center;
  gap: 48px;
  box-shadow: 0 40px 80px -40px rgba(13,6,48,.65);
}
.smh-download::before {
  content: "";
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: linear-gradient(90deg, #000 0%, transparent 60%);
  -webkit-mask-image: linear-gradient(90deg, #000 0%, transparent 60%);
  pointer-events: none;
}
.smh-download > * { position: relative; }
.smh-download h2 {
  font-size: clamp(28px, 3.2vw, 42px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 28px;
}
.smh-download h2 .smh-accent {
  background: linear-gradient(90deg, #F45A63, #F39C45);
  -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
}
.smh-dl-visual {
  position: relative;
  transition: transform .4s ease;
}
.smh-dl-visual::before {
  content: "";
  position: absolute; inset: 12% 8%;
  background: var(--smh-grad);
  filter: blur(60px);
  opacity: .55;
  border-radius: 50%;
}
.smh-dl-visual:hover { transform: translateY(-6px); }
.smh-dl-visual img { position: relative; width: 100%; display: block; filter: drop-shadow(0 30px 40px rgba(0,0,0,.45)); clip-path: inset(-20% -20% -20% 2%); }

/* ---------- Contact ---------- */
.smh-contact {
  position: relative;
  padding: 100px 40px 70px;
  background: linear-gradient(180deg, #fff 0%, var(--smh-tint) 50%, #fff 100%);
}
.smh-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  max-width: 1150px;
  margin: 0 auto;
}
.smh-form-card {
  background: #fff;
  border-radius: 26px;
  padding: 40px 38px;
  border: 1px solid rgba(139,31,192,.1);
  box-shadow: 0 1px 2px rgba(13,6,48,.04), 0 30px 60px -30px rgba(13,6,48,.3);
}
.smh-form-card .smh-h2 { margin-bottom: 8px; }
.smh-form-card .smh-sub { margin-bottom: 26px; font-size: 15px; }
.smh-form { display: flex; flex-direction: column; gap: 14px; }
.smh-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.smh-input {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid #E7DDF0;
  background: #FCFAFE;
  border-radius: 12px;
  font-family: inherit;
  font-size: 14.5px;
  color: var(--smh-navy);
  outline: none;
  transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}
.smh-input::placeholder { color: #9C94B3; }
.smh-input:hover { border-color: #D6C2E8; }
.smh-input:focus {
  border-color: var(--smh-purple);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(139,31,192,.14);
}
.smh-submit {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  margin-top: 6px;
  padding: 15px 22px;
  border: 0;
  border-radius: 12px;
  background: var(--smh-grad);
  background-size: 160% 100%;
  background-position: 0% 0;
  color: #fff;
  font-family: inherit;
  font-size: 15.5px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 16px 30px -14px rgba(244,90,99,.75);
  transition: transform .2s ease, box-shadow .2s ease, background-position .4s ease;
}
.smh-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  background-position: 100% 0;
  box-shadow: 0 20px 36px -14px rgba(139,31,192,.7);
}
.smh-submit:focus-visible { outline: 3px solid rgba(139,31,192,.35); outline-offset: 3px; }
.smh-submit:disabled { opacity: .8; cursor: progress; }
.smh-contact-visual { position: relative; text-align: center; }
.smh-contact-visual::before {
  content: "";
  position: absolute; inset: 8% -4% -6% 10%;
  border-radius: 28px;
  background: var(--smh-grad);
  opacity: .9;
  transform: rotate(3deg);
}
.smh-contact-visual img {
  position: relative;
  max-width: 100%;
  border-radius: 24px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 30px 60px -28px rgba(13,6,48,.5);
}

@keyframes smhFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---------- Phone frame (real app screenshots) ---------- */
.smh-phone {
  position: relative;
  width: 100%;
  padding: 7px;
  border-radius: 34px;
  background: linear-gradient(160deg, #2A1F5C 0%, var(--smh-navy) 60%);
  box-shadow: 0 30px 60px -24px rgba(13,6,48,.55), inset 0 0 0 1.5px rgba(255,255,255,.08);
}
.smh-phone img {
  display: block;
  width: 100%;
  aspect-ratio: 644 / 1440;
  object-fit: cover;
  border-radius: 27px;
  background: var(--smh-tint);
}
.smh-phones {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 520px;
}
.smh-phones .smh-phone { width: 230px; }
.smh-phones .smh-phone.back { transform: translateX(62px) rotate(7deg); opacity: .96; }
.smh-phones .smh-phone.front { position: absolute; transform: translateX(-70px) rotate(-5deg); z-index: 1; animation: smhFloat 6s ease-in-out infinite; }
@keyframes smhFloat {
  0%, 100% { transform: translateX(-70px) translateY(0) rotate(-5deg); }
  50% { transform: translateX(-70px) translateY(-12px) rotate(-5deg); }
}
.smh-dl-visual .smh-phones { min-height: 470px; }
.smh-dl-visual .smh-phones .smh-phone { width: 205px; }

/* ---------- App screenshots gallery ---------- */
.smh-shots {
  position: relative;
  padding: 100px 0 90px;
  background: linear-gradient(180deg, var(--smh-tint) 0%, #fff 100%);
  overflow: hidden;
}
.smh-shots .smh-head-center { padding: 0 20px; }
.smh-shots-wrap { position: relative; max-width: 1280px; margin: 0 auto; }
.smh-shots-track {
  display: flex;
  gap: 26px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 18px 60px 34px;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 60px, #000 calc(100% - 60px), transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0, #000 60px, #000 calc(100% - 60px), transparent 100%);
}
.smh-shots-track::-webkit-scrollbar { display: none; }
.smh-shot {
  flex: 0 0 220px;
  margin: 0;
  scroll-snap-align: center;
  transition: transform .35s ease;
}
.smh-shot:hover { transform: translateY(-8px); }
.smh-shot:hover .smh-phone { box-shadow: 0 36px 70px -24px rgba(139,31,192,.55), inset 0 0 0 1.5px rgba(255,255,255,.08); }
.smh-shot figcaption { text-align: center; margin-top: 16px; }
.smh-shot figcaption strong { display: block; font-size: 15.5px; font-weight: 700; color: var(--smh-navy); }
.smh-shot figcaption span { display: block; font-size: 13px; line-height: 1.5; color: var(--smh-muted); margin-top: 4px; }
.smh-shots-nav {
  position: absolute;
  top: calc(50% - 40px);
  z-index: 2;
  width: 48px; height: 48px;
  border: none;
  border-radius: 50%;
  display: grid; place-items: center;
  color: #fff;
  background: var(--smh-grad);
  box-shadow: 0 12px 26px -10px rgba(139,31,192,.7);
  cursor: pointer;
  transition: transform .25s ease;
}
.smh-shots-nav:hover { transform: scale(1.08); }
.smh-shots-nav.prev { left: 12px; }
.smh-shots-nav.next { right: 12px; }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .smh-why-grid { grid-template-columns: repeat(2, 1fr); }
  .smh-hero { padding: 120px 48px 80px; }
}
@media (max-width: 900px) {
  .smh-about, .smh-contact-grid, .smh-download { grid-template-columns: 1fr; }
  .smh-download { padding: 48px 32px; text-align: center; }
  .smh-download .smh-stores { justify-content: center; }
  .smh-dl-visual { max-width: 520px; margin: 0 auto; }
}
@media (max-width: 768px) {
  .smh-head-center { margin-bottom: 34px; }
  .smh-about-wrap { padding: 64px 18px; }
  .smh-about { gap: 34px; }
  .smh-about-visual img { max-width: 420px; }
  .smh-why { padding: 70px 18px; }
  .smh-why-grid { grid-template-columns: 1fr; gap: 16px; }
  .smh-card { padding: 26px 22px; }
  .smh-faq { padding: 70px 16px; }
  .smh-faq-q { padding: 18px 16px 18px 20px; font-size: 15px; }
  .smh-faq-a p { padding: 0 20px 18px; font-size: 14.5px; }
  .smh-dl-outer { padding: 60px 16px 20px; }
  .smh-download { padding: 40px 22px 26px; border-radius: 26px; gap: 30px; }
  .smh-download h2 { margin-bottom: 22px; }
  .smh-store img { height: 46px; }
  .smh-contact { padding: 64px 16px 60px; }
  .smh-contact-grid { gap: 40px; }
  .smh-form-card { padding: 28px 20px; border-radius: 22px; }
  .smh-form-row { grid-template-columns: 1fr; }
  .smh-contact-visual { padding-right: 10px; }
  .smh-contact-visual::before { inset: 6% 0 -4% 8%; }
  .smh-phones { min-height: 420px; }
  .smh-phones .smh-phone { width: 180px; }
  .smh-phones .smh-phone.back { transform: translateX(48px) rotate(7deg); }
  .smh-phones .smh-phone.front { transform: translateX(-52px) rotate(-5deg); animation: none; }
  .smh-dl-visual .smh-phones { min-height: 380px; }
  .smh-dl-visual .smh-phones .smh-phone { width: 165px; }
  .smh-shots { padding: 70px 0 60px; }
  .smh-shots-track { gap: 18px; padding: 14px 24px 26px; -webkit-mask-image: none; mask-image: none; }
  .smh-shot { flex-basis: 190px; }
  .smh-shots-nav { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .smh-page *, .smh-page *::before, .smh-page *::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

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
          sender: { email: "ororegencompanies@gmail.com", name: "Sell My Time Website" },
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
    { question: "1. What is Sell My Time?", answer: "Sell My Time is a digital platform that allows professionals to offer their time and expertise to clients on an hourly basis." },
    { question: "2. How do I become a consultant or expert?", answer: "Register on the app, create your profile, set hourly rates, and get verified. Clients can book you directly." },
    { question: "3. How do users book sessions?", answer: "Users can browse experts, select a service, and book sessions instantly using our scheduling system." },
    { question: "4. Who can join Sell My Time?", answer: "Anyone with valuable skills — business mentors, teachers, fitness trainers, designers, and more." },
    { question: "5. How are payments handled?", answer: "All payments are secure and processed via the app. Experts get payouts after each session." },
  ];

  const appScreens = [
    { img: scrWelcome, title: "Welcome", text: "India's professional time marketplace." },
    { img: scrChoosePath, title: "Choose Your Path", text: "Offer services, hire experts, or do both." },
    { img: scrHome, title: "Discover", text: "Browse experts online, offline or both." },
    { img: scrAllProfiles, title: "All Profiles", text: "Explore experts and their hourly rates." },
    { img: scrFilters, title: "Smart Filters", text: "Filter by city, availability, gender, age and price." },
    { img: scrProfile, title: "Expert Profile", text: "See an expert's details and book a session." },
    { img: scrPickDate, title: "Choose a Date", text: "Pick online or in-person, then a date." },
    { img: scrPickTime, title: "Pick a Time Slot", text: "Book a full day or an hourly slot." },
    { img: scrFavourites, title: "Profiles You Love", text: "Save the experts you like." },
    { img: scrSettings, title: "Settings", text: "Manage your profile, payouts and privacy." },
  ];
  const shotsRef = useRef(null);
  const scrollShots = (dir) => {
    const el = shotsRef.current;
    if (el) el.scrollBy({ left: dir * 492, behavior: "smooth" });
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  // Facts already stated on this page, surfaced as small trust chips in the hero
  const heroChips = [
    { icon: <FaShieldAlt />, label: "Verified Users Only" },
    { icon: <FaDollarSign />, label: "Set your own hourly rate" },
    { icon: <FaGlobe />, label: "Local & Global Reach" },
  ];

  const heroTitle = (
    <>
      Book Time. Share Knowledge. <span className="smh-grad-text">Grow Together.</span>
    </>
  );
  const heroLead =
    "From mentors to creators, Sell My Time makes it effortless to connect, collaborate, and grow through time-based services.";

  const heroStores = (
    <div className="smh-stores">
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        title="Get it on Google Play"
        className="smh-store"
      >
        <img src={googlePlayImg} alt="Google Play" />
      </a>
      <a
        href="#appstore"
        aria-label="Download on the App Store (Coming Soon)"
        title="App Store (Coming Soon)"
        onClick={(e) => e.preventDefault()}
        className="smh-store"
      >
        <img src={appStoreImg} alt="App Store" />
      </a>
    </div>
  );

  const heroChipRow = (
    <div className="smh-chips">
      {heroChips.map((c) => (
        <span className="smh-chip" key={c.label}>
          <span className="smh-chip-ic">{c.icon}</span>
          {c.label}
        </span>
      ))}
    </div>
  );

  return (
    <div className="smh-page" style={{ scrollBehavior: "smooth", fontFamily: "'Poppins', sans-serif" }}>
      <style>{pageCss}</style>
      <Headersellmytime />

      {/* ===== Hero / Banner ===== */}
      {!isMobile ? (
        // Desktop: full-bleed background hero with soft brand glow behind the copy
        <section id="home" className="smh-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
          <span className="smh-blob b1" />
          <span className="smh-blob b2" />
          <span className="smh-blob b3" />
          <div className="smh-hero-content">
            <span className="smh-eyebrow">Time-based services</span>
            <h1>{heroTitle}</h1>
            <p className="smh-hero-lead">{heroLead}</p>
            {heroStores}
            {heroChipRow}
          </div>
        </section>
      ) : (
        // Mobile: show the image FIRST (from bannerImg), then the text
        <section id="home" className="smh-hero-m">
          <span className="smh-blob b1" />
          <span className="smh-blob b2" />
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="smh-hero-m-img">
              <img
                src={bannerImg}           // <-- force using bannerImg on mobile so it never "misses"
                alt="Sell My Time banner"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="smh-hero-m-text">
              <span className="smh-eyebrow">Time-based services</span>
              <h1>{heroTitle}</h1>
              <p className="smh-hero-lead">{heroLead}</p>
              {heroStores}
              {heroChipRow}
            </div>
          </div>
        </section>
      )}

      {/* ===== About ===== */}
      <div className="smh-about-wrap">
        <section id="about" className="smh-about">
          <div>
            <span className="smh-eyebrow">About Sell My Time</span>
            <h2 className="smh-h2">
              Turn Your Expertise <span className="smh-grad-text">Into Income.</span>
            </h2>
            <p className="smh-sub">
              Sell My Time is built on a simple idea — time is the most valuable currency. We connect professionals,
              creators, and learners through a seamless platform that values every moment shared.
            </p>
            <p className="smh-mission">
              Our mission is to make knowledge accessible, flexible, and rewarding for everyone.
            </p>
          </div>
          <div className="smh-about-visual">
            <div className="smh-phones">
              <div className="smh-phone back">
                <img src={scrProfile} alt="Sell My Time expert profile screen" loading="lazy" />
              </div>
              <div className="smh-phone front">
                <img src={scrHome} alt="Sell My Time home screen" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== App Screenshots ===== */}
      <section id="screenshots" className="smh-shots">
        <div className="smh-head-center">
          <span className="smh-eyebrow">Inside the App</span>
          <h2 className="smh-h2">
            App <span className="smh-grad-text">Screenshots</span>
          </h2>
          <p className="smh-sub">
            A quick look at Sell My Time: find the right expert, pick a slot and book in a few taps.
          </p>
        </div>
        <div className="smh-shots-wrap">
          <button type="button" className="smh-shots-nav prev" onClick={() => scrollShots(-1)} aria-label="Previous screenshots">
            <FaChevronLeft />
          </button>
          <div className="smh-shots-track" ref={shotsRef}>
            {appScreens.map((sc) => (
              <figure className="smh-shot" key={sc.title}>
                <div className="smh-phone">
                  <img src={sc.img} alt={`Sell My Time app: ${sc.title}`} loading="lazy" />
                </div>
                <figcaption>
                  <strong>{sc.title}</strong>
                  <span>{sc.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <button type="button" className="smh-shots-nav next" onClick={() => scrollShots(1)} aria-label="Next screenshots">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section id="why-choose-us" className="smh-why">
        <div className="smh-head-center">
          <span className="smh-eyebrow on-dark">Our Difference</span>
          <h2 className="smh-h2 on-dark">
            Why Choose <span className="smh-grad-text">Us</span>
          </h2>
        </div>

        <div className="smh-why-grid">
          {features.map((f) => (
            <div key={f.id} className="smh-card">
              <span className="smh-card-num" aria-hidden="true">{f.id}</span>
              <div className="smh-card-ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="smh-faq">
        <div className="smh-head-center">
          <span className="smh-eyebrow">FAQ</span>
          <h2 className="smh-h2">
            Frequently Asked <span className="smh-grad-text">Questions</span>
          </h2>
        </div>

        <div className="smh-faq-list">
          {faqs.map((faq, idx) => {
            const open = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFAQ(idx)}
                className={`smh-faq-item${open ? " active" : ""}`}
              >
                <button
                  type="button"
                  className="smh-faq-q"
                  aria-expanded={open}
                  aria-controls={`smh-faq-a-${idx}`}
                >
                  <span>{faq.question}</span>
                  <span className="smh-faq-toggle" aria-hidden="true"><FaChevronDown /></span>
                </button>
                <div className="smh-faq-a" id={`smh-faq-a-${idx}`} role="region" aria-hidden={!open}>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Download CTA ===== */}
      <div className="smh-dl-outer">
        <section id="download" className="smh-download">
          <div>
            <span className="smh-eyebrow on-dark">Get the App</span>
            <h2>
              Download app to start <br />
              <span style={{ color: "#fff" }}>meaningful</span>{" "}
              <span className="smh-accent">connections</span>
            </h2>
            <div className="smh-stores">
              <a
                href="#appstore"
                aria-label="Download on the App Store (Coming Soon)"
                title="App Store (Coming Soon)"
                onClick={(e) => e.preventDefault()}
                className="smh-store"
              >
                <img src={appStoreImg} alt="App Store" />
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                title="Get it on Google Play"
                className="smh-store"
              >
                <img src={googlePlayImg} alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="smh-dl-visual">
            <div className="smh-phones">
              <div className="smh-phone back">
                <img src={scrChoosePath} alt="Sell My Time choose your path screen" loading="lazy" />
              </div>
              <div className="smh-phone front">
                <img src={scrWelcome} alt="Sell My Time welcome screen" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== Contact ===== */}
      <section id="contact" className="smh-contact">
        <div className="smh-contact-grid">
          <div className="smh-form-card">
            <span className="smh-eyebrow">Contact</span>
            <h2 className="smh-h2">
              Get In <span className="smh-grad-text">Touch</span>
            </h2>
            <form onSubmit={handleSubmit} className="smh-form">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="smh-input" required />
              <div className="smh-form-row">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="smh-input" required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="smh-input" required />
              </div>
              <textarea name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange} className="smh-input" style={{ resize: "none" }} required />
              <button type="submit" disabled={loading} className="smh-submit">
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaPaperPlane aria-hidden="true" />}
              </button>
            </form>
          </div>

          <div className="smh-contact-visual">
            <img src={contactImg} alt="Contact" />
          </div>
        </div>
      </section>

      <Footersellmytime />
    </div>
  );
}

export default Home;
