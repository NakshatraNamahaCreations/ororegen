// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import OurAppPage from "./pages/OurAppPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ThirtyForty from "./30forty/Home";
import SellMyTimePage from "./sellmytime/Home";
import ThirtyFortyPage from "./30forty/Home";
import StayFinderPage from "./app/StayFinderPage";
import PrivacyPolicy from "./app/PrivacyPolicy";
import PrivacyPolicyore from "./pages/PrivacyPolicy";
import PrivacyPolicythirty from "./30forty/Privacy Policy";

 // ✅ make sure path is correct
import Navbar from "./app/Navbar";
import FooterStay from "./app/FooterStay";
import RefundPolicy from "./app/RefundPolicy";
import RefundPolicythirty from "./30forty/RefundPolicy";
import TermsAndConditions from "./app/TermsAndConditions";
import TermsAndCondition from "./pages/TermsAndConditions";
import TermsAndConditionsthirty from "./30forty/TermsAndConditions";
import FooterThirtyForty from "./30forty/FooterThirtyForty";
import HeaderThirtyForty from "./30forty/HeaderThirtyForty";
import Footersellmytime from "./sellmytime/Footersellmytime";
import Headersellmytime from "./sellmytime/Headersellmytime";

import Refundsellmytime from "./sellmytime/RefundPolicy";
import Termsandconditionssellmytime from './sellmytime/TermsAndConditions';
import Privacypolicysellmytime from './sellmytime/PrivacyPolicy';
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
          <Route
          path="/"
          element={
            <>
              <Header />
              <ThirtyForty />
              <Footer />
            </>
          }
        />
      <Route
          path="/ororegen/pricavy-policy"
          element={
            <>
              <Header />
              <PrivacyPolicyore />
              <Footer />
            </>
          }
        />
          <Route
          path="/ororegen/terms-and-conditions"
          element={
            <>
              <Header />
              <TermsAndCondition />
              <Footer />
            </>
          }
        />
        {/* Multi Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apps" element={<OurAppPage />} />
        <Route path="/apps/sellmytime" element={<SellMyTimePage />} />
        <Route path="/apps/30forty" element={<ThirtyFortyPage />} />
        <Route path="/apps/stayfinder" element={<StayFinderPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Privacy Policy Page */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <FooterStay />
            </>
          }
        />
           {/* ✅ Refund Policy Page */}
        <Route
          path="/refund-policy"
          element={
            <>
              <Navbar />
              <RefundPolicy />
              <FooterStay />
            </>
          }
        />
        <Route
  path="/terms-and-conditions"
  element={
    <>
      <Navbar />
      <TermsAndConditions />
      <FooterStay />
    </>
  }
/>

        <Route
  path="/30forty/terms-and-conditions"
  element={
    <>
      <HeaderThirtyForty />
      <TermsAndConditionsthirty />
      <FooterThirtyForty />
    </>
  }
/>
        <Route
  path="/30forty/privacy-policy"
  element={
    <>
      <HeaderThirtyForty />
      <PrivacyPolicythirty />
      <FooterThirtyForty />
    </>
  }
/>
        <Route
  path="/30forty/refund-policy"
  element={
    <>
      <HeaderThirtyForty />
      <RefundPolicythirty />
      <FooterThirtyForty />
    </>
  }
/>

        <Route
  path="/sellmytime/refund-policy"
  element={
    <>
      <Headersellmytime />
      <Refundsellmytime />
      <Footersellmytime />
    </>
  }
/>
       <Route
  path="/sellmytime/privacy-policy"
  element={
    <>
      <Headersellmytime />
      <Privacypolicysellmytime />
      <Footersellmytime />
    </>
  }
/>
       <Route
  path="/sellmytime/terms-and-conditions"
  element={
    <>
      <Headersellmytime />
      <Termsandconditionssellmytime />
      <Footersellmytime />
    </>
  }
/>
      </Routes>
      
    </Router>
  );
}

export default App;
