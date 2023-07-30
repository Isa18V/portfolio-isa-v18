import React from "react";
import "../css/AboutPage.css";
import bimoji from "../img/bitmoji.png";

const aboutPageArrays = [
  {
    title1: "About",
    title2: "Me",
    content:
      "I'm Isabel Voican, a front-end developer with mastery in HTML, CSS, JavaScript, and React. I prioritize creating visually stunning, user-friendly web experiences and staying ahead of trends through continuous learning. Committed to innovation and armed with a strong work ethic, I'm ready to contribute my skills to impactful projects in the ever-evolving world of web development. Let's collaborate and make a lasting impact together!",
  },
];

export default function AboutPage() {
  return (
    <div className="AboutPage" id="about">
      <h2 data-aos="fade-right" data-aos-duration="1000">
        {aboutPageArrays[0].title1}{" "}
        <span className="beige">{aboutPageArrays[0].title2}</span>
      </h2>
      <div className="row">
        <div
          className="col-md-6 aboutContent"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p>{aboutPageArrays[0].content}</p>
        </div>
        <div className="col-md-6 aboutContent">
          <div
            className="bitmojiImageContainer"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img className="bitmojiImage" src={bimoji} alt="isaBitmoji" />
          </div>
        </div>
      </div>
    </div>
  );
}
