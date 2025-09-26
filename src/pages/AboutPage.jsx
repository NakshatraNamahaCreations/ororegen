import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import MissionVision from "./MissionVision";
import "./AboutPage.css";
import bannerImg from "../assets/aboutbanner.webp"; // banner image

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <div
        className="page-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <h1 style={{color:'white'}}>ABOUT US</h1>
        </div>
      </div>

      <main>
        <WhoWeAre />
        <WhyChooseUs />
        <MissionVision />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
