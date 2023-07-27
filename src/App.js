import React from "react";
import "./App.css";
import Navbar from "./js/Navbar";
import UpArrowIcon from "./js/UpArrowIcon";
import HomePage from "./js/HomePage";
import AboutPage from "./js/AboutPage";
import ServicesPage from "./js/ServicesPage";
import PortfolioPage from "./js/PortfolioPage";
import ContactPage from "./js/ContactPage";

export default function App() {
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
        <ContactPage />
      </div>
    </div>
  );
}
