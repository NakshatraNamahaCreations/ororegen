

// import React, { useEffect, useState } from "react";
// import FooterThirtyForty from "./FooterThirtyForty";
// import HeaderThirtyForty from "../30forty/HeaderThirtyForty";
// import bannerImg from "../assets/thirtybanner.webp";
// import girl from "../assets/thirtgirl.webp";
// import {
//   FaBullseye,
//   FaFlagCheckered,
//   FaListAlt,
//   FaHandshake,
// } from "react-icons/fa";
// import phoneMockup from "../assets/thirtyforty-why.webp";
// import contactImg from "../assets/contactthirty.webp";
// import downloadBg from "../assets/thirtyforty-download.webp";
// import appStore from "../assets/appstore.webp";
// import playStore from "../assets/playstore.webp";

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

//   const points = [
//     {
//       number: "1",
//       title: "Expertise You Can Trust",
//       text: "With years of real estate experience, 30Forty brings unmatched industry knowledge and a network of reliable professionals.",
//       icon: <FaBullseye size={22} color="#5DBB1F" />,
//     },
//     {
//       number: "2",
//       title: "Personalized Property Matches",
//       text: "Your dream property is unique — and so is our approach. We use smart filters to tailor every recommendation to your preferences.",
//       icon: <FaFlagCheckered size={22} color="#5DBB1F" />,
//     },
//     {
//       number: "3",
//       title: "Seamless End-to-End Process",
//       text: "Real estate shouldn’t be stressful — with 30Forty, we simplify every step from search to possession.",
//       icon: <FaListAlt size={22} color="#5DBB1F" />,
//     },
//     {
//       number: "4",
//       title: "Strong Local Network",
//       text: "We know your neighborhood better than anyone — connecting you to genuine listings and trusted agents.",
//       icon: <FaHandshake size={22} color="#5DBB1F" />,
//     },
//   ];

//   const faqs = [
//     {
//       question: "How do I find properties listed on 30Forty?",
//       answer:
//         "Simply use our smart filters, location search, and verified listings to find your ideal property.",
//     },
//     {
//       question: "How do I start using 30Forty?",
//       answer:
//         "Download the app from Play Store or App Store, sign up, and start exploring instantly.",
//     },
//     {
//       question: "Does 30Forty ensure data security?",
//       answer:
//         "Yes, we use enterprise-grade encryption and privacy controls to keep your data safe.",
//     },
//     {
//       question: "Can I use 30Forty with a team?",
//       answer:
//         "Absolutely! You can collaborate with team members, share listings, and manage deals together.",
//     },
//     {
//       question: "Who can I contact for support or queries?",
//       answer:
//         "Reach us via the Help section, email, or the contact form below for personalized support.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

//   // ===== Contact form state =====
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     subject: "",
//     company: "", // honeypot (bot trap)
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({ type: "", msg: "" });

//   const handleChange = (e) => {
//     try {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       if (status.type) setStatus({ type: "", msg: "" });
//     } catch (err) {
//       console.error("handleChange error:", err);
//     }
//   };

//   const validate = () => {
//     try {
//       if (!formData.name.trim()) return "Please enter your full name.";
//       if (!/^\S+@\S+\.\S+$/.test(formData.email))
//         return "Please enter a valid email address.";
//       if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone))
//         return "Please enter a valid phone number.";
//       if (!formData.message.trim()) return "Please write a brief message.";
//       if (formData.company) return "Spam detected.";
//       return "";
//     } catch (err) {
//       console.error("validate error:", err);
//       return "Validation failed. Please try again.";
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ type: "", msg: "" });

//     const errMsg = validate();
//     if (errMsg) {
//       setStatus({ type: "error", msg: errMsg });
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("https://api.brevo.com/v3/smtp/email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "api-key": import.meta.env.VITE_BREVO_KEY,
//         },
//         body: JSON.stringify({
//           sender: {
//             email: "ororegencompanies@gmail.com", // must be verified in Brevo
//             name: "Oro Regen Website",
//           },
//           to: [
//             {
//               email: "ororegencompanies@gmail.com",
//               name: "Oro Regen Admin",
//             },
//           ],
//           replyTo: {
//             email: formData.email,
//             name: formData.name,
//           },
//           subject: `📩 New Enquiry from ${formData.name}${
//             formData.subject ? " - " + formData.subject : ""
//           }`,
//           htmlContent: `
//             <div style="font-family:Poppins, sans-serif; color:#333;">
//               <h2 style="color:#000; margin:0 0 12px;">New Enquiry Form Submission</h2>
//               <p><strong>Name:</strong> ${formData.name}</p>
//               <p><strong>Email:</strong> ${formData.email}</p>
//               <p><strong>Phone:</strong> ${formData.phone}</p>
//               <p><strong>Message:</strong><br>${(formData.message || "").replace(/\n/g, "<br/>")}</p>
//               <br/>
//               <p>📨 Submitted via Oro Regen website enquiry form.</p>
//             </div>
//           `,
//         }),
//       });

//       const data = await response.json();
//       console.log("📬 Brevo Response:", data);

//       if (response.ok) {
//         setStatus({
//           type: "success",
//           msg: "Your enquiry has been sent successfully!",
//         });
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//           company: "",
//         });
//       } else {
//         console.error("❌ Brevo Error:", data);
//         setStatus({
//           type: "error",
//           msg: "Failed to send message. Please try again later.",
//         });
//       }
//     } catch (error) {
//       console.error("Network Error:", error);
//       setStatus({
//         type: "error",
//         msg: "Network error occurred while sending your enquiry.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ scrollBehavior: "smooth" }}>
//       <HeaderThirtyForty />

//       {/* ✅ Hero Section */}
//       <section
//         id="home"
//         style={{
//           width: "100%",
//           height: isMobile ? "auto" : "100vh",
//           backgroundImage: `url(${bannerImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: isMobile ? "flex-end" : "center",
//           padding: isMobile ? "110px 20px 60px" : "50px",
//           color: "#fff",
//           position: "relative",
//         }}
//       >
//         <div style={{ maxWidth: isMobile ? "100%" : "600px", zIndex: 2 }}>
//           <h1
//             style={{
//               fontSize: isMobile ? "34px" : "52px",
//               fontWeight: "700",
//               marginBottom: "14px",
//               lineHeight: isMobile ? 1.25 : 1.2,
//               fontFamily: '"Poppins", sans-serif',
//               textShadow: "0 3px 12px rgba(0,0,0,.35)",
//             }}
//           >
//             Smart Homes for <br /> Smarter Living.
//           </h1>
//           <p
//             style={{
//               fontSize: isMobile ? "16px" : "18px",
//               lineHeight: 1.6,
//               color: "#f1f1f1",
//               fontFamily: '"Poppins", sans-serif',
//               background: isMobile ? "rgba(0,0,0,0.25)" : "transparent",
//               padding: isMobile ? "8px 10px" : 0,
//               borderRadius: 8,
//               display: "inline-block",
//             }}
//           >
//             Find your dream home effortlessly with <strong>30Forty</strong> —
//             where technology meets comfort.
//           </p>
//         </div>
//       </section>

//       {/* ✅ About Section */}
//       <section
//         id="about"
//         style={{
//           position: "relative",
//           padding: isMobile ? "50px 20px" : "80px 60px",
//           backgroundColor: "#fff",
//           fontFamily: '"Poppins", sans-serif',
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1.8fr",
//             gap: isMobile ? "24px" : "50px",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           <div>
//             <h4 style={{ color: "#5DBB1F", fontWeight: 700 }}>About Us</h4>
//             <h2 style={{ fontSize: isMobile ? "24px" : "28px", fontWeight: 700 }}>
//               Redefining Real Estate
//             </h2>
//             <p
//               style={{
//                 color: "#444",
//                 fontSize: isMobile ? "15px" : "16px",
//                 lineHeight: 1.8,
//               }}
//             >
//               At 30Forty, we’re redefining how people discover, buy, and sell
//               properties — integrating digital solutions with expert guidance to
//               make your real estate journey stress-free.
//             </p>
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//               gap: "20px",
//             }}
//           >
//             {points.map((item, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: "#fff",
//                   padding: "22px",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                 }}
//               >
//                 {item.icon}
//                 <h3 style={{ margin: "10px 0 6px" }}>{item.title}</h3>
//                 <p style={{ color: "#555", fontSize: isMobile ? 14 : 16 }}>
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {!isMobile && (
//           <img
//             src={girl}
//             alt="Illustration"
//             style={{
//               position: "absolute",
//               bottom: 0,
//               right: 30,
//               height: 200,
//             }}
//           />
//         )}
//       </section>

//       {/* ✅ Why Choose Us Section (IMPROVED MOBILE) */}
//       <section
//         id="whyus"
//         style={{
//           backgroundImage: isMobile ? "none" : `url(${phoneMockup})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: isMobile ? "36px 20px" : "80px 60px",
//           backgroundColor: isMobile ? "#fff" : "transparent",
//         }}
//       >
//         {/* Desktop: keep your original white card on the right */}
//         {!isMobile ? (
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               maxWidth: "1200px",
//               margin: "0 auto",
//             }}
//           >
//             <div />
//             <div
//               style={{
//                 background: "rgba(255,255,255,0.92)",
//                 padding: "30px",
//                 borderRadius: "12px",
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//               }}
//             >
//               <h2
//                 style={{
//                   color: "#5DBB1F",
//                   fontWeight: 800,
//                   marginBottom: 18,
//                   fontSize: 26,
//                 }}
//               >
//                 Why Choose Us
//               </h2>
//               {points.map((p, i) => (
//                 <div key={i} style={{ display: "flex", marginBottom: 16 }}>
//                   <div
//                     style={{
//                       fontWeight: 700,
//                       color: "#5DBB1F",
//                       marginRight: 12,
//                       minWidth: 22,
//                     }}
//                   >
//                     {p.number}
//                   </div>
//                   <div>
//                     <h3 style={{ margin: 0, fontSize: 18 }}>{p.title}</h3>
//                     <p style={{ margin: "4px 0 0", color: "#555" }}>{p.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           // Mobile: compact, attractive cards with number badge & icon
//           <div style={{ maxWidth: 960, margin: "0 auto" }}>
//             <h2
//               style={{
//                 color: "#5DBB1F",
//                 fontWeight: 800,
//                 fontSize: 22,
//                 marginBottom: 16,
//                 textAlign: "center",
//               }}
//             >
//               Why Choose Us
//             </h2>

//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr",
//                 gap: 12,
//               }}
//             >
//               {points.map((p, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     background: "#fff",
//                     border: "1px solid #eee",
//                     borderRadius: 12,
//                     padding: 14,
//                     boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
//                     display: "grid",
//                     gridTemplateColumns: "auto 1fr",
//                     gap: 12,
//                     alignItems: "center",
//                   }}
//                 >
//                   {/* Number badge */}
//                   <div
//                     style={{
//                       width: 38,
//                       height: 38,
//                       borderRadius: 10,
//                       background:
//                         "linear-gradient(135deg, rgba(255,77,77,1), rgba(209,0,31,1))",
//                       color: "#fff",
//                       fontWeight: 800,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       boxShadow: "0 6px 16px rgba(209,0,31,0.25)",
//                     }}
//                     aria-hidden
//                   >
//                     {p.number}
//                   </div>

//                   {/* Title + text */}
//                   <div>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 8,
//                         marginBottom: 4,
//                       }}
//                     >
//                       {p.icon}
//                       <h3
//                         style={{
//                           margin: 0,
//                           fontSize: 16,
//                           lineHeight: 1.2,
//                           color: "#111",
//                         }}
//                       >
//                         {p.title}
//                       </h3>
//                     </div>
//                     <p
//                       style={{
//                         margin: 0,
//                         color: "#555",
//                         fontSize: 14,
//                         lineHeight: 1.55,
//                       }}
//                     >
//                       {p.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* ✅ FAQ Section */}
//       <section
//         id="faq"
//         style={{
//           padding: isMobile ? "50px 16px" : "80px 20px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <div style={{ textAlign: "center", marginBottom: isMobile ? 26 : 50 }}>
//           <h2
//             style={{
//               fontSize: isMobile ? 24 : 32,
//               fontWeight: 800,
//               color: "#111356",
//             }}
//           >
//             Frequently Asked Questions
//           </h2>
//         </div>

//         <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//           {faqs.map((faq, i) => (
//             <div
//               key={i}
//               onClick={() => toggleFAQ(i)}
//               style={{
//                 padding: isMobile ? "14px 16px" : "18px 22px",
//                 border: openIndex === i ? "1px solid #5DBB1F" : "1px solid #eee",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 transition: "0.3s ease",
//                 background: "#fafafa",
//               }}
//             >
//               <h3
//                 style={{
//                   marginBottom: openIndex === i ? "8px" : 0,
//                   color: "#111",
//                   fontSize: isMobile ? 16 : 18,
//                 }}
//               >
//                 {faq.question}
//               </h3>
//               {openIndex === i && (
//                 <p style={{ color: "#555", lineHeight: 1.6, fontSize: isMobile ? 14 : 16 }}>
//                   {faq.answer}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Contact Section (wired to Brevo) */}
//       <section
//         id="contact"
//         style={{
//           position: "relative",
//           padding: isMobile ? "60px 20px" : "100px 60px",
//           backgroundImage: `url(${contactImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           color: "#000",
//         }}
//       >
//         {/* Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background: "rgba(255, 255, 255, 0.92)",
//             zIndex: 1,
//           }}
//         ></div>

//         {/* Contact Content */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 2,
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//             gap: isMobile ? "26px" : "60px",
//             maxWidth: "1200px",
//             margin: "0 auto",
//             alignItems: "center",
//           }}
//         >
//           {/* Left Info */}
//           <div>
//             <h3 style={{ color: "#5DBB1F", fontWeight: 700 }}>📍 Address</h3>
//             <p style={{ marginTop: 6 }}>
//               #36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008
//             </p>

//             <h3 style={{ color: "#5DBB1F", fontWeight: 700, marginTop: 16 }}>
//               📞 Call
//             </h3>
//             <p style={{ marginTop: 6 }}>+91 73495 79436</p>

//             <h3 style={{ color: "#5DBB1F", fontWeight: 700, marginTop: 16 }}>
//               ✉ Mail
//             </h3>
//             <p style={{ marginTop: 6 }}>support@30forty.in</p>
//           </div>

//           {/* Right Form */}
//           <div
//             style={{
//               background: "#fff",
//               padding: isMobile ? "24px" : "40px",
//               borderRadius: "12px",
//               boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h2
//               style={{
//                 color: "#111356",
//                 fontWeight: "800",
//                 marginBottom: "16px",
//                 fontSize: isMobile ? "1.5rem" : "1.8rem",
//               }}
//             >
//               Send Us a Message
//             </h2>

//             {/* Status message */}
//             {status.msg ? (
//               <div
//                 role="alert"
//                 style={{
//                   marginBottom: 16,
//                   padding: "12px 14px",
//                   borderRadius: 8,
//                   background:
//                     status.type === "success"
//                       ? "rgba(0,180,0,0.08)"
//                       : "rgba(220,0,0,0.08)",
//                   border:
//                     status.type === "success"
//                       ? "1px solid rgba(0,180,0,0.3)"
//                       : "1px solid rgba(220,0,0,0.3)",
//                   color: status.type === "success" ? "#05650a" : "#7a1111",
//                   fontSize: 14,
//                 }}
//               >
//                 {status.msg}
//               </div>
//             ) : null}

//             <form style={{ display: "grid", gap: "16px" }} onSubmit={handleSubmit}>
//               {/* Honeypot (hidden) */}
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 tabIndex="-1"
//                 autoComplete="off"
//                 style={{ display: "none" }}
//               />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   fontSize: "1rem",
//                 }}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Mail *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   fontSize: "1rem",
//                 }}
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone *"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   fontSize: "1rem",
//                 }}
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject (optional)"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 style={{
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   fontSize: "1rem",
//                 }}
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message..."
//                 rows={isMobile ? 4 : 5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   resize: "none",
//                   fontSize: "1rem",
//                 }}
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 aria-busy={loading}
//                 style={{
//                   background: loading
//                     ? "linear-gradient(90deg, #bbb, #999)"
//                     : "linear-gradient(90deg, #5DBB1F, #FEFD03)",
//                   color: "#fff",
//                   padding: "12px",
//                   border: "none",
//                   borderRadius: "6px",
//                   fontWeight: 600,
//                   fontSize: "1rem",
//                   cursor: loading ? "not-allowed" : "pointer",
//                   transition: "background 0.3s ease",
//                 }}
//               >
//                 {loading ? "Sending..." : "✉ Send Now"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ✅ Download Section */}
//       <section
//         id="download"
//         style={{
//           backgroundImage: `url(${downloadBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: isMobile ? "80px 20px" : "150px 60px",
//           color: "#fff",
//         }}
//       >
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={{ fontSize: isMobile ? "28px" : "42px", fontWeight: 800 }}>
//             Apps Available for All Devices
//           </h2>
//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               marginTop: "20px",
//               flexWrap: "wrap",
//             }}
//           >
//             <a href="#">
//               <img
//                 src={appStore}
//                 alt="App Store"
//                 style={{ height: isMobile ? "42px" : "50px" }}
//               />
//             </a>
//             <a href="#">
//               <img
//                 src={playStore}
//                 alt="Google Play"
//                 style={{ height: isMobile ? "42px" : "50px" }}
//               />
//             </a>
//           </div>
//         </div>
//       </section>

//       <FooterThirtyForty />
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import FooterThirtyForty from "./FooterThirtyForty";
import HeaderThirtyForty from "../30forty/HeaderThirtyForty";
import bannerImg from "../assets/thirtybanner.webp";
import girl from "../assets/thirtgirl.webp";
import {
  FaBullseye,
  FaFlagCheckered,
  FaListAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGooglePlay,
  FaArrowRight,
  FaSlidersH,
  FaCheckCircle,
  FaShieldAlt,
  FaPaperPlane,
  FaPlus,
} from "react-icons/fa";
import phoneMockup from "../assets/thirtyforty-why.webp";
import contactImg from "../assets/contactthirty.webp";
import downloadBg from "../assets/thirtyforty-download.webp";
import appStore from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ororegencompanies.thirtyforty&hl=en_IN";

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

/* ---------- Page styles (scoped with the tf- prefix) ---------- */
const tfStyles = `
.tf-page {
  --tf-green: #5DBB1F;
  --tf-green-2: #83E011;
  --tf-lime: #A7E00C;
  --tf-yellow: #FEFD03;
  --tf-deep: #2D6A0F;
  --tf-ink: #12260A;
  --tf-tint: #F4FBEA;
  --tf-tint-2: #E8FFC2;
  --tf-grad: linear-gradient(90deg, #5DBB1F, #83E011, #FEFD03);
  --tf-grad-badge: linear-gradient(135deg, #43E01A 0%, #88E011 55%, #A7E00C 100%);
  --tf-shadow: 0 1px 2px rgba(18,38,10,.06), 0 8px 24px rgba(18,38,10,.07), 0 24px 48px -24px rgba(45,106,15,.18);
  --tf-shadow-hover: 0 2px 4px rgba(18,38,10,.06), 0 16px 36px rgba(18,38,10,.10), 0 36px 60px -28px rgba(45,106,15,.32);
  font-family: 'Poppins', sans-serif;
  color: #333;
  overflow-x: hidden;
}
.tf-page h1, .tf-page h2, .tf-page h3, .tf-page h4, .tf-page p { font-family: 'Poppins', sans-serif; }
.tf-container { max-width: 1200px; margin: 0 auto; position: relative; }

/* ---------- Shared bits ---------- */
.tf-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px 7px 10px; border-radius: 999px;
  background: rgba(93,187,31,.10); border: 1px solid rgba(93,187,31,.28);
  color: var(--tf-deep); font-size: 13px; font-weight: 600; letter-spacing: .06em;
  text-transform: uppercase; margin: 0 0 16px; line-height: 1.2;
}
.tf-eyebrow::before {
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: var(--tf-grad-badge); box-shadow: 0 0 0 4px rgba(131,224,17,.22);
}
.tf-eyebrow.tf-light {
  background: rgba(255,255,255,.10); border-color: rgba(254,253,3,.35); color: #F1FFD6;
}
.tf-eyebrow.tf-light::before { background: var(--tf-yellow); box-shadow: 0 0 0 4px rgba(254,253,3,.2); }
.tf-h2 {
  font-size: clamp(28px, 3.4vw, 42px); font-weight: 800; line-height: 1.15;
  letter-spacing: -.02em; color: var(--tf-ink); margin: 0 0 16px;
}
.tf-h2 .tf-mark {
  background: linear-gradient(90deg, #3F9A12, #5DBB1F 55%, #83E011);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.tf-lead { font-size: 17px; line-height: 1.8; color: #555; margin: 0; }
.tf-rule { width: 64px; height: 4px; border-radius: 4px; background: var(--tf-grad); margin: 22px 0 0; }
.tf-center { text-align: center; }
.tf-center .tf-rule { margin-left: auto; margin-right: auto; }

.tf-badge {
  width: 52px; height: 52px; border-radius: 16px; flex: 0 0 52px;
  display: grid; place-items: center; color: #fff;
  background: var(--tf-grad-badge);
  box-shadow: 0 10px 22px -8px rgba(93,187,31,.7), inset 0 1px 0 rgba(255,255,255,.35);
}

.tf-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 15px 28px; border-radius: 14px; font-weight: 700; font-size: 16px;
  text-decoration: none; cursor: pointer; border: 0; font-family: 'Poppins', sans-serif;
  transition: transform .25s ease, box-shadow .25s ease, background-position .4s ease, background-color .25s ease;
}
.tf-btn-primary {
  color: var(--tf-ink); background: linear-gradient(90deg, #5DBB1F, #83E011, #FEFD03, #83E011);
  background-size: 200% 100%; background-position: 0 0;
  box-shadow: 0 12px 28px -10px rgba(131,224,17,.75), inset 0 1px 0 rgba(255,255,255,.4);
}
.tf-btn-primary:hover, .tf-btn-primary:focus-visible {
  transform: translateY(-3px); background-position: 100% 0;
  box-shadow: 0 18px 36px -12px rgba(131,224,17,.9), inset 0 1px 0 rgba(255,255,255,.4);
}
.tf-btn-ghost {
  color: #fff; background: rgba(255,255,255,.10); border: 1px solid rgba(255,255,255,.35);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
}
.tf-btn-ghost:hover, .tf-btn-ghost:focus-visible { background: rgba(255,255,255,.2); transform: translateY(-3px); }
.tf-btn:focus-visible { outline: 3px solid rgba(254,253,3,.8); outline-offset: 3px; }
.tf-btn svg { transition: transform .25s ease; }
.tf-btn:hover svg.tf-arrow { transform: translateX(4px); }

.tf-chip {
  display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px;
  font-size: 13.5px; font-weight: 500; color: #fff;
  background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.22);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.tf-chip svg { color: var(--tf-yellow); }

/* ---------- Hero ---------- */
.tf-hero {
  position: relative; width: 100%; height: 100vh; min-height: 680px;
  background-size: cover; background-position: center;
  display: flex; align-items: center; padding: 120px 60px 60px; color: #fff; overflow: hidden;
}
.tf-hero::before {
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background:
    radial-gradient(60% 80% at 0% 100%, rgba(131,224,17,.28), transparent 60%),
    linear-gradient(90deg, rgba(10,22,5,.86) 0%, rgba(14,30,8,.66) 30%, rgba(18,38,10,.28) 40%, rgba(18,38,10,0) 47%);
}
.tf-hero-inner { position: relative; z-index: 2; max-width: 620px; }
.tf-hero h1 {
  font-size: clamp(42px, 4.6vw, 66px); font-weight: 800; line-height: 1.08; letter-spacing: -.03em;
  margin: 0 0 20px; color: #fff; text-shadow: 0 6px 30px rgba(0,0,0,.35);
}
.tf-grad-text {
  background: var(--tf-grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  text-shadow: none;
}
.tf-hero p.tf-hero-sub { font-size: 19px; line-height: 1.7; color: rgba(255,255,255,.86); margin: 0 0 32px; max-width: 520px; }
.tf-hero p.tf-hero-sub strong { color: #fff; }
.tf-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
.tf-hero-chips { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 34px; }
.tf-hero .tf-eyebrow { margin-bottom: 22px; }

@keyframes tfFadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
.tf-anim { animation: tfFadeUp .8s cubic-bezier(.2,.7,.2,1) both; }
.tf-d1 { animation-delay: .08s; } .tf-d2 { animation-delay: .18s; } .tf-d3 { animation-delay: .28s; } .tf-d4 { animation-delay: .38s; }

/* Mobile hero */
.tf-mhero { padding-top: 72px; background: #fff; }
.tf-mhero-img { width: 100%; display: block; aspect-ratio: 16 / 9; object-fit: cover; }
.tf-mhero-body {
  position: relative; margin: -28px 14px 0; padding: 26px 20px 24px; border-radius: 24px;
  background: linear-gradient(160deg, #12260A 0%, #1E4209 60%, #2D6A0F 100%);
  color: #fff; box-shadow: 0 24px 50px -24px rgba(18,38,10,.6); overflow: hidden;
}
.tf-mhero-body::before {
  content: ""; position: absolute; width: 220px; height: 220px; right: -80px; top: -90px; border-radius: 50%;
  background: radial-gradient(circle, rgba(167,224,12,.45), transparent 70%); pointer-events: none;
}
.tf-mhero-body h1 {
  position: relative; font-size: 34px; font-weight: 800; line-height: 1.12; letter-spacing: -.02em; margin: 0 0 12px; color: #fff;
}
.tf-mhero-body p { position: relative; font-size: 15.5px; line-height: 1.7; color: rgba(255,255,255,.85); margin: 0; }
.tf-mhero-body .tf-hero-chips { margin-top: 18px; gap: 8px; position: relative; }
.tf-mhero-body .tf-chip { font-size: 12.5px; padding: 7px 12px; }
@keyframes tfPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(131,224,17,.55); }
  70% { box-shadow: 0 0 0 16px rgba(131,224,17,0); }
}
.tf-download-btn {
  position: relative; display: flex; width: 100%; margin: 22px auto 0; padding: 17px 24px; font-size: 19px;
  animation: tfPulse 2s infinite;
}
.tf-download-btn:hover, .tf-download-btn:active { transform: translateY(-3px) scale(1.02); animation: none; }

/* ---------- About ---------- */
.tf-about {
  position: relative; padding: 110px 60px 120px; overflow: hidden;
  background:
    radial-gradient(40% 50% at 100% 0%, rgba(232,255,194,.8), transparent 70%),
    radial-gradient(35% 45% at 0% 100%, rgba(232,255,194,.55), transparent 70%),
    #fff;
}
.tf-about-grid { display: grid; grid-template-columns: 1fr 1.55fr; gap: 64px; align-items: start; }
.tf-about-copy { position: sticky; top: 130px; }
.tf-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.tf-card {
  position: relative; background: #fff; border-radius: 22px; padding: 28px 26px 26px;
  border: 1px solid rgba(93,187,31,.14); box-shadow: var(--tf-shadow); overflow: hidden;
  transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease;
}
.tf-card::before {
  content: ""; position: absolute; left: 0; right: 0; top: 0; height: 4px; background: var(--tf-grad);
  transform: scaleX(0); transform-origin: left; transition: transform .45s ease;
}
.tf-card:hover { transform: translateY(-8px); box-shadow: var(--tf-shadow-hover); border-color: rgba(93,187,31,.35); }
.tf-card:hover::before { transform: scaleX(1); }
.tf-card-num {
  position: absolute; right: 20px; top: 14px; font-size: 54px; font-weight: 800; line-height: 1;
  color: rgba(93,187,31,.10); letter-spacing: -.04em; transition: color .35s ease;
}
.tf-card:hover .tf-card-num { color: rgba(93,187,31,.2); }
.tf-card h3 { margin: 20px 0 8px; font-size: 19px; font-weight: 700; color: var(--tf-ink); line-height: 1.3; }
.tf-card p { margin: 0; color: #555; font-size: 15px; line-height: 1.7; }
.tf-about-girl { position: absolute; bottom: 0; right: 30px; height: 200px; z-index: 0; pointer-events: none; }

/* ---------- Why us ---------- */
.tf-why { position: relative; background-size: cover; background-position: center; padding: 100px 60px; }
.tf-why-grid { display: grid; grid-template-columns: 1fr 1fr; }
.tf-why-panel {
  position: relative; padding: 40px 38px; border-radius: 28px;
  background: rgba(255,255,255,.86); border: 1px solid rgba(255,255,255,.9);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 30px 70px -30px rgba(18,38,10,.35), 0 8px 20px rgba(18,38,10,.06);
}
.tf-why-list { display: grid; gap: 6px; margin-top: 8px; }
.tf-why-item {
  display: grid; grid-template-columns: auto 1fr; gap: 18px; align-items: start;
  padding: 16px 16px; border-radius: 18px; transition: background .3s ease, transform .3s ease;
}
.tf-why-item:hover { background: rgba(232,255,194,.55); transform: translateX(4px); }
.tf-why-num {
  width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center;
  font-weight: 800; font-size: 17px; color: var(--tf-ink); background: var(--tf-grad-badge);
  box-shadow: 0 10px 20px -8px rgba(93,187,31,.7), inset 0 1px 0 rgba(255,255,255,.4);
}
.tf-why-item h3 { margin: 2px 0 6px; font-size: 18px; font-weight: 700; color: var(--tf-ink); display: flex; align-items: center; gap: 8px; }
.tf-why-item h3 svg { color: var(--tf-green); flex: 0 0 auto; }
.tf-why-item p { margin: 0; color: #555; font-size: 15px; line-height: 1.65; }

/* ---------- FAQ ---------- */
.tf-faq { padding: 110px 20px; background: linear-gradient(180deg, #fff 0%, var(--tf-tint) 100%); }
.tf-faq-head { margin-bottom: 48px; }
.tf-faq-list { max-width: 880px; margin: 0 auto; display: grid; gap: 14px; }
.tf-faq-item {
  position: relative; background: #fff; border-radius: 18px; border: 1px solid #E6EEDD;
  box-shadow: 0 1px 2px rgba(18,38,10,.04), 0 6px 18px rgba(18,38,10,.04); overflow: hidden;
  transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;
}
.tf-faq-item::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(180deg, #5DBB1F, #FEFD03);
  opacity: 0; transition: opacity .3s ease;
}
.tf-faq-item:hover { border-color: rgba(93,187,31,.45); transform: translateY(-2px); }
.tf-faq-item.tf-open { border-color: var(--tf-green); box-shadow: 0 18px 40px -20px rgba(45,106,15,.35), 0 0 0 4px rgba(93,187,31,.08); }
.tf-faq-item.tf-open::before { opacity: 1; }
.tf-faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 18px;
  background: none; border: 0; padding: 22px 24px; text-align: left; cursor: pointer; font-family: 'Poppins', sans-serif;
}
.tf-faq-q:focus-visible { outline: 3px solid rgba(93,187,31,.5); outline-offset: -3px; border-radius: 18px; }
.tf-faq-q h3 { margin: 0; font-size: 18px; font-weight: 600; color: var(--tf-ink); line-height: 1.45; }
.tf-faq-icon {
  flex: 0 0 36px; width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center;
  background: var(--tf-tint); color: var(--tf-deep); transition: background .35s ease, color .35s ease;
}
.tf-faq-icon svg { transition: transform .35s ease; }
.tf-open .tf-faq-icon { background: var(--tf-grad-badge); color: var(--tf-ink); box-shadow: 0 8px 16px -8px rgba(93,187,31,.8); }
.tf-open .tf-faq-icon svg { transform: rotate(45deg); }
.tf-faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
.tf-open .tf-faq-a { grid-template-rows: 1fr; }
.tf-faq-a > div { overflow: hidden; }
.tf-faq-a p { margin: 0; padding: 0 24px 22px; color: #555; line-height: 1.75; font-size: 16px; }

/* ---------- Contact ---------- */
.tf-contact { position: relative; padding: 110px 60px; background: var(--tf-tint); overflow: hidden; }
.tf-contact-deco {
  position: absolute; right: -60px; top: 40px; width: 420px; opacity: .55; pointer-events: none; z-index: 0;
}
.tf-contact-shell {
  position: relative; z-index: 1; display: grid; grid-template-columns: .9fr 1.25fr; border-radius: 32px; overflow: hidden;
  background: #fff; box-shadow: 0 40px 80px -40px rgba(18,38,10,.45), 0 10px 30px rgba(18,38,10,.06);
}
.tf-contact-info {
  position: relative; padding: 52px 44px; color: #fff; overflow: hidden;
  display: flex; flex-direction: column; justify-content: center;
  background: linear-gradient(155deg, #12260A 0%, #1C3F0B 55%, #2D6A0F 100%);
}
.tf-contact-info::before, .tf-contact-info::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none;
}
.tf-contact-info::before { width: 320px; height: 320px; right: -140px; bottom: -120px; background: radial-gradient(circle, rgba(167,224,12,.45), transparent 70%); }
.tf-contact-info::after { width: 180px; height: 180px; left: -70px; top: -70px; border: 28px solid rgba(254,253,3,.08); }
.tf-contact-info .tf-eyebrow { align-self: flex-start; }
.tf-contact-title { position: relative; z-index: 1; margin: 0 0 22px; font-size: 30px; font-weight: 800; line-height: 1.2; letter-spacing: -.02em; color: #fff; }
.tf-contact-items { position: relative; z-index: 1; display: grid; gap: 14px; margin-top: 8px; }
.tf-info {
  display: flex; gap: 16px; align-items: flex-start; padding: 16px; border-radius: 18px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.10);
  transition: background .3s ease, transform .3s ease, border-color .3s ease;
}
.tf-info:hover { background: rgba(255,255,255,.11); border-color: rgba(254,253,3,.3); transform: translateY(-3px); }
.tf-info .tf-badge { width: 46px; height: 46px; flex-basis: 46px; border-radius: 14px; color: var(--tf-ink); }
.tf-info h3 { margin: 0 0 4px; font-size: 13px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #CFF58A; }
.tf-info p { margin: 0; font-size: 15.5px; line-height: 1.6; color: #fff; word-break: break-word; }
.tf-info a { color: #fff; text-decoration: none; }
.tf-info a:hover { color: var(--tf-yellow); }
.tf-contact-form { padding: 52px 48px; }
.tf-contact-form h2 { margin: 0 0 6px; font-size: clamp(26px, 2.6vw, 34px); font-weight: 800; color: var(--tf-ink); letter-spacing: -.02em; }
.tf-contact-form .tf-rule { margin: 14px 0 26px; }
.tf-form { display: grid; gap: 16px; grid-template-columns: 1fr 1fr; }
.tf-form .tf-full { grid-column: 1 / -1; }
.tf-input {
  width: 100%; padding: 15px 16px; border-radius: 14px; border: 1.5px solid #E1EBD6; background: #F8FBF4;
  font-size: 15.5px; font-family: 'Poppins', sans-serif; color: #111; outline: none;
  transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
}
.tf-input::placeholder { color: #8A9682; }
.tf-input:hover { border-color: #C8DDB4; }
.tf-input:focus { border-color: var(--tf-green); background: #fff; box-shadow: 0 0 0 4px rgba(93,187,31,.18); }
textarea.tf-input { resize: none; }
.tf-submit { width: 100%; padding: 16px; font-size: 16.5px; }
.tf-submit:disabled { background: linear-gradient(90deg, #c9d3c0, #aab69f); color: #fff; box-shadow: none; cursor: not-allowed; transform: none; }
.tf-status { margin-bottom: 18px; padding: 13px 16px; border-radius: 14px; font-size: 14.5px; display: flex; gap: 10px; align-items: center; }
.tf-status.tf-ok { background: rgba(93,187,31,.10); border: 1px solid rgba(93,187,31,.4); color: #24570B; }
.tf-status.tf-err { background: rgba(220,0,0,.06); border: 1px solid rgba(220,0,0,.28); color: #7a1111; }

/* ---------- Download ---------- */
.tf-download {
  position: relative; background-size: cover; background-position: center; background-repeat: no-repeat;
  padding: 150px 60px; color: #fff; overflow: hidden;
}
.tf-download::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, rgba(14,30,8,.88) 0%, rgba(18,38,10,.6) 35%, rgba(18,38,10,0) 60%);
}
.tf-download-inner { position: relative; z-index: 1; }
.tf-download h2 {
  font-size: clamp(30px, 3.6vw, 50px); font-weight: 800; line-height: 1.12; letter-spacing: -.02em;
  margin: 0; max-width: 640px; color: #fff;
}
.tf-download h2 .tf-yel {
  display: block;
  background: linear-gradient(90deg, #E8FFC2, #FEFD03); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.tf-stores { display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap; }
.tf-store {
  display: inline-flex; border-radius: 12px; padding: 4px; background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.25); transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}
.tf-store:hover, .tf-store:focus-visible { transform: translateY(-4px); background: rgba(254,253,3,.25); box-shadow: 0 16px 30px -12px rgba(0,0,0,.5); }
.tf-store img { display: block; border-radius: 8px; }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .tf-about-grid { grid-template-columns: 1fr; gap: 40px; }
  .tf-about-copy { position: static; }
}
@media (max-width: 768px) {
  .tf-h2 { font-size: 28px; }
  .tf-lead { font-size: 15.5px; }
  .tf-eyebrow { font-size: 11.5px; margin-bottom: 12px; }
  .tf-about { padding: 64px 18px 56px; background: linear-gradient(180deg, #fff 0%, #fff 40%, var(--tf-tint) 100%); }
  .tf-about-grid { gap: 28px; }
  .tf-cards { grid-template-columns: 1fr; gap: 14px; }
  .tf-card { padding: 22px 20px; border-radius: 20px; }
  .tf-card h3 { font-size: 17px; margin-top: 16px; }
  .tf-card p { font-size: 14.5px; }
  .tf-card-num { font-size: 44px; }
  .tf-badge { width: 46px; height: 46px; flex-basis: 46px; border-radius: 14px; }
  .tf-why { padding: 60px 16px; background-image: none !important; background: linear-gradient(180deg, var(--tf-tint), #fff); }
  .tf-why-grid { grid-template-columns: 1fr; }
  .tf-why-grid > .tf-why-spacer { display: none; }
  .tf-why-panel { padding: 26px 14px 14px; border-radius: 24px; background: #fff; }
  .tf-why-panel .tf-head { padding: 0 8px; text-align: center; }
  .tf-why-panel .tf-rule { margin-left: auto; margin-right: auto; }
  .tf-why-item { padding: 14px 10px; gap: 14px; }
  .tf-why-item h3 { font-size: 16px; }
  .tf-why-item p { font-size: 14px; }
  .tf-why-num { width: 42px; height: 42px; font-size: 15px; border-radius: 12px; }
  .tf-faq { padding: 64px 16px; }
  .tf-faq-head { margin-bottom: 28px; }
  .tf-faq-q { padding: 18px 18px; }
  .tf-faq-q h3 { font-size: 16px; }
  .tf-faq-a p { padding: 0 18px 18px; font-size: 14.5px; }
  .tf-contact { padding: 64px 14px; }
  .tf-contact-deco { display: none; }
  .tf-contact-shell { grid-template-columns: 1fr; border-radius: 26px; }
  .tf-contact-info { padding: 30px 18px; }
  .tf-contact-form { padding: 30px 20px 26px; }
  .tf-form { grid-template-columns: 1fr; gap: 14px; }
  .tf-download { padding: 52px 22px 56px; margin: 0 12px 28px; border-radius: 24px; background-position: 72% center; }
  .tf-download::before { background: linear-gradient(90deg, rgba(14,30,8,.88) 0%, rgba(18,38,10,.55) 60%, rgba(18,38,10,.25) 100%); }
  .tf-download h2 { font-size: 26px; max-width: 260px; }
  .tf-contact-title { font-size: 24px; margin-bottom: 16px; }
  .tf-stores { margin-top: 20px; gap: 10px; }
}
@media (prefers-reduced-motion: reduce) {
  .tf-page *, .tf-page *::before, .tf-page *::after {
    animation: none !important; transition: none !important;
  }
}
`;

function SectionHead({ eyebrow, title, sub, center, light }) {
  return (
    <div className={`tf-head${center ? " tf-center" : ""}`}>
      <p className={`tf-eyebrow${light ? " tf-light" : ""}`}>{eyebrow}</p>
      <h2 className="tf-h2" style={light ? { color: "#fff" } : undefined}>
        {title}
      </h2>
      {sub ? <p className="tf-lead">{sub}</p> : null}
      <div className="tf-rule" />
    </div>
  );
}

function Home() {
  const isMobile = useIsMobile(768);

  const points = [
    {
      number: "1",
      title: "Expertise You Can Trust",
      text: "With years of real estate experience, Thirty Forty brings unmatched industry knowledge and a network of reliable professionals.",
      icon: <FaBullseye size={22} />,
    },
    {
      number: "2",
      title: "Personalized Property Matches",
      text: "Your dream property is unique — and so is our approach. We use smart filters to tailor every recommendation to your preferences.",
      icon: <FaFlagCheckered size={22} />,
    },
    {
      number: "3",
      title: "Seamless End-to-End Process",
      text: "Real estate shouldn’t be stressful — with Thirty Forty, we simplify every step from search to possession.",
      icon: <FaListAlt size={22} />,
    },
    {
      number: "4",
      title: "Strong Local Network",
      text: "We know your neighborhood better than anyone — connecting you to genuine listings and trusted agents.",
      icon: <FaHandshake size={22} />,
    },
  ];

  const faqs = [
    {
      question: "How do I find properties listed on Thirty Forty?",
      answer:
        "Simply use our smart filters, location search, and verified listings to find your ideal property.",
    },
    {
      question: "How do I start using Thirty Forty?",
      answer:
        "Download the app from Play Store or App Store, sign up, and start exploring instantly.",
    },
    {
      question: "Does Thirty Forty ensure data security?",
      answer:
        "Yes, we use enterprise-grade encryption and privacy controls to keep your data safe.",
    },
    {
      question: "Can I use Thirty Forty with a team?",
      answer:
        "Absolutely! You can collaborate with team members, share listings, and manage deals together.",
    },
    {
      question: "Who can I contact for support or queries?",
      answer:
        "Reach us via the Help section, email, or the contact form below for personalized support.",
    },
  ];

  // Facts taken from the FAQ answers above (no new claims)
  const heroChips = [
    { icon: <FaSlidersH size={13} />, label: "Smart filters" },
    { icon: <FaCheckCircle size={13} />, label: "Verified listings" },
    { icon: <FaShieldAlt size={13} />, label: "Enterprise-grade encryption" },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // ===== Contact form state =====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    company: "", // honeypot (bot trap)
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (status.type) setStatus({ type: "", msg: "" });
    } catch (err) {
      console.error("handleChange error:", err);
    }
  };

  const validate = () => {
    try {
      if (!formData.name.trim()) return "Please enter your full name.";
      if (!/^\S+@\S+\.\S+$/.test(formData.email))
        return "Please enter a valid email address.";
      if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone))
        return "Please enter a valid phone number.";
      if (!formData.message.trim()) return "Please write a brief message.";
      if (formData.company) return "Spam detected.";
      return "";
    } catch (err) {
      console.error("validate error:", err);
      return "Validation failed. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const errMsg = validate();
    if (errMsg) {
      setStatus({ type: "error", msg: errMsg });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_BREVO_KEY,
        },
        body: JSON.stringify({
          sender: {
            email: "ororegencompanies@gmail.com",
            name: "Oro Regen Website",
          },
          to: [
            {
              email: "ororegencompanies@gmail.com",
              name: "Oro Regen Admin",
            },
          ],
          replyTo: {
            email: formData.email,
            name: formData.name,
          },
          subject: `📩 New Enquiry from ${formData.name}${
            formData.subject ? " - " + formData.subject : ""
          }`,
          htmlContent: `
            <div style="font-family:Poppins, sans-serif; color:#333;">
              <h2 style="color:#000; margin:0 0 12px;">New Enquiry Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Message:</strong><br>${(formData.message || "").replace(/\n/g, "<br/>")}</p>
              <br/>
              <p>📨 Submitted via Oro Regen website enquiry form.</p>
            </div>
          `,
        }),
      });

      const data = await response.json();
      console.log("📬 Brevo Response:", data);

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Your enquiry has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        console.error("❌ Brevo Error:", data);
        setStatus({
          type: "error",
          msg: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus({
        type: "error",
        msg: "Network error occurred while sending your enquiry.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tf-page" style={{ scrollBehavior: "smooth" }}>
      <style>{tfStyles}</style>
      <HeaderThirtyForty />

      {/* ===== HERO / BANNER ===== */}
      {!isMobile ? (
        <section
          id="home"
          className="tf-hero"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="tf-hero-inner">
            <p className="tf-eyebrow tf-light tf-anim">Thirty Forty · Real Estate App</p>
            <h1 className="tf-anim tf-d1">
              Smart Homes for <br />
              <span className="tf-grad-text">Smarter Living.</span>
            </h1>
            <p className="tf-hero-sub tf-anim tf-d2">
              Find your dream home effortlessly with <strong>Thirty Forty</strong> — where
              technology meets comfort.
            </p>
            <div className="tf-hero-ctas tf-anim tf-d3">
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-btn tf-btn-primary"
              >
                <FaGooglePlay size={18} /> Download
                <FaArrowRight size={14} className="tf-arrow" />
              </a>
              <a href="#about" className="tf-btn tf-btn-ghost">
                About Us
              </a>
            </div>
            <div className="tf-hero-chips tf-anim tf-d4">
              {heroChips.map((c) => (
                <span key={c.label} className="tf-chip">
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="home" className="tf-mhero">
          <img
            src={bannerImg}
            alt="Thirty Forty – Smart Homes for Smarter Living"
            loading="eager"
            className="tf-mhero-img"
          />
          <div className="tf-mhero-body tf-anim">
            <p className="tf-eyebrow tf-light" style={{ position: "relative" }}>
              Thirty Forty
            </p>
            <h1>
              Smart Homes for <br />
              <span className="tf-grad-text">Smarter Living.</span>
            </h1>
            <p>
              Find your dream home effortlessly with <strong>Thirty Forty</strong> — where
              technology meets comfort.
            </p>
            <div className="tf-hero-chips">
              {heroChips.map((c) => (
                <span key={c.label} className="tf-chip">
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tf-btn tf-btn-primary tf-download-btn"
            >
              <FaGooglePlay size={18} /> Download
            </a>
          </div>
        </section>
      )}

      {/* ✅ About Section */}
      <section id="about" className="tf-about">
        <div className="tf-container tf-about-grid">
          <div className="tf-about-copy">
            <SectionHead
              eyebrow="About Us"
              title={
                <>
                  Redefining <span className="tf-mark">Real Estate</span>
                </>
              }
              sub="At Thirty Forty, we’re redefining how people discover, buy, and sell properties — integrating digital solutions with expert guidance to make your real estate journey stress-free."
            />
          </div>

          <div className="tf-cards">
            {points.map((item, i) => (
              <div key={i} className="tf-card">
                <span className="tf-card-num" aria-hidden>
                  0{item.number}
                </span>
                <div className="tf-badge">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && <img src={girl} alt="Illustration" className="tf-about-girl" />}
      </section>

      {/* ✅ Why Choose Us Section */}
      <section
        id="whyus"
        className="tf-why"
        style={{ backgroundImage: isMobile ? "none" : `url(${phoneMockup})` }}
      >
        <div className="tf-container tf-why-grid">
          <div className="tf-why-spacer" />
          <div className="tf-why-panel">
            <SectionHead
              eyebrow="Why Us"
              title={
                <>
                  Why Choose <span className="tf-mark">Us</span>
                </>
              }
            />
            <div className="tf-why-list" style={{ marginTop: 18 }}>
              {points.map((p, i) => (
                <div key={i} className="tf-why-item">
                  <div className="tf-why-num" aria-hidden>
                    0{p.number}
                  </div>
                  <div>
                    <h3>
                      {isMobile ? p.icon : null}
                      {p.title}
                    </h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section id="faq" className="tf-faq">
        <div className="tf-faq-head">
          <SectionHead
            center
            eyebrow="FAQ's"
            title={
              <>
                Frequently Asked <span className="tf-mark">Questions</span>
              </>
            }
          />
        </div>

        <div className="tf-faq-list">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`tf-faq-item${open ? " tf-open" : ""}`}>
                <button
                  type="button"
                  className="tf-faq-q"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={open}
                  aria-controls={`tf-faq-a-${i}`}
                >
                  <h3>{faq.question}</h3>
                  <span className="tf-faq-icon" aria-hidden>
                    <FaPlus size={13} />
                  </span>
                </button>
                <div className="tf-faq-a" id={`tf-faq-a-${i}`} role="region">
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="tf-contact">
        <img src={contactImg} alt="" aria-hidden className="tf-contact-deco" />
        <div className="tf-container tf-contact-shell">
          <div className="tf-contact-info">
            <p className="tf-eyebrow tf-light" style={{ position: "relative", zIndex: 1 }}>
              Contact
            </p>
            <h2 className="tf-contact-title">
              Get in <span className="tf-grad-text">Touch</span>
            </h2>
            <div className="tf-contact-items">
              <div className="tf-info">
                <span className="tf-badge">
                  <FaMapMarkerAlt size={18} />
                </span>
                <div>
                  <h3>Address</h3>
                  <p>#36 A-WING, 2ND MAIN, SRINAGARA BADAVANE, SRINAGARA, MYSORE-570008</p>
                </div>
              </div>
              <div className="tf-info">
                <span className="tf-badge">
                  <FaPhoneAlt size={17} />
                </span>
                <div>
                  <h3>Call</h3>
                  <p>
                    <a href="tel:+917349579436">+91 73495 79436</a>
                  </p>
                </div>
              </div>
              <div className="tf-info">
                <span className="tf-badge">
                  <FaEnvelope size={17} />
                </span>
                <div>
                  <h3>Mail</h3>
                  <p>
                    <a href="mailto:support@30forty.in">support@30forty.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tf-contact-form">
            <h2>Send Us a Message</h2>
            <div className="tf-rule" />

            {status.msg ? (
              <div
                role="alert"
                className={`tf-status ${status.type === "success" ? "tf-ok" : "tf-err"}`}
              >
                {status.type === "success" ? <FaCheckCircle size={16} /> : null}
                {status.msg}
              </div>
            ) : null}

            <form className="tf-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                style={{ display: "none" }}
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="tf-input tf-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Mail *"
                value={formData.email}
                onChange={handleChange}
                required
                className="tf-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="tf-input"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={handleChange}
                className="tf-input tf-full"
              />
              <textarea
                name="message"
                placeholder="Message..."
                rows={isMobile ? 4 : 5}
                value={formData.message}
                onChange={handleChange}
                required
                className="tf-input tf-full"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="tf-btn tf-btn-primary tf-submit tf-full"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane size={15} /> Send Now
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Download Section */}
      <section
        id="download"
        className="tf-download"
        style={{ backgroundImage: `url(${downloadBg})` }}
      >
        <div className="tf-container tf-download-inner">
          <p className="tf-eyebrow tf-light">Get the App</p>
          <h2>
            Apps Available for <span className="tf-yel">All Devices</span>
          </h2>
          <div className="tf-stores">
            <a href="#" className="tf-store">
              <img src={appStore} alt="App Store" style={{ height: isMobile ? 38 : 52 }} />
            </a>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tf-store"
            >
              <img src={playStore} alt="Google Play" style={{ height: isMobile ? 38 : 52 }} />
            </a>
          </div>
        </div>
      </section>

      <FooterThirtyForty />
    </div>
  );
}

export default Home;
