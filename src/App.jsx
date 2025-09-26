

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Banner from "./pages/Banner";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import AboutPage from "./pages/AboutPage";
// import OurAppPage from "./pages/OurAppPage";
// import ContactPage from "./pages/ContactPage";
// import Home from "./pages/Home";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Header />
//               <Home />
       
//               <Footer />
//             </>
//           }
//         />

//         {/* Multi Pages */}
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/apps" element={<OurAppPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import OurAppPage from "./pages/OurAppPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Multi Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apps" element={<OurAppPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
