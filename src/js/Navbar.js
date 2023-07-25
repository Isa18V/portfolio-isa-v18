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
    <li className="nav-item" key={index}>
      <a
        className="nav-link active"
        aria-current="page"
        href={navbarArray.link}
      >
        {navbarArray.name}
      </a>
    </li>
  ));

  return (
    <div className="navbarContainer">
      <nav className="navbar fixed-top navbar-expand-lg colorNavbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logoIsa} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">{navbarItems}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
