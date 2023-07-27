import React from "react";
import brasov from "../img/brasov.jpg";
import "../css/ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="ServicesPage" id="services">
      <div class="container scroll-1">
        <div class="card">
          <div class="card__image">
            <img src={brasov}></img>
          </div>
          <div class="card__content">
            <span class="card__title">Hello</span>
            <p class="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__image"></div>
          <div class="card__content">
            <span class="card__title">Hello</span>
            <p class="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__image"></div>
          <div class="card__content">
            <span class="card__title">Hello</span>
            <p class="card__describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
