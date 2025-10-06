

// import React, { useState } from "react";
// import Footersellmytime from "./Footersellmytime";
// import Headersellmytime from "./Headersellmytime";
// import bannerImg from "../assets/sellmytimebanner.jpg";
// import aboutImage from "../assets/sellmytimeabout.png";
// import appStore from "../assets/appstore.webp";
// import googlePlay from "../assets/playstore.webp";
// import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
// import client1 from "../assets/client1.jpg";
// import client2 from "../assets/client2.jpg";
// import client3 from "../assets/client3.jpg";
// import contactImg from "../assets/sellmytimecontact.png";
// import bannerImgs from "../assets/sellmytimecontactdownload.png";
// import appStores from "../assets/appstore.webp";
// import playStore from "../assets/playstore.webp";

// function Home() {
//   const features = [
//     {
//       id: "01",
//       icon: <FaLightbulb />,
//       title: "Unique Concept",
//       text: "Unlike traditional dating apps, we let users offer and book time. It’s authentic, time-based connection.",
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
//         "NetworkX is a digital platform that allows professionals to offer their time, skills, and expertise to clients on an hourly basis. It bridges the gap between experts and users seeking personalized guidance, mentorship, or services.",
//     },
//     {
//       question: "2. How do I become a consultant or expert on NetworkX?",
//       answer:
//         "Simply register on the app, create your professional profile, set your hourly availability, and list your areas of expertise. Once verified, clients can start booking your time directly.",
//     },
//     {
//       question: "3. How do users book a session?",
//       answer:
//         "Users can browse verified experts, select a service, view available time slots, and book an appointment instantly using the in-app scheduling and secure payment system.",
//     },
//     {
//       question: "4. What kind of experts can join NetworkX?",
//       answer:
//         "Anyone with valuable skills can join — from business consultants and educators to fitness trainers, designers, or life coaches. If your time and expertise can help others, NetworkX is the right place for you.",
//     },
//     {
//       question: "5. How does payment work?",
//       answer:
//         "All payments are processed securely through the app. Clients pay based on booked hours, and experts receive payouts directly to their registered bank account or wallet after session completion.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);
//   const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

//   const inputStyle = {
//     padding: "12px 15px",
//     border: "1px solid #ddd",
//     borderRadius: "6px",
//     fontSize: "14px",
//     outline: "none",
//   };

//   return (
//     <div style={{ scrollBehavior: "smooth" }}>
//       <Headersellmytime />

//       {/* Hero Section */}
// <section
//   id="home"
//   style={{
//     width: "100%",
//     minHeight: "100vh",
//     backgroundImage: `url(${bannerImg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "80px 100px",
//     fontFamily: "'Poppins', sans-serif",
//     position: "relative",
//   }}
// >
//   {/* ✅ Text Block */}
//   <div style={{ flex: 1, maxWidth: "50%", color: "#000" }}>
//     <h1
//       style={{
//         fontSize: "48px",
//         fontWeight: "700",
//         lineHeight: "1.2",
//         marginBottom: "20px",
//       }}
//     >
//      Book Time. Share Knowledge. <span style={{ color: "#ff4500" }}></span>{" "}
//       <span style={{ color: "#ff4500" }}>Grow Together.</span> 
//     </h1>

//     <p
//       style={{
//         fontSize: "16px",
//         lineHeight: "1.7",
//         marginBottom: "30px",
//         color: "#333",
//       }}
//     >
//       From mentors to creators, NetworkX makes it effortless to connect, collaborate, and grow through time-based services.
//     </p>

//     <div
//       style={{
//         display: "flex",
//         gap: "20px",
//         flexWrap: "wrap",
//       }}
//     >
//       <a href="#playStore">
//         <img src={googlePlay} alt="Google Play" style={{ height: "55px" }} />
//       </a>
//       <a href="#appstore">
//         <img src={appStore} alt="App Store" style={{ height: "55px" }} />
//       </a>
//     </div>
//   </div>

//   {/* ✅ Responsive Styles */}
//   <style>
//     {`
//       /* 🔹 Small & Medium Screens */
//       @media (max-width: 992px) {
//         #home {
//           flex-direction: column-reverse; /* Text below, banner above */
//           padding: 60px 25px;
//           align-items: flex-start; /* Left align text block */
//           justify-content: flex-start;
//           text-align: left;
//         }

//         #home::before {
//           content: "";
//           display: block;
//           width: 100%;
//           height: 300px;
//           background-image: url(${bannerImg});
//           background-size: cover;
//           background-position: center;
//           border-radius: 12px;
//           margin-bottom: 40px;
//         }

//         #home > div {
//           max-width: 100% !important;
//           text-align: left !important;
//         }

//         #home h1 {
//           font-size: 30px !important;
//           line-height: 1.4 !important;
//           color: #111;
//           margin-bottom: 15px;
//         }

//         #home p {
//           font-size: 15px !important;
//           color: #444;
//           margin-bottom: 25px;
//           max-width: 95%;
//         }

//         #home a img {
//           height: 48px !important;
//         }
//       }

//       /* 🔹 Extra Small Screens (Phones) */
//       @media (max-width: 600px) {
//         #home {
//           padding: 45px 20px;
//           align-items: flex-start;
//           text-align: left;
//         }

//         #home::before {
//           height: 220px; /* Smaller banner */
//           border-radius: 10px;
//           margin-bottom: 30px;
//            margin-left:-200px;
//         }

//         #home h1 {
//           font-size: 20px !important;
//           line-height: 1.4 !important;
//           margin-bottom: 12px;
//           margin-left:-100px;
//         }

//         #home p {
//           font-size: 14px !important;
//           line-height: 1.6;
//           color: #333;
//           margin-bottom: 20px;
//            margin-left:-100px;
//         }

//         #home a img {
//     height: 40px !important;
//     margin-right: -20px; /* ✅ gap between buttons */
//   }

//   #home a:last-child img {
//     margin-right: 50px; /* ✅ remove extra space at end */
//   }

//         #home div {
//           text-align: left !important;
//         }
//       }
//     `}
//   </style>
// </section>






//       {/* About Section */}
//     <section
//   id="about"
//   style={{
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     alignItems: "center",
//     gap: "50px",
//     padding: "80px 60px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     fontFamily: "'Poppins', sans-serif",
//   }}
// >
//   <div>
//     <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", color: "#000" }}>
//       Turn Your Expertise  <span style={{ color: "#ff6600" }}>Into Income.</span>
//     </h2>
//     <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
//     NetworkX is built on a simple idea — time is the most valuable currency.
// We connect professionals, creators, and learners through a seamless platform that values every moment shared.
//     </p>
//     <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333" }}>
//      Our mission is to make knowledge accessible, flexible, and rewarding for everyone.
// With trust, transparency, and innovation at its core, NetworkX redefines how people connect and earn in the digital age.
//     </p>
//   </div>
//   <div style={{ textAlign: "center" }}>
//     <img src={aboutImage} alt="SellMyTime About" style={{ width: "100%", maxWidth: "420px" }} />
//   </div>

//   {/* 🔹 Responsive Styles */}
//   <style>
//     {`
//       @media (max-width: 768px) {
//         #about {
//           grid-template-columns: 1fr !important; /* ✅ single column */
//           text-align: center; 
//           padding: 40px 20px;
//         }

//         #about img {
//           margin-top: 25px;
//           max-width: 300px;
//           width: 80%;
//         }

//         #about div:first-child {
//           order: 2; /* ✅ makes text appear below the image */
//         }

//         #about div:last-child {
//           order: 1; /* ✅ makes image appear above the text */
//         }
//       }
//     `}
//   </style>
// </section>


//       {/* Why Choose Us */}
//       <section
//         id="why-choose-us"
//         style={{
//           backgroundColor: "#000",
//           color: "#fff",
//           padding: "80px 40px",
//           textAlign: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <div style={{ marginBottom: "50px" }}>
//           <span
//             style={{
//               backgroundColor: "#ff6600",
//               color: "#fff",
//               padding: "6px 14px",
//               borderRadius: "20px",
//               fontSize: "13px",
//               fontWeight: "600",
//               letterSpacing: "1px",
//             }}
//           >
//             WHY USE SELL MY TIME
//           </span>
//           <h2 style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px" }}>Why choose us</h2>
//         </div>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "25px",
//             maxWidth: "1100px",
//             margin: "0 auto",
//           }}
//         >
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               style={{
//                 background: "#111",
//                 padding: "40px 25px",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
//                 transition: "transform 0.3s",
//               }}
//             >
//               <div
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   borderRadius: "50%",
//                   backgroundColor: "#ff6600",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "22px",
//                   margin: "0 auto 20px",
//                 }}
//               >
//                 {feature.icon}
//               </div>
//               <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>{feature.title}</h3>
//               <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "20px" }}>{feature.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section
//         id="faq"
//         style={{
//           background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
//           padding: "80px 20px",
//           textAlign: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px", color: "#000" }}>
//           Frequently Asked Questions
//         </h2>
//         <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               onClick={() => toggleFAQ(idx)}
//               style={{
//                 background: "#fff",
//                 borderRadius: "8px",
//                 marginBottom: "15px",
//                 padding: "18px 20px",
//                 cursor: "pointer",
//                 border: "1px solid #f7d58c",
//                 boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
//               }}
//             >
//               <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
//                 {faq.question}
//                 <span style={{ color: "#ff6600" }}>{activeIndex === idx ? "▲" : "▼"}</span>
//               </div>
//               {activeIndex === idx && (
//                 <p style={{ marginTop: "12px", fontSize: "14px", color: "#555" }}>{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact */}
//   <section
//   id="contact"
//   style={{
//     padding: "80px 40px",
//     backgroundColor: "#fff",
//   }}
// >
//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       alignItems: "center",
//       gap: "60px",
//       maxWidth: "1100px",
//       margin: "0 auto",
//     }}
//   >
//     <div style={{ textAlign: "center" }}>
//       <img src={contactImg} alt="Contact" style={{ maxWidth: "100%" }} />
//     </div>

//     <div>
//       <h2 style={{ color: "#ff6600", fontSize: "28px", fontWeight: "700" }}>Get In Touch</h2>
//       <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//         <input type="text" placeholder="Name" style={inputStyle} required />
//         <input type="email" placeholder="Email" style={inputStyle} required />
//         <input type="tel" placeholder="Phone" style={inputStyle} required />
//         <textarea
//           placeholder="Message"
//           rows="4"
//           style={{ ...inputStyle, resize: "none" }}
//         ></textarea>
//         <button
//           type="submit"
//           style={{
//             background: "linear-gradient(to right, #ff6600, #ff4b5c)",
//             color: "#fff",
//             padding: "12px 20px",
//             border: "none",
//             borderRadius: "6px",
//             fontWeight: "600",
//           }}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   </div>

//   {/* ✅ Responsive Styles */}
//   <style>
//     {`
//       @media (max-width: 992px) {
//         #contact > div {
//           grid-template-columns: 1fr !important; /* ✅ stack vertically */
//           text-align: center;
//           gap: 40px;
//         }

//         #contact img {
//           max-width: 80% !important; /* ✅ shrink slightly */
//           margin: 0 auto;
//         }

//         #contact h2 {
//           text-align: center !important;
//           font-size: 24px !important;
//         }

//         #contact form {
//           width: 100%;
//           max-width: 400px;
//           margin: 0 auto; /* ✅ center the form */
//         }
//       }

//       @media (max-width: 600px) {
//         #contact {
//           padding: 50px 20px;
//         }

//         #contact img {
//           max-width: 100% !important;
//         }

//         #contact form {
//           width: 100%;
//         }

//         #contact input,
//         #contact textarea {
//           font-size: 14px !important;
//         }

//         #contact button {
//           padding: 10px 16px !important;
//         }
//       }
//     `}
//   </style>
// </section>


//       {/* Download */}
//       <section
//         id="download"
//         style={{
//           backgroundImage: `url(${bannerImgs})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "150px 60px",
//           borderRadius: "px",
//           maxWidth: "1800px",
//           marginBottom:'100px',
//         }}
//       >
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
//           <div style={{ color: "#000", paddingLeft: "140px" }}>
//             <h2 style={{ fontSize: "30px", fontWeight: "700", lineHeight: "1.3" }}>
//               Download app to start <br />
//               <span style={{ color: "#fff" }}>meaningful</span>{" "}
//               <span style={{ color: "#ff6600" }}>connections</span>
//             </h2>
//             <div style={{ display: "flex", gap: "15px", marginTop: "20px", flexWrap: "wrap" }}>
//               <a href="#appstore"><img src={appStores} alt="App Store" style={{ height: "50px" }} /></a>
//               <a href="#playstore"><img src={playStore} alt="Google Play" style={{ height: "50px" }} /></a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footersellmytime />

//       {/* 🔹 Responsive Styles */}
//       <style>
//         {`
//           @media (max-width: 992px) {
//             #home {
//               flex-direction: column;
//               padding: 100px 30px;
//               text-align: center;
//             }

//             #home h1 {
//               font-size: 34px !important;
//               line-height: 1.3 !important;
//             }

//             #home p {
//               font-size: 15px !important;
//               margin-bottom: 20px !important;
//             }

//             #home > div {
//               max-width: 100% !important;
//             }

//             #about {
//               grid-template-columns: 1fr;
//               text-align: center;
//               padding: 60px 20px;
//             }

//             #about img {
//               margin-top: 25px;
//               max-width: 300px;
//               width: 80%;
//             }

//             #contact {
//               grid-template-columns: 1fr;
//               text-align: center;
//               padding: 60px 20px;
//             }

//             #download {
//               grid-template-columns: 1fr;
//               text-align: center;
//               padding: 60px 20px;
//             }

//             #download div {
//               padding-left: 0 !important;
//             }
//           }

//           @media (max-width: 600px) {
//             #home {
//               padding: 80px 20px;
//               min-height: auto;
//             }

//             #home h1 {
//               font-size: 26px !important;
//               line-height: 1.3 !important;
//             }

//             #home p {
//               font-size: 14px !important;
//             }

//             #home a img {
//               height: 45px !important;
//             }

//             #about,
//             #faq,
//             #contact,
//             #download {
//               padding: 50px 20px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from "react";
import Footersellmytime from "./Footersellmytime";
import Headersellmytime from "./Headersellmytime";
import bannerImg from "../assets/network.jpg";
import aboutImage from "../assets/networkmobile.jpg";
import appStore from "../assets/appstore.webp";
import googlePlay from "../assets/playstore.webp";
import { FaLightbulb, FaDollarSign, FaShieldAlt, FaGlobe } from "react-icons/fa";
import contactImg from "../assets/enquirycontact.jpg";
import bannerImgs from "../assets/sellmytimecontactdownload.png";
import appStores from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Brevo Integration
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
          sender: {
            email: "ororegencompanies@gmail.com",
            name: "NetworkX Website",
          },
          to: [
            {
              email: "ororegencompanies@gmail.com",
              name: "Oro Regen Admin",
            },
          ],
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
    {
      id: "01",
      icon: <FaLightbulb />,
      title: "Unique Concept",
      text: "Unlike traditional apps, we let users offer and book time. It’s authentic, time-based connection.",
    },
    {
      id: "02",
      icon: <FaDollarSign />,
      title: "Empower Yourself",
      text: "Set your own hourly rate. Meet people who value you — and your time.",
    },
    {
      id: "03",
      icon: <FaShieldAlt />,
      title: "Verified Users Only",
      text: "All users go through identity and background checks to ensure safety.",
    },
    {
      id: "04",
      icon: <FaGlobe />,
      title: "Local & Global Reach",
      text: "Find companions in your city or explore connections while you travel.",
    },
  ];

  const faqs = [
    {
      question: "1. What is NetworkX?",
      answer:
        "NetworkX is a digital platform that allows professionals to offer their time and expertise to clients on an hourly basis.",
    },
    {
      question: "2. How do I become a consultant or expert?",
      answer:
        "Register on the app, create your profile, set hourly rates, and get verified. Clients can book you directly.",
    },
    {
      question: "3. How do users book sessions?",
      answer:
        "Users can browse experts, select a service, and book sessions instantly using our scheduling system.",
    },
    {
      question: "4. Who can join NetworkX?",
      answer:
        "Anyone with valuable skills — business mentors, teachers, fitness trainers, designers, and more.",
    },
    {
      question: "5. How are payments handled?",
      answer:
        "All payments are secure and processed via the app. Experts get payouts after each session.",
    },
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
    <div style={{ scrollBehavior: "smooth" }}>
      <Headersellmytime />

      {/* ✅ Hero Section */}
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
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div style={{ flex: 1, maxWidth: "50%", color: "#000" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Book Time. Share Knowledge.{" "}
            <span style={{ color: "#24428B" }}>Grow Together.</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "30px",
              color: "#333",
            }}
          >
            From mentors to creators, NetworkX makes it effortless to connect, collaborate, and grow through time-based services.
          </p>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#playStore">
              <img src={googlePlay} alt="Google Play" style={{ height: "55px" }} />
            </a>
            <a href="#appstore">
              <img src={appStore} alt="App Store" style={{ height: "55px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "50px",
          padding: "80px 60px",
          maxWidth: "1200px",
          margin: "0 auto",
          
        }}
      >
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px",  fontFamily: '"Poppins", sans-serif',}}>
            Turn Your Expertise <span style={{ color: "#24428B",  fontFamily: '"Poppins", sans-serif', }}>Into Income.</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "20px",  fontFamily: '"Poppins", sans-serif', }}>
            NetworkX is built on a simple idea — time is the most valuable currency. We connect professionals, creators, and learners through a seamless platform that values every moment shared.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our mission is to make knowledge accessible, flexible, and rewarding for everyone.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={aboutImage} alt="About" style={{ width: "100%", maxWidth: "600px" }} />
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section
        id="why-choose-us"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Why Choose Us</h2>
        <div
       style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "0 auto",
  fontFamily: '"Poppins", sans-serif',
}}

        >
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                background: "#111",
                padding: "40px 25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#24428B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  margin: "0 auto 20px",
                    fontFamily: '"Poppins", sans-serif',
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700" }}>{feature.title}</h3>
              <p style={{ fontSize: "14px", color: "#ccc" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ Section */}
      <section
        id="faq"
        style={{
          background: "linear-gradient(to bottom, #fff8e7, #fff1c1)",
          padding: "80px 20px",
          textAlign: "center",
            fontFamily: '"Poppins", sans-serif',
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              style={{
                background: "#fff",
                borderRadius: "8px",
                marginBottom: "15px",
                padding: "18px 20px",
                border: "1px solid #f7d58c",
                cursor: "pointer",
                  fontFamily: '"Poppins", sans-serif',
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between",  fontFamily: '"Poppins", sans-serif', }}>
                {faq.question}
                <span style={{ color: "#24428B" ,  fontFamily: '"Poppins", sans-serif',}}>{activeIndex === idx ? "▲" : "▼"}</span>
              </div>
              {activeIndex === idx && (
                <p style={{ marginTop: "10px", fontSize: "14px" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>


         <section
        id="download"
        style={{
          backgroundImage: `url(${bannerImgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 60px",
          marginBottom: "100px",
          marginTop:'70px',
          borderRadius:'30px',
            fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div style={{ color: "#000", paddingLeft: "140px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "700", lineHeight: "1.3" }}>
              Download app to start <br />
              <span style={{ color: "#fff" }}>meaningful</span>{" "}
              <span style={{ color: "#24428B" }}>connections</span>
            </h2>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <a href="#appstore">
                <img src={appStores} alt="App Store" style={{ height: "50px" }} />
              </a>
              <a href="#playstore">
                <img src={playStore} alt="Google Play" style={{ height: "50px" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section with Brevo Integration */}
      <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
              fontFamily: '"Poppins", sans-serif',
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={contactImg} alt="Contact" style={{ maxWidth: "100%" }} />
          </div>

          <div>
            <h2 style={{ color: "#24428B", fontSize: "28px", fontWeight: "700",  fontFamily: '"Poppins", sans-serif', }}>
              Get In Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "none" }}
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "linear-gradient(to right, #24428B, #24428B)",
                  color: "#fff",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                    fontFamily: '"Poppins", sans-serif',
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Download Section */}
   

      <Footersellmytime />
    </div>
  );
}

export default Home;
