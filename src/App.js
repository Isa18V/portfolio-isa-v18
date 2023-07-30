import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./js/Navbar";
import UpArrowIcon from "./js/UpArrowIcon";
import HomePage from "./js/HomePage";
import AboutPage from "./js/AboutPage";
import ServicesPage from "./js/ServicesPage";
import PortfolioPage from "./js/PortfolioPage";
import ContactPage from "./js/ContactPage";

export default function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="App">
      <div className="appNavbar">
        <Navbar />
      </div>
      <UpArrowIcon />
      <div className="pagesContainer">
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <PortfolioPage />
      </div>
      <ContactPage />
    </div>
  );
}
