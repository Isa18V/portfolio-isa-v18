import React from "react";
import "../css/PortfolioPage.css";
import ProjectCard from "./ProjectCard";
import dictionaryReactApp from "../img/dictionaryReactApp.jpeg";
import weatherReactApp from "../img/weatherReactApp.jpeg";
import worldClock from "../img/worldClock.jpeg";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Dictionary React App",
      imageUrl: dictionaryReactApp,
      description:
        "Welcome to the Dictionary React App, a project close to my heart. As a dedicated developer, I crafted this interactive web application using React, HTML, and CSS, thoughtfully hosted on GitHub. With a focus on precision and efficiency, the app enables users to access word meanings, synonyms, and antonyms effortlessly.",
      githubLink: "https://github.com/Isa18V/dictionary-react-app",
      netlifyLink: "https://dictionary-react-app-isav18.netlify.app/",
    },
    {
      title: "Weather React App",
      imageUrl: weatherReactApp,
      description:
        "Discover weather conditions with ease using React Weather App. This GitHub repository houses a responsive web application built with React, HTML, CSS, and API integration. Offering real-time weather data for global locations, users can effortlessly search, view current conditions, and access extended forecasts, making it a reliable and interactive weather tool.",
      githubLink: "https://github.com/Isa18V/react-weather-app",
      netlifyLink: "https://weather-react-app-isav18.netlify.app/",
    },
    {
      title: "World Clock",
      imageUrl: worldClock,
      description:
        "World Clock is an elegantly designed web application built using HTML, CSS, and JavaScript. It lets users view real-time time and date information for cities worldwide. With its clean interface and responsive layout, it ensures a seamless experience on any device. Users can easily customize city selections for personalized global time tracking.",
      githubLink: "https://github.com/Isa18V/world-clock",
      netlifyLink: "https://world-clock-iza18v.netlify.app/",
    },
  ];

  return (
    <div className="PortfolioPage" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="project-list">
        <ul className="row">
          {projects.map((project, index) => (
            <li key={index} className="col-md-4">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
