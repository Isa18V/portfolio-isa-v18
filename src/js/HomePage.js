import React from "react";
import "../css/HomePage.css";
import isa from "../img/isa.jpg";

const homePageArrays = [
  { content: "Hello, it`s me Isabel Voican" },
  { content: "I`m a Front-End developer" },
  {
    content:
      "I'm excited to share a bit about myself with you. Kindness, learning, and staying motivated are the core pillars of my journey. With a heart that overflows with compassion, I strive to make a positive impact in the lives of those around me.",
  },
  { content: "Download CV" },
];
export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      {/* start row */}
      <div className="row">
        <div className="col-md-6 homeContent ">
          <div className="isaImageContainer">
            <img className="isaImage" src={isa} alt="imgisa" />
          </div>
        </div>
      </div>

      {/* end row */}
    </div>
  );
}
