import React from "react";
import "../css/HomePage.css";
import isa from "../img/isa.jpeg";

const homePageArrays = [
  {
    title: "Hello, it`s me ",
    name: "Isabel Voican",
    skill: "I`m a Front-End developer",
    content:
      "I'm excited to share a bit about myself with you. Kindness, learning, and staying motivated are the core pillars of my journey. With a heart that overflows with compassion, I strive to make a positive impact in the lives of those around me.",
    download: "Download CV",
  },
];

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      {/* start row */}
      <div className="row">
        <div className="col-md-6 homeContent">
          <div className="isaImageContainer ">
            <img className="isaImage " src={isa} alt="imgisa" />
          </div>
        </div>

        {/* start 2 column */}
        <div className="col-md-6 homeContent">
          <h2>{homePageArrays[0].title}</h2>
          <h2>{homePageArrays[0].name}</h2>
          <h3>
            I`m a <span className="beige">Front-End developer</span>
          </h3>
          <p>{homePageArrays[0].content}</p>
          <div className="buttonContainer">
            <button className="buttonHome buttonHome1">
              {homePageArrays[0].download}
            </button>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
}
