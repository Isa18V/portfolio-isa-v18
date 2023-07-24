import React from "react";
import "./App.css";
import Navbar from "./js/Navbar";
import HomePage from "./js/HomePage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HomePage />
      </header>
    </div>
  );
}
