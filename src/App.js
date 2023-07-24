import React from "react";
import "./App.css";
import Navbar from "./js/Navbar";
import HomePage from "./js/HomePage";
import AboutPage from "./js/AboutPage";
import ServicesPage from "./js/ServicesPage";
import PortfolioPage from "./js/PortfolioPage";
import ContactPage from "./js/ContactPage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <PortfolioPage />
        <ContactPage />
      </header>
    </div>
  );
}
