import React from "react";
import "../css/PortfolioPage.css";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card"
      data-aos={project.AOS}
      data-aos-duration={project.durationAOS}
    >
      <img src={project.imageUrl} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a
          className="project-link-git"
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="project-link-netlefy"
          href={project.netlifyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
