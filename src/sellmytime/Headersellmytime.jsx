// import React from "react";
// import logo from "../assets/sellmytime.png"; // ✅ replace with your logo file

// const Headersellmytime = () => {
//   return (
//     <header
//       style={{
//         width: "100%",
//         backgroundColor: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "10px 50px",
//         position: "fixed", // ✅ keeps it at top
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         boxShadow: "0 2px 6px rgba(0,0,0,0.08)", // subtle bottom shadow
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img src={logo} alt="Sell Your Time Logo" style={{ height: "75px" }} />
//       </div>

//       {/* Navigation */}
//       <nav>
//         <ul
//           style={{
//             listStyle: "none",
//             display: "flex",
//             margin: 0,
//             padding: 0,
//             gap: "35px",
//           }}
//         >
//           {["Home", "About Us", "Why Choose Us", "FAQ", "Contact Us"].map(
//             (item, i) => (
//               <li key={i}>
//                 <a
//                   href={
//                     item === "Home"
//                       ? "https://ororegencompanies.in/" // ✅ external link for Home
//                       : `/${item.toLowerCase().replace(/\s+/g, "-")}`
//                   }
//                   style={{
//                     textDecoration: "none",
//                     color: "#000",
//                     fontWeight: "500",
//                     fontSize: "15px",
//                     transition: "color 0.3s",
//                   }}
//                   target={item === "Home" ? "_blank" : "_self"} // ✅ open Home in new tab (optional)
//                   rel={item === "Home" ? "noopener noreferrer" : ""}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")}
//                   onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
//                 >
//                   {item}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>
//       </nav>

//       {/* Download App Button */}
//       <a
//         href="#download"
//         style={{
//           backgroundColor: "#ff4500",
//           color: "#fff",
//           padding: "8px 20px",
//           borderRadius: "5px",
//           fontWeight: "600",
//           textDecoration: "none",
//           fontSize: "14px",
//           transition: "background 0.3s",
//           marginRight: "70px",
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e03e00")}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff4500")}
//       >
//         Download the App
//       </a>
//     </header>
//   );
// };

// export default Headersellmytime;
import React from "react";
import logo from "../assets/sellmytime.png";

const Headersellmytime = () => {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Sell Your Time Logo" style={{ height: "75px" }} />
      </div>

      {/* Navigation */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            gap: "35px",
          }}
        >
          {/* Home goes to external site */}
          <li>
            <a
              href="https://ororegencompanies.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "500",
                fontSize: "15px",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
            >
              Home
            </a>
          </li>

          {/* Internal section links */}
          {[
            { name: "About Us", link: "#about" },
            { name: "Why Choose Us", link: "#why-choose-us" },
            { name: "FAQ", link: "#faq" },
            { name: "Contact Us", link: "#contact" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "15px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ff4500")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Download Button */}
      <a
        href="#download"
        style={{
          backgroundColor: "#ff4500",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: "5px",
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "14px",
          transition: "background 0.3s",
          marginRight: "70px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e03e00")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff4500")}
      >
        Download the App
      </a>
    </header>
  );
};

export default Headersellmytime;
