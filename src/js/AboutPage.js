import React from "react";
import "../css/AboutPage.css";
import bimoji from "../img/bitmoji.png";

const aboutPageArrays = [
  {
    title1: "About",
    title2: "Me",
    content:
      "I'm Isabel Voican, a front-end developer who recently completed an intensive 8-month course. During this immersive program, I mastered HTML, CSS, JavaScript, and responsive design. I also gained expertise in React, building dynamic web applications. The course instilled resilience and a strong work ethic. Now, I'm eager to contribute my skills to innovative projects, creating visually  stunning and user-friendly web experiences. I prioritize continuous learning, staying ahead of trends. Equipped with a solid foundation, I'm confident in my abilities and ready for new opportunities. Let's collaborate and make a lasting impact in the ever-evolving world of  web development.",
  },
];

export default function AboutPage() {
  return (
    <div className="AboutPage" id="about">
      <h2>
        {aboutPageArrays[0].title1}{" "}
        <span className="beige">{aboutPageArrays[0].title2}</span>
      </h2>
      <div className="row">
        <div className="col-md-6 aboutContent">
          <p>{aboutPageArrays[0].content}</p>
        </div>
        <div className="col-md-6 aboutContent">
          <div className="bitmojiImageContainer">
            <img className="bitmojiImage" src={bimoji} alt="isaBitmoji" />
          </div>
        </div>
      </div>
    </div>
  );
}
