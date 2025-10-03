import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SellMyTimePage = () => {
  return (
    <>
      <Header />
      <main className="page">
        <h1>Sell My Time</h1>
        <p>
          Welcome to <strong>SellMyTime</strong>!  
          This app helps you book moments that matter and connect with people by spending quality time.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default SellMyTimePage;
