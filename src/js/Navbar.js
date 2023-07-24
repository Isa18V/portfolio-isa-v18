import React from "react";
import "../css/Navbar.css";

let navbarArray = [
  { img: "img here" },
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Services", link: "/" },
  { name: "Portfolio", link: "/" },
  { name: "Contact", link: "/" },
];
export default function Navbar() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg colorNavbar">
        <div className="container-fluid">
          {/* here needs to be my image */}
          <a className="navbar-brand" href="#">
            {navbarArray[0].img}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/*  make forloop */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
