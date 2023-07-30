import React from "react";
import "../css/HomePage.css";
import isa from "../img/isa.png";
const homePageArrays = [
  {
    title: "Hello, it`s me ",
    name: "Isabel Voican",
    skill: "I`m a Front-End developer",
    content:
      "I'm excited to share a bit about myself with you. Kindness, learning, and staying motivated are the core pillars of my journey. With a heart that overflows with compassion, I strive to make a positive impact in the lives of those around me.",
    download: "Download CV",
    downloadUrl: "/pdfs/IsaCV.pdf",
  },
];

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      {/* start row */}
      <div className="row">
        <div className="col-md-6 homeContent">
          <div
            className="isaImageContainer"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img className="isaImage " src={isa} alt="imgisa" />
          </div>
        </div>

        {/* start 2 column */}
        <div
          className="col-md-6 homeContent"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="title">{homePageArrays[0].title}</h2>
          <h2>{homePageArrays[0].name}</h2>
          <h3>
            I`m a <span className="beige">Front-End developer</span>
          </h3>
          <p>{homePageArrays[0].content}</p>
          <div className="buttonContainer">
            <a
              href={homePageArrays[0].downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buttonHome buttonHome1"
              download="/pdfs/IsaCV.pdf"
            >
              {homePageArrays[0].download}
            </a>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
}
