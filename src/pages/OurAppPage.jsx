import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThirtyForty from "./ThirtyForty";
import StayFinder from "./StayFinder";
import SellMyTime from "./SellMyTime";
import Masterji from "./Masterji";
import AppsSection from "./AppsSection";
import bannerImg from "../assets/bannermobile.png"; // banner image

const OurAppPage = () => {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1 style={{color:'white'}}>OUR APPS</h1>
        </div>
      </div>

      <main>
        <ThirtyForty />
        <StayFinder />
        <SellMyTime />
        <Masterji />
        <AppsSection />
      </main>

      <Footer />
    </>
  );
};

export default OurAppPage;
