// import React from "react";
// import logo from "../assets/30fortylogo.webp"; // ✅ update path to your logo

// const HeaderThirtyForty = () => {
//   const navItems = [
//     { name: "Home", link: "https://ororegencompanies.in/", external: true },
//     { name: "About", link: "/about" },
//     { name: "Why us", link: "/why-us" },
//     { name: "FAQ's", link: "/faqs" },
//     { name: "Contact", link: "/contact" },
//   ];

//   return (
//     <header
//       style={{
//         width: "100%",
//         backgroundColor: "black",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "15px 50px",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: 10,
//       }}
//     >
//       {/* Logo */}
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img src={logo} alt="30Forty Logo" style={{ height: "100px" }} />
//       </div>

//       {/* Navigation */}
//       <nav>
//         <ul
//           style={{
//             listStyle: "none",
//             display: "flex",
//             margin: 0,
//             padding: 0,
//             gap: "25px",
//           }}
//         >
//           {navItems.map((item, i) => (
//             <li key={i}>
//               <a
//                 href={item.link}
//                 {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//                 style={{
//                   textDecoration: "none",
//                   color: "#fff",
//                   fontWeight: "600",
//                   fontSize: "15px",
//                   transition: "color 0.3s",
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
//                 onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Download Button */}
//       <a
//         href="#download"
//         style={{
//           backgroundColor: "#d1001f",
//           color: "#fff",
//           padding: "10px 20px",
//           borderRadius: "5px",
//           fontWeight: "600",
//           textDecoration: "none",
//           transition: "background 0.3s",
//           marginRight: "100px",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
//         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
//       >
//         Download App
//       </a>
//     </header>
//   );
// };

// export default HeaderThirtyForty;
import React from "react";
import logo from "../assets/30fortylogo.webp";

const HeaderThirtyForty = () => {
  const navItems = [
    { name: "Home", link: "https://ororegencompanies.in/", external: true },
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#whyus" }, // ✅ corrected ID
    { name: "FAQ's", link: "#faq" },    // ✅ corrected ID
    { name: "Contact", link: "#contact" },
  ];

  // ✅ Smooth scroll for internal links
  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100, // offset for sticky header
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
      }}
    >
      {/* ✅ Logo */}
      <div>
        <img
          src={logo}
          alt="30Forty Logo"
          style={{ height: "80px", cursor: "pointer" }}
          onClick={() => (window.location.href = "https://ororegencompanies.in/")}
        />
      </div>

      {/* ✅ Navigation */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  href={item.link}
                  onClick={(e) => handleSmoothScroll(e, item.link)}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "color 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ffdfdf")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ Download Button */}
      <a
        href="#download"
        onClick={(e) => handleSmoothScroll(e, "#download")}
        style={{
          backgroundColor: "#d1001f",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "5px",
          fontWeight: "600",
          textDecoration: "none",
          marginRight: "70px",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a30018")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#d1001f")}
      >
        Download App
      </a>
    </header>
  );
};

export default HeaderThirtyForty;
