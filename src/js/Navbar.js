import React from "react";
import "../css/Navbar.css";
import logoIsa from "../img/logoisa .png";

const navbarArrays = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const navbarItems = navbarArrays.map((navbarArray, index) => (
    <li key={index}>
      <a href={navbarArray.link}>{navbarArray.name}</a>
    </li>
  ));

  return (
    <div className="navbarContainer">
      <header className="header">
        <div className="logo">
          <a href="#home">
            <img src={logoIsa} alt="Logo" />
          </a>
        </div>
        <div className="navigation">
          <div className="hamburger"></div>
          <ul className="menu">{navbarItems}</ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
