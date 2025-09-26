// import React from "react";
// import "./Header.css";
// import logo from "../assets/ororegen.jpg";
// import { FaPhone } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Logo */}
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <div className="logo-text">
//             <h2>ORO-REGEN</h2>
      
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="nav-links">
//           <a href="#" className="active">HOME</a>
//           <a href="#">ABOUT US</a>
//           <a href="#">OUR APP</a>
//           <a href="contact">CONTACT US</a>
     
//         </nav>

//         {/* Contact Info */}
//         <div className="contact-info">
//           <FaPhone className="phone-icon" />
//           <div>
//             <small>Have any Questions?</small>
//             <p><strong>+91 78291 25869</strong></p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/ororegen.jpg";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const location = useLocation(); // get current path

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="logo-text">
            <h2>ORO-REGEN</h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            HOME
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            ABOUT US
          </Link>
          <Link
            to="/apps"
            className={location.pathname === "/apps" ? "active" : ""}
          >
            OUR APP
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="contact-info">
          <FaPhone className="phone-icon" />
          <div>
            <small>Have any Questions?</small>
            <p>
              <strong>+91 78291 25869</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
