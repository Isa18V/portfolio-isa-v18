import React from "react";
import brasov from "../img/brasov.jpg";
import "../css/ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="ServicesPage" id="services">
      <div className="container scroll-1">
        <div className="card">
          <div className="card__image"></div>
          <div className="card__content">
            <span className="card__title">Hello</span>
            <p className="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__image"></div>
          <div className="card__content">
            <span className="card__title">Hello</span>
            <p className="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__image"></div>
          <div className="card__content">
            <span className="card__title">Hello</span>
            <p className="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
